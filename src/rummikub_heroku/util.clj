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
