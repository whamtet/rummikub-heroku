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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12085 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12085 = (function (f,fn_handler,meta12086){
this.f = f;
this.fn_handler = fn_handler;
this.meta12086 = meta12086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12085.cljs$lang$type = true;
cljs.core.async.t12085.cljs$lang$ctorStr = "cljs.core.async/t12085";
cljs.core.async.t12085.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12085");
});
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12087){var self__ = this;
var _12087__$1 = this;return self__.meta12086;
});
cljs.core.async.t12085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12087,meta12086__$1){var self__ = this;
var _12087__$1 = this;return (new cljs.core.async.t12085(self__.f,self__.fn_handler,meta12086__$1));
});
cljs.core.async.__GT_t12085 = (function __GT_t12085(f__$1,fn_handler__$1,meta12086){return (new cljs.core.async.t12085(f__$1,fn_handler__$1,meta12086));
});
}
return (new cljs.core.async.t12085(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12089 = buff;if(G__12089)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__12089.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12089.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12089);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12089);
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
{var val_12090 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12090);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12090,ret){
return (function (){return fn1.call(null,val_12090);
});})(val_12090,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___12091 = n;var x_12092 = (0);while(true){
if((x_12092 < n__4416__auto___12091))
{(a[x_12092] = (0));
{
var G__12093 = (x_12092 + (1));
x_12092 = G__12093;
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
var G__12094 = (i + (1));
i = G__12094;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12098 = (function (flag,alt_flag,meta12099){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12099 = meta12099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12098.cljs$lang$type = true;
cljs.core.async.t12098.cljs$lang$ctorStr = "cljs.core.async/t12098";
cljs.core.async.t12098.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12098");
});})(flag))
;
cljs.core.async.t12098.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12100){var self__ = this;
var _12100__$1 = this;return self__.meta12099;
});})(flag))
;
cljs.core.async.t12098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12100,meta12099__$1){var self__ = this;
var _12100__$1 = this;return (new cljs.core.async.t12098(self__.flag,self__.alt_flag,meta12099__$1));
});})(flag))
;
cljs.core.async.__GT_t12098 = ((function (flag){
return (function __GT_t12098(flag__$1,alt_flag__$1,meta12099){return (new cljs.core.async.t12098(flag__$1,alt_flag__$1,meta12099));
});})(flag))
;
}
return (new cljs.core.async.t12098(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12104 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12104 = (function (cb,flag,alt_handler,meta12105){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12105 = meta12105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12104.cljs$lang$type = true;
cljs.core.async.t12104.cljs$lang$ctorStr = "cljs.core.async/t12104";
cljs.core.async.t12104.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12104");
});
cljs.core.async.t12104.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12106){var self__ = this;
var _12106__$1 = this;return self__.meta12105;
});
cljs.core.async.t12104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12106,meta12105__$1){var self__ = this;
var _12106__$1 = this;return (new cljs.core.async.t12104(self__.cb,self__.flag,self__.alt_handler,meta12105__$1));
});
cljs.core.async.__GT_t12104 = (function __GT_t12104(cb__$1,flag__$1,alt_handler__$1,meta12105){return (new cljs.core.async.t12104(cb__$1,flag__$1,alt_handler__$1,meta12105));
});
}
return (new cljs.core.async.t12104(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12107_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12107_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12108_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12108_SHARP_,port], null));
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
var G__12109 = (i + (1));
i = G__12109;
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
var alts_BANG___delegate = function (ports,p__12110){var map__12112 = p__12110;var map__12112__$1 = ((cljs.core.seq_QMARK_.call(null,map__12112))?cljs.core.apply.call(null,cljs.core.hash_map,map__12112):map__12112);var opts = map__12112__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12110 = null;if (arguments.length > 1) {
  p__12110 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12110);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12113){
var ports = cljs.core.first(arglist__12113);
var p__12110 = cljs.core.rest(arglist__12113);
return alts_BANG___delegate(ports,p__12110);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8138__auto___12208 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___12208){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___12208){
return (function (state_12184){var state_val_12185 = (state_12184[(1)]);if((state_val_12185 === (7)))
{var inst_12180 = (state_12184[(2)]);var state_12184__$1 = state_12184;var statearr_12186_12209 = state_12184__$1;(statearr_12186_12209[(2)] = inst_12180);
(statearr_12186_12209[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (1)))
{var state_12184__$1 = state_12184;var statearr_12187_12210 = state_12184__$1;(statearr_12187_12210[(2)] = null);
(statearr_12187_12210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (4)))
{var inst_12163 = (state_12184[(7)]);var inst_12163__$1 = (state_12184[(2)]);var inst_12164 = (inst_12163__$1 == null);var state_12184__$1 = (function (){var statearr_12188 = state_12184;(statearr_12188[(7)] = inst_12163__$1);
return statearr_12188;
})();if(cljs.core.truth_(inst_12164))
{var statearr_12189_12211 = state_12184__$1;(statearr_12189_12211[(1)] = (5));
} else
{var statearr_12190_12212 = state_12184__$1;(statearr_12190_12212[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (13)))
{var state_12184__$1 = state_12184;var statearr_12191_12213 = state_12184__$1;(statearr_12191_12213[(2)] = null);
(statearr_12191_12213[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (6)))
{var inst_12163 = (state_12184[(7)]);var state_12184__$1 = state_12184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12184__$1,(11),to,inst_12163);
} else
{if((state_val_12185 === (3)))
{var inst_12182 = (state_12184[(2)]);var state_12184__$1 = state_12184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12184__$1,inst_12182);
} else
{if((state_val_12185 === (12)))
{var state_12184__$1 = state_12184;var statearr_12192_12214 = state_12184__$1;(statearr_12192_12214[(2)] = null);
(statearr_12192_12214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (2)))
{var state_12184__$1 = state_12184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12184__$1,(4),from);
} else
{if((state_val_12185 === (11)))
{var inst_12173 = (state_12184[(2)]);var state_12184__$1 = state_12184;if(cljs.core.truth_(inst_12173))
{var statearr_12193_12215 = state_12184__$1;(statearr_12193_12215[(1)] = (12));
} else
{var statearr_12194_12216 = state_12184__$1;(statearr_12194_12216[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (9)))
{var state_12184__$1 = state_12184;var statearr_12195_12217 = state_12184__$1;(statearr_12195_12217[(2)] = null);
(statearr_12195_12217[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (5)))
{var state_12184__$1 = state_12184;if(cljs.core.truth_(close_QMARK_))
{var statearr_12196_12218 = state_12184__$1;(statearr_12196_12218[(1)] = (8));
} else
{var statearr_12197_12219 = state_12184__$1;(statearr_12197_12219[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (14)))
{var inst_12178 = (state_12184[(2)]);var state_12184__$1 = state_12184;var statearr_12198_12220 = state_12184__$1;(statearr_12198_12220[(2)] = inst_12178);
(statearr_12198_12220[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (10)))
{var inst_12170 = (state_12184[(2)]);var state_12184__$1 = state_12184;var statearr_12199_12221 = state_12184__$1;(statearr_12199_12221[(2)] = inst_12170);
(statearr_12199_12221[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12185 === (8)))
{var inst_12167 = cljs.core.async.close_BANG_.call(null,to);var state_12184__$1 = state_12184;var statearr_12200_12222 = state_12184__$1;(statearr_12200_12222[(2)] = inst_12167);
(statearr_12200_12222[(1)] = (10));
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
});})(c__8138__auto___12208))
;return ((function (switch__8123__auto__,c__8138__auto___12208){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12204 = [null,null,null,null,null,null,null,null];(statearr_12204[(0)] = state_machine__8124__auto__);
(statearr_12204[(1)] = (1));
return statearr_12204;
});
var state_machine__8124__auto____1 = (function (state_12184){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12184);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12205){if((e12205 instanceof Object))
{var ex__8127__auto__ = e12205;var statearr_12206_12223 = state_12184;(statearr_12206_12223[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12224 = state_12184;
state_12184 = G__12224;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12184){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___12208))
})();var state__8140__auto__ = (function (){var statearr_12207 = f__8139__auto__.call(null);(statearr_12207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___12208);
return statearr_12207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___12208))
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
return (function (p__12408){var vec__12409 = p__12408;var v = cljs.core.nth.call(null,vec__12409,(0),null);var p = cljs.core.nth.call(null,vec__12409,(1),null);var job = vec__12409;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__8138__auto___12591 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___12591,res,vec__12409,v,p,job,jobs,results){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___12591,res,vec__12409,v,p,job,jobs,results){
return (function (state_12414){var state_val_12415 = (state_12414[(1)]);if((state_val_12415 === (2)))
{var inst_12411 = (state_12414[(2)]);var inst_12412 = cljs.core.async.close_BANG_.call(null,res);var state_12414__$1 = (function (){var statearr_12416 = state_12414;(statearr_12416[(7)] = inst_12411);
return statearr_12416;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12414__$1,inst_12412);
} else
{if((state_val_12415 === (1)))
{var state_12414__$1 = state_12414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12414__$1,(2),res,v);
} else
{return null;
}
}
});})(c__8138__auto___12591,res,vec__12409,v,p,job,jobs,results))
;return ((function (switch__8123__auto__,c__8138__auto___12591,res,vec__12409,v,p,job,jobs,results){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12420 = [null,null,null,null,null,null,null,null];(statearr_12420[(0)] = state_machine__8124__auto__);
(statearr_12420[(1)] = (1));
return statearr_12420;
});
var state_machine__8124__auto____1 = (function (state_12414){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12414);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12421){if((e12421 instanceof Object))
{var ex__8127__auto__ = e12421;var statearr_12422_12592 = state_12414;(statearr_12422_12592[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12421;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12593 = state_12414;
state_12414 = G__12593;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12414){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___12591,res,vec__12409,v,p,job,jobs,results))
})();var state__8140__auto__ = (function (){var statearr_12423 = f__8139__auto__.call(null);(statearr_12423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___12591);
return statearr_12423;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___12591,res,vec__12409,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12424){var vec__12425 = p__12424;var v = cljs.core.nth.call(null,vec__12425,(0),null);var p = cljs.core.nth.call(null,vec__12425,(1),null);var job = vec__12425;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___12594 = n;var __12595 = (0);while(true){
if((__12595 < n__4416__auto___12594))
{var G__12426_12596 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12426_12596) {
case "async":
var c__8138__auto___12598 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12595,c__8138__auto___12598,G__12426_12596,n__4416__auto___12594,jobs,results,process,async){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (__12595,c__8138__auto___12598,G__12426_12596,n__4416__auto___12594,jobs,results,process,async){
return (function (state_12439){var state_val_12440 = (state_12439[(1)]);if((state_val_12440 === (7)))
{var inst_12435 = (state_12439[(2)]);var state_12439__$1 = state_12439;var statearr_12441_12599 = state_12439__$1;(statearr_12441_12599[(2)] = inst_12435);
(statearr_12441_12599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (6)))
{var state_12439__$1 = state_12439;var statearr_12442_12600 = state_12439__$1;(statearr_12442_12600[(2)] = null);
(statearr_12442_12600[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (5)))
{var state_12439__$1 = state_12439;var statearr_12443_12601 = state_12439__$1;(statearr_12443_12601[(2)] = null);
(statearr_12443_12601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (4)))
{var inst_12429 = (state_12439[(2)]);var inst_12430 = async.call(null,inst_12429);var state_12439__$1 = state_12439;if(cljs.core.truth_(inst_12430))
{var statearr_12444_12602 = state_12439__$1;(statearr_12444_12602[(1)] = (5));
} else
{var statearr_12445_12603 = state_12439__$1;(statearr_12445_12603[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12440 === (3)))
{var inst_12437 = (state_12439[(2)]);var state_12439__$1 = state_12439;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12439__$1,inst_12437);
} else
{if((state_val_12440 === (2)))
{var state_12439__$1 = state_12439;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12439__$1,(4),jobs);
} else
{if((state_val_12440 === (1)))
{var state_12439__$1 = state_12439;var statearr_12446_12604 = state_12439__$1;(statearr_12446_12604[(2)] = null);
(statearr_12446_12604[(1)] = (2));
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
});})(__12595,c__8138__auto___12598,G__12426_12596,n__4416__auto___12594,jobs,results,process,async))
;return ((function (__12595,switch__8123__auto__,c__8138__auto___12598,G__12426_12596,n__4416__auto___12594,jobs,results,process,async){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12450 = [null,null,null,null,null,null,null];(statearr_12450[(0)] = state_machine__8124__auto__);
(statearr_12450[(1)] = (1));
return statearr_12450;
});
var state_machine__8124__auto____1 = (function (state_12439){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12439);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12451){if((e12451 instanceof Object))
{var ex__8127__auto__ = e12451;var statearr_12452_12605 = state_12439;(statearr_12452_12605[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12439);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12451;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12606 = state_12439;
state_12439 = G__12606;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12439){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(__12595,switch__8123__auto__,c__8138__auto___12598,G__12426_12596,n__4416__auto___12594,jobs,results,process,async))
})();var state__8140__auto__ = (function (){var statearr_12453 = f__8139__auto__.call(null);(statearr_12453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___12598);
return statearr_12453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(__12595,c__8138__auto___12598,G__12426_12596,n__4416__auto___12594,jobs,results,process,async))
);

break;
case "compute":
var c__8138__auto___12607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12595,c__8138__auto___12607,G__12426_12596,n__4416__auto___12594,jobs,results,process,async){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (__12595,c__8138__auto___12607,G__12426_12596,n__4416__auto___12594,jobs,results,process,async){
return (function (state_12466){var state_val_12467 = (state_12466[(1)]);if((state_val_12467 === (7)))
{var inst_12462 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12468_12608 = state_12466__$1;(statearr_12468_12608[(2)] = inst_12462);
(statearr_12468_12608[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (6)))
{var state_12466__$1 = state_12466;var statearr_12469_12609 = state_12466__$1;(statearr_12469_12609[(2)] = null);
(statearr_12469_12609[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (5)))
{var state_12466__$1 = state_12466;var statearr_12470_12610 = state_12466__$1;(statearr_12470_12610[(2)] = null);
(statearr_12470_12610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (4)))
{var inst_12456 = (state_12466[(2)]);var inst_12457 = process.call(null,inst_12456);var state_12466__$1 = state_12466;if(cljs.core.truth_(inst_12457))
{var statearr_12471_12611 = state_12466__$1;(statearr_12471_12611[(1)] = (5));
} else
{var statearr_12472_12612 = state_12466__$1;(statearr_12472_12612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (3)))
{var inst_12464 = (state_12466[(2)]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12466__$1,inst_12464);
} else
{if((state_val_12467 === (2)))
{var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12466__$1,(4),jobs);
} else
{if((state_val_12467 === (1)))
{var state_12466__$1 = state_12466;var statearr_12473_12613 = state_12466__$1;(statearr_12473_12613[(2)] = null);
(statearr_12473_12613[(1)] = (2));
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
});})(__12595,c__8138__auto___12607,G__12426_12596,n__4416__auto___12594,jobs,results,process,async))
;return ((function (__12595,switch__8123__auto__,c__8138__auto___12607,G__12426_12596,n__4416__auto___12594,jobs,results,process,async){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12477 = [null,null,null,null,null,null,null];(statearr_12477[(0)] = state_machine__8124__auto__);
(statearr_12477[(1)] = (1));
return statearr_12477;
});
var state_machine__8124__auto____1 = (function (state_12466){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12466);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12478){if((e12478 instanceof Object))
{var ex__8127__auto__ = e12478;var statearr_12479_12614 = state_12466;(statearr_12479_12614[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12478;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12615 = state_12466;
state_12466 = G__12615;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12466){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(__12595,switch__8123__auto__,c__8138__auto___12607,G__12426_12596,n__4416__auto___12594,jobs,results,process,async))
})();var state__8140__auto__ = (function (){var statearr_12480 = f__8139__auto__.call(null);(statearr_12480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___12607);
return statearr_12480;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(__12595,c__8138__auto___12607,G__12426_12596,n__4416__auto___12594,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12616 = (__12595 + (1));
__12595 = G__12616;
continue;
}
} else
{}
break;
}
var c__8138__auto___12617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___12617,jobs,results,process,async){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___12617,jobs,results,process,async){
return (function (state_12502){var state_val_12503 = (state_12502[(1)]);if((state_val_12503 === (9)))
{var inst_12495 = (state_12502[(2)]);var state_12502__$1 = (function (){var statearr_12504 = state_12502;(statearr_12504[(7)] = inst_12495);
return statearr_12504;
})();var statearr_12505_12618 = state_12502__$1;(statearr_12505_12618[(2)] = null);
(statearr_12505_12618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12503 === (8)))
{var inst_12488 = (state_12502[(8)]);var inst_12493 = (state_12502[(2)]);var state_12502__$1 = (function (){var statearr_12506 = state_12502;(statearr_12506[(9)] = inst_12493);
return statearr_12506;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12502__$1,(9),results,inst_12488);
} else
{if((state_val_12503 === (7)))
{var inst_12498 = (state_12502[(2)]);var state_12502__$1 = state_12502;var statearr_12507_12619 = state_12502__$1;(statearr_12507_12619[(2)] = inst_12498);
(statearr_12507_12619[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12503 === (6)))
{var inst_12488 = (state_12502[(8)]);var inst_12483 = (state_12502[(10)]);var inst_12488__$1 = cljs.core.async.chan.call(null,(1));var inst_12489 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12490 = [inst_12483,inst_12488__$1];var inst_12491 = (new cljs.core.PersistentVector(null,2,(5),inst_12489,inst_12490,null));var state_12502__$1 = (function (){var statearr_12508 = state_12502;(statearr_12508[(8)] = inst_12488__$1);
return statearr_12508;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12502__$1,(8),jobs,inst_12491);
} else
{if((state_val_12503 === (5)))
{var inst_12486 = cljs.core.async.close_BANG_.call(null,jobs);var state_12502__$1 = state_12502;var statearr_12509_12620 = state_12502__$1;(statearr_12509_12620[(2)] = inst_12486);
(statearr_12509_12620[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12503 === (4)))
{var inst_12483 = (state_12502[(10)]);var inst_12483__$1 = (state_12502[(2)]);var inst_12484 = (inst_12483__$1 == null);var state_12502__$1 = (function (){var statearr_12510 = state_12502;(statearr_12510[(10)] = inst_12483__$1);
return statearr_12510;
})();if(cljs.core.truth_(inst_12484))
{var statearr_12511_12621 = state_12502__$1;(statearr_12511_12621[(1)] = (5));
} else
{var statearr_12512_12622 = state_12502__$1;(statearr_12512_12622[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12503 === (3)))
{var inst_12500 = (state_12502[(2)]);var state_12502__$1 = state_12502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12502__$1,inst_12500);
} else
{if((state_val_12503 === (2)))
{var state_12502__$1 = state_12502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12502__$1,(4),from);
} else
{if((state_val_12503 === (1)))
{var state_12502__$1 = state_12502;var statearr_12513_12623 = state_12502__$1;(statearr_12513_12623[(2)] = null);
(statearr_12513_12623[(1)] = (2));
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
});})(c__8138__auto___12617,jobs,results,process,async))
;return ((function (switch__8123__auto__,c__8138__auto___12617,jobs,results,process,async){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12517 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12517[(0)] = state_machine__8124__auto__);
(statearr_12517[(1)] = (1));
return statearr_12517;
});
var state_machine__8124__auto____1 = (function (state_12502){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12502);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12518){if((e12518 instanceof Object))
{var ex__8127__auto__ = e12518;var statearr_12519_12624 = state_12502;(statearr_12519_12624[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12625 = state_12502;
state_12502 = G__12625;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12502){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___12617,jobs,results,process,async))
})();var state__8140__auto__ = (function (){var statearr_12520 = f__8139__auto__.call(null);(statearr_12520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___12617);
return statearr_12520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___12617,jobs,results,process,async))
);
var c__8138__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto__,jobs,results,process,async){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto__,jobs,results,process,async){
return (function (state_12558){var state_val_12559 = (state_12558[(1)]);if((state_val_12559 === (7)))
{var inst_12554 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12560_12626 = state_12558__$1;(statearr_12560_12626[(2)] = inst_12554);
(statearr_12560_12626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (20)))
{var state_12558__$1 = state_12558;var statearr_12561_12627 = state_12558__$1;(statearr_12561_12627[(2)] = null);
(statearr_12561_12627[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (1)))
{var state_12558__$1 = state_12558;var statearr_12562_12628 = state_12558__$1;(statearr_12562_12628[(2)] = null);
(statearr_12562_12628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (4)))
{var inst_12523 = (state_12558[(7)]);var inst_12523__$1 = (state_12558[(2)]);var inst_12524 = (inst_12523__$1 == null);var state_12558__$1 = (function (){var statearr_12563 = state_12558;(statearr_12563[(7)] = inst_12523__$1);
return statearr_12563;
})();if(cljs.core.truth_(inst_12524))
{var statearr_12564_12629 = state_12558__$1;(statearr_12564_12629[(1)] = (5));
} else
{var statearr_12565_12630 = state_12558__$1;(statearr_12565_12630[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (15)))
{var inst_12536 = (state_12558[(8)]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12558__$1,(18),to,inst_12536);
} else
{if((state_val_12559 === (21)))
{var inst_12549 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12566_12631 = state_12558__$1;(statearr_12566_12631[(2)] = inst_12549);
(statearr_12566_12631[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (13)))
{var inst_12551 = (state_12558[(2)]);var state_12558__$1 = (function (){var statearr_12567 = state_12558;(statearr_12567[(9)] = inst_12551);
return statearr_12567;
})();var statearr_12568_12632 = state_12558__$1;(statearr_12568_12632[(2)] = null);
(statearr_12568_12632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (6)))
{var inst_12523 = (state_12558[(7)]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,(11),inst_12523);
} else
{if((state_val_12559 === (17)))
{var inst_12544 = (state_12558[(2)]);var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12544))
{var statearr_12569_12633 = state_12558__$1;(statearr_12569_12633[(1)] = (19));
} else
{var statearr_12570_12634 = state_12558__$1;(statearr_12570_12634[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (3)))
{var inst_12556 = (state_12558[(2)]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12558__$1,inst_12556);
} else
{if((state_val_12559 === (12)))
{var inst_12533 = (state_12558[(10)]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,(14),inst_12533);
} else
{if((state_val_12559 === (2)))
{var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,(4),results);
} else
{if((state_val_12559 === (19)))
{var state_12558__$1 = state_12558;var statearr_12571_12635 = state_12558__$1;(statearr_12571_12635[(2)] = null);
(statearr_12571_12635[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (11)))
{var inst_12533 = (state_12558[(2)]);var state_12558__$1 = (function (){var statearr_12572 = state_12558;(statearr_12572[(10)] = inst_12533);
return statearr_12572;
})();var statearr_12573_12636 = state_12558__$1;(statearr_12573_12636[(2)] = null);
(statearr_12573_12636[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (9)))
{var state_12558__$1 = state_12558;var statearr_12574_12637 = state_12558__$1;(statearr_12574_12637[(2)] = null);
(statearr_12574_12637[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (5)))
{var state_12558__$1 = state_12558;if(cljs.core.truth_(close_QMARK_))
{var statearr_12575_12638 = state_12558__$1;(statearr_12575_12638[(1)] = (8));
} else
{var statearr_12576_12639 = state_12558__$1;(statearr_12576_12639[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (14)))
{var inst_12538 = (state_12558[(11)]);var inst_12536 = (state_12558[(8)]);var inst_12536__$1 = (state_12558[(2)]);var inst_12537 = (inst_12536__$1 == null);var inst_12538__$1 = cljs.core.not.call(null,inst_12537);var state_12558__$1 = (function (){var statearr_12577 = state_12558;(statearr_12577[(11)] = inst_12538__$1);
(statearr_12577[(8)] = inst_12536__$1);
return statearr_12577;
})();if(inst_12538__$1)
{var statearr_12578_12640 = state_12558__$1;(statearr_12578_12640[(1)] = (15));
} else
{var statearr_12579_12641 = state_12558__$1;(statearr_12579_12641[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (16)))
{var inst_12538 = (state_12558[(11)]);var state_12558__$1 = state_12558;var statearr_12580_12642 = state_12558__$1;(statearr_12580_12642[(2)] = inst_12538);
(statearr_12580_12642[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (10)))
{var inst_12530 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12581_12643 = state_12558__$1;(statearr_12581_12643[(2)] = inst_12530);
(statearr_12581_12643[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (18)))
{var inst_12541 = (state_12558[(2)]);var state_12558__$1 = state_12558;var statearr_12582_12644 = state_12558__$1;(statearr_12582_12644[(2)] = inst_12541);
(statearr_12582_12644[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12559 === (8)))
{var inst_12527 = cljs.core.async.close_BANG_.call(null,to);var state_12558__$1 = state_12558;var statearr_12583_12645 = state_12558__$1;(statearr_12583_12645[(2)] = inst_12527);
(statearr_12583_12645[(1)] = (10));
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
});})(c__8138__auto__,jobs,results,process,async))
;return ((function (switch__8123__auto__,c__8138__auto__,jobs,results,process,async){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12587 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12587[(0)] = state_machine__8124__auto__);
(statearr_12587[(1)] = (1));
return statearr_12587;
});
var state_machine__8124__auto____1 = (function (state_12558){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12558);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12588){if((e12588 instanceof Object))
{var ex__8127__auto__ = e12588;var statearr_12589_12646 = state_12558;(statearr_12589_12646[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12588;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12647 = state_12558;
state_12558 = G__12647;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12558){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto__,jobs,results,process,async))
})();var state__8140__auto__ = (function (){var statearr_12590 = f__8139__auto__.call(null);(statearr_12590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto__);
return statearr_12590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto__,jobs,results,process,async))
);
return c__8138__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8138__auto___12748 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___12748,tc,fc){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___12748,tc,fc){
return (function (state_12723){var state_val_12724 = (state_12723[(1)]);if((state_val_12724 === (7)))
{var inst_12719 = (state_12723[(2)]);var state_12723__$1 = state_12723;var statearr_12725_12749 = state_12723__$1;(statearr_12725_12749[(2)] = inst_12719);
(statearr_12725_12749[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (1)))
{var state_12723__$1 = state_12723;var statearr_12726_12750 = state_12723__$1;(statearr_12726_12750[(2)] = null);
(statearr_12726_12750[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (4)))
{var inst_12700 = (state_12723[(7)]);var inst_12700__$1 = (state_12723[(2)]);var inst_12701 = (inst_12700__$1 == null);var state_12723__$1 = (function (){var statearr_12727 = state_12723;(statearr_12727[(7)] = inst_12700__$1);
return statearr_12727;
})();if(cljs.core.truth_(inst_12701))
{var statearr_12728_12751 = state_12723__$1;(statearr_12728_12751[(1)] = (5));
} else
{var statearr_12729_12752 = state_12723__$1;(statearr_12729_12752[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (13)))
{var state_12723__$1 = state_12723;var statearr_12730_12753 = state_12723__$1;(statearr_12730_12753[(2)] = null);
(statearr_12730_12753[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (6)))
{var inst_12700 = (state_12723[(7)]);var inst_12706 = p.call(null,inst_12700);var state_12723__$1 = state_12723;if(cljs.core.truth_(inst_12706))
{var statearr_12731_12754 = state_12723__$1;(statearr_12731_12754[(1)] = (9));
} else
{var statearr_12732_12755 = state_12723__$1;(statearr_12732_12755[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (3)))
{var inst_12721 = (state_12723[(2)]);var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12723__$1,inst_12721);
} else
{if((state_val_12724 === (12)))
{var state_12723__$1 = state_12723;var statearr_12733_12756 = state_12723__$1;(statearr_12733_12756[(2)] = null);
(statearr_12733_12756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (2)))
{var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12723__$1,(4),ch);
} else
{if((state_val_12724 === (11)))
{var inst_12700 = (state_12723[(7)]);var inst_12710 = (state_12723[(2)]);var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12723__$1,(8),inst_12710,inst_12700);
} else
{if((state_val_12724 === (9)))
{var state_12723__$1 = state_12723;var statearr_12734_12757 = state_12723__$1;(statearr_12734_12757[(2)] = tc);
(statearr_12734_12757[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (5)))
{var inst_12703 = cljs.core.async.close_BANG_.call(null,tc);var inst_12704 = cljs.core.async.close_BANG_.call(null,fc);var state_12723__$1 = (function (){var statearr_12735 = state_12723;(statearr_12735[(8)] = inst_12703);
return statearr_12735;
})();var statearr_12736_12758 = state_12723__$1;(statearr_12736_12758[(2)] = inst_12704);
(statearr_12736_12758[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (14)))
{var inst_12717 = (state_12723[(2)]);var state_12723__$1 = state_12723;var statearr_12737_12759 = state_12723__$1;(statearr_12737_12759[(2)] = inst_12717);
(statearr_12737_12759[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (10)))
{var state_12723__$1 = state_12723;var statearr_12738_12760 = state_12723__$1;(statearr_12738_12760[(2)] = fc);
(statearr_12738_12760[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (8)))
{var inst_12712 = (state_12723[(2)]);var state_12723__$1 = state_12723;if(cljs.core.truth_(inst_12712))
{var statearr_12739_12761 = state_12723__$1;(statearr_12739_12761[(1)] = (12));
} else
{var statearr_12740_12762 = state_12723__$1;(statearr_12740_12762[(1)] = (13));
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
});})(c__8138__auto___12748,tc,fc))
;return ((function (switch__8123__auto__,c__8138__auto___12748,tc,fc){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12744 = [null,null,null,null,null,null,null,null,null];(statearr_12744[(0)] = state_machine__8124__auto__);
(statearr_12744[(1)] = (1));
return statearr_12744;
});
var state_machine__8124__auto____1 = (function (state_12723){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12723);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12745){if((e12745 instanceof Object))
{var ex__8127__auto__ = e12745;var statearr_12746_12763 = state_12723;(statearr_12746_12763[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12745;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12764 = state_12723;
state_12723 = G__12764;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12723){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___12748,tc,fc))
})();var state__8140__auto__ = (function (){var statearr_12747 = f__8139__auto__.call(null);(statearr_12747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___12748);
return statearr_12747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___12748,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8138__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto__){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto__){
return (function (state_12811){var state_val_12812 = (state_12811[(1)]);if((state_val_12812 === (7)))
{var inst_12807 = (state_12811[(2)]);var state_12811__$1 = state_12811;var statearr_12813_12829 = state_12811__$1;(statearr_12813_12829[(2)] = inst_12807);
(statearr_12813_12829[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12812 === (6)))
{var inst_12797 = (state_12811[(7)]);var inst_12800 = (state_12811[(8)]);var inst_12804 = f.call(null,inst_12797,inst_12800);var inst_12797__$1 = inst_12804;var state_12811__$1 = (function (){var statearr_12814 = state_12811;(statearr_12814[(7)] = inst_12797__$1);
return statearr_12814;
})();var statearr_12815_12830 = state_12811__$1;(statearr_12815_12830[(2)] = null);
(statearr_12815_12830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12812 === (5)))
{var inst_12797 = (state_12811[(7)]);var state_12811__$1 = state_12811;var statearr_12816_12831 = state_12811__$1;(statearr_12816_12831[(2)] = inst_12797);
(statearr_12816_12831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12812 === (4)))
{var inst_12800 = (state_12811[(8)]);var inst_12800__$1 = (state_12811[(2)]);var inst_12801 = (inst_12800__$1 == null);var state_12811__$1 = (function (){var statearr_12817 = state_12811;(statearr_12817[(8)] = inst_12800__$1);
return statearr_12817;
})();if(cljs.core.truth_(inst_12801))
{var statearr_12818_12832 = state_12811__$1;(statearr_12818_12832[(1)] = (5));
} else
{var statearr_12819_12833 = state_12811__$1;(statearr_12819_12833[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12812 === (3)))
{var inst_12809 = (state_12811[(2)]);var state_12811__$1 = state_12811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12811__$1,inst_12809);
} else
{if((state_val_12812 === (2)))
{var state_12811__$1 = state_12811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12811__$1,(4),ch);
} else
{if((state_val_12812 === (1)))
{var inst_12797 = init;var state_12811__$1 = (function (){var statearr_12820 = state_12811;(statearr_12820[(7)] = inst_12797);
return statearr_12820;
})();var statearr_12821_12834 = state_12811__$1;(statearr_12821_12834[(2)] = null);
(statearr_12821_12834[(1)] = (2));
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
});})(c__8138__auto__))
;return ((function (switch__8123__auto__,c__8138__auto__){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12825 = [null,null,null,null,null,null,null,null,null];(statearr_12825[(0)] = state_machine__8124__auto__);
(statearr_12825[(1)] = (1));
return statearr_12825;
});
var state_machine__8124__auto____1 = (function (state_12811){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12811);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12826){if((e12826 instanceof Object))
{var ex__8127__auto__ = e12826;var statearr_12827_12835 = state_12811;(statearr_12827_12835[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12811);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12836 = state_12811;
state_12811 = G__12836;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12811){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto__))
})();var state__8140__auto__ = (function (){var statearr_12828 = f__8139__auto__.call(null);(statearr_12828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto__);
return statearr_12828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto__))
);
return c__8138__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8138__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto__){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto__){
return (function (state_12910){var state_val_12911 = (state_12910[(1)]);if((state_val_12911 === (7)))
{var inst_12892 = (state_12910[(2)]);var state_12910__$1 = state_12910;var statearr_12912_12935 = state_12910__$1;(statearr_12912_12935[(2)] = inst_12892);
(statearr_12912_12935[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (1)))
{var inst_12886 = cljs.core.seq.call(null,coll);var inst_12887 = inst_12886;var state_12910__$1 = (function (){var statearr_12913 = state_12910;(statearr_12913[(7)] = inst_12887);
return statearr_12913;
})();var statearr_12914_12936 = state_12910__$1;(statearr_12914_12936[(2)] = null);
(statearr_12914_12936[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (4)))
{var inst_12887 = (state_12910[(7)]);var inst_12890 = cljs.core.first.call(null,inst_12887);var state_12910__$1 = state_12910;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12910__$1,(7),ch,inst_12890);
} else
{if((state_val_12911 === (13)))
{var inst_12904 = (state_12910[(2)]);var state_12910__$1 = state_12910;var statearr_12915_12937 = state_12910__$1;(statearr_12915_12937[(2)] = inst_12904);
(statearr_12915_12937[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (6)))
{var inst_12895 = (state_12910[(2)]);var state_12910__$1 = state_12910;if(cljs.core.truth_(inst_12895))
{var statearr_12916_12938 = state_12910__$1;(statearr_12916_12938[(1)] = (8));
} else
{var statearr_12917_12939 = state_12910__$1;(statearr_12917_12939[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (3)))
{var inst_12908 = (state_12910[(2)]);var state_12910__$1 = state_12910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12910__$1,inst_12908);
} else
{if((state_val_12911 === (12)))
{var state_12910__$1 = state_12910;var statearr_12918_12940 = state_12910__$1;(statearr_12918_12940[(2)] = null);
(statearr_12918_12940[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (2)))
{var inst_12887 = (state_12910[(7)]);var state_12910__$1 = state_12910;if(cljs.core.truth_(inst_12887))
{var statearr_12919_12941 = state_12910__$1;(statearr_12919_12941[(1)] = (4));
} else
{var statearr_12920_12942 = state_12910__$1;(statearr_12920_12942[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (11)))
{var inst_12901 = cljs.core.async.close_BANG_.call(null,ch);var state_12910__$1 = state_12910;var statearr_12921_12943 = state_12910__$1;(statearr_12921_12943[(2)] = inst_12901);
(statearr_12921_12943[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (9)))
{var state_12910__$1 = state_12910;if(cljs.core.truth_(close_QMARK_))
{var statearr_12922_12944 = state_12910__$1;(statearr_12922_12944[(1)] = (11));
} else
{var statearr_12923_12945 = state_12910__$1;(statearr_12923_12945[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (5)))
{var inst_12887 = (state_12910[(7)]);var state_12910__$1 = state_12910;var statearr_12924_12946 = state_12910__$1;(statearr_12924_12946[(2)] = inst_12887);
(statearr_12924_12946[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (10)))
{var inst_12906 = (state_12910[(2)]);var state_12910__$1 = state_12910;var statearr_12925_12947 = state_12910__$1;(statearr_12925_12947[(2)] = inst_12906);
(statearr_12925_12947[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12911 === (8)))
{var inst_12887 = (state_12910[(7)]);var inst_12897 = cljs.core.next.call(null,inst_12887);var inst_12887__$1 = inst_12897;var state_12910__$1 = (function (){var statearr_12926 = state_12910;(statearr_12926[(7)] = inst_12887__$1);
return statearr_12926;
})();var statearr_12927_12948 = state_12910__$1;(statearr_12927_12948[(2)] = null);
(statearr_12927_12948[(1)] = (2));
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
});})(c__8138__auto__))
;return ((function (switch__8123__auto__,c__8138__auto__){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_12931 = [null,null,null,null,null,null,null,null];(statearr_12931[(0)] = state_machine__8124__auto__);
(statearr_12931[(1)] = (1));
return statearr_12931;
});
var state_machine__8124__auto____1 = (function (state_12910){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_12910);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e12932){if((e12932 instanceof Object))
{var ex__8127__auto__ = e12932;var statearr_12933_12949 = state_12910;(statearr_12933_12949[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12910);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12932;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12950 = state_12910;
state_12910 = G__12950;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_12910){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_12910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto__))
})();var state__8140__auto__ = (function (){var statearr_12934 = f__8139__auto__.call(null);(statearr_12934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto__);
return statearr_12934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto__))
);
return c__8138__auto__;
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
cljs.core.async.Mux = (function (){var obj12952 = {};return obj12952;
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
cljs.core.async.Mult = (function (){var obj12954 = {};return obj12954;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13176 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13176 = (function (cs,ch,mult,meta13177){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13177 = meta13177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13176.cljs$lang$type = true;
cljs.core.async.t13176.cljs$lang$ctorStr = "cljs.core.async/t13176";
cljs.core.async.t13176.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13176");
});})(cs))
;
cljs.core.async.t13176.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13176.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13176.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13176.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13176.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13178){var self__ = this;
var _13178__$1 = this;return self__.meta13177;
});})(cs))
;
cljs.core.async.t13176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13178,meta13177__$1){var self__ = this;
var _13178__$1 = this;return (new cljs.core.async.t13176(self__.cs,self__.ch,self__.mult,meta13177__$1));
});})(cs))
;
cljs.core.async.__GT_t13176 = ((function (cs){
return (function __GT_t13176(cs__$1,ch__$1,mult__$1,meta13177){return (new cljs.core.async.t13176(cs__$1,ch__$1,mult__$1,meta13177));
});})(cs))
;
}
return (new cljs.core.async.t13176(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8138__auto___13397 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___13397,cs,m,dchan,dctr,done){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___13397,cs,m,dchan,dctr,done){
return (function (state_13309){var state_val_13310 = (state_13309[(1)]);if((state_val_13310 === (7)))
{var inst_13305 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13311_13398 = state_13309__$1;(statearr_13311_13398[(2)] = inst_13305);
(statearr_13311_13398[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (20)))
{var inst_13210 = (state_13309[(7)]);var inst_13220 = cljs.core.first.call(null,inst_13210);var inst_13221 = cljs.core.nth.call(null,inst_13220,(0),null);var inst_13222 = cljs.core.nth.call(null,inst_13220,(1),null);var state_13309__$1 = (function (){var statearr_13312 = state_13309;(statearr_13312[(8)] = inst_13221);
return statearr_13312;
})();if(cljs.core.truth_(inst_13222))
{var statearr_13313_13399 = state_13309__$1;(statearr_13313_13399[(1)] = (22));
} else
{var statearr_13314_13400 = state_13309__$1;(statearr_13314_13400[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (27)))
{var inst_13257 = (state_13309[(9)]);var inst_13252 = (state_13309[(10)]);var inst_13181 = (state_13309[(11)]);var inst_13250 = (state_13309[(12)]);var inst_13257__$1 = cljs.core._nth.call(null,inst_13250,inst_13252);var inst_13258 = cljs.core.async.put_BANG_.call(null,inst_13257__$1,inst_13181,done);var state_13309__$1 = (function (){var statearr_13315 = state_13309;(statearr_13315[(9)] = inst_13257__$1);
return statearr_13315;
})();if(cljs.core.truth_(inst_13258))
{var statearr_13316_13401 = state_13309__$1;(statearr_13316_13401[(1)] = (30));
} else
{var statearr_13317_13402 = state_13309__$1;(statearr_13317_13402[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (1)))
{var state_13309__$1 = state_13309;var statearr_13318_13403 = state_13309__$1;(statearr_13318_13403[(2)] = null);
(statearr_13318_13403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (24)))
{var inst_13210 = (state_13309[(7)]);var inst_13227 = (state_13309[(2)]);var inst_13228 = cljs.core.next.call(null,inst_13210);var inst_13190 = inst_13228;var inst_13191 = null;var inst_13192 = (0);var inst_13193 = (0);var state_13309__$1 = (function (){var statearr_13319 = state_13309;(statearr_13319[(13)] = inst_13191);
(statearr_13319[(14)] = inst_13190);
(statearr_13319[(15)] = inst_13192);
(statearr_13319[(16)] = inst_13227);
(statearr_13319[(17)] = inst_13193);
return statearr_13319;
})();var statearr_13320_13404 = state_13309__$1;(statearr_13320_13404[(2)] = null);
(statearr_13320_13404[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (39)))
{var state_13309__$1 = state_13309;var statearr_13324_13405 = state_13309__$1;(statearr_13324_13405[(2)] = null);
(statearr_13324_13405[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (4)))
{var inst_13181 = (state_13309[(11)]);var inst_13181__$1 = (state_13309[(2)]);var inst_13182 = (inst_13181__$1 == null);var state_13309__$1 = (function (){var statearr_13325 = state_13309;(statearr_13325[(11)] = inst_13181__$1);
return statearr_13325;
})();if(cljs.core.truth_(inst_13182))
{var statearr_13326_13406 = state_13309__$1;(statearr_13326_13406[(1)] = (5));
} else
{var statearr_13327_13407 = state_13309__$1;(statearr_13327_13407[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (15)))
{var inst_13191 = (state_13309[(13)]);var inst_13190 = (state_13309[(14)]);var inst_13192 = (state_13309[(15)]);var inst_13193 = (state_13309[(17)]);var inst_13206 = (state_13309[(2)]);var inst_13207 = (inst_13193 + (1));var tmp13321 = inst_13191;var tmp13322 = inst_13190;var tmp13323 = inst_13192;var inst_13190__$1 = tmp13322;var inst_13191__$1 = tmp13321;var inst_13192__$1 = tmp13323;var inst_13193__$1 = inst_13207;var state_13309__$1 = (function (){var statearr_13328 = state_13309;(statearr_13328[(13)] = inst_13191__$1);
(statearr_13328[(14)] = inst_13190__$1);
(statearr_13328[(18)] = inst_13206);
(statearr_13328[(15)] = inst_13192__$1);
(statearr_13328[(17)] = inst_13193__$1);
return statearr_13328;
})();var statearr_13329_13408 = state_13309__$1;(statearr_13329_13408[(2)] = null);
(statearr_13329_13408[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (21)))
{var inst_13231 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13333_13409 = state_13309__$1;(statearr_13333_13409[(2)] = inst_13231);
(statearr_13333_13409[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (31)))
{var inst_13257 = (state_13309[(9)]);var inst_13261 = done.call(null,null);var inst_13262 = cljs.core.async.untap_STAR_.call(null,m,inst_13257);var state_13309__$1 = (function (){var statearr_13334 = state_13309;(statearr_13334[(19)] = inst_13261);
return statearr_13334;
})();var statearr_13335_13410 = state_13309__$1;(statearr_13335_13410[(2)] = inst_13262);
(statearr_13335_13410[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (32)))
{var inst_13251 = (state_13309[(20)]);var inst_13252 = (state_13309[(10)]);var inst_13249 = (state_13309[(21)]);var inst_13250 = (state_13309[(12)]);var inst_13264 = (state_13309[(2)]);var inst_13265 = (inst_13252 + (1));var tmp13330 = inst_13251;var tmp13331 = inst_13249;var tmp13332 = inst_13250;var inst_13249__$1 = tmp13331;var inst_13250__$1 = tmp13332;var inst_13251__$1 = tmp13330;var inst_13252__$1 = inst_13265;var state_13309__$1 = (function (){var statearr_13336 = state_13309;(statearr_13336[(20)] = inst_13251__$1);
(statearr_13336[(10)] = inst_13252__$1);
(statearr_13336[(21)] = inst_13249__$1);
(statearr_13336[(12)] = inst_13250__$1);
(statearr_13336[(22)] = inst_13264);
return statearr_13336;
})();var statearr_13337_13411 = state_13309__$1;(statearr_13337_13411[(2)] = null);
(statearr_13337_13411[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (40)))
{var inst_13277 = (state_13309[(23)]);var inst_13281 = done.call(null,null);var inst_13282 = cljs.core.async.untap_STAR_.call(null,m,inst_13277);var state_13309__$1 = (function (){var statearr_13338 = state_13309;(statearr_13338[(24)] = inst_13281);
return statearr_13338;
})();var statearr_13339_13412 = state_13309__$1;(statearr_13339_13412[(2)] = inst_13282);
(statearr_13339_13412[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (33)))
{var inst_13268 = (state_13309[(25)]);var inst_13270 = cljs.core.chunked_seq_QMARK_.call(null,inst_13268);var state_13309__$1 = state_13309;if(inst_13270)
{var statearr_13340_13413 = state_13309__$1;(statearr_13340_13413[(1)] = (36));
} else
{var statearr_13341_13414 = state_13309__$1;(statearr_13341_13414[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (13)))
{var inst_13200 = (state_13309[(26)]);var inst_13203 = cljs.core.async.close_BANG_.call(null,inst_13200);var state_13309__$1 = state_13309;var statearr_13342_13415 = state_13309__$1;(statearr_13342_13415[(2)] = inst_13203);
(statearr_13342_13415[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (22)))
{var inst_13221 = (state_13309[(8)]);var inst_13224 = cljs.core.async.close_BANG_.call(null,inst_13221);var state_13309__$1 = state_13309;var statearr_13343_13416 = state_13309__$1;(statearr_13343_13416[(2)] = inst_13224);
(statearr_13343_13416[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (36)))
{var inst_13268 = (state_13309[(25)]);var inst_13272 = cljs.core.chunk_first.call(null,inst_13268);var inst_13273 = cljs.core.chunk_rest.call(null,inst_13268);var inst_13274 = cljs.core.count.call(null,inst_13272);var inst_13249 = inst_13273;var inst_13250 = inst_13272;var inst_13251 = inst_13274;var inst_13252 = (0);var state_13309__$1 = (function (){var statearr_13344 = state_13309;(statearr_13344[(20)] = inst_13251);
(statearr_13344[(10)] = inst_13252);
(statearr_13344[(21)] = inst_13249);
(statearr_13344[(12)] = inst_13250);
return statearr_13344;
})();var statearr_13345_13417 = state_13309__$1;(statearr_13345_13417[(2)] = null);
(statearr_13345_13417[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (41)))
{var inst_13268 = (state_13309[(25)]);var inst_13284 = (state_13309[(2)]);var inst_13285 = cljs.core.next.call(null,inst_13268);var inst_13249 = inst_13285;var inst_13250 = null;var inst_13251 = (0);var inst_13252 = (0);var state_13309__$1 = (function (){var statearr_13346 = state_13309;(statearr_13346[(20)] = inst_13251);
(statearr_13346[(10)] = inst_13252);
(statearr_13346[(21)] = inst_13249);
(statearr_13346[(27)] = inst_13284);
(statearr_13346[(12)] = inst_13250);
return statearr_13346;
})();var statearr_13347_13418 = state_13309__$1;(statearr_13347_13418[(2)] = null);
(statearr_13347_13418[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (43)))
{var state_13309__$1 = state_13309;var statearr_13348_13419 = state_13309__$1;(statearr_13348_13419[(2)] = null);
(statearr_13348_13419[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (29)))
{var inst_13293 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13349_13420 = state_13309__$1;(statearr_13349_13420[(2)] = inst_13293);
(statearr_13349_13420[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (44)))
{var inst_13302 = (state_13309[(2)]);var state_13309__$1 = (function (){var statearr_13350 = state_13309;(statearr_13350[(28)] = inst_13302);
return statearr_13350;
})();var statearr_13351_13421 = state_13309__$1;(statearr_13351_13421[(2)] = null);
(statearr_13351_13421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (6)))
{var inst_13241 = (state_13309[(29)]);var inst_13240 = cljs.core.deref.call(null,cs);var inst_13241__$1 = cljs.core.keys.call(null,inst_13240);var inst_13242 = cljs.core.count.call(null,inst_13241__$1);var inst_13243 = cljs.core.reset_BANG_.call(null,dctr,inst_13242);var inst_13248 = cljs.core.seq.call(null,inst_13241__$1);var inst_13249 = inst_13248;var inst_13250 = null;var inst_13251 = (0);var inst_13252 = (0);var state_13309__$1 = (function (){var statearr_13352 = state_13309;(statearr_13352[(29)] = inst_13241__$1);
(statearr_13352[(20)] = inst_13251);
(statearr_13352[(10)] = inst_13252);
(statearr_13352[(21)] = inst_13249);
(statearr_13352[(12)] = inst_13250);
(statearr_13352[(30)] = inst_13243);
return statearr_13352;
})();var statearr_13353_13422 = state_13309__$1;(statearr_13353_13422[(2)] = null);
(statearr_13353_13422[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (28)))
{var inst_13249 = (state_13309[(21)]);var inst_13268 = (state_13309[(25)]);var inst_13268__$1 = cljs.core.seq.call(null,inst_13249);var state_13309__$1 = (function (){var statearr_13354 = state_13309;(statearr_13354[(25)] = inst_13268__$1);
return statearr_13354;
})();if(inst_13268__$1)
{var statearr_13355_13423 = state_13309__$1;(statearr_13355_13423[(1)] = (33));
} else
{var statearr_13356_13424 = state_13309__$1;(statearr_13356_13424[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (25)))
{var inst_13251 = (state_13309[(20)]);var inst_13252 = (state_13309[(10)]);var inst_13254 = (inst_13252 < inst_13251);var inst_13255 = inst_13254;var state_13309__$1 = state_13309;if(cljs.core.truth_(inst_13255))
{var statearr_13357_13425 = state_13309__$1;(statearr_13357_13425[(1)] = (27));
} else
{var statearr_13358_13426 = state_13309__$1;(statearr_13358_13426[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (34)))
{var state_13309__$1 = state_13309;var statearr_13359_13427 = state_13309__$1;(statearr_13359_13427[(2)] = null);
(statearr_13359_13427[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (17)))
{var state_13309__$1 = state_13309;var statearr_13360_13428 = state_13309__$1;(statearr_13360_13428[(2)] = null);
(statearr_13360_13428[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (3)))
{var inst_13307 = (state_13309[(2)]);var state_13309__$1 = state_13309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13309__$1,inst_13307);
} else
{if((state_val_13310 === (12)))
{var inst_13236 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13361_13429 = state_13309__$1;(statearr_13361_13429[(2)] = inst_13236);
(statearr_13361_13429[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (2)))
{var state_13309__$1 = state_13309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13309__$1,(4),ch);
} else
{if((state_val_13310 === (23)))
{var state_13309__$1 = state_13309;var statearr_13362_13430 = state_13309__$1;(statearr_13362_13430[(2)] = null);
(statearr_13362_13430[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (35)))
{var inst_13291 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13363_13431 = state_13309__$1;(statearr_13363_13431[(2)] = inst_13291);
(statearr_13363_13431[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (19)))
{var inst_13210 = (state_13309[(7)]);var inst_13214 = cljs.core.chunk_first.call(null,inst_13210);var inst_13215 = cljs.core.chunk_rest.call(null,inst_13210);var inst_13216 = cljs.core.count.call(null,inst_13214);var inst_13190 = inst_13215;var inst_13191 = inst_13214;var inst_13192 = inst_13216;var inst_13193 = (0);var state_13309__$1 = (function (){var statearr_13364 = state_13309;(statearr_13364[(13)] = inst_13191);
(statearr_13364[(14)] = inst_13190);
(statearr_13364[(15)] = inst_13192);
(statearr_13364[(17)] = inst_13193);
return statearr_13364;
})();var statearr_13365_13432 = state_13309__$1;(statearr_13365_13432[(2)] = null);
(statearr_13365_13432[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (11)))
{var inst_13190 = (state_13309[(14)]);var inst_13210 = (state_13309[(7)]);var inst_13210__$1 = cljs.core.seq.call(null,inst_13190);var state_13309__$1 = (function (){var statearr_13366 = state_13309;(statearr_13366[(7)] = inst_13210__$1);
return statearr_13366;
})();if(inst_13210__$1)
{var statearr_13367_13433 = state_13309__$1;(statearr_13367_13433[(1)] = (16));
} else
{var statearr_13368_13434 = state_13309__$1;(statearr_13368_13434[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (9)))
{var inst_13238 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13369_13435 = state_13309__$1;(statearr_13369_13435[(2)] = inst_13238);
(statearr_13369_13435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (5)))
{var inst_13188 = cljs.core.deref.call(null,cs);var inst_13189 = cljs.core.seq.call(null,inst_13188);var inst_13190 = inst_13189;var inst_13191 = null;var inst_13192 = (0);var inst_13193 = (0);var state_13309__$1 = (function (){var statearr_13370 = state_13309;(statearr_13370[(13)] = inst_13191);
(statearr_13370[(14)] = inst_13190);
(statearr_13370[(15)] = inst_13192);
(statearr_13370[(17)] = inst_13193);
return statearr_13370;
})();var statearr_13371_13436 = state_13309__$1;(statearr_13371_13436[(2)] = null);
(statearr_13371_13436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (14)))
{var state_13309__$1 = state_13309;var statearr_13372_13437 = state_13309__$1;(statearr_13372_13437[(2)] = null);
(statearr_13372_13437[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (45)))
{var inst_13299 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13373_13438 = state_13309__$1;(statearr_13373_13438[(2)] = inst_13299);
(statearr_13373_13438[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (26)))
{var inst_13241 = (state_13309[(29)]);var inst_13295 = (state_13309[(2)]);var inst_13296 = cljs.core.seq.call(null,inst_13241);var state_13309__$1 = (function (){var statearr_13374 = state_13309;(statearr_13374[(31)] = inst_13295);
return statearr_13374;
})();if(inst_13296)
{var statearr_13375_13439 = state_13309__$1;(statearr_13375_13439[(1)] = (42));
} else
{var statearr_13376_13440 = state_13309__$1;(statearr_13376_13440[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (16)))
{var inst_13210 = (state_13309[(7)]);var inst_13212 = cljs.core.chunked_seq_QMARK_.call(null,inst_13210);var state_13309__$1 = state_13309;if(inst_13212)
{var statearr_13377_13441 = state_13309__$1;(statearr_13377_13441[(1)] = (19));
} else
{var statearr_13378_13442 = state_13309__$1;(statearr_13378_13442[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (38)))
{var inst_13288 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13379_13443 = state_13309__$1;(statearr_13379_13443[(2)] = inst_13288);
(statearr_13379_13443[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (30)))
{var state_13309__$1 = state_13309;var statearr_13380_13444 = state_13309__$1;(statearr_13380_13444[(2)] = null);
(statearr_13380_13444[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (10)))
{var inst_13191 = (state_13309[(13)]);var inst_13193 = (state_13309[(17)]);var inst_13199 = cljs.core._nth.call(null,inst_13191,inst_13193);var inst_13200 = cljs.core.nth.call(null,inst_13199,(0),null);var inst_13201 = cljs.core.nth.call(null,inst_13199,(1),null);var state_13309__$1 = (function (){var statearr_13381 = state_13309;(statearr_13381[(26)] = inst_13200);
return statearr_13381;
})();if(cljs.core.truth_(inst_13201))
{var statearr_13382_13445 = state_13309__$1;(statearr_13382_13445[(1)] = (13));
} else
{var statearr_13383_13446 = state_13309__$1;(statearr_13383_13446[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (18)))
{var inst_13234 = (state_13309[(2)]);var state_13309__$1 = state_13309;var statearr_13384_13447 = state_13309__$1;(statearr_13384_13447[(2)] = inst_13234);
(statearr_13384_13447[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (42)))
{var state_13309__$1 = state_13309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13309__$1,(45),dchan);
} else
{if((state_val_13310 === (37)))
{var inst_13181 = (state_13309[(11)]);var inst_13268 = (state_13309[(25)]);var inst_13277 = (state_13309[(23)]);var inst_13277__$1 = cljs.core.first.call(null,inst_13268);var inst_13278 = cljs.core.async.put_BANG_.call(null,inst_13277__$1,inst_13181,done);var state_13309__$1 = (function (){var statearr_13385 = state_13309;(statearr_13385[(23)] = inst_13277__$1);
return statearr_13385;
})();if(cljs.core.truth_(inst_13278))
{var statearr_13386_13448 = state_13309__$1;(statearr_13386_13448[(1)] = (39));
} else
{var statearr_13387_13449 = state_13309__$1;(statearr_13387_13449[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13310 === (8)))
{var inst_13192 = (state_13309[(15)]);var inst_13193 = (state_13309[(17)]);var inst_13195 = (inst_13193 < inst_13192);var inst_13196 = inst_13195;var state_13309__$1 = state_13309;if(cljs.core.truth_(inst_13196))
{var statearr_13388_13450 = state_13309__$1;(statearr_13388_13450[(1)] = (10));
} else
{var statearr_13389_13451 = state_13309__$1;(statearr_13389_13451[(1)] = (11));
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
});})(c__8138__auto___13397,cs,m,dchan,dctr,done))
;return ((function (switch__8123__auto__,c__8138__auto___13397,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_13393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13393[(0)] = state_machine__8124__auto__);
(statearr_13393[(1)] = (1));
return statearr_13393;
});
var state_machine__8124__auto____1 = (function (state_13309){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_13309);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e13394){if((e13394 instanceof Object))
{var ex__8127__auto__ = e13394;var statearr_13395_13452 = state_13309;(statearr_13395_13452[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13309);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13453 = state_13309;
state_13309 = G__13453;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_13309){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_13309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___13397,cs,m,dchan,dctr,done))
})();var state__8140__auto__ = (function (){var statearr_13396 = f__8139__auto__.call(null);(statearr_13396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___13397);
return statearr_13396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___13397,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13455 = {};return obj13455;
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
;var m = (function (){if(typeof cljs.core.async.t13575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13575 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13576){
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
this.meta13576 = meta13576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13575.cljs$lang$type = true;
cljs.core.async.t13575.cljs$lang$ctorStr = "cljs.core.async/t13575";
cljs.core.async.t13575.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13575");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13575.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13577){var self__ = this;
var _13577__$1 = this;return self__.meta13576;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13577,meta13576__$1){var self__ = this;
var _13577__$1 = this;return (new cljs.core.async.t13575(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13576__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13575 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13575(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13576){return (new cljs.core.async.t13575(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13576));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13575(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8138__auto___13694 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___13694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___13694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13647){var state_val_13648 = (state_13647[(1)]);if((state_val_13648 === (7)))
{var inst_13591 = (state_13647[(7)]);var inst_13596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13591);var state_13647__$1 = state_13647;var statearr_13649_13695 = state_13647__$1;(statearr_13649_13695[(2)] = inst_13596);
(statearr_13649_13695[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (20)))
{var inst_13606 = (state_13647[(8)]);var state_13647__$1 = state_13647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13647__$1,(23),out,inst_13606);
} else
{if((state_val_13648 === (1)))
{var inst_13581 = (state_13647[(9)]);var inst_13581__$1 = calc_state.call(null);var inst_13582 = cljs.core.seq_QMARK_.call(null,inst_13581__$1);var state_13647__$1 = (function (){var statearr_13650 = state_13647;(statearr_13650[(9)] = inst_13581__$1);
return statearr_13650;
})();if(inst_13582)
{var statearr_13651_13696 = state_13647__$1;(statearr_13651_13696[(1)] = (2));
} else
{var statearr_13652_13697 = state_13647__$1;(statearr_13652_13697[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (24)))
{var inst_13599 = (state_13647[(10)]);var inst_13591 = inst_13599;var state_13647__$1 = (function (){var statearr_13653 = state_13647;(statearr_13653[(7)] = inst_13591);
return statearr_13653;
})();var statearr_13654_13698 = state_13647__$1;(statearr_13654_13698[(2)] = null);
(statearr_13654_13698[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (4)))
{var inst_13581 = (state_13647[(9)]);var inst_13587 = (state_13647[(2)]);var inst_13588 = cljs.core.get.call(null,inst_13587,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13589 = cljs.core.get.call(null,inst_13587,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13590 = cljs.core.get.call(null,inst_13587,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13591 = inst_13581;var state_13647__$1 = (function (){var statearr_13655 = state_13647;(statearr_13655[(11)] = inst_13589);
(statearr_13655[(12)] = inst_13588);
(statearr_13655[(13)] = inst_13590);
(statearr_13655[(7)] = inst_13591);
return statearr_13655;
})();var statearr_13656_13699 = state_13647__$1;(statearr_13656_13699[(2)] = null);
(statearr_13656_13699[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (15)))
{var state_13647__$1 = state_13647;var statearr_13657_13700 = state_13647__$1;(statearr_13657_13700[(2)] = null);
(statearr_13657_13700[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (21)))
{var inst_13599 = (state_13647[(10)]);var inst_13591 = inst_13599;var state_13647__$1 = (function (){var statearr_13658 = state_13647;(statearr_13658[(7)] = inst_13591);
return statearr_13658;
})();var statearr_13659_13701 = state_13647__$1;(statearr_13659_13701[(2)] = null);
(statearr_13659_13701[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (13)))
{var inst_13643 = (state_13647[(2)]);var state_13647__$1 = state_13647;var statearr_13660_13702 = state_13647__$1;(statearr_13660_13702[(2)] = inst_13643);
(statearr_13660_13702[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (22)))
{var inst_13641 = (state_13647[(2)]);var state_13647__$1 = state_13647;var statearr_13661_13703 = state_13647__$1;(statearr_13661_13703[(2)] = inst_13641);
(statearr_13661_13703[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (6)))
{var inst_13645 = (state_13647[(2)]);var state_13647__$1 = state_13647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13647__$1,inst_13645);
} else
{if((state_val_13648 === (25)))
{var state_13647__$1 = state_13647;var statearr_13662_13704 = state_13647__$1;(statearr_13662_13704[(2)] = null);
(statearr_13662_13704[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (17)))
{var inst_13621 = (state_13647[(14)]);var state_13647__$1 = state_13647;var statearr_13663_13705 = state_13647__$1;(statearr_13663_13705[(2)] = inst_13621);
(statearr_13663_13705[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (3)))
{var inst_13581 = (state_13647[(9)]);var state_13647__$1 = state_13647;var statearr_13664_13706 = state_13647__$1;(statearr_13664_13706[(2)] = inst_13581);
(statearr_13664_13706[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (12)))
{var inst_13621 = (state_13647[(14)]);var inst_13602 = (state_13647[(15)]);var inst_13607 = (state_13647[(16)]);var inst_13621__$1 = inst_13602.call(null,inst_13607);var state_13647__$1 = (function (){var statearr_13665 = state_13647;(statearr_13665[(14)] = inst_13621__$1);
return statearr_13665;
})();if(cljs.core.truth_(inst_13621__$1))
{var statearr_13666_13707 = state_13647__$1;(statearr_13666_13707[(1)] = (17));
} else
{var statearr_13667_13708 = state_13647__$1;(statearr_13667_13708[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (2)))
{var inst_13581 = (state_13647[(9)]);var inst_13584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13581);var state_13647__$1 = state_13647;var statearr_13668_13709 = state_13647__$1;(statearr_13668_13709[(2)] = inst_13584);
(statearr_13668_13709[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (23)))
{var inst_13632 = (state_13647[(2)]);var state_13647__$1 = state_13647;if(cljs.core.truth_(inst_13632))
{var statearr_13669_13710 = state_13647__$1;(statearr_13669_13710[(1)] = (24));
} else
{var statearr_13670_13711 = state_13647__$1;(statearr_13670_13711[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (19)))
{var inst_13629 = (state_13647[(2)]);var state_13647__$1 = state_13647;if(cljs.core.truth_(inst_13629))
{var statearr_13671_13712 = state_13647__$1;(statearr_13671_13712[(1)] = (20));
} else
{var statearr_13672_13713 = state_13647__$1;(statearr_13672_13713[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (11)))
{var inst_13606 = (state_13647[(8)]);var inst_13612 = (inst_13606 == null);var state_13647__$1 = state_13647;if(cljs.core.truth_(inst_13612))
{var statearr_13673_13714 = state_13647__$1;(statearr_13673_13714[(1)] = (14));
} else
{var statearr_13674_13715 = state_13647__$1;(statearr_13674_13715[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (9)))
{var inst_13599 = (state_13647[(10)]);var inst_13599__$1 = (state_13647[(2)]);var inst_13600 = cljs.core.get.call(null,inst_13599__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13601 = cljs.core.get.call(null,inst_13599__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13602 = cljs.core.get.call(null,inst_13599__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13647__$1 = (function (){var statearr_13675 = state_13647;(statearr_13675[(15)] = inst_13602);
(statearr_13675[(10)] = inst_13599__$1);
(statearr_13675[(17)] = inst_13601);
return statearr_13675;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13647__$1,(10),inst_13600);
} else
{if((state_val_13648 === (5)))
{var inst_13591 = (state_13647[(7)]);var inst_13594 = cljs.core.seq_QMARK_.call(null,inst_13591);var state_13647__$1 = state_13647;if(inst_13594)
{var statearr_13676_13716 = state_13647__$1;(statearr_13676_13716[(1)] = (7));
} else
{var statearr_13677_13717 = state_13647__$1;(statearr_13677_13717[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (14)))
{var inst_13607 = (state_13647[(16)]);var inst_13614 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13607);var state_13647__$1 = state_13647;var statearr_13678_13718 = state_13647__$1;(statearr_13678_13718[(2)] = inst_13614);
(statearr_13678_13718[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (26)))
{var inst_13637 = (state_13647[(2)]);var state_13647__$1 = state_13647;var statearr_13679_13719 = state_13647__$1;(statearr_13679_13719[(2)] = inst_13637);
(statearr_13679_13719[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (16)))
{var inst_13617 = (state_13647[(2)]);var inst_13618 = calc_state.call(null);var inst_13591 = inst_13618;var state_13647__$1 = (function (){var statearr_13680 = state_13647;(statearr_13680[(18)] = inst_13617);
(statearr_13680[(7)] = inst_13591);
return statearr_13680;
})();var statearr_13681_13720 = state_13647__$1;(statearr_13681_13720[(2)] = null);
(statearr_13681_13720[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (10)))
{var inst_13606 = (state_13647[(8)]);var inst_13607 = (state_13647[(16)]);var inst_13605 = (state_13647[(2)]);var inst_13606__$1 = cljs.core.nth.call(null,inst_13605,(0),null);var inst_13607__$1 = cljs.core.nth.call(null,inst_13605,(1),null);var inst_13608 = (inst_13606__$1 == null);var inst_13609 = cljs.core._EQ_.call(null,inst_13607__$1,change);var inst_13610 = (inst_13608) || (inst_13609);var state_13647__$1 = (function (){var statearr_13682 = state_13647;(statearr_13682[(8)] = inst_13606__$1);
(statearr_13682[(16)] = inst_13607__$1);
return statearr_13682;
})();if(cljs.core.truth_(inst_13610))
{var statearr_13683_13721 = state_13647__$1;(statearr_13683_13721[(1)] = (11));
} else
{var statearr_13684_13722 = state_13647__$1;(statearr_13684_13722[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (18)))
{var inst_13602 = (state_13647[(15)]);var inst_13607 = (state_13647[(16)]);var inst_13601 = (state_13647[(17)]);var inst_13624 = cljs.core.empty_QMARK_.call(null,inst_13602);var inst_13625 = inst_13601.call(null,inst_13607);var inst_13626 = cljs.core.not.call(null,inst_13625);var inst_13627 = (inst_13624) && (inst_13626);var state_13647__$1 = state_13647;var statearr_13685_13723 = state_13647__$1;(statearr_13685_13723[(2)] = inst_13627);
(statearr_13685_13723[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13648 === (8)))
{var inst_13591 = (state_13647[(7)]);var state_13647__$1 = state_13647;var statearr_13686_13724 = state_13647__$1;(statearr_13686_13724[(2)] = inst_13591);
(statearr_13686_13724[(1)] = (9));
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
});})(c__8138__auto___13694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8123__auto__,c__8138__auto___13694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_13690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13690[(0)] = state_machine__8124__auto__);
(statearr_13690[(1)] = (1));
return statearr_13690;
});
var state_machine__8124__auto____1 = (function (state_13647){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_13647);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e13691){if((e13691 instanceof Object))
{var ex__8127__auto__ = e13691;var statearr_13692_13725 = state_13647;(statearr_13692_13725[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13647);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13691;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13726 = state_13647;
state_13647 = G__13726;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_13647){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_13647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___13694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8140__auto__ = (function (){var statearr_13693 = f__8139__auto__.call(null);(statearr_13693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___13694);
return statearr_13693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___13694,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13728 = {};return obj13728;
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
return (function (p1__13729_SHARP_){if(cljs.core.truth_(p1__13729_SHARP_.call(null,topic)))
{return p1__13729_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13729_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13852 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13852 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13853){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13853 = meta13853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13852.cljs$lang$type = true;
cljs.core.async.t13852.cljs$lang$ctorStr = "cljs.core.async/t13852";
cljs.core.async.t13852.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13852");
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13852.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13854){var self__ = this;
var _13854__$1 = this;return self__.meta13853;
});})(mults,ensure_mult))
;
cljs.core.async.t13852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13854,meta13853__$1){var self__ = this;
var _13854__$1 = this;return (new cljs.core.async.t13852(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13853__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13852 = ((function (mults,ensure_mult){
return (function __GT_t13852(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13853){return (new cljs.core.async.t13852(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13853));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13852(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8138__auto___13974 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___13974,mults,ensure_mult,p){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___13974,mults,ensure_mult,p){
return (function (state_13926){var state_val_13927 = (state_13926[(1)]);if((state_val_13927 === (7)))
{var inst_13922 = (state_13926[(2)]);var state_13926__$1 = state_13926;var statearr_13928_13975 = state_13926__$1;(statearr_13928_13975[(2)] = inst_13922);
(statearr_13928_13975[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (20)))
{var state_13926__$1 = state_13926;var statearr_13929_13976 = state_13926__$1;(statearr_13929_13976[(2)] = null);
(statearr_13929_13976[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (1)))
{var state_13926__$1 = state_13926;var statearr_13930_13977 = state_13926__$1;(statearr_13930_13977[(2)] = null);
(statearr_13930_13977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (24)))
{var inst_13905 = (state_13926[(7)]);var inst_13914 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13905);var state_13926__$1 = state_13926;var statearr_13931_13978 = state_13926__$1;(statearr_13931_13978[(2)] = inst_13914);
(statearr_13931_13978[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (4)))
{var inst_13857 = (state_13926[(8)]);var inst_13857__$1 = (state_13926[(2)]);var inst_13858 = (inst_13857__$1 == null);var state_13926__$1 = (function (){var statearr_13932 = state_13926;(statearr_13932[(8)] = inst_13857__$1);
return statearr_13932;
})();if(cljs.core.truth_(inst_13858))
{var statearr_13933_13979 = state_13926__$1;(statearr_13933_13979[(1)] = (5));
} else
{var statearr_13934_13980 = state_13926__$1;(statearr_13934_13980[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (15)))
{var inst_13899 = (state_13926[(2)]);var state_13926__$1 = state_13926;var statearr_13935_13981 = state_13926__$1;(statearr_13935_13981[(2)] = inst_13899);
(statearr_13935_13981[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (21)))
{var inst_13919 = (state_13926[(2)]);var state_13926__$1 = (function (){var statearr_13936 = state_13926;(statearr_13936[(9)] = inst_13919);
return statearr_13936;
})();var statearr_13937_13982 = state_13926__$1;(statearr_13937_13982[(2)] = null);
(statearr_13937_13982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (13)))
{var inst_13881 = (state_13926[(10)]);var inst_13883 = cljs.core.chunked_seq_QMARK_.call(null,inst_13881);var state_13926__$1 = state_13926;if(inst_13883)
{var statearr_13938_13983 = state_13926__$1;(statearr_13938_13983[(1)] = (16));
} else
{var statearr_13939_13984 = state_13926__$1;(statearr_13939_13984[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (22)))
{var inst_13911 = (state_13926[(2)]);var state_13926__$1 = state_13926;if(cljs.core.truth_(inst_13911))
{var statearr_13940_13985 = state_13926__$1;(statearr_13940_13985[(1)] = (23));
} else
{var statearr_13941_13986 = state_13926__$1;(statearr_13941_13986[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (6)))
{var inst_13857 = (state_13926[(8)]);var inst_13905 = (state_13926[(7)]);var inst_13907 = (state_13926[(11)]);var inst_13905__$1 = topic_fn.call(null,inst_13857);var inst_13906 = cljs.core.deref.call(null,mults);var inst_13907__$1 = cljs.core.get.call(null,inst_13906,inst_13905__$1);var state_13926__$1 = (function (){var statearr_13942 = state_13926;(statearr_13942[(7)] = inst_13905__$1);
(statearr_13942[(11)] = inst_13907__$1);
return statearr_13942;
})();if(cljs.core.truth_(inst_13907__$1))
{var statearr_13943_13987 = state_13926__$1;(statearr_13943_13987[(1)] = (19));
} else
{var statearr_13944_13988 = state_13926__$1;(statearr_13944_13988[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (25)))
{var inst_13916 = (state_13926[(2)]);var state_13926__$1 = state_13926;var statearr_13945_13989 = state_13926__$1;(statearr_13945_13989[(2)] = inst_13916);
(statearr_13945_13989[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (17)))
{var inst_13881 = (state_13926[(10)]);var inst_13890 = cljs.core.first.call(null,inst_13881);var inst_13891 = cljs.core.async.muxch_STAR_.call(null,inst_13890);var inst_13892 = cljs.core.async.close_BANG_.call(null,inst_13891);var inst_13893 = cljs.core.next.call(null,inst_13881);var inst_13867 = inst_13893;var inst_13868 = null;var inst_13869 = (0);var inst_13870 = (0);var state_13926__$1 = (function (){var statearr_13946 = state_13926;(statearr_13946[(12)] = inst_13867);
(statearr_13946[(13)] = inst_13892);
(statearr_13946[(14)] = inst_13868);
(statearr_13946[(15)] = inst_13869);
(statearr_13946[(16)] = inst_13870);
return statearr_13946;
})();var statearr_13947_13990 = state_13926__$1;(statearr_13947_13990[(2)] = null);
(statearr_13947_13990[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (3)))
{var inst_13924 = (state_13926[(2)]);var state_13926__$1 = state_13926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13926__$1,inst_13924);
} else
{if((state_val_13927 === (12)))
{var inst_13901 = (state_13926[(2)]);var state_13926__$1 = state_13926;var statearr_13948_13991 = state_13926__$1;(statearr_13948_13991[(2)] = inst_13901);
(statearr_13948_13991[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (2)))
{var state_13926__$1 = state_13926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13926__$1,(4),ch);
} else
{if((state_val_13927 === (23)))
{var state_13926__$1 = state_13926;var statearr_13949_13992 = state_13926__$1;(statearr_13949_13992[(2)] = null);
(statearr_13949_13992[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (19)))
{var inst_13857 = (state_13926[(8)]);var inst_13907 = (state_13926[(11)]);var inst_13909 = cljs.core.async.muxch_STAR_.call(null,inst_13907);var state_13926__$1 = state_13926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13926__$1,(22),inst_13909,inst_13857);
} else
{if((state_val_13927 === (11)))
{var inst_13867 = (state_13926[(12)]);var inst_13881 = (state_13926[(10)]);var inst_13881__$1 = cljs.core.seq.call(null,inst_13867);var state_13926__$1 = (function (){var statearr_13950 = state_13926;(statearr_13950[(10)] = inst_13881__$1);
return statearr_13950;
})();if(inst_13881__$1)
{var statearr_13951_13993 = state_13926__$1;(statearr_13951_13993[(1)] = (13));
} else
{var statearr_13952_13994 = state_13926__$1;(statearr_13952_13994[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (9)))
{var inst_13903 = (state_13926[(2)]);var state_13926__$1 = state_13926;var statearr_13953_13995 = state_13926__$1;(statearr_13953_13995[(2)] = inst_13903);
(statearr_13953_13995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (5)))
{var inst_13864 = cljs.core.deref.call(null,mults);var inst_13865 = cljs.core.vals.call(null,inst_13864);var inst_13866 = cljs.core.seq.call(null,inst_13865);var inst_13867 = inst_13866;var inst_13868 = null;var inst_13869 = (0);var inst_13870 = (0);var state_13926__$1 = (function (){var statearr_13954 = state_13926;(statearr_13954[(12)] = inst_13867);
(statearr_13954[(14)] = inst_13868);
(statearr_13954[(15)] = inst_13869);
(statearr_13954[(16)] = inst_13870);
return statearr_13954;
})();var statearr_13955_13996 = state_13926__$1;(statearr_13955_13996[(2)] = null);
(statearr_13955_13996[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (14)))
{var state_13926__$1 = state_13926;var statearr_13959_13997 = state_13926__$1;(statearr_13959_13997[(2)] = null);
(statearr_13959_13997[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (16)))
{var inst_13881 = (state_13926[(10)]);var inst_13885 = cljs.core.chunk_first.call(null,inst_13881);var inst_13886 = cljs.core.chunk_rest.call(null,inst_13881);var inst_13887 = cljs.core.count.call(null,inst_13885);var inst_13867 = inst_13886;var inst_13868 = inst_13885;var inst_13869 = inst_13887;var inst_13870 = (0);var state_13926__$1 = (function (){var statearr_13960 = state_13926;(statearr_13960[(12)] = inst_13867);
(statearr_13960[(14)] = inst_13868);
(statearr_13960[(15)] = inst_13869);
(statearr_13960[(16)] = inst_13870);
return statearr_13960;
})();var statearr_13961_13998 = state_13926__$1;(statearr_13961_13998[(2)] = null);
(statearr_13961_13998[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (10)))
{var inst_13867 = (state_13926[(12)]);var inst_13868 = (state_13926[(14)]);var inst_13869 = (state_13926[(15)]);var inst_13870 = (state_13926[(16)]);var inst_13875 = cljs.core._nth.call(null,inst_13868,inst_13870);var inst_13876 = cljs.core.async.muxch_STAR_.call(null,inst_13875);var inst_13877 = cljs.core.async.close_BANG_.call(null,inst_13876);var inst_13878 = (inst_13870 + (1));var tmp13956 = inst_13867;var tmp13957 = inst_13868;var tmp13958 = inst_13869;var inst_13867__$1 = tmp13956;var inst_13868__$1 = tmp13957;var inst_13869__$1 = tmp13958;var inst_13870__$1 = inst_13878;var state_13926__$1 = (function (){var statearr_13962 = state_13926;(statearr_13962[(12)] = inst_13867__$1);
(statearr_13962[(14)] = inst_13868__$1);
(statearr_13962[(15)] = inst_13869__$1);
(statearr_13962[(17)] = inst_13877);
(statearr_13962[(16)] = inst_13870__$1);
return statearr_13962;
})();var statearr_13963_13999 = state_13926__$1;(statearr_13963_13999[(2)] = null);
(statearr_13963_13999[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (18)))
{var inst_13896 = (state_13926[(2)]);var state_13926__$1 = state_13926;var statearr_13964_14000 = state_13926__$1;(statearr_13964_14000[(2)] = inst_13896);
(statearr_13964_14000[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13927 === (8)))
{var inst_13869 = (state_13926[(15)]);var inst_13870 = (state_13926[(16)]);var inst_13872 = (inst_13870 < inst_13869);var inst_13873 = inst_13872;var state_13926__$1 = state_13926;if(cljs.core.truth_(inst_13873))
{var statearr_13965_14001 = state_13926__$1;(statearr_13965_14001[(1)] = (10));
} else
{var statearr_13966_14002 = state_13926__$1;(statearr_13966_14002[(1)] = (11));
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
});})(c__8138__auto___13974,mults,ensure_mult,p))
;return ((function (switch__8123__auto__,c__8138__auto___13974,mults,ensure_mult,p){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_13970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13970[(0)] = state_machine__8124__auto__);
(statearr_13970[(1)] = (1));
return statearr_13970;
});
var state_machine__8124__auto____1 = (function (state_13926){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_13926);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e13971){if((e13971 instanceof Object))
{var ex__8127__auto__ = e13971;var statearr_13972_14003 = state_13926;(statearr_13972_14003[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13926);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13971;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14004 = state_13926;
state_13926 = G__14004;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_13926){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_13926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___13974,mults,ensure_mult,p))
})();var state__8140__auto__ = (function (){var statearr_13973 = f__8139__auto__.call(null);(statearr_13973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___13974);
return statearr_13973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___13974,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__8138__auto___14141 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14111){var state_val_14112 = (state_14111[(1)]);if((state_val_14112 === (7)))
{var state_14111__$1 = state_14111;var statearr_14113_14142 = state_14111__$1;(statearr_14113_14142[(2)] = null);
(statearr_14113_14142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (1)))
{var state_14111__$1 = state_14111;var statearr_14114_14143 = state_14111__$1;(statearr_14114_14143[(2)] = null);
(statearr_14114_14143[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (4)))
{var inst_14075 = (state_14111[(7)]);var inst_14077 = (inst_14075 < cnt);var state_14111__$1 = state_14111;if(cljs.core.truth_(inst_14077))
{var statearr_14115_14144 = state_14111__$1;(statearr_14115_14144[(1)] = (6));
} else
{var statearr_14116_14145 = state_14111__$1;(statearr_14116_14145[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (15)))
{var inst_14107 = (state_14111[(2)]);var state_14111__$1 = state_14111;var statearr_14117_14146 = state_14111__$1;(statearr_14117_14146[(2)] = inst_14107);
(statearr_14117_14146[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (13)))
{var inst_14100 = cljs.core.async.close_BANG_.call(null,out);var state_14111__$1 = state_14111;var statearr_14118_14147 = state_14111__$1;(statearr_14118_14147[(2)] = inst_14100);
(statearr_14118_14147[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (6)))
{var state_14111__$1 = state_14111;var statearr_14119_14148 = state_14111__$1;(statearr_14119_14148[(2)] = null);
(statearr_14119_14148[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (3)))
{var inst_14109 = (state_14111[(2)]);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14111__$1,inst_14109);
} else
{if((state_val_14112 === (12)))
{var inst_14097 = (state_14111[(8)]);var inst_14097__$1 = (state_14111[(2)]);var inst_14098 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14097__$1);var state_14111__$1 = (function (){var statearr_14120 = state_14111;(statearr_14120[(8)] = inst_14097__$1);
return statearr_14120;
})();if(cljs.core.truth_(inst_14098))
{var statearr_14121_14149 = state_14111__$1;(statearr_14121_14149[(1)] = (13));
} else
{var statearr_14122_14150 = state_14111__$1;(statearr_14122_14150[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (2)))
{var inst_14074 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14075 = (0);var state_14111__$1 = (function (){var statearr_14123 = state_14111;(statearr_14123[(7)] = inst_14075);
(statearr_14123[(9)] = inst_14074);
return statearr_14123;
})();var statearr_14124_14151 = state_14111__$1;(statearr_14124_14151[(2)] = null);
(statearr_14124_14151[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (11)))
{var inst_14075 = (state_14111[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14111,(10),Object,null,(9));var inst_14084 = chs__$1.call(null,inst_14075);var inst_14085 = done.call(null,inst_14075);var inst_14086 = cljs.core.async.take_BANG_.call(null,inst_14084,inst_14085);var state_14111__$1 = state_14111;var statearr_14125_14152 = state_14111__$1;(statearr_14125_14152[(2)] = inst_14086);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (9)))
{var inst_14075 = (state_14111[(7)]);var inst_14088 = (state_14111[(2)]);var inst_14089 = (inst_14075 + (1));var inst_14075__$1 = inst_14089;var state_14111__$1 = (function (){var statearr_14126 = state_14111;(statearr_14126[(10)] = inst_14088);
(statearr_14126[(7)] = inst_14075__$1);
return statearr_14126;
})();var statearr_14127_14153 = state_14111__$1;(statearr_14127_14153[(2)] = null);
(statearr_14127_14153[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (5)))
{var inst_14095 = (state_14111[(2)]);var state_14111__$1 = (function (){var statearr_14128 = state_14111;(statearr_14128[(11)] = inst_14095);
return statearr_14128;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,(12),dchan);
} else
{if((state_val_14112 === (14)))
{var inst_14097 = (state_14111[(8)]);var inst_14102 = cljs.core.apply.call(null,f,inst_14097);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14111__$1,(16),out,inst_14102);
} else
{if((state_val_14112 === (16)))
{var inst_14104 = (state_14111[(2)]);var state_14111__$1 = (function (){var statearr_14129 = state_14111;(statearr_14129[(12)] = inst_14104);
return statearr_14129;
})();var statearr_14130_14154 = state_14111__$1;(statearr_14130_14154[(2)] = null);
(statearr_14130_14154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (10)))
{var inst_14079 = (state_14111[(2)]);var inst_14080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14111__$1 = (function (){var statearr_14131 = state_14111;(statearr_14131[(13)] = inst_14079);
return statearr_14131;
})();var statearr_14132_14155 = state_14111__$1;(statearr_14132_14155[(2)] = inst_14080);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14112 === (8)))
{var inst_14093 = (state_14111[(2)]);var state_14111__$1 = state_14111;var statearr_14133_14156 = state_14111__$1;(statearr_14133_14156[(2)] = inst_14093);
(statearr_14133_14156[(1)] = (5));
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
});})(c__8138__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8123__auto__,c__8138__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14137[(0)] = state_machine__8124__auto__);
(statearr_14137[(1)] = (1));
return statearr_14137;
});
var state_machine__8124__auto____1 = (function (state_14111){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14111);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14138){if((e14138 instanceof Object))
{var ex__8127__auto__ = e14138;var statearr_14139_14157 = state_14111;(statearr_14139_14157[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14138;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14158 = state_14111;
state_14111 = G__14158;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8140__auto__ = (function (){var statearr_14140 = f__8139__auto__.call(null);(statearr_14140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___14141);
return statearr_14140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8138__auto___14266 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___14266,out){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___14266,out){
return (function (state_14242){var state_val_14243 = (state_14242[(1)]);if((state_val_14243 === (7)))
{var inst_14222 = (state_14242[(7)]);var inst_14221 = (state_14242[(8)]);var inst_14221__$1 = (state_14242[(2)]);var inst_14222__$1 = cljs.core.nth.call(null,inst_14221__$1,(0),null);var inst_14223 = cljs.core.nth.call(null,inst_14221__$1,(1),null);var inst_14224 = (inst_14222__$1 == null);var state_14242__$1 = (function (){var statearr_14244 = state_14242;(statearr_14244[(9)] = inst_14223);
(statearr_14244[(7)] = inst_14222__$1);
(statearr_14244[(8)] = inst_14221__$1);
return statearr_14244;
})();if(cljs.core.truth_(inst_14224))
{var statearr_14245_14267 = state_14242__$1;(statearr_14245_14267[(1)] = (8));
} else
{var statearr_14246_14268 = state_14242__$1;(statearr_14246_14268[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (1)))
{var inst_14213 = cljs.core.vec.call(null,chs);var inst_14214 = inst_14213;var state_14242__$1 = (function (){var statearr_14247 = state_14242;(statearr_14247[(10)] = inst_14214);
return statearr_14247;
})();var statearr_14248_14269 = state_14242__$1;(statearr_14248_14269[(2)] = null);
(statearr_14248_14269[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (4)))
{var inst_14214 = (state_14242[(10)]);var state_14242__$1 = state_14242;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14242__$1,(7),inst_14214);
} else
{if((state_val_14243 === (6)))
{var inst_14238 = (state_14242[(2)]);var state_14242__$1 = state_14242;var statearr_14249_14270 = state_14242__$1;(statearr_14249_14270[(2)] = inst_14238);
(statearr_14249_14270[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (3)))
{var inst_14240 = (state_14242[(2)]);var state_14242__$1 = state_14242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14242__$1,inst_14240);
} else
{if((state_val_14243 === (2)))
{var inst_14214 = (state_14242[(10)]);var inst_14216 = cljs.core.count.call(null,inst_14214);var inst_14217 = (inst_14216 > (0));var state_14242__$1 = state_14242;if(cljs.core.truth_(inst_14217))
{var statearr_14251_14271 = state_14242__$1;(statearr_14251_14271[(1)] = (4));
} else
{var statearr_14252_14272 = state_14242__$1;(statearr_14252_14272[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (11)))
{var inst_14214 = (state_14242[(10)]);var inst_14231 = (state_14242[(2)]);var tmp14250 = inst_14214;var inst_14214__$1 = tmp14250;var state_14242__$1 = (function (){var statearr_14253 = state_14242;(statearr_14253[(11)] = inst_14231);
(statearr_14253[(10)] = inst_14214__$1);
return statearr_14253;
})();var statearr_14254_14273 = state_14242__$1;(statearr_14254_14273[(2)] = null);
(statearr_14254_14273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (9)))
{var inst_14222 = (state_14242[(7)]);var state_14242__$1 = state_14242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14242__$1,(11),out,inst_14222);
} else
{if((state_val_14243 === (5)))
{var inst_14236 = cljs.core.async.close_BANG_.call(null,out);var state_14242__$1 = state_14242;var statearr_14255_14274 = state_14242__$1;(statearr_14255_14274[(2)] = inst_14236);
(statearr_14255_14274[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (10)))
{var inst_14234 = (state_14242[(2)]);var state_14242__$1 = state_14242;var statearr_14256_14275 = state_14242__$1;(statearr_14256_14275[(2)] = inst_14234);
(statearr_14256_14275[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14243 === (8)))
{var inst_14223 = (state_14242[(9)]);var inst_14222 = (state_14242[(7)]);var inst_14214 = (state_14242[(10)]);var inst_14221 = (state_14242[(8)]);var inst_14226 = (function (){var c = inst_14223;var v = inst_14222;var vec__14219 = inst_14221;var cs = inst_14214;return ((function (c,v,vec__14219,cs,inst_14223,inst_14222,inst_14214,inst_14221,state_val_14243,c__8138__auto___14266,out){
return (function (p1__14159_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14159_SHARP_);
});
;})(c,v,vec__14219,cs,inst_14223,inst_14222,inst_14214,inst_14221,state_val_14243,c__8138__auto___14266,out))
})();var inst_14227 = cljs.core.filterv.call(null,inst_14226,inst_14214);var inst_14214__$1 = inst_14227;var state_14242__$1 = (function (){var statearr_14257 = state_14242;(statearr_14257[(10)] = inst_14214__$1);
return statearr_14257;
})();var statearr_14258_14276 = state_14242__$1;(statearr_14258_14276[(2)] = null);
(statearr_14258_14276[(1)] = (2));
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
});})(c__8138__auto___14266,out))
;return ((function (switch__8123__auto__,c__8138__auto___14266,out){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14262 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14262[(0)] = state_machine__8124__auto__);
(statearr_14262[(1)] = (1));
return statearr_14262;
});
var state_machine__8124__auto____1 = (function (state_14242){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14242);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14263){if((e14263 instanceof Object))
{var ex__8127__auto__ = e14263;var statearr_14264_14277 = state_14242;(statearr_14264_14277[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14242);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14263;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14278 = state_14242;
state_14242 = G__14278;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14242){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___14266,out))
})();var state__8140__auto__ = (function (){var statearr_14265 = f__8139__auto__.call(null);(statearr_14265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___14266);
return statearr_14265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___14266,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8138__auto___14371 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___14371,out){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___14371,out){
return (function (state_14348){var state_val_14349 = (state_14348[(1)]);if((state_val_14349 === (7)))
{var inst_14330 = (state_14348[(7)]);var inst_14330__$1 = (state_14348[(2)]);var inst_14331 = (inst_14330__$1 == null);var inst_14332 = cljs.core.not.call(null,inst_14331);var state_14348__$1 = (function (){var statearr_14350 = state_14348;(statearr_14350[(7)] = inst_14330__$1);
return statearr_14350;
})();if(inst_14332)
{var statearr_14351_14372 = state_14348__$1;(statearr_14351_14372[(1)] = (8));
} else
{var statearr_14352_14373 = state_14348__$1;(statearr_14352_14373[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (1)))
{var inst_14325 = (0);var state_14348__$1 = (function (){var statearr_14353 = state_14348;(statearr_14353[(8)] = inst_14325);
return statearr_14353;
})();var statearr_14354_14374 = state_14348__$1;(statearr_14354_14374[(2)] = null);
(statearr_14354_14374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (4)))
{var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,(7),ch);
} else
{if((state_val_14349 === (6)))
{var inst_14343 = (state_14348[(2)]);var state_14348__$1 = state_14348;var statearr_14355_14375 = state_14348__$1;(statearr_14355_14375[(2)] = inst_14343);
(statearr_14355_14375[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (3)))
{var inst_14345 = (state_14348[(2)]);var inst_14346 = cljs.core.async.close_BANG_.call(null,out);var state_14348__$1 = (function (){var statearr_14356 = state_14348;(statearr_14356[(9)] = inst_14345);
return statearr_14356;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14348__$1,inst_14346);
} else
{if((state_val_14349 === (2)))
{var inst_14325 = (state_14348[(8)]);var inst_14327 = (inst_14325 < n);var state_14348__$1 = state_14348;if(cljs.core.truth_(inst_14327))
{var statearr_14357_14376 = state_14348__$1;(statearr_14357_14376[(1)] = (4));
} else
{var statearr_14358_14377 = state_14348__$1;(statearr_14358_14377[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (11)))
{var inst_14325 = (state_14348[(8)]);var inst_14335 = (state_14348[(2)]);var inst_14336 = (inst_14325 + (1));var inst_14325__$1 = inst_14336;var state_14348__$1 = (function (){var statearr_14359 = state_14348;(statearr_14359[(8)] = inst_14325__$1);
(statearr_14359[(10)] = inst_14335);
return statearr_14359;
})();var statearr_14360_14378 = state_14348__$1;(statearr_14360_14378[(2)] = null);
(statearr_14360_14378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (9)))
{var state_14348__$1 = state_14348;var statearr_14361_14379 = state_14348__$1;(statearr_14361_14379[(2)] = null);
(statearr_14361_14379[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (5)))
{var state_14348__$1 = state_14348;var statearr_14362_14380 = state_14348__$1;(statearr_14362_14380[(2)] = null);
(statearr_14362_14380[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (10)))
{var inst_14340 = (state_14348[(2)]);var state_14348__$1 = state_14348;var statearr_14363_14381 = state_14348__$1;(statearr_14363_14381[(2)] = inst_14340);
(statearr_14363_14381[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14349 === (8)))
{var inst_14330 = (state_14348[(7)]);var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14348__$1,(11),out,inst_14330);
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
});})(c__8138__auto___14371,out))
;return ((function (switch__8123__auto__,c__8138__auto___14371,out){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14367 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14367[(0)] = state_machine__8124__auto__);
(statearr_14367[(1)] = (1));
return statearr_14367;
});
var state_machine__8124__auto____1 = (function (state_14348){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14348);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14368){if((e14368 instanceof Object))
{var ex__8127__auto__ = e14368;var statearr_14369_14382 = state_14348;(statearr_14369_14382[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14368;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14383 = state_14348;
state_14348 = G__14383;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14348){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___14371,out))
})();var state__8140__auto__ = (function (){var statearr_14370 = f__8139__auto__.call(null);(statearr_14370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___14371);
return statearr_14370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___14371,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14391 = (function (ch,f,map_LT_,meta14392){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14392 = meta14392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14391.cljs$lang$type = true;
cljs.core.async.t14391.cljs$lang$ctorStr = "cljs.core.async/t14391";
cljs.core.async.t14391.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14391");
});
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14394 = (function (fn1,_,meta14392,ch,f,map_LT_,meta14395){
this.fn1 = fn1;
this._ = _;
this.meta14392 = meta14392;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14395 = meta14395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14394.cljs$lang$type = true;
cljs.core.async.t14394.cljs$lang$ctorStr = "cljs.core.async/t14394";
cljs.core.async.t14394.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14394");
});})(___$1))
;
cljs.core.async.t14394.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14394.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14384_SHARP_){return f1.call(null,(((p1__14384_SHARP_ == null))?null:self__.f.call(null,p1__14384_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14396){var self__ = this;
var _14396__$1 = this;return self__.meta14395;
});})(___$1))
;
cljs.core.async.t14394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14396,meta14395__$1){var self__ = this;
var _14396__$1 = this;return (new cljs.core.async.t14394(self__.fn1,self__._,self__.meta14392,self__.ch,self__.f,self__.map_LT_,meta14395__$1));
});})(___$1))
;
cljs.core.async.__GT_t14394 = ((function (___$1){
return (function __GT_t14394(fn1__$1,___$2,meta14392__$1,ch__$2,f__$2,map_LT___$2,meta14395){return (new cljs.core.async.t14394(fn1__$1,___$2,meta14392__$1,ch__$2,f__$2,map_LT___$2,meta14395));
});})(___$1))
;
}
return (new cljs.core.async.t14394(fn1,___$1,self__.meta14392,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14393){var self__ = this;
var _14393__$1 = this;return self__.meta14392;
});
cljs.core.async.t14391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14393,meta14392__$1){var self__ = this;
var _14393__$1 = this;return (new cljs.core.async.t14391(self__.ch,self__.f,self__.map_LT_,meta14392__$1));
});
cljs.core.async.__GT_t14391 = (function __GT_t14391(ch__$1,f__$1,map_LT___$1,meta14392){return (new cljs.core.async.t14391(ch__$1,f__$1,map_LT___$1,meta14392));
});
}
return (new cljs.core.async.t14391(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14400 = (function (ch,f,map_GT_,meta14401){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14401 = meta14401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14400.cljs$lang$type = true;
cljs.core.async.t14400.cljs$lang$ctorStr = "cljs.core.async/t14400";
cljs.core.async.t14400.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14400");
});
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14402){var self__ = this;
var _14402__$1 = this;return self__.meta14401;
});
cljs.core.async.t14400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14402,meta14401__$1){var self__ = this;
var _14402__$1 = this;return (new cljs.core.async.t14400(self__.ch,self__.f,self__.map_GT_,meta14401__$1));
});
cljs.core.async.__GT_t14400 = (function __GT_t14400(ch__$1,f__$1,map_GT___$1,meta14401){return (new cljs.core.async.t14400(ch__$1,f__$1,map_GT___$1,meta14401));
});
}
return (new cljs.core.async.t14400(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14406 = (function (ch,p,filter_GT_,meta14407){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14407 = meta14407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14406.cljs$lang$type = true;
cljs.core.async.t14406.cljs$lang$ctorStr = "cljs.core.async/t14406";
cljs.core.async.t14406.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14406");
});
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14406.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14408){var self__ = this;
var _14408__$1 = this;return self__.meta14407;
});
cljs.core.async.t14406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14408,meta14407__$1){var self__ = this;
var _14408__$1 = this;return (new cljs.core.async.t14406(self__.ch,self__.p,self__.filter_GT_,meta14407__$1));
});
cljs.core.async.__GT_t14406 = (function __GT_t14406(ch__$1,p__$1,filter_GT___$1,meta14407){return (new cljs.core.async.t14406(ch__$1,p__$1,filter_GT___$1,meta14407));
});
}
return (new cljs.core.async.t14406(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8138__auto___14491 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___14491,out){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___14491,out){
return (function (state_14470){var state_val_14471 = (state_14470[(1)]);if((state_val_14471 === (7)))
{var inst_14466 = (state_14470[(2)]);var state_14470__$1 = state_14470;var statearr_14472_14492 = state_14470__$1;(statearr_14472_14492[(2)] = inst_14466);
(statearr_14472_14492[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (1)))
{var state_14470__$1 = state_14470;var statearr_14473_14493 = state_14470__$1;(statearr_14473_14493[(2)] = null);
(statearr_14473_14493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (4)))
{var inst_14452 = (state_14470[(7)]);var inst_14452__$1 = (state_14470[(2)]);var inst_14453 = (inst_14452__$1 == null);var state_14470__$1 = (function (){var statearr_14474 = state_14470;(statearr_14474[(7)] = inst_14452__$1);
return statearr_14474;
})();if(cljs.core.truth_(inst_14453))
{var statearr_14475_14494 = state_14470__$1;(statearr_14475_14494[(1)] = (5));
} else
{var statearr_14476_14495 = state_14470__$1;(statearr_14476_14495[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (6)))
{var inst_14452 = (state_14470[(7)]);var inst_14457 = p.call(null,inst_14452);var state_14470__$1 = state_14470;if(cljs.core.truth_(inst_14457))
{var statearr_14477_14496 = state_14470__$1;(statearr_14477_14496[(1)] = (8));
} else
{var statearr_14478_14497 = state_14470__$1;(statearr_14478_14497[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (3)))
{var inst_14468 = (state_14470[(2)]);var state_14470__$1 = state_14470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14470__$1,inst_14468);
} else
{if((state_val_14471 === (2)))
{var state_14470__$1 = state_14470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14470__$1,(4),ch);
} else
{if((state_val_14471 === (11)))
{var inst_14460 = (state_14470[(2)]);var state_14470__$1 = state_14470;var statearr_14479_14498 = state_14470__$1;(statearr_14479_14498[(2)] = inst_14460);
(statearr_14479_14498[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (9)))
{var state_14470__$1 = state_14470;var statearr_14480_14499 = state_14470__$1;(statearr_14480_14499[(2)] = null);
(statearr_14480_14499[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (5)))
{var inst_14455 = cljs.core.async.close_BANG_.call(null,out);var state_14470__$1 = state_14470;var statearr_14481_14500 = state_14470__$1;(statearr_14481_14500[(2)] = inst_14455);
(statearr_14481_14500[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (10)))
{var inst_14463 = (state_14470[(2)]);var state_14470__$1 = (function (){var statearr_14482 = state_14470;(statearr_14482[(8)] = inst_14463);
return statearr_14482;
})();var statearr_14483_14501 = state_14470__$1;(statearr_14483_14501[(2)] = null);
(statearr_14483_14501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14471 === (8)))
{var inst_14452 = (state_14470[(7)]);var state_14470__$1 = state_14470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14470__$1,(11),out,inst_14452);
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
});})(c__8138__auto___14491,out))
;return ((function (switch__8123__auto__,c__8138__auto___14491,out){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14487 = [null,null,null,null,null,null,null,null,null];(statearr_14487[(0)] = state_machine__8124__auto__);
(statearr_14487[(1)] = (1));
return statearr_14487;
});
var state_machine__8124__auto____1 = (function (state_14470){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14470);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14488){if((e14488 instanceof Object))
{var ex__8127__auto__ = e14488;var statearr_14489_14502 = state_14470;(statearr_14489_14502[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14488;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14503 = state_14470;
state_14470 = G__14503;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14470){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___14491,out))
})();var state__8140__auto__ = (function (){var statearr_14490 = f__8139__auto__.call(null);(statearr_14490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___14491);
return statearr_14490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___14491,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8138__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto__){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto__){
return (function (state_14669){var state_val_14670 = (state_14669[(1)]);if((state_val_14670 === (7)))
{var inst_14665 = (state_14669[(2)]);var state_14669__$1 = state_14669;var statearr_14671_14712 = state_14669__$1;(statearr_14671_14712[(2)] = inst_14665);
(statearr_14671_14712[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (20)))
{var inst_14635 = (state_14669[(7)]);var inst_14646 = (state_14669[(2)]);var inst_14647 = cljs.core.next.call(null,inst_14635);var inst_14621 = inst_14647;var inst_14622 = null;var inst_14623 = (0);var inst_14624 = (0);var state_14669__$1 = (function (){var statearr_14672 = state_14669;(statearr_14672[(8)] = inst_14624);
(statearr_14672[(9)] = inst_14622);
(statearr_14672[(10)] = inst_14623);
(statearr_14672[(11)] = inst_14646);
(statearr_14672[(12)] = inst_14621);
return statearr_14672;
})();var statearr_14673_14713 = state_14669__$1;(statearr_14673_14713[(2)] = null);
(statearr_14673_14713[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (1)))
{var state_14669__$1 = state_14669;var statearr_14674_14714 = state_14669__$1;(statearr_14674_14714[(2)] = null);
(statearr_14674_14714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (4)))
{var inst_14610 = (state_14669[(13)]);var inst_14610__$1 = (state_14669[(2)]);var inst_14611 = (inst_14610__$1 == null);var state_14669__$1 = (function (){var statearr_14675 = state_14669;(statearr_14675[(13)] = inst_14610__$1);
return statearr_14675;
})();if(cljs.core.truth_(inst_14611))
{var statearr_14676_14715 = state_14669__$1;(statearr_14676_14715[(1)] = (5));
} else
{var statearr_14677_14716 = state_14669__$1;(statearr_14677_14716[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (15)))
{var state_14669__$1 = state_14669;var statearr_14681_14717 = state_14669__$1;(statearr_14681_14717[(2)] = null);
(statearr_14681_14717[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (21)))
{var state_14669__$1 = state_14669;var statearr_14682_14718 = state_14669__$1;(statearr_14682_14718[(2)] = null);
(statearr_14682_14718[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (13)))
{var inst_14624 = (state_14669[(8)]);var inst_14622 = (state_14669[(9)]);var inst_14623 = (state_14669[(10)]);var inst_14621 = (state_14669[(12)]);var inst_14631 = (state_14669[(2)]);var inst_14632 = (inst_14624 + (1));var tmp14678 = inst_14622;var tmp14679 = inst_14623;var tmp14680 = inst_14621;var inst_14621__$1 = tmp14680;var inst_14622__$1 = tmp14678;var inst_14623__$1 = tmp14679;var inst_14624__$1 = inst_14632;var state_14669__$1 = (function (){var statearr_14683 = state_14669;(statearr_14683[(8)] = inst_14624__$1);
(statearr_14683[(9)] = inst_14622__$1);
(statearr_14683[(10)] = inst_14623__$1);
(statearr_14683[(14)] = inst_14631);
(statearr_14683[(12)] = inst_14621__$1);
return statearr_14683;
})();var statearr_14684_14719 = state_14669__$1;(statearr_14684_14719[(2)] = null);
(statearr_14684_14719[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (22)))
{var state_14669__$1 = state_14669;var statearr_14685_14720 = state_14669__$1;(statearr_14685_14720[(2)] = null);
(statearr_14685_14720[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (6)))
{var inst_14610 = (state_14669[(13)]);var inst_14619 = f.call(null,inst_14610);var inst_14620 = cljs.core.seq.call(null,inst_14619);var inst_14621 = inst_14620;var inst_14622 = null;var inst_14623 = (0);var inst_14624 = (0);var state_14669__$1 = (function (){var statearr_14686 = state_14669;(statearr_14686[(8)] = inst_14624);
(statearr_14686[(9)] = inst_14622);
(statearr_14686[(10)] = inst_14623);
(statearr_14686[(12)] = inst_14621);
return statearr_14686;
})();var statearr_14687_14721 = state_14669__$1;(statearr_14687_14721[(2)] = null);
(statearr_14687_14721[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (17)))
{var inst_14635 = (state_14669[(7)]);var inst_14639 = cljs.core.chunk_first.call(null,inst_14635);var inst_14640 = cljs.core.chunk_rest.call(null,inst_14635);var inst_14641 = cljs.core.count.call(null,inst_14639);var inst_14621 = inst_14640;var inst_14622 = inst_14639;var inst_14623 = inst_14641;var inst_14624 = (0);var state_14669__$1 = (function (){var statearr_14688 = state_14669;(statearr_14688[(8)] = inst_14624);
(statearr_14688[(9)] = inst_14622);
(statearr_14688[(10)] = inst_14623);
(statearr_14688[(12)] = inst_14621);
return statearr_14688;
})();var statearr_14689_14722 = state_14669__$1;(statearr_14689_14722[(2)] = null);
(statearr_14689_14722[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (3)))
{var inst_14667 = (state_14669[(2)]);var state_14669__$1 = state_14669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14669__$1,inst_14667);
} else
{if((state_val_14670 === (12)))
{var inst_14655 = (state_14669[(2)]);var state_14669__$1 = state_14669;var statearr_14690_14723 = state_14669__$1;(statearr_14690_14723[(2)] = inst_14655);
(statearr_14690_14723[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (2)))
{var state_14669__$1 = state_14669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14669__$1,(4),in$);
} else
{if((state_val_14670 === (23)))
{var inst_14663 = (state_14669[(2)]);var state_14669__$1 = state_14669;var statearr_14691_14724 = state_14669__$1;(statearr_14691_14724[(2)] = inst_14663);
(statearr_14691_14724[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (19)))
{var inst_14650 = (state_14669[(2)]);var state_14669__$1 = state_14669;var statearr_14692_14725 = state_14669__$1;(statearr_14692_14725[(2)] = inst_14650);
(statearr_14692_14725[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (11)))
{var inst_14635 = (state_14669[(7)]);var inst_14621 = (state_14669[(12)]);var inst_14635__$1 = cljs.core.seq.call(null,inst_14621);var state_14669__$1 = (function (){var statearr_14693 = state_14669;(statearr_14693[(7)] = inst_14635__$1);
return statearr_14693;
})();if(inst_14635__$1)
{var statearr_14694_14726 = state_14669__$1;(statearr_14694_14726[(1)] = (14));
} else
{var statearr_14695_14727 = state_14669__$1;(statearr_14695_14727[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (9)))
{var inst_14657 = (state_14669[(2)]);var inst_14658 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14669__$1 = (function (){var statearr_14696 = state_14669;(statearr_14696[(15)] = inst_14657);
return statearr_14696;
})();if(cljs.core.truth_(inst_14658))
{var statearr_14697_14728 = state_14669__$1;(statearr_14697_14728[(1)] = (21));
} else
{var statearr_14698_14729 = state_14669__$1;(statearr_14698_14729[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (5)))
{var inst_14613 = cljs.core.async.close_BANG_.call(null,out);var state_14669__$1 = state_14669;var statearr_14699_14730 = state_14669__$1;(statearr_14699_14730[(2)] = inst_14613);
(statearr_14699_14730[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (14)))
{var inst_14635 = (state_14669[(7)]);var inst_14637 = cljs.core.chunked_seq_QMARK_.call(null,inst_14635);var state_14669__$1 = state_14669;if(inst_14637)
{var statearr_14700_14731 = state_14669__$1;(statearr_14700_14731[(1)] = (17));
} else
{var statearr_14701_14732 = state_14669__$1;(statearr_14701_14732[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (16)))
{var inst_14653 = (state_14669[(2)]);var state_14669__$1 = state_14669;var statearr_14702_14733 = state_14669__$1;(statearr_14702_14733[(2)] = inst_14653);
(statearr_14702_14733[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14670 === (10)))
{var inst_14624 = (state_14669[(8)]);var inst_14622 = (state_14669[(9)]);var inst_14629 = cljs.core._nth.call(null,inst_14622,inst_14624);var state_14669__$1 = state_14669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14669__$1,(13),out,inst_14629);
} else
{if((state_val_14670 === (18)))
{var inst_14635 = (state_14669[(7)]);var inst_14644 = cljs.core.first.call(null,inst_14635);var state_14669__$1 = state_14669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14669__$1,(20),out,inst_14644);
} else
{if((state_val_14670 === (8)))
{var inst_14624 = (state_14669[(8)]);var inst_14623 = (state_14669[(10)]);var inst_14626 = (inst_14624 < inst_14623);var inst_14627 = inst_14626;var state_14669__$1 = state_14669;if(cljs.core.truth_(inst_14627))
{var statearr_14703_14734 = state_14669__$1;(statearr_14703_14734[(1)] = (10));
} else
{var statearr_14704_14735 = state_14669__$1;(statearr_14704_14735[(1)] = (11));
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
});})(c__8138__auto__))
;return ((function (switch__8123__auto__,c__8138__auto__){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14708[(0)] = state_machine__8124__auto__);
(statearr_14708[(1)] = (1));
return statearr_14708;
});
var state_machine__8124__auto____1 = (function (state_14669){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14669);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14709){if((e14709 instanceof Object))
{var ex__8127__auto__ = e14709;var statearr_14710_14736 = state_14669;(statearr_14710_14736[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14669);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14737 = state_14669;
state_14669 = G__14737;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14669){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto__))
})();var state__8140__auto__ = (function (){var statearr_14711 = f__8139__auto__.call(null);(statearr_14711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto__);
return statearr_14711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto__))
);
return c__8138__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8138__auto___14834 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___14834,out){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___14834,out){
return (function (state_14809){var state_val_14810 = (state_14809[(1)]);if((state_val_14810 === (7)))
{var inst_14804 = (state_14809[(2)]);var state_14809__$1 = state_14809;var statearr_14811_14835 = state_14809__$1;(statearr_14811_14835[(2)] = inst_14804);
(statearr_14811_14835[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (1)))
{var inst_14786 = null;var state_14809__$1 = (function (){var statearr_14812 = state_14809;(statearr_14812[(7)] = inst_14786);
return statearr_14812;
})();var statearr_14813_14836 = state_14809__$1;(statearr_14813_14836[(2)] = null);
(statearr_14813_14836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (4)))
{var inst_14789 = (state_14809[(8)]);var inst_14789__$1 = (state_14809[(2)]);var inst_14790 = (inst_14789__$1 == null);var inst_14791 = cljs.core.not.call(null,inst_14790);var state_14809__$1 = (function (){var statearr_14814 = state_14809;(statearr_14814[(8)] = inst_14789__$1);
return statearr_14814;
})();if(inst_14791)
{var statearr_14815_14837 = state_14809__$1;(statearr_14815_14837[(1)] = (5));
} else
{var statearr_14816_14838 = state_14809__$1;(statearr_14816_14838[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (6)))
{var state_14809__$1 = state_14809;var statearr_14817_14839 = state_14809__$1;(statearr_14817_14839[(2)] = null);
(statearr_14817_14839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (3)))
{var inst_14806 = (state_14809[(2)]);var inst_14807 = cljs.core.async.close_BANG_.call(null,out);var state_14809__$1 = (function (){var statearr_14818 = state_14809;(statearr_14818[(9)] = inst_14806);
return statearr_14818;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14809__$1,inst_14807);
} else
{if((state_val_14810 === (2)))
{var state_14809__$1 = state_14809;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14809__$1,(4),ch);
} else
{if((state_val_14810 === (11)))
{var inst_14789 = (state_14809[(8)]);var inst_14798 = (state_14809[(2)]);var inst_14786 = inst_14789;var state_14809__$1 = (function (){var statearr_14819 = state_14809;(statearr_14819[(7)] = inst_14786);
(statearr_14819[(10)] = inst_14798);
return statearr_14819;
})();var statearr_14820_14840 = state_14809__$1;(statearr_14820_14840[(2)] = null);
(statearr_14820_14840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (9)))
{var inst_14789 = (state_14809[(8)]);var state_14809__$1 = state_14809;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14809__$1,(11),out,inst_14789);
} else
{if((state_val_14810 === (5)))
{var inst_14786 = (state_14809[(7)]);var inst_14789 = (state_14809[(8)]);var inst_14793 = cljs.core._EQ_.call(null,inst_14789,inst_14786);var state_14809__$1 = state_14809;if(inst_14793)
{var statearr_14822_14841 = state_14809__$1;(statearr_14822_14841[(1)] = (8));
} else
{var statearr_14823_14842 = state_14809__$1;(statearr_14823_14842[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (10)))
{var inst_14801 = (state_14809[(2)]);var state_14809__$1 = state_14809;var statearr_14824_14843 = state_14809__$1;(statearr_14824_14843[(2)] = inst_14801);
(statearr_14824_14843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14810 === (8)))
{var inst_14786 = (state_14809[(7)]);var tmp14821 = inst_14786;var inst_14786__$1 = tmp14821;var state_14809__$1 = (function (){var statearr_14825 = state_14809;(statearr_14825[(7)] = inst_14786__$1);
return statearr_14825;
})();var statearr_14826_14844 = state_14809__$1;(statearr_14826_14844[(2)] = null);
(statearr_14826_14844[(1)] = (2));
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
});})(c__8138__auto___14834,out))
;return ((function (switch__8123__auto__,c__8138__auto___14834,out){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14830 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14830[(0)] = state_machine__8124__auto__);
(statearr_14830[(1)] = (1));
return statearr_14830;
});
var state_machine__8124__auto____1 = (function (state_14809){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14809);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14831){if((e14831 instanceof Object))
{var ex__8127__auto__ = e14831;var statearr_14832_14845 = state_14809;(statearr_14832_14845[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14809);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14831;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14846 = state_14809;
state_14809 = G__14846;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14809){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___14834,out))
})();var state__8140__auto__ = (function (){var statearr_14833 = f__8139__auto__.call(null);(statearr_14833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___14834);
return statearr_14833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___14834,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8138__auto___14981 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___14981,out){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___14981,out){
return (function (state_14951){var state_val_14952 = (state_14951[(1)]);if((state_val_14952 === (7)))
{var inst_14947 = (state_14951[(2)]);var state_14951__$1 = state_14951;var statearr_14953_14982 = state_14951__$1;(statearr_14953_14982[(2)] = inst_14947);
(statearr_14953_14982[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (1)))
{var inst_14914 = (new Array(n));var inst_14915 = inst_14914;var inst_14916 = (0);var state_14951__$1 = (function (){var statearr_14954 = state_14951;(statearr_14954[(7)] = inst_14915);
(statearr_14954[(8)] = inst_14916);
return statearr_14954;
})();var statearr_14955_14983 = state_14951__$1;(statearr_14955_14983[(2)] = null);
(statearr_14955_14983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (4)))
{var inst_14919 = (state_14951[(9)]);var inst_14919__$1 = (state_14951[(2)]);var inst_14920 = (inst_14919__$1 == null);var inst_14921 = cljs.core.not.call(null,inst_14920);var state_14951__$1 = (function (){var statearr_14956 = state_14951;(statearr_14956[(9)] = inst_14919__$1);
return statearr_14956;
})();if(inst_14921)
{var statearr_14957_14984 = state_14951__$1;(statearr_14957_14984[(1)] = (5));
} else
{var statearr_14958_14985 = state_14951__$1;(statearr_14958_14985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (15)))
{var inst_14941 = (state_14951[(2)]);var state_14951__$1 = state_14951;var statearr_14959_14986 = state_14951__$1;(statearr_14959_14986[(2)] = inst_14941);
(statearr_14959_14986[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (13)))
{var state_14951__$1 = state_14951;var statearr_14960_14987 = state_14951__$1;(statearr_14960_14987[(2)] = null);
(statearr_14960_14987[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (6)))
{var inst_14916 = (state_14951[(8)]);var inst_14937 = (inst_14916 > (0));var state_14951__$1 = state_14951;if(cljs.core.truth_(inst_14937))
{var statearr_14961_14988 = state_14951__$1;(statearr_14961_14988[(1)] = (12));
} else
{var statearr_14962_14989 = state_14951__$1;(statearr_14962_14989[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (3)))
{var inst_14949 = (state_14951[(2)]);var state_14951__$1 = state_14951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14951__$1,inst_14949);
} else
{if((state_val_14952 === (12)))
{var inst_14915 = (state_14951[(7)]);var inst_14939 = cljs.core.vec.call(null,inst_14915);var state_14951__$1 = state_14951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14951__$1,(15),out,inst_14939);
} else
{if((state_val_14952 === (2)))
{var state_14951__$1 = state_14951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14951__$1,(4),ch);
} else
{if((state_val_14952 === (11)))
{var inst_14931 = (state_14951[(2)]);var inst_14932 = (new Array(n));var inst_14915 = inst_14932;var inst_14916 = (0);var state_14951__$1 = (function (){var statearr_14963 = state_14951;(statearr_14963[(7)] = inst_14915);
(statearr_14963[(10)] = inst_14931);
(statearr_14963[(8)] = inst_14916);
return statearr_14963;
})();var statearr_14964_14990 = state_14951__$1;(statearr_14964_14990[(2)] = null);
(statearr_14964_14990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (9)))
{var inst_14915 = (state_14951[(7)]);var inst_14929 = cljs.core.vec.call(null,inst_14915);var state_14951__$1 = state_14951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14951__$1,(11),out,inst_14929);
} else
{if((state_val_14952 === (5)))
{var inst_14919 = (state_14951[(9)]);var inst_14915 = (state_14951[(7)]);var inst_14924 = (state_14951[(11)]);var inst_14916 = (state_14951[(8)]);var inst_14923 = (inst_14915[inst_14916] = inst_14919);var inst_14924__$1 = (inst_14916 + (1));var inst_14925 = (inst_14924__$1 < n);var state_14951__$1 = (function (){var statearr_14965 = state_14951;(statearr_14965[(12)] = inst_14923);
(statearr_14965[(11)] = inst_14924__$1);
return statearr_14965;
})();if(cljs.core.truth_(inst_14925))
{var statearr_14966_14991 = state_14951__$1;(statearr_14966_14991[(1)] = (8));
} else
{var statearr_14967_14992 = state_14951__$1;(statearr_14967_14992[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (14)))
{var inst_14944 = (state_14951[(2)]);var inst_14945 = cljs.core.async.close_BANG_.call(null,out);var state_14951__$1 = (function (){var statearr_14969 = state_14951;(statearr_14969[(13)] = inst_14944);
return statearr_14969;
})();var statearr_14970_14993 = state_14951__$1;(statearr_14970_14993[(2)] = inst_14945);
(statearr_14970_14993[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (10)))
{var inst_14935 = (state_14951[(2)]);var state_14951__$1 = state_14951;var statearr_14971_14994 = state_14951__$1;(statearr_14971_14994[(2)] = inst_14935);
(statearr_14971_14994[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14952 === (8)))
{var inst_14915 = (state_14951[(7)]);var inst_14924 = (state_14951[(11)]);var tmp14968 = inst_14915;var inst_14915__$1 = tmp14968;var inst_14916 = inst_14924;var state_14951__$1 = (function (){var statearr_14972 = state_14951;(statearr_14972[(7)] = inst_14915__$1);
(statearr_14972[(8)] = inst_14916);
return statearr_14972;
})();var statearr_14973_14995 = state_14951__$1;(statearr_14973_14995[(2)] = null);
(statearr_14973_14995[(1)] = (2));
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
});})(c__8138__auto___14981,out))
;return ((function (switch__8123__auto__,c__8138__auto___14981,out){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_14977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14977[(0)] = state_machine__8124__auto__);
(statearr_14977[(1)] = (1));
return statearr_14977;
});
var state_machine__8124__auto____1 = (function (state_14951){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_14951);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e14978){if((e14978 instanceof Object))
{var ex__8127__auto__ = e14978;var statearr_14979_14996 = state_14951;(statearr_14979_14996[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14978;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14997 = state_14951;
state_14951 = G__14997;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_14951){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_14951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___14981,out))
})();var state__8140__auto__ = (function (){var statearr_14980 = f__8139__auto__.call(null);(statearr_14980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___14981);
return statearr_14980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___14981,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8138__auto___15140 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___15140,out){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___15140,out){
return (function (state_15110){var state_val_15111 = (state_15110[(1)]);if((state_val_15111 === (7)))
{var inst_15106 = (state_15110[(2)]);var state_15110__$1 = state_15110;var statearr_15112_15141 = state_15110__$1;(statearr_15112_15141[(2)] = inst_15106);
(statearr_15112_15141[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (1)))
{var inst_15069 = [];var inst_15070 = inst_15069;var inst_15071 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15110__$1 = (function (){var statearr_15113 = state_15110;(statearr_15113[(7)] = inst_15071);
(statearr_15113[(8)] = inst_15070);
return statearr_15113;
})();var statearr_15114_15142 = state_15110__$1;(statearr_15114_15142[(2)] = null);
(statearr_15114_15142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (4)))
{var inst_15074 = (state_15110[(9)]);var inst_15074__$1 = (state_15110[(2)]);var inst_15075 = (inst_15074__$1 == null);var inst_15076 = cljs.core.not.call(null,inst_15075);var state_15110__$1 = (function (){var statearr_15115 = state_15110;(statearr_15115[(9)] = inst_15074__$1);
return statearr_15115;
})();if(inst_15076)
{var statearr_15116_15143 = state_15110__$1;(statearr_15116_15143[(1)] = (5));
} else
{var statearr_15117_15144 = state_15110__$1;(statearr_15117_15144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (15)))
{var inst_15100 = (state_15110[(2)]);var state_15110__$1 = state_15110;var statearr_15118_15145 = state_15110__$1;(statearr_15118_15145[(2)] = inst_15100);
(statearr_15118_15145[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (13)))
{var state_15110__$1 = state_15110;var statearr_15119_15146 = state_15110__$1;(statearr_15119_15146[(2)] = null);
(statearr_15119_15146[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (6)))
{var inst_15070 = (state_15110[(8)]);var inst_15095 = inst_15070.length;var inst_15096 = (inst_15095 > (0));var state_15110__$1 = state_15110;if(cljs.core.truth_(inst_15096))
{var statearr_15120_15147 = state_15110__$1;(statearr_15120_15147[(1)] = (12));
} else
{var statearr_15121_15148 = state_15110__$1;(statearr_15121_15148[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (3)))
{var inst_15108 = (state_15110[(2)]);var state_15110__$1 = state_15110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15110__$1,inst_15108);
} else
{if((state_val_15111 === (12)))
{var inst_15070 = (state_15110[(8)]);var inst_15098 = cljs.core.vec.call(null,inst_15070);var state_15110__$1 = state_15110;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15110__$1,(15),out,inst_15098);
} else
{if((state_val_15111 === (2)))
{var state_15110__$1 = state_15110;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15110__$1,(4),ch);
} else
{if((state_val_15111 === (11)))
{var inst_15078 = (state_15110[(10)]);var inst_15074 = (state_15110[(9)]);var inst_15088 = (state_15110[(2)]);var inst_15089 = [];var inst_15090 = inst_15089.push(inst_15074);var inst_15070 = inst_15089;var inst_15071 = inst_15078;var state_15110__$1 = (function (){var statearr_15122 = state_15110;(statearr_15122[(7)] = inst_15071);
(statearr_15122[(11)] = inst_15088);
(statearr_15122[(12)] = inst_15090);
(statearr_15122[(8)] = inst_15070);
return statearr_15122;
})();var statearr_15123_15149 = state_15110__$1;(statearr_15123_15149[(2)] = null);
(statearr_15123_15149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (9)))
{var inst_15070 = (state_15110[(8)]);var inst_15086 = cljs.core.vec.call(null,inst_15070);var state_15110__$1 = state_15110;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15110__$1,(11),out,inst_15086);
} else
{if((state_val_15111 === (5)))
{var inst_15078 = (state_15110[(10)]);var inst_15071 = (state_15110[(7)]);var inst_15074 = (state_15110[(9)]);var inst_15078__$1 = f.call(null,inst_15074);var inst_15079 = cljs.core._EQ_.call(null,inst_15078__$1,inst_15071);var inst_15080 = cljs.core.keyword_identical_QMARK_.call(null,inst_15071,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15081 = (inst_15079) || (inst_15080);var state_15110__$1 = (function (){var statearr_15124 = state_15110;(statearr_15124[(10)] = inst_15078__$1);
return statearr_15124;
})();if(cljs.core.truth_(inst_15081))
{var statearr_15125_15150 = state_15110__$1;(statearr_15125_15150[(1)] = (8));
} else
{var statearr_15126_15151 = state_15110__$1;(statearr_15126_15151[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (14)))
{var inst_15103 = (state_15110[(2)]);var inst_15104 = cljs.core.async.close_BANG_.call(null,out);var state_15110__$1 = (function (){var statearr_15128 = state_15110;(statearr_15128[(13)] = inst_15103);
return statearr_15128;
})();var statearr_15129_15152 = state_15110__$1;(statearr_15129_15152[(2)] = inst_15104);
(statearr_15129_15152[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (10)))
{var inst_15093 = (state_15110[(2)]);var state_15110__$1 = state_15110;var statearr_15130_15153 = state_15110__$1;(statearr_15130_15153[(2)] = inst_15093);
(statearr_15130_15153[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15111 === (8)))
{var inst_15078 = (state_15110[(10)]);var inst_15074 = (state_15110[(9)]);var inst_15070 = (state_15110[(8)]);var inst_15083 = inst_15070.push(inst_15074);var tmp15127 = inst_15070;var inst_15070__$1 = tmp15127;var inst_15071 = inst_15078;var state_15110__$1 = (function (){var statearr_15131 = state_15110;(statearr_15131[(7)] = inst_15071);
(statearr_15131[(14)] = inst_15083);
(statearr_15131[(8)] = inst_15070__$1);
return statearr_15131;
})();var statearr_15132_15154 = state_15110__$1;(statearr_15132_15154[(2)] = null);
(statearr_15132_15154[(1)] = (2));
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
});})(c__8138__auto___15140,out))
;return ((function (switch__8123__auto__,c__8138__auto___15140,out){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_15136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15136[(0)] = state_machine__8124__auto__);
(statearr_15136[(1)] = (1));
return statearr_15136;
});
var state_machine__8124__auto____1 = (function (state_15110){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_15110);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e15137){if((e15137 instanceof Object))
{var ex__8127__auto__ = e15137;var statearr_15138_15155 = state_15110;(statearr_15138_15155[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15110);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15156 = state_15110;
state_15110 = G__15156;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_15110){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_15110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___15140,out))
})();var state__8140__auto__ = (function (){var statearr_15139 = f__8139__auto__.call(null);(statearr_15139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___15140);
return statearr_15139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___15140,out))
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
