(ns routes.index)
(require '[ring.util.response :as response])
(require '[hiccup.page :as hiccup])

(defn response [& body]
  (response/response
   (hiccup/html5
    [:header
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:script {:src "/rummikub-cljs/out/goog/base.js"}]
     [:script {:src "/rummikub-cljs/rummikub_cljs.js"}]
     [:link {:rel "stylesheet" :type "text/css" :href "/style.css"}]
     [:script {:src "/react-0.9.0.js"}]
     [:script "
      goog.require('rummikub_cljs.core')
      goog.require('rummikub_cljs.web')
      document.body.onload = function() {
        c = rummikub_cljs.core
        w = rummikub_cljs.web
      }
      "]

     [:script {:src "/rummikub-heroku.js"}]
     "<meta charset=\"UTF-8\">"
     ]
    [:body
     body
     ]
    )))

(defn map-str [f & s] (apply str (interpose "\n" (apply map f s))))

(defn load-key [class k]
  (let [k (.replace k "-" "_")]
    (format "bind_variable('%s', '%s');" class k)))

(defn blank-page [class kvs]
  (let [
        kvs (assoc kvs "all" (pr-str (keys kvs)))
        ]
  (response
   [:div {:id "content"}]
      [:div {:id "test"}]
   (map (fn [[k v]] [:input {:type "hidden" :id k :value v}]) kvs)
   [:script (format "%s rummikub_cljs.%s.main();" (map-str load-key (repeat class) (keys kvs)) class)])))
