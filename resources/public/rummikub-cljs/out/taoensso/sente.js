// Compiled by ClojureScript 1.7.48 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente.interfaces');
taoensso.sente.tracef = taoensso.encore.tracef;

taoensso.sente.debugf = taoensso.encore.debugf;

taoensso.sente.infof = taoensso.encore.infof;

taoensso.sente.warnf = taoensso.encore.warnf;

taoensso.sente.errorf = taoensso.encore.errorf;
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return cljs.core.reset_BANG_.call(null,taoensso.encore.logging_level,level);
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-call "/my-post-route"
 * {:method     :post
 * :params     {:username "Rich Hickey"
 * :type     "Awesome"}
 * :headers    {"Foo" "Bar"}
 * :resp-type  :text
 * :timeout-ms 7000}
 * (fn async-callback [resp-map]
 * (let [{:keys [?status ?error ?content ?content-type]} resp-map]
 * ;; ?status - 200, 404, ..., or nil on no response
 * ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
 * ;;                 :timeout <http-error-status> nil}
 * (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__12383 = x;
var ev_id = cljs.core.nth.call(null,vec__12383,(0),null);
var _ = cljs.core.nth.call(null,vec__12383,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__12385 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__12385) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.chan_QMARK_ = (function taoensso$sente$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__4448__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4448__auto__){
var and__4448__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__4448__auto____$1)){
var map__12389 = x;
var map__12389__$1 = ((((!((map__12389 == null)))?((((map__12389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12389):map__12389);
var ch_recv = cljs.core.get.call(null,map__12389__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__12389__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__12389__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__12389__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__4448__auto____$2 = taoensso.sente.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__4448__auto____$2)){
var and__4448__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__4448__auto____$3){
var and__4448__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__4448__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__4448__auto____$4;
}
} else {
return and__4448__auto____$3;
}
} else {
return and__4448__auto____$2;
}
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{if(typeof pstr === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"pstr","pstr",221763868,null))))].join('')));
}

return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e12392){var t = e12392;
taoensso.sente.debugf.call(null,"Bad package: %s (%s)",pstr,t);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(){
var args12393 = [];
var len__5499__auto___12396 = arguments.length;
var i__5500__auto___12397 = (0);
while(true){
if((i__5500__auto___12397 < len__5499__auto___12396)){
args12393.push((arguments[i__5500__auto___12397]));

var G__12398 = (i__5500__auto___12397 + (1));
i__5500__auto___12397 = G__12398;
continue;
} else {
}
break;
}

var G__12395 = args12393.length;
switch (G__12395) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12393.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(){
var args__5506__auto__ = [];
var len__5499__auto___12401 = arguments.length;
var i__5500__auto___12402 = (0);
while(true){
if((i__5500__auto___12402 < len__5499__auto___12401)){
args__5506__auto__.push((arguments[i__5500__auto___12402]));

var G__12403 = (i__5500__auto___12402 + (1));
i__5500__auto___12402 = G__12403;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.sente.tracef.call(null,"Packing: %s -> %s",args,pstr);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq12400){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12400));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null))))].join('')));
}

