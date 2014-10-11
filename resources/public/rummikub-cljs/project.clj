(defproject rummikub-cljs "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}

  :min-lein-version "2.3.4"

  ;; We need to add src-cljs too, because cljsbuild does not add its
  ;; source-paths to the project source-paths
  :source-paths ["src-cljs" "src"]

  :dependencies [
                 [org.clojure/clojure       "1.7.0-alpha2"] ; May use any v1.5.1+
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async    "0.1.338.0-5c5012-alpha"]
                 [com.taoensso/sente        "1.1.0"]
                 [cljs-ajax "0.2.6"]
;                 [reagent "0.4.2"]
                 [whoops/reagent "0.4.4-alpha"]
                 ]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds {
            :rummikub-cljs
            {:source-paths ["src-cljs"]
             :compiler
             {:output-to "rummikub_cljs.js"
              :output-dir "out"
              :pretty-print true
              :optimizations :none
;              :optimizations :whitespace
              }}}}
  )
