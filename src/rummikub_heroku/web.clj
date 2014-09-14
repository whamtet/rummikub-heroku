(ns rummikub-heroku.web
  (:require
   [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
   [compojure.handler :refer [site]]
   [compojure.route :as route]
   [clojure.java.io :as io]
   [ring.middleware.stacktrace :as trace]
   [ring.middleware.session :as session]
   [ring.middleware.session.cookie :as cookie]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.basic-authentication :as basic]
   [cemerick.drawbridge :as drawbridge]
   [ring.middleware.edn :as wrap-edn]
   [rummikub-heroku.util :as util]
   [routes.index :as index]
   [environ.core :refer [env]]
   [taoensso.sente :as sente]
   )
  (:require [org.httpkit.server :as httpkit])
  (:require [clojure.core.async :as async :refer [<! >! put! close! go chan go-loop]])
  )

(declare ring-ajax-get-or-ws-handshake ring-ajax-post ch-chsk chsk-send! connected-uids)

(require '[ring.util.response :as response])

(def p #(-> % pr-str println))

(defn random-color []
  [(rand-int 200) (rand-int 200) (rand-int 200)])

(defonce chats (atom []))

(defroutes app
  (GET "/" {{user :user} :session}
       (index/blank-page "web" {"user_atom" (pr-str user)
                                "chat_atom" (pr-str @chats)}))
  (GET "/reset" []
       (assoc (response/redirect "/") :session nil))
  (GET "/test" request
       (-> request pr-str response/response))
  (POST "/add-user" [user]
        (assoc (response/response "done") :session {:user user}))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(defn wrap-app [app]
  ;; TODO: heroku config:add SESSION_SECRET=$RANDOM_16_CHARS
  (let [store (cookie/cookie-store {:key (env :session-secret)})]
    (-> app
        wrap-edn/wrap-edn-params
        (site {:session {:store store}}))))

(defn -main [& [port]]

  (let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
                connected-uids]}
        (sente/make-channel-socket! {})]
    (println "defining functions")
    (def ring-ajax-post                ajax-post-fn)
    (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
    (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
    (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
    (def connected-uids                connected-uids) ; Watchable, read-only atom
    )

  (let [port (Integer. (or port (env :port) 5000))
        server (httpkit/run-server #_jetty/run-jetty (wrap-app #'app) {:port port :join? false})
        go-task
        (util/cancellable-go
         (let [
               {:keys [ring-req event ?reply-fn push-fn]} (<! ch-chsk)
               [code data] event
               ]
           (condp = code
             :rummikub/new-chat
             (let [
                   new-chat data
                   new-chats (swap! chats conj new-chat)
                   new-chats-event [:rummikub/chat-update new-chats]
                   user-id nil
                   ]
               (chsk-send! user-id new-chats-event))
             (println event))))
        ]
    (println "server ready")
    [server go-task]))

        ;; For interactive development:
        ;; (.stop server)
        ;(defonce server (-main))