var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__12407 = prefix;
switch (G__12407) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__12406 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__12406,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__12406,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.sente.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = {};

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__5096__auto__ = (((chsk == null))?null:chsk);
var m__5097__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,chsk);
} else {
var m__5097__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__5096__auto__ = (((chsk == null))?null:chsk);
var m__5097__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,chsk);
} else {
var m__5097__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__5096__auto__ = (((chsk == null))?null:chsk);
var m__5097__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,chsk);
} else {
var m__5097__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(){
var args12411 = [];
var len__5499__auto___12414 = arguments.length;
var i__5500__auto___12415 = (0);
while(true){
if((i__5500__auto___12415 < len__5499__auto___12414)){
args12411.push((arguments[i__5500__auto___12415]));

var G__12416 = (i__5500__auto___12415 + (1));
i__5500__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var G__12413 = args12411.length;
switch (G__12413) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12411.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2(chsk,ev);
} else {
var x__5096__auto__ = (((chsk == null))?null:chsk);
var m__5097__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,chsk,ev);
} else {
var m__5097__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,chsk,ev);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4(chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
} else {
var x__5096__auto__ = (((chsk == null))?null:chsk);
var m__5097__auto__ = (taoensso.sente.chsk_send_BANG_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
} else {
var m__5097__auto____$1 = (taoensso.sente.chsk_send_BANG_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,chsk,ev,_QMARK_timeout_ms,_QMARK_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__4460__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__4460__auto__){
return or__4460__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("encore","nneg-int?","encore/nneg-int?",1565384456,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__4460__auto__ = (_QMARK_cb == null);
if(or__4460__auto__){
return or__4460__auto__;
} else {
var or__4460__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__4460__auto____$1){
return or__4460__auto____$1;
} else {
return taoensso.sente.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
if(cljs.core.truth_(_QMARK_cb_uuid)){
return cljs.core.first.call(null,cljs.core.swap_BANG_.call(null,cbs_waiting_,(function (p__12420){
var vec__12421 = p__12420;
var _ = cljs.core.nth.call(null,vec__12421,(0),null);
var m = cljs.core.nth.call(null,vec__12421,(1),null);
var temp__4423__auto__ = m.call(null,_QMARK_cb_uuid);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.dissoc.call(null,m,_QMARK_cb_uuid)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
}
})));
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__12422,merge_state){
var map__12426 = p__12422;
var map__12426__$1 = ((((!((map__12426 == null)))?((((map__12426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12426):map__12426);
var chsk = map__12426__$1;
var chs = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__12428 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__12426,map__12426__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
return taoensso.encore.swapped.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
});})(map__12426,map__12426__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__12428,(0),null);
var new_state = cljs.core.nth.call(null,vec__12428,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 * instead of a cb-fn. The channel will receive values of form
 * [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
if(cljs.core.truth_(taoensso.sente.chan_QMARK_.call(null,_QMARK_cb))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"chan?","chan?",1219428,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))))].join('')));
}

taoensso.sente.assert_event.call(null,ev);

var vec__12430 = ev;
var ev_id = cljs.core.nth.call(null,vec__12430,(0),null);
var _ = cljs.core.nth.call(null,vec__12430,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__12430,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__12430,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(ch_recv,clj){
taoensso.sente.tracef.call(null,"receive-buffered-evs!: %s",clj);

if(cljs.core.vector_QMARK_.call(null,clj)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"clj","clj",980036099,null))))].join('')));
}

var buffered_evs = clj;
var seq__12435 = cljs.core.seq.call(null,buffered_evs);
var chunk__12436 = null;
var count__12437 = (0);
var i__12438 = (0);
while(true){
if((i__12438 < count__12437)){
var ev = cljs.core._nth.call(null,chunk__12436,i__12438);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__12439 = seq__12435;
var G__12440 = chunk__12436;
var G__12441 = count__12437;
var G__12442 = (i__12438 + (1));
seq__12435 = G__12439;
chunk__12436 = G__12440;
count__12437 = G__12441;
i__12438 = G__12442;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12435);
if(temp__4425__auto__){
var seq__12435__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12435__$1)){
var c__5244__auto__ = cljs.core.chunk_first.call(null,seq__12435__$1);
var G__12443 = cljs.core.chunk_rest.call(null,seq__12435__$1);
var G__12444 = c__5244__auto__;
var G__12445 = cljs.core.count.call(null,c__5244__auto__);
var G__12446 = (0);
seq__12435 = G__12443;
chunk__12436 = G__12444;
count__12437 = G__12445;
i__12438 = G__12446;
continue;
} else {
var ev = cljs.core.first.call(null,seq__12435__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,ch_recv,ev);

var G__12447 = cljs.core.next.call(null,seq__12435__$1);
var G__12448 = null;
var G__12449 = (0);
var G__12450 = (0);
seq__12435 = G__12447;
chunk__12436 = G__12448;
count__12437 = G__12449;
i__12438 = G__12450;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,clj){
taoensso.sente.tracef.call(null,"handle-when-handshake!: %s",clj);

if((cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)))){
var vec__12453 = clj;
var _ = cljs.core.nth.call(null,vec__12453,(0),null);
var vec__12454 = cljs.core.nth.call(null,vec__12453,(1),null);
var uid = cljs.core.nth.call(null,vec__12454,(0),null);
var csrf_token = cljs.core.nth.call(null,vec__12454,(1),null);
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,csrf_token))){
taoensso.sente.warnf.call(null,"Sente warning: NO CSRF TOKEN AVAILABLE");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null));

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});

