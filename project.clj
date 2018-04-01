(defproject rummikub-heroku "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://rummikub-heroku.herokuapp.com"
  :license {:name "FIXME: choose"
            :url "http://example.com/FIXME"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.1.8"]
                 [ring/ring-jetty-adapter "1.2.2"]
                 [ring/ring-devel "1.2.2"]
                 [ring-basic-authentication "1.0.5"]
                 [environ "0.5.0"]
                 [com.cemerick/drawbridge "0.0.6"]
                 [http-kit "2.1.16"]
                 [hiccup "1.0.5"]
                 [fogus/ring-edn "0.2.0"]
                 [org.clojure/core.async    "0.1.338.0-5c5012-alpha"]
                 [com.taoensso/sente        "1.12.0"]
                 ]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.2.1"]]
  :hooks [environ.leiningen.hooks]
  :uberjar-name "rummikub-heroku-standalone.jar"
  :jvm-opts ["--add-modules" "java.xml.bind"]
  :profiles {:production {:env {:production true}}})
