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

(def to-animate (atom {}))

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
           :rummikub/chat-update
           (do
             (reset! chat-atom data)
             (reset! show-chat? true))
           :rummikub/tiles-update
           (reset! tiles-atom data)
           :rummikub/tiles-update2
           (let [
                 [new-tiles k drag-coords creator] data
                 loc1 (first drag-coords)
                 loc2 (last drag-coords)
                 drag-coords (drop 1 (drop-last 1 drag-coords))
                 ]
             (when (and (not= creator (:user @user-atom)) (= "table" loc1 loc2))
               (swap! to-animate assoc k drag-coords))
             (reset! tiles-atom new-tiles))
           :rummikub/new-user
           (reset! current-player data)
           :rummikub/users-update
           (reset! users-atom data)
           (println event)))
       (println event)))))


(defn get-user []
  (if-let [user (js/prompt "Your Name")]
    (let [
          user (.trim user)
          ]
      (if-not (empty? user)
        (POST "/add-user" {:params {:username user}
                           :handler #(do
                                       (reset! user-atom %)
                                       (render))})))))

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

(def margin "0.5%")

(defn chat-box []
  [:div {:style {:width "30%" :height "90%"
                 :border "1px solid black"
                 :position "absolute"
                 :margin margin
                 :right 0 :bottom 0}}
   [scroll-box2]
   [:div {
          :class "center"
          :style {:height "10%"}}
    [:form {:on-submit new-chat}
     [:input {:type "text"
              :id "new-chat"
              :style {:width "100%"}
              :value @current-chat
              :on-change #(reset! current-chat (-> % .-target .-value))
              }]]
    [:input {:type "button"
             :value "Minimize"
             :on-click #(reset! show-chat? false)}]
    [:input {:type "button"
             :value "Edit Game"
             :on-click #(reset! show-users? true)}]
    ]])

(defn minimized-chat-box []
  [:div {:style
         {:margin margin
          :right 0 :bottom 0
          :width "1em"
          :position "absolute"
          :border "1px solid black"}
         :on-click #(reset! show-chat? true)}
   "X"])

(def show-chat? (atom true))
(def dragging-tile (atom nil))

(defn play-sound []
  (doto
    (js/document.getElementById "yourAudioTag") .load .play))

(defn turn-indicator []
  (let [
        {this-player :user} @user-atom
        {:keys [user color]} @current-player
        ]
    [:div {:style
           {
            :border "1px solid black"
            :position "absolute"
            :bottom 0
            :right 0
            :color (color-str color)
            :height "1.5em"
            }}
     (core/format "%s's Turn " user)
     (if (= this-player user)
       [:input {:type "button"
                :value "End Turn"
                :on-click #(do
                             (play-sound)
                             (chsk-send! [:rummikub/new-user nil]))}])]))

(defn stand-box [k i j tile user value color]
  [:span {:style
          {:border "1px solid black"
           :position "absolute"
           :left (* j 24)
           :top (* i 24)
           :text-align "center"
           :width "20px"
           :height "20px"
           :margin "1px"
           :color color}
          :draggable true
          :on-drag-start (drag-start k tile user)
          :id (core/clean-id color "-" value "-tile")
          }
   value])

(defn table-box [k left top color tile value]
  [:span {:style
          {:border "1px solid black"
           :position "absolute"
           :left left
           :top top
           :text-align "center"
           :width "20px"
           :height "20px"
           :margin "1px"
           :color color}
          :draggable true
          :on-drag-start (drag-start k tile "table")
          :id (core/clean-id color "-" value "-tile")
          }
   value])

(defn animate
  ([k points]
   (let [
         [color value] (.split k " ")
         to-animate (js/$ (core/clean-id "#" color "-" value "-tile"))
         ]
     (doseq [[x y] points]
       (.animate to-animate (clj->js {:top y :left x}) 1))))
  ([k]
   (if-let [points (@to-animate k)]
     (do
       (animate k points)
       (swap! to-animate dissoc k)))))

(defn before-update [_ [_ k]]
  (animate k))

#_(defn before-unmount [x]
    (let [
          [color value] (-> x .getDOMNode .-id (.split "-"))
          ]
      (animate (str color " " value))))

(def table-box2 (with-meta table-box
                  {
                   :component-will-update before-update
                   }
                  ))
(def stand-box2 (with-meta stand-box
                  {
                   }))

(defn table []
  [:div {:style
         {:margin margin
          :width (if @show-chat? "67%" "95%")
          :position "absolute"
          :border "1px solid black"
          :top 0
          :height "75.5%"
          }
         :on-drag-over #(.preventDefault %)
         :on-drag-enter #(.preventDefault %)
         :on-drop #(let [
                         [k tile] @dragging-tile
                         x (- (.-clientX %) 17)
                         y (- (.-clientY %) 15)
                         new-tile (assoc tile :left x :top y :location "table")
                         drag-coords (conj @drag-coords "table")
                         event [:rummikub/tile-update [k new-tile drag-coords (:user @user-atom)]]
                         ]
                     (chsk-send! event))
         }
   (for [[k tile] @tiles-atom
         :let [
               {:keys [location left top color value]} tile
               ]
         :when (= location "table")]
     ^{:key (str "tablized" k)}
     [table-box2 k left top color tile value]
     )
   [turn-indicator]
   ])

(def drag-coords (atom []))

(defn drag-start [k tile location]
  #(do
     (-> % .-dataTransfer (.setData "text/html" ""))
     (reset! dragging-tile [k tile])
     (reset! drag-coords [location])
     ))

