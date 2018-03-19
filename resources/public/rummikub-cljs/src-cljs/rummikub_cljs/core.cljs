(ns rummikub-cljs.core
  (:require
   [cljs.reader :refer [read-string]]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn apply-interpose [i s]
  (apply str (interpose i s)))

(defn value-filter [f m]
  (into {} (for [[k v] m :when (f v)] [k v])))

(defn to-num [v]
  (if (-> v js/Number js/isNaN) v (js/Number v)))

(defn num-val [x]
  (to-num (val x)))
(defn trim-val [x]
  (.trim (val x)))

(defn page [f & contents]
  (replace-with ($ "#content") (crate/html
                                [:div {:id "content"}
                                 [:a {:href "javascript:void(0)"
                                      :onclick f
                                      :id "root_link"
                                      }
                                  [:img {:src "octant_small.png"}]] [:br] [:br]
                                 contents])))

(defn page2 [f contents]
  (reagent/render-component
   [:div {:id "content"}
    [:a {:href "javascript:void(0)"
         :on-click f
         :id "root_link"}
     [:img {:src "octant_small.png"}]] [:br] [:br]
    [contents]]
   (first ($ "#content"))))

(defn my-replace-with [id & contents]
  (replace-with ($ (str "#" id)) (apply crate/html contents)))


(defn str-contains? [a b]
  (not= -1 (.indexOf a b)))

(defn format [s & subs]
  (loop [
         s s
         current (first subs)
         todo (rest subs)
         ]
    (if (and (str-contains? s "%s") current)
      (recur (.replace s "%s" current) (first todo) (rest todo))
      s)))

(defn format-int [s n] (.replace s "%i" n))

(defn round [x decimals]
  (let [
        factor (.pow js/Math 10 decimals)
        ]
    (/ (.round js/Math (* x factor)) factor)))

(defn update-db [command payload f]
  (POST "/update-db"
        {:params {:command command :payload payload}
         :handler f
         }))

(defn eager-every? [f s]
  (every? identity (doall (map f s))))

(defn link-to [url2 m]
  (set! (.-location js/document) (url url2 m)))

(defn link-to2 [url2 m new-window?]
  (if new-window?
    (.open js/window (url url2 m) "_blank")
    (set! (.-location js/document) (url url2 m))))

(defn replace-all [a b c]
  (loop [a a]
    (if (= -1 (.indexOf a b)) a (recur (.replace a b c)))))

(defn safe-name [x]
  (if x (name x) ""))

(defn url [host m]
  (str (apply str host "?" (interpose "&" (map (fn [[k v]] (str (safe-name k) "=" (replace-all (safe-name v) " " "%20"))) m)))))

(defn clean-string [s to-remove]
  (reduce (fn [a b] (replace-all a b "")) s to-remove))

(defn clean-id [& args]
  (clean-string (apply str args) [" " "," "(" ")" "&" "'" "/"]))

(defn scroll-to [h]
  (.animate ($ "html, body")
            (clj->js {:scrollTop (- h 100)}) 50
            ))

(defn get-position [element total-height]
  (let [
        h (-> element $ .offset .-top)
        y (/ h total-height)
        ]
    [y h]))

(defn position-div [class element total-height]
  (let [
        [y h] (get-position element total-height)
        ]
    (append ($ "body")
            (crate/html [:div {:style (format "position: fixed; width: 20px;
                                              height: 3px; top: %s%; right: 0px;
                                              " (int (* 100 y)))
                               :class (str "override_marker " class)
                               :onclick (format "octant_cljs.core.scroll_to(%s)" h)
                               }]))))


(defn show-overridden
  "shows colored sidebars"
  ([]
   (.remove ($ ".override_marker"))
   (show-overridden "bloomberg-row")
   (show-overridden "not-found")
   (show-overridden "overridden")
   )
  ([class]
   (let [
         total-height (.height ($ js/document))
         ]
     (doseq [element ($ (str "." class))] (position-div class element total-height)))))

(defn split-line [s]
  (let [
        lines (map #(str % " ") (.split s " "))
        lines (interpose [:br] (partition-all 4 lines))
        ]
    lines))

(defn pprint-number [x]
  (let [
        y (js/Math.abs x)
        left (long y)
        right (js/frac y)
        rightd (-> right str (.split ".") second)
        left (->> left str reverse (partition-all 3) (interpose ",") flatten reverse (apply str))
        num (if (zero? right) left (str left "." rightd))
        ]
    (if (neg? x) (str "-" num) (str num))))

(defn pprint-num [x]
  (if (string? x)
    (-> x (replace-all "," "") js/Number)
    x))

(defn pprint-nums2 [x]
  (if (string? x)
    (apply + (map pprint-num (.split (.trim x) " ")))
    x))

(defn pprint-nums [x]
  (apply-interpose " "
                   (map #(-> % pprint-num pprint-number)
                        (.split (.trim x) " "))))

(defn sanitize-map [m]
  (cond
   (map? m) (zipmap (map name (keys m)) (map sanitize-map (vals m)))
   (coll? m) (map sanitize-map m)
   :default m))

(defn clean-set! [atom val]
  (reset! atom (sanitize-map val)))

(defn validate []
  (if
    (eager-every?
     (fn [input]
       (if (or (-> input .-value js/Number js/isNaN))
         (do (add-class ($ input) "warning") false)
         (do (remove-class ($ input) "warning") true))) ($ ".numeric-input"))
    true
    (do (js/alert "Invalid Input") false)))

(defn apply-interpose [i s]
  (apply str (interpose i s)))

(defn transfer-alias [to-transfer from to]
  (doseq [atom to-transfer]
    (js/eval (format "%s.%s = %s.%s" to atom from atom))))

(defn interleave-all [& seqs]
  (let [
        m (apply max (map count seqs))
        safe-nth (fn [coll i]
                   (if (< i (count coll))
                     (nth coll i)))
        ]
    (filter identity (apply concat (for [i (range m)] (map #(safe-nth % i) seqs))))
    ))

(defn take-all [n coll]
  (take n (concat coll (repeat nil))))

(defn map-all [f & seqs]
  (let [
        m (apply max (map count seqs))
        seqs (map #(take-all m %) seqs)
        ]
    (apply map f seqs)))

(defn map-indexed-all [f & seqs]
  (let [
        m (apply max (map count seqs))
        seqs (map #(take-all m %) seqs)
        ]
    (apply map f (range) seqs)))

(defn apply-r [m & args]
  (format "%s('%s')" m (pr-str (vec args))))

(defn max-by [f [head & rest]]
  (if head
    (first
     (reduce (fn [[x y] xd]
               (let [yd (f xd)]
                 (if (= -1 (compare y yd))
                   [xd yd]
                   [x y]))) [head (f head)] rest))))

(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))
