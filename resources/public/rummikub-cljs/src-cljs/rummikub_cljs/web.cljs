(ns rummikub-cljs.web
  (:use
   [cljs.reader :only [read-string]]
   )
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [rummikub-cljs.core :as core]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [cljs.core.async :refer [<! >! put! close! chan]]
   )
  (:require-macros [cljs.core.async.macros :refer [go]])
  )

(def p #(-> % pr-str println))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same path as before
                                  {:type :auto ; e/o #{:auto :ajax :ws}
                                   })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(go
 (while true
   (let [
         {:keys [ring-req event ?reply-fn push-fn]} (<! ch-chsk)
         [sente-code data] event
         ]
     (condp = sente-code
       :chsk/recv
       (let [
             [app-code data] data
             ]
         (condp = app-code
           :rummikub/chat-update (reset! chat-atom data)
           (println event)))
       (println event)))))

(defn random-color []
  [(rand-int 200) (rand-int 200) (rand-int 200)])

(defn get-user []
  (if-let [user (js/prompt "Your Name")]
    (let [
          user {:user user :color (random-color)}
          ]
      (POST "/add-user" {:params {:user user}
                         :handler #(do
                                     (reset! user-atom user)
                                     (render))}))))

(defn color-str [[r g b]]
  (core/format "rgb(%s, %s, %s)" r g b))

(defn type-chat [event]
  (let [
        val (-> event .-target .-value)
        ]
    (p val)))

(def current-chat (atom ""))

(defn new-chat []
  (let [
        val (-> js/document (.getElementById "new-chat") .-value)
        new-chat (assoc @user-atom :content val)
        ]
    (chsk-send! [:rummikub/new-chat new-chat])
    (reset! current-chat "")
    false))

(defn scroll-box []
  [:div {:style {:overflow-y "scroll"
                 :height "80%"
                 :scrollTop 1000000
                 }
         :class "center"
         }
   [:h4 "Chat Box"]
   (map-indexed
    (fn [i {:keys [user color content]}]
      ^{:key (str i "-chat-msg")}
      [:div
       [:span {:style {:color (color-str color)}}
        user]
       ": " content])
    @chat-atom)])

(defn scroll-to-bottom [this]
  (let [
        node (.getDOMNode this)
        ]
    (set! (.-scrollTop node) (.-scrollHeight node))))

(def scroll-box2 (with-meta scroll-box {:component-did-update scroll-to-bottom
                                        :component-did-mount scroll-to-bottom}))

;; var node = this.getDOMNode();
;;   node.scrollTop = node.scrollHeight;

(defn chat-box []
  [:div {:style {:width "30%" :height "90%"
                 :border "1px solid black"
                 :position "absolute"
                 :margin "0.5%"
                 :right 0 :bottom 0}}
   [scroll-box2]
   [:div {
          :class "center"
          :style {:height "15%"}}
    [:form {:on-submit new-chat}
     [:input {:type "text"
              :id "new-chat"
              :style {:width "100%"}
              :value @current-chat
              :on-change #(reset! current-chat (-> % .-target .-value))
              }]]
    ]
   ])

(def chat-box2 (with-meta chat-box {:component-did-update #(println "done")}))

(defn render []
  (reagent/render-component
   [chat-box]
   (.getElementById js/document "content")))

(defn main []
  (if @user-atom
    (render)
    (get-user)))

(defn t [] (p @chat-atom))