(defn stand []
  (let [
        user (:user @user-atom)
        ]
    [:div {:style
           {:margin margin
            :width (if @show-chat? "67%" "95%")
            :position "absolute"
            :border "1px solid black"
            :bottom 0
            :height "20%"}
           :id "stand"
           :on-drag-over #(.preventDefault %)
           :on-drag-enter #(.preventDefault %)
           :on-drop #(let [
                           [k tile] @dragging-tile
                           tile-x (- (.-clientX %) 20)
                           tile-y (- (.-clientY %) 20)
                           {stand-x "left" stand-y "top"} (-> "#stand" js/$ .position js->clj)
                           rel-x (- tile-x stand-x)
                           rel-y (- tile-y stand-y)
                           i (int (/ rel-y 24))
                           j (int (/ tile-x 24))
                           drag-coords (conj @drag-coords user)
                           event [:rummikub/tile-insert [k tile i j user drag-coords]]
                           ]
                       (chsk-send! event))
           }
     (for [[k tile] @tiles-atom
           :let [
                 {:keys [location i j color value]} tile
                 ]
           :when (= location user)]
       ^{:key k}
       [stand-box2 k i j tile user value color]
       )
     [:input {:type "button"
              :style
              {
               :position "absolute"
               :right 0
               :bottom 0
               :margin margin}
              :value "Sort Tiles"
              :on-click #(chsk-send! [:rummikub/sort-tiles user])
              }]]))

(def show-users? (atom true))

(defn users-box []
  [:div {:style {:width "28%" :height "90%"
                 :border "1px solid black"
                 :position "absolute"
                 :margin margin
                 :right 0 :bottom 0
                 :padding "10px"}}
   [:h4 " Edit Users"]
   (for [{:keys [user color]} @users-atom]
     ^{:key (str "delete-" user)}
     [:div {:style {:color (color-str color)}}
      user " "
      [:input {:type "button"
               :value "Delete"
               :on-click #(if (js/confirm (core/format "Really delete %s?" user))
                            (chsk-send! [:rummikub/remove-user {:user user :color color}]))}]])[:br]
   [:input {:type "button"
            :value "New Game"
            :on-click #(chsk-send! [:rummikub/new-game nil])}]
   [:input {:type "button"
            :value "Done"
            :on-click #(reset! show-users? false)}]
   ])

(defn contents []
  [:div {
         :on-drag-over #(let [
                              x (.-clientX %)
                              y (.-clientY %)
                              ]
                          (swap! drag-coords conj [x y]))
         }
   (if @show-users?
     [users-box]
     (if @show-chat?
       [chat-box]
       [minimized-chat-box]
       ))
   [table]
   (if (some (fn [{user :user}]
               (= user (:user @user-atom))) @users-atom)
     [stand])
   [:audio {:id "yourAudioTag"}
    [:source {:src "/pass.wav" :type "audio/wav"}]]])

(def contents2 (with-meta contents
                 {:component-did-mount #(js/key "enter"
                                                (fn [] (if (= @user-atom @current-player)
                                                         (do
                                                           (play-sound)
                                                           (chsk-send! [:rummikub/new-user nil])))))}))

;; componentDidMount: function() {
;;   keymaster('esc', this.onClose)
;; },

(defn render []
  (reagent/render-component
   [contents2]
   (.getElementById js/document "content")))

(defn main []
  (if @user-atom
    (render)
    (get-user)))

(defn t [] (p @user-atom))
(defn t2 [] (p @users-atom))
