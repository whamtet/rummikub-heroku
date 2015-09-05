// Compiled by ClojureScript 1.7.48 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = {};

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__5097__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = {};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$,error_code){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$2 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (ajax.core._abort[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,error_code);
} else {
var m__5097__auto____$1 = (ajax.core._abort["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,error_code);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});

(ajax.core.AjaxImpl["null"] = true);

(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__13233){
var map__13234 = p__13233;
var map__13234__$1 = ((((!((map__13234 == null)))?((((map__13234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13234):map__13234);
var timeout = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var G__13236 = (new goog.net.XhrIo());
goog.events.listen(G__13236,goog.net.EventType.COMPLETE,handler);

G__13236.setTimeoutInterval((function (){var or__4460__auto__ = timeout;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return (0);
}
})());

G__13236.send(uri,method,body,headers);

return G__13236;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){
var this$__$1 = this;
return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__13237){
var map__13238 = p__13237;
var map__13238__$1 = ((((!((map__13238 == null)))?((((map__13238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13238):map__13238);
var id = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN"], null);
});
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.read_text = (function ajax$core$read_text(xhrio){
return xhrio.getResponseText();
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text"], null);
});
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should use this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(p__13240){
var map__13243 = p__13240;
var map__13243__$1 = ((((!((map__13243 == null)))?((((map__13243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13243):map__13243);
var prefix = cljs.core.get.call(null,map__13243__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__13243__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),((function (map__13243,map__13243__$1,prefix,keywords_QMARK_){
return (function ajax$core$json_response_format_$_read_json(xhrio){
var json = xhrio.getResponseJson(prefix);
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
});})(map__13243,map__13243__$1,prefix,keywords_QMARK_))
,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio){
var ct = (function (){var or__4460__auto__ = xhrio.getResponseHeader("Content-Type");
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return "";
}
})();
var detect = ((function (ct){
return (function ajax$core$get_default_format_$_detect(s){
return (ct.indexOf(s) >= (0));
});})(ct))
;
return cljs.core.update_in.call(null,(cljs.core.truth_(detect.call(null,"application/json"))?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(detect.call(null,"application/edn"))?ajax.core.edn_response_format.call(null):(cljs.core.truth_(detect.call(null,"text/plain"))?ajax.core.raw_response_format.call(null):(cljs.core.truth_(detect.call(null,"text/html"))?ajax.core.raw_response_format.call(null):ajax.core.edn_response_format.call(null)
)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null),((function (ct){
return (function (p1__13245_SHARP_){
return [cljs.core.str(p1__13245_SHARP_),cljs.core.str(" (default)")].join('');
});})(ct))
);
});
ajax.core.use_content_type = (function ajax$core$use_content_type(format){
return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",-1857649168));
});
ajax.core.get_format = (function ajax$core$get_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null));
} else {
throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));

}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__13246,xhrio){
var map__13249 = p__13246;
var map__13249__$1 = ((((!((map__13249 == null)))?((((map__13249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13249):map__13249);
var description = cljs.core.get.call(null,map__13249__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",368289415),true,new cljs.core.Keyword(null,"original-text","original-text",744448452),xhrio.getResponseText());
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.interpret_response = (function ajax$core$interpret_response(format,response,get_default_format){
try{var xhrio = response.target;
var status = xhrio.getStatus();
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request aborted by client.",new cljs.core.Keyword(null,"aborted?","aborted?",448075047),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request timed out.",new cljs.core.Keyword(null,"timeout?","timeout?",-1570063160),true], null)], null);
}
} else {
var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));
var parse = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format__$1);
try{var response__$1 = parse.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null)], null);
}
}catch (e13254){if((e13254 instanceof Object)){
var e = e13254;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e13254;

}
}}
}catch (e13253){if((e13253 instanceof Object)){
var e = e13253;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(0),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),e.message,new cljs.core.Keyword(null,"response","response",-1068424192),null], null)], null);
} else {
throw e13253;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(uri,method,p__13255,p__13256){
var map__13263 = p__13255;
var map__13263__$1 = ((((!((map__13263 == null)))?((((map__13263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13263):map__13263);
var format = map__13263__$1;
var write = cljs.core.get.call(null,map__13263__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__13263__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__13264 = p__13256;
var map__13264__$1 = ((((!((map__13264 == null)))?((((map__13264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13264):map__13264);
var params = cljs.core.get.call(null,map__13264__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__13264__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core._EQ_.call(null,method,"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else {
var map__13267 = format;
var map__13267__$1 = ((((!((map__13267 == null)))?((((map__13267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13267):map__13267);
var write__$1 = cljs.core.get.call(null,map__13267__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__13267__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = write__$1.call(null,params);
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$1 = cljs.core.merge.call(null,(function (){var or__4460__auto__ = headers;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.base_handler = (function ajax$core$base_handler(format,p__13269){
var map__13272 = p__13269;
var map__13272__$1 = ((((!((map__13272 == null)))?((((map__13272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13272):map__13272);
var handler = cljs.core.get.call(null,map__13272__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var get_default_format = cljs.core.get.call(null,map__13272__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888));
if(cljs.core.truth_(handler)){
return ((function (map__13272,map__13272__$1,handler,get_default_format){
return (function (xhrio){
return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__4460__auto__ = get_default_format;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return ajax.core.no_format;
}
})()));
});
;})(map__13272,map__13272__$1,handler,get_default_format))
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(){
var args13274 = [];
var len__5499__auto___13284 = arguments.length;
var i__5500__auto___13285 = (0);
while(true){
if((i__5500__auto___13285 < len__5499__auto___13284)){
args13274.push((arguments[i__5500__auto___13285]));

var G__13286 = (i__5500__auto___13285 + (1));
i__5500__auto___13285 = G__13286;
continue;
} else {
}
break;
}

var G__13279 = args13274.length;
switch (G__13279) {
case 1:
return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5518__auto__ = (new cljs.core.IndexedSeq(args13274.slice((2)),(0)));
return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5518__auto__);

}
});

ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 = (function (p__13280){
var map__13281 = p__13280;
var map__13281__$1 = ((((!((map__13281 == null)))?((((map__13281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13281):map__13281);
var opts = map__13281__$1;
var uri = cljs.core.get.call(null,map__13281__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__13281__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__13281__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var manager = cljs.core.get.call(null,map__13281__$1,new cljs.core.Keyword(null,"manager","manager",-818607470));
var format__$1 = ajax.core.get_format.call(null,format);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__13283 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);
var uri__$1 = cljs.core.nth.call(null,vec__13283,(0),null);
var body = cljs.core.nth.call(null,vec__13283,(1),null);
var headers = cljs.core.nth.call(null,vec__13283,(2),null);
var handler = ajax.core.base_handler.call(null,format__$1,opts);
return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});

ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic = (function (uri,method,args){
var f = cljs.core.first.call(null,args);
var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,args):f);
return ajax.core.ajax_request.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method));
});

ajax.core.ajax_request.cljs$lang$applyTo = (function (seq13275){
var G__13276 = cljs.core.first.call(null,seq13275);
var seq13275__$1 = cljs.core.next.call(null,seq13275);
var G__13277 = cljs.core.first.call(null,seq13275__$1);
var seq13275__$2 = cljs.core.next.call(null,seq13275__$1);
return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(G__13276,G__13277,seq13275__$2);
});

ajax.core.ajax_request.cljs$lang$maxFixedArity = (2);
ajax.core.json_format = (function ajax$core$json_format(format_params){
return cljs.core.merge.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function ajax$core$edn_format(){
return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function ajax$core$raw_format(){
return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
var G__13289 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__13289) {
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));

}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
var G__13292 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__13292) {
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
default:
return null;

}

}
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(p__13294){
var map__13300 = p__13294;
var map__13300__$1 = ((((!((map__13300 == null)))?((((map__13300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13300):map__13300);
var handler = cljs.core.get.call(null,map__13300__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__13300__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__13300__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__13300,map__13300__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__13302){
var vec__13304 = p__13302;
var ok = cljs.core.nth.call(null,vec__13304,(0),null);
var result = cljs.core.nth.call(null,vec__13304,(1),null);
var temp__4423__auto___13305 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___13305)){
var h_13306 = temp__4423__auto___13305;
h_13306.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__13300,map__13300__$1,handler,error_handler,finally$))
});
ajax.core.transform_format = (function ajax$core$transform_format(p__13307){
var map__13310 = p__13307;
var map__13310__$1 = ((((!((map__13310 == null)))?((((map__13310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13310):map__13310);
var opts = map__13310__$1;
var format = cljs.core.get.call(null,map__13310__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__13310__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var rf = ajax.core.keyword_response_format.call(null,response_format,opts);
if((format == null)){
return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),rf);
} else {
if((format instanceof cljs.core.Keyword)){
return cljs.core.merge.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else {
return format;

}
}
});
ajax.core.transform_opts = (function ajax$core$transform_opts(opts){

return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888),ajax.core.get_default_format);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var args__5506__auto__ = [];
var len__5499__auto___13316 = arguments.length;
var i__5500__auto___13317 = (0);
while(true){
if((i__5500__auto___13317 < len__5499__auto___13316)){
args__5506__auto__.push((arguments[i__5500__auto___13317]));

var G__13318 = (i__5500__auto___13317 + (1));
i__5500__auto___13317 = G__13318;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13314){
var vec__13315 = p__13314;
var opts = cljs.core.nth.call(null,vec__13315,(0),null);
return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq13312){
var G__13313 = cljs.core.first.call(null,seq13312);
var seq13312__$1 = cljs.core.next.call(null,seq13312);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__13313,seq13312__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var args__5506__auto__ = [];
var len__5499__auto___13323 = arguments.length;
var i__5500__auto___13324 = (0);
while(true){
if((i__5500__auto___13324 < len__5499__auto___13323)){
args__5506__auto__.push((arguments[i__5500__auto___13324]));

var G__13325 = (i__5500__auto___13324 + (1));
i__5500__auto___13324 = G__13325;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13321){
var vec__13322 = p__13321;
var opts = cljs.core.nth.call(null,vec__13322,(0),null);
return ajax.core.ajax_request.call(null,uri,"HEAD",ajax.core.transform_opts.call(null,opts));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq13319){
var G__13320 = cljs.core.first.call(null,seq13319);
var seq13319__$1 = cljs.core.next.call(null,seq13319);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__13320,seq13319__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var args__5506__auto__ = [];
var len__5499__auto___13330 = arguments.length;
var i__5500__auto___13331 = (0);
while(true){
if((i__5500__auto___13331 < len__5499__auto___13330)){
args__5506__auto__.push((arguments[i__5500__auto___13331]));

var G__13332 = (i__5500__auto___13331 + (1));
i__5500__auto___13331 = G__13332;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13328){
var vec__13329 = p__13328;
var opts = cljs.core.nth.call(null,vec__13329,(0),null);
return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq13326){
var G__13327 = cljs.core.first.call(null,seq13326);
var seq13326__$1 = cljs.core.next.call(null,seq13326);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__13327,seq13326__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var args__5506__auto__ = [];
var len__5499__auto___13337 = arguments.length;
var i__5500__auto___13338 = (0);
while(true){
if((i__5500__auto___13338 < len__5499__auto___13337)){
args__5506__auto__.push((arguments[i__5500__auto___13338]));

var G__13339 = (i__5500__auto___13338 + (1));
i__5500__auto___13338 = G__13339;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13335){
var vec__13336 = p__13335;
var opts = cljs.core.nth.call(null,vec__13336,(0),null);
return ajax.core.ajax_request.call(null,uri,"PUT",ajax.core.transform_opts.call(null,opts));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq13333){
var G__13334 = cljs.core.first.call(null,seq13333);
var seq13333__$1 = cljs.core.next.call(null,seq13333);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__13334,seq13333__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var args__5506__auto__ = [];
var len__5499__auto___13344 = arguments.length;
var i__5500__auto___13345 = (0);
while(true){
if((i__5500__auto___13345 < len__5499__auto___13344)){
args__5506__auto__.push((arguments[i__5500__auto___13345]));

var G__13346 = (i__5500__auto___13345 + (1));
i__5500__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13342){
var vec__13343 = p__13342;
var opts = cljs.core.nth.call(null,vec__13343,(0),null);
return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq13340){
var G__13341 = cljs.core.first.call(null,seq13340);
var seq13340__$1 = cljs.core.next.call(null,seq13340);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__13341,seq13340__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var args__5506__auto__ = [];
var len__5499__auto___13351 = arguments.length;
var i__5500__auto___13352 = (0);
while(true){
if((i__5500__auto___13352 < len__5499__auto___13351)){
args__5506__auto__.push((arguments[i__5500__auto___13352]));

var G__13353 = (i__5500__auto___13352 + (1));
i__5500__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13349){
var vec__13350 = p__13349;
var opts = cljs.core.nth.call(null,vec__13350,(0),null);
return ajax.core.ajax_request.call(null,uri,"OPTIONS",ajax.core.transform_opts.call(null,opts));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq13347){
var G__13348 = cljs.core.first.call(null,seq13347);
var seq13347__$1 = cljs.core.next.call(null,seq13347);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__13348,seq13347__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var args__5506__auto__ = [];
var len__5499__auto___13358 = arguments.length;
var i__5500__auto___13359 = (0);
while(true){
if((i__5500__auto___13359 < len__5499__auto___13358)){
args__5506__auto__.push((arguments[i__5500__auto___13359]));

var G__13360 = (i__5500__auto___13359 + (1));
i__5500__auto___13359 = G__13360;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,p__13356){
var vec__13357 = p__13356;
var opts = cljs.core.nth.call(null,vec__13357,(0),null);
return ajax.core.ajax_request.call(null,uri,"TRACE",ajax.core.transform_opts.call(null,opts));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq13354){
var G__13355 = cljs.core.first.call(null,seq13354);
var seq13354__$1 = cljs.core.next.call(null,seq13354);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__13355,seq13354__$1);
});
