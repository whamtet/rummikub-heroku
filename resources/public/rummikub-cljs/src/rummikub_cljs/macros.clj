(ns rummikub-cljs.macros)

(defmacro defr [sym v & body]
  `(def ~sym #(let [~v (cljs.reader/read-string %)] ~@body)))

(defmacro sym-zip [& symbols]
  `(zipmap (map str '~symbols) (list ~@symbols)))

(defmacro defm [sym v m & body]
  `(def ~sym (with-meta (fn ~v ~@body) ~m)))

(defmacro defjs [sym s & rest]
  `(def ~sym (fn [] (js/eval ~(apply format s rest)))))
