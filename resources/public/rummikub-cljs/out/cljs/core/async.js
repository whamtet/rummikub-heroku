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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12494 = (function (f,fn_handler,meta12495){
this.f = f;
this.fn_handler = fn_handler;
this.meta12495 = meta12495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12494.cljs$lang$type = true;
cljs.core.async.t12494.cljs$lang$ctorStr = "cljs.core.async/t12494";
cljs.core.async.t12494.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12494");
});
cljs.core.async.t12494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12496){var self__ = this;
var _12496__$1 = this;return self__.meta12495;
});
cljs.core.async.t12494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12496,meta12495__$1){var self__ = this;
var _12496__$1 = this;return (new cljs.core.async.t12494(self__.f,self__.fn_handler,meta12495__$1));
});
cljs.core.async.__GT_t12494 = (function __GT_t12494(f__$1,fn_handler__$1,meta12495){return (new cljs.core.async.t12494(f__$1,fn_handler__$1,meta12495));
});
}
return (new cljs.core.async.t12494(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12498 = buff;if(G__12498)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__12498.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12498.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12498);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12498);
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
{var val_12499 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12499);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12499,ret){
return (function (){return fn1.call(null,val_12499);
});})(val_12499,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___12500 = n;var x_12501 = (0);while(true){
if((x_12501 < n__4416__auto___12500))
{(a[x_12501] = (0));
{
var G__12502 = (x_12501 + (1));
x_12501 = G__12502;
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
var G__12503 = (i + (1));
i = G__12503;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12507 = (function (flag,alt_flag,meta12508){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12508 = meta12508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12507.cljs$lang$type = true;
cljs.core.async.t12507.cljs$lang$ctorStr = "cljs.core.async/t12507";
cljs.core.async.t12507.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12507");
});})(flag))
;
cljs.core.async.t12507.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12509){var self__ = this;
var _12509__$1 = this;return self__.meta12508;
});})(flag))
;
cljs.core.async.t12507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12509,meta12508__$1){var self__ = this;
var _12509__$1 = this;return (new cljs.core.async.t12507(self__.flag,self__.alt_flag,meta12508__$1));
});})(flag))
;
cljs.core.async.__GT_t12507 = ((function (flag){
return (function __GT_t12507(flag__$1,alt_flag__$1,meta12508){return (new cljs.core.async.t12507(flag__$1,alt_flag__$1,meta12508));
});})(flag))
;
}
return (new cljs.core.async.t12507(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12513 = (function (cb,flag,alt_handler,meta12514){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12514 = meta12514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12513.cljs$lang$type = true;
cljs.core.async.t12513.cljs$lang$ctorStr = "cljs.core.async/t12513";
cljs.core.async.t12513.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12513");
});
cljs.core.async.t12513.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12515){var self__ = this;
var _12515__$1 = this;return self__.meta12514;
});
cljs.core.async.t12513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12515,meta12514__$1){var self__ = this;
var _12515__$1 = this;return (new cljs.core.async.t12513(self__.cb,self__.flag,self__.alt_handler,meta12514__$1));
});
cljs.core.async.__GT_t12513 = (function __GT_t12513(cb__$1,flag__$1,alt_handler__$1,meta12514){return (new cljs.core.async.t12513(cb__$1,flag__$1,alt_handler__$1,meta12514));
});
}
return (new cljs.core.async.t12513(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12516_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12516_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12517_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12517_SHARP_,port], null));
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
var G__12518 = (i + (1));
i = G__12518;
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
var alts_BANG___delegate = function (ports,p__12519){var map__12521 = p__12519;var map__12521__$1 = ((cljs.core.seq_QMARK_.call(null,map__12521))?cljs.core.apply.call(null,cljs.core.hash_map,map__12521):map__12521);var opts = map__12521__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12519 = null;if (arguments.length > 1) {
  p__12519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12519);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12522){
var ports = cljs.core.first(arglist__12522);
var p__12519 = cljs.core.rest(arglist__12522);
return alts_BANG___delegate(ports,p__12519);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6605__auto___12617 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___12617){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___12617){
return (function (state_12593){var state_val_12594 = (state_12593[(1)]);if((state_val_12594 === (7)))
{var inst_12589 = (state_12593[(2)]);var state_12593__$1 = state_12593;var statearr_12595_12618 = state_12593__$1;(statearr_12595_12618[(2)] = inst_12589);
(statearr_12595_12618[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (1)))
{var state_12593__$1 = state_12593;var statearr_12596_12619 = state_12593__$1;(statearr_12596_12619[(2)] = null);
(statearr_12596_12619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (4)))
{var inst_12572 = (state_12593[(7)]);var inst_12572__$1 = (state_12593[(2)]);var inst_12573 = (inst_12572__$1 == null);var state_12593__$1 = (function (){var statearr_12597 = state_12593;(statearr_12597[(7)] = inst_12572__$1);
return statearr_12597;
})();if(cljs.core.truth_(inst_12573))
{var statearr_12598_12620 = state_12593__$1;(statearr_12598_12620[(1)] = (5));
} else
{var statearr_12599_12621 = state_12593__$1;(statearr_12599_12621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (13)))
{var state_12593__$1 = state_12593;var statearr_12600_12622 = state_12593__$1;(statearr_12600_12622[(2)] = null);
(statearr_12600_12622[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (6)))
{var inst_12572 = (state_12593[(7)]);var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12593__$1,(11),to,inst_12572);
} else
{if((state_val_12594 === (3)))
{var inst_12591 = (state_12593[(2)]);var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12593__$1,inst_12591);
} else
{if((state_val_12594 === (12)))
{var state_12593__$1 = state_12593;var statearr_12601_12623 = state_12593__$1;(statearr_12601_12623[(2)] = null);
(statearr_12601_12623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (2)))
{var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12593__$1,(4),from);
} else
{if((state_val_12594 === (11)))
{var inst_12582 = (state_12593[(2)]);var state_12593__$1 = state_12593;if(cljs.core.truth_(inst_12582))
{var statearr_12602_12624 = state_12593__$1;(statearr_12602_12624[(1)] = (12));
} else
{var statearr_12603_12625 = state_12593__$1;(statearr_12603_12625[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (9)))
{var state_12593__$1 = state_12593;var statearr_12604_12626 = state_12593__$1;(statearr_12604_12626[(2)] = null);
(statearr_12604_12626[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (5)))
{var state_12593__$1 = state_12593;if(cljs.core.truth_(close_QMARK_))
{var statearr_12605_12627 = state_12593__$1;(statearr_12605_12627[(1)] = (8));
} else
{var statearr_12606_12628 = state_12593__$1;(statearr_12606_12628[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (14)))
{var inst_12587 = (state_12593[(2)]);var state_12593__$1 = state_12593;var statearr_12607_12629 = state_12593__$1;(statearr_12607_12629[(2)] = inst_12587);
(statearr_12607_12629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (10)))
{var inst_12579 = (state_12593[(2)]);var state_12593__$1 = state_12593;var statearr_12608_12630 = state_12593__$1;(statearr_12608_12630[(2)] = inst_12579);
(statearr_12608_12630[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12594 === (8)))
{var inst_12576 = cljs.core.async.close_BANG_.call(null,to);var state_12593__$1 = state_12593;var statearr_12609_12631 = state_12593__$1;(statearr_12609_12631[(2)] = inst_12576);
(statearr_12609_12631[(1)] = (10));
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
});})(c__6605__auto___12617))
;return ((function (switch__6590__auto__,c__6605__auto___12617){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_12613 = [null,null,null,null,null,null,null,null];(statearr_12613[(0)] = state_machine__6591__auto__);
(statearr_12613[(1)] = (1));
return statearr_12613;
});
var state_machine__6591__auto____1 = (function (state_12593){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_12593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e12614){if((e12614 instanceof Object))
{var ex__6594__auto__ = e12614;var statearr_12615_12632 = state_12593;(statearr_12615_12632[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12633 = state_12593;
state_12593 = G__12633;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_12593){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_12593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___12617))
})();var state__6607__auto__ = (function (){var statearr_12616 = f__6606__auto__.call(null);(statearr_12616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___12617);
return statearr_12616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___12617))
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
return (function (p__12817){var vec__12818 = p__12817;var v = cljs.core.nth.call(null,vec__12818,(0),null);var p = cljs.core.nth.call(null,vec__12818,(1),null);var job = vec__12818;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6605__auto___13000 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___13000,res,vec__12818,v,p,job,jobs,results){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___13000,res,vec__12818,v,p,job,jobs,results){
return (function (state_12823){var state_val_12824 = (state_12823[(1)]);if((state_val_12824 === (2)))
{var inst_12820 = (state_12823[(2)]);var inst_12821 = cljs.core.async.close_BANG_.call(null,res);var state_12823__$1 = (function (){var statearr_12825 = state_12823;(statearr_12825[(7)] = inst_12820);
return statearr_12825;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12823__$1,inst_12821);
} else
{if((state_val_12824 === (1)))
{var state_12823__$1 = state_12823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12823__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6605__auto___13000,res,vec__12818,v,p,job,jobs,results))
;return ((function (switch__6590__auto__,c__6605__auto___13000,res,vec__12818,v,p,job,jobs,results){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_12829 = [null,null,null,null,null,null,null,null];(statearr_12829[(0)] = state_machine__6591__auto__);
(statearr_12829[(1)] = (1));
return statearr_12829;
});
var state_machine__6591__auto____1 = (function (state_12823){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_12823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e12830){if((e12830 instanceof Object))
{var ex__6594__auto__ = e12830;var statearr_12831_13001 = state_12823;(statearr_12831_13001[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13002 = state_12823;
state_12823 = G__13002;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_12823){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_12823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___13000,res,vec__12818,v,p,job,jobs,results))
})();var state__6607__auto__ = (function (){var statearr_12832 = f__6606__auto__.call(null);(statearr_12832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___13000);
return statearr_12832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___13000,res,vec__12818,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12833){var vec__12834 = p__12833;var v = cljs.core.nth.call(null,vec__12834,(0),null);var p = cljs.core.nth.call(null,vec__12834,(1),null);var job = vec__12834;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4416__auto___13003 = n;var __13004 = (0);while(true){
if((__13004 < n__4416__auto___13003))
{var G__12835_13005 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12835_13005) {
case "async":
var c__6605__auto___13007 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13004,c__6605__auto___13007,G__12835_13005,n__4416__auto___13003,jobs,results,process,async){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (__13004,c__6605__auto___13007,G__12835_13005,n__4416__auto___13003,jobs,results,process,async){
return (function (state_12848){var state_val_12849 = (state_12848[(1)]);if((state_val_12849 === (7)))
{var inst_12844 = (state_12848[(2)]);var state_12848__$1 = state_12848;var statearr_12850_13008 = state_12848__$1;(statearr_12850_13008[(2)] = inst_12844);
(statearr_12850_13008[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12849 === (6)))
{var state_12848__$1 = state_12848;var statearr_12851_13009 = state_12848__$1;(statearr_12851_13009[(2)] = null);
(statearr_12851_13009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12849 === (5)))
{var state_12848__$1 = state_12848;var statearr_12852_13010 = state_12848__$1;(statearr_12852_13010[(2)] = null);
(statearr_12852_13010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12849 === (4)))
{var inst_12838 = (state_12848[(2)]);var inst_12839 = async.call(null,inst_12838);var state_12848__$1 = state_12848;if(cljs.core.truth_(inst_12839))
{var statearr_12853_13011 = state_12848__$1;(statearr_12853_13011[(1)] = (5));
} else
{var statearr_12854_13012 = state_12848__$1;(statearr_12854_13012[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12849 === (3)))
{var inst_12846 = (state_12848[(2)]);var state_12848__$1 = state_12848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12848__$1,inst_12846);
} else
{if((state_val_12849 === (2)))
{var state_12848__$1 = state_12848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12848__$1,(4),jobs);
} else
{if((state_val_12849 === (1)))
{var state_12848__$1 = state_12848;var statearr_12855_13013 = state_12848__$1;(statearr_12855_13013[(2)] = null);
(statearr_12855_13013[(1)] = (2));
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
});})(__13004,c__6605__auto___13007,G__12835_13005,n__4416__auto___13003,jobs,results,process,async))
;return ((function (__13004,switch__6590__auto__,c__6605__auto___13007,G__12835_13005,n__4416__auto___13003,jobs,results,process,async){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_12859 = [null,null,null,null,null,null,null];(statearr_12859[(0)] = state_machine__6591__auto__);
(statearr_12859[(1)] = (1));
return statearr_12859;
});
var state_machine__6591__auto____1 = (function (state_12848){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_12848);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e12860){if((e12860 instanceof Object))
{var ex__6594__auto__ = e12860;var statearr_12861_13014 = state_12848;(statearr_12861_13014[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12860;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13015 = state_12848;
state_12848 = G__13015;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_12848){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_12848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(__13004,switch__6590__auto__,c__6605__auto___13007,G__12835_13005,n__4416__auto___13003,jobs,results,process,async))
})();var state__6607__auto__ = (function (){var statearr_12862 = f__6606__auto__.call(null);(statearr_12862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___13007);
return statearr_12862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(__13004,c__6605__auto___13007,G__12835_13005,n__4416__auto___13003,jobs,results,process,async))
);

break;
case "compute":
var c__6605__auto___13016 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13004,c__6605__auto___13016,G__12835_13005,n__4416__auto___13003,jobs,results,process,async){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (__13004,c__6605__auto___13016,G__12835_13005,n__4416__auto___13003,jobs,results,process,async){
return (function (state_12875){var state_val_12876 = (state_12875[(1)]);if((state_val_12876 === (7)))
{var inst_12871 = (state_12875[(2)]);var state_12875__$1 = state_12875;var statearr_12877_13017 = state_12875__$1;(statearr_12877_13017[(2)] = inst_12871);
(statearr_12877_13017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12876 === (6)))
{var state_12875__$1 = state_12875;var statearr_12878_13018 = state_12875__$1;(statearr_12878_13018[(2)] = null);
(statearr_12878_13018[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12876 === (5)))
{var state_12875__$1 = state_12875;var statearr_12879_13019 = state_12875__$1;(statearr_12879_13019[(2)] = null);
(statearr_12879_13019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12876 === (4)))
{var inst_12865 = (state_12875[(2)]);var inst_12866 = process.call(null,inst_12865);var state_12875__$1 = state_12875;if(cljs.core.truth_(inst_12866))
{var statearr_12880_13020 = state_12875__$1;(statearr_12880_13020[(1)] = (5));
} else
{var statearr_12881_13021 = state_12875__$1;(statearr_12881_13021[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12876 === (3)))
{var inst_12873 = (state_12875[(2)]);var state_12875__$1 = state_12875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12875__$1,inst_12873);
} else
{if((state_val_12876 === (2)))
{var state_12875__$1 = state_12875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12875__$1,(4),jobs);
} else
{if((state_val_12876 === (1)))
{var state_12875__$1 = state_12875;var statearr_12882_13022 = state_12875__$1;(statearr_12882_13022[(2)] = null);
(statearr_12882_13022[(1)] = (2));
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
});})(__13004,c__6605__auto___13016,G__12835_13005,n__4416__auto___13003,jobs,results,process,async))
;return ((function (__13004,switch__6590__auto__,c__6605__auto___13016,G__12835_13005,n__4416__auto___13003,jobs,results,process,async){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_12886 = [null,null,null,null,null,null,null];(statearr_12886[(0)] = state_machine__6591__auto__);
(statearr_12886[(1)] = (1));
return statearr_12886;
});
var state_machine__6591__auto____1 = (function (state_12875){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_12875);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e12887){if((e12887 instanceof Object))
{var ex__6594__auto__ = e12887;var statearr_12888_13023 = state_12875;(statearr_12888_13023[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12875);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13024 = state_12875;
state_12875 = G__13024;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_12875){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_12875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(__13004,switch__6590__auto__,c__6605__auto___13016,G__12835_13005,n__4416__auto___13003,jobs,results,process,async))
})();var state__6607__auto__ = (function (){var statearr_12889 = f__6606__auto__.call(null);(statearr_12889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___13016);
return statearr_12889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(__13004,c__6605__auto___13016,G__12835_13005,n__4416__auto___13003,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__13025 = (__13004 + (1));
__13004 = G__13025;
continue;
}
} else
{}
break;
}
var c__6605__auto___13026 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___13026,jobs,results,process,async){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___13026,jobs,results,process,async){
return (function (state_12911){var state_val_12912 = (state_12911[(1)]);if((state_val_12912 === (9)))
{var inst_12904 = (state_12911[(2)]);var state_12911__$1 = (function (){var statearr_12913 = state_12911;(statearr_12913[(7)] = inst_12904);
return statearr_12913;
})();var statearr_12914_13027 = state_12911__$1;(statearr_12914_13027[(2)] = null);
(statearr_12914_13027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (8)))
{var inst_12897 = (state_12911[(8)]);var inst_12902 = (state_12911[(2)]);var state_12911__$1 = (function (){var statearr_12915 = state_12911;(statearr_12915[(9)] = inst_12902);
return statearr_12915;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12911__$1,(9),results,inst_12897);
} else
{if((state_val_12912 === (7)))
{var inst_12907 = (state_12911[(2)]);var state_12911__$1 = state_12911;var statearr_12916_13028 = state_12911__$1;(statearr_12916_13028[(2)] = inst_12907);
(statearr_12916_13028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (6)))
{var inst_12897 = (state_12911[(8)]);var inst_12892 = (state_12911[(10)]);var inst_12897__$1 = cljs.core.async.chan.call(null,(1));var inst_12898 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12899 = [inst_12892,inst_12897__$1];var inst_12900 = (new cljs.core.PersistentVector(null,2,(5),inst_12898,inst_12899,null));var state_12911__$1 = (function (){var statearr_12917 = state_12911;(statearr_12917[(8)] = inst_12897__$1);
return statearr_12917;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12911__$1,(8),jobs,inst_12900);
} else
{if((state_val_12912 === (5)))
{var inst_12895 = cljs.core.async.close_BANG_.call(null,jobs);var state_12911__$1 = state_12911;var statearr_12918_13029 = state_12911__$1;(statearr_12918_13029[(2)] = inst_12895);
(statearr_12918_13029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (4)))
{var inst_12892 = (state_12911[(10)]);var inst_12892__$1 = (state_12911[(2)]);var inst_12893 = (inst_12892__$1 == null);var state_12911__$1 = (function (){var statearr_12919 = state_12911;(statearr_12919[(10)] = inst_12892__$1);
return statearr_12919;
})();if(cljs.core.truth_(inst_12893))
{var statearr_12920_13030 = state_12911__$1;(statearr_12920_13030[(1)] = (5));
} else
{var statearr_12921_13031 = state_12911__$1;(statearr_12921_13031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (3)))
{var inst_12909 = (state_12911[(2)]);var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12911__$1,inst_12909);
} else
{if((state_val_12912 === (2)))
{var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12911__$1,(4),from);
} else
{if((state_val_12912 === (1)))
{var state_12911__$1 = state_12911;var statearr_12922_13032 = state_12911__$1;(statearr_12922_13032[(2)] = null);
(statearr_12922_13032[(1)] = (2));
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
});})(c__6605__auto___13026,jobs,results,process,async))
;return ((function (switch__6590__auto__,c__6605__auto___13026,jobs,results,process,async){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_12926 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12926[(0)] = state_machine__6591__auto__);
(statearr_12926[(1)] = (1));
return statearr_12926;
});
var state_machine__6591__auto____1 = (function (state_12911){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_12911);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e12927){if((e12927 instanceof Object))
{var ex__6594__auto__ = e12927;var statearr_12928_13033 = state_12911;(statearr_12928_13033[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12911);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12927;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13034 = state_12911;
state_12911 = G__13034;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_12911){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_12911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___13026,jobs,results,process,async))
})();var state__6607__auto__ = (function (){var statearr_12929 = f__6606__auto__.call(null);(statearr_12929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___13026);
return statearr_12929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___13026,jobs,results,process,async))
);
var c__6605__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto__,jobs,results,process,async){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto__,jobs,results,process,async){
return (function (state_12967){var state_val_12968 = (state_12967[(1)]);if((state_val_12968 === (7)))
{var inst_12963 = (state_12967[(2)]);var state_12967__$1 = state_12967;var statearr_12969_13035 = state_12967__$1;(statearr_12969_13035[(2)] = inst_12963);
(statearr_12969_13035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (20)))
{var state_12967__$1 = state_12967;var statearr_12970_13036 = state_12967__$1;(statearr_12970_13036[(2)] = null);
(statearr_12970_13036[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (1)))
{var state_12967__$1 = state_12967;var statearr_12971_13037 = state_12967__$1;(statearr_12971_13037[(2)] = null);
(statearr_12971_13037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (4)))
{var inst_12932 = (state_12967[(7)]);var inst_12932__$1 = (state_12967[(2)]);var inst_12933 = (inst_12932__$1 == null);var state_12967__$1 = (function (){var statearr_12972 = state_12967;(statearr_12972[(7)] = inst_12932__$1);
return statearr_12972;
})();if(cljs.core.truth_(inst_12933))
{var statearr_12973_13038 = state_12967__$1;(statearr_12973_13038[(1)] = (5));
} else
{var statearr_12974_13039 = state_12967__$1;(statearr_12974_13039[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (15)))
{var inst_12945 = (state_12967[(8)]);var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12967__$1,(18),to,inst_12945);
} else
{if((state_val_12968 === (21)))
{var inst_12958 = (state_12967[(2)]);var state_12967__$1 = state_12967;var statearr_12975_13040 = state_12967__$1;(statearr_12975_13040[(2)] = inst_12958);
(statearr_12975_13040[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (13)))
{var inst_12960 = (state_12967[(2)]);var state_12967__$1 = (function (){var statearr_12976 = state_12967;(statearr_12976[(9)] = inst_12960);
return statearr_12976;
})();var statearr_12977_13041 = state_12967__$1;(statearr_12977_13041[(2)] = null);
(statearr_12977_13041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (6)))
{var inst_12932 = (state_12967[(7)]);var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12967__$1,(11),inst_12932);
} else
{if((state_val_12968 === (17)))
{var inst_12953 = (state_12967[(2)]);var state_12967__$1 = state_12967;if(cljs.core.truth_(inst_12953))
{var statearr_12978_13042 = state_12967__$1;(statearr_12978_13042[(1)] = (19));
} else
{var statearr_12979_13043 = state_12967__$1;(statearr_12979_13043[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (3)))
{var inst_12965 = (state_12967[(2)]);var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12967__$1,inst_12965);
} else
{if((state_val_12968 === (12)))
{var inst_12942 = (state_12967[(10)]);var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12967__$1,(14),inst_12942);
} else
{if((state_val_12968 === (2)))
{var state_12967__$1 = state_12967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12967__$1,(4),results);
} else
{if((state_val_12968 === (19)))
{var state_12967__$1 = state_12967;var statearr_12980_13044 = state_12967__$1;(statearr_12980_13044[(2)] = null);
(statearr_12980_13044[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (11)))
{var inst_12942 = (state_12967[(2)]);var state_12967__$1 = (function (){var statearr_12981 = state_12967;(statearr_12981[(10)] = inst_12942);
return statearr_12981;
})();var statearr_12982_13045 = state_12967__$1;(statearr_12982_13045[(2)] = null);
(statearr_12982_13045[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (9)))
{var state_12967__$1 = state_12967;var statearr_12983_13046 = state_12967__$1;(statearr_12983_13046[(2)] = null);
(statearr_12983_13046[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (5)))
{var state_12967__$1 = state_12967;if(cljs.core.truth_(close_QMARK_))
{var statearr_12984_13047 = state_12967__$1;(statearr_12984_13047[(1)] = (8));
} else
{var statearr_12985_13048 = state_12967__$1;(statearr_12985_13048[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (14)))
{var inst_12947 = (state_12967[(11)]);var inst_12945 = (state_12967[(8)]);var inst_12945__$1 = (state_12967[(2)]);var inst_12946 = (inst_12945__$1 == null);var inst_12947__$1 = cljs.core.not.call(null,inst_12946);var state_12967__$1 = (function (){var statearr_12986 = state_12967;(statearr_12986[(11)] = inst_12947__$1);
(statearr_12986[(8)] = inst_12945__$1);
return statearr_12986;
})();if(inst_12947__$1)
{var statearr_12987_13049 = state_12967__$1;(statearr_12987_13049[(1)] = (15));
} else
{var statearr_12988_13050 = state_12967__$1;(statearr_12988_13050[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (16)))
{var inst_12947 = (state_12967[(11)]);var state_12967__$1 = state_12967;var statearr_12989_13051 = state_12967__$1;(statearr_12989_13051[(2)] = inst_12947);
(statearr_12989_13051[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (10)))
{var inst_12939 = (state_12967[(2)]);var state_12967__$1 = state_12967;var statearr_12990_13052 = state_12967__$1;(statearr_12990_13052[(2)] = inst_12939);
(statearr_12990_13052[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (18)))
{var inst_12950 = (state_12967[(2)]);var state_12967__$1 = state_12967;var statearr_12991_13053 = state_12967__$1;(statearr_12991_13053[(2)] = inst_12950);
(statearr_12991_13053[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12968 === (8)))
{var inst_12936 = cljs.core.async.close_BANG_.call(null,to);var state_12967__$1 = state_12967;var statearr_12992_13054 = state_12967__$1;(statearr_12992_13054[(2)] = inst_12936);
(statearr_12992_13054[(1)] = (10));
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
});})(c__6605__auto__,jobs,results,process,async))
;return ((function (switch__6590__auto__,c__6605__auto__,jobs,results,process,async){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_12996 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12996[(0)] = state_machine__6591__auto__);
(statearr_12996[(1)] = (1));
return statearr_12996;
});
var state_machine__6591__auto____1 = (function (state_12967){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_12967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e12997){if((e12997 instanceof Object))
{var ex__6594__auto__ = e12997;var statearr_12998_13055 = state_12967;(statearr_12998_13055[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12997;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13056 = state_12967;
state_12967 = G__13056;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_12967){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_12967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto__,jobs,results,process,async))
})();var state__6607__auto__ = (function (){var statearr_12999 = f__6606__auto__.call(null);(statearr_12999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto__);
return statearr_12999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto__,jobs,results,process,async))
);
return c__6605__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6605__auto___13157 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___13157,tc,fc){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___13157,tc,fc){
return (function (state_13132){var state_val_13133 = (state_13132[(1)]);if((state_val_13133 === (7)))
{var inst_13128 = (state_13132[(2)]);var state_13132__$1 = state_13132;var statearr_13134_13158 = state_13132__$1;(statearr_13134_13158[(2)] = inst_13128);
(statearr_13134_13158[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (1)))
{var state_13132__$1 = state_13132;var statearr_13135_13159 = state_13132__$1;(statearr_13135_13159[(2)] = null);
(statearr_13135_13159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (4)))
{var inst_13109 = (state_13132[(7)]);var inst_13109__$1 = (state_13132[(2)]);var inst_13110 = (inst_13109__$1 == null);var state_13132__$1 = (function (){var statearr_13136 = state_13132;(statearr_13136[(7)] = inst_13109__$1);
return statearr_13136;
})();if(cljs.core.truth_(inst_13110))
{var statearr_13137_13160 = state_13132__$1;(statearr_13137_13160[(1)] = (5));
} else
{var statearr_13138_13161 = state_13132__$1;(statearr_13138_13161[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (13)))
{var state_13132__$1 = state_13132;var statearr_13139_13162 = state_13132__$1;(statearr_13139_13162[(2)] = null);
(statearr_13139_13162[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (6)))
{var inst_13109 = (state_13132[(7)]);var inst_13115 = p.call(null,inst_13109);var state_13132__$1 = state_13132;if(cljs.core.truth_(inst_13115))
{var statearr_13140_13163 = state_13132__$1;(statearr_13140_13163[(1)] = (9));
} else
{var statearr_13141_13164 = state_13132__$1;(statearr_13141_13164[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (3)))
{var inst_13130 = (state_13132[(2)]);var state_13132__$1 = state_13132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13132__$1,inst_13130);
} else
{if((state_val_13133 === (12)))
{var state_13132__$1 = state_13132;var statearr_13142_13165 = state_13132__$1;(statearr_13142_13165[(2)] = null);
(statearr_13142_13165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (2)))
{var state_13132__$1 = state_13132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13132__$1,(4),ch);
} else
{if((state_val_13133 === (11)))
{var inst_13109 = (state_13132[(7)]);var inst_13119 = (state_13132[(2)]);var state_13132__$1 = state_13132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13132__$1,(8),inst_13119,inst_13109);
} else
{if((state_val_13133 === (9)))
{var state_13132__$1 = state_13132;var statearr_13143_13166 = state_13132__$1;(statearr_13143_13166[(2)] = tc);
(statearr_13143_13166[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (5)))
{var inst_13112 = cljs.core.async.close_BANG_.call(null,tc);var inst_13113 = cljs.core.async.close_BANG_.call(null,fc);var state_13132__$1 = (function (){var statearr_13144 = state_13132;(statearr_13144[(8)] = inst_13112);
return statearr_13144;
})();var statearr_13145_13167 = state_13132__$1;(statearr_13145_13167[(2)] = inst_13113);
(statearr_13145_13167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (14)))
{var inst_13126 = (state_13132[(2)]);var state_13132__$1 = state_13132;var statearr_13146_13168 = state_13132__$1;(statearr_13146_13168[(2)] = inst_13126);
(statearr_13146_13168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (10)))
{var state_13132__$1 = state_13132;var statearr_13147_13169 = state_13132__$1;(statearr_13147_13169[(2)] = fc);
(statearr_13147_13169[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13133 === (8)))
{var inst_13121 = (state_13132[(2)]);var state_13132__$1 = state_13132;if(cljs.core.truth_(inst_13121))
{var statearr_13148_13170 = state_13132__$1;(statearr_13148_13170[(1)] = (12));
} else
{var statearr_13149_13171 = state_13132__$1;(statearr_13149_13171[(1)] = (13));
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
});})(c__6605__auto___13157,tc,fc))
;return ((function (switch__6590__auto__,c__6605__auto___13157,tc,fc){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_13153 = [null,null,null,null,null,null,null,null,null];(statearr_13153[(0)] = state_machine__6591__auto__);
(statearr_13153[(1)] = (1));
return statearr_13153;
});
var state_machine__6591__auto____1 = (function (state_13132){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_13132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e13154){if((e13154 instanceof Object))
{var ex__6594__auto__ = e13154;var statearr_13155_13172 = state_13132;(statearr_13155_13172[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13154;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13173 = state_13132;
state_13132 = G__13173;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_13132){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_13132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___13157,tc,fc))
})();var state__6607__auto__ = (function (){var statearr_13156 = f__6606__auto__.call(null);(statearr_13156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___13157);
return statearr_13156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___13157,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6605__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto__){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto__){
return (function (state_13220){var state_val_13221 = (state_13220[(1)]);if((state_val_13221 === (7)))
{var inst_13216 = (state_13220[(2)]);var state_13220__$1 = state_13220;var statearr_13222_13238 = state_13220__$1;(statearr_13222_13238[(2)] = inst_13216);
(statearr_13222_13238[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (6)))
{var inst_13206 = (state_13220[(7)]);var inst_13209 = (state_13220[(8)]);var inst_13213 = f.call(null,inst_13206,inst_13209);var inst_13206__$1 = inst_13213;var state_13220__$1 = (function (){var statearr_13223 = state_13220;(statearr_13223[(7)] = inst_13206__$1);
return statearr_13223;
})();var statearr_13224_13239 = state_13220__$1;(statearr_13224_13239[(2)] = null);
(statearr_13224_13239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (5)))
{var inst_13206 = (state_13220[(7)]);var state_13220__$1 = state_13220;var statearr_13225_13240 = state_13220__$1;(statearr_13225_13240[(2)] = inst_13206);
(statearr_13225_13240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (4)))
{var inst_13209 = (state_13220[(8)]);var inst_13209__$1 = (state_13220[(2)]);var inst_13210 = (inst_13209__$1 == null);var state_13220__$1 = (function (){var statearr_13226 = state_13220;(statearr_13226[(8)] = inst_13209__$1);
return statearr_13226;
})();if(cljs.core.truth_(inst_13210))
{var statearr_13227_13241 = state_13220__$1;(statearr_13227_13241[(1)] = (5));
} else
{var statearr_13228_13242 = state_13220__$1;(statearr_13228_13242[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13221 === (3)))
{var inst_13218 = (state_13220[(2)]);var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13220__$1,inst_13218);
} else
{if((state_val_13221 === (2)))
{var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13220__$1,(4),ch);
} else
{if((state_val_13221 === (1)))
{var inst_13206 = init;var state_13220__$1 = (function (){var statearr_13229 = state_13220;(statearr_13229[(7)] = inst_13206);
return statearr_13229;
})();var statearr_13230_13243 = state_13220__$1;(statearr_13230_13243[(2)] = null);
(statearr_13230_13243[(1)] = (2));
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
});})(c__6605__auto__))
;return ((function (switch__6590__auto__,c__6605__auto__){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_13234 = [null,null,null,null,null,null,null,null,null];(statearr_13234[(0)] = state_machine__6591__auto__);
(statearr_13234[(1)] = (1));
return statearr_13234;
});
var state_machine__6591__auto____1 = (function (state_13220){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_13220);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e13235){if((e13235 instanceof Object))
{var ex__6594__auto__ = e13235;var statearr_13236_13244 = state_13220;(statearr_13236_13244[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13245 = state_13220;
state_13220 = G__13245;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_13220){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_13220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto__))
})();var state__6607__auto__ = (function (){var statearr_13237 = f__6606__auto__.call(null);(statearr_13237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto__);
return statearr_13237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto__))
);
return c__6605__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6605__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto__){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto__){
return (function (state_13319){var state_val_13320 = (state_13319[(1)]);if((state_val_13320 === (7)))
{var inst_13301 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13321_13344 = state_13319__$1;(statearr_13321_13344[(2)] = inst_13301);
(statearr_13321_13344[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (1)))
{var inst_13295 = cljs.core.seq.call(null,coll);var inst_13296 = inst_13295;var state_13319__$1 = (function (){var statearr_13322 = state_13319;(statearr_13322[(7)] = inst_13296);
return statearr_13322;
})();var statearr_13323_13345 = state_13319__$1;(statearr_13323_13345[(2)] = null);
(statearr_13323_13345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (4)))
{var inst_13296 = (state_13319[(7)]);var inst_13299 = cljs.core.first.call(null,inst_13296);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(7),ch,inst_13299);
} else
{if((state_val_13320 === (13)))
{var inst_13313 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13324_13346 = state_13319__$1;(statearr_13324_13346[(2)] = inst_13313);
(statearr_13324_13346[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (6)))
{var inst_13304 = (state_13319[(2)]);var state_13319__$1 = state_13319;if(cljs.core.truth_(inst_13304))
{var statearr_13325_13347 = state_13319__$1;(statearr_13325_13347[(1)] = (8));
} else
{var statearr_13326_13348 = state_13319__$1;(statearr_13326_13348[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (3)))
{var inst_13317 = (state_13319[(2)]);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13319__$1,inst_13317);
} else
{if((state_val_13320 === (12)))
{var state_13319__$1 = state_13319;var statearr_13327_13349 = state_13319__$1;(statearr_13327_13349[(2)] = null);
(statearr_13327_13349[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (2)))
{var inst_13296 = (state_13319[(7)]);var state_13319__$1 = state_13319;if(cljs.core.truth_(inst_13296))
{var statearr_13328_13350 = state_13319__$1;(statearr_13328_13350[(1)] = (4));
} else
{var statearr_13329_13351 = state_13319__$1;(statearr_13329_13351[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (11)))
{var inst_13310 = cljs.core.async.close_BANG_.call(null,ch);var state_13319__$1 = state_13319;var statearr_13330_13352 = state_13319__$1;(statearr_13330_13352[(2)] = inst_13310);
(statearr_13330_13352[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (9)))
{var state_13319__$1 = state_13319;if(cljs.core.truth_(close_QMARK_))
{var statearr_13331_13353 = state_13319__$1;(statearr_13331_13353[(1)] = (11));
} else
{var statearr_13332_13354 = state_13319__$1;(statearr_13332_13354[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (5)))
{var inst_13296 = (state_13319[(7)]);var state_13319__$1 = state_13319;var statearr_13333_13355 = state_13319__$1;(statearr_13333_13355[(2)] = inst_13296);
(statearr_13333_13355[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (10)))
{var inst_13315 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13334_13356 = state_13319__$1;(statearr_13334_13356[(2)] = inst_13315);
(statearr_13334_13356[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (8)))
{var inst_13296 = (state_13319[(7)]);var inst_13306 = cljs.core.next.call(null,inst_13296);var inst_13296__$1 = inst_13306;var state_13319__$1 = (function (){var statearr_13335 = state_13319;(statearr_13335[(7)] = inst_13296__$1);
return statearr_13335;
})();var statearr_13336_13357 = state_13319__$1;(statearr_13336_13357[(2)] = null);
(statearr_13336_13357[(1)] = (2));
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
});})(c__6605__auto__))
;return ((function (switch__6590__auto__,c__6605__auto__){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_13340 = [null,null,null,null,null,null,null,null];(statearr_13340[(0)] = state_machine__6591__auto__);
(statearr_13340[(1)] = (1));
return statearr_13340;
});
var state_machine__6591__auto____1 = (function (state_13319){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_13319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e13341){if((e13341 instanceof Object))
{var ex__6594__auto__ = e13341;var statearr_13342_13358 = state_13319;(statearr_13342_13358[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13341;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13359 = state_13319;
state_13319 = G__13359;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_13319){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_13319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto__))
})();var state__6607__auto__ = (function (){var statearr_13343 = f__6606__auto__.call(null);(statearr_13343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto__);
return statearr_13343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto__))
);
return c__6605__auto__;
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
cljs.core.async.Mux = (function (){var obj13361 = {};return obj13361;
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
cljs.core.async.Mult = (function (){var obj13363 = {};return obj13363;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13585 = (function (cs,ch,mult,meta13586){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13586 = meta13586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13585.cljs$lang$type = true;
cljs.core.async.t13585.cljs$lang$ctorStr = "cljs.core.async/t13585";
cljs.core.async.t13585.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13585");
});})(cs))
;
cljs.core.async.t13585.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13585.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13585.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13585.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13585.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13587){var self__ = this;
var _13587__$1 = this;return self__.meta13586;
});})(cs))
;
cljs.core.async.t13585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13587,meta13586__$1){var self__ = this;
var _13587__$1 = this;return (new cljs.core.async.t13585(self__.cs,self__.ch,self__.mult,meta13586__$1));
});})(cs))
;
cljs.core.async.__GT_t13585 = ((function (cs){
return (function __GT_t13585(cs__$1,ch__$1,mult__$1,meta13586){return (new cljs.core.async.t13585(cs__$1,ch__$1,mult__$1,meta13586));
});})(cs))
;
}
return (new cljs.core.async.t13585(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6605__auto___13806 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___13806,cs,m,dchan,dctr,done){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___13806,cs,m,dchan,dctr,done){
return (function (state_13718){var state_val_13719 = (state_13718[(1)]);if((state_val_13719 === (7)))
{var inst_13714 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13720_13807 = state_13718__$1;(statearr_13720_13807[(2)] = inst_13714);
(statearr_13720_13807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (20)))
{var inst_13619 = (state_13718[(7)]);var inst_13629 = cljs.core.first.call(null,inst_13619);var inst_13630 = cljs.core.nth.call(null,inst_13629,(0),null);var inst_13631 = cljs.core.nth.call(null,inst_13629,(1),null);var state_13718__$1 = (function (){var statearr_13721 = state_13718;(statearr_13721[(8)] = inst_13630);
return statearr_13721;
})();if(cljs.core.truth_(inst_13631))
{var statearr_13722_13808 = state_13718__$1;(statearr_13722_13808[(1)] = (22));
} else
{var statearr_13723_13809 = state_13718__$1;(statearr_13723_13809[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (27)))
{var inst_13659 = (state_13718[(9)]);var inst_13666 = (state_13718[(10)]);var inst_13661 = (state_13718[(11)]);var inst_13590 = (state_13718[(12)]);var inst_13666__$1 = cljs.core._nth.call(null,inst_13659,inst_13661);var inst_13667 = cljs.core.async.put_BANG_.call(null,inst_13666__$1,inst_13590,done);var state_13718__$1 = (function (){var statearr_13724 = state_13718;(statearr_13724[(10)] = inst_13666__$1);
return statearr_13724;
})();if(cljs.core.truth_(inst_13667))
{var statearr_13725_13810 = state_13718__$1;(statearr_13725_13810[(1)] = (30));
} else
{var statearr_13726_13811 = state_13718__$1;(statearr_13726_13811[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (1)))
{var state_13718__$1 = state_13718;var statearr_13727_13812 = state_13718__$1;(statearr_13727_13812[(2)] = null);
(statearr_13727_13812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (24)))
{var inst_13619 = (state_13718[(7)]);var inst_13636 = (state_13718[(2)]);var inst_13637 = cljs.core.next.call(null,inst_13619);var inst_13599 = inst_13637;var inst_13600 = null;var inst_13601 = (0);var inst_13602 = (0);var state_13718__$1 = (function (){var statearr_13728 = state_13718;(statearr_13728[(13)] = inst_13602);
(statearr_13728[(14)] = inst_13599);
(statearr_13728[(15)] = inst_13601);
(statearr_13728[(16)] = inst_13600);
(statearr_13728[(17)] = inst_13636);
return statearr_13728;
})();var statearr_13729_13813 = state_13718__$1;(statearr_13729_13813[(2)] = null);
(statearr_13729_13813[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (39)))
{var state_13718__$1 = state_13718;var statearr_13733_13814 = state_13718__$1;(statearr_13733_13814[(2)] = null);
(statearr_13733_13814[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (4)))
{var inst_13590 = (state_13718[(12)]);var inst_13590__$1 = (state_13718[(2)]);var inst_13591 = (inst_13590__$1 == null);var state_13718__$1 = (function (){var statearr_13734 = state_13718;(statearr_13734[(12)] = inst_13590__$1);
return statearr_13734;
})();if(cljs.core.truth_(inst_13591))
{var statearr_13735_13815 = state_13718__$1;(statearr_13735_13815[(1)] = (5));
} else
{var statearr_13736_13816 = state_13718__$1;(statearr_13736_13816[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (15)))
{var inst_13602 = (state_13718[(13)]);var inst_13599 = (state_13718[(14)]);var inst_13601 = (state_13718[(15)]);var inst_13600 = (state_13718[(16)]);var inst_13615 = (state_13718[(2)]);var inst_13616 = (inst_13602 + (1));var tmp13730 = inst_13599;var tmp13731 = inst_13601;var tmp13732 = inst_13600;var inst_13599__$1 = tmp13730;var inst_13600__$1 = tmp13732;var inst_13601__$1 = tmp13731;var inst_13602__$1 = inst_13616;var state_13718__$1 = (function (){var statearr_13737 = state_13718;(statearr_13737[(18)] = inst_13615);
(statearr_13737[(13)] = inst_13602__$1);
(statearr_13737[(14)] = inst_13599__$1);
(statearr_13737[(15)] = inst_13601__$1);
(statearr_13737[(16)] = inst_13600__$1);
return statearr_13737;
})();var statearr_13738_13817 = state_13718__$1;(statearr_13738_13817[(2)] = null);
(statearr_13738_13817[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (21)))
{var inst_13640 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13742_13818 = state_13718__$1;(statearr_13742_13818[(2)] = inst_13640);
(statearr_13742_13818[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (31)))
{var inst_13666 = (state_13718[(10)]);var inst_13670 = done.call(null,null);var inst_13671 = cljs.core.async.untap_STAR_.call(null,m,inst_13666);var state_13718__$1 = (function (){var statearr_13743 = state_13718;(statearr_13743[(19)] = inst_13670);
return statearr_13743;
})();var statearr_13744_13819 = state_13718__$1;(statearr_13744_13819[(2)] = inst_13671);
(statearr_13744_13819[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (32)))
{var inst_13658 = (state_13718[(20)]);var inst_13659 = (state_13718[(9)]);var inst_13660 = (state_13718[(21)]);var inst_13661 = (state_13718[(11)]);var inst_13673 = (state_13718[(2)]);var inst_13674 = (inst_13661 + (1));var tmp13739 = inst_13658;var tmp13740 = inst_13659;var tmp13741 = inst_13660;var inst_13658__$1 = tmp13739;var inst_13659__$1 = tmp13740;var inst_13660__$1 = tmp13741;var inst_13661__$1 = inst_13674;var state_13718__$1 = (function (){var statearr_13745 = state_13718;(statearr_13745[(20)] = inst_13658__$1);
(statearr_13745[(9)] = inst_13659__$1);
(statearr_13745[(21)] = inst_13660__$1);
(statearr_13745[(11)] = inst_13661__$1);
(statearr_13745[(22)] = inst_13673);
return statearr_13745;
})();var statearr_13746_13820 = state_13718__$1;(statearr_13746_13820[(2)] = null);
(statearr_13746_13820[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (40)))
{var inst_13686 = (state_13718[(23)]);var inst_13690 = done.call(null,null);var inst_13691 = cljs.core.async.untap_STAR_.call(null,m,inst_13686);var state_13718__$1 = (function (){var statearr_13747 = state_13718;(statearr_13747[(24)] = inst_13690);
return statearr_13747;
})();var statearr_13748_13821 = state_13718__$1;(statearr_13748_13821[(2)] = inst_13691);
(statearr_13748_13821[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (33)))
{var inst_13677 = (state_13718[(25)]);var inst_13679 = cljs.core.chunked_seq_QMARK_.call(null,inst_13677);var state_13718__$1 = state_13718;if(inst_13679)
{var statearr_13749_13822 = state_13718__$1;(statearr_13749_13822[(1)] = (36));
} else
{var statearr_13750_13823 = state_13718__$1;(statearr_13750_13823[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (13)))
{var inst_13609 = (state_13718[(26)]);var inst_13612 = cljs.core.async.close_BANG_.call(null,inst_13609);var state_13718__$1 = state_13718;var statearr_13751_13824 = state_13718__$1;(statearr_13751_13824[(2)] = inst_13612);
(statearr_13751_13824[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (22)))
{var inst_13630 = (state_13718[(8)]);var inst_13633 = cljs.core.async.close_BANG_.call(null,inst_13630);var state_13718__$1 = state_13718;var statearr_13752_13825 = state_13718__$1;(statearr_13752_13825[(2)] = inst_13633);
(statearr_13752_13825[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (36)))
{var inst_13677 = (state_13718[(25)]);var inst_13681 = cljs.core.chunk_first.call(null,inst_13677);var inst_13682 = cljs.core.chunk_rest.call(null,inst_13677);var inst_13683 = cljs.core.count.call(null,inst_13681);var inst_13658 = inst_13682;var inst_13659 = inst_13681;var inst_13660 = inst_13683;var inst_13661 = (0);var state_13718__$1 = (function (){var statearr_13753 = state_13718;(statearr_13753[(20)] = inst_13658);
(statearr_13753[(9)] = inst_13659);
(statearr_13753[(21)] = inst_13660);
(statearr_13753[(11)] = inst_13661);
return statearr_13753;
})();var statearr_13754_13826 = state_13718__$1;(statearr_13754_13826[(2)] = null);
(statearr_13754_13826[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (41)))
{var inst_13677 = (state_13718[(25)]);var inst_13693 = (state_13718[(2)]);var inst_13694 = cljs.core.next.call(null,inst_13677);var inst_13658 = inst_13694;var inst_13659 = null;var inst_13660 = (0);var inst_13661 = (0);var state_13718__$1 = (function (){var statearr_13755 = state_13718;(statearr_13755[(27)] = inst_13693);
(statearr_13755[(20)] = inst_13658);
(statearr_13755[(9)] = inst_13659);
(statearr_13755[(21)] = inst_13660);
(statearr_13755[(11)] = inst_13661);
return statearr_13755;
})();var statearr_13756_13827 = state_13718__$1;(statearr_13756_13827[(2)] = null);
(statearr_13756_13827[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (43)))
{var state_13718__$1 = state_13718;var statearr_13757_13828 = state_13718__$1;(statearr_13757_13828[(2)] = null);
(statearr_13757_13828[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (29)))
{var inst_13702 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13758_13829 = state_13718__$1;(statearr_13758_13829[(2)] = inst_13702);
(statearr_13758_13829[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (44)))
{var inst_13711 = (state_13718[(2)]);var state_13718__$1 = (function (){var statearr_13759 = state_13718;(statearr_13759[(28)] = inst_13711);
return statearr_13759;
})();var statearr_13760_13830 = state_13718__$1;(statearr_13760_13830[(2)] = null);
(statearr_13760_13830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (6)))
{var inst_13650 = (state_13718[(29)]);var inst_13649 = cljs.core.deref.call(null,cs);var inst_13650__$1 = cljs.core.keys.call(null,inst_13649);var inst_13651 = cljs.core.count.call(null,inst_13650__$1);var inst_13652 = cljs.core.reset_BANG_.call(null,dctr,inst_13651);var inst_13657 = cljs.core.seq.call(null,inst_13650__$1);var inst_13658 = inst_13657;var inst_13659 = null;var inst_13660 = (0);var inst_13661 = (0);var state_13718__$1 = (function (){var statearr_13761 = state_13718;(statearr_13761[(20)] = inst_13658);
(statearr_13761[(9)] = inst_13659);
(statearr_13761[(21)] = inst_13660);
(statearr_13761[(11)] = inst_13661);
(statearr_13761[(29)] = inst_13650__$1);
(statearr_13761[(30)] = inst_13652);
return statearr_13761;
})();var statearr_13762_13831 = state_13718__$1;(statearr_13762_13831[(2)] = null);
(statearr_13762_13831[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (28)))
{var inst_13658 = (state_13718[(20)]);var inst_13677 = (state_13718[(25)]);var inst_13677__$1 = cljs.core.seq.call(null,inst_13658);var state_13718__$1 = (function (){var statearr_13763 = state_13718;(statearr_13763[(25)] = inst_13677__$1);
return statearr_13763;
})();if(inst_13677__$1)
{var statearr_13764_13832 = state_13718__$1;(statearr_13764_13832[(1)] = (33));
} else
{var statearr_13765_13833 = state_13718__$1;(statearr_13765_13833[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (25)))
{var inst_13660 = (state_13718[(21)]);var inst_13661 = (state_13718[(11)]);var inst_13663 = (inst_13661 < inst_13660);var inst_13664 = inst_13663;var state_13718__$1 = state_13718;if(cljs.core.truth_(inst_13664))
{var statearr_13766_13834 = state_13718__$1;(statearr_13766_13834[(1)] = (27));
} else
{var statearr_13767_13835 = state_13718__$1;(statearr_13767_13835[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (34)))
{var state_13718__$1 = state_13718;var statearr_13768_13836 = state_13718__$1;(statearr_13768_13836[(2)] = null);
(statearr_13768_13836[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (17)))
{var state_13718__$1 = state_13718;var statearr_13769_13837 = state_13718__$1;(statearr_13769_13837[(2)] = null);
(statearr_13769_13837[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (3)))
{var inst_13716 = (state_13718[(2)]);var state_13718__$1 = state_13718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13718__$1,inst_13716);
} else
{if((state_val_13719 === (12)))
{var inst_13645 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13770_13838 = state_13718__$1;(statearr_13770_13838[(2)] = inst_13645);
(statearr_13770_13838[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (2)))
{var state_13718__$1 = state_13718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13718__$1,(4),ch);
} else
{if((state_val_13719 === (23)))
{var state_13718__$1 = state_13718;var statearr_13771_13839 = state_13718__$1;(statearr_13771_13839[(2)] = null);
(statearr_13771_13839[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (35)))
{var inst_13700 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13772_13840 = state_13718__$1;(statearr_13772_13840[(2)] = inst_13700);
(statearr_13772_13840[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (19)))
{var inst_13619 = (state_13718[(7)]);var inst_13623 = cljs.core.chunk_first.call(null,inst_13619);var inst_13624 = cljs.core.chunk_rest.call(null,inst_13619);var inst_13625 = cljs.core.count.call(null,inst_13623);var inst_13599 = inst_13624;var inst_13600 = inst_13623;var inst_13601 = inst_13625;var inst_13602 = (0);var state_13718__$1 = (function (){var statearr_13773 = state_13718;(statearr_13773[(13)] = inst_13602);
(statearr_13773[(14)] = inst_13599);
(statearr_13773[(15)] = inst_13601);
(statearr_13773[(16)] = inst_13600);
return statearr_13773;
})();var statearr_13774_13841 = state_13718__$1;(statearr_13774_13841[(2)] = null);
(statearr_13774_13841[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (11)))
{var inst_13619 = (state_13718[(7)]);var inst_13599 = (state_13718[(14)]);var inst_13619__$1 = cljs.core.seq.call(null,inst_13599);var state_13718__$1 = (function (){var statearr_13775 = state_13718;(statearr_13775[(7)] = inst_13619__$1);
return statearr_13775;
})();if(inst_13619__$1)
{var statearr_13776_13842 = state_13718__$1;(statearr_13776_13842[(1)] = (16));
} else
{var statearr_13777_13843 = state_13718__$1;(statearr_13777_13843[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (9)))
{var inst_13647 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13778_13844 = state_13718__$1;(statearr_13778_13844[(2)] = inst_13647);
(statearr_13778_13844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (5)))
{var inst_13597 = cljs.core.deref.call(null,cs);var inst_13598 = cljs.core.seq.call(null,inst_13597);var inst_13599 = inst_13598;var inst_13600 = null;var inst_13601 = (0);var inst_13602 = (0);var state_13718__$1 = (function (){var statearr_13779 = state_13718;(statearr_13779[(13)] = inst_13602);
(statearr_13779[(14)] = inst_13599);
(statearr_13779[(15)] = inst_13601);
(statearr_13779[(16)] = inst_13600);
return statearr_13779;
})();var statearr_13780_13845 = state_13718__$1;(statearr_13780_13845[(2)] = null);
(statearr_13780_13845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (14)))
{var state_13718__$1 = state_13718;var statearr_13781_13846 = state_13718__$1;(statearr_13781_13846[(2)] = null);
(statearr_13781_13846[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (45)))
{var inst_13708 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13782_13847 = state_13718__$1;(statearr_13782_13847[(2)] = inst_13708);
(statearr_13782_13847[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (26)))
{var inst_13650 = (state_13718[(29)]);var inst_13704 = (state_13718[(2)]);var inst_13705 = cljs.core.seq.call(null,inst_13650);var state_13718__$1 = (function (){var statearr_13783 = state_13718;(statearr_13783[(31)] = inst_13704);
return statearr_13783;
})();if(inst_13705)
{var statearr_13784_13848 = state_13718__$1;(statearr_13784_13848[(1)] = (42));
} else
{var statearr_13785_13849 = state_13718__$1;(statearr_13785_13849[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (16)))
{var inst_13619 = (state_13718[(7)]);var inst_13621 = cljs.core.chunked_seq_QMARK_.call(null,inst_13619);var state_13718__$1 = state_13718;if(inst_13621)
{var statearr_13786_13850 = state_13718__$1;(statearr_13786_13850[(1)] = (19));
} else
{var statearr_13787_13851 = state_13718__$1;(statearr_13787_13851[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (38)))
{var inst_13697 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13788_13852 = state_13718__$1;(statearr_13788_13852[(2)] = inst_13697);
(statearr_13788_13852[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (30)))
{var state_13718__$1 = state_13718;var statearr_13789_13853 = state_13718__$1;(statearr_13789_13853[(2)] = null);
(statearr_13789_13853[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (10)))
{var inst_13602 = (state_13718[(13)]);var inst_13600 = (state_13718[(16)]);var inst_13608 = cljs.core._nth.call(null,inst_13600,inst_13602);var inst_13609 = cljs.core.nth.call(null,inst_13608,(0),null);var inst_13610 = cljs.core.nth.call(null,inst_13608,(1),null);var state_13718__$1 = (function (){var statearr_13790 = state_13718;(statearr_13790[(26)] = inst_13609);
return statearr_13790;
})();if(cljs.core.truth_(inst_13610))
{var statearr_13791_13854 = state_13718__$1;(statearr_13791_13854[(1)] = (13));
} else
{var statearr_13792_13855 = state_13718__$1;(statearr_13792_13855[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (18)))
{var inst_13643 = (state_13718[(2)]);var state_13718__$1 = state_13718;var statearr_13793_13856 = state_13718__$1;(statearr_13793_13856[(2)] = inst_13643);
(statearr_13793_13856[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (42)))
{var state_13718__$1 = state_13718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13718__$1,(45),dchan);
} else
{if((state_val_13719 === (37)))
{var inst_13677 = (state_13718[(25)]);var inst_13686 = (state_13718[(23)]);var inst_13590 = (state_13718[(12)]);var inst_13686__$1 = cljs.core.first.call(null,inst_13677);var inst_13687 = cljs.core.async.put_BANG_.call(null,inst_13686__$1,inst_13590,done);var state_13718__$1 = (function (){var statearr_13794 = state_13718;(statearr_13794[(23)] = inst_13686__$1);
return statearr_13794;
})();if(cljs.core.truth_(inst_13687))
{var statearr_13795_13857 = state_13718__$1;(statearr_13795_13857[(1)] = (39));
} else
{var statearr_13796_13858 = state_13718__$1;(statearr_13796_13858[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13719 === (8)))
{var inst_13602 = (state_13718[(13)]);var inst_13601 = (state_13718[(15)]);var inst_13604 = (inst_13602 < inst_13601);var inst_13605 = inst_13604;var state_13718__$1 = state_13718;if(cljs.core.truth_(inst_13605))
{var statearr_13797_13859 = state_13718__$1;(statearr_13797_13859[(1)] = (10));
} else
{var statearr_13798_13860 = state_13718__$1;(statearr_13798_13860[(1)] = (11));
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
});})(c__6605__auto___13806,cs,m,dchan,dctr,done))
;return ((function (switch__6590__auto__,c__6605__auto___13806,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_13802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13802[(0)] = state_machine__6591__auto__);
(statearr_13802[(1)] = (1));
return statearr_13802;
});
var state_machine__6591__auto____1 = (function (state_13718){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_13718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e13803){if((e13803 instanceof Object))
{var ex__6594__auto__ = e13803;var statearr_13804_13861 = state_13718;(statearr_13804_13861[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13803;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13862 = state_13718;
state_13718 = G__13862;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_13718){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_13718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___13806,cs,m,dchan,dctr,done))
})();var state__6607__auto__ = (function (){var statearr_13805 = f__6606__auto__.call(null);(statearr_13805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___13806);
return statearr_13805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___13806,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13864 = {};return obj13864;
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
;var m = (function (){if(typeof cljs.core.async.t13984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13984 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13985){
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
this.meta13985 = meta13985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13984.cljs$lang$type = true;
cljs.core.async.t13984.cljs$lang$ctorStr = "cljs.core.async/t13984";
cljs.core.async.t13984.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13984");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13984.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13986){var self__ = this;
var _13986__$1 = this;return self__.meta13985;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13986,meta13985__$1){var self__ = this;
var _13986__$1 = this;return (new cljs.core.async.t13984(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13985__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13984 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13985){return (new cljs.core.async.t13984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13985));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13984(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6605__auto___14103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___14103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___14103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14056){var state_val_14057 = (state_14056[(1)]);if((state_val_14057 === (7)))
{var inst_14000 = (state_14056[(7)]);var inst_14005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14000);var state_14056__$1 = state_14056;var statearr_14058_14104 = state_14056__$1;(statearr_14058_14104[(2)] = inst_14005);
(statearr_14058_14104[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (20)))
{var inst_14015 = (state_14056[(8)]);var state_14056__$1 = state_14056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14056__$1,(23),out,inst_14015);
} else
{if((state_val_14057 === (1)))
{var inst_13990 = (state_14056[(9)]);var inst_13990__$1 = calc_state.call(null);var inst_13991 = cljs.core.seq_QMARK_.call(null,inst_13990__$1);var state_14056__$1 = (function (){var statearr_14059 = state_14056;(statearr_14059[(9)] = inst_13990__$1);
return statearr_14059;
})();if(inst_13991)
{var statearr_14060_14105 = state_14056__$1;(statearr_14060_14105[(1)] = (2));
} else
{var statearr_14061_14106 = state_14056__$1;(statearr_14061_14106[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (24)))
{var inst_14008 = (state_14056[(10)]);var inst_14000 = inst_14008;var state_14056__$1 = (function (){var statearr_14062 = state_14056;(statearr_14062[(7)] = inst_14000);
return statearr_14062;
})();var statearr_14063_14107 = state_14056__$1;(statearr_14063_14107[(2)] = null);
(statearr_14063_14107[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (4)))
{var inst_13990 = (state_14056[(9)]);var inst_13996 = (state_14056[(2)]);var inst_13997 = cljs.core.get.call(null,inst_13996,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13998 = cljs.core.get.call(null,inst_13996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13999 = cljs.core.get.call(null,inst_13996,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14000 = inst_13990;var state_14056__$1 = (function (){var statearr_14064 = state_14056;(statearr_14064[(7)] = inst_14000);
(statearr_14064[(11)] = inst_13998);
(statearr_14064[(12)] = inst_13999);
(statearr_14064[(13)] = inst_13997);
return statearr_14064;
})();var statearr_14065_14108 = state_14056__$1;(statearr_14065_14108[(2)] = null);
(statearr_14065_14108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (15)))
{var state_14056__$1 = state_14056;var statearr_14066_14109 = state_14056__$1;(statearr_14066_14109[(2)] = null);
(statearr_14066_14109[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (21)))
{var inst_14008 = (state_14056[(10)]);var inst_14000 = inst_14008;var state_14056__$1 = (function (){var statearr_14067 = state_14056;(statearr_14067[(7)] = inst_14000);
return statearr_14067;
})();var statearr_14068_14110 = state_14056__$1;(statearr_14068_14110[(2)] = null);
(statearr_14068_14110[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (13)))
{var inst_14052 = (state_14056[(2)]);var state_14056__$1 = state_14056;var statearr_14069_14111 = state_14056__$1;(statearr_14069_14111[(2)] = inst_14052);
(statearr_14069_14111[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (22)))
{var inst_14050 = (state_14056[(2)]);var state_14056__$1 = state_14056;var statearr_14070_14112 = state_14056__$1;(statearr_14070_14112[(2)] = inst_14050);
(statearr_14070_14112[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (6)))
{var inst_14054 = (state_14056[(2)]);var state_14056__$1 = state_14056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14056__$1,inst_14054);
} else
{if((state_val_14057 === (25)))
{var state_14056__$1 = state_14056;var statearr_14071_14113 = state_14056__$1;(statearr_14071_14113[(2)] = null);
(statearr_14071_14113[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (17)))
{var inst_14030 = (state_14056[(14)]);var state_14056__$1 = state_14056;var statearr_14072_14114 = state_14056__$1;(statearr_14072_14114[(2)] = inst_14030);
(statearr_14072_14114[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (3)))
{var inst_13990 = (state_14056[(9)]);var state_14056__$1 = state_14056;var statearr_14073_14115 = state_14056__$1;(statearr_14073_14115[(2)] = inst_13990);
(statearr_14073_14115[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (12)))
{var inst_14030 = (state_14056[(14)]);var inst_14016 = (state_14056[(15)]);var inst_14011 = (state_14056[(16)]);var inst_14030__$1 = inst_14011.call(null,inst_14016);var state_14056__$1 = (function (){var statearr_14074 = state_14056;(statearr_14074[(14)] = inst_14030__$1);
return statearr_14074;
})();if(cljs.core.truth_(inst_14030__$1))
{var statearr_14075_14116 = state_14056__$1;(statearr_14075_14116[(1)] = (17));
} else
{var statearr_14076_14117 = state_14056__$1;(statearr_14076_14117[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (2)))
{var inst_13990 = (state_14056[(9)]);var inst_13993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13990);var state_14056__$1 = state_14056;var statearr_14077_14118 = state_14056__$1;(statearr_14077_14118[(2)] = inst_13993);
(statearr_14077_14118[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (23)))
{var inst_14041 = (state_14056[(2)]);var state_14056__$1 = state_14056;if(cljs.core.truth_(inst_14041))
{var statearr_14078_14119 = state_14056__$1;(statearr_14078_14119[(1)] = (24));
} else
{var statearr_14079_14120 = state_14056__$1;(statearr_14079_14120[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (19)))
{var inst_14038 = (state_14056[(2)]);var state_14056__$1 = state_14056;if(cljs.core.truth_(inst_14038))
{var statearr_14080_14121 = state_14056__$1;(statearr_14080_14121[(1)] = (20));
} else
{var statearr_14081_14122 = state_14056__$1;(statearr_14081_14122[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (11)))
{var inst_14015 = (state_14056[(8)]);var inst_14021 = (inst_14015 == null);var state_14056__$1 = state_14056;if(cljs.core.truth_(inst_14021))
{var statearr_14082_14123 = state_14056__$1;(statearr_14082_14123[(1)] = (14));
} else
{var statearr_14083_14124 = state_14056__$1;(statearr_14083_14124[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (9)))
{var inst_14008 = (state_14056[(10)]);var inst_14008__$1 = (state_14056[(2)]);var inst_14009 = cljs.core.get.call(null,inst_14008__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14010 = cljs.core.get.call(null,inst_14008__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14011 = cljs.core.get.call(null,inst_14008__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14056__$1 = (function (){var statearr_14084 = state_14056;(statearr_14084[(10)] = inst_14008__$1);
(statearr_14084[(17)] = inst_14010);
(statearr_14084[(16)] = inst_14011);
return statearr_14084;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14056__$1,(10),inst_14009);
} else
{if((state_val_14057 === (5)))
{var inst_14000 = (state_14056[(7)]);var inst_14003 = cljs.core.seq_QMARK_.call(null,inst_14000);var state_14056__$1 = state_14056;if(inst_14003)
{var statearr_14085_14125 = state_14056__$1;(statearr_14085_14125[(1)] = (7));
} else
{var statearr_14086_14126 = state_14056__$1;(statearr_14086_14126[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (14)))
{var inst_14016 = (state_14056[(15)]);var inst_14023 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14016);var state_14056__$1 = state_14056;var statearr_14087_14127 = state_14056__$1;(statearr_14087_14127[(2)] = inst_14023);
(statearr_14087_14127[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (26)))
{var inst_14046 = (state_14056[(2)]);var state_14056__$1 = state_14056;var statearr_14088_14128 = state_14056__$1;(statearr_14088_14128[(2)] = inst_14046);
(statearr_14088_14128[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (16)))
{var inst_14026 = (state_14056[(2)]);var inst_14027 = calc_state.call(null);var inst_14000 = inst_14027;var state_14056__$1 = (function (){var statearr_14089 = state_14056;(statearr_14089[(7)] = inst_14000);
(statearr_14089[(18)] = inst_14026);
return statearr_14089;
})();var statearr_14090_14129 = state_14056__$1;(statearr_14090_14129[(2)] = null);
(statearr_14090_14129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (10)))
{var inst_14015 = (state_14056[(8)]);var inst_14016 = (state_14056[(15)]);var inst_14014 = (state_14056[(2)]);var inst_14015__$1 = cljs.core.nth.call(null,inst_14014,(0),null);var inst_14016__$1 = cljs.core.nth.call(null,inst_14014,(1),null);var inst_14017 = (inst_14015__$1 == null);var inst_14018 = cljs.core._EQ_.call(null,inst_14016__$1,change);var inst_14019 = (inst_14017) || (inst_14018);var state_14056__$1 = (function (){var statearr_14091 = state_14056;(statearr_14091[(8)] = inst_14015__$1);
(statearr_14091[(15)] = inst_14016__$1);
return statearr_14091;
})();if(cljs.core.truth_(inst_14019))
{var statearr_14092_14130 = state_14056__$1;(statearr_14092_14130[(1)] = (11));
} else
{var statearr_14093_14131 = state_14056__$1;(statearr_14093_14131[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (18)))
{var inst_14010 = (state_14056[(17)]);var inst_14016 = (state_14056[(15)]);var inst_14011 = (state_14056[(16)]);var inst_14033 = cljs.core.empty_QMARK_.call(null,inst_14011);var inst_14034 = inst_14010.call(null,inst_14016);var inst_14035 = cljs.core.not.call(null,inst_14034);var inst_14036 = (inst_14033) && (inst_14035);var state_14056__$1 = state_14056;var statearr_14094_14132 = state_14056__$1;(statearr_14094_14132[(2)] = inst_14036);
(statearr_14094_14132[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14057 === (8)))
{var inst_14000 = (state_14056[(7)]);var state_14056__$1 = state_14056;var statearr_14095_14133 = state_14056__$1;(statearr_14095_14133[(2)] = inst_14000);
(statearr_14095_14133[(1)] = (9));
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
});})(c__6605__auto___14103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6590__auto__,c__6605__auto___14103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_14099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14099[(0)] = state_machine__6591__auto__);
(statearr_14099[(1)] = (1));
return statearr_14099;
});
var state_machine__6591__auto____1 = (function (state_14056){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_14056);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e14100){if((e14100 instanceof Object))
{var ex__6594__auto__ = e14100;var statearr_14101_14134 = state_14056;(statearr_14101_14134[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14135 = state_14056;
state_14056 = G__14135;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_14056){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_14056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___14103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6607__auto__ = (function (){var statearr_14102 = f__6606__auto__.call(null);(statearr_14102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___14103);
return statearr_14102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___14103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj14137 = {};return obj14137;
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
return (function (p1__14138_SHARP_){if(cljs.core.truth_(p1__14138_SHARP_.call(null,topic)))
{return p1__14138_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14138_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14261 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14262){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14262 = meta14262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14261.cljs$lang$type = true;
cljs.core.async.t14261.cljs$lang$ctorStr = "cljs.core.async/t14261";
cljs.core.async.t14261.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14261");
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4222__auto__))
{var m = temp__4222__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14263){var self__ = this;
var _14263__$1 = this;return self__.meta14262;
});})(mults,ensure_mult))
;
cljs.core.async.t14261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14263,meta14262__$1){var self__ = this;
var _14263__$1 = this;return (new cljs.core.async.t14261(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14262__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14261 = ((function (mults,ensure_mult){
return (function __GT_t14261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14262){return (new cljs.core.async.t14261(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14262));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14261(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6605__auto___14383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___14383,mults,ensure_mult,p){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___14383,mults,ensure_mult,p){
return (function (state_14335){var state_val_14336 = (state_14335[(1)]);if((state_val_14336 === (7)))
{var inst_14331 = (state_14335[(2)]);var state_14335__$1 = state_14335;var statearr_14337_14384 = state_14335__$1;(statearr_14337_14384[(2)] = inst_14331);
(statearr_14337_14384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (20)))
{var state_14335__$1 = state_14335;var statearr_14338_14385 = state_14335__$1;(statearr_14338_14385[(2)] = null);
(statearr_14338_14385[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (1)))
{var state_14335__$1 = state_14335;var statearr_14339_14386 = state_14335__$1;(statearr_14339_14386[(2)] = null);
(statearr_14339_14386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (24)))
{var inst_14314 = (state_14335[(7)]);var inst_14323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14314);var state_14335__$1 = state_14335;var statearr_14340_14387 = state_14335__$1;(statearr_14340_14387[(2)] = inst_14323);
(statearr_14340_14387[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (4)))
{var inst_14266 = (state_14335[(8)]);var inst_14266__$1 = (state_14335[(2)]);var inst_14267 = (inst_14266__$1 == null);var state_14335__$1 = (function (){var statearr_14341 = state_14335;(statearr_14341[(8)] = inst_14266__$1);
return statearr_14341;
})();if(cljs.core.truth_(inst_14267))
{var statearr_14342_14388 = state_14335__$1;(statearr_14342_14388[(1)] = (5));
} else
{var statearr_14343_14389 = state_14335__$1;(statearr_14343_14389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (15)))
{var inst_14308 = (state_14335[(2)]);var state_14335__$1 = state_14335;var statearr_14344_14390 = state_14335__$1;(statearr_14344_14390[(2)] = inst_14308);
(statearr_14344_14390[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (21)))
{var inst_14328 = (state_14335[(2)]);var state_14335__$1 = (function (){var statearr_14345 = state_14335;(statearr_14345[(9)] = inst_14328);
return statearr_14345;
})();var statearr_14346_14391 = state_14335__$1;(statearr_14346_14391[(2)] = null);
(statearr_14346_14391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (13)))
{var inst_14290 = (state_14335[(10)]);var inst_14292 = cljs.core.chunked_seq_QMARK_.call(null,inst_14290);var state_14335__$1 = state_14335;if(inst_14292)
{var statearr_14347_14392 = state_14335__$1;(statearr_14347_14392[(1)] = (16));
} else
{var statearr_14348_14393 = state_14335__$1;(statearr_14348_14393[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (22)))
{var inst_14320 = (state_14335[(2)]);var state_14335__$1 = state_14335;if(cljs.core.truth_(inst_14320))
{var statearr_14349_14394 = state_14335__$1;(statearr_14349_14394[(1)] = (23));
} else
{var statearr_14350_14395 = state_14335__$1;(statearr_14350_14395[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (6)))
{var inst_14266 = (state_14335[(8)]);var inst_14314 = (state_14335[(7)]);var inst_14316 = (state_14335[(11)]);var inst_14314__$1 = topic_fn.call(null,inst_14266);var inst_14315 = cljs.core.deref.call(null,mults);var inst_14316__$1 = cljs.core.get.call(null,inst_14315,inst_14314__$1);var state_14335__$1 = (function (){var statearr_14351 = state_14335;(statearr_14351[(7)] = inst_14314__$1);
(statearr_14351[(11)] = inst_14316__$1);
return statearr_14351;
})();if(cljs.core.truth_(inst_14316__$1))
{var statearr_14352_14396 = state_14335__$1;(statearr_14352_14396[(1)] = (19));
} else
{var statearr_14353_14397 = state_14335__$1;(statearr_14353_14397[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (25)))
{var inst_14325 = (state_14335[(2)]);var state_14335__$1 = state_14335;var statearr_14354_14398 = state_14335__$1;(statearr_14354_14398[(2)] = inst_14325);
(statearr_14354_14398[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (17)))
{var inst_14290 = (state_14335[(10)]);var inst_14299 = cljs.core.first.call(null,inst_14290);var inst_14300 = cljs.core.async.muxch_STAR_.call(null,inst_14299);var inst_14301 = cljs.core.async.close_BANG_.call(null,inst_14300);var inst_14302 = cljs.core.next.call(null,inst_14290);var inst_14276 = inst_14302;var inst_14277 = null;var inst_14278 = (0);var inst_14279 = (0);var state_14335__$1 = (function (){var statearr_14355 = state_14335;(statearr_14355[(12)] = inst_14301);
(statearr_14355[(13)] = inst_14278);
(statearr_14355[(14)] = inst_14276);
(statearr_14355[(15)] = inst_14279);
(statearr_14355[(16)] = inst_14277);
return statearr_14355;
})();var statearr_14356_14399 = state_14335__$1;(statearr_14356_14399[(2)] = null);
(statearr_14356_14399[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (3)))
{var inst_14333 = (state_14335[(2)]);var state_14335__$1 = state_14335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14335__$1,inst_14333);
} else
{if((state_val_14336 === (12)))
{var inst_14310 = (state_14335[(2)]);var state_14335__$1 = state_14335;var statearr_14357_14400 = state_14335__$1;(statearr_14357_14400[(2)] = inst_14310);
(statearr_14357_14400[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (2)))
{var state_14335__$1 = state_14335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14335__$1,(4),ch);
} else
{if((state_val_14336 === (23)))
{var state_14335__$1 = state_14335;var statearr_14358_14401 = state_14335__$1;(statearr_14358_14401[(2)] = null);
(statearr_14358_14401[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (19)))
{var inst_14266 = (state_14335[(8)]);var inst_14316 = (state_14335[(11)]);var inst_14318 = cljs.core.async.muxch_STAR_.call(null,inst_14316);var state_14335__$1 = state_14335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14335__$1,(22),inst_14318,inst_14266);
} else
{if((state_val_14336 === (11)))
{var inst_14276 = (state_14335[(14)]);var inst_14290 = (state_14335[(10)]);var inst_14290__$1 = cljs.core.seq.call(null,inst_14276);var state_14335__$1 = (function (){var statearr_14359 = state_14335;(statearr_14359[(10)] = inst_14290__$1);
return statearr_14359;
})();if(inst_14290__$1)
{var statearr_14360_14402 = state_14335__$1;(statearr_14360_14402[(1)] = (13));
} else
{var statearr_14361_14403 = state_14335__$1;(statearr_14361_14403[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (9)))
{var inst_14312 = (state_14335[(2)]);var state_14335__$1 = state_14335;var statearr_14362_14404 = state_14335__$1;(statearr_14362_14404[(2)] = inst_14312);
(statearr_14362_14404[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (5)))
{var inst_14273 = cljs.core.deref.call(null,mults);var inst_14274 = cljs.core.vals.call(null,inst_14273);var inst_14275 = cljs.core.seq.call(null,inst_14274);var inst_14276 = inst_14275;var inst_14277 = null;var inst_14278 = (0);var inst_14279 = (0);var state_14335__$1 = (function (){var statearr_14363 = state_14335;(statearr_14363[(13)] = inst_14278);
(statearr_14363[(14)] = inst_14276);
(statearr_14363[(15)] = inst_14279);
(statearr_14363[(16)] = inst_14277);
return statearr_14363;
})();var statearr_14364_14405 = state_14335__$1;(statearr_14364_14405[(2)] = null);
(statearr_14364_14405[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (14)))
{var state_14335__$1 = state_14335;var statearr_14368_14406 = state_14335__$1;(statearr_14368_14406[(2)] = null);
(statearr_14368_14406[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (16)))
{var inst_14290 = (state_14335[(10)]);var inst_14294 = cljs.core.chunk_first.call(null,inst_14290);var inst_14295 = cljs.core.chunk_rest.call(null,inst_14290);var inst_14296 = cljs.core.count.call(null,inst_14294);var inst_14276 = inst_14295;var inst_14277 = inst_14294;var inst_14278 = inst_14296;var inst_14279 = (0);var state_14335__$1 = (function (){var statearr_14369 = state_14335;(statearr_14369[(13)] = inst_14278);
(statearr_14369[(14)] = inst_14276);
(statearr_14369[(15)] = inst_14279);
(statearr_14369[(16)] = inst_14277);
return statearr_14369;
})();var statearr_14370_14407 = state_14335__$1;(statearr_14370_14407[(2)] = null);
(statearr_14370_14407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (10)))
{var inst_14278 = (state_14335[(13)]);var inst_14276 = (state_14335[(14)]);var inst_14279 = (state_14335[(15)]);var inst_14277 = (state_14335[(16)]);var inst_14284 = cljs.core._nth.call(null,inst_14277,inst_14279);var inst_14285 = cljs.core.async.muxch_STAR_.call(null,inst_14284);var inst_14286 = cljs.core.async.close_BANG_.call(null,inst_14285);var inst_14287 = (inst_14279 + (1));var tmp14365 = inst_14278;var tmp14366 = inst_14276;var tmp14367 = inst_14277;var inst_14276__$1 = tmp14366;var inst_14277__$1 = tmp14367;var inst_14278__$1 = tmp14365;var inst_14279__$1 = inst_14287;var state_14335__$1 = (function (){var statearr_14371 = state_14335;(statearr_14371[(13)] = inst_14278__$1);
(statearr_14371[(14)] = inst_14276__$1);
(statearr_14371[(15)] = inst_14279__$1);
(statearr_14371[(17)] = inst_14286);
(statearr_14371[(16)] = inst_14277__$1);
return statearr_14371;
})();var statearr_14372_14408 = state_14335__$1;(statearr_14372_14408[(2)] = null);
(statearr_14372_14408[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (18)))
{var inst_14305 = (state_14335[(2)]);var state_14335__$1 = state_14335;var statearr_14373_14409 = state_14335__$1;(statearr_14373_14409[(2)] = inst_14305);
(statearr_14373_14409[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14336 === (8)))
{var inst_14278 = (state_14335[(13)]);var inst_14279 = (state_14335[(15)]);var inst_14281 = (inst_14279 < inst_14278);var inst_14282 = inst_14281;var state_14335__$1 = state_14335;if(cljs.core.truth_(inst_14282))
{var statearr_14374_14410 = state_14335__$1;(statearr_14374_14410[(1)] = (10));
} else
{var statearr_14375_14411 = state_14335__$1;(statearr_14375_14411[(1)] = (11));
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
});})(c__6605__auto___14383,mults,ensure_mult,p))
;return ((function (switch__6590__auto__,c__6605__auto___14383,mults,ensure_mult,p){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_14379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14379[(0)] = state_machine__6591__auto__);
(statearr_14379[(1)] = (1));
return statearr_14379;
});
var state_machine__6591__auto____1 = (function (state_14335){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_14335);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e14380){if((e14380 instanceof Object))
{var ex__6594__auto__ = e14380;var statearr_14381_14412 = state_14335;(statearr_14381_14412[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14335);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14413 = state_14335;
state_14335 = G__14413;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_14335){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_14335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___14383,mults,ensure_mult,p))
})();var state__6607__auto__ = (function (){var statearr_14382 = f__6606__auto__.call(null);(statearr_14382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___14383);
return statearr_14382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___14383,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6605__auto___14550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___14550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___14550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14520){var state_val_14521 = (state_14520[(1)]);if((state_val_14521 === (7)))
{var state_14520__$1 = state_14520;var statearr_14522_14551 = state_14520__$1;(statearr_14522_14551[(2)] = null);
(statearr_14522_14551[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (1)))
{var state_14520__$1 = state_14520;var statearr_14523_14552 = state_14520__$1;(statearr_14523_14552[(2)] = null);
(statearr_14523_14552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (4)))
{var inst_14484 = (state_14520[(7)]);var inst_14486 = (inst_14484 < cnt);var state_14520__$1 = state_14520;if(cljs.core.truth_(inst_14486))
{var statearr_14524_14553 = state_14520__$1;(statearr_14524_14553[(1)] = (6));
} else
{var statearr_14525_14554 = state_14520__$1;(statearr_14525_14554[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (15)))
{var inst_14516 = (state_14520[(2)]);var state_14520__$1 = state_14520;var statearr_14526_14555 = state_14520__$1;(statearr_14526_14555[(2)] = inst_14516);
(statearr_14526_14555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (13)))
{var inst_14509 = cljs.core.async.close_BANG_.call(null,out);var state_14520__$1 = state_14520;var statearr_14527_14556 = state_14520__$1;(statearr_14527_14556[(2)] = inst_14509);
(statearr_14527_14556[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (6)))
{var state_14520__$1 = state_14520;var statearr_14528_14557 = state_14520__$1;(statearr_14528_14557[(2)] = null);
(statearr_14528_14557[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (3)))
{var inst_14518 = (state_14520[(2)]);var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14520__$1,inst_14518);
} else
{if((state_val_14521 === (12)))
{var inst_14506 = (state_14520[(8)]);var inst_14506__$1 = (state_14520[(2)]);var inst_14507 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14506__$1);var state_14520__$1 = (function (){var statearr_14529 = state_14520;(statearr_14529[(8)] = inst_14506__$1);
return statearr_14529;
})();if(cljs.core.truth_(inst_14507))
{var statearr_14530_14558 = state_14520__$1;(statearr_14530_14558[(1)] = (13));
} else
{var statearr_14531_14559 = state_14520__$1;(statearr_14531_14559[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (2)))
{var inst_14483 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14484 = (0);var state_14520__$1 = (function (){var statearr_14532 = state_14520;(statearr_14532[(7)] = inst_14484);
(statearr_14532[(9)] = inst_14483);
return statearr_14532;
})();var statearr_14533_14560 = state_14520__$1;(statearr_14533_14560[(2)] = null);
(statearr_14533_14560[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (11)))
{var inst_14484 = (state_14520[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14520,(10),Object,null,(9));var inst_14493 = chs__$1.call(null,inst_14484);var inst_14494 = done.call(null,inst_14484);var inst_14495 = cljs.core.async.take_BANG_.call(null,inst_14493,inst_14494);var state_14520__$1 = state_14520;var statearr_14534_14561 = state_14520__$1;(statearr_14534_14561[(2)] = inst_14495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14520__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (9)))
{var inst_14484 = (state_14520[(7)]);var inst_14497 = (state_14520[(2)]);var inst_14498 = (inst_14484 + (1));var inst_14484__$1 = inst_14498;var state_14520__$1 = (function (){var statearr_14535 = state_14520;(statearr_14535[(7)] = inst_14484__$1);
(statearr_14535[(10)] = inst_14497);
return statearr_14535;
})();var statearr_14536_14562 = state_14520__$1;(statearr_14536_14562[(2)] = null);
(statearr_14536_14562[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (5)))
{var inst_14504 = (state_14520[(2)]);var state_14520__$1 = (function (){var statearr_14537 = state_14520;(statearr_14537[(11)] = inst_14504);
return statearr_14537;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14520__$1,(12),dchan);
} else
{if((state_val_14521 === (14)))
{var inst_14506 = (state_14520[(8)]);var inst_14511 = cljs.core.apply.call(null,f,inst_14506);var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14520__$1,(16),out,inst_14511);
} else
{if((state_val_14521 === (16)))
{var inst_14513 = (state_14520[(2)]);var state_14520__$1 = (function (){var statearr_14538 = state_14520;(statearr_14538[(12)] = inst_14513);
return statearr_14538;
})();var statearr_14539_14563 = state_14520__$1;(statearr_14539_14563[(2)] = null);
(statearr_14539_14563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (10)))
{var inst_14488 = (state_14520[(2)]);var inst_14489 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14520__$1 = (function (){var statearr_14540 = state_14520;(statearr_14540[(13)] = inst_14488);
return statearr_14540;
})();var statearr_14541_14564 = state_14520__$1;(statearr_14541_14564[(2)] = inst_14489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14520__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (8)))
{var inst_14502 = (state_14520[(2)]);var state_14520__$1 = state_14520;var statearr_14542_14565 = state_14520__$1;(statearr_14542_14565[(2)] = inst_14502);
(statearr_14542_14565[(1)] = (5));
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
});})(c__6605__auto___14550,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6590__auto__,c__6605__auto___14550,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_14546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14546[(0)] = state_machine__6591__auto__);
(statearr_14546[(1)] = (1));
return statearr_14546;
});
var state_machine__6591__auto____1 = (function (state_14520){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_14520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e14547){if((e14547 instanceof Object))
{var ex__6594__auto__ = e14547;var statearr_14548_14566 = state_14520;(statearr_14548_14566[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14547;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14567 = state_14520;
state_14520 = G__14567;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_14520){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_14520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___14550,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6607__auto__ = (function (){var statearr_14549 = f__6606__auto__.call(null);(statearr_14549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___14550);
return statearr_14549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___14550,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6605__auto___14675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___14675,out){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___14675,out){
return (function (state_14651){var state_val_14652 = (state_14651[(1)]);if((state_val_14652 === (7)))
{var inst_14630 = (state_14651[(7)]);var inst_14631 = (state_14651[(8)]);var inst_14630__$1 = (state_14651[(2)]);var inst_14631__$1 = cljs.core.nth.call(null,inst_14630__$1,(0),null);var inst_14632 = cljs.core.nth.call(null,inst_14630__$1,(1),null);var inst_14633 = (inst_14631__$1 == null);var state_14651__$1 = (function (){var statearr_14653 = state_14651;(statearr_14653[(9)] = inst_14632);
(statearr_14653[(7)] = inst_14630__$1);
(statearr_14653[(8)] = inst_14631__$1);
return statearr_14653;
})();if(cljs.core.truth_(inst_14633))
{var statearr_14654_14676 = state_14651__$1;(statearr_14654_14676[(1)] = (8));
} else
{var statearr_14655_14677 = state_14651__$1;(statearr_14655_14677[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (1)))
{var inst_14622 = cljs.core.vec.call(null,chs);var inst_14623 = inst_14622;var state_14651__$1 = (function (){var statearr_14656 = state_14651;(statearr_14656[(10)] = inst_14623);
return statearr_14656;
})();var statearr_14657_14678 = state_14651__$1;(statearr_14657_14678[(2)] = null);
(statearr_14657_14678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (4)))
{var inst_14623 = (state_14651[(10)]);var state_14651__$1 = state_14651;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14651__$1,(7),inst_14623);
} else
{if((state_val_14652 === (6)))
{var inst_14647 = (state_14651[(2)]);var state_14651__$1 = state_14651;var statearr_14658_14679 = state_14651__$1;(statearr_14658_14679[(2)] = inst_14647);
(statearr_14658_14679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (3)))
{var inst_14649 = (state_14651[(2)]);var state_14651__$1 = state_14651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14651__$1,inst_14649);
} else
{if((state_val_14652 === (2)))
{var inst_14623 = (state_14651[(10)]);var inst_14625 = cljs.core.count.call(null,inst_14623);var inst_14626 = (inst_14625 > (0));var state_14651__$1 = state_14651;if(cljs.core.truth_(inst_14626))
{var statearr_14660_14680 = state_14651__$1;(statearr_14660_14680[(1)] = (4));
} else
{var statearr_14661_14681 = state_14651__$1;(statearr_14661_14681[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (11)))
{var inst_14623 = (state_14651[(10)]);var inst_14640 = (state_14651[(2)]);var tmp14659 = inst_14623;var inst_14623__$1 = tmp14659;var state_14651__$1 = (function (){var statearr_14662 = state_14651;(statearr_14662[(10)] = inst_14623__$1);
(statearr_14662[(11)] = inst_14640);
return statearr_14662;
})();var statearr_14663_14682 = state_14651__$1;(statearr_14663_14682[(2)] = null);
(statearr_14663_14682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (9)))
{var inst_14631 = (state_14651[(8)]);var state_14651__$1 = state_14651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14651__$1,(11),out,inst_14631);
} else
{if((state_val_14652 === (5)))
{var inst_14645 = cljs.core.async.close_BANG_.call(null,out);var state_14651__$1 = state_14651;var statearr_14664_14683 = state_14651__$1;(statearr_14664_14683[(2)] = inst_14645);
(statearr_14664_14683[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (10)))
{var inst_14643 = (state_14651[(2)]);var state_14651__$1 = state_14651;var statearr_14665_14684 = state_14651__$1;(statearr_14665_14684[(2)] = inst_14643);
(statearr_14665_14684[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14652 === (8)))
{var inst_14632 = (state_14651[(9)]);var inst_14623 = (state_14651[(10)]);var inst_14630 = (state_14651[(7)]);var inst_14631 = (state_14651[(8)]);var inst_14635 = (function (){var c = inst_14632;var v = inst_14631;var vec__14628 = inst_14630;var cs = inst_14623;return ((function (c,v,vec__14628,cs,inst_14632,inst_14623,inst_14630,inst_14631,state_val_14652,c__6605__auto___14675,out){
return (function (p1__14568_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14568_SHARP_);
});
;})(c,v,vec__14628,cs,inst_14632,inst_14623,inst_14630,inst_14631,state_val_14652,c__6605__auto___14675,out))
})();var inst_14636 = cljs.core.filterv.call(null,inst_14635,inst_14623);var inst_14623__$1 = inst_14636;var state_14651__$1 = (function (){var statearr_14666 = state_14651;(statearr_14666[(10)] = inst_14623__$1);
return statearr_14666;
})();var statearr_14667_14685 = state_14651__$1;(statearr_14667_14685[(2)] = null);
(statearr_14667_14685[(1)] = (2));
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
});})(c__6605__auto___14675,out))
;return ((function (switch__6590__auto__,c__6605__auto___14675,out){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_14671 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14671[(0)] = state_machine__6591__auto__);
(statearr_14671[(1)] = (1));
return statearr_14671;
});
var state_machine__6591__auto____1 = (function (state_14651){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_14651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e14672){if((e14672 instanceof Object))
{var ex__6594__auto__ = e14672;var statearr_14673_14686 = state_14651;(statearr_14673_14686[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14687 = state_14651;
state_14651 = G__14687;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_14651){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_14651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___14675,out))
})();var state__6607__auto__ = (function (){var statearr_14674 = f__6606__auto__.call(null);(statearr_14674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___14675);
return statearr_14674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___14675,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6605__auto___14780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___14780,out){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___14780,out){
return (function (state_14757){var state_val_14758 = (state_14757[(1)]);if((state_val_14758 === (7)))
{var inst_14739 = (state_14757[(7)]);var inst_14739__$1 = (state_14757[(2)]);var inst_14740 = (inst_14739__$1 == null);var inst_14741 = cljs.core.not.call(null,inst_14740);var state_14757__$1 = (function (){var statearr_14759 = state_14757;(statearr_14759[(7)] = inst_14739__$1);
return statearr_14759;
})();if(inst_14741)
{var statearr_14760_14781 = state_14757__$1;(statearr_14760_14781[(1)] = (8));
} else
{var statearr_14761_14782 = state_14757__$1;(statearr_14761_14782[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (1)))
{var inst_14734 = (0);var state_14757__$1 = (function (){var statearr_14762 = state_14757;(statearr_14762[(8)] = inst_14734);
return statearr_14762;
})();var statearr_14763_14783 = state_14757__$1;(statearr_14763_14783[(2)] = null);
(statearr_14763_14783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (4)))
{var state_14757__$1 = state_14757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14757__$1,(7),ch);
} else
{if((state_val_14758 === (6)))
{var inst_14752 = (state_14757[(2)]);var state_14757__$1 = state_14757;var statearr_14764_14784 = state_14757__$1;(statearr_14764_14784[(2)] = inst_14752);
(statearr_14764_14784[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (3)))
{var inst_14754 = (state_14757[(2)]);var inst_14755 = cljs.core.async.close_BANG_.call(null,out);var state_14757__$1 = (function (){var statearr_14765 = state_14757;(statearr_14765[(9)] = inst_14754);
return statearr_14765;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14757__$1,inst_14755);
} else
{if((state_val_14758 === (2)))
{var inst_14734 = (state_14757[(8)]);var inst_14736 = (inst_14734 < n);var state_14757__$1 = state_14757;if(cljs.core.truth_(inst_14736))
{var statearr_14766_14785 = state_14757__$1;(statearr_14766_14785[(1)] = (4));
} else
{var statearr_14767_14786 = state_14757__$1;(statearr_14767_14786[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (11)))
{var inst_14734 = (state_14757[(8)]);var inst_14744 = (state_14757[(2)]);var inst_14745 = (inst_14734 + (1));var inst_14734__$1 = inst_14745;var state_14757__$1 = (function (){var statearr_14768 = state_14757;(statearr_14768[(10)] = inst_14744);
(statearr_14768[(8)] = inst_14734__$1);
return statearr_14768;
})();var statearr_14769_14787 = state_14757__$1;(statearr_14769_14787[(2)] = null);
(statearr_14769_14787[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (9)))
{var state_14757__$1 = state_14757;var statearr_14770_14788 = state_14757__$1;(statearr_14770_14788[(2)] = null);
(statearr_14770_14788[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (5)))
{var state_14757__$1 = state_14757;var statearr_14771_14789 = state_14757__$1;(statearr_14771_14789[(2)] = null);
(statearr_14771_14789[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (10)))
{var inst_14749 = (state_14757[(2)]);var state_14757__$1 = state_14757;var statearr_14772_14790 = state_14757__$1;(statearr_14772_14790[(2)] = inst_14749);
(statearr_14772_14790[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14758 === (8)))
{var inst_14739 = (state_14757[(7)]);var state_14757__$1 = state_14757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14757__$1,(11),out,inst_14739);
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
});})(c__6605__auto___14780,out))
;return ((function (switch__6590__auto__,c__6605__auto___14780,out){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_14776 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14776[(0)] = state_machine__6591__auto__);
(statearr_14776[(1)] = (1));
return statearr_14776;
});
var state_machine__6591__auto____1 = (function (state_14757){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_14757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e14777){if((e14777 instanceof Object))
{var ex__6594__auto__ = e14777;var statearr_14778_14791 = state_14757;(statearr_14778_14791[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14792 = state_14757;
state_14757 = G__14792;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_14757){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_14757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___14780,out))
})();var state__6607__auto__ = (function (){var statearr_14779 = f__6606__auto__.call(null);(statearr_14779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___14780);
return statearr_14779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___14780,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14800 = (function (ch,f,map_LT_,meta14801){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14801 = meta14801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14800.cljs$lang$type = true;
cljs.core.async.t14800.cljs$lang$ctorStr = "cljs.core.async/t14800";
cljs.core.async.t14800.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14800");
});
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14803 = (function (fn1,_,meta14801,ch,f,map_LT_,meta14804){
this.fn1 = fn1;
this._ = _;
this.meta14801 = meta14801;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14804 = meta14804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14803.cljs$lang$type = true;
cljs.core.async.t14803.cljs$lang$ctorStr = "cljs.core.async/t14803";
cljs.core.async.t14803.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14803");
});})(___$1))
;
cljs.core.async.t14803.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14803.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14793_SHARP_){return f1.call(null,(((p1__14793_SHARP_ == null))?null:self__.f.call(null,p1__14793_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14805){var self__ = this;
var _14805__$1 = this;return self__.meta14804;
});})(___$1))
;
cljs.core.async.t14803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14805,meta14804__$1){var self__ = this;
var _14805__$1 = this;return (new cljs.core.async.t14803(self__.fn1,self__._,self__.meta14801,self__.ch,self__.f,self__.map_LT_,meta14804__$1));
});})(___$1))
;
cljs.core.async.__GT_t14803 = ((function (___$1){
return (function __GT_t14803(fn1__$1,___$2,meta14801__$1,ch__$2,f__$2,map_LT___$2,meta14804){return (new cljs.core.async.t14803(fn1__$1,___$2,meta14801__$1,ch__$2,f__$2,map_LT___$2,meta14804));
});})(___$1))
;
}
return (new cljs.core.async.t14803(fn1,___$1,self__.meta14801,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14802){var self__ = this;
var _14802__$1 = this;return self__.meta14801;
});
cljs.core.async.t14800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14802,meta14801__$1){var self__ = this;
var _14802__$1 = this;return (new cljs.core.async.t14800(self__.ch,self__.f,self__.map_LT_,meta14801__$1));
});
cljs.core.async.__GT_t14800 = (function __GT_t14800(ch__$1,f__$1,map_LT___$1,meta14801){return (new cljs.core.async.t14800(ch__$1,f__$1,map_LT___$1,meta14801));
});
}
return (new cljs.core.async.t14800(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14809 = (function (ch,f,map_GT_,meta14810){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14810 = meta14810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14809.cljs$lang$type = true;
cljs.core.async.t14809.cljs$lang$ctorStr = "cljs.core.async/t14809";
cljs.core.async.t14809.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14809");
});
cljs.core.async.t14809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14809.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14811){var self__ = this;
var _14811__$1 = this;return self__.meta14810;
});
cljs.core.async.t14809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14811,meta14810__$1){var self__ = this;
var _14811__$1 = this;return (new cljs.core.async.t14809(self__.ch,self__.f,self__.map_GT_,meta14810__$1));
});
cljs.core.async.__GT_t14809 = (function __GT_t14809(ch__$1,f__$1,map_GT___$1,meta14810){return (new cljs.core.async.t14809(ch__$1,f__$1,map_GT___$1,meta14810));
});
}
return (new cljs.core.async.t14809(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14815 = (function (ch,p,filter_GT_,meta14816){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14816 = meta14816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14815.cljs$lang$type = true;
cljs.core.async.t14815.cljs$lang$ctorStr = "cljs.core.async/t14815";
cljs.core.async.t14815.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t14815");
});
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14817){var self__ = this;
var _14817__$1 = this;return self__.meta14816;
});
cljs.core.async.t14815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14817,meta14816__$1){var self__ = this;
var _14817__$1 = this;return (new cljs.core.async.t14815(self__.ch,self__.p,self__.filter_GT_,meta14816__$1));
});
cljs.core.async.__GT_t14815 = (function __GT_t14815(ch__$1,p__$1,filter_GT___$1,meta14816){return (new cljs.core.async.t14815(ch__$1,p__$1,filter_GT___$1,meta14816));
});
}
return (new cljs.core.async.t14815(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6605__auto___14900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___14900,out){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___14900,out){
return (function (state_14879){var state_val_14880 = (state_14879[(1)]);if((state_val_14880 === (7)))
{var inst_14875 = (state_14879[(2)]);var state_14879__$1 = state_14879;var statearr_14881_14901 = state_14879__$1;(statearr_14881_14901[(2)] = inst_14875);
(statearr_14881_14901[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (1)))
{var state_14879__$1 = state_14879;var statearr_14882_14902 = state_14879__$1;(statearr_14882_14902[(2)] = null);
(statearr_14882_14902[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (4)))
{var inst_14861 = (state_14879[(7)]);var inst_14861__$1 = (state_14879[(2)]);var inst_14862 = (inst_14861__$1 == null);var state_14879__$1 = (function (){var statearr_14883 = state_14879;(statearr_14883[(7)] = inst_14861__$1);
return statearr_14883;
})();if(cljs.core.truth_(inst_14862))
{var statearr_14884_14903 = state_14879__$1;(statearr_14884_14903[(1)] = (5));
} else
{var statearr_14885_14904 = state_14879__$1;(statearr_14885_14904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (6)))
{var inst_14861 = (state_14879[(7)]);var inst_14866 = p.call(null,inst_14861);var state_14879__$1 = state_14879;if(cljs.core.truth_(inst_14866))
{var statearr_14886_14905 = state_14879__$1;(statearr_14886_14905[(1)] = (8));
} else
{var statearr_14887_14906 = state_14879__$1;(statearr_14887_14906[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (3)))
{var inst_14877 = (state_14879[(2)]);var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14879__$1,inst_14877);
} else
{if((state_val_14880 === (2)))
{var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14879__$1,(4),ch);
} else
{if((state_val_14880 === (11)))
{var inst_14869 = (state_14879[(2)]);var state_14879__$1 = state_14879;var statearr_14888_14907 = state_14879__$1;(statearr_14888_14907[(2)] = inst_14869);
(statearr_14888_14907[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (9)))
{var state_14879__$1 = state_14879;var statearr_14889_14908 = state_14879__$1;(statearr_14889_14908[(2)] = null);
(statearr_14889_14908[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (5)))
{var inst_14864 = cljs.core.async.close_BANG_.call(null,out);var state_14879__$1 = state_14879;var statearr_14890_14909 = state_14879__$1;(statearr_14890_14909[(2)] = inst_14864);
(statearr_14890_14909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (10)))
{var inst_14872 = (state_14879[(2)]);var state_14879__$1 = (function (){var statearr_14891 = state_14879;(statearr_14891[(8)] = inst_14872);
return statearr_14891;
})();var statearr_14892_14910 = state_14879__$1;(statearr_14892_14910[(2)] = null);
(statearr_14892_14910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (8)))
{var inst_14861 = (state_14879[(7)]);var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14879__$1,(11),out,inst_14861);
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
});})(c__6605__auto___14900,out))
;return ((function (switch__6590__auto__,c__6605__auto___14900,out){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_14896 = [null,null,null,null,null,null,null,null,null];(statearr_14896[(0)] = state_machine__6591__auto__);
(statearr_14896[(1)] = (1));
return statearr_14896;
});
var state_machine__6591__auto____1 = (function (state_14879){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_14879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e14897){if((e14897 instanceof Object))
{var ex__6594__auto__ = e14897;var statearr_14898_14911 = state_14879;(statearr_14898_14911[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14912 = state_14879;
state_14879 = G__14912;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_14879){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_14879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___14900,out))
})();var state__6607__auto__ = (function (){var statearr_14899 = f__6606__auto__.call(null);(statearr_14899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___14900);
return statearr_14899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___14900,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6605__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto__){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto__){
return (function (state_15078){var state_val_15079 = (state_15078[(1)]);if((state_val_15079 === (7)))
{var inst_15074 = (state_15078[(2)]);var state_15078__$1 = state_15078;var statearr_15080_15121 = state_15078__$1;(statearr_15080_15121[(2)] = inst_15074);
(statearr_15080_15121[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (20)))
{var inst_15044 = (state_15078[(7)]);var inst_15055 = (state_15078[(2)]);var inst_15056 = cljs.core.next.call(null,inst_15044);var inst_15030 = inst_15056;var inst_15031 = null;var inst_15032 = (0);var inst_15033 = (0);var state_15078__$1 = (function (){var statearr_15081 = state_15078;(statearr_15081[(8)] = inst_15033);
(statearr_15081[(9)] = inst_15030);
(statearr_15081[(10)] = inst_15032);
(statearr_15081[(11)] = inst_15031);
(statearr_15081[(12)] = inst_15055);
return statearr_15081;
})();var statearr_15082_15122 = state_15078__$1;(statearr_15082_15122[(2)] = null);
(statearr_15082_15122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (1)))
{var state_15078__$1 = state_15078;var statearr_15083_15123 = state_15078__$1;(statearr_15083_15123[(2)] = null);
(statearr_15083_15123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (4)))
{var inst_15019 = (state_15078[(13)]);var inst_15019__$1 = (state_15078[(2)]);var inst_15020 = (inst_15019__$1 == null);var state_15078__$1 = (function (){var statearr_15084 = state_15078;(statearr_15084[(13)] = inst_15019__$1);
return statearr_15084;
})();if(cljs.core.truth_(inst_15020))
{var statearr_15085_15124 = state_15078__$1;(statearr_15085_15124[(1)] = (5));
} else
{var statearr_15086_15125 = state_15078__$1;(statearr_15086_15125[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (15)))
{var state_15078__$1 = state_15078;var statearr_15090_15126 = state_15078__$1;(statearr_15090_15126[(2)] = null);
(statearr_15090_15126[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (21)))
{var state_15078__$1 = state_15078;var statearr_15091_15127 = state_15078__$1;(statearr_15091_15127[(2)] = null);
(statearr_15091_15127[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (13)))
{var inst_15033 = (state_15078[(8)]);var inst_15030 = (state_15078[(9)]);var inst_15032 = (state_15078[(10)]);var inst_15031 = (state_15078[(11)]);var inst_15040 = (state_15078[(2)]);var inst_15041 = (inst_15033 + (1));var tmp15087 = inst_15030;var tmp15088 = inst_15032;var tmp15089 = inst_15031;var inst_15030__$1 = tmp15087;var inst_15031__$1 = tmp15089;var inst_15032__$1 = tmp15088;var inst_15033__$1 = inst_15041;var state_15078__$1 = (function (){var statearr_15092 = state_15078;(statearr_15092[(14)] = inst_15040);
(statearr_15092[(8)] = inst_15033__$1);
(statearr_15092[(9)] = inst_15030__$1);
(statearr_15092[(10)] = inst_15032__$1);
(statearr_15092[(11)] = inst_15031__$1);
return statearr_15092;
})();var statearr_15093_15128 = state_15078__$1;(statearr_15093_15128[(2)] = null);
(statearr_15093_15128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (22)))
{var state_15078__$1 = state_15078;var statearr_15094_15129 = state_15078__$1;(statearr_15094_15129[(2)] = null);
(statearr_15094_15129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (6)))
{var inst_15019 = (state_15078[(13)]);var inst_15028 = f.call(null,inst_15019);var inst_15029 = cljs.core.seq.call(null,inst_15028);var inst_15030 = inst_15029;var inst_15031 = null;var inst_15032 = (0);var inst_15033 = (0);var state_15078__$1 = (function (){var statearr_15095 = state_15078;(statearr_15095[(8)] = inst_15033);
(statearr_15095[(9)] = inst_15030);
(statearr_15095[(10)] = inst_15032);
(statearr_15095[(11)] = inst_15031);
return statearr_15095;
})();var statearr_15096_15130 = state_15078__$1;(statearr_15096_15130[(2)] = null);
(statearr_15096_15130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (17)))
{var inst_15044 = (state_15078[(7)]);var inst_15048 = cljs.core.chunk_first.call(null,inst_15044);var inst_15049 = cljs.core.chunk_rest.call(null,inst_15044);var inst_15050 = cljs.core.count.call(null,inst_15048);var inst_15030 = inst_15049;var inst_15031 = inst_15048;var inst_15032 = inst_15050;var inst_15033 = (0);var state_15078__$1 = (function (){var statearr_15097 = state_15078;(statearr_15097[(8)] = inst_15033);
(statearr_15097[(9)] = inst_15030);
(statearr_15097[(10)] = inst_15032);
(statearr_15097[(11)] = inst_15031);
return statearr_15097;
})();var statearr_15098_15131 = state_15078__$1;(statearr_15098_15131[(2)] = null);
(statearr_15098_15131[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (3)))
{var inst_15076 = (state_15078[(2)]);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15078__$1,inst_15076);
} else
{if((state_val_15079 === (12)))
{var inst_15064 = (state_15078[(2)]);var state_15078__$1 = state_15078;var statearr_15099_15132 = state_15078__$1;(statearr_15099_15132[(2)] = inst_15064);
(statearr_15099_15132[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (2)))
{var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15078__$1,(4),in$);
} else
{if((state_val_15079 === (23)))
{var inst_15072 = (state_15078[(2)]);var state_15078__$1 = state_15078;var statearr_15100_15133 = state_15078__$1;(statearr_15100_15133[(2)] = inst_15072);
(statearr_15100_15133[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (19)))
{var inst_15059 = (state_15078[(2)]);var state_15078__$1 = state_15078;var statearr_15101_15134 = state_15078__$1;(statearr_15101_15134[(2)] = inst_15059);
(statearr_15101_15134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (11)))
{var inst_15030 = (state_15078[(9)]);var inst_15044 = (state_15078[(7)]);var inst_15044__$1 = cljs.core.seq.call(null,inst_15030);var state_15078__$1 = (function (){var statearr_15102 = state_15078;(statearr_15102[(7)] = inst_15044__$1);
return statearr_15102;
})();if(inst_15044__$1)
{var statearr_15103_15135 = state_15078__$1;(statearr_15103_15135[(1)] = (14));
} else
{var statearr_15104_15136 = state_15078__$1;(statearr_15104_15136[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (9)))
{var inst_15066 = (state_15078[(2)]);var inst_15067 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15078__$1 = (function (){var statearr_15105 = state_15078;(statearr_15105[(15)] = inst_15066);
return statearr_15105;
})();if(cljs.core.truth_(inst_15067))
{var statearr_15106_15137 = state_15078__$1;(statearr_15106_15137[(1)] = (21));
} else
{var statearr_15107_15138 = state_15078__$1;(statearr_15107_15138[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (5)))
{var inst_15022 = cljs.core.async.close_BANG_.call(null,out);var state_15078__$1 = state_15078;var statearr_15108_15139 = state_15078__$1;(statearr_15108_15139[(2)] = inst_15022);
(statearr_15108_15139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (14)))
{var inst_15044 = (state_15078[(7)]);var inst_15046 = cljs.core.chunked_seq_QMARK_.call(null,inst_15044);var state_15078__$1 = state_15078;if(inst_15046)
{var statearr_15109_15140 = state_15078__$1;(statearr_15109_15140[(1)] = (17));
} else
{var statearr_15110_15141 = state_15078__$1;(statearr_15110_15141[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (16)))
{var inst_15062 = (state_15078[(2)]);var state_15078__$1 = state_15078;var statearr_15111_15142 = state_15078__$1;(statearr_15111_15142[(2)] = inst_15062);
(statearr_15111_15142[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15079 === (10)))
{var inst_15033 = (state_15078[(8)]);var inst_15031 = (state_15078[(11)]);var inst_15038 = cljs.core._nth.call(null,inst_15031,inst_15033);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15078__$1,(13),out,inst_15038);
} else
{if((state_val_15079 === (18)))
{var inst_15044 = (state_15078[(7)]);var inst_15053 = cljs.core.first.call(null,inst_15044);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15078__$1,(20),out,inst_15053);
} else
{if((state_val_15079 === (8)))
{var inst_15033 = (state_15078[(8)]);var inst_15032 = (state_15078[(10)]);var inst_15035 = (inst_15033 < inst_15032);var inst_15036 = inst_15035;var state_15078__$1 = state_15078;if(cljs.core.truth_(inst_15036))
{var statearr_15112_15143 = state_15078__$1;(statearr_15112_15143[(1)] = (10));
} else
{var statearr_15113_15144 = state_15078__$1;(statearr_15113_15144[(1)] = (11));
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
});})(c__6605__auto__))
;return ((function (switch__6590__auto__,c__6605__auto__){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_15117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15117[(0)] = state_machine__6591__auto__);
(statearr_15117[(1)] = (1));
return statearr_15117;
});
var state_machine__6591__auto____1 = (function (state_15078){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_15078);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e15118){if((e15118 instanceof Object))
{var ex__6594__auto__ = e15118;var statearr_15119_15145 = state_15078;(statearr_15119_15145[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15118;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15146 = state_15078;
state_15078 = G__15146;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_15078){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_15078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto__))
})();var state__6607__auto__ = (function (){var statearr_15120 = f__6606__auto__.call(null);(statearr_15120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto__);
return statearr_15120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto__))
);
return c__6605__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6605__auto___15243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___15243,out){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___15243,out){
return (function (state_15218){var state_val_15219 = (state_15218[(1)]);if((state_val_15219 === (7)))
{var inst_15213 = (state_15218[(2)]);var state_15218__$1 = state_15218;var statearr_15220_15244 = state_15218__$1;(statearr_15220_15244[(2)] = inst_15213);
(statearr_15220_15244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (1)))
{var inst_15195 = null;var state_15218__$1 = (function (){var statearr_15221 = state_15218;(statearr_15221[(7)] = inst_15195);
return statearr_15221;
})();var statearr_15222_15245 = state_15218__$1;(statearr_15222_15245[(2)] = null);
(statearr_15222_15245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (4)))
{var inst_15198 = (state_15218[(8)]);var inst_15198__$1 = (state_15218[(2)]);var inst_15199 = (inst_15198__$1 == null);var inst_15200 = cljs.core.not.call(null,inst_15199);var state_15218__$1 = (function (){var statearr_15223 = state_15218;(statearr_15223[(8)] = inst_15198__$1);
return statearr_15223;
})();if(inst_15200)
{var statearr_15224_15246 = state_15218__$1;(statearr_15224_15246[(1)] = (5));
} else
{var statearr_15225_15247 = state_15218__$1;(statearr_15225_15247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (6)))
{var state_15218__$1 = state_15218;var statearr_15226_15248 = state_15218__$1;(statearr_15226_15248[(2)] = null);
(statearr_15226_15248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (3)))
{var inst_15215 = (state_15218[(2)]);var inst_15216 = cljs.core.async.close_BANG_.call(null,out);var state_15218__$1 = (function (){var statearr_15227 = state_15218;(statearr_15227[(9)] = inst_15215);
return statearr_15227;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15218__$1,inst_15216);
} else
{if((state_val_15219 === (2)))
{var state_15218__$1 = state_15218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15218__$1,(4),ch);
} else
{if((state_val_15219 === (11)))
{var inst_15198 = (state_15218[(8)]);var inst_15207 = (state_15218[(2)]);var inst_15195 = inst_15198;var state_15218__$1 = (function (){var statearr_15228 = state_15218;(statearr_15228[(7)] = inst_15195);
(statearr_15228[(10)] = inst_15207);
return statearr_15228;
})();var statearr_15229_15249 = state_15218__$1;(statearr_15229_15249[(2)] = null);
(statearr_15229_15249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (9)))
{var inst_15198 = (state_15218[(8)]);var state_15218__$1 = state_15218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15218__$1,(11),out,inst_15198);
} else
{if((state_val_15219 === (5)))
{var inst_15198 = (state_15218[(8)]);var inst_15195 = (state_15218[(7)]);var inst_15202 = cljs.core._EQ_.call(null,inst_15198,inst_15195);var state_15218__$1 = state_15218;if(inst_15202)
{var statearr_15231_15250 = state_15218__$1;(statearr_15231_15250[(1)] = (8));
} else
{var statearr_15232_15251 = state_15218__$1;(statearr_15232_15251[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (10)))
{var inst_15210 = (state_15218[(2)]);var state_15218__$1 = state_15218;var statearr_15233_15252 = state_15218__$1;(statearr_15233_15252[(2)] = inst_15210);
(statearr_15233_15252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15219 === (8)))
{var inst_15195 = (state_15218[(7)]);var tmp15230 = inst_15195;var inst_15195__$1 = tmp15230;var state_15218__$1 = (function (){var statearr_15234 = state_15218;(statearr_15234[(7)] = inst_15195__$1);
return statearr_15234;
})();var statearr_15235_15253 = state_15218__$1;(statearr_15235_15253[(2)] = null);
(statearr_15235_15253[(1)] = (2));
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
});})(c__6605__auto___15243,out))
;return ((function (switch__6590__auto__,c__6605__auto___15243,out){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_15239 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15239[(0)] = state_machine__6591__auto__);
(statearr_15239[(1)] = (1));
return statearr_15239;
});
var state_machine__6591__auto____1 = (function (state_15218){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_15218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e15240){if((e15240 instanceof Object))
{var ex__6594__auto__ = e15240;var statearr_15241_15254 = state_15218;(statearr_15241_15254[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15255 = state_15218;
state_15218 = G__15255;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_15218){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_15218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___15243,out))
})();var state__6607__auto__ = (function (){var statearr_15242 = f__6606__auto__.call(null);(statearr_15242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___15243);
return statearr_15242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___15243,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6605__auto___15390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___15390,out){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___15390,out){
return (function (state_15360){var state_val_15361 = (state_15360[(1)]);if((state_val_15361 === (7)))
{var inst_15356 = (state_15360[(2)]);var state_15360__$1 = state_15360;var statearr_15362_15391 = state_15360__$1;(statearr_15362_15391[(2)] = inst_15356);
(statearr_15362_15391[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (1)))
{var inst_15323 = (new Array(n));var inst_15324 = inst_15323;var inst_15325 = (0);var state_15360__$1 = (function (){var statearr_15363 = state_15360;(statearr_15363[(7)] = inst_15324);
(statearr_15363[(8)] = inst_15325);
return statearr_15363;
})();var statearr_15364_15392 = state_15360__$1;(statearr_15364_15392[(2)] = null);
(statearr_15364_15392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (4)))
{var inst_15328 = (state_15360[(9)]);var inst_15328__$1 = (state_15360[(2)]);var inst_15329 = (inst_15328__$1 == null);var inst_15330 = cljs.core.not.call(null,inst_15329);var state_15360__$1 = (function (){var statearr_15365 = state_15360;(statearr_15365[(9)] = inst_15328__$1);
return statearr_15365;
})();if(inst_15330)
{var statearr_15366_15393 = state_15360__$1;(statearr_15366_15393[(1)] = (5));
} else
{var statearr_15367_15394 = state_15360__$1;(statearr_15367_15394[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (15)))
{var inst_15350 = (state_15360[(2)]);var state_15360__$1 = state_15360;var statearr_15368_15395 = state_15360__$1;(statearr_15368_15395[(2)] = inst_15350);
(statearr_15368_15395[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (13)))
{var state_15360__$1 = state_15360;var statearr_15369_15396 = state_15360__$1;(statearr_15369_15396[(2)] = null);
(statearr_15369_15396[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (6)))
{var inst_15325 = (state_15360[(8)]);var inst_15346 = (inst_15325 > (0));var state_15360__$1 = state_15360;if(cljs.core.truth_(inst_15346))
{var statearr_15370_15397 = state_15360__$1;(statearr_15370_15397[(1)] = (12));
} else
{var statearr_15371_15398 = state_15360__$1;(statearr_15371_15398[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (3)))
{var inst_15358 = (state_15360[(2)]);var state_15360__$1 = state_15360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15360__$1,inst_15358);
} else
{if((state_val_15361 === (12)))
{var inst_15324 = (state_15360[(7)]);var inst_15348 = cljs.core.vec.call(null,inst_15324);var state_15360__$1 = state_15360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15360__$1,(15),out,inst_15348);
} else
{if((state_val_15361 === (2)))
{var state_15360__$1 = state_15360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15360__$1,(4),ch);
} else
{if((state_val_15361 === (11)))
{var inst_15340 = (state_15360[(2)]);var inst_15341 = (new Array(n));var inst_15324 = inst_15341;var inst_15325 = (0);var state_15360__$1 = (function (){var statearr_15372 = state_15360;(statearr_15372[(10)] = inst_15340);
(statearr_15372[(7)] = inst_15324);
(statearr_15372[(8)] = inst_15325);
return statearr_15372;
})();var statearr_15373_15399 = state_15360__$1;(statearr_15373_15399[(2)] = null);
(statearr_15373_15399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (9)))
{var inst_15324 = (state_15360[(7)]);var inst_15338 = cljs.core.vec.call(null,inst_15324);var state_15360__$1 = state_15360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15360__$1,(11),out,inst_15338);
} else
{if((state_val_15361 === (5)))
{var inst_15333 = (state_15360[(11)]);var inst_15324 = (state_15360[(7)]);var inst_15325 = (state_15360[(8)]);var inst_15328 = (state_15360[(9)]);var inst_15332 = (inst_15324[inst_15325] = inst_15328);var inst_15333__$1 = (inst_15325 + (1));var inst_15334 = (inst_15333__$1 < n);var state_15360__$1 = (function (){var statearr_15374 = state_15360;(statearr_15374[(11)] = inst_15333__$1);
(statearr_15374[(12)] = inst_15332);
return statearr_15374;
})();if(cljs.core.truth_(inst_15334))
{var statearr_15375_15400 = state_15360__$1;(statearr_15375_15400[(1)] = (8));
} else
{var statearr_15376_15401 = state_15360__$1;(statearr_15376_15401[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (14)))
{var inst_15353 = (state_15360[(2)]);var inst_15354 = cljs.core.async.close_BANG_.call(null,out);var state_15360__$1 = (function (){var statearr_15378 = state_15360;(statearr_15378[(13)] = inst_15353);
return statearr_15378;
})();var statearr_15379_15402 = state_15360__$1;(statearr_15379_15402[(2)] = inst_15354);
(statearr_15379_15402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (10)))
{var inst_15344 = (state_15360[(2)]);var state_15360__$1 = state_15360;var statearr_15380_15403 = state_15360__$1;(statearr_15380_15403[(2)] = inst_15344);
(statearr_15380_15403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15361 === (8)))
{var inst_15333 = (state_15360[(11)]);var inst_15324 = (state_15360[(7)]);var tmp15377 = inst_15324;var inst_15324__$1 = tmp15377;var inst_15325 = inst_15333;var state_15360__$1 = (function (){var statearr_15381 = state_15360;(statearr_15381[(7)] = inst_15324__$1);
(statearr_15381[(8)] = inst_15325);
return statearr_15381;
})();var statearr_15382_15404 = state_15360__$1;(statearr_15382_15404[(2)] = null);
(statearr_15382_15404[(1)] = (2));
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
});})(c__6605__auto___15390,out))
;return ((function (switch__6590__auto__,c__6605__auto___15390,out){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_15386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15386[(0)] = state_machine__6591__auto__);
(statearr_15386[(1)] = (1));
return statearr_15386;
});
var state_machine__6591__auto____1 = (function (state_15360){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_15360);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e15387){if((e15387 instanceof Object))
{var ex__6594__auto__ = e15387;var statearr_15388_15405 = state_15360;(statearr_15388_15405[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15406 = state_15360;
state_15360 = G__15406;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_15360){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_15360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___15390,out))
})();var state__6607__auto__ = (function (){var statearr_15389 = f__6606__auto__.call(null);(statearr_15389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___15390);
return statearr_15389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___15390,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6605__auto___15549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___15549,out){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___15549,out){
return (function (state_15519){var state_val_15520 = (state_15519[(1)]);if((state_val_15520 === (7)))
{var inst_15515 = (state_15519[(2)]);var state_15519__$1 = state_15519;var statearr_15521_15550 = state_15519__$1;(statearr_15521_15550[(2)] = inst_15515);
(statearr_15521_15550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (1)))
{var inst_15478 = [];var inst_15479 = inst_15478;var inst_15480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15519__$1 = (function (){var statearr_15522 = state_15519;(statearr_15522[(7)] = inst_15480);
(statearr_15522[(8)] = inst_15479);
return statearr_15522;
})();var statearr_15523_15551 = state_15519__$1;(statearr_15523_15551[(2)] = null);
(statearr_15523_15551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (4)))
{var inst_15483 = (state_15519[(9)]);var inst_15483__$1 = (state_15519[(2)]);var inst_15484 = (inst_15483__$1 == null);var inst_15485 = cljs.core.not.call(null,inst_15484);var state_15519__$1 = (function (){var statearr_15524 = state_15519;(statearr_15524[(9)] = inst_15483__$1);
return statearr_15524;
})();if(inst_15485)
{var statearr_15525_15552 = state_15519__$1;(statearr_15525_15552[(1)] = (5));
} else
{var statearr_15526_15553 = state_15519__$1;(statearr_15526_15553[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (15)))
{var inst_15509 = (state_15519[(2)]);var state_15519__$1 = state_15519;var statearr_15527_15554 = state_15519__$1;(statearr_15527_15554[(2)] = inst_15509);
(statearr_15527_15554[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (13)))
{var state_15519__$1 = state_15519;var statearr_15528_15555 = state_15519__$1;(statearr_15528_15555[(2)] = null);
(statearr_15528_15555[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (6)))
{var inst_15479 = (state_15519[(8)]);var inst_15504 = inst_15479.length;var inst_15505 = (inst_15504 > (0));var state_15519__$1 = state_15519;if(cljs.core.truth_(inst_15505))
{var statearr_15529_15556 = state_15519__$1;(statearr_15529_15556[(1)] = (12));
} else
{var statearr_15530_15557 = state_15519__$1;(statearr_15530_15557[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (3)))
{var inst_15517 = (state_15519[(2)]);var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15519__$1,inst_15517);
} else
{if((state_val_15520 === (12)))
{var inst_15479 = (state_15519[(8)]);var inst_15507 = cljs.core.vec.call(null,inst_15479);var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15519__$1,(15),out,inst_15507);
} else
{if((state_val_15520 === (2)))
{var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15519__$1,(4),ch);
} else
{if((state_val_15520 === (11)))
{var inst_15483 = (state_15519[(9)]);var inst_15487 = (state_15519[(10)]);var inst_15497 = (state_15519[(2)]);var inst_15498 = [];var inst_15499 = inst_15498.push(inst_15483);var inst_15479 = inst_15498;var inst_15480 = inst_15487;var state_15519__$1 = (function (){var statearr_15531 = state_15519;(statearr_15531[(11)] = inst_15497);
(statearr_15531[(12)] = inst_15499);
(statearr_15531[(7)] = inst_15480);
(statearr_15531[(8)] = inst_15479);
return statearr_15531;
})();var statearr_15532_15558 = state_15519__$1;(statearr_15532_15558[(2)] = null);
(statearr_15532_15558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (9)))
{var inst_15479 = (state_15519[(8)]);var inst_15495 = cljs.core.vec.call(null,inst_15479);var state_15519__$1 = state_15519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15519__$1,(11),out,inst_15495);
} else
{if((state_val_15520 === (5)))
{var inst_15480 = (state_15519[(7)]);var inst_15483 = (state_15519[(9)]);var inst_15487 = (state_15519[(10)]);var inst_15487__$1 = f.call(null,inst_15483);var inst_15488 = cljs.core._EQ_.call(null,inst_15487__$1,inst_15480);var inst_15489 = cljs.core.keyword_identical_QMARK_.call(null,inst_15480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15490 = (inst_15488) || (inst_15489);var state_15519__$1 = (function (){var statearr_15533 = state_15519;(statearr_15533[(10)] = inst_15487__$1);
return statearr_15533;
})();if(cljs.core.truth_(inst_15490))
{var statearr_15534_15559 = state_15519__$1;(statearr_15534_15559[(1)] = (8));
} else
{var statearr_15535_15560 = state_15519__$1;(statearr_15535_15560[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (14)))
{var inst_15512 = (state_15519[(2)]);var inst_15513 = cljs.core.async.close_BANG_.call(null,out);var state_15519__$1 = (function (){var statearr_15537 = state_15519;(statearr_15537[(13)] = inst_15512);
return statearr_15537;
})();var statearr_15538_15561 = state_15519__$1;(statearr_15538_15561[(2)] = inst_15513);
(statearr_15538_15561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (10)))
{var inst_15502 = (state_15519[(2)]);var state_15519__$1 = state_15519;var statearr_15539_15562 = state_15519__$1;(statearr_15539_15562[(2)] = inst_15502);
(statearr_15539_15562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15520 === (8)))
{var inst_15483 = (state_15519[(9)]);var inst_15479 = (state_15519[(8)]);var inst_15487 = (state_15519[(10)]);var inst_15492 = inst_15479.push(inst_15483);var tmp15536 = inst_15479;var inst_15479__$1 = tmp15536;var inst_15480 = inst_15487;var state_15519__$1 = (function (){var statearr_15540 = state_15519;(statearr_15540[(7)] = inst_15480);
(statearr_15540[(8)] = inst_15479__$1);
(statearr_15540[(14)] = inst_15492);
return statearr_15540;
})();var statearr_15541_15563 = state_15519__$1;(statearr_15541_15563[(2)] = null);
(statearr_15541_15563[(1)] = (2));
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
});})(c__6605__auto___15549,out))
;return ((function (switch__6590__auto__,c__6605__auto___15549,out){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_15545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15545[(0)] = state_machine__6591__auto__);
(statearr_15545[(1)] = (1));
return statearr_15545;
});
var state_machine__6591__auto____1 = (function (state_15519){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_15519);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e15546){if((e15546 instanceof Object))
{var ex__6594__auto__ = e15546;var statearr_15547_15564 = state_15519;(statearr_15547_15564[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15565 = state_15519;
state_15519 = G__15565;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_15519){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_15519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___15549,out))
})();var state__6607__auto__ = (function (){var statearr_15548 = f__6606__auto__.call(null);(statearr_15548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___15549);
return statearr_15548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___15549,out))
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
