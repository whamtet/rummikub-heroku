(ns rummikub-heroku.util)
(use 'ring.util.response)

(defn pr-response [x] (response (pr-str x)))

(defmacro cancellable-go [& body]
  `(let [
         continue-atom# (atom true)
         ]
     (~'go
      (while @continue-atom#
        ~@body)
      (println "cancelling go"))
     continue-atom#))

(defn value-filter [f m]
  (into {} (for [[k v] m :when (f v)] [k v])))
(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))
(defn key-by [f coll]
  (zipmap (map f coll) coll))
