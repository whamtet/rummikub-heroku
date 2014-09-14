(ns rummikub-heroku.util)
(use 'ring.util.response)

(defn pr-response [x] (response (pr-str x)))

(defmacro cancellable-go [& body]
  `(let [
         cancel-atom# (atom false)
         ]
     (~'go
      (while (not @cancel-atom#)
        ~@body)
      (println "cancelling go"))
     cancel-atom#))
