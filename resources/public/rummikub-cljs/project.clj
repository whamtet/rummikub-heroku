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
                 [org.clojure/clojure       "1.9.0"] ; May use any v1.5.1+
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async    "0.4.474"]
                 [com.taoensso/sente        "1.12.0"]
                 [cljs-ajax "0.2.6"]
                 [reagent "0.8.0-alpha2"]
                 ]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds {
            :rummikub-cljs
            {:source-paths ["src-cljs"]
             :compiler
             {:output-to "rummikub_cljs.js"
              :output-dir "out"
              :pretty-print true
              :optimizations :simple
              }}}})