/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChWebSocket = (function (url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap,__hash){
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k12456,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__12458 = (((k12456 instanceof cljs.core.Keyword))?k12456.fqn:null);
switch (G__12458) {
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12456,else__5058__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12455){
var self__ = this;
var G__12455__$1 = this;
return (new cljs.core.RecordIter((0),G__12455__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__12455){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__12459 = cljs.core.keyword_identical_QMARK_;
var expr__12460 = k__5063__auto__;
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__12460))){
return (new taoensso.sente.ChWebSocket(G__12455,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,G__12455,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,G__12455,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,G__12455,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__12455,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__12455,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__12455,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__12455,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__12455,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12459.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__12460))){
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__12455,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__12455),null));
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__12455){
var self__ = this;
var this__5054__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__12455,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.sente.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
if(cljs.core.truth_(_QMARK_cb_uuid)){
cljs.core.swap_BANG_.call(null,self__.cbs_waiting_,((function (_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1){
return (function (p__12462){
var vec__12463 = p__12462;
var _ = cljs.core.nth.call(null,vec__12463,(0),null);
var m = cljs.core.nth.call(null,vec__12463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,_QMARK_cb_uuid,_QMARK_cb_fn)], null);
});})(_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_timeout_ms)){
var c__8508__auto___12496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___12496,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___12496,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1){
return (function (state_12474){
var state_val_12475 = (state_12474[(1)]);
if((state_val_12475 === (1))){
var inst_12464 = cljs.core.async.timeout.call(null,_QMARK_timeout_ms);
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12474__$1,(2),inst_12464);
} else {
if((state_val_12475 === (2))){
var inst_12467 = (state_12474[(7)]);
var inst_12466 = (state_12474[(2)]);
var inst_12467__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_12474__$1 = (function (){var statearr_12476 = state_12474;
(statearr_12476[(7)] = inst_12467__$1);

(statearr_12476[(8)] = inst_12466);

return statearr_12476;
})();
if(cljs.core.truth_(inst_12467__$1)){
var statearr_12477_12497 = state_12474__$1;
(statearr_12477_12497[(1)] = (3));

} else {
var statearr_12478_12498 = state_12474__$1;
(statearr_12478_12498[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (3))){
var inst_12467 = (state_12474[(7)]);
var inst_12469 = inst_12467.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_12474__$1 = state_12474;
var statearr_12479_12499 = state_12474__$1;
(statearr_12479_12499[(2)] = inst_12469);

(statearr_12479_12499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (4))){
var state_12474__$1 = state_12474;
var statearr_12480_12500 = state_12474__$1;
(statearr_12480_12500[(2)] = null);

(statearr_12480_12500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12475 === (5))){
var inst_12472 = (state_12474[(2)]);
var state_12474__$1 = state_12474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12474__$1,inst_12472);
} else {
return null;
}
}
}
}
}
});})(c__8508__auto___12496,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__8433__auto__,c__8508__auto___12496,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__8434__auto__ = null;
var taoensso$sente$state_machine__8434__auto____0 = (function (){
var statearr_12484 = [null,null,null,null,null,null,null,null,null];
(statearr_12484[(0)] = taoensso$sente$state_machine__8434__auto__);

(statearr_12484[(1)] = (1));

return statearr_12484;
});
var taoensso$sente$state_machine__8434__auto____1 = (function (state_12474){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_12474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e12485){if((e12485 instanceof Object)){
var ex__8437__auto__ = e12485;
var statearr_12486_12501 = state_12474;
(statearr_12486_12501[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12502 = state_12474;
state_12474 = G__12502;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
taoensso$sente$state_machine__8434__auto__ = function(state_12474){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__8434__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__8434__auto____1.call(this,state_12474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__8434__auto____0;
taoensso$sente$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__8434__auto____1;
return taoensso$sente$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___12496,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1))
})();
var state__8510__auto__ = (function (){var statearr_12487 = f__8509__auto__.call(null);
(statearr_12487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___12496);

return statearr_12487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___12496,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e12488){if((e12488 instanceof Error)){
var e = e12488;
taoensso.sente.errorf.call(null,"Chsk send error: %s",e);

if(cljs.core.truth_(_QMARK_cb_uuid)){
var cb_fn_STAR__12503 = (function (){var or__4460__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return _QMARK_cb_fn;
}
})();
cb_fn_STAR__12503.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e12488;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close();
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return taoensso.sente.chsk_reconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__4460__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.sente.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4425__auto__,chsk__$1))
;
var temp__4423__auto__ = (function (){try{return (new WebSocket(self__.url));
}catch (e12492){if((e12492 instanceof Error)){
var e = e12492;
taoensso.sente.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e12492;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var socket = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__12493 = socket;
(G__12493["onerror"] = ((function (G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.sente.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__12493["onmessage"] = ((function (G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__12494 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__12494,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__12494,(1),null);
var or__4460__auto__ = (function (){var and__4448__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);
if(cljs.core.truth_(and__4448__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__4448__auto__;
}
})();
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
if(cljs.core.truth_(_QMARK_cb_uuid)){
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.sente.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs);
}
}
});})(G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__12493["onopen"] = ((function (G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__12493["onclose"] = ((function (G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__12493,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__12493;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4425__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__12457){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__12457),null,cljs.core.dissoc.call(null,G__12457,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});


/**
* @constructor
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} ajax_client_uuid
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChAjaxSocket = (function (url,chs,timeout_ms,ajax_client_uuid,curr_xhr_,state_,packer,__meta,__extmap,__hash){
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_client_uuid = ajax_client_uuid;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k12505,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__12507 = (((k12505 instanceof cljs.core.Keyword))?k12505.fqn:null);
switch (G__12507) {
case "url":
return self__.url;

break;
case "chs":
return self__.chs;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "ajax-client-uuid":
return self__.ajax_client_uuid;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "state_":
return self__.state_;

break;
case "packer":
return self__.packer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12505,else__5058__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12504){
var self__ = this;
var G__12504__$1 = this;
return (new cljs.core.RecordIter((0),G__12504__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__12504){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__12508 = cljs.core.keyword_identical_QMARK_;
var expr__12509 = k__5063__auto__;
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(G__12504,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(self__.url,G__12504,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,G__12504,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,G__12504,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,G__12504,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,G__12504,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12508.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__12509))){
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,G__12504,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__12504),null));
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__12504){
var self__ = this;
var this__5054__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.url,self__.chs,self__.timeout_ms,self__.ajax_client_uuid,self__.curr_xhr_,self__.state_,self__.packer,G__12504,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$2 = (function (chsk,ev){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,ev,null,null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG_$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.sente.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_))], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__12511){
var map__12515 = p__12511;
var map__12515__$1 = ((((!((map__12515 == null)))?((((map__12515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12515):map__12515);
var _QMARK_error = cljs.core.get.call(null,map__12515__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__12515__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__12517 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__12517,(0),null);
var _ = cljs.core.nth.call(null,vec__12517,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.sente.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return taoensso.sente.chsk_reconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.sente.tracef.call(null,"async-poll-for-update!");

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.sente.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.encore.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;
var ajax_req_BANG_ = ((function (retry_BANG_,chsk__$1){
return (function (){
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),self__.ajax_client_uuid], null)], null),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__12525){
var map__12529 = p__12525;
var map__12529__$1 = ((((!((map__12529 == null)))?((((map__12529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12529):map__12529);
var _QMARK_error = cljs.core.get.call(null,map__12529__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__12529__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if((cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))) || (cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"abort","abort",521193198)))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__12531 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__12531,(0),null);
var _ = cljs.core.nth.call(null,vec__12531,(1),null);
var or__4460__auto___12533 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,clj);
if(cljs.core.truth_(or__4460__auto___12533)){
} else {
var buffered_evs_12534 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),buffered_evs_12534);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
});})(retry_BANG_,chsk__$1))
;
var temp__4423__auto__ = (window["Pace"]);
if(cljs.core.truth_(temp__4423__auto__)){
var pace = temp__4423__auto__;
return pace.ignore(ajax_req_BANG_);
} else {
return ajax_req_BANG_.call(null);
}
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-client-uuid","ajax-client-uuid",825977947,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(url,chs,timeout_ms,ajax_client_uuid,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(url,chs,timeout_ms,ajax_client_uuid,curr_xhr_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__12506){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__12506),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__12506),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__12506),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580).cljs$core$IFn$_invoke$arity$1(G__12506),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__12506),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__12506),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__12506),null,cljs.core.dissoc.call(null,G__12506,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});

/**
 * (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
 * 
 * * path       - As provided to client-side `make-channel-socket!` fn
 * (usu. "/chsk").
 * * websocket? - True for WebSocket connections, false for Ajax (long-polling)
 * connections.
 * * window-location - Map with keys:
 * :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
 * :protocol ; "http:" ; Note the :
 * :hostname ; "example.org"
 * :host     ; "example.org:80"
 * :pathname ; "/foo/bar"
 * :search   ; "?q=baz"
 * :hash     ; "#bang"
 * 
 * Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
 * routes should be configured accordingly.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__12535,websocket_QMARK_){
var map__12538 = p__12535;
var map__12538__$1 = ((((!((map__12538 == null)))?((((map__12538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);
var window_location = map__12538__$1;
var protocol = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__4460__auto__ = path;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
 * Returns a map with keys:
 * :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 * :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 * :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 * :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 * Common options:
 * :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 * :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
 * ; number of milliseconds.
 * :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''.
 * :chsk-url-fn  ; Please see `default-chsk-url-fn` for details.
 * :packer       ; :edn (default), or an IPacker implementation (experimental).
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(){
var args__5506__auto__ = [];
var len__5499__auto___12549 = arguments.length;
var i__5500__auto___12550 = (0);
while(true){
if((i__5500__auto___12550 < len__5499__auto___12549)){
args__5506__auto__.push((arguments[i__5500__auto___12550]));

var G__12551 = (i__5500__auto___12550 + (1));
i__5500__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__12542){
var vec__12543 = p__12542;
var map__12544 = cljs.core.nth.call(null,vec__12543,(0),null);
var map__12544__$1 = ((((!((map__12544 == null)))?((((map__12544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12544):map__12544);
var opts = map__12544__$1;
var type = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var recv_buf_or_n = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var ws_kalive_ms = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var chsk_url_fn = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var packer = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var _deprecated_more_opts = cljs.core.nth.call(null,vec__12543,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null).call(null,type))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.sente.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.sente.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var window_location = taoensso.encore.get_window_location.call(null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__4460__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__4460__auto__){
return or__4460__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts){
return (function (ev){
return taoensso.sente.as_event.call(null,ev);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts))
,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__4460__auto__ = (function (){var and__4448__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__4448__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null)),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__4448__auto__;
}
})();
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
var and__4448__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__4448__auto__){
var ajax_client_uuid = taoensso.encore.uuid_str.call(null);
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"ajax-client-uuid","ajax-client-uuid",-814553580),ajax_client_uuid,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else {
return and__4448__auto__;
}
}
})();
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,send_fn,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(p__12546){
var vec__12548 = p__12546;
var ev_id = cljs.core.nth.call(null,vec__12548,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__12548,(1),null);
var ev = vec__12548;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,send_fn,vec__12543,map__12544,map__12544__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq12540){
var G__12541 = cljs.core.first.call(null,seq12540);
var seq12540__$1 = cljs.core.next.call(null,seq12540);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12541,seq12540__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 * `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 * write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(ch_recv,event_msg_handler){
var ch_ctrl = cljs.core.async.chan.call(null);
var c__8508__auto___12712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___12712,ch_ctrl){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___12712,ch_ctrl){
return (function (state_12678){
var state_val_12679 = (state_12678[(1)]);
if((state_val_12679 === (7))){
var inst_12643 = (state_12678[(2)]);
var inst_12644 = cljs.core.nth.call(null,inst_12643,(0),null);
var inst_12645 = cljs.core.nth.call(null,inst_12643,(1),null);
var inst_12646 = (inst_12645 === ch_ctrl);
var state_12678__$1 = (function (){var statearr_12680 = state_12678;
(statearr_12680[(7)] = inst_12644);

return statearr_12680;
})();
if(cljs.core.truth_(inst_12646)){
var statearr_12681_12713 = state_12678__$1;
(statearr_12681_12713[(1)] = (8));

} else {
var statearr_12682_12714 = state_12678__$1;
(statearr_12682_12714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (1))){
var state_12678__$1 = state_12678;
var statearr_12683_12715 = state_12678__$1;
(statearr_12683_12715[(2)] = null);

(statearr_12683_12715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (4))){
var inst_12668 = (state_12678[(2)]);
var inst_12669 = (new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571) === inst_12668);
var state_12678__$1 = state_12678;
if(cljs.core.truth_(inst_12669)){
var statearr_12684_12716 = state_12678__$1;
(statearr_12684_12716[(1)] = (17));

} else {
var statearr_12685_12717 = state_12678__$1;
(statearr_12685_12717[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (15))){
var inst_12644 = (state_12678[(7)]);
var inst_12660 = event_msg_handler.call(null,inst_12644);
var state_12678__$1 = state_12678;
var statearr_12686_12718 = state_12678__$1;
(statearr_12686_12718[(2)] = inst_12660);

(statearr_12686_12718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (13))){
var inst_12644 = (state_12678[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12678,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var inst_12654 = taoensso.sente.tracef.call(null,"Pre-handler event-msg: %s",inst_12644);
var inst_12655 = taoensso.sente.event_msg_QMARK_.call(null,inst_12644);
var inst_12656 = cljs.core.not.call(null,inst_12655);
var state_12678__$1 = (function (){var statearr_12687 = state_12678;
(statearr_12687[(8)] = inst_12654);

return statearr_12687;
})();
if(inst_12656){
var statearr_12688_12719 = state_12678__$1;
(statearr_12688_12719[(1)] = (14));

} else {
var statearr_12689_12720 = state_12678__$1;
(statearr_12689_12720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12678,(5),new cljs.core.Keyword(null,"default","default",-1987822328),null,(4));
var inst_12639 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12640 = [ch_recv,ch_ctrl];
var inst_12641 = (new cljs.core.PersistentVector(null,2,(5),inst_12639,inst_12640,null));
var state_12678__$1 = state_12678;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12678__$1,(7),inst_12641);
} else {
if((state_val_12679 === (17))){
var state_12678__$1 = state_12678;
var statearr_12690_12721 = state_12678__$1;
(statearr_12690_12721[(2)] = null);

(statearr_12690_12721[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (3))){
var inst_12676 = (state_12678[(2)]);
var state_12678__$1 = state_12678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12678__$1,inst_12676);
} else {
if((state_val_12679 === (12))){
var inst_12644 = (state_12678[(7)]);
var inst_12649 = (state_12678[(2)]);
var inst_12650 = taoensso.sente.errorf.call(null,"Chsk router handling error: %s",inst_12644);
var state_12678__$1 = (function (){var statearr_12691 = state_12678;
(statearr_12691[(9)] = inst_12649);

return statearr_12691;
})();
var statearr_12692_12722 = state_12678__$1;
(statearr_12692_12722[(2)] = inst_12650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (2))){
var state_12678__$1 = state_12678;
var statearr_12693_12723 = state_12678__$1;
(statearr_12693_12723[(2)] = null);

(statearr_12693_12723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (19))){
var inst_12674 = (state_12678[(2)]);
var state_12678__$1 = state_12678;
var statearr_12694_12724 = state_12678__$1;
(statearr_12694_12724[(2)] = inst_12674);

(statearr_12694_12724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (11))){
var inst_12664 = (state_12678[(2)]);
var state_12678__$1 = state_12678;
var statearr_12695_12725 = state_12678__$1;
(statearr_12695_12725[(2)] = inst_12664);

(statearr_12695_12725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (9))){
var state_12678__$1 = state_12678;
var statearr_12696_12726 = state_12678__$1;
(statearr_12696_12726[(2)] = null);

(statearr_12696_12726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (5))){
var inst_12633 = (state_12678[(2)]);
var inst_12634 = taoensso.sente.errorf.call(null,"Chsk router channel error!");
var state_12678__$1 = (function (){var statearr_12697 = state_12678;
(statearr_12697[(10)] = inst_12633);

return statearr_12697;
})();
var statearr_12698_12727 = state_12678__$1;
(statearr_12698_12727[(2)] = inst_12634);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (14))){
var inst_12644 = (state_12678[(7)]);
var inst_12658 = taoensso.sente.errorf.call(null,"Bad event-msg: %s",inst_12644);
var state_12678__$1 = state_12678;
var statearr_12699_12728 = state_12678__$1;
(statearr_12699_12728[(2)] = inst_12658);

(statearr_12699_12728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (16))){
var inst_12662 = (state_12678[(2)]);
var state_12678__$1 = (function (){var statearr_12700 = state_12678;
(statearr_12700[(11)] = inst_12662);

return statearr_12700;
})();
var statearr_12701_12729 = state_12678__$1;
(statearr_12701_12729[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (10))){
var inst_12666 = (state_12678[(2)]);
var state_12678__$1 = state_12678;
var statearr_12702_12730 = state_12678__$1;
(statearr_12702_12730[(2)] = inst_12666);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (18))){
var state_12678__$1 = state_12678;
var statearr_12703_12731 = state_12678__$1;
(statearr_12703_12731[(2)] = null);

(statearr_12703_12731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12679 === (8))){
var state_12678__$1 = state_12678;
var statearr_12704_12732 = state_12678__$1;
(statearr_12704_12732[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_12704_12732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8508__auto___12712,ch_ctrl))
;
return ((function (switch__8433__auto__,c__8508__auto___12712,ch_ctrl){
return (function() {
var taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto__ = null;
var taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto____0 = (function (){
var statearr_12708 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12708[(0)] = taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto__);

(statearr_12708[(1)] = (1));

return statearr_12708;
});
var taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto____1 = (function (state_12678){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_12678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e12709){if((e12709 instanceof Object)){
var ex__8437__auto__ = e12709;
var statearr_12710_12733 = state_12678;
(statearr_12710_12733[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12734 = state_12678;
state_12678 = G__12734;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto__ = function(state_12678){
switch(arguments.length){
case 0:
return taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto____0.call(this);
case 1:
return taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto____1.call(this,state_12678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto____0;
taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto____1;
return taoensso$sente$start_chsk_router_BANG__$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___12712,ch_ctrl))
})();
var state__8510__auto__ = (function (){var statearr_12711 = f__8509__auto__.call(null);
(statearr_12711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___12712);

return statearr_12711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___12712,ch_ctrl))
);


return ((function (ch_ctrl){
return (function taoensso$sente$start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl))
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
