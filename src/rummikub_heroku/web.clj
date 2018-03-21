(ns rummikub-heroku.web
  (:require
   [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
   [compojure.handler :refer [site]]
   [compojure.route :as route]
   [clojure.java.io :as io]
   [ring.middleware.stacktrace :as trace]
   [ring.middleware.session :as session]
   [ring.middleware.session.memory :as memory]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.basic-authentication :as basic]
   [cemerick.drawbridge :as drawbridge]
   [ring.middleware.edn :as wrap-edn]
   [rummikub-heroku.util :as util]
   [routes.index :as index]
   [environ.core :refer [env]]
   [taoensso.sente :as sente]
   [taoensso.sente.server-adapters.http-kit      :refer (get-sch-adapter)]
   [ring.util.response :as response])
  (:require [org.httpkit.server :as httpkit])
  (:require [clojure.core.async :as async :refer [<! >! put! close! go chan go-loop]]))

(declare ring-ajax-get-or-ws-handshake ring-ajax-post ch-chsk chsk-send! connected-uids)

(def chats (atom []))

(def tile-colors ["red" "orange" "blue" "black"])

(defonce users (atom []))
(defonce user-index (atom 0))
(defn current-user []
  (if-not (empty? @users)
    (nth @users (mod @user-index (count @users)))))

(defn set-indices [tiles new-tiles user]
  (let [
        get-color #(sort-by (fn [[k {value :value}]] (if (= value ":D") 0 value))
                            (filter (fn [[k {color :color}]] (= % color)) new-tiles))
        [reds oranges blues blacks] (map get-color tile-colors)
        assoc-indices (fn [i tiles k]
                        (into {} (map-indexed (fn [j [key tile]]
                                                [key (assoc tile :i i :j (+ j k) :location user)]) tiles)))
        smart-inc #(if (zero? %) 0 (inc %))
        reds (assoc-indices 0 reds 0)
        oranges (assoc-indices 0 oranges (smart-inc (count reds)))
        blues (assoc-indices 1 blues 0)
        blacks (assoc-indices 1 blacks (smart-inc (count blues)))
        ]
    (merge tiles reds oranges blues blacks)))

(defn allocate-to-player [tiles {user :user}]
  (let [
        new-tiles (take 14 (shuffle (seq (util/value-filter (fn [{location :location}] (= location "pool")) tiles))))
        ]
    (set-indices tiles new-tiles user)))

(defn pick-up [tiles user]
  (let [
        [k {:keys [color value]}] (rand-nth (seq (util/value-filter (fn [{location :location}] (= location "pool")) tiles)))
        top-row (filter (fn [{:keys [location i]}] (and (= location user) (zero? i))) (vals tiles))
        new-j (inc (apply max (map :j top-row)))
        ]
    (if color
      (assoc tiles k {:color color :value value :i 0 :j new-j :location user})
      tiles)))

(defn get-tiles []
  (let [
        init-tiles
        (assoc
          (into {}
                (for [
                      color tile-colors
                      value (range 1 14)
                      ]
                  [(str color " " value)
                   {:location "pool" :value value :color color}]))
          "black :D"
          {:location "pool" :value ":D" :color "black"}
          "red :D"
          {:location "pool" :value ":D" :color "red"})
        allocated-tiles (reduce (fn [tiles user] (allocate-to-player tiles user))
                                init-tiles @users)
        ]
    allocated-tiles))

(defonce tiles (atom (get-tiles)))

(defn sort-tiles [tiles user]
  (let [
        new-tiles (util/value-filter (fn [{location :location}] (= location user)) tiles)
        ]
    (set-indices tiles new-tiles user)))

(defn insert-tile [tiles k new-tile insert-i insert-j user]
  (let [
        tiles (dissoc tiles k)
        insert-i (max (min insert-i 1) 0)
        insert-j (max insert-j 0)
        new-tile (assoc new-tile :i insert-i :j insert-j :location user)
        my-tiles (filter (fn [{location :location}] (= user location)) (vals tiles))

        my-tiles (loop [
                        to-insert new-tile
                        grid (util/key-by (fn [{:keys [i j]}] [i j]) my-tiles)
                        ]
                   (let [
                         {:keys [i j]} to-insert
                         ]
                     (if-let [ejected-tile (grid [i j])]
                       (recur (assoc ejected-tile :j (inc j)) (assoc grid [i j] to-insert))
                       (conj (vals grid) to-insert))))

        my-tiles (util/key-by (fn [{:keys [color value]}] (str color " " value)) my-tiles)
        tiles (merge tiles my-tiles)
        ]
    tiles))

(defn revert-tiles [tiles {user :user}]
  (util/value-map (fn [{location :location :as tile}]
                    (if (= user location)
                      (assoc tile :location "pool")
                      tile)) tiles))

(defn random-color []
  (let [
        p1 (rand-int 255)
        p2 (rand-int 255)
        min (min p1 p2)
        max (max p1 p2)
        ]
    [min (- max min) (- 255 max)]))

