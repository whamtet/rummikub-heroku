// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12393 = (function (f,fn_handler,meta12394){
this.f = f;
this.fn_handler = fn_handler;
this.meta12394 = meta12394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12393.cljs$lang$type = true;
cljs.core.async.t12393.cljs$lang$ctorStr = "cljs.core.async/t12393";
cljs.core.async.t12393.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12393");
});
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12395){var self__ = this;
var _12395__$1 = this;return self__.meta12394;
});
cljs.core.async.t12393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12395,meta12394__$1){var self__ = this;
var _12395__$1 = this;return (new cljs.core.async.t12393(self__.f,self__.fn_handler,meta12394__$1));
});
cljs.core.async.__GT_t12393 = (function __GT_t12393(f__$1,fn_handler__$1,meta12394){return (new cljs.core.async.t12393(f__$1,fn_handler__$1,meta12394));
});
}
return (new cljs.core.async.t12393(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12397 = buff;if(G__12397)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__12397.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12397.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12397);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12397);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12398 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12398);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12398,ret){
return (function (){return fn1.call(null,val_12398);
});})(val_12398,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4220__auto__))
{var ret = temp__4220__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4220__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4220__auto__))
{var retb = temp__4220__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4220__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4220__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___12399 = n;var x_12400 = (0);while(true){
if((x_12400 < n__4416__auto___12399))
{(a[x_12400] = (0));
{
var G__12401 = (x_12400 + (1));
x_12400 = G__12401;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12402 = (i + (1));
i = G__12402;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12406 = (function (flag,alt_flag,meta12407){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12407 = meta12407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12406.cljs$lang$type = true;
cljs.core.async.t12406.cljs$lang$ctorStr = "cljs.core.async/t12406";
cljs.core.async.t12406.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12406");
});})(flag))
;
cljs.core.async.t12406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12408){var self__ = this;
var _12408__$1 = this;return self__.meta12407;
});})(flag))
;
cljs.core.async.t12406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12408,meta12407__$1){var self__ = this;
var _12408__$1 = this;return (new cljs.core.async.t12406(self__.flag,self__.alt_flag,meta12407__$1));
});})(flag))
;
cljs.core.async.__GT_t12406 = ((function (flag){
return (function __GT_t12406(flag__$1,alt_flag__$1,meta12407){return (new cljs.core.async.t12406(flag__$1,alt_flag__$1,meta12407));
});})(flag))
;
}
return (new cljs.core.async.t12406(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12412 = (function (cb,flag,alt_handler,meta12413){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12413 = meta12413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12412.cljs$lang$type = true;
cljs.core.async.t12412.cljs$lang$ctorStr = "cljs.core.async/t12412";
cljs.core.async.t12412.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12412");
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12414){var self__ = this;
var _12414__$1 = this;return self__.meta12413;
});
cljs.core.async.t12412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12414,meta12413__$1){var self__ = this;
var _12414__$1 = this;return (new cljs.core.async.t12412(self__.cb,self__.flag,self__.alt_handler,meta12413__$1));
});
cljs.core.async.__GT_t12412 = (function __GT_t12412(cb__$1,flag__$1,alt_handler__$1,meta12413){return (new cljs.core.async.t12412(cb__$1,flag__$1,alt_handler__$1,meta12413));
});
}
return (new cljs.core.async.t12412(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12415_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12415_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12416_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12416_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3560__auto__ = wport;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12417 = (i + (1));
i = G__12417;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3560__auto__ = ret;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4222__auto__ = (function (){var and__3548__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4222__auto__))
{var got = temp__4222__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12418){var map__12420 = p__12418;var map__12420__$1 = ((cljs.core.seq_QMARK_.call(null,map__12420))?cljs.core.apply.call(null,cljs.core.hash_map,map__12420):map__12420);var opts = map__12420__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12418 = null;if (arguments.length > 1) {
  p__12418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12418);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12421){
var ports = cljs.core.first(arglist__12421);
var p__12418 = cljs.core.rest(arglist__12421);
return alts_BANG___delegate(ports,p__12418);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6554__auto___12516 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___12516){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___12516){
return (function (state_12492){var state_val_12493 = (state_12492[(1)]);if((state_val_12493 === (7)))
{var inst_12488 = (state_12492[(2)]);var state_12492__$1 = state_12492;var statearr_12494_12517 = state_12492__$1;(statearr_12494_12517[(2)] = inst_12488);
(statearr_12494_12517[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (1)))
{var state_12492__$1 = state_12492;var statearr_12495_12518 = state_12492__$1;(statearr_12495_12518[(2)] = null);
(statearr_12495_12518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (4)))
{var inst_12471 = (state_12492[(7)]);var inst_12471__$1 = (state_12492[(2)]);var inst_12472 = (inst_12471__$1 == null);var state_12492__$1 = (function (){var statearr_12496 = state_12492;(statearr_12496[(7)] = inst_12471__$1);
return statearr_12496;
})();if(cljs.core.truth_(inst_12472))
{var statearr_12497_12519 = state_12492__$1;(statearr_12497_12519[(1)] = (5));
} else
{var statearr_12498_12520 = state_12492__$1;(statearr_12498_12520[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (13)))
{var state_12492__$1 = state_12492;var statearr_12499_12521 = state_12492__$1;(statearr_12499_12521[(2)] = null);
(statearr_12499_12521[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (6)))
{var inst_12471 = (state_12492[(7)]);var state_12492__$1 = state_12492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12492__$1,(11),to,inst_12471);
} else
{if((state_val_12493 === (3)))
{var inst_12490 = (state_12492[(2)]);var state_12492__$1 = state_12492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12492__$1,inst_12490);
} else
{if((state_val_12493 === (12)))
{var state_12492__$1 = state_12492;var statearr_12500_12522 = state_12492__$1;(statearr_12500_12522[(2)] = null);
(statearr_12500_12522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (2)))
{var state_12492__$1 = state_12492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12492__$1,(4),from);
} else
{if((state_val_12493 === (11)))
{var inst_12481 = (state_12492[(2)]);var state_12492__$1 = state_12492;if(cljs.core.truth_(inst_12481))
{var statearr_12501_12523 = state_12492__$1;(statearr_12501_12523[(1)] = (12));
} else
{var statearr_12502_12524 = state_12492__$1;(statearr_12502_12524[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (9)))
{var state_12492__$1 = state_12492;var statearr_12503_12525 = state_12492__$1;(statearr_12503_12525[(2)] = null);
(statearr_12503_12525[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (5)))
{var state_12492__$1 = state_12492;if(cljs.core.truth_(close_QMARK_))
{var statearr_12504_12526 = state_12492__$1;(statearr_12504_12526[(1)] = (8));
} else
{var statearr_12505_12527 = state_12492__$1;(statearr_12505_12527[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (14)))
{var inst_12486 = (state_12492[(2)]);var state_12492__$1 = state_12492;var statearr_12506_12528 = state_12492__$1;(statearr_12506_12528[(2)] = inst_12486);
(statearr_12506_12528[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (10)))
{var inst_12478 = (state_12492[(2)]);var state_12492__$1 = state_12492;var statearr_12507_12529 = state_12492__$1;(statearr_12507_12529[(2)] = inst_12478);
(statearr_12507_12529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12493 === (8)))
{var inst_12475 = cljs.core.async.close_BANG_.call(null,to);var state_12492__$1 = state_12492;var statearr_12508_12530 = state_12492__$1;(statearr_12508_12530[(2)] = inst_12475);
(statearr_12508_12530[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___12516))
;return ((function (switch__6539__auto__,c__6554__auto___12516){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_12512 = [null,null,null,null,null,null,null,null];(statearr_12512[(0)] = state_machine__6540__auto__);
(statearr_12512[(1)] = (1));
return statearr_12512;
});
var state_machine__6540__auto____1 = (function (state_12492){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_12492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e12513){if((e12513 instanceof Object))
{var ex__6543__auto__ = e12513;var statearr_12514_12531 = state_12492;(statearr_12514_12531[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12513;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12532 = state_12492;
state_12492 = G__12532;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_12492){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_12492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___12516))
})();var state__6556__auto__ = (function (){var statearr_12515 = f__6555__auto__.call(null);(statearr_12515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___12516);
return statearr_12515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___12516))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12716){var vec__12717 = p__12716;var v = cljs.core.nth.call(null,vec__12717,(0),null);var p = cljs.core.nth.call(null,vec__12717,(1),null);var job = vec__12717;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6554__auto___12899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___12899,res,vec__12717,v,p,job,jobs,results){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___12899,res,vec__12717,v,p,job,jobs,results){
return (function (state_12722){var state_val_12723 = (state_12722[(1)]);if((state_val_12723 === (2)))
{var inst_12719 = (state_12722[(2)]);var inst_12720 = cljs.core.async.close_BANG_.call(null,res);var state_12722__$1 = (function (){var statearr_12724 = state_12722;(statearr_12724[(7)] = inst_12719);
return statearr_12724;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12722__$1,inst_12720);
} else
{if((state_val_12723 === (1)))
{var state_12722__$1 = state_12722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12722__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6554__auto___12899,res,vec__12717,v,p,job,jobs,results))
;return ((function (switch__6539__auto__,c__6554__auto___12899,res,vec__12717,v,p,job,jobs,results){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_12728 = [null,null,null,null,null,null,null,null];(statearr_12728[(0)] = state_machine__6540__auto__);
(statearr_12728[(1)] = (1));
return statearr_12728;
});
var state_machine__6540__auto____1 = (function (state_12722){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_12722);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e12729){if((e12729 instanceof Object))
{var ex__6543__auto__ = e12729;var statearr_12730_12900 = state_12722;(statearr_12730_12900[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12729;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12901 = state_12722;
state_12722 = G__12901;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_12722){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_12722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___12899,res,vec__12717,v,p,job,jobs,results))
})();var state__6556__auto__ = (function (){var statearr_12731 = f__6555__auto__.call(null);(statearr_12731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___12899);
return statearr_12731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___12899,res,vec__12717,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12732){var vec__12733 = p__12732;var v = cljs.core.nth.call(null,vec__12733,(0),null);var p = cljs.core.nth.call(null,vec__12733,(1),null);var job = vec__12733;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___12902 = n;var __12903 = (0);while(true){
if((__12903 < n__4416__auto___12902))
{var G__12734_12904 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12734_12904) {
case "async":
var c__6554__auto___12906 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12903,c__6554__auto___12906,G__12734_12904,n__4416__auto___12902,jobs,results,process,async){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (__12903,c__6554__auto___12906,G__12734_12904,n__4416__auto___12902,jobs,results,process,async){
return (function (state_12747){var state_val_12748 = (state_12747[(1)]);if((state_val_12748 === (7)))
{var inst_12743 = (state_12747[(2)]);var state_12747__$1 = state_12747;var statearr_12749_12907 = state_12747__$1;(statearr_12749_12907[(2)] = inst_12743);
(statearr_12749_12907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (6)))
{var state_12747__$1 = state_12747;var statearr_12750_12908 = state_12747__$1;(statearr_12750_12908[(2)] = null);
(statearr_12750_12908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (5)))
{var state_12747__$1 = state_12747;var statearr_12751_12909 = state_12747__$1;(statearr_12751_12909[(2)] = null);
(statearr_12751_12909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (4)))
{var inst_12737 = (state_12747[(2)]);var inst_12738 = async.call(null,inst_12737);var state_12747__$1 = state_12747;if(cljs.core.truth_(inst_12738))
{var statearr_12752_12910 = state_12747__$1;(statearr_12752_12910[(1)] = (5));
} else
{var statearr_12753_12911 = state_12747__$1;(statearr_12753_12911[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12748 === (3)))
{var inst_12745 = (state_12747[(2)]);var state_12747__$1 = state_12747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12747__$1,inst_12745);
} else
{if((state_val_12748 === (2)))
{var state_12747__$1 = state_12747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12747__$1,(4),jobs);
} else
{if((state_val_12748 === (1)))
{var state_12747__$1 = state_12747;var statearr_12754_12912 = state_12747__$1;(statearr_12754_12912[(2)] = null);
(statearr_12754_12912[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12903,c__6554__auto___12906,G__12734_12904,n__4416__auto___12902,jobs,results,process,async))
;return ((function (__12903,switch__6539__auto__,c__6554__auto___12906,G__12734_12904,n__4416__auto___12902,jobs,results,process,async){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_12758 = [null,null,null,null,null,null,null];(statearr_12758[(0)] = state_machine__6540__auto__);
(statearr_12758[(1)] = (1));
return statearr_12758;
});
var state_machine__6540__auto____1 = (function (state_12747){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_12747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e12759){if((e12759 instanceof Object))
{var ex__6543__auto__ = e12759;var statearr_12760_12913 = state_12747;(statearr_12760_12913[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12914 = state_12747;
state_12747 = G__12914;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_12747){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_12747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(__12903,switch__6539__auto__,c__6554__auto___12906,G__12734_12904,n__4416__auto___12902,jobs,results,process,async))
})();var state__6556__auto__ = (function (){var statearr_12761 = f__6555__auto__.call(null);(statearr_12761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___12906);
return statearr_12761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(__12903,c__6554__auto___12906,G__12734_12904,n__4416__auto___12902,jobs,results,process,async))
);

break;
case "compute":
var c__6554__auto___12915 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12903,c__6554__auto___12915,G__12734_12904,n__4416__auto___12902,jobs,results,process,async){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (__12903,c__6554__auto___12915,G__12734_12904,n__4416__auto___12902,jobs,results,process,async){
return (function (state_12774){var state_val_12775 = (state_12774[(1)]);if((state_val_12775 === (7)))
{var inst_12770 = (state_12774[(2)]);var state_12774__$1 = state_12774;var statearr_12776_12916 = state_12774__$1;(statearr_12776_12916[(2)] = inst_12770);
(statearr_12776_12916[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (6)))
{var state_12774__$1 = state_12774;var statearr_12777_12917 = state_12774__$1;(statearr_12777_12917[(2)] = null);
(statearr_12777_12917[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (5)))
{var state_12774__$1 = state_12774;var statearr_12778_12918 = state_12774__$1;(statearr_12778_12918[(2)] = null);
(statearr_12778_12918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (4)))
{var inst_12764 = (state_12774[(2)]);var inst_12765 = process.call(null,inst_12764);var state_12774__$1 = state_12774;if(cljs.core.truth_(inst_12765))
{var statearr_12779_12919 = state_12774__$1;(statearr_12779_12919[(1)] = (5));
} else
{var statearr_12780_12920 = state_12774__$1;(statearr_12780_12920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (3)))
{var inst_12772 = (state_12774[(2)]);var state_12774__$1 = state_12774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12774__$1,inst_12772);
} else
{if((state_val_12775 === (2)))
{var state_12774__$1 = state_12774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12774__$1,(4),jobs);
} else
{if((state_val_12775 === (1)))
{var state_12774__$1 = state_12774;var statearr_12781_12921 = state_12774__$1;(statearr_12781_12921[(2)] = null);
(statearr_12781_12921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12903,c__6554__auto___12915,G__12734_12904,n__4416__auto___12902,jobs,results,process,async))
;return ((function (__12903,switch__6539__auto__,c__6554__auto___12915,G__12734_12904,n__4416__auto___12902,jobs,results,process,async){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_12785 = [null,null,null,null,null,null,null];(statearr_12785[(0)] = state_machine__6540__auto__);
(statearr_12785[(1)] = (1));
return statearr_12785;
});
var state_machine__6540__auto____1 = (function (state_12774){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_12774);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e12786){if((e12786 instanceof Object))
{var ex__6543__auto__ = e12786;var statearr_12787_12922 = state_12774;(statearr_12787_12922[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12923 = state_12774;
state_12774 = G__12923;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_12774){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_12774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(__12903,switch__6539__auto__,c__6554__auto___12915,G__12734_12904,n__4416__auto___12902,jobs,results,process,async))
})();var state__6556__auto__ = (function (){var statearr_12788 = f__6555__auto__.call(null);(statearr_12788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___12915);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(__12903,c__6554__auto___12915,G__12734_12904,n__4416__auto___12902,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12924 = (__12903 + (1));
__12903 = G__12924;
continue;
}
} else
{}
break;
}
var c__6554__auto___12925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___12925,jobs,results,process,async){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___12925,jobs,results,process,async){
return (function (state_12810){var state_val_12811 = (state_12810[(1)]);if((state_val_12811 === (9)))
{var inst_12803 = (state_12810[(2)]);var state_12810__$1 = (function (){var statearr_12812 = state_12810;(statearr_12812[(7)] = inst_12803);
return statearr_12812;
})();var statearr_12813_12926 = state_12810__$1;(statearr_12813_12926[(2)] = null);
(statearr_12813_12926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (8)))
{var inst_12796 = (state_12810[(8)]);var inst_12801 = (state_12810[(2)]);var state_12810__$1 = (function (){var statearr_12814 = state_12810;(statearr_12814[(9)] = inst_12801);
return statearr_12814;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12810__$1,(9),results,inst_12796);
} else
{if((state_val_12811 === (7)))
{var inst_12806 = (state_12810[(2)]);var state_12810__$1 = state_12810;var statearr_12815_12927 = state_12810__$1;(statearr_12815_12927[(2)] = inst_12806);
(statearr_12815_12927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (6)))
{var inst_12796 = (state_12810[(8)]);var inst_12791 = (state_12810[(10)]);var inst_12796__$1 = cljs.core.async.chan.call(null,(1));var inst_12797 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12798 = [inst_12791,inst_12796__$1];var inst_12799 = (new cljs.core.PersistentVector(null,2,(5),inst_12797,inst_12798,null));var state_12810__$1 = (function (){var statearr_12816 = state_12810;(statearr_12816[(8)] = inst_12796__$1);
return statearr_12816;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12810__$1,(8),jobs,inst_12799);
} else
{if((state_val_12811 === (5)))
{var inst_12794 = cljs.core.async.close_BANG_.call(null,jobs);var state_12810__$1 = state_12810;var statearr_12817_12928 = state_12810__$1;(statearr_12817_12928[(2)] = inst_12794);
(statearr_12817_12928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (4)))
{var inst_12791 = (state_12810[(10)]);var inst_12791__$1 = (state_12810[(2)]);var inst_12792 = (inst_12791__$1 == null);var state_12810__$1 = (function (){var statearr_12818 = state_12810;(statearr_12818[(10)] = inst_12791__$1);
return statearr_12818;
})();if(cljs.core.truth_(inst_12792))
{var statearr_12819_12929 = state_12810__$1;(statearr_12819_12929[(1)] = (5));
} else
{var statearr_12820_12930 = state_12810__$1;(statearr_12820_12930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12811 === (3)))
{var inst_12808 = (state_12810[(2)]);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12810__$1,inst_12808);
} else
{if((state_val_12811 === (2)))
{var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12810__$1,(4),from);
} else
{if((state_val_12811 === (1)))
{var state_12810__$1 = state_12810;var statearr_12821_12931 = state_12810__$1;(statearr_12821_12931[(2)] = null);
(statearr_12821_12931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6554__auto___12925,jobs,results,process,async))
;return ((function (switch__6539__auto__,c__6554__auto___12925,jobs,results,process,async){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_12825 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12825[(0)] = state_machine__6540__auto__);
(statearr_12825[(1)] = (1));
return statearr_12825;
});
var state_machine__6540__auto____1 = (function (state_12810){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_12810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e12826){if((e12826 instanceof Object))
{var ex__6543__auto__ = e12826;var statearr_12827_12932 = state_12810;(statearr_12827_12932[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12933 = state_12810;
state_12810 = G__12933;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_12810){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_12810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___12925,jobs,results,process,async))
})();var state__6556__auto__ = (function (){var statearr_12828 = f__6555__auto__.call(null);(statearr_12828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___12925);
return statearr_12828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___12925,jobs,results,process,async))
);
var c__6554__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto__,jobs,results,process,async){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto__,jobs,results,process,async){
return (function (state_12866){var state_val_12867 = (state_12866[(1)]);if((state_val_12867 === (7)))
{var inst_12862 = (state_12866[(2)]);var state_12866__$1 = state_12866;var statearr_12868_12934 = state_12866__$1;(statearr_12868_12934[(2)] = inst_12862);
(statearr_12868_12934[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (20)))
{var state_12866__$1 = state_12866;var statearr_12869_12935 = state_12866__$1;(statearr_12869_12935[(2)] = null);
(statearr_12869_12935[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (1)))
{var state_12866__$1 = state_12866;var statearr_12870_12936 = state_12866__$1;(statearr_12870_12936[(2)] = null);
(statearr_12870_12936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (4)))
{var inst_12831 = (state_12866[(7)]);var inst_12831__$1 = (state_12866[(2)]);var inst_12832 = (inst_12831__$1 == null);var state_12866__$1 = (function (){var statearr_12871 = state_12866;(statearr_12871[(7)] = inst_12831__$1);
return statearr_12871;
})();if(cljs.core.truth_(inst_12832))
{var statearr_12872_12937 = state_12866__$1;(statearr_12872_12937[(1)] = (5));
} else
{var statearr_12873_12938 = state_12866__$1;(statearr_12873_12938[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (15)))
{var inst_12844 = (state_12866[(8)]);var state_12866__$1 = state_12866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12866__$1,(18),to,inst_12844);
} else
{if((state_val_12867 === (21)))
{var inst_12857 = (state_12866[(2)]);var state_12866__$1 = state_12866;var statearr_12874_12939 = state_12866__$1;(statearr_12874_12939[(2)] = inst_12857);
(statearr_12874_12939[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (13)))
{var inst_12859 = (state_12866[(2)]);var state_12866__$1 = (function (){var statearr_12875 = state_12866;(statearr_12875[(9)] = inst_12859);
return statearr_12875;
})();var statearr_12876_12940 = state_12866__$1;(statearr_12876_12940[(2)] = null);
(statearr_12876_12940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (6)))
{var inst_12831 = (state_12866[(7)]);var state_12866__$1 = state_12866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12866__$1,(11),inst_12831);
} else
{if((state_val_12867 === (17)))
{var inst_12852 = (state_12866[(2)]);var state_12866__$1 = state_12866;if(cljs.core.truth_(inst_12852))
{var statearr_12877_12941 = state_12866__$1;(statearr_12877_12941[(1)] = (19));
} else
{var statearr_12878_12942 = state_12866__$1;(statearr_12878_12942[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (3)))
{var inst_12864 = (state_12866[(2)]);var state_12866__$1 = state_12866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12866__$1,inst_12864);
} else
{if((state_val_12867 === (12)))
{var inst_12841 = (state_12866[(10)]);var state_12866__$1 = state_12866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12866__$1,(14),inst_12841);
} else
{if((state_val_12867 === (2)))
{var state_12866__$1 = state_12866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12866__$1,(4),results);
} else
{if((state_val_12867 === (19)))
{var state_12866__$1 = state_12866;var statearr_12879_12943 = state_12866__$1;(statearr_12879_12943[(2)] = null);
(statearr_12879_12943[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (11)))
{var inst_12841 = (state_12866[(2)]);var state_12866__$1 = (function (){var statearr_12880 = state_12866;(statearr_12880[(10)] = inst_12841);
return statearr_12880;
})();var statearr_12881_12944 = state_12866__$1;(statearr_12881_12944[(2)] = null);
(statearr_12881_12944[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (9)))
{var state_12866__$1 = state_12866;var statearr_12882_12945 = state_12866__$1;(statearr_12882_12945[(2)] = null);
(statearr_12882_12945[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (5)))
{var state_12866__$1 = state_12866;if(cljs.core.truth_(close_QMARK_))
{var statearr_12883_12946 = state_12866__$1;(statearr_12883_12946[(1)] = (8));
} else
{var statearr_12884_12947 = state_12866__$1;(statearr_12884_12947[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (14)))
{var inst_12844 = (state_12866[(8)]);var inst_12846 = (state_12866[(11)]);var inst_12844__$1 = (state_12866[(2)]);var inst_12845 = (inst_12844__$1 == null);var inst_12846__$1 = cljs.core.not.call(null,inst_12845);var state_12866__$1 = (function (){var statearr_12885 = state_12866;(statearr_12885[(8)] = inst_12844__$1);
(statearr_12885[(11)] = inst_12846__$1);
return statearr_12885;
})();if(inst_12846__$1)
{var statearr_12886_12948 = state_12866__$1;(statearr_12886_12948[(1)] = (15));
} else
{var statearr_12887_12949 = state_12866__$1;(statearr_12887_12949[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (16)))
{var inst_12846 = (state_12866[(11)]);var state_12866__$1 = state_12866;var statearr_12888_12950 = state_12866__$1;(statearr_12888_12950[(2)] = inst_12846);
(statearr_12888_12950[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (10)))
{var inst_12838 = (state_12866[(2)]);var state_12866__$1 = state_12866;var statearr_12889_12951 = state_12866__$1;(statearr_12889_12951[(2)] = inst_12838);
(statearr_12889_12951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (18)))
{var inst_12849 = (state_12866[(2)]);var state_12866__$1 = state_12866;var statearr_12890_12952 = state_12866__$1;(statearr_12890_12952[(2)] = inst_12849);
(statearr_12890_12952[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12867 === (8)))
{var inst_12835 = cljs.core.async.close_BANG_.call(null,to);var state_12866__$1 = state_12866;var statearr_12891_12953 = state_12866__$1;(statearr_12891_12953[(2)] = inst_12835);
(statearr_12891_12953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
});})(c__6554__auto__,jobs,results,process,async))
;return ((function (switch__6539__auto__,c__6554__auto__,jobs,results,process,async){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_12895 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12895[(0)] = state_machine__6540__auto__);
(statearr_12895[(1)] = (1));
return statearr_12895;
});
var state_machine__6540__auto____1 = (function (state_12866){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_12866);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e12896){if((e12896 instanceof Object))
{var ex__6543__auto__ = e12896;var statearr_12897_12954 = state_12866;(statearr_12897_12954[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12896;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12955 = state_12866;
state_12866 = G__12955;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_12866){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_12866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto__,jobs,results,process,async))
})();var state__6556__auto__ = (function (){var statearr_12898 = f__6555__auto__.call(null);(statearr_12898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto__);
return statearr_12898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto__,jobs,results,process,async))
);
return c__6554__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6554__auto___13056 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___13056,tc,fc){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___13056,tc,fc){
return (function (state_13031){var state_val_13032 = (state_13031[(1)]);if((state_val_13032 === (7)))
{var inst_13027 = (state_13031[(2)]);var state_13031__$1 = state_13031;var statearr_13033_13057 = state_13031__$1;(statearr_13033_13057[(2)] = inst_13027);
(statearr_13033_13057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (1)))
{var state_13031__$1 = state_13031;var statearr_13034_13058 = state_13031__$1;(statearr_13034_13058[(2)] = null);
(statearr_13034_13058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (4)))
{var inst_13008 = (state_13031[(7)]);var inst_13008__$1 = (state_13031[(2)]);var inst_13009 = (inst_13008__$1 == null);var state_13031__$1 = (function (){var statearr_13035 = state_13031;(statearr_13035[(7)] = inst_13008__$1);
return statearr_13035;
})();if(cljs.core.truth_(inst_13009))
{var statearr_13036_13059 = state_13031__$1;(statearr_13036_13059[(1)] = (5));
} else
{var statearr_13037_13060 = state_13031__$1;(statearr_13037_13060[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (13)))
{var state_13031__$1 = state_13031;var statearr_13038_13061 = state_13031__$1;(statearr_13038_13061[(2)] = null);
(statearr_13038_13061[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (6)))
{var inst_13008 = (state_13031[(7)]);var inst_13014 = p.call(null,inst_13008);var state_13031__$1 = state_13031;if(cljs.core.truth_(inst_13014))
{var statearr_13039_13062 = state_13031__$1;(statearr_13039_13062[(1)] = (9));
} else
{var statearr_13040_13063 = state_13031__$1;(statearr_13040_13063[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (3)))
{var inst_13029 = (state_13031[(2)]);var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13031__$1,inst_13029);
} else
{if((state_val_13032 === (12)))
{var state_13031__$1 = state_13031;var statearr_13041_13064 = state_13031__$1;(statearr_13041_13064[(2)] = null);
(statearr_13041_13064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (2)))
{var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13031__$1,(4),ch);
} else
{if((state_val_13032 === (11)))
{var inst_13008 = (state_13031[(7)]);var inst_13018 = (state_13031[(2)]);var state_13031__$1 = state_13031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13031__$1,(8),inst_13018,inst_13008);
} else
{if((state_val_13032 === (9)))
{var state_13031__$1 = state_13031;var statearr_13042_13065 = state_13031__$1;(statearr_13042_13065[(2)] = tc);
(statearr_13042_13065[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (5)))
{var inst_13011 = cljs.core.async.close_BANG_.call(null,tc);var inst_13012 = cljs.core.async.close_BANG_.call(null,fc);var state_13031__$1 = (function (){var statearr_13043 = state_13031;(statearr_13043[(8)] = inst_13011);
return statearr_13043;
})();var statearr_13044_13066 = state_13031__$1;(statearr_13044_13066[(2)] = inst_13012);
(statearr_13044_13066[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (14)))
{var inst_13025 = (state_13031[(2)]);var state_13031__$1 = state_13031;var statearr_13045_13067 = state_13031__$1;(statearr_13045_13067[(2)] = inst_13025);
(statearr_13045_13067[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (10)))
{var state_13031__$1 = state_13031;var statearr_13046_13068 = state_13031__$1;(statearr_13046_13068[(2)] = fc);
(statearr_13046_13068[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13032 === (8)))
{var inst_13020 = (state_13031[(2)]);var state_13031__$1 = state_13031;if(cljs.core.truth_(inst_13020))
{var statearr_13047_13069 = state_13031__$1;(statearr_13047_13069[(1)] = (12));
} else
{var statearr_13048_13070 = state_13031__$1;(statearr_13048_13070[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___13056,tc,fc))
;return ((function (switch__6539__auto__,c__6554__auto___13056,tc,fc){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_13052 = [null,null,null,null,null,null,null,null,null];(statearr_13052[(0)] = state_machine__6540__auto__);
(statearr_13052[(1)] = (1));
return statearr_13052;
});
var state_machine__6540__auto____1 = (function (state_13031){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_13031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e13053){if((e13053 instanceof Object))
{var ex__6543__auto__ = e13053;var statearr_13054_13071 = state_13031;(statearr_13054_13071[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13072 = state_13031;
state_13031 = G__13072;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_13031){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_13031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___13056,tc,fc))
})();var state__6556__auto__ = (function (){var statearr_13055 = f__6555__auto__.call(null);(statearr_13055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___13056);
return statearr_13055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___13056,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6554__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto__){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto__){
return (function (state_13119){var state_val_13120 = (state_13119[(1)]);if((state_val_13120 === (7)))
{var inst_13115 = (state_13119[(2)]);var state_13119__$1 = state_13119;var statearr_13121_13137 = state_13119__$1;(statearr_13121_13137[(2)] = inst_13115);
(statearr_13121_13137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13120 === (6)))
{var inst_13108 = (state_13119[(7)]);var inst_13105 = (state_13119[(8)]);var inst_13112 = f.call(null,inst_13105,inst_13108);var inst_13105__$1 = inst_13112;var state_13119__$1 = (function (){var statearr_13122 = state_13119;(statearr_13122[(8)] = inst_13105__$1);
return statearr_13122;
})();var statearr_13123_13138 = state_13119__$1;(statearr_13123_13138[(2)] = null);
(statearr_13123_13138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13120 === (5)))
{var inst_13105 = (state_13119[(8)]);var state_13119__$1 = state_13119;var statearr_13124_13139 = state_13119__$1;(statearr_13124_13139[(2)] = inst_13105);
(statearr_13124_13139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13120 === (4)))
{var inst_13108 = (state_13119[(7)]);var inst_13108__$1 = (state_13119[(2)]);var inst_13109 = (inst_13108__$1 == null);var state_13119__$1 = (function (){var statearr_13125 = state_13119;(statearr_13125[(7)] = inst_13108__$1);
return statearr_13125;
})();if(cljs.core.truth_(inst_13109))
{var statearr_13126_13140 = state_13119__$1;(statearr_13126_13140[(1)] = (5));
} else
{var statearr_13127_13141 = state_13119__$1;(statearr_13127_13141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13120 === (3)))
{var inst_13117 = (state_13119[(2)]);var state_13119__$1 = state_13119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13119__$1,inst_13117);
} else
{if((state_val_13120 === (2)))
{var state_13119__$1 = state_13119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13119__$1,(4),ch);
} else
{if((state_val_13120 === (1)))
{var inst_13105 = init;var state_13119__$1 = (function (){var statearr_13128 = state_13119;(statearr_13128[(8)] = inst_13105);
return statearr_13128;
})();var statearr_13129_13142 = state_13119__$1;(statearr_13129_13142[(2)] = null);
(statearr_13129_13142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6554__auto__))
;return ((function (switch__6539__auto__,c__6554__auto__){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_13133 = [null,null,null,null,null,null,null,null,null];(statearr_13133[(0)] = state_machine__6540__auto__);
(statearr_13133[(1)] = (1));
return statearr_13133;
});
var state_machine__6540__auto____1 = (function (state_13119){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_13119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e13134){if((e13134 instanceof Object))
{var ex__6543__auto__ = e13134;var statearr_13135_13143 = state_13119;(statearr_13135_13143[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13144 = state_13119;
state_13119 = G__13144;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_13119){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_13119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto__))
})();var state__6556__auto__ = (function (){var statearr_13136 = f__6555__auto__.call(null);(statearr_13136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto__);
return statearr_13136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto__))
);
return c__6554__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6554__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto__){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto__){
return (function (state_13218){var state_val_13219 = (state_13218[(1)]);if((state_val_13219 === (7)))
{var inst_13200 = (state_13218[(2)]);var state_13218__$1 = state_13218;var statearr_13220_13243 = state_13218__$1;(statearr_13220_13243[(2)] = inst_13200);
(statearr_13220_13243[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (1)))
{var inst_13194 = cljs.core.seq.call(null,coll);var inst_13195 = inst_13194;var state_13218__$1 = (function (){var statearr_13221 = state_13218;(statearr_13221[(7)] = inst_13195);
return statearr_13221;
})();var statearr_13222_13244 = state_13218__$1;(statearr_13222_13244[(2)] = null);
(statearr_13222_13244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (4)))
{var inst_13195 = (state_13218[(7)]);var inst_13198 = cljs.core.first.call(null,inst_13195);var state_13218__$1 = state_13218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13218__$1,(7),ch,inst_13198);
} else
{if((state_val_13219 === (13)))
{var inst_13212 = (state_13218[(2)]);var state_13218__$1 = state_13218;var statearr_13223_13245 = state_13218__$1;(statearr_13223_13245[(2)] = inst_13212);
(statearr_13223_13245[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (6)))
{var inst_13203 = (state_13218[(2)]);var state_13218__$1 = state_13218;if(cljs.core.truth_(inst_13203))
{var statearr_13224_13246 = state_13218__$1;(statearr_13224_13246[(1)] = (8));
} else
{var statearr_13225_13247 = state_13218__$1;(statearr_13225_13247[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (3)))
{var inst_13216 = (state_13218[(2)]);var state_13218__$1 = state_13218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13218__$1,inst_13216);
} else
{if((state_val_13219 === (12)))
{var state_13218__$1 = state_13218;var statearr_13226_13248 = state_13218__$1;(statearr_13226_13248[(2)] = null);
(statearr_13226_13248[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (2)))
{var inst_13195 = (state_13218[(7)]);var state_13218__$1 = state_13218;if(cljs.core.truth_(inst_13195))
{var statearr_13227_13249 = state_13218__$1;(statearr_13227_13249[(1)] = (4));
} else
{var statearr_13228_13250 = state_13218__$1;(statearr_13228_13250[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (11)))
{var inst_13209 = cljs.core.async.close_BANG_.call(null,ch);var state_13218__$1 = state_13218;var statearr_13229_13251 = state_13218__$1;(statearr_13229_13251[(2)] = inst_13209);
(statearr_13229_13251[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (9)))
{var state_13218__$1 = state_13218;if(cljs.core.truth_(close_QMARK_))
{var statearr_13230_13252 = state_13218__$1;(statearr_13230_13252[(1)] = (11));
} else
{var statearr_13231_13253 = state_13218__$1;(statearr_13231_13253[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (5)))
{var inst_13195 = (state_13218[(7)]);var state_13218__$1 = state_13218;var statearr_13232_13254 = state_13218__$1;(statearr_13232_13254[(2)] = inst_13195);
(statearr_13232_13254[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (10)))
{var inst_13214 = (state_13218[(2)]);var state_13218__$1 = state_13218;var statearr_13233_13255 = state_13218__$1;(statearr_13233_13255[(2)] = inst_13214);
(statearr_13233_13255[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13219 === (8)))
{var inst_13195 = (state_13218[(7)]);var inst_13205 = cljs.core.next.call(null,inst_13195);var inst_13195__$1 = inst_13205;var state_13218__$1 = (function (){var statearr_13234 = state_13218;(statearr_13234[(7)] = inst_13195__$1);
return statearr_13234;
})();var statearr_13235_13256 = state_13218__$1;(statearr_13235_13256[(2)] = null);
(statearr_13235_13256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto__))
;return ((function (switch__6539__auto__,c__6554__auto__){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_13239 = [null,null,null,null,null,null,null,null];(statearr_13239[(0)] = state_machine__6540__auto__);
(statearr_13239[(1)] = (1));
return statearr_13239;
});
var state_machine__6540__auto____1 = (function (state_13218){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_13218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e13240){if((e13240 instanceof Object))
{var ex__6543__auto__ = e13240;var statearr_13241_13257 = state_13218;(statearr_13241_13257[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13258 = state_13218;
state_13218 = G__13258;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_13218){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_13218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto__))
})();var state__6556__auto__ = (function (){var statearr_13242 = f__6555__auto__.call(null);(statearr_13242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto__);
return statearr_13242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto__))
);
return c__6554__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13260 = {};return obj13260;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13262 = {};return obj13262;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13484 = (function (cs,ch,mult,meta13485){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13485 = meta13485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13484.cljs$lang$type = true;
cljs.core.async.t13484.cljs$lang$ctorStr = "cljs.core.async/t13484";
cljs.core.async.t13484.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13484");
});})(cs))
;
cljs.core.async.t13484.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13484.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13486){var self__ = this;
var _13486__$1 = this;return self__.meta13485;
});})(cs))
;
cljs.core.async.t13484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13486,meta13485__$1){var self__ = this;
var _13486__$1 = this;return (new cljs.core.async.t13484(self__.cs,self__.ch,self__.mult,meta13485__$1));
});})(cs))
;
cljs.core.async.__GT_t13484 = ((function (cs){
return (function __GT_t13484(cs__$1,ch__$1,mult__$1,meta13485){return (new cljs.core.async.t13484(cs__$1,ch__$1,mult__$1,meta13485));
});})(cs))
;
}
return (new cljs.core.async.t13484(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6554__auto___13705 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___13705,cs,m,dchan,dctr,done){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___13705,cs,m,dchan,dctr,done){
return (function (state_13617){var state_val_13618 = (state_13617[(1)]);if((state_val_13618 === (7)))
{var inst_13613 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13619_13706 = state_13617__$1;(statearr_13619_13706[(2)] = inst_13613);
(statearr_13619_13706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (20)))
{var inst_13518 = (state_13617[(7)]);var inst_13528 = cljs.core.first.call(null,inst_13518);var inst_13529 = cljs.core.nth.call(null,inst_13528,(0),null);var inst_13530 = cljs.core.nth.call(null,inst_13528,(1),null);var state_13617__$1 = (function (){var statearr_13620 = state_13617;(statearr_13620[(8)] = inst_13529);
return statearr_13620;
})();if(cljs.core.truth_(inst_13530))
{var statearr_13621_13707 = state_13617__$1;(statearr_13621_13707[(1)] = (22));
} else
{var statearr_13622_13708 = state_13617__$1;(statearr_13622_13708[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (27)))
{var inst_13558 = (state_13617[(9)]);var inst_13489 = (state_13617[(10)]);var inst_13560 = (state_13617[(11)]);var inst_13565 = (state_13617[(12)]);var inst_13565__$1 = cljs.core._nth.call(null,inst_13558,inst_13560);var inst_13566 = cljs.core.async.put_BANG_.call(null,inst_13565__$1,inst_13489,done);var state_13617__$1 = (function (){var statearr_13623 = state_13617;(statearr_13623[(12)] = inst_13565__$1);
return statearr_13623;
})();if(cljs.core.truth_(inst_13566))
{var statearr_13624_13709 = state_13617__$1;(statearr_13624_13709[(1)] = (30));
} else
{var statearr_13625_13710 = state_13617__$1;(statearr_13625_13710[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (1)))
{var state_13617__$1 = state_13617;var statearr_13626_13711 = state_13617__$1;(statearr_13626_13711[(2)] = null);
(statearr_13626_13711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (24)))
{var inst_13518 = (state_13617[(7)]);var inst_13535 = (state_13617[(2)]);var inst_13536 = cljs.core.next.call(null,inst_13518);var inst_13498 = inst_13536;var inst_13499 = null;var inst_13500 = (0);var inst_13501 = (0);var state_13617__$1 = (function (){var statearr_13627 = state_13617;(statearr_13627[(13)] = inst_13535);
(statearr_13627[(14)] = inst_13498);
(statearr_13627[(15)] = inst_13500);
(statearr_13627[(16)] = inst_13499);
(statearr_13627[(17)] = inst_13501);
return statearr_13627;
})();var statearr_13628_13712 = state_13617__$1;(statearr_13628_13712[(2)] = null);
(statearr_13628_13712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (39)))
{var state_13617__$1 = state_13617;var statearr_13632_13713 = state_13617__$1;(statearr_13632_13713[(2)] = null);
(statearr_13632_13713[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (4)))
{var inst_13489 = (state_13617[(10)]);var inst_13489__$1 = (state_13617[(2)]);var inst_13490 = (inst_13489__$1 == null);var state_13617__$1 = (function (){var statearr_13633 = state_13617;(statearr_13633[(10)] = inst_13489__$1);
return statearr_13633;
})();if(cljs.core.truth_(inst_13490))
{var statearr_13634_13714 = state_13617__$1;(statearr_13634_13714[(1)] = (5));
} else
{var statearr_13635_13715 = state_13617__$1;(statearr_13635_13715[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (15)))
{var inst_13498 = (state_13617[(14)]);var inst_13500 = (state_13617[(15)]);var inst_13499 = (state_13617[(16)]);var inst_13501 = (state_13617[(17)]);var inst_13514 = (state_13617[(2)]);var inst_13515 = (inst_13501 + (1));var tmp13629 = inst_13498;var tmp13630 = inst_13500;var tmp13631 = inst_13499;var inst_13498__$1 = tmp13629;var inst_13499__$1 = tmp13631;var inst_13500__$1 = tmp13630;var inst_13501__$1 = inst_13515;var state_13617__$1 = (function (){var statearr_13636 = state_13617;(statearr_13636[(14)] = inst_13498__$1);
(statearr_13636[(18)] = inst_13514);
(statearr_13636[(15)] = inst_13500__$1);
(statearr_13636[(16)] = inst_13499__$1);
(statearr_13636[(17)] = inst_13501__$1);
return statearr_13636;
})();var statearr_13637_13716 = state_13617__$1;(statearr_13637_13716[(2)] = null);
(statearr_13637_13716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (21)))
{var inst_13539 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13641_13717 = state_13617__$1;(statearr_13641_13717[(2)] = inst_13539);
(statearr_13641_13717[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (31)))
{var inst_13565 = (state_13617[(12)]);var inst_13569 = done.call(null,null);var inst_13570 = cljs.core.async.untap_STAR_.call(null,m,inst_13565);var state_13617__$1 = (function (){var statearr_13642 = state_13617;(statearr_13642[(19)] = inst_13569);
return statearr_13642;
})();var statearr_13643_13718 = state_13617__$1;(statearr_13643_13718[(2)] = inst_13570);
(statearr_13643_13718[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (32)))
{var inst_13558 = (state_13617[(9)]);var inst_13557 = (state_13617[(20)]);var inst_13559 = (state_13617[(21)]);var inst_13560 = (state_13617[(11)]);var inst_13572 = (state_13617[(2)]);var inst_13573 = (inst_13560 + (1));var tmp13638 = inst_13558;var tmp13639 = inst_13557;var tmp13640 = inst_13559;var inst_13557__$1 = tmp13639;var inst_13558__$1 = tmp13638;var inst_13559__$1 = tmp13640;var inst_13560__$1 = inst_13573;var state_13617__$1 = (function (){var statearr_13644 = state_13617;(statearr_13644[(22)] = inst_13572);
(statearr_13644[(9)] = inst_13558__$1);
(statearr_13644[(20)] = inst_13557__$1);
(statearr_13644[(21)] = inst_13559__$1);
(statearr_13644[(11)] = inst_13560__$1);
return statearr_13644;
})();var statearr_13645_13719 = state_13617__$1;(statearr_13645_13719[(2)] = null);
(statearr_13645_13719[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (40)))
{var inst_13585 = (state_13617[(23)]);var inst_13589 = done.call(null,null);var inst_13590 = cljs.core.async.untap_STAR_.call(null,m,inst_13585);var state_13617__$1 = (function (){var statearr_13646 = state_13617;(statearr_13646[(24)] = inst_13589);
return statearr_13646;
})();var statearr_13647_13720 = state_13617__$1;(statearr_13647_13720[(2)] = inst_13590);
(statearr_13647_13720[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (33)))
{var inst_13576 = (state_13617[(25)]);var inst_13578 = cljs.core.chunked_seq_QMARK_.call(null,inst_13576);var state_13617__$1 = state_13617;if(inst_13578)
{var statearr_13648_13721 = state_13617__$1;(statearr_13648_13721[(1)] = (36));
} else
{var statearr_13649_13722 = state_13617__$1;(statearr_13649_13722[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (13)))
{var inst_13508 = (state_13617[(26)]);var inst_13511 = cljs.core.async.close_BANG_.call(null,inst_13508);var state_13617__$1 = state_13617;var statearr_13650_13723 = state_13617__$1;(statearr_13650_13723[(2)] = inst_13511);
(statearr_13650_13723[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (22)))
{var inst_13529 = (state_13617[(8)]);var inst_13532 = cljs.core.async.close_BANG_.call(null,inst_13529);var state_13617__$1 = state_13617;var statearr_13651_13724 = state_13617__$1;(statearr_13651_13724[(2)] = inst_13532);
(statearr_13651_13724[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (36)))
{var inst_13576 = (state_13617[(25)]);var inst_13580 = cljs.core.chunk_first.call(null,inst_13576);var inst_13581 = cljs.core.chunk_rest.call(null,inst_13576);var inst_13582 = cljs.core.count.call(null,inst_13580);var inst_13557 = inst_13581;var inst_13558 = inst_13580;var inst_13559 = inst_13582;var inst_13560 = (0);var state_13617__$1 = (function (){var statearr_13652 = state_13617;(statearr_13652[(9)] = inst_13558);
(statearr_13652[(20)] = inst_13557);
(statearr_13652[(21)] = inst_13559);
(statearr_13652[(11)] = inst_13560);
return statearr_13652;
})();var statearr_13653_13725 = state_13617__$1;(statearr_13653_13725[(2)] = null);
(statearr_13653_13725[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (41)))
{var inst_13576 = (state_13617[(25)]);var inst_13592 = (state_13617[(2)]);var inst_13593 = cljs.core.next.call(null,inst_13576);var inst_13557 = inst_13593;var inst_13558 = null;var inst_13559 = (0);var inst_13560 = (0);var state_13617__$1 = (function (){var statearr_13654 = state_13617;(statearr_13654[(27)] = inst_13592);
(statearr_13654[(9)] = inst_13558);
(statearr_13654[(20)] = inst_13557);
(statearr_13654[(21)] = inst_13559);
(statearr_13654[(11)] = inst_13560);
return statearr_13654;
})();var statearr_13655_13726 = state_13617__$1;(statearr_13655_13726[(2)] = null);
(statearr_13655_13726[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (43)))
{var state_13617__$1 = state_13617;var statearr_13656_13727 = state_13617__$1;(statearr_13656_13727[(2)] = null);
(statearr_13656_13727[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (29)))
{var inst_13601 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13657_13728 = state_13617__$1;(statearr_13657_13728[(2)] = inst_13601);
(statearr_13657_13728[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (44)))
{var inst_13610 = (state_13617[(2)]);var state_13617__$1 = (function (){var statearr_13658 = state_13617;(statearr_13658[(28)] = inst_13610);
return statearr_13658;
})();var statearr_13659_13729 = state_13617__$1;(statearr_13659_13729[(2)] = null);
(statearr_13659_13729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (6)))
{var inst_13549 = (state_13617[(29)]);var inst_13548 = cljs.core.deref.call(null,cs);var inst_13549__$1 = cljs.core.keys.call(null,inst_13548);var inst_13550 = cljs.core.count.call(null,inst_13549__$1);var inst_13551 = cljs.core.reset_BANG_.call(null,dctr,inst_13550);var inst_13556 = cljs.core.seq.call(null,inst_13549__$1);var inst_13557 = inst_13556;var inst_13558 = null;var inst_13559 = (0);var inst_13560 = (0);var state_13617__$1 = (function (){var statearr_13660 = state_13617;(statearr_13660[(29)] = inst_13549__$1);
(statearr_13660[(9)] = inst_13558);
(statearr_13660[(30)] = inst_13551);
(statearr_13660[(20)] = inst_13557);
(statearr_13660[(21)] = inst_13559);
(statearr_13660[(11)] = inst_13560);
return statearr_13660;
})();var statearr_13661_13730 = state_13617__$1;(statearr_13661_13730[(2)] = null);
(statearr_13661_13730[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (28)))
{var inst_13576 = (state_13617[(25)]);var inst_13557 = (state_13617[(20)]);var inst_13576__$1 = cljs.core.seq.call(null,inst_13557);var state_13617__$1 = (function (){var statearr_13662 = state_13617;(statearr_13662[(25)] = inst_13576__$1);
return statearr_13662;
})();if(inst_13576__$1)
{var statearr_13663_13731 = state_13617__$1;(statearr_13663_13731[(1)] = (33));
} else
{var statearr_13664_13732 = state_13617__$1;(statearr_13664_13732[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (25)))
{var inst_13559 = (state_13617[(21)]);var inst_13560 = (state_13617[(11)]);var inst_13562 = (inst_13560 < inst_13559);var inst_13563 = inst_13562;var state_13617__$1 = state_13617;if(cljs.core.truth_(inst_13563))
{var statearr_13665_13733 = state_13617__$1;(statearr_13665_13733[(1)] = (27));
} else
{var statearr_13666_13734 = state_13617__$1;(statearr_13666_13734[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (34)))
{var state_13617__$1 = state_13617;var statearr_13667_13735 = state_13617__$1;(statearr_13667_13735[(2)] = null);
(statearr_13667_13735[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (17)))
{var state_13617__$1 = state_13617;var statearr_13668_13736 = state_13617__$1;(statearr_13668_13736[(2)] = null);
(statearr_13668_13736[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (3)))
{var inst_13615 = (state_13617[(2)]);var state_13617__$1 = state_13617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13617__$1,inst_13615);
} else
{if((state_val_13618 === (12)))
{var inst_13544 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13669_13737 = state_13617__$1;(statearr_13669_13737[(2)] = inst_13544);
(statearr_13669_13737[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (2)))
{var state_13617__$1 = state_13617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13617__$1,(4),ch);
} else
{if((state_val_13618 === (23)))
{var state_13617__$1 = state_13617;var statearr_13670_13738 = state_13617__$1;(statearr_13670_13738[(2)] = null);
(statearr_13670_13738[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (35)))
{var inst_13599 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13671_13739 = state_13617__$1;(statearr_13671_13739[(2)] = inst_13599);
(statearr_13671_13739[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (19)))
{var inst_13518 = (state_13617[(7)]);var inst_13522 = cljs.core.chunk_first.call(null,inst_13518);var inst_13523 = cljs.core.chunk_rest.call(null,inst_13518);var inst_13524 = cljs.core.count.call(null,inst_13522);var inst_13498 = inst_13523;var inst_13499 = inst_13522;var inst_13500 = inst_13524;var inst_13501 = (0);var state_13617__$1 = (function (){var statearr_13672 = state_13617;(statearr_13672[(14)] = inst_13498);
(statearr_13672[(15)] = inst_13500);
(statearr_13672[(16)] = inst_13499);
(statearr_13672[(17)] = inst_13501);
return statearr_13672;
})();var statearr_13673_13740 = state_13617__$1;(statearr_13673_13740[(2)] = null);
(statearr_13673_13740[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (11)))
{var inst_13498 = (state_13617[(14)]);var inst_13518 = (state_13617[(7)]);var inst_13518__$1 = cljs.core.seq.call(null,inst_13498);var state_13617__$1 = (function (){var statearr_13674 = state_13617;(statearr_13674[(7)] = inst_13518__$1);
return statearr_13674;
})();if(inst_13518__$1)
{var statearr_13675_13741 = state_13617__$1;(statearr_13675_13741[(1)] = (16));
} else
{var statearr_13676_13742 = state_13617__$1;(statearr_13676_13742[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (9)))
{var inst_13546 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13677_13743 = state_13617__$1;(statearr_13677_13743[(2)] = inst_13546);
(statearr_13677_13743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (5)))
{var inst_13496 = cljs.core.deref.call(null,cs);var inst_13497 = cljs.core.seq.call(null,inst_13496);var inst_13498 = inst_13497;var inst_13499 = null;var inst_13500 = (0);var inst_13501 = (0);var state_13617__$1 = (function (){var statearr_13678 = state_13617;(statearr_13678[(14)] = inst_13498);
(statearr_13678[(15)] = inst_13500);
(statearr_13678[(16)] = inst_13499);
(statearr_13678[(17)] = inst_13501);
return statearr_13678;
})();var statearr_13679_13744 = state_13617__$1;(statearr_13679_13744[(2)] = null);
(statearr_13679_13744[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (14)))
{var state_13617__$1 = state_13617;var statearr_13680_13745 = state_13617__$1;(statearr_13680_13745[(2)] = null);
(statearr_13680_13745[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (45)))
{var inst_13607 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13681_13746 = state_13617__$1;(statearr_13681_13746[(2)] = inst_13607);
(statearr_13681_13746[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (26)))
{var inst_13549 = (state_13617[(29)]);var inst_13603 = (state_13617[(2)]);var inst_13604 = cljs.core.seq.call(null,inst_13549);var state_13617__$1 = (function (){var statearr_13682 = state_13617;(statearr_13682[(31)] = inst_13603);
return statearr_13682;
})();if(inst_13604)
{var statearr_13683_13747 = state_13617__$1;(statearr_13683_13747[(1)] = (42));
} else
{var statearr_13684_13748 = state_13617__$1;(statearr_13684_13748[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (16)))
{var inst_13518 = (state_13617[(7)]);var inst_13520 = cljs.core.chunked_seq_QMARK_.call(null,inst_13518);var state_13617__$1 = state_13617;if(inst_13520)
{var statearr_13685_13749 = state_13617__$1;(statearr_13685_13749[(1)] = (19));
} else
{var statearr_13686_13750 = state_13617__$1;(statearr_13686_13750[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (38)))
{var inst_13596 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13687_13751 = state_13617__$1;(statearr_13687_13751[(2)] = inst_13596);
(statearr_13687_13751[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (30)))
{var state_13617__$1 = state_13617;var statearr_13688_13752 = state_13617__$1;(statearr_13688_13752[(2)] = null);
(statearr_13688_13752[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (10)))
{var inst_13499 = (state_13617[(16)]);var inst_13501 = (state_13617[(17)]);var inst_13507 = cljs.core._nth.call(null,inst_13499,inst_13501);var inst_13508 = cljs.core.nth.call(null,inst_13507,(0),null);var inst_13509 = cljs.core.nth.call(null,inst_13507,(1),null);var state_13617__$1 = (function (){var statearr_13689 = state_13617;(statearr_13689[(26)] = inst_13508);
return statearr_13689;
})();if(cljs.core.truth_(inst_13509))
{var statearr_13690_13753 = state_13617__$1;(statearr_13690_13753[(1)] = (13));
} else
{var statearr_13691_13754 = state_13617__$1;(statearr_13691_13754[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (18)))
{var inst_13542 = (state_13617[(2)]);var state_13617__$1 = state_13617;var statearr_13692_13755 = state_13617__$1;(statearr_13692_13755[(2)] = inst_13542);
(statearr_13692_13755[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (42)))
{var state_13617__$1 = state_13617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13617__$1,(45),dchan);
} else
{if((state_val_13618 === (37)))
{var inst_13585 = (state_13617[(23)]);var inst_13576 = (state_13617[(25)]);var inst_13489 = (state_13617[(10)]);var inst_13585__$1 = cljs.core.first.call(null,inst_13576);var inst_13586 = cljs.core.async.put_BANG_.call(null,inst_13585__$1,inst_13489,done);var state_13617__$1 = (function (){var statearr_13693 = state_13617;(statearr_13693[(23)] = inst_13585__$1);
return statearr_13693;
})();if(cljs.core.truth_(inst_13586))
{var statearr_13694_13756 = state_13617__$1;(statearr_13694_13756[(1)] = (39));
} else
{var statearr_13695_13757 = state_13617__$1;(statearr_13695_13757[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13618 === (8)))
{var inst_13500 = (state_13617[(15)]);var inst_13501 = (state_13617[(17)]);var inst_13503 = (inst_13501 < inst_13500);var inst_13504 = inst_13503;var state_13617__$1 = state_13617;if(cljs.core.truth_(inst_13504))
{var statearr_13696_13758 = state_13617__$1;(statearr_13696_13758[(1)] = (10));
} else
{var statearr_13697_13759 = state_13617__$1;(statearr_13697_13759[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
}
}
}
}
});})(c__6554__auto___13705,cs,m,dchan,dctr,done))
;return ((function (switch__6539__auto__,c__6554__auto___13705,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_13701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13701[(0)] = state_machine__6540__auto__);
(statearr_13701[(1)] = (1));
return statearr_13701;
});
var state_machine__6540__auto____1 = (function (state_13617){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_13617);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e13702){if((e13702 instanceof Object))
{var ex__6543__auto__ = e13702;var statearr_13703_13760 = state_13617;(statearr_13703_13760[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13761 = state_13617;
state_13617 = G__13761;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_13617){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_13617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___13705,cs,m,dchan,dctr,done))
})();var state__6556__auto__ = (function (){var statearr_13704 = f__6555__auto__.call(null);(statearr_13704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___13705);
return statearr_13704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___13705,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13763 = {};return obj13763;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13883 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13883 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13884){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13884 = meta13884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13883.cljs$lang$type = true;
cljs.core.async.t13883.cljs$lang$ctorStr = "cljs.core.async/t13883";
cljs.core.async.t13883.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13883");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13883.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13883.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13885){var self__ = this;
var _13885__$1 = this;return self__.meta13884;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13885,meta13884__$1){var self__ = this;
var _13885__$1 = this;return (new cljs.core.async.t13883(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13884__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13883 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13883(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13884){return (new cljs.core.async.t13883(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13884));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13883(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6554__auto___14002 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___14002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___14002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13955){var state_val_13956 = (state_13955[(1)]);if((state_val_13956 === (7)))
{var inst_13899 = (state_13955[(7)]);var inst_13904 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13899);var state_13955__$1 = state_13955;var statearr_13957_14003 = state_13955__$1;(statearr_13957_14003[(2)] = inst_13904);
(statearr_13957_14003[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (20)))
{var inst_13914 = (state_13955[(8)]);var state_13955__$1 = state_13955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13955__$1,(23),out,inst_13914);
} else
{if((state_val_13956 === (1)))
{var inst_13889 = (state_13955[(9)]);var inst_13889__$1 = calc_state.call(null);var inst_13890 = cljs.core.seq_QMARK_.call(null,inst_13889__$1);var state_13955__$1 = (function (){var statearr_13958 = state_13955;(statearr_13958[(9)] = inst_13889__$1);
return statearr_13958;
})();if(inst_13890)
{var statearr_13959_14004 = state_13955__$1;(statearr_13959_14004[(1)] = (2));
} else
{var statearr_13960_14005 = state_13955__$1;(statearr_13960_14005[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (24)))
{var inst_13907 = (state_13955[(10)]);var inst_13899 = inst_13907;var state_13955__$1 = (function (){var statearr_13961 = state_13955;(statearr_13961[(7)] = inst_13899);
return statearr_13961;
})();var statearr_13962_14006 = state_13955__$1;(statearr_13962_14006[(2)] = null);
(statearr_13962_14006[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (4)))
{var inst_13889 = (state_13955[(9)]);var inst_13895 = (state_13955[(2)]);var inst_13896 = cljs.core.get.call(null,inst_13895,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13897 = cljs.core.get.call(null,inst_13895,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13898 = cljs.core.get.call(null,inst_13895,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13899 = inst_13889;var state_13955__$1 = (function (){var statearr_13963 = state_13955;(statearr_13963[(7)] = inst_13899);
(statearr_13963[(11)] = inst_13897);
(statearr_13963[(12)] = inst_13896);
(statearr_13963[(13)] = inst_13898);
return statearr_13963;
})();var statearr_13964_14007 = state_13955__$1;(statearr_13964_14007[(2)] = null);
(statearr_13964_14007[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (15)))
{var state_13955__$1 = state_13955;var statearr_13965_14008 = state_13955__$1;(statearr_13965_14008[(2)] = null);
(statearr_13965_14008[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (21)))
{var inst_13907 = (state_13955[(10)]);var inst_13899 = inst_13907;var state_13955__$1 = (function (){var statearr_13966 = state_13955;(statearr_13966[(7)] = inst_13899);
return statearr_13966;
})();var statearr_13967_14009 = state_13955__$1;(statearr_13967_14009[(2)] = null);
(statearr_13967_14009[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (13)))
{var inst_13951 = (state_13955[(2)]);var state_13955__$1 = state_13955;var statearr_13968_14010 = state_13955__$1;(statearr_13968_14010[(2)] = inst_13951);
(statearr_13968_14010[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (22)))
{var inst_13949 = (state_13955[(2)]);var state_13955__$1 = state_13955;var statearr_13969_14011 = state_13955__$1;(statearr_13969_14011[(2)] = inst_13949);
(statearr_13969_14011[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (6)))
{var inst_13953 = (state_13955[(2)]);var state_13955__$1 = state_13955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13955__$1,inst_13953);
} else
{if((state_val_13956 === (25)))
{var state_13955__$1 = state_13955;var statearr_13970_14012 = state_13955__$1;(statearr_13970_14012[(2)] = null);
(statearr_13970_14012[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (17)))
{var inst_13929 = (state_13955[(14)]);var state_13955__$1 = state_13955;var statearr_13971_14013 = state_13955__$1;(statearr_13971_14013[(2)] = inst_13929);
(statearr_13971_14013[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (3)))
{var inst_13889 = (state_13955[(9)]);var state_13955__$1 = state_13955;var statearr_13972_14014 = state_13955__$1;(statearr_13972_14014[(2)] = inst_13889);
(statearr_13972_14014[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (12)))
{var inst_13915 = (state_13955[(15)]);var inst_13910 = (state_13955[(16)]);var inst_13929 = (state_13955[(14)]);var inst_13929__$1 = inst_13910.call(null,inst_13915);var state_13955__$1 = (function (){var statearr_13973 = state_13955;(statearr_13973[(14)] = inst_13929__$1);
return statearr_13973;
})();if(cljs.core.truth_(inst_13929__$1))
{var statearr_13974_14015 = state_13955__$1;(statearr_13974_14015[(1)] = (17));
} else
{var statearr_13975_14016 = state_13955__$1;(statearr_13975_14016[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (2)))
{var inst_13889 = (state_13955[(9)]);var inst_13892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13889);var state_13955__$1 = state_13955;var statearr_13976_14017 = state_13955__$1;(statearr_13976_14017[(2)] = inst_13892);
(statearr_13976_14017[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (23)))
{var inst_13940 = (state_13955[(2)]);var state_13955__$1 = state_13955;if(cljs.core.truth_(inst_13940))
{var statearr_13977_14018 = state_13955__$1;(statearr_13977_14018[(1)] = (24));
} else
{var statearr_13978_14019 = state_13955__$1;(statearr_13978_14019[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (19)))
{var inst_13937 = (state_13955[(2)]);var state_13955__$1 = state_13955;if(cljs.core.truth_(inst_13937))
{var statearr_13979_14020 = state_13955__$1;(statearr_13979_14020[(1)] = (20));
} else
{var statearr_13980_14021 = state_13955__$1;(statearr_13980_14021[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (11)))
{var inst_13914 = (state_13955[(8)]);var inst_13920 = (inst_13914 == null);var state_13955__$1 = state_13955;if(cljs.core.truth_(inst_13920))
{var statearr_13981_14022 = state_13955__$1;(statearr_13981_14022[(1)] = (14));
} else
{var statearr_13982_14023 = state_13955__$1;(statearr_13982_14023[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (9)))
{var inst_13907 = (state_13955[(10)]);var inst_13907__$1 = (state_13955[(2)]);var inst_13908 = cljs.core.get.call(null,inst_13907__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13909 = cljs.core.get.call(null,inst_13907__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13910 = cljs.core.get.call(null,inst_13907__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13955__$1 = (function (){var statearr_13983 = state_13955;(statearr_13983[(16)] = inst_13910);
(statearr_13983[(10)] = inst_13907__$1);
(statearr_13983[(17)] = inst_13909);
return statearr_13983;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13955__$1,(10),inst_13908);
} else
{if((state_val_13956 === (5)))
{var inst_13899 = (state_13955[(7)]);var inst_13902 = cljs.core.seq_QMARK_.call(null,inst_13899);var state_13955__$1 = state_13955;if(inst_13902)
{var statearr_13984_14024 = state_13955__$1;(statearr_13984_14024[(1)] = (7));
} else
{var statearr_13985_14025 = state_13955__$1;(statearr_13985_14025[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (14)))
{var inst_13915 = (state_13955[(15)]);var inst_13922 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13915);var state_13955__$1 = state_13955;var statearr_13986_14026 = state_13955__$1;(statearr_13986_14026[(2)] = inst_13922);
(statearr_13986_14026[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (26)))
{var inst_13945 = (state_13955[(2)]);var state_13955__$1 = state_13955;var statearr_13987_14027 = state_13955__$1;(statearr_13987_14027[(2)] = inst_13945);
(statearr_13987_14027[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (16)))
{var inst_13925 = (state_13955[(2)]);var inst_13926 = calc_state.call(null);var inst_13899 = inst_13926;var state_13955__$1 = (function (){var statearr_13988 = state_13955;(statearr_13988[(7)] = inst_13899);
(statearr_13988[(18)] = inst_13925);
return statearr_13988;
})();var statearr_13989_14028 = state_13955__$1;(statearr_13989_14028[(2)] = null);
(statearr_13989_14028[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (10)))
{var inst_13915 = (state_13955[(15)]);var inst_13914 = (state_13955[(8)]);var inst_13913 = (state_13955[(2)]);var inst_13914__$1 = cljs.core.nth.call(null,inst_13913,(0),null);var inst_13915__$1 = cljs.core.nth.call(null,inst_13913,(1),null);var inst_13916 = (inst_13914__$1 == null);var inst_13917 = cljs.core._EQ_.call(null,inst_13915__$1,change);var inst_13918 = (inst_13916) || (inst_13917);var state_13955__$1 = (function (){var statearr_13990 = state_13955;(statearr_13990[(15)] = inst_13915__$1);
(statearr_13990[(8)] = inst_13914__$1);
return statearr_13990;
})();if(cljs.core.truth_(inst_13918))
{var statearr_13991_14029 = state_13955__$1;(statearr_13991_14029[(1)] = (11));
} else
{var statearr_13992_14030 = state_13955__$1;(statearr_13992_14030[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (18)))
{var inst_13915 = (state_13955[(15)]);var inst_13910 = (state_13955[(16)]);var inst_13909 = (state_13955[(17)]);var inst_13932 = cljs.core.empty_QMARK_.call(null,inst_13910);var inst_13933 = inst_13909.call(null,inst_13915);var inst_13934 = cljs.core.not.call(null,inst_13933);var inst_13935 = (inst_13932) && (inst_13934);var state_13955__$1 = state_13955;var statearr_13993_14031 = state_13955__$1;(statearr_13993_14031[(2)] = inst_13935);
(statearr_13993_14031[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13956 === (8)))
{var inst_13899 = (state_13955[(7)]);var state_13955__$1 = state_13955;var statearr_13994_14032 = state_13955__$1;(statearr_13994_14032[(2)] = inst_13899);
(statearr_13994_14032[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
}
}
}
}
});})(c__6554__auto___14002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6539__auto__,c__6554__auto___14002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_13998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13998[(0)] = state_machine__6540__auto__);
(statearr_13998[(1)] = (1));
return statearr_13998;
});
var state_machine__6540__auto____1 = (function (state_13955){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_13955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e13999){if((e13999 instanceof Object))
{var ex__6543__auto__ = e13999;var statearr_14000_14033 = state_13955;(statearr_14000_14033[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14034 = state_13955;
state_13955 = G__14034;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_13955){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_13955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___14002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6556__auto__ = (function (){var statearr_14001 = f__6555__auto__.call(null);(statearr_14001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___14002);
return statearr_14001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___14002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14036 = {};return obj14036;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3560__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3560__auto__,mults){
return (function (p1__14037_SHARP_){if(cljs.core.truth_(p1__14037_SHARP_.call(null,topic)))
{return p1__14037_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14037_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14160 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14161){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14161 = meta14161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14160.cljs$lang$type = true;
cljs.core.async.t14160.cljs$lang$ctorStr = "cljs.core.async/t14160";
cljs.core.async.t14160.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14160");
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14160.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14162){var self__ = this;
var _14162__$1 = this;return self__.meta14161;
});})(mults,ensure_mult))
;
cljs.core.async.t14160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14162,meta14161__$1){var self__ = this;
var _14162__$1 = this;return (new cljs.core.async.t14160(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14161__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14160 = ((function (mults,ensure_mult){
return (function __GT_t14160(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14161){return (new cljs.core.async.t14160(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14161));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14160(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6554__auto___14282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___14282,mults,ensure_mult,p){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___14282,mults,ensure_mult,p){
return (function (state_14234){var state_val_14235 = (state_14234[(1)]);if((state_val_14235 === (7)))
{var inst_14230 = (state_14234[(2)]);var state_14234__$1 = state_14234;var statearr_14236_14283 = state_14234__$1;(statearr_14236_14283[(2)] = inst_14230);
(statearr_14236_14283[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (20)))
{var state_14234__$1 = state_14234;var statearr_14237_14284 = state_14234__$1;(statearr_14237_14284[(2)] = null);
(statearr_14237_14284[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (1)))
{var state_14234__$1 = state_14234;var statearr_14238_14285 = state_14234__$1;(statearr_14238_14285[(2)] = null);
(statearr_14238_14285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (24)))
{var inst_14213 = (state_14234[(7)]);var inst_14222 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14213);var state_14234__$1 = state_14234;var statearr_14239_14286 = state_14234__$1;(statearr_14239_14286[(2)] = inst_14222);
(statearr_14239_14286[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (4)))
{var inst_14165 = (state_14234[(8)]);var inst_14165__$1 = (state_14234[(2)]);var inst_14166 = (inst_14165__$1 == null);var state_14234__$1 = (function (){var statearr_14240 = state_14234;(statearr_14240[(8)] = inst_14165__$1);
return statearr_14240;
})();if(cljs.core.truth_(inst_14166))
{var statearr_14241_14287 = state_14234__$1;(statearr_14241_14287[(1)] = (5));
} else
{var statearr_14242_14288 = state_14234__$1;(statearr_14242_14288[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (15)))
{var inst_14207 = (state_14234[(2)]);var state_14234__$1 = state_14234;var statearr_14243_14289 = state_14234__$1;(statearr_14243_14289[(2)] = inst_14207);
(statearr_14243_14289[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (21)))
{var inst_14227 = (state_14234[(2)]);var state_14234__$1 = (function (){var statearr_14244 = state_14234;(statearr_14244[(9)] = inst_14227);
return statearr_14244;
})();var statearr_14245_14290 = state_14234__$1;(statearr_14245_14290[(2)] = null);
(statearr_14245_14290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (13)))
{var inst_14189 = (state_14234[(10)]);var inst_14191 = cljs.core.chunked_seq_QMARK_.call(null,inst_14189);var state_14234__$1 = state_14234;if(inst_14191)
{var statearr_14246_14291 = state_14234__$1;(statearr_14246_14291[(1)] = (16));
} else
{var statearr_14247_14292 = state_14234__$1;(statearr_14247_14292[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (22)))
{var inst_14219 = (state_14234[(2)]);var state_14234__$1 = state_14234;if(cljs.core.truth_(inst_14219))
{var statearr_14248_14293 = state_14234__$1;(statearr_14248_14293[(1)] = (23));
} else
{var statearr_14249_14294 = state_14234__$1;(statearr_14249_14294[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (6)))
{var inst_14215 = (state_14234[(11)]);var inst_14165 = (state_14234[(8)]);var inst_14213 = (state_14234[(7)]);var inst_14213__$1 = topic_fn.call(null,inst_14165);var inst_14214 = cljs.core.deref.call(null,mults);var inst_14215__$1 = cljs.core.get.call(null,inst_14214,inst_14213__$1);var state_14234__$1 = (function (){var statearr_14250 = state_14234;(statearr_14250[(11)] = inst_14215__$1);
(statearr_14250[(7)] = inst_14213__$1);
return statearr_14250;
})();if(cljs.core.truth_(inst_14215__$1))
{var statearr_14251_14295 = state_14234__$1;(statearr_14251_14295[(1)] = (19));
} else
{var statearr_14252_14296 = state_14234__$1;(statearr_14252_14296[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (25)))
{var inst_14224 = (state_14234[(2)]);var state_14234__$1 = state_14234;var statearr_14253_14297 = state_14234__$1;(statearr_14253_14297[(2)] = inst_14224);
(statearr_14253_14297[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (17)))
{var inst_14189 = (state_14234[(10)]);var inst_14198 = cljs.core.first.call(null,inst_14189);var inst_14199 = cljs.core.async.muxch_STAR_.call(null,inst_14198);var inst_14200 = cljs.core.async.close_BANG_.call(null,inst_14199);var inst_14201 = cljs.core.next.call(null,inst_14189);var inst_14175 = inst_14201;var inst_14176 = null;var inst_14177 = (0);var inst_14178 = (0);var state_14234__$1 = (function (){var statearr_14254 = state_14234;(statearr_14254[(12)] = inst_14176);
(statearr_14254[(13)] = inst_14178);
(statearr_14254[(14)] = inst_14175);
(statearr_14254[(15)] = inst_14177);
(statearr_14254[(16)] = inst_14200);
return statearr_14254;
})();var statearr_14255_14298 = state_14234__$1;(statearr_14255_14298[(2)] = null);
(statearr_14255_14298[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (3)))
{var inst_14232 = (state_14234[(2)]);var state_14234__$1 = state_14234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14234__$1,inst_14232);
} else
{if((state_val_14235 === (12)))
{var inst_14209 = (state_14234[(2)]);var state_14234__$1 = state_14234;var statearr_14256_14299 = state_14234__$1;(statearr_14256_14299[(2)] = inst_14209);
(statearr_14256_14299[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (2)))
{var state_14234__$1 = state_14234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14234__$1,(4),ch);
} else
{if((state_val_14235 === (23)))
{var state_14234__$1 = state_14234;var statearr_14257_14300 = state_14234__$1;(statearr_14257_14300[(2)] = null);
(statearr_14257_14300[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (19)))
{var inst_14215 = (state_14234[(11)]);var inst_14165 = (state_14234[(8)]);var inst_14217 = cljs.core.async.muxch_STAR_.call(null,inst_14215);var state_14234__$1 = state_14234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14234__$1,(22),inst_14217,inst_14165);
} else
{if((state_val_14235 === (11)))
{var inst_14189 = (state_14234[(10)]);var inst_14175 = (state_14234[(14)]);var inst_14189__$1 = cljs.core.seq.call(null,inst_14175);var state_14234__$1 = (function (){var statearr_14258 = state_14234;(statearr_14258[(10)] = inst_14189__$1);
return statearr_14258;
})();if(inst_14189__$1)
{var statearr_14259_14301 = state_14234__$1;(statearr_14259_14301[(1)] = (13));
} else
{var statearr_14260_14302 = state_14234__$1;(statearr_14260_14302[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (9)))
{var inst_14211 = (state_14234[(2)]);var state_14234__$1 = state_14234;var statearr_14261_14303 = state_14234__$1;(statearr_14261_14303[(2)] = inst_14211);
(statearr_14261_14303[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (5)))
{var inst_14172 = cljs.core.deref.call(null,mults);var inst_14173 = cljs.core.vals.call(null,inst_14172);var inst_14174 = cljs.core.seq.call(null,inst_14173);var inst_14175 = inst_14174;var inst_14176 = null;var inst_14177 = (0);var inst_14178 = (0);var state_14234__$1 = (function (){var statearr_14262 = state_14234;(statearr_14262[(12)] = inst_14176);
(statearr_14262[(13)] = inst_14178);
(statearr_14262[(14)] = inst_14175);
(statearr_14262[(15)] = inst_14177);
return statearr_14262;
})();var statearr_14263_14304 = state_14234__$1;(statearr_14263_14304[(2)] = null);
(statearr_14263_14304[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (14)))
{var state_14234__$1 = state_14234;var statearr_14267_14305 = state_14234__$1;(statearr_14267_14305[(2)] = null);
(statearr_14267_14305[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (16)))
{var inst_14189 = (state_14234[(10)]);var inst_14193 = cljs.core.chunk_first.call(null,inst_14189);var inst_14194 = cljs.core.chunk_rest.call(null,inst_14189);var inst_14195 = cljs.core.count.call(null,inst_14193);var inst_14175 = inst_14194;var inst_14176 = inst_14193;var inst_14177 = inst_14195;var inst_14178 = (0);var state_14234__$1 = (function (){var statearr_14268 = state_14234;(statearr_14268[(12)] = inst_14176);
(statearr_14268[(13)] = inst_14178);
(statearr_14268[(14)] = inst_14175);
(statearr_14268[(15)] = inst_14177);
return statearr_14268;
})();var statearr_14269_14306 = state_14234__$1;(statearr_14269_14306[(2)] = null);
(statearr_14269_14306[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (10)))
{var inst_14176 = (state_14234[(12)]);var inst_14178 = (state_14234[(13)]);var inst_14175 = (state_14234[(14)]);var inst_14177 = (state_14234[(15)]);var inst_14183 = cljs.core._nth.call(null,inst_14176,inst_14178);var inst_14184 = cljs.core.async.muxch_STAR_.call(null,inst_14183);var inst_14185 = cljs.core.async.close_BANG_.call(null,inst_14184);var inst_14186 = (inst_14178 + (1));var tmp14264 = inst_14176;var tmp14265 = inst_14175;var tmp14266 = inst_14177;var inst_14175__$1 = tmp14265;var inst_14176__$1 = tmp14264;var inst_14177__$1 = tmp14266;var inst_14178__$1 = inst_14186;var state_14234__$1 = (function (){var statearr_14270 = state_14234;(statearr_14270[(12)] = inst_14176__$1);
(statearr_14270[(13)] = inst_14178__$1);
(statearr_14270[(17)] = inst_14185);
(statearr_14270[(14)] = inst_14175__$1);
(statearr_14270[(15)] = inst_14177__$1);
return statearr_14270;
})();var statearr_14271_14307 = state_14234__$1;(statearr_14271_14307[(2)] = null);
(statearr_14271_14307[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (18)))
{var inst_14204 = (state_14234[(2)]);var state_14234__$1 = state_14234;var statearr_14272_14308 = state_14234__$1;(statearr_14272_14308[(2)] = inst_14204);
(statearr_14272_14308[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14235 === (8)))
{var inst_14178 = (state_14234[(13)]);var inst_14177 = (state_14234[(15)]);var inst_14180 = (inst_14178 < inst_14177);var inst_14181 = inst_14180;var state_14234__$1 = state_14234;if(cljs.core.truth_(inst_14181))
{var statearr_14273_14309 = state_14234__$1;(statearr_14273_14309[(1)] = (10));
} else
{var statearr_14274_14310 = state_14234__$1;(statearr_14274_14310[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
}
}
}
});})(c__6554__auto___14282,mults,ensure_mult,p))
;return ((function (switch__6539__auto__,c__6554__auto___14282,mults,ensure_mult,p){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_14278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14278[(0)] = state_machine__6540__auto__);
(statearr_14278[(1)] = (1));
return statearr_14278;
});
var state_machine__6540__auto____1 = (function (state_14234){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_14234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e14279){if((e14279 instanceof Object))
{var ex__6543__auto__ = e14279;var statearr_14280_14311 = state_14234;(statearr_14280_14311[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14279;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14312 = state_14234;
state_14234 = G__14312;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_14234){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_14234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___14282,mults,ensure_mult,p))
})();var state__6556__auto__ = (function (){var statearr_14281 = f__6555__auto__.call(null);(statearr_14281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___14282);
return statearr_14281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___14282,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6554__auto___14449 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___14449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___14449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14419){var state_val_14420 = (state_14419[(1)]);if((state_val_14420 === (7)))
{var state_14419__$1 = state_14419;var statearr_14421_14450 = state_14419__$1;(statearr_14421_14450[(2)] = null);
(statearr_14421_14450[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (1)))
{var state_14419__$1 = state_14419;var statearr_14422_14451 = state_14419__$1;(statearr_14422_14451[(2)] = null);
(statearr_14422_14451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (4)))
{var inst_14383 = (state_14419[(7)]);var inst_14385 = (inst_14383 < cnt);var state_14419__$1 = state_14419;if(cljs.core.truth_(inst_14385))
{var statearr_14423_14452 = state_14419__$1;(statearr_14423_14452[(1)] = (6));
} else
{var statearr_14424_14453 = state_14419__$1;(statearr_14424_14453[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (15)))
{var inst_14415 = (state_14419[(2)]);var state_14419__$1 = state_14419;var statearr_14425_14454 = state_14419__$1;(statearr_14425_14454[(2)] = inst_14415);
(statearr_14425_14454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (13)))
{var inst_14408 = cljs.core.async.close_BANG_.call(null,out);var state_14419__$1 = state_14419;var statearr_14426_14455 = state_14419__$1;(statearr_14426_14455[(2)] = inst_14408);
(statearr_14426_14455[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (6)))
{var state_14419__$1 = state_14419;var statearr_14427_14456 = state_14419__$1;(statearr_14427_14456[(2)] = null);
(statearr_14427_14456[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (3)))
{var inst_14417 = (state_14419[(2)]);var state_14419__$1 = state_14419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14419__$1,inst_14417);
} else
{if((state_val_14420 === (12)))
{var inst_14405 = (state_14419[(8)]);var inst_14405__$1 = (state_14419[(2)]);var inst_14406 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14405__$1);var state_14419__$1 = (function (){var statearr_14428 = state_14419;(statearr_14428[(8)] = inst_14405__$1);
return statearr_14428;
})();if(cljs.core.truth_(inst_14406))
{var statearr_14429_14457 = state_14419__$1;(statearr_14429_14457[(1)] = (13));
} else
{var statearr_14430_14458 = state_14419__$1;(statearr_14430_14458[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (2)))
{var inst_14382 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14383 = (0);var state_14419__$1 = (function (){var statearr_14431 = state_14419;(statearr_14431[(9)] = inst_14382);
(statearr_14431[(7)] = inst_14383);
return statearr_14431;
})();var statearr_14432_14459 = state_14419__$1;(statearr_14432_14459[(2)] = null);
(statearr_14432_14459[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (11)))
{var inst_14383 = (state_14419[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14419,(10),Object,null,(9));var inst_14392 = chs__$1.call(null,inst_14383);var inst_14393 = done.call(null,inst_14383);var inst_14394 = cljs.core.async.take_BANG_.call(null,inst_14392,inst_14393);var state_14419__$1 = state_14419;var statearr_14433_14460 = state_14419__$1;(statearr_14433_14460[(2)] = inst_14394);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14419__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (9)))
{var inst_14383 = (state_14419[(7)]);var inst_14396 = (state_14419[(2)]);var inst_14397 = (inst_14383 + (1));var inst_14383__$1 = inst_14397;var state_14419__$1 = (function (){var statearr_14434 = state_14419;(statearr_14434[(10)] = inst_14396);
(statearr_14434[(7)] = inst_14383__$1);
return statearr_14434;
})();var statearr_14435_14461 = state_14419__$1;(statearr_14435_14461[(2)] = null);
(statearr_14435_14461[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (5)))
{var inst_14403 = (state_14419[(2)]);var state_14419__$1 = (function (){var statearr_14436 = state_14419;(statearr_14436[(11)] = inst_14403);
return statearr_14436;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14419__$1,(12),dchan);
} else
{if((state_val_14420 === (14)))
{var inst_14405 = (state_14419[(8)]);var inst_14410 = cljs.core.apply.call(null,f,inst_14405);var state_14419__$1 = state_14419;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14419__$1,(16),out,inst_14410);
} else
{if((state_val_14420 === (16)))
{var inst_14412 = (state_14419[(2)]);var state_14419__$1 = (function (){var statearr_14437 = state_14419;(statearr_14437[(12)] = inst_14412);
return statearr_14437;
})();var statearr_14438_14462 = state_14419__$1;(statearr_14438_14462[(2)] = null);
(statearr_14438_14462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (10)))
{var inst_14387 = (state_14419[(2)]);var inst_14388 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14419__$1 = (function (){var statearr_14439 = state_14419;(statearr_14439[(13)] = inst_14387);
return statearr_14439;
})();var statearr_14440_14463 = state_14419__$1;(statearr_14440_14463[(2)] = inst_14388);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14419__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14420 === (8)))
{var inst_14401 = (state_14419[(2)]);var state_14419__$1 = state_14419;var statearr_14441_14464 = state_14419__$1;(statearr_14441_14464[(2)] = inst_14401);
(statearr_14441_14464[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___14449,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6539__auto__,c__6554__auto___14449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_14445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14445[(0)] = state_machine__6540__auto__);
(statearr_14445[(1)] = (1));
return statearr_14445;
});
var state_machine__6540__auto____1 = (function (state_14419){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_14419);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e14446){if((e14446 instanceof Object))
{var ex__6543__auto__ = e14446;var statearr_14447_14465 = state_14419;(statearr_14447_14465[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14419);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14446;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14466 = state_14419;
state_14419 = G__14466;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_14419){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_14419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___14449,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6556__auto__ = (function (){var statearr_14448 = f__6555__auto__.call(null);(statearr_14448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___14449);
return statearr_14448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___14449,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6554__auto___14574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___14574,out){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___14574,out){
return (function (state_14550){var state_val_14551 = (state_14550[(1)]);if((state_val_14551 === (7)))
{var inst_14529 = (state_14550[(7)]);var inst_14530 = (state_14550[(8)]);var inst_14529__$1 = (state_14550[(2)]);var inst_14530__$1 = cljs.core.nth.call(null,inst_14529__$1,(0),null);var inst_14531 = cljs.core.nth.call(null,inst_14529__$1,(1),null);var inst_14532 = (inst_14530__$1 == null);var state_14550__$1 = (function (){var statearr_14552 = state_14550;(statearr_14552[(7)] = inst_14529__$1);
(statearr_14552[(9)] = inst_14531);
(statearr_14552[(8)] = inst_14530__$1);
return statearr_14552;
})();if(cljs.core.truth_(inst_14532))
{var statearr_14553_14575 = state_14550__$1;(statearr_14553_14575[(1)] = (8));
} else
{var statearr_14554_14576 = state_14550__$1;(statearr_14554_14576[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (1)))
{var inst_14521 = cljs.core.vec.call(null,chs);var inst_14522 = inst_14521;var state_14550__$1 = (function (){var statearr_14555 = state_14550;(statearr_14555[(10)] = inst_14522);
return statearr_14555;
})();var statearr_14556_14577 = state_14550__$1;(statearr_14556_14577[(2)] = null);
(statearr_14556_14577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (4)))
{var inst_14522 = (state_14550[(10)]);var state_14550__$1 = state_14550;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14550__$1,(7),inst_14522);
} else
{if((state_val_14551 === (6)))
{var inst_14546 = (state_14550[(2)]);var state_14550__$1 = state_14550;var statearr_14557_14578 = state_14550__$1;(statearr_14557_14578[(2)] = inst_14546);
(statearr_14557_14578[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (3)))
{var inst_14548 = (state_14550[(2)]);var state_14550__$1 = state_14550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14550__$1,inst_14548);
} else
{if((state_val_14551 === (2)))
{var inst_14522 = (state_14550[(10)]);var inst_14524 = cljs.core.count.call(null,inst_14522);var inst_14525 = (inst_14524 > (0));var state_14550__$1 = state_14550;if(cljs.core.truth_(inst_14525))
{var statearr_14559_14579 = state_14550__$1;(statearr_14559_14579[(1)] = (4));
} else
{var statearr_14560_14580 = state_14550__$1;(statearr_14560_14580[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (11)))
{var inst_14522 = (state_14550[(10)]);var inst_14539 = (state_14550[(2)]);var tmp14558 = inst_14522;var inst_14522__$1 = tmp14558;var state_14550__$1 = (function (){var statearr_14561 = state_14550;(statearr_14561[(10)] = inst_14522__$1);
(statearr_14561[(11)] = inst_14539);
return statearr_14561;
})();var statearr_14562_14581 = state_14550__$1;(statearr_14562_14581[(2)] = null);
(statearr_14562_14581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (9)))
{var inst_14530 = (state_14550[(8)]);var state_14550__$1 = state_14550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14550__$1,(11),out,inst_14530);
} else
{if((state_val_14551 === (5)))
{var inst_14544 = cljs.core.async.close_BANG_.call(null,out);var state_14550__$1 = state_14550;var statearr_14563_14582 = state_14550__$1;(statearr_14563_14582[(2)] = inst_14544);
(statearr_14563_14582[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (10)))
{var inst_14542 = (state_14550[(2)]);var state_14550__$1 = state_14550;var statearr_14564_14583 = state_14550__$1;(statearr_14564_14583[(2)] = inst_14542);
(statearr_14564_14583[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14551 === (8)))
{var inst_14529 = (state_14550[(7)]);var inst_14522 = (state_14550[(10)]);var inst_14531 = (state_14550[(9)]);var inst_14530 = (state_14550[(8)]);var inst_14534 = (function (){var c = inst_14531;var v = inst_14530;var vec__14527 = inst_14529;var cs = inst_14522;return ((function (c,v,vec__14527,cs,inst_14529,inst_14522,inst_14531,inst_14530,state_val_14551,c__6554__auto___14574,out){
return (function (p1__14467_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14467_SHARP_);
});
;})(c,v,vec__14527,cs,inst_14529,inst_14522,inst_14531,inst_14530,state_val_14551,c__6554__auto___14574,out))
})();var inst_14535 = cljs.core.filterv.call(null,inst_14534,inst_14522);var inst_14522__$1 = inst_14535;var state_14550__$1 = (function (){var statearr_14565 = state_14550;(statearr_14565[(10)] = inst_14522__$1);
return statearr_14565;
})();var statearr_14566_14584 = state_14550__$1;(statearr_14566_14584[(2)] = null);
(statearr_14566_14584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___14574,out))
;return ((function (switch__6539__auto__,c__6554__auto___14574,out){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_14570 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14570[(0)] = state_machine__6540__auto__);
(statearr_14570[(1)] = (1));
return statearr_14570;
});
var state_machine__6540__auto____1 = (function (state_14550){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_14550);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e14571){if((e14571 instanceof Object))
{var ex__6543__auto__ = e14571;var statearr_14572_14585 = state_14550;(statearr_14572_14585[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14571;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14586 = state_14550;
state_14550 = G__14586;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_14550){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_14550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___14574,out))
})();var state__6556__auto__ = (function (){var statearr_14573 = f__6555__auto__.call(null);(statearr_14573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___14574);
return statearr_14573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___14574,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6554__auto___14679 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___14679,out){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___14679,out){
return (function (state_14656){var state_val_14657 = (state_14656[(1)]);if((state_val_14657 === (7)))
{var inst_14638 = (state_14656[(7)]);var inst_14638__$1 = (state_14656[(2)]);var inst_14639 = (inst_14638__$1 == null);var inst_14640 = cljs.core.not.call(null,inst_14639);var state_14656__$1 = (function (){var statearr_14658 = state_14656;(statearr_14658[(7)] = inst_14638__$1);
return statearr_14658;
})();if(inst_14640)
{var statearr_14659_14680 = state_14656__$1;(statearr_14659_14680[(1)] = (8));
} else
{var statearr_14660_14681 = state_14656__$1;(statearr_14660_14681[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (1)))
{var inst_14633 = (0);var state_14656__$1 = (function (){var statearr_14661 = state_14656;(statearr_14661[(8)] = inst_14633);
return statearr_14661;
})();var statearr_14662_14682 = state_14656__$1;(statearr_14662_14682[(2)] = null);
(statearr_14662_14682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (4)))
{var state_14656__$1 = state_14656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14656__$1,(7),ch);
} else
{if((state_val_14657 === (6)))
{var inst_14651 = (state_14656[(2)]);var state_14656__$1 = state_14656;var statearr_14663_14683 = state_14656__$1;(statearr_14663_14683[(2)] = inst_14651);
(statearr_14663_14683[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (3)))
{var inst_14653 = (state_14656[(2)]);var inst_14654 = cljs.core.async.close_BANG_.call(null,out);var state_14656__$1 = (function (){var statearr_14664 = state_14656;(statearr_14664[(9)] = inst_14653);
return statearr_14664;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14656__$1,inst_14654);
} else
{if((state_val_14657 === (2)))
{var inst_14633 = (state_14656[(8)]);var inst_14635 = (inst_14633 < n);var state_14656__$1 = state_14656;if(cljs.core.truth_(inst_14635))
{var statearr_14665_14684 = state_14656__$1;(statearr_14665_14684[(1)] = (4));
} else
{var statearr_14666_14685 = state_14656__$1;(statearr_14666_14685[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (11)))
{var inst_14633 = (state_14656[(8)]);var inst_14643 = (state_14656[(2)]);var inst_14644 = (inst_14633 + (1));var inst_14633__$1 = inst_14644;var state_14656__$1 = (function (){var statearr_14667 = state_14656;(statearr_14667[(10)] = inst_14643);
(statearr_14667[(8)] = inst_14633__$1);
return statearr_14667;
})();var statearr_14668_14686 = state_14656__$1;(statearr_14668_14686[(2)] = null);
(statearr_14668_14686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (9)))
{var state_14656__$1 = state_14656;var statearr_14669_14687 = state_14656__$1;(statearr_14669_14687[(2)] = null);
(statearr_14669_14687[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (5)))
{var state_14656__$1 = state_14656;var statearr_14670_14688 = state_14656__$1;(statearr_14670_14688[(2)] = null);
(statearr_14670_14688[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (10)))
{var inst_14648 = (state_14656[(2)]);var state_14656__$1 = state_14656;var statearr_14671_14689 = state_14656__$1;(statearr_14671_14689[(2)] = inst_14648);
(statearr_14671_14689[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14657 === (8)))
{var inst_14638 = (state_14656[(7)]);var state_14656__$1 = state_14656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14656__$1,(11),out,inst_14638);
} else
{return null;
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
});})(c__6554__auto___14679,out))
;return ((function (switch__6539__auto__,c__6554__auto___14679,out){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_14675 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14675[(0)] = state_machine__6540__auto__);
(statearr_14675[(1)] = (1));
return statearr_14675;
});
var state_machine__6540__auto____1 = (function (state_14656){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_14656);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e14676){if((e14676 instanceof Object))
{var ex__6543__auto__ = e14676;var statearr_14677_14690 = state_14656;(statearr_14677_14690[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14676;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14691 = state_14656;
state_14656 = G__14691;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_14656){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_14656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___14679,out))
})();var state__6556__auto__ = (function (){var statearr_14678 = f__6555__auto__.call(null);(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___14679);
return statearr_14678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___14679,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14699 = (function (ch,f,map_LT_,meta14700){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14700 = meta14700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14699.cljs$lang$type = true;
cljs.core.async.t14699.cljs$lang$ctorStr = "cljs.core.async/t14699";
cljs.core.async.t14699.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14699");
});
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14702 = (function (fn1,_,meta14700,ch,f,map_LT_,meta14703){
this.fn1 = fn1;
this._ = _;
this.meta14700 = meta14700;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14703 = meta14703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14702.cljs$lang$type = true;
cljs.core.async.t14702.cljs$lang$ctorStr = "cljs.core.async/t14702";
cljs.core.async.t14702.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14702");
});})(___$1))
;
cljs.core.async.t14702.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14702.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14692_SHARP_){return f1.call(null,(((p1__14692_SHARP_ == null))?null:self__.f.call(null,p1__14692_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14704){var self__ = this;
var _14704__$1 = this;return self__.meta14703;
});})(___$1))
;
cljs.core.async.t14702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14704,meta14703__$1){var self__ = this;
var _14704__$1 = this;return (new cljs.core.async.t14702(self__.fn1,self__._,self__.meta14700,self__.ch,self__.f,self__.map_LT_,meta14703__$1));
});})(___$1))
;
cljs.core.async.__GT_t14702 = ((function (___$1){
return (function __GT_t14702(fn1__$1,___$2,meta14700__$1,ch__$2,f__$2,map_LT___$2,meta14703){return (new cljs.core.async.t14702(fn1__$1,___$2,meta14700__$1,ch__$2,f__$2,map_LT___$2,meta14703));
});})(___$1))
;
}
return (new cljs.core.async.t14702(fn1,___$1,self__.meta14700,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14701){var self__ = this;
var _14701__$1 = this;return self__.meta14700;
});
cljs.core.async.t14699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14701,meta14700__$1){var self__ = this;
var _14701__$1 = this;return (new cljs.core.async.t14699(self__.ch,self__.f,self__.map_LT_,meta14700__$1));
});
cljs.core.async.__GT_t14699 = (function __GT_t14699(ch__$1,f__$1,map_LT___$1,meta14700){return (new cljs.core.async.t14699(ch__$1,f__$1,map_LT___$1,meta14700));
});
}
return (new cljs.core.async.t14699(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14708 = (function (ch,f,map_GT_,meta14709){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14709 = meta14709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14708.cljs$lang$type = true;
cljs.core.async.t14708.cljs$lang$ctorStr = "cljs.core.async/t14708";
cljs.core.async.t14708.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14708");
});
cljs.core.async.t14708.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14708.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14708.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14710){var self__ = this;
var _14710__$1 = this;return self__.meta14709;
});
cljs.core.async.t14708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14710,meta14709__$1){var self__ = this;
var _14710__$1 = this;return (new cljs.core.async.t14708(self__.ch,self__.f,self__.map_GT_,meta14709__$1));
});
cljs.core.async.__GT_t14708 = (function __GT_t14708(ch__$1,f__$1,map_GT___$1,meta14709){return (new cljs.core.async.t14708(ch__$1,f__$1,map_GT___$1,meta14709));
});
}
return (new cljs.core.async.t14708(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14714 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14714 = (function (ch,p,filter_GT_,meta14715){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14715 = meta14715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14714.cljs$lang$type = true;
cljs.core.async.t14714.cljs$lang$ctorStr = "cljs.core.async/t14714";
cljs.core.async.t14714.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14714");
});
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14714.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14716){var self__ = this;
var _14716__$1 = this;return self__.meta14715;
});
cljs.core.async.t14714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14716,meta14715__$1){var self__ = this;
var _14716__$1 = this;return (new cljs.core.async.t14714(self__.ch,self__.p,self__.filter_GT_,meta14715__$1));
});
cljs.core.async.__GT_t14714 = (function __GT_t14714(ch__$1,p__$1,filter_GT___$1,meta14715){return (new cljs.core.async.t14714(ch__$1,p__$1,filter_GT___$1,meta14715));
});
}
return (new cljs.core.async.t14714(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6554__auto___14799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___14799,out){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___14799,out){
return (function (state_14778){var state_val_14779 = (state_14778[(1)]);if((state_val_14779 === (7)))
{var inst_14774 = (state_14778[(2)]);var state_14778__$1 = state_14778;var statearr_14780_14800 = state_14778__$1;(statearr_14780_14800[(2)] = inst_14774);
(statearr_14780_14800[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (1)))
{var state_14778__$1 = state_14778;var statearr_14781_14801 = state_14778__$1;(statearr_14781_14801[(2)] = null);
(statearr_14781_14801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (4)))
{var inst_14760 = (state_14778[(7)]);var inst_14760__$1 = (state_14778[(2)]);var inst_14761 = (inst_14760__$1 == null);var state_14778__$1 = (function (){var statearr_14782 = state_14778;(statearr_14782[(7)] = inst_14760__$1);
return statearr_14782;
})();if(cljs.core.truth_(inst_14761))
{var statearr_14783_14802 = state_14778__$1;(statearr_14783_14802[(1)] = (5));
} else
{var statearr_14784_14803 = state_14778__$1;(statearr_14784_14803[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (6)))
{var inst_14760 = (state_14778[(7)]);var inst_14765 = p.call(null,inst_14760);var state_14778__$1 = state_14778;if(cljs.core.truth_(inst_14765))
{var statearr_14785_14804 = state_14778__$1;(statearr_14785_14804[(1)] = (8));
} else
{var statearr_14786_14805 = state_14778__$1;(statearr_14786_14805[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (3)))
{var inst_14776 = (state_14778[(2)]);var state_14778__$1 = state_14778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14778__$1,inst_14776);
} else
{if((state_val_14779 === (2)))
{var state_14778__$1 = state_14778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14778__$1,(4),ch);
} else
{if((state_val_14779 === (11)))
{var inst_14768 = (state_14778[(2)]);var state_14778__$1 = state_14778;var statearr_14787_14806 = state_14778__$1;(statearr_14787_14806[(2)] = inst_14768);
(statearr_14787_14806[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (9)))
{var state_14778__$1 = state_14778;var statearr_14788_14807 = state_14778__$1;(statearr_14788_14807[(2)] = null);
(statearr_14788_14807[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (5)))
{var inst_14763 = cljs.core.async.close_BANG_.call(null,out);var state_14778__$1 = state_14778;var statearr_14789_14808 = state_14778__$1;(statearr_14789_14808[(2)] = inst_14763);
(statearr_14789_14808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (10)))
{var inst_14771 = (state_14778[(2)]);var state_14778__$1 = (function (){var statearr_14790 = state_14778;(statearr_14790[(8)] = inst_14771);
return statearr_14790;
})();var statearr_14791_14809 = state_14778__$1;(statearr_14791_14809[(2)] = null);
(statearr_14791_14809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14779 === (8)))
{var inst_14760 = (state_14778[(7)]);var state_14778__$1 = state_14778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14778__$1,(11),out,inst_14760);
} else
{return null;
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
});})(c__6554__auto___14799,out))
;return ((function (switch__6539__auto__,c__6554__auto___14799,out){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_14795 = [null,null,null,null,null,null,null,null,null];(statearr_14795[(0)] = state_machine__6540__auto__);
(statearr_14795[(1)] = (1));
return statearr_14795;
});
var state_machine__6540__auto____1 = (function (state_14778){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_14778);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e14796){if((e14796 instanceof Object))
{var ex__6543__auto__ = e14796;var statearr_14797_14810 = state_14778;(statearr_14797_14810[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14796;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14811 = state_14778;
state_14778 = G__14811;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_14778){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_14778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___14799,out))
})();var state__6556__auto__ = (function (){var statearr_14798 = f__6555__auto__.call(null);(statearr_14798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___14799);
return statearr_14798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___14799,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6554__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto__){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto__){
return (function (state_14977){var state_val_14978 = (state_14977[(1)]);if((state_val_14978 === (7)))
{var inst_14973 = (state_14977[(2)]);var state_14977__$1 = state_14977;var statearr_14979_15020 = state_14977__$1;(statearr_14979_15020[(2)] = inst_14973);
(statearr_14979_15020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (20)))
{var inst_14943 = (state_14977[(7)]);var inst_14954 = (state_14977[(2)]);var inst_14955 = cljs.core.next.call(null,inst_14943);var inst_14929 = inst_14955;var inst_14930 = null;var inst_14931 = (0);var inst_14932 = (0);var state_14977__$1 = (function (){var statearr_14980 = state_14977;(statearr_14980[(8)] = inst_14932);
(statearr_14980[(9)] = inst_14954);
(statearr_14980[(10)] = inst_14931);
(statearr_14980[(11)] = inst_14929);
(statearr_14980[(12)] = inst_14930);
return statearr_14980;
})();var statearr_14981_15021 = state_14977__$1;(statearr_14981_15021[(2)] = null);
(statearr_14981_15021[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (1)))
{var state_14977__$1 = state_14977;var statearr_14982_15022 = state_14977__$1;(statearr_14982_15022[(2)] = null);
(statearr_14982_15022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (4)))
{var inst_14918 = (state_14977[(13)]);var inst_14918__$1 = (state_14977[(2)]);var inst_14919 = (inst_14918__$1 == null);var state_14977__$1 = (function (){var statearr_14983 = state_14977;(statearr_14983[(13)] = inst_14918__$1);
return statearr_14983;
})();if(cljs.core.truth_(inst_14919))
{var statearr_14984_15023 = state_14977__$1;(statearr_14984_15023[(1)] = (5));
} else
{var statearr_14985_15024 = state_14977__$1;(statearr_14985_15024[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (15)))
{var state_14977__$1 = state_14977;var statearr_14989_15025 = state_14977__$1;(statearr_14989_15025[(2)] = null);
(statearr_14989_15025[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (21)))
{var state_14977__$1 = state_14977;var statearr_14990_15026 = state_14977__$1;(statearr_14990_15026[(2)] = null);
(statearr_14990_15026[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (13)))
{var inst_14932 = (state_14977[(8)]);var inst_14931 = (state_14977[(10)]);var inst_14929 = (state_14977[(11)]);var inst_14930 = (state_14977[(12)]);var inst_14939 = (state_14977[(2)]);var inst_14940 = (inst_14932 + (1));var tmp14986 = inst_14931;var tmp14987 = inst_14929;var tmp14988 = inst_14930;var inst_14929__$1 = tmp14987;var inst_14930__$1 = tmp14988;var inst_14931__$1 = tmp14986;var inst_14932__$1 = inst_14940;var state_14977__$1 = (function (){var statearr_14991 = state_14977;(statearr_14991[(14)] = inst_14939);
(statearr_14991[(8)] = inst_14932__$1);
(statearr_14991[(10)] = inst_14931__$1);
(statearr_14991[(11)] = inst_14929__$1);
(statearr_14991[(12)] = inst_14930__$1);
return statearr_14991;
})();var statearr_14992_15027 = state_14977__$1;(statearr_14992_15027[(2)] = null);
(statearr_14992_15027[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (22)))
{var state_14977__$1 = state_14977;var statearr_14993_15028 = state_14977__$1;(statearr_14993_15028[(2)] = null);
(statearr_14993_15028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (6)))
{var inst_14918 = (state_14977[(13)]);var inst_14927 = f.call(null,inst_14918);var inst_14928 = cljs.core.seq.call(null,inst_14927);var inst_14929 = inst_14928;var inst_14930 = null;var inst_14931 = (0);var inst_14932 = (0);var state_14977__$1 = (function (){var statearr_14994 = state_14977;(statearr_14994[(8)] = inst_14932);
(statearr_14994[(10)] = inst_14931);
(statearr_14994[(11)] = inst_14929);
(statearr_14994[(12)] = inst_14930);
return statearr_14994;
})();var statearr_14995_15029 = state_14977__$1;(statearr_14995_15029[(2)] = null);
(statearr_14995_15029[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (17)))
{var inst_14943 = (state_14977[(7)]);var inst_14947 = cljs.core.chunk_first.call(null,inst_14943);var inst_14948 = cljs.core.chunk_rest.call(null,inst_14943);var inst_14949 = cljs.core.count.call(null,inst_14947);var inst_14929 = inst_14948;var inst_14930 = inst_14947;var inst_14931 = inst_14949;var inst_14932 = (0);var state_14977__$1 = (function (){var statearr_14996 = state_14977;(statearr_14996[(8)] = inst_14932);
(statearr_14996[(10)] = inst_14931);
(statearr_14996[(11)] = inst_14929);
(statearr_14996[(12)] = inst_14930);
return statearr_14996;
})();var statearr_14997_15030 = state_14977__$1;(statearr_14997_15030[(2)] = null);
(statearr_14997_15030[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (3)))
{var inst_14975 = (state_14977[(2)]);var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14977__$1,inst_14975);
} else
{if((state_val_14978 === (12)))
{var inst_14963 = (state_14977[(2)]);var state_14977__$1 = state_14977;var statearr_14998_15031 = state_14977__$1;(statearr_14998_15031[(2)] = inst_14963);
(statearr_14998_15031[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (2)))
{var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14977__$1,(4),in$);
} else
{if((state_val_14978 === (23)))
{var inst_14971 = (state_14977[(2)]);var state_14977__$1 = state_14977;var statearr_14999_15032 = state_14977__$1;(statearr_14999_15032[(2)] = inst_14971);
(statearr_14999_15032[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (19)))
{var inst_14958 = (state_14977[(2)]);var state_14977__$1 = state_14977;var statearr_15000_15033 = state_14977__$1;(statearr_15000_15033[(2)] = inst_14958);
(statearr_15000_15033[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (11)))
{var inst_14943 = (state_14977[(7)]);var inst_14929 = (state_14977[(11)]);var inst_14943__$1 = cljs.core.seq.call(null,inst_14929);var state_14977__$1 = (function (){var statearr_15001 = state_14977;(statearr_15001[(7)] = inst_14943__$1);
return statearr_15001;
})();if(inst_14943__$1)
{var statearr_15002_15034 = state_14977__$1;(statearr_15002_15034[(1)] = (14));
} else
{var statearr_15003_15035 = state_14977__$1;(statearr_15003_15035[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (9)))
{var inst_14965 = (state_14977[(2)]);var inst_14966 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14977__$1 = (function (){var statearr_15004 = state_14977;(statearr_15004[(15)] = inst_14965);
return statearr_15004;
})();if(cljs.core.truth_(inst_14966))
{var statearr_15005_15036 = state_14977__$1;(statearr_15005_15036[(1)] = (21));
} else
{var statearr_15006_15037 = state_14977__$1;(statearr_15006_15037[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (5)))
{var inst_14921 = cljs.core.async.close_BANG_.call(null,out);var state_14977__$1 = state_14977;var statearr_15007_15038 = state_14977__$1;(statearr_15007_15038[(2)] = inst_14921);
(statearr_15007_15038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (14)))
{var inst_14943 = (state_14977[(7)]);var inst_14945 = cljs.core.chunked_seq_QMARK_.call(null,inst_14943);var state_14977__$1 = state_14977;if(inst_14945)
{var statearr_15008_15039 = state_14977__$1;(statearr_15008_15039[(1)] = (17));
} else
{var statearr_15009_15040 = state_14977__$1;(statearr_15009_15040[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (16)))
{var inst_14961 = (state_14977[(2)]);var state_14977__$1 = state_14977;var statearr_15010_15041 = state_14977__$1;(statearr_15010_15041[(2)] = inst_14961);
(statearr_15010_15041[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14978 === (10)))
{var inst_14932 = (state_14977[(8)]);var inst_14930 = (state_14977[(12)]);var inst_14937 = cljs.core._nth.call(null,inst_14930,inst_14932);var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14977__$1,(13),out,inst_14937);
} else
{if((state_val_14978 === (18)))
{var inst_14943 = (state_14977[(7)]);var inst_14952 = cljs.core.first.call(null,inst_14943);var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14977__$1,(20),out,inst_14952);
} else
{if((state_val_14978 === (8)))
{var inst_14932 = (state_14977[(8)]);var inst_14931 = (state_14977[(10)]);var inst_14934 = (inst_14932 < inst_14931);var inst_14935 = inst_14934;var state_14977__$1 = state_14977;if(cljs.core.truth_(inst_14935))
{var statearr_15011_15042 = state_14977__$1;(statearr_15011_15042[(1)] = (10));
} else
{var statearr_15012_15043 = state_14977__$1;(statearr_15012_15043[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
}
}
}
}
});})(c__6554__auto__))
;return ((function (switch__6539__auto__,c__6554__auto__){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_15016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15016[(0)] = state_machine__6540__auto__);
(statearr_15016[(1)] = (1));
return statearr_15016;
});
var state_machine__6540__auto____1 = (function (state_14977){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_14977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e15017){if((e15017 instanceof Object))
{var ex__6543__auto__ = e15017;var statearr_15018_15044 = state_14977;(statearr_15018_15044[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14977);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15045 = state_14977;
state_14977 = G__15045;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_14977){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_14977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto__))
})();var state__6556__auto__ = (function (){var statearr_15019 = f__6555__auto__.call(null);(statearr_15019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto__);
return statearr_15019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto__))
);
return c__6554__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6554__auto___15142 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___15142,out){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___15142,out){
return (function (state_15117){var state_val_15118 = (state_15117[(1)]);if((state_val_15118 === (7)))
{var inst_15112 = (state_15117[(2)]);var state_15117__$1 = state_15117;var statearr_15119_15143 = state_15117__$1;(statearr_15119_15143[(2)] = inst_15112);
(statearr_15119_15143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (1)))
{var inst_15094 = null;var state_15117__$1 = (function (){var statearr_15120 = state_15117;(statearr_15120[(7)] = inst_15094);
return statearr_15120;
})();var statearr_15121_15144 = state_15117__$1;(statearr_15121_15144[(2)] = null);
(statearr_15121_15144[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (4)))
{var inst_15097 = (state_15117[(8)]);var inst_15097__$1 = (state_15117[(2)]);var inst_15098 = (inst_15097__$1 == null);var inst_15099 = cljs.core.not.call(null,inst_15098);var state_15117__$1 = (function (){var statearr_15122 = state_15117;(statearr_15122[(8)] = inst_15097__$1);
return statearr_15122;
})();if(inst_15099)
{var statearr_15123_15145 = state_15117__$1;(statearr_15123_15145[(1)] = (5));
} else
{var statearr_15124_15146 = state_15117__$1;(statearr_15124_15146[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (6)))
{var state_15117__$1 = state_15117;var statearr_15125_15147 = state_15117__$1;(statearr_15125_15147[(2)] = null);
(statearr_15125_15147[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (3)))
{var inst_15114 = (state_15117[(2)]);var inst_15115 = cljs.core.async.close_BANG_.call(null,out);var state_15117__$1 = (function (){var statearr_15126 = state_15117;(statearr_15126[(9)] = inst_15114);
return statearr_15126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15117__$1,inst_15115);
} else
{if((state_val_15118 === (2)))
{var state_15117__$1 = state_15117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15117__$1,(4),ch);
} else
{if((state_val_15118 === (11)))
{var inst_15097 = (state_15117[(8)]);var inst_15106 = (state_15117[(2)]);var inst_15094 = inst_15097;var state_15117__$1 = (function (){var statearr_15127 = state_15117;(statearr_15127[(10)] = inst_15106);
(statearr_15127[(7)] = inst_15094);
return statearr_15127;
})();var statearr_15128_15148 = state_15117__$1;(statearr_15128_15148[(2)] = null);
(statearr_15128_15148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (9)))
{var inst_15097 = (state_15117[(8)]);var state_15117__$1 = state_15117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15117__$1,(11),out,inst_15097);
} else
{if((state_val_15118 === (5)))
{var inst_15097 = (state_15117[(8)]);var inst_15094 = (state_15117[(7)]);var inst_15101 = cljs.core._EQ_.call(null,inst_15097,inst_15094);var state_15117__$1 = state_15117;if(inst_15101)
{var statearr_15130_15149 = state_15117__$1;(statearr_15130_15149[(1)] = (8));
} else
{var statearr_15131_15150 = state_15117__$1;(statearr_15131_15150[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (10)))
{var inst_15109 = (state_15117[(2)]);var state_15117__$1 = state_15117;var statearr_15132_15151 = state_15117__$1;(statearr_15132_15151[(2)] = inst_15109);
(statearr_15132_15151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15118 === (8)))
{var inst_15094 = (state_15117[(7)]);var tmp15129 = inst_15094;var inst_15094__$1 = tmp15129;var state_15117__$1 = (function (){var statearr_15133 = state_15117;(statearr_15133[(7)] = inst_15094__$1);
return statearr_15133;
})();var statearr_15134_15152 = state_15117__$1;(statearr_15134_15152[(2)] = null);
(statearr_15134_15152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___15142,out))
;return ((function (switch__6539__auto__,c__6554__auto___15142,out){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_15138 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15138[(0)] = state_machine__6540__auto__);
(statearr_15138[(1)] = (1));
return statearr_15138;
});
var state_machine__6540__auto____1 = (function (state_15117){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_15117);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e15139){if((e15139 instanceof Object))
{var ex__6543__auto__ = e15139;var statearr_15140_15153 = state_15117;(statearr_15140_15153[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15139;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15154 = state_15117;
state_15117 = G__15154;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_15117){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_15117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___15142,out))
})();var state__6556__auto__ = (function (){var statearr_15141 = f__6555__auto__.call(null);(statearr_15141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___15142);
return statearr_15141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___15142,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6554__auto___15289 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___15289,out){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___15289,out){
return (function (state_15259){var state_val_15260 = (state_15259[(1)]);if((state_val_15260 === (7)))
{var inst_15255 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15261_15290 = state_15259__$1;(statearr_15261_15290[(2)] = inst_15255);
(statearr_15261_15290[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (1)))
{var inst_15222 = (new Array(n));var inst_15223 = inst_15222;var inst_15224 = (0);var state_15259__$1 = (function (){var statearr_15262 = state_15259;(statearr_15262[(7)] = inst_15224);
(statearr_15262[(8)] = inst_15223);
return statearr_15262;
})();var statearr_15263_15291 = state_15259__$1;(statearr_15263_15291[(2)] = null);
(statearr_15263_15291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (4)))
{var inst_15227 = (state_15259[(9)]);var inst_15227__$1 = (state_15259[(2)]);var inst_15228 = (inst_15227__$1 == null);var inst_15229 = cljs.core.not.call(null,inst_15228);var state_15259__$1 = (function (){var statearr_15264 = state_15259;(statearr_15264[(9)] = inst_15227__$1);
return statearr_15264;
})();if(inst_15229)
{var statearr_15265_15292 = state_15259__$1;(statearr_15265_15292[(1)] = (5));
} else
{var statearr_15266_15293 = state_15259__$1;(statearr_15266_15293[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (15)))
{var inst_15249 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15267_15294 = state_15259__$1;(statearr_15267_15294[(2)] = inst_15249);
(statearr_15267_15294[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (13)))
{var state_15259__$1 = state_15259;var statearr_15268_15295 = state_15259__$1;(statearr_15268_15295[(2)] = null);
(statearr_15268_15295[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (6)))
{var inst_15224 = (state_15259[(7)]);var inst_15245 = (inst_15224 > (0));var state_15259__$1 = state_15259;if(cljs.core.truth_(inst_15245))
{var statearr_15269_15296 = state_15259__$1;(statearr_15269_15296[(1)] = (12));
} else
{var statearr_15270_15297 = state_15259__$1;(statearr_15270_15297[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (3)))
{var inst_15257 = (state_15259[(2)]);var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15259__$1,inst_15257);
} else
{if((state_val_15260 === (12)))
{var inst_15223 = (state_15259[(8)]);var inst_15247 = cljs.core.vec.call(null,inst_15223);var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15259__$1,(15),out,inst_15247);
} else
{if((state_val_15260 === (2)))
{var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15259__$1,(4),ch);
} else
{if((state_val_15260 === (11)))
{var inst_15239 = (state_15259[(2)]);var inst_15240 = (new Array(n));var inst_15223 = inst_15240;var inst_15224 = (0);var state_15259__$1 = (function (){var statearr_15271 = state_15259;(statearr_15271[(7)] = inst_15224);
(statearr_15271[(10)] = inst_15239);
(statearr_15271[(8)] = inst_15223);
return statearr_15271;
})();var statearr_15272_15298 = state_15259__$1;(statearr_15272_15298[(2)] = null);
(statearr_15272_15298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (9)))
{var inst_15223 = (state_15259[(8)]);var inst_15237 = cljs.core.vec.call(null,inst_15223);var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15259__$1,(11),out,inst_15237);
} else
{if((state_val_15260 === (5)))
{var inst_15224 = (state_15259[(7)]);var inst_15227 = (state_15259[(9)]);var inst_15223 = (state_15259[(8)]);var inst_15232 = (state_15259[(11)]);var inst_15231 = (inst_15223[inst_15224] = inst_15227);var inst_15232__$1 = (inst_15224 + (1));var inst_15233 = (inst_15232__$1 < n);var state_15259__$1 = (function (){var statearr_15273 = state_15259;(statearr_15273[(12)] = inst_15231);
(statearr_15273[(11)] = inst_15232__$1);
return statearr_15273;
})();if(cljs.core.truth_(inst_15233))
{var statearr_15274_15299 = state_15259__$1;(statearr_15274_15299[(1)] = (8));
} else
{var statearr_15275_15300 = state_15259__$1;(statearr_15275_15300[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (14)))
{var inst_15252 = (state_15259[(2)]);var inst_15253 = cljs.core.async.close_BANG_.call(null,out);var state_15259__$1 = (function (){var statearr_15277 = state_15259;(statearr_15277[(13)] = inst_15252);
return statearr_15277;
})();var statearr_15278_15301 = state_15259__$1;(statearr_15278_15301[(2)] = inst_15253);
(statearr_15278_15301[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (10)))
{var inst_15243 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15279_15302 = state_15259__$1;(statearr_15279_15302[(2)] = inst_15243);
(statearr_15279_15302[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (8)))
{var inst_15223 = (state_15259[(8)]);var inst_15232 = (state_15259[(11)]);var tmp15276 = inst_15223;var inst_15223__$1 = tmp15276;var inst_15224 = inst_15232;var state_15259__$1 = (function (){var statearr_15280 = state_15259;(statearr_15280[(7)] = inst_15224);
(statearr_15280[(8)] = inst_15223__$1);
return statearr_15280;
})();var statearr_15281_15303 = state_15259__$1;(statearr_15281_15303[(2)] = null);
(statearr_15281_15303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___15289,out))
;return ((function (switch__6539__auto__,c__6554__auto___15289,out){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_15285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15285[(0)] = state_machine__6540__auto__);
(statearr_15285[(1)] = (1));
return statearr_15285;
});
var state_machine__6540__auto____1 = (function (state_15259){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_15259);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e15286){if((e15286 instanceof Object))
{var ex__6543__auto__ = e15286;var statearr_15287_15304 = state_15259;(statearr_15287_15304[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15286;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15305 = state_15259;
state_15259 = G__15305;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_15259){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_15259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___15289,out))
})();var state__6556__auto__ = (function (){var statearr_15288 = f__6555__auto__.call(null);(statearr_15288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___15289);
return statearr_15288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___15289,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6554__auto___15448 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___15448,out){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___15448,out){
return (function (state_15418){var state_val_15419 = (state_15418[(1)]);if((state_val_15419 === (7)))
{var inst_15414 = (state_15418[(2)]);var state_15418__$1 = state_15418;var statearr_15420_15449 = state_15418__$1;(statearr_15420_15449[(2)] = inst_15414);
(statearr_15420_15449[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (1)))
{var inst_15377 = [];var inst_15378 = inst_15377;var inst_15379 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15418__$1 = (function (){var statearr_15421 = state_15418;(statearr_15421[(7)] = inst_15379);
(statearr_15421[(8)] = inst_15378);
return statearr_15421;
})();var statearr_15422_15450 = state_15418__$1;(statearr_15422_15450[(2)] = null);
(statearr_15422_15450[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (4)))
{var inst_15382 = (state_15418[(9)]);var inst_15382__$1 = (state_15418[(2)]);var inst_15383 = (inst_15382__$1 == null);var inst_15384 = cljs.core.not.call(null,inst_15383);var state_15418__$1 = (function (){var statearr_15423 = state_15418;(statearr_15423[(9)] = inst_15382__$1);
return statearr_15423;
})();if(inst_15384)
{var statearr_15424_15451 = state_15418__$1;(statearr_15424_15451[(1)] = (5));
} else
{var statearr_15425_15452 = state_15418__$1;(statearr_15425_15452[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (15)))
{var inst_15408 = (state_15418[(2)]);var state_15418__$1 = state_15418;var statearr_15426_15453 = state_15418__$1;(statearr_15426_15453[(2)] = inst_15408);
(statearr_15426_15453[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (13)))
{var state_15418__$1 = state_15418;var statearr_15427_15454 = state_15418__$1;(statearr_15427_15454[(2)] = null);
(statearr_15427_15454[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (6)))
{var inst_15378 = (state_15418[(8)]);var inst_15403 = inst_15378.length;var inst_15404 = (inst_15403 > (0));var state_15418__$1 = state_15418;if(cljs.core.truth_(inst_15404))
{var statearr_15428_15455 = state_15418__$1;(statearr_15428_15455[(1)] = (12));
} else
{var statearr_15429_15456 = state_15418__$1;(statearr_15429_15456[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (3)))
{var inst_15416 = (state_15418[(2)]);var state_15418__$1 = state_15418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15418__$1,inst_15416);
} else
{if((state_val_15419 === (12)))
{var inst_15378 = (state_15418[(8)]);var inst_15406 = cljs.core.vec.call(null,inst_15378);var state_15418__$1 = state_15418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15418__$1,(15),out,inst_15406);
} else
{if((state_val_15419 === (2)))
{var state_15418__$1 = state_15418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15418__$1,(4),ch);
} else
{if((state_val_15419 === (11)))
{var inst_15386 = (state_15418[(10)]);var inst_15382 = (state_15418[(9)]);var inst_15396 = (state_15418[(2)]);var inst_15397 = [];var inst_15398 = inst_15397.push(inst_15382);var inst_15378 = inst_15397;var inst_15379 = inst_15386;var state_15418__$1 = (function (){var statearr_15430 = state_15418;(statearr_15430[(7)] = inst_15379);
(statearr_15430[(11)] = inst_15398);
(statearr_15430[(12)] = inst_15396);
(statearr_15430[(8)] = inst_15378);
return statearr_15430;
})();var statearr_15431_15457 = state_15418__$1;(statearr_15431_15457[(2)] = null);
(statearr_15431_15457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (9)))
{var inst_15378 = (state_15418[(8)]);var inst_15394 = cljs.core.vec.call(null,inst_15378);var state_15418__$1 = state_15418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15418__$1,(11),out,inst_15394);
} else
{if((state_val_15419 === (5)))
{var inst_15379 = (state_15418[(7)]);var inst_15386 = (state_15418[(10)]);var inst_15382 = (state_15418[(9)]);var inst_15386__$1 = f.call(null,inst_15382);var inst_15387 = cljs.core._EQ_.call(null,inst_15386__$1,inst_15379);var inst_15388 = cljs.core.keyword_identical_QMARK_.call(null,inst_15379,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15389 = (inst_15387) || (inst_15388);var state_15418__$1 = (function (){var statearr_15432 = state_15418;(statearr_15432[(10)] = inst_15386__$1);
return statearr_15432;
})();if(cljs.core.truth_(inst_15389))
{var statearr_15433_15458 = state_15418__$1;(statearr_15433_15458[(1)] = (8));
} else
{var statearr_15434_15459 = state_15418__$1;(statearr_15434_15459[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (14)))
{var inst_15411 = (state_15418[(2)]);var inst_15412 = cljs.core.async.close_BANG_.call(null,out);var state_15418__$1 = (function (){var statearr_15436 = state_15418;(statearr_15436[(13)] = inst_15411);
return statearr_15436;
})();var statearr_15437_15460 = state_15418__$1;(statearr_15437_15460[(2)] = inst_15412);
(statearr_15437_15460[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (10)))
{var inst_15401 = (state_15418[(2)]);var state_15418__$1 = state_15418;var statearr_15438_15461 = state_15418__$1;(statearr_15438_15461[(2)] = inst_15401);
(statearr_15438_15461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15419 === (8)))
{var inst_15386 = (state_15418[(10)]);var inst_15378 = (state_15418[(8)]);var inst_15382 = (state_15418[(9)]);var inst_15391 = inst_15378.push(inst_15382);var tmp15435 = inst_15378;var inst_15378__$1 = tmp15435;var inst_15379 = inst_15386;var state_15418__$1 = (function (){var statearr_15439 = state_15418;(statearr_15439[(7)] = inst_15379);
(statearr_15439[(8)] = inst_15378__$1);
(statearr_15439[(14)] = inst_15391);
return statearr_15439;
})();var statearr_15440_15462 = state_15418__$1;(statearr_15440_15462[(2)] = null);
(statearr_15440_15462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6554__auto___15448,out))
;return ((function (switch__6539__auto__,c__6554__auto___15448,out){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_15444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15444[(0)] = state_machine__6540__auto__);
(statearr_15444[(1)] = (1));
return statearr_15444;
});
var state_machine__6540__auto____1 = (function (state_15418){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_15418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e15445){if((e15445 instanceof Object))
{var ex__6543__auto__ = e15445;var statearr_15446_15463 = state_15418;(statearr_15446_15463[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15445;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15464 = state_15418;
state_15418 = G__15464;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_15418){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_15418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___15448,out))
})();var state__6556__auto__ = (function (){var statearr_15447 = f__6555__auto__.call(null);(statearr_15447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___15448);
return statearr_15447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___15448,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
