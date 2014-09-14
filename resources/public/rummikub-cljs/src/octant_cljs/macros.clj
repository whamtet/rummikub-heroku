(ns octant-cljs.macros)

(defmacro defr [sym v & body]
  `(def ~sym #(let [~v (cljs.reader/read-string %)] ~@body)))

(defmacro sym-zip [& symbols]
  `(zipmap (map str '~symbols) (list ~@symbols)))