(defroutes app
  (GET "/" {{user :user} :session}
       (index/blank-page "web" {"user_atom" (pr-str user)
                                "chat_atom" (pr-str @chats)
                                "tiles_atom" (pr-str @tiles)
                                "current_player" (pr-str (current-user))
                                "users_atom" (pr-str @users)}))
  (GET "/reset" []
       (assoc (response/redirect "/") :session nil))
  (POST "/add-user" [username]
        (let [
              existing-user (some (fn [{user :user :as m}]
                                    (if (= user username)
                                      m)) @users)
              new-user {:user username :color (random-color)}

              new-tiles-event
              (if-not existing-user
                [:rummikub/tiles-update (swap! tiles allocate-to-player new-user)])

              user-id :sente/all-users-without-uid
              new-user-event (if (empty? @users) [:rummikub/new-user new-user])

              update-users-event
              (if-not existing-user [:rummikub/users-update (swap! users conj new-user)])
              ]
          (println (or existing-user new-user))
          (when-not existing-user
            (chsk-send! user-id update-users-event)
            (chsk-send! user-id new-tiles-event))
          (if new-user-event
            (chsk-send! user-id new-user-event))
          (assoc (util/pr-response (or existing-user new-user)) :session {:user (or existing-user new-user)})))
  (GET "/rummikub-backup" []
       {:status 200
        :headers {"Content-Type" "application/edn"}
        :body (pr-str {:users-data @users :tiles-data @tiles})})
  (POST "/restore-backup" [game-data]
        (let [
              {f :tempfile} game-data
              {:keys [users-data tiles-data]} (read-string (slurp f))
              ]
          (reset! users users-data)
          (reset! tiles tiles-data)
          (chsk-send! :sente/all-users-without-uid [:rummikub/users-update users-data])
          (chsk-send! :sente/all-users-without-uid [:rummikub/tiles-update tiles-data])
          (response/response "ok")))

  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(defonce session-map (atom {}))

(defn wrap-app [app]
  (let [store (memory/memory-store session-map)]
    (-> app
        wrap-edn/wrap-edn-params
        (site {:session {:store store :cookie-attrs {:max-age (* 3600 24 10)}}}))))

(defn sente-functions []
  (let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
                connected-uids]}
        (sente/make-channel-socket! (get-sch-adapter) {})]
    (println "defining functions")
    (def ring-ajax-post                ajax-post-fn)
    (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
    (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
    (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
    (def connected-uids                connected-uids) ; Watchable, read-only atom
    ))

(defn make-go []
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
             user-id :sente/all-users-without-uid
             ]
         (chsk-send! user-id new-chats-event)
         )
       :rummikub/tile-update
       (let [
             [k new-tile drag-coords user] data
             new-tiles (swap! tiles assoc k new-tile)
             new-tiles-event [:rummikub/tiles-update2 [new-tiles k drag-coords user]]
             user-id :sente/all-users-without-uid
             ]
         (chsk-send! user-id new-tiles-event))
       :rummikub/sort-tiles
       (let [
             new-tiles (swap! tiles sort-tiles data)
             new-tiles-event [:rummikub/tiles-update new-tiles]
             user-id :sente/all-users-without-uid
             ]
         (chsk-send! user-id new-tiles-event))
       :rummikub/tile-insert
       (let [
             [k new-tile i j user drag-coords] data
             new-tiles (swap! tiles insert-tile k new-tile i j user)
             new-tiles-event [:rummikub/tiles-update2 [new-tiles k drag-coords user]]
             user-id :sente/all-users-without-uid
             ]
         (chsk-send! user-id new-tiles-event))
       :rummikub/new-user
       (do
         (swap! user-index inc)
         (chsk-send! :sente/all-users-without-uid [:rummikub/new-user (current-user)]))
       :rummikub/remove-user
       (let [
             old-user data
             new-users (swap! users #(filterv (fn [x] (not= x old-user)) %))
             new-tiles (swap! tiles revert-tiles old-user)
             new-user (current-user)
             user-id :sente/all-users-without-uid
             ]
         (chsk-send! user-id [:rummikub/new-user new-user])
         (chsk-send! user-id [:rummikub/users-update new-users])
         (chsk-send! user-id [:rummikub/tiles-update new-tiles]))
       :rummikub/new-game
       (let [
             new-tiles (reset! tiles (get-tiles))
             ]
         (chsk-send! :sente/all-users-without-uid [:rummikub/tiles-update new-tiles]))
       :rummikub/pass-sound
       (chsk-send! :sente/all-users-without-uid [:rummikub/pass-sound nil])
       :rummikub/rummikub!
       (chsk-send! :sente/all-users-without-uid [:rummikub/rummikub! nil])
       :rummikub/pick-up
       (let [
             new-tiles (swap! tiles pick-up data)
             new-tiles-event [:rummikub/tiles-update new-tiles]
             user-id :sente/all-users-without-uid
             ]
         (chsk-send! user-id new-tiles-event))
       nil))))


(defn make-server [port]
  (httpkit/run-server (wrap-app #'app) {:port port :join? false}))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))
        ]
    (sente-functions)
    (make-go)
    (make-server port)
    (println "server ready")))

;(defonce sente (sente-functions))
;(declare my-go)
;(if (bound? #'my-go)
;  (reset! my-go false))
;(def my-go (make-go))
;(defonce server (make-server 5000))
