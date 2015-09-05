// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t13814 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13814 = (function (fn_handler,f,meta13815){
this.fn_handler = fn_handler;
this.f = f;
this.meta13815 = meta13815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13816,meta13815__$1){
var self__ = this;
var _13816__$1 = this;
return (new cljs.core.async.t13814(self__.fn_handler,self__.f,meta13815__$1));
});

cljs.core.async.t13814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13816){
var self__ = this;
var _13816__$1 = this;
return self__.meta13815;
});

cljs.core.async.t13814.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13815","meta13815",-772246105,null)], null);
});

cljs.core.async.t13814.cljs$lang$type = true;

cljs.core.async.t13814.cljs$lang$ctorStr = "cljs.core.async/t13814";

cljs.core.async.t13814.cljs$lang$ctorPrWriter = (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t13814");
});

cljs.core.async.__GT_t13814 = (function cljs$core$async$fn_handler_$___GT_t13814(fn_handler__$1,f__$1,meta13815){
return (new cljs.core.async.t13814(fn_handler__$1,f__$1,meta13815));
});

}

return (new cljs.core.async.t13814(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
cljs.core.async.chan = (function cljs$core$async$chan(){
var args13819 = [];
var len__5499__auto___13822 = arguments.length;
var i__5500__auto___13823 = (0);
while(true){
if((i__5500__auto___13823 < len__5499__auto___13822)){
args13819.push((arguments[i__5500__auto___13823]));

var G__13824 = (i__5500__auto___13823 + (1));
i__5500__auto___13823 = G__13824;
continue;
} else {
}
break;
}

var G__13821 = args13819.length;
switch (G__13821) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13819.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args13826 = [];
var len__5499__auto___13829 = arguments.length;
var i__5500__auto___13830 = (0);
while(true){
if((i__5500__auto___13830 < len__5499__auto___13829)){
args13826.push((arguments[i__5500__auto___13830]));

var G__13831 = (i__5500__auto___13830 + (1));
i__5500__auto___13830 = G__13831;
continue;
} else {
}
break;
}

var G__13828 = args13826.length;
switch (G__13828) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13826.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13833 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13833);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13833,ret){
return (function (){
return fn1.call(null,val_13833);
});})(val_13833,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args13834 = [];
var len__5499__auto___13837 = arguments.length;
var i__5500__auto___13838 = (0);
while(true){
if((i__5500__auto___13838 < len__5499__auto___13837)){
args13834.push((arguments[i__5500__auto___13838]));

var G__13839 = (i__5500__auto___13838 + (1));
i__5500__auto___13838 = G__13839;
continue;
} else {
}
break;
}

var G__13836 = args13834.length;
switch (G__13836) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13834.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5344__auto___13841 = n;
var x_13842 = (0);
while(true){
if((x_13842 < n__5344__auto___13841)){
(a[x_13842] = (0));

var G__13843 = (x_13842 + (1));
x_13842 = G__13843;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13844 = (i + (1));
i = G__13844;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13848 = (function (alt_flag,flag,meta13849){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13849 = meta13849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13850,meta13849__$1){
var self__ = this;
var _13850__$1 = this;
return (new cljs.core.async.t13848(self__.alt_flag,self__.flag,meta13849__$1));
});})(flag))
;

cljs.core.async.t13848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13850){
var self__ = this;
var _13850__$1 = this;
return self__.meta13849;
});})(flag))
;

cljs.core.async.t13848.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13848.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13849","meta13849",-270052681,null)], null);
});})(flag))
;

cljs.core.async.t13848.cljs$lang$type = true;

cljs.core.async.t13848.cljs$lang$ctorStr = "cljs.core.async/t13848";

cljs.core.async.t13848.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t13848");
});})(flag))
;

cljs.core.async.__GT_t13848 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13848(alt_flag__$1,flag__$1,meta13849){
return (new cljs.core.async.t13848(alt_flag__$1,flag__$1,meta13849));
});})(flag))
;

}

return (new cljs.core.async.t13848(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13854 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13854 = (function (alt_handler,flag,cb,meta13855){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13855 = meta13855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13856,meta13855__$1){
var self__ = this;
var _13856__$1 = this;
return (new cljs.core.async.t13854(self__.alt_handler,self__.flag,self__.cb,meta13855__$1));
});

cljs.core.async.t13854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13856){
var self__ = this;
var _13856__$1 = this;
return self__.meta13855;
});

cljs.core.async.t13854.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13854.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13854.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13855","meta13855",-197809471,null)], null);
});

cljs.core.async.t13854.cljs$lang$type = true;

cljs.core.async.t13854.cljs$lang$ctorStr = "cljs.core.async/t13854";

cljs.core.async.t13854.cljs$lang$ctorPrWriter = (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t13854");
});

cljs.core.async.__GT_t13854 = (function cljs$core$async$alt_handler_$___GT_t13854(alt_handler__$1,flag__$1,cb__$1,meta13855){
return (new cljs.core.async.t13854(alt_handler__$1,flag__$1,cb__$1,meta13855));
});

}

return (new cljs.core.async.t13854(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13857_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13857_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13858_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13858_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4460__auto__ = wport;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13859 = (i + (1));
i = G__13859;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4460__auto__ = ret;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4448__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4448__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4448__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
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
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__5506__auto__ = [];
var len__5499__auto___13865 = arguments.length;
var i__5500__auto___13866 = (0);
while(true){
if((i__5500__auto___13866 < len__5499__auto___13865)){
args__5506__auto__.push((arguments[i__5500__auto___13866]));

var G__13867 = (i__5500__auto___13866 + (1));
i__5500__auto___13866 = G__13867;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13862){
var map__13863 = p__13862;
var map__13863__$1 = ((((!((map__13863 == null)))?((((map__13863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13863):map__13863);
var opts = map__13863__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13860){
var G__13861 = cljs.core.first.call(null,seq13860);
var seq13860__$1 = cljs.core.next.call(null,seq13860);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13861,seq13860__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args13868 = [];
var len__5499__auto___13918 = arguments.length;
var i__5500__auto___13919 = (0);
while(true){
if((i__5500__auto___13919 < len__5499__auto___13918)){
args13868.push((arguments[i__5500__auto___13919]));

var G__13920 = (i__5500__auto___13919 + (1));
i__5500__auto___13919 = G__13920;
continue;
} else {
}
break;
}

var G__13870 = args13868.length;
switch (G__13870) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13868.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8508__auto___13922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___13922){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___13922){
return (function (state_13894){
var state_val_13895 = (state_13894[(1)]);
if((state_val_13895 === (7))){
var inst_13890 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13896_13923 = state_13894__$1;
(statearr_13896_13923[(2)] = inst_13890);

(statearr_13896_13923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (1))){
var state_13894__$1 = state_13894;
var statearr_13897_13924 = state_13894__$1;
(statearr_13897_13924[(2)] = null);

(statearr_13897_13924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (4))){
var inst_13873 = (state_13894[(7)]);
var inst_13873__$1 = (state_13894[(2)]);
var inst_13874 = (inst_13873__$1 == null);
var state_13894__$1 = (function (){var statearr_13898 = state_13894;
(statearr_13898[(7)] = inst_13873__$1);

return statearr_13898;
})();
if(cljs.core.truth_(inst_13874)){
var statearr_13899_13925 = state_13894__$1;
(statearr_13899_13925[(1)] = (5));

} else {
var statearr_13900_13926 = state_13894__$1;
(statearr_13900_13926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (13))){
var state_13894__$1 = state_13894;
var statearr_13901_13927 = state_13894__$1;
(statearr_13901_13927[(2)] = null);

(statearr_13901_13927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (6))){
var inst_13873 = (state_13894[(7)]);
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13894__$1,(11),to,inst_13873);
} else {
if((state_val_13895 === (3))){
var inst_13892 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13894__$1,inst_13892);
} else {
if((state_val_13895 === (12))){
var state_13894__$1 = state_13894;
var statearr_13902_13928 = state_13894__$1;
(statearr_13902_13928[(2)] = null);

(statearr_13902_13928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (2))){
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13894__$1,(4),from);
} else {
if((state_val_13895 === (11))){
var inst_13883 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
if(cljs.core.truth_(inst_13883)){
var statearr_13903_13929 = state_13894__$1;
(statearr_13903_13929[(1)] = (12));

} else {
var statearr_13904_13930 = state_13894__$1;
(statearr_13904_13930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (9))){
var state_13894__$1 = state_13894;
var statearr_13905_13931 = state_13894__$1;
(statearr_13905_13931[(2)] = null);

(statearr_13905_13931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (5))){
var state_13894__$1 = state_13894;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13906_13932 = state_13894__$1;
(statearr_13906_13932[(1)] = (8));

} else {
var statearr_13907_13933 = state_13894__$1;
(statearr_13907_13933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (14))){
var inst_13888 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13908_13934 = state_13894__$1;
(statearr_13908_13934[(2)] = inst_13888);

(statearr_13908_13934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (10))){
var inst_13880 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13909_13935 = state_13894__$1;
(statearr_13909_13935[(2)] = inst_13880);

(statearr_13909_13935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (8))){
var inst_13877 = cljs.core.async.close_BANG_.call(null,to);
var state_13894__$1 = state_13894;
var statearr_13910_13936 = state_13894__$1;
(statearr_13910_13936[(2)] = inst_13877);

(statearr_13910_13936[(1)] = (10));


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
});})(c__8508__auto___13922))
;
return ((function (switch__8433__auto__,c__8508__auto___13922){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_13914 = [null,null,null,null,null,null,null,null];
(statearr_13914[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_13914[(1)] = (1));

return statearr_13914;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_13894){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_13894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e13915){if((e13915 instanceof Object)){
var ex__8437__auto__ = e13915;
var statearr_13916_13937 = state_13894;
(statearr_13916_13937[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13938 = state_13894;
state_13894 = G__13938;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_13894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_13894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___13922))
})();
var state__8510__auto__ = (function (){var statearr_13917 = f__8509__auto__.call(null);
(statearr_13917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___13922);

return statearr_13917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___13922))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14122){
var vec__14123 = p__14122;
var v = cljs.core.nth.call(null,vec__14123,(0),null);
var p = cljs.core.nth.call(null,vec__14123,(1),null);
var job = vec__14123;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8508__auto___14305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___14305,res,vec__14123,v,p,job,jobs,results){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___14305,res,vec__14123,v,p,job,jobs,results){
return (function (state_14128){
var state_val_14129 = (state_14128[(1)]);
if((state_val_14129 === (1))){
var state_14128__$1 = state_14128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14128__$1,(2),res,v);
} else {
if((state_val_14129 === (2))){
var inst_14125 = (state_14128[(2)]);
var inst_14126 = cljs.core.async.close_BANG_.call(null,res);
var state_14128__$1 = (function (){var statearr_14130 = state_14128;
(statearr_14130[(7)] = inst_14125);

return statearr_14130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14128__$1,inst_14126);
} else {
return null;
}
}
});})(c__8508__auto___14305,res,vec__14123,v,p,job,jobs,results))
;
return ((function (switch__8433__auto__,c__8508__auto___14305,res,vec__14123,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0 = (function (){
var statearr_14134 = [null,null,null,null,null,null,null,null];
(statearr_14134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__);

(statearr_14134[(1)] = (1));

return statearr_14134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1 = (function (state_14128){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14135){if((e14135 instanceof Object)){
var ex__8437__auto__ = e14135;
var statearr_14136_14306 = state_14128;
(statearr_14136_14306[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14307 = state_14128;
state_14128 = G__14307;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = function(state_14128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1.call(this,state_14128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___14305,res,vec__14123,v,p,job,jobs,results))
})();
var state__8510__auto__ = (function (){var statearr_14137 = f__8509__auto__.call(null);
(statearr_14137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___14305);

return statearr_14137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___14305,res,vec__14123,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14138){
var vec__14139 = p__14138;
var v = cljs.core.nth.call(null,vec__14139,(0),null);
var p = cljs.core.nth.call(null,vec__14139,(1),null);
var job = vec__14139;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5344__auto___14308 = n;
var __14309 = (0);
while(true){
if((__14309 < n__5344__auto___14308)){
var G__14140_14310 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14140_14310) {
case "compute":
var c__8508__auto___14312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14309,c__8508__auto___14312,G__14140_14310,n__5344__auto___14308,jobs,results,process,async){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (__14309,c__8508__auto___14312,G__14140_14310,n__5344__auto___14308,jobs,results,process,async){
return (function (state_14153){
var state_val_14154 = (state_14153[(1)]);
if((state_val_14154 === (1))){
var state_14153__$1 = state_14153;
var statearr_14155_14313 = state_14153__$1;
(statearr_14155_14313[(2)] = null);

(statearr_14155_14313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14154 === (2))){
var state_14153__$1 = state_14153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14153__$1,(4),jobs);
} else {
if((state_val_14154 === (3))){
var inst_14151 = (state_14153[(2)]);
var state_14153__$1 = state_14153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14153__$1,inst_14151);
} else {
if((state_val_14154 === (4))){
var inst_14143 = (state_14153[(2)]);
var inst_14144 = process.call(null,inst_14143);
var state_14153__$1 = state_14153;
if(cljs.core.truth_(inst_14144)){
var statearr_14156_14314 = state_14153__$1;
(statearr_14156_14314[(1)] = (5));

} else {
var statearr_14157_14315 = state_14153__$1;
(statearr_14157_14315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14154 === (5))){
var state_14153__$1 = state_14153;
var statearr_14158_14316 = state_14153__$1;
(statearr_14158_14316[(2)] = null);

(statearr_14158_14316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14154 === (6))){
var state_14153__$1 = state_14153;
var statearr_14159_14317 = state_14153__$1;
(statearr_14159_14317[(2)] = null);

(statearr_14159_14317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14154 === (7))){
var inst_14149 = (state_14153[(2)]);
var state_14153__$1 = state_14153;
var statearr_14160_14318 = state_14153__$1;
(statearr_14160_14318[(2)] = inst_14149);

(statearr_14160_14318[(1)] = (3));


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
});})(__14309,c__8508__auto___14312,G__14140_14310,n__5344__auto___14308,jobs,results,process,async))
;
return ((function (__14309,switch__8433__auto__,c__8508__auto___14312,G__14140_14310,n__5344__auto___14308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0 = (function (){
var statearr_14164 = [null,null,null,null,null,null,null];
(statearr_14164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__);

(statearr_14164[(1)] = (1));

return statearr_14164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1 = (function (state_14153){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14165){if((e14165 instanceof Object)){
var ex__8437__auto__ = e14165;
var statearr_14166_14319 = state_14153;
(statearr_14166_14319[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14320 = state_14153;
state_14153 = G__14320;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = function(state_14153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1.call(this,state_14153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__;
})()
;})(__14309,switch__8433__auto__,c__8508__auto___14312,G__14140_14310,n__5344__auto___14308,jobs,results,process,async))
})();
var state__8510__auto__ = (function (){var statearr_14167 = f__8509__auto__.call(null);
(statearr_14167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___14312);

return statearr_14167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(__14309,c__8508__auto___14312,G__14140_14310,n__5344__auto___14308,jobs,results,process,async))
);


break;
case "async":
var c__8508__auto___14321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14309,c__8508__auto___14321,G__14140_14310,n__5344__auto___14308,jobs,results,process,async){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (__14309,c__8508__auto___14321,G__14140_14310,n__5344__auto___14308,jobs,results,process,async){
return (function (state_14180){
var state_val_14181 = (state_14180[(1)]);
if((state_val_14181 === (1))){
var state_14180__$1 = state_14180;
var statearr_14182_14322 = state_14180__$1;
(statearr_14182_14322[(2)] = null);

(statearr_14182_14322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (2))){
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14180__$1,(4),jobs);
} else {
if((state_val_14181 === (3))){
var inst_14178 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14180__$1,inst_14178);
} else {
if((state_val_14181 === (4))){
var inst_14170 = (state_14180[(2)]);
var inst_14171 = async.call(null,inst_14170);
var state_14180__$1 = state_14180;
if(cljs.core.truth_(inst_14171)){
var statearr_14183_14323 = state_14180__$1;
(statearr_14183_14323[(1)] = (5));

} else {
var statearr_14184_14324 = state_14180__$1;
(statearr_14184_14324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (5))){
var state_14180__$1 = state_14180;
var statearr_14185_14325 = state_14180__$1;
(statearr_14185_14325[(2)] = null);

(statearr_14185_14325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (6))){
var state_14180__$1 = state_14180;
var statearr_14186_14326 = state_14180__$1;
(statearr_14186_14326[(2)] = null);

(statearr_14186_14326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (7))){
var inst_14176 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14187_14327 = state_14180__$1;
(statearr_14187_14327[(2)] = inst_14176);

(statearr_14187_14327[(1)] = (3));


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
});})(__14309,c__8508__auto___14321,G__14140_14310,n__5344__auto___14308,jobs,results,process,async))
;
return ((function (__14309,switch__8433__auto__,c__8508__auto___14321,G__14140_14310,n__5344__auto___14308,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0 = (function (){
var statearr_14191 = [null,null,null,null,null,null,null];
(statearr_14191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__);

(statearr_14191[(1)] = (1));

return statearr_14191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1 = (function (state_14180){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14192){if((e14192 instanceof Object)){
var ex__8437__auto__ = e14192;
var statearr_14193_14328 = state_14180;
(statearr_14193_14328[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14329 = state_14180;
state_14180 = G__14329;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = function(state_14180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1.call(this,state_14180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__;
})()
;})(__14309,switch__8433__auto__,c__8508__auto___14321,G__14140_14310,n__5344__auto___14308,jobs,results,process,async))
})();
var state__8510__auto__ = (function (){var statearr_14194 = f__8509__auto__.call(null);
(statearr_14194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___14321);

return statearr_14194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(__14309,c__8508__auto___14321,G__14140_14310,n__5344__auto___14308,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14330 = (__14309 + (1));
__14309 = G__14330;
continue;
} else {
}
break;
}

var c__8508__auto___14331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___14331,jobs,results,process,async){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___14331,jobs,results,process,async){
return (function (state_14216){
var state_val_14217 = (state_14216[(1)]);
if((state_val_14217 === (1))){
var state_14216__$1 = state_14216;
var statearr_14218_14332 = state_14216__$1;
(statearr_14218_14332[(2)] = null);

(statearr_14218_14332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (2))){
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(4),from);
} else {
if((state_val_14217 === (3))){
var inst_14214 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14216__$1,inst_14214);
} else {
if((state_val_14217 === (4))){
var inst_14197 = (state_14216[(7)]);
var inst_14197__$1 = (state_14216[(2)]);
var inst_14198 = (inst_14197__$1 == null);
var state_14216__$1 = (function (){var statearr_14219 = state_14216;
(statearr_14219[(7)] = inst_14197__$1);

return statearr_14219;
})();
if(cljs.core.truth_(inst_14198)){
var statearr_14220_14333 = state_14216__$1;
(statearr_14220_14333[(1)] = (5));

} else {
var statearr_14221_14334 = state_14216__$1;
(statearr_14221_14334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (5))){
var inst_14200 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14216__$1 = state_14216;
var statearr_14222_14335 = state_14216__$1;
(statearr_14222_14335[(2)] = inst_14200);

(statearr_14222_14335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (6))){
var inst_14197 = (state_14216[(7)]);
var inst_14202 = (state_14216[(8)]);
var inst_14202__$1 = cljs.core.async.chan.call(null,(1));
var inst_14203 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14204 = [inst_14197,inst_14202__$1];
var inst_14205 = (new cljs.core.PersistentVector(null,2,(5),inst_14203,inst_14204,null));
var state_14216__$1 = (function (){var statearr_14223 = state_14216;
(statearr_14223[(8)] = inst_14202__$1);

return statearr_14223;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14216__$1,(8),jobs,inst_14205);
} else {
if((state_val_14217 === (7))){
var inst_14212 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
var statearr_14224_14336 = state_14216__$1;
(statearr_14224_14336[(2)] = inst_14212);

(statearr_14224_14336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14217 === (8))){
var inst_14202 = (state_14216[(8)]);
var inst_14207 = (state_14216[(2)]);
var state_14216__$1 = (function (){var statearr_14225 = state_14216;
(statearr_14225[(9)] = inst_14207);

return statearr_14225;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14216__$1,(9),results,inst_14202);
} else {
if((state_val_14217 === (9))){
var inst_14209 = (state_14216[(2)]);
var state_14216__$1 = (function (){var statearr_14226 = state_14216;
(statearr_14226[(10)] = inst_14209);

return statearr_14226;
})();
var statearr_14227_14337 = state_14216__$1;
(statearr_14227_14337[(2)] = null);

(statearr_14227_14337[(1)] = (2));


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
});})(c__8508__auto___14331,jobs,results,process,async))
;
return ((function (switch__8433__auto__,c__8508__auto___14331,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0 = (function (){
var statearr_14231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__);

(statearr_14231[(1)] = (1));

return statearr_14231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1 = (function (state_14216){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14232){if((e14232 instanceof Object)){
var ex__8437__auto__ = e14232;
var statearr_14233_14338 = state_14216;
(statearr_14233_14338[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14339 = state_14216;
state_14216 = G__14339;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = function(state_14216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1.call(this,state_14216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___14331,jobs,results,process,async))
})();
var state__8510__auto__ = (function (){var statearr_14234 = f__8509__auto__.call(null);
(statearr_14234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___14331);

return statearr_14234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___14331,jobs,results,process,async))
);


var c__8508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto__,jobs,results,process,async){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto__,jobs,results,process,async){
return (function (state_14272){
var state_val_14273 = (state_14272[(1)]);
if((state_val_14273 === (7))){
var inst_14268 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14274_14340 = state_14272__$1;
(statearr_14274_14340[(2)] = inst_14268);

(statearr_14274_14340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (20))){
var state_14272__$1 = state_14272;
var statearr_14275_14341 = state_14272__$1;
(statearr_14275_14341[(2)] = null);

(statearr_14275_14341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (1))){
var state_14272__$1 = state_14272;
var statearr_14276_14342 = state_14272__$1;
(statearr_14276_14342[(2)] = null);

(statearr_14276_14342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (4))){
var inst_14237 = (state_14272[(7)]);
var inst_14237__$1 = (state_14272[(2)]);
var inst_14238 = (inst_14237__$1 == null);
var state_14272__$1 = (function (){var statearr_14277 = state_14272;
(statearr_14277[(7)] = inst_14237__$1);

return statearr_14277;
})();
if(cljs.core.truth_(inst_14238)){
var statearr_14278_14343 = state_14272__$1;
(statearr_14278_14343[(1)] = (5));

} else {
var statearr_14279_14344 = state_14272__$1;
(statearr_14279_14344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (15))){
var inst_14250 = (state_14272[(8)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14272__$1,(18),to,inst_14250);
} else {
if((state_val_14273 === (21))){
var inst_14263 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14280_14345 = state_14272__$1;
(statearr_14280_14345[(2)] = inst_14263);

(statearr_14280_14345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (13))){
var inst_14265 = (state_14272[(2)]);
var state_14272__$1 = (function (){var statearr_14281 = state_14272;
(statearr_14281[(9)] = inst_14265);

return statearr_14281;
})();
var statearr_14282_14346 = state_14272__$1;
(statearr_14282_14346[(2)] = null);

(statearr_14282_14346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (6))){
var inst_14237 = (state_14272[(7)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14272__$1,(11),inst_14237);
} else {
if((state_val_14273 === (17))){
var inst_14258 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
if(cljs.core.truth_(inst_14258)){
var statearr_14283_14347 = state_14272__$1;
(statearr_14283_14347[(1)] = (19));

} else {
var statearr_14284_14348 = state_14272__$1;
(statearr_14284_14348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (3))){
var inst_14270 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14272__$1,inst_14270);
} else {
if((state_val_14273 === (12))){
var inst_14247 = (state_14272[(10)]);
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14272__$1,(14),inst_14247);
} else {
if((state_val_14273 === (2))){
var state_14272__$1 = state_14272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14272__$1,(4),results);
} else {
if((state_val_14273 === (19))){
var state_14272__$1 = state_14272;
var statearr_14285_14349 = state_14272__$1;
(statearr_14285_14349[(2)] = null);

(statearr_14285_14349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (11))){
var inst_14247 = (state_14272[(2)]);
var state_14272__$1 = (function (){var statearr_14286 = state_14272;
(statearr_14286[(10)] = inst_14247);

return statearr_14286;
})();
var statearr_14287_14350 = state_14272__$1;
(statearr_14287_14350[(2)] = null);

(statearr_14287_14350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (9))){
var state_14272__$1 = state_14272;
var statearr_14288_14351 = state_14272__$1;
(statearr_14288_14351[(2)] = null);

(statearr_14288_14351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (5))){
var state_14272__$1 = state_14272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14289_14352 = state_14272__$1;
(statearr_14289_14352[(1)] = (8));

} else {
var statearr_14290_14353 = state_14272__$1;
(statearr_14290_14353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (14))){
var inst_14252 = (state_14272[(11)]);
var inst_14250 = (state_14272[(8)]);
var inst_14250__$1 = (state_14272[(2)]);
var inst_14251 = (inst_14250__$1 == null);
var inst_14252__$1 = cljs.core.not.call(null,inst_14251);
var state_14272__$1 = (function (){var statearr_14291 = state_14272;
(statearr_14291[(11)] = inst_14252__$1);

(statearr_14291[(8)] = inst_14250__$1);

return statearr_14291;
})();
if(inst_14252__$1){
var statearr_14292_14354 = state_14272__$1;
(statearr_14292_14354[(1)] = (15));

} else {
var statearr_14293_14355 = state_14272__$1;
(statearr_14293_14355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (16))){
var inst_14252 = (state_14272[(11)]);
var state_14272__$1 = state_14272;
var statearr_14294_14356 = state_14272__$1;
(statearr_14294_14356[(2)] = inst_14252);

(statearr_14294_14356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (10))){
var inst_14244 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14295_14357 = state_14272__$1;
(statearr_14295_14357[(2)] = inst_14244);

(statearr_14295_14357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (18))){
var inst_14255 = (state_14272[(2)]);
var state_14272__$1 = state_14272;
var statearr_14296_14358 = state_14272__$1;
(statearr_14296_14358[(2)] = inst_14255);

(statearr_14296_14358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14273 === (8))){
var inst_14241 = cljs.core.async.close_BANG_.call(null,to);
var state_14272__$1 = state_14272;
var statearr_14297_14359 = state_14272__$1;
(statearr_14297_14359[(2)] = inst_14241);

(statearr_14297_14359[(1)] = (10));


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
}
}
});})(c__8508__auto__,jobs,results,process,async))
;
return ((function (switch__8433__auto__,c__8508__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0 = (function (){
var statearr_14301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__);

(statearr_14301[(1)] = (1));

return statearr_14301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1 = (function (state_14272){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14302){if((e14302 instanceof Object)){
var ex__8437__auto__ = e14302;
var statearr_14303_14360 = state_14272;
(statearr_14303_14360[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14361 = state_14272;
state_14272 = G__14361;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__ = function(state_14272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1.call(this,state_14272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto__,jobs,results,process,async))
})();
var state__8510__auto__ = (function (){var statearr_14304 = f__8509__auto__.call(null);
(statearr_14304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto__);

return statearr_14304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto__,jobs,results,process,async))
);

return c__8508__auto__;
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
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args14362 = [];
var len__5499__auto___14365 = arguments.length;
var i__5500__auto___14366 = (0);
while(true){
if((i__5500__auto___14366 < len__5499__auto___14365)){
args14362.push((arguments[i__5500__auto___14366]));

var G__14367 = (i__5500__auto___14366 + (1));
i__5500__auto___14366 = G__14367;
continue;
} else {
}
break;
}

var G__14364 = args14362.length;
switch (G__14364) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14362.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args14369 = [];
var len__5499__auto___14372 = arguments.length;
var i__5500__auto___14373 = (0);
while(true){
if((i__5500__auto___14373 < len__5499__auto___14372)){
args14369.push((arguments[i__5500__auto___14373]));

var G__14374 = (i__5500__auto___14373 + (1));
i__5500__auto___14373 = G__14374;
continue;
} else {
}
break;
}

var G__14371 = args14369.length;
switch (G__14371) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14369.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
cljs.core.async.split = (function cljs$core$async$split(){
var args14376 = [];
var len__5499__auto___14429 = arguments.length;
var i__5500__auto___14430 = (0);
while(true){
if((i__5500__auto___14430 < len__5499__auto___14429)){
args14376.push((arguments[i__5500__auto___14430]));

var G__14431 = (i__5500__auto___14430 + (1));
i__5500__auto___14430 = G__14431;
continue;
} else {
}
break;
}

var G__14378 = args14376.length;
switch (G__14378) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14376.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8508__auto___14433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___14433,tc,fc){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___14433,tc,fc){
return (function (state_14404){
var state_val_14405 = (state_14404[(1)]);
if((state_val_14405 === (7))){
var inst_14400 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14406_14434 = state_14404__$1;
(statearr_14406_14434[(2)] = inst_14400);

(statearr_14406_14434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (1))){
var state_14404__$1 = state_14404;
var statearr_14407_14435 = state_14404__$1;
(statearr_14407_14435[(2)] = null);

(statearr_14407_14435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (4))){
var inst_14381 = (state_14404[(7)]);
var inst_14381__$1 = (state_14404[(2)]);
var inst_14382 = (inst_14381__$1 == null);
var state_14404__$1 = (function (){var statearr_14408 = state_14404;
(statearr_14408[(7)] = inst_14381__$1);

return statearr_14408;
})();
if(cljs.core.truth_(inst_14382)){
var statearr_14409_14436 = state_14404__$1;
(statearr_14409_14436[(1)] = (5));

} else {
var statearr_14410_14437 = state_14404__$1;
(statearr_14410_14437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (13))){
var state_14404__$1 = state_14404;
var statearr_14411_14438 = state_14404__$1;
(statearr_14411_14438[(2)] = null);

(statearr_14411_14438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (6))){
var inst_14381 = (state_14404[(7)]);
var inst_14387 = p.call(null,inst_14381);
var state_14404__$1 = state_14404;
if(cljs.core.truth_(inst_14387)){
var statearr_14412_14439 = state_14404__$1;
(statearr_14412_14439[(1)] = (9));

} else {
var statearr_14413_14440 = state_14404__$1;
(statearr_14413_14440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (3))){
var inst_14402 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14404__$1,inst_14402);
} else {
if((state_val_14405 === (12))){
var state_14404__$1 = state_14404;
var statearr_14414_14441 = state_14404__$1;
(statearr_14414_14441[(2)] = null);

(statearr_14414_14441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (2))){
var state_14404__$1 = state_14404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14404__$1,(4),ch);
} else {
if((state_val_14405 === (11))){
var inst_14381 = (state_14404[(7)]);
var inst_14391 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14404__$1,(8),inst_14391,inst_14381);
} else {
if((state_val_14405 === (9))){
var state_14404__$1 = state_14404;
var statearr_14415_14442 = state_14404__$1;
(statearr_14415_14442[(2)] = tc);

(statearr_14415_14442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (5))){
var inst_14384 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14385 = cljs.core.async.close_BANG_.call(null,fc);
var state_14404__$1 = (function (){var statearr_14416 = state_14404;
(statearr_14416[(8)] = inst_14384);

return statearr_14416;
})();
var statearr_14417_14443 = state_14404__$1;
(statearr_14417_14443[(2)] = inst_14385);

(statearr_14417_14443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (14))){
var inst_14398 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
var statearr_14418_14444 = state_14404__$1;
(statearr_14418_14444[(2)] = inst_14398);

(statearr_14418_14444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (10))){
var state_14404__$1 = state_14404;
var statearr_14419_14445 = state_14404__$1;
(statearr_14419_14445[(2)] = fc);

(statearr_14419_14445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14405 === (8))){
var inst_14393 = (state_14404[(2)]);
var state_14404__$1 = state_14404;
if(cljs.core.truth_(inst_14393)){
var statearr_14420_14446 = state_14404__$1;
(statearr_14420_14446[(1)] = (12));

} else {
var statearr_14421_14447 = state_14404__$1;
(statearr_14421_14447[(1)] = (13));

}

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
});})(c__8508__auto___14433,tc,fc))
;
return ((function (switch__8433__auto__,c__8508__auto___14433,tc,fc){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_14425 = [null,null,null,null,null,null,null,null,null];
(statearr_14425[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_14425[(1)] = (1));

return statearr_14425;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_14404){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14426){if((e14426 instanceof Object)){
var ex__8437__auto__ = e14426;
var statearr_14427_14448 = state_14404;
(statearr_14427_14448[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14449 = state_14404;
state_14404 = G__14449;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_14404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_14404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___14433,tc,fc))
})();
var state__8510__auto__ = (function (){var statearr_14428 = f__8509__auto__.call(null);
(statearr_14428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___14433);

return statearr_14428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___14433,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto__){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto__){
return (function (state_14496){
var state_val_14497 = (state_14496[(1)]);
if((state_val_14497 === (1))){
var inst_14482 = init;
var state_14496__$1 = (function (){var statearr_14498 = state_14496;
(statearr_14498[(7)] = inst_14482);

return statearr_14498;
})();
var statearr_14499_14514 = state_14496__$1;
(statearr_14499_14514[(2)] = null);

(statearr_14499_14514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (2))){
var state_14496__$1 = state_14496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14496__$1,(4),ch);
} else {
if((state_val_14497 === (3))){
var inst_14494 = (state_14496[(2)]);
var state_14496__$1 = state_14496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14496__$1,inst_14494);
} else {
if((state_val_14497 === (4))){
var inst_14485 = (state_14496[(8)]);
var inst_14485__$1 = (state_14496[(2)]);
var inst_14486 = (inst_14485__$1 == null);
var state_14496__$1 = (function (){var statearr_14500 = state_14496;
(statearr_14500[(8)] = inst_14485__$1);

return statearr_14500;
})();
if(cljs.core.truth_(inst_14486)){
var statearr_14501_14515 = state_14496__$1;
(statearr_14501_14515[(1)] = (5));

} else {
var statearr_14502_14516 = state_14496__$1;
(statearr_14502_14516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (5))){
var inst_14482 = (state_14496[(7)]);
var state_14496__$1 = state_14496;
var statearr_14503_14517 = state_14496__$1;
(statearr_14503_14517[(2)] = inst_14482);

(statearr_14503_14517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (6))){
var inst_14482 = (state_14496[(7)]);
var inst_14485 = (state_14496[(8)]);
var inst_14489 = f.call(null,inst_14482,inst_14485);
var inst_14482__$1 = inst_14489;
var state_14496__$1 = (function (){var statearr_14504 = state_14496;
(statearr_14504[(7)] = inst_14482__$1);

return statearr_14504;
})();
var statearr_14505_14518 = state_14496__$1;
(statearr_14505_14518[(2)] = null);

(statearr_14505_14518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14497 === (7))){
var inst_14492 = (state_14496[(2)]);
var state_14496__$1 = state_14496;
var statearr_14506_14519 = state_14496__$1;
(statearr_14506_14519[(2)] = inst_14492);

(statearr_14506_14519[(1)] = (3));


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
});})(c__8508__auto__))
;
return ((function (switch__8433__auto__,c__8508__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8434__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8434__auto____0 = (function (){
var statearr_14510 = [null,null,null,null,null,null,null,null,null];
(statearr_14510[(0)] = cljs$core$async$reduce_$_state_machine__8434__auto__);

(statearr_14510[(1)] = (1));

return statearr_14510;
});
var cljs$core$async$reduce_$_state_machine__8434__auto____1 = (function (state_14496){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14511){if((e14511 instanceof Object)){
var ex__8437__auto__ = e14511;
var statearr_14512_14520 = state_14496;
(statearr_14512_14520[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14521 = state_14496;
state_14496 = G__14521;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8434__auto__ = function(state_14496){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8434__auto____1.call(this,state_14496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8434__auto____0;
cljs$core$async$reduce_$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8434__auto____1;
return cljs$core$async$reduce_$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto__))
})();
var state__8510__auto__ = (function (){var statearr_14513 = f__8509__auto__.call(null);
(statearr_14513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto__);

return statearr_14513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto__))
);

return c__8508__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args14522 = [];
var len__5499__auto___14574 = arguments.length;
var i__5500__auto___14575 = (0);
while(true){
if((i__5500__auto___14575 < len__5499__auto___14574)){
args14522.push((arguments[i__5500__auto___14575]));

var G__14576 = (i__5500__auto___14575 + (1));
i__5500__auto___14575 = G__14576;
continue;
} else {
}
break;
}

var G__14524 = args14522.length;
switch (G__14524) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14522.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto__){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto__){
return (function (state_14549){
var state_val_14550 = (state_14549[(1)]);
if((state_val_14550 === (7))){
var inst_14531 = (state_14549[(2)]);
var state_14549__$1 = state_14549;
var statearr_14551_14578 = state_14549__$1;
(statearr_14551_14578[(2)] = inst_14531);

(statearr_14551_14578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (1))){
var inst_14525 = cljs.core.seq.call(null,coll);
var inst_14526 = inst_14525;
var state_14549__$1 = (function (){var statearr_14552 = state_14549;
(statearr_14552[(7)] = inst_14526);

return statearr_14552;
})();
var statearr_14553_14579 = state_14549__$1;
(statearr_14553_14579[(2)] = null);

(statearr_14553_14579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (4))){
var inst_14526 = (state_14549[(7)]);
var inst_14529 = cljs.core.first.call(null,inst_14526);
var state_14549__$1 = state_14549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14549__$1,(7),ch,inst_14529);
} else {
if((state_val_14550 === (13))){
var inst_14543 = (state_14549[(2)]);
var state_14549__$1 = state_14549;
var statearr_14554_14580 = state_14549__$1;
(statearr_14554_14580[(2)] = inst_14543);

(statearr_14554_14580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (6))){
var inst_14534 = (state_14549[(2)]);
var state_14549__$1 = state_14549;
if(cljs.core.truth_(inst_14534)){
var statearr_14555_14581 = state_14549__$1;
(statearr_14555_14581[(1)] = (8));

} else {
var statearr_14556_14582 = state_14549__$1;
(statearr_14556_14582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (3))){
var inst_14547 = (state_14549[(2)]);
var state_14549__$1 = state_14549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14549__$1,inst_14547);
} else {
if((state_val_14550 === (12))){
var state_14549__$1 = state_14549;
var statearr_14557_14583 = state_14549__$1;
(statearr_14557_14583[(2)] = null);

(statearr_14557_14583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (2))){
var inst_14526 = (state_14549[(7)]);
var state_14549__$1 = state_14549;
if(cljs.core.truth_(inst_14526)){
var statearr_14558_14584 = state_14549__$1;
(statearr_14558_14584[(1)] = (4));

} else {
var statearr_14559_14585 = state_14549__$1;
(statearr_14559_14585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (11))){
var inst_14540 = cljs.core.async.close_BANG_.call(null,ch);
var state_14549__$1 = state_14549;
var statearr_14560_14586 = state_14549__$1;
(statearr_14560_14586[(2)] = inst_14540);

(statearr_14560_14586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (9))){
var state_14549__$1 = state_14549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14561_14587 = state_14549__$1;
(statearr_14561_14587[(1)] = (11));

} else {
var statearr_14562_14588 = state_14549__$1;
(statearr_14562_14588[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (5))){
var inst_14526 = (state_14549[(7)]);
var state_14549__$1 = state_14549;
var statearr_14563_14589 = state_14549__$1;
(statearr_14563_14589[(2)] = inst_14526);

(statearr_14563_14589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (10))){
var inst_14545 = (state_14549[(2)]);
var state_14549__$1 = state_14549;
var statearr_14564_14590 = state_14549__$1;
(statearr_14564_14590[(2)] = inst_14545);

(statearr_14564_14590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14550 === (8))){
var inst_14526 = (state_14549[(7)]);
var inst_14536 = cljs.core.next.call(null,inst_14526);
var inst_14526__$1 = inst_14536;
var state_14549__$1 = (function (){var statearr_14565 = state_14549;
(statearr_14565[(7)] = inst_14526__$1);

return statearr_14565;
})();
var statearr_14566_14591 = state_14549__$1;
(statearr_14566_14591[(2)] = null);

(statearr_14566_14591[(1)] = (2));


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
});})(c__8508__auto__))
;
return ((function (switch__8433__auto__,c__8508__auto__){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_14570 = [null,null,null,null,null,null,null,null];
(statearr_14570[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_14570[(1)] = (1));

return statearr_14570;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_14549){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e14571){if((e14571 instanceof Object)){
var ex__8437__auto__ = e14571;
var statearr_14572_14592 = state_14549;
(statearr_14572_14592[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14593 = state_14549;
state_14549 = G__14593;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_14549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_14549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto__))
})();
var state__8510__auto__ = (function (){var statearr_14573 = f__8509__auto__.call(null);
(statearr_14573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto__);

return statearr_14573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto__))
);

return c__8508__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5096__auto__ = (((_ == null))?null:_);
var m__5097__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,_);
} else {
var m__5097__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5097__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m,ch);
} else {
var m__5097__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m);
} else {
var m__5097__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t14819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14819 = (function (mult,ch,cs,meta14820){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14820 = meta14820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14821,meta14820__$1){
var self__ = this;
var _14821__$1 = this;
return (new cljs.core.async.t14819(self__.mult,self__.ch,self__.cs,meta14820__$1));
});})(cs))
;

cljs.core.async.t14819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14821){
var self__ = this;
var _14821__$1 = this;
return self__.meta14820;
});})(cs))
;

cljs.core.async.t14819.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14819.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14819.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14819.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14819.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14819.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14820","meta14820",824252804,null)], null);
});})(cs))
;

cljs.core.async.t14819.cljs$lang$type = true;

cljs.core.async.t14819.cljs$lang$ctorStr = "cljs.core.async/t14819";

cljs.core.async.t14819.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t14819");
});})(cs))
;

cljs.core.async.__GT_t14819 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14819(mult__$1,ch__$1,cs__$1,meta14820){
return (new cljs.core.async.t14819(mult__$1,ch__$1,cs__$1,meta14820));
});})(cs))
;

}

return (new cljs.core.async.t14819(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8508__auto___15040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15040,cs,m,dchan,dctr,done){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15040,cs,m,dchan,dctr,done){
return (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (7))){
var inst_14948 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14954_15041 = state_14952__$1;
(statearr_14954_15041[(2)] = inst_14948);

(statearr_14954_15041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (20))){
var inst_14853 = (state_14952[(7)]);
var inst_14863 = cljs.core.first.call(null,inst_14853);
var inst_14864 = cljs.core.nth.call(null,inst_14863,(0),null);
var inst_14865 = cljs.core.nth.call(null,inst_14863,(1),null);
var state_14952__$1 = (function (){var statearr_14955 = state_14952;
(statearr_14955[(8)] = inst_14864);

return statearr_14955;
})();
if(cljs.core.truth_(inst_14865)){
var statearr_14956_15042 = state_14952__$1;
(statearr_14956_15042[(1)] = (22));

} else {
var statearr_14957_15043 = state_14952__$1;
(statearr_14957_15043[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (27))){
var inst_14900 = (state_14952[(9)]);
var inst_14895 = (state_14952[(10)]);
var inst_14824 = (state_14952[(11)]);
var inst_14893 = (state_14952[(12)]);
var inst_14900__$1 = cljs.core._nth.call(null,inst_14893,inst_14895);
var inst_14901 = cljs.core.async.put_BANG_.call(null,inst_14900__$1,inst_14824,done);
var state_14952__$1 = (function (){var statearr_14958 = state_14952;
(statearr_14958[(9)] = inst_14900__$1);

return statearr_14958;
})();
if(cljs.core.truth_(inst_14901)){
var statearr_14959_15044 = state_14952__$1;
(statearr_14959_15044[(1)] = (30));

} else {
var statearr_14960_15045 = state_14952__$1;
(statearr_14960_15045[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (1))){
var state_14952__$1 = state_14952;
var statearr_14961_15046 = state_14952__$1;
(statearr_14961_15046[(2)] = null);

(statearr_14961_15046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (24))){
var inst_14853 = (state_14952[(7)]);
var inst_14870 = (state_14952[(2)]);
var inst_14871 = cljs.core.next.call(null,inst_14853);
var inst_14833 = inst_14871;
var inst_14834 = null;
var inst_14835 = (0);
var inst_14836 = (0);
var state_14952__$1 = (function (){var statearr_14962 = state_14952;
(statearr_14962[(13)] = inst_14835);

(statearr_14962[(14)] = inst_14836);

(statearr_14962[(15)] = inst_14834);

(statearr_14962[(16)] = inst_14833);

(statearr_14962[(17)] = inst_14870);

return statearr_14962;
})();
var statearr_14963_15047 = state_14952__$1;
(statearr_14963_15047[(2)] = null);

(statearr_14963_15047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (39))){
var state_14952__$1 = state_14952;
var statearr_14967_15048 = state_14952__$1;
(statearr_14967_15048[(2)] = null);

(statearr_14967_15048[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (4))){
var inst_14824 = (state_14952[(11)]);
var inst_14824__$1 = (state_14952[(2)]);
var inst_14825 = (inst_14824__$1 == null);
var state_14952__$1 = (function (){var statearr_14968 = state_14952;
(statearr_14968[(11)] = inst_14824__$1);

return statearr_14968;
})();
if(cljs.core.truth_(inst_14825)){
var statearr_14969_15049 = state_14952__$1;
(statearr_14969_15049[(1)] = (5));

} else {
var statearr_14970_15050 = state_14952__$1;
(statearr_14970_15050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (15))){
var inst_14835 = (state_14952[(13)]);
var inst_14836 = (state_14952[(14)]);
var inst_14834 = (state_14952[(15)]);
var inst_14833 = (state_14952[(16)]);
var inst_14849 = (state_14952[(2)]);
var inst_14850 = (inst_14836 + (1));
var tmp14964 = inst_14835;
var tmp14965 = inst_14834;
var tmp14966 = inst_14833;
var inst_14833__$1 = tmp14966;
var inst_14834__$1 = tmp14965;
var inst_14835__$1 = tmp14964;
var inst_14836__$1 = inst_14850;
var state_14952__$1 = (function (){var statearr_14971 = state_14952;
(statearr_14971[(13)] = inst_14835__$1);

(statearr_14971[(14)] = inst_14836__$1);

(statearr_14971[(15)] = inst_14834__$1);

(statearr_14971[(16)] = inst_14833__$1);

(statearr_14971[(18)] = inst_14849);

return statearr_14971;
})();
var statearr_14972_15051 = state_14952__$1;
(statearr_14972_15051[(2)] = null);

(statearr_14972_15051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (21))){
var inst_14874 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14976_15052 = state_14952__$1;
(statearr_14976_15052[(2)] = inst_14874);

(statearr_14976_15052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (31))){
var inst_14900 = (state_14952[(9)]);
var inst_14904 = done.call(null,null);
var inst_14905 = cljs.core.async.untap_STAR_.call(null,m,inst_14900);
var state_14952__$1 = (function (){var statearr_14977 = state_14952;
(statearr_14977[(19)] = inst_14904);

return statearr_14977;
})();
var statearr_14978_15053 = state_14952__$1;
(statearr_14978_15053[(2)] = inst_14905);

(statearr_14978_15053[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (32))){
var inst_14892 = (state_14952[(20)]);
var inst_14895 = (state_14952[(10)]);
var inst_14893 = (state_14952[(12)]);
var inst_14894 = (state_14952[(21)]);
var inst_14907 = (state_14952[(2)]);
var inst_14908 = (inst_14895 + (1));
var tmp14973 = inst_14892;
var tmp14974 = inst_14893;
var tmp14975 = inst_14894;
var inst_14892__$1 = tmp14973;
var inst_14893__$1 = tmp14974;
var inst_14894__$1 = tmp14975;
var inst_14895__$1 = inst_14908;
var state_14952__$1 = (function (){var statearr_14979 = state_14952;
(statearr_14979[(22)] = inst_14907);

(statearr_14979[(20)] = inst_14892__$1);

(statearr_14979[(10)] = inst_14895__$1);

(statearr_14979[(12)] = inst_14893__$1);

(statearr_14979[(21)] = inst_14894__$1);

return statearr_14979;
})();
var statearr_14980_15054 = state_14952__$1;
(statearr_14980_15054[(2)] = null);

(statearr_14980_15054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (40))){
var inst_14920 = (state_14952[(23)]);
var inst_14924 = done.call(null,null);
var inst_14925 = cljs.core.async.untap_STAR_.call(null,m,inst_14920);
var state_14952__$1 = (function (){var statearr_14981 = state_14952;
(statearr_14981[(24)] = inst_14924);

return statearr_14981;
})();
var statearr_14982_15055 = state_14952__$1;
(statearr_14982_15055[(2)] = inst_14925);

(statearr_14982_15055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (33))){
var inst_14911 = (state_14952[(25)]);
var inst_14913 = cljs.core.chunked_seq_QMARK_.call(null,inst_14911);
var state_14952__$1 = state_14952;
if(inst_14913){
var statearr_14983_15056 = state_14952__$1;
(statearr_14983_15056[(1)] = (36));

} else {
var statearr_14984_15057 = state_14952__$1;
(statearr_14984_15057[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (13))){
var inst_14843 = (state_14952[(26)]);
var inst_14846 = cljs.core.async.close_BANG_.call(null,inst_14843);
var state_14952__$1 = state_14952;
var statearr_14985_15058 = state_14952__$1;
(statearr_14985_15058[(2)] = inst_14846);

(statearr_14985_15058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (22))){
var inst_14864 = (state_14952[(8)]);
var inst_14867 = cljs.core.async.close_BANG_.call(null,inst_14864);
var state_14952__$1 = state_14952;
var statearr_14986_15059 = state_14952__$1;
(statearr_14986_15059[(2)] = inst_14867);

(statearr_14986_15059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (36))){
var inst_14911 = (state_14952[(25)]);
var inst_14915 = cljs.core.chunk_first.call(null,inst_14911);
var inst_14916 = cljs.core.chunk_rest.call(null,inst_14911);
var inst_14917 = cljs.core.count.call(null,inst_14915);
var inst_14892 = inst_14916;
var inst_14893 = inst_14915;
var inst_14894 = inst_14917;
var inst_14895 = (0);
var state_14952__$1 = (function (){var statearr_14987 = state_14952;
(statearr_14987[(20)] = inst_14892);

(statearr_14987[(10)] = inst_14895);

(statearr_14987[(12)] = inst_14893);

(statearr_14987[(21)] = inst_14894);

return statearr_14987;
})();
var statearr_14988_15060 = state_14952__$1;
(statearr_14988_15060[(2)] = null);

(statearr_14988_15060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (41))){
var inst_14911 = (state_14952[(25)]);
var inst_14927 = (state_14952[(2)]);
var inst_14928 = cljs.core.next.call(null,inst_14911);
var inst_14892 = inst_14928;
var inst_14893 = null;
var inst_14894 = (0);
var inst_14895 = (0);
var state_14952__$1 = (function (){var statearr_14989 = state_14952;
(statearr_14989[(20)] = inst_14892);

(statearr_14989[(10)] = inst_14895);

(statearr_14989[(12)] = inst_14893);

(statearr_14989[(21)] = inst_14894);

(statearr_14989[(27)] = inst_14927);

return statearr_14989;
})();
var statearr_14990_15061 = state_14952__$1;
(statearr_14990_15061[(2)] = null);

(statearr_14990_15061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (43))){
var state_14952__$1 = state_14952;
var statearr_14991_15062 = state_14952__$1;
(statearr_14991_15062[(2)] = null);

(statearr_14991_15062[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (29))){
var inst_14936 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14992_15063 = state_14952__$1;
(statearr_14992_15063[(2)] = inst_14936);

(statearr_14992_15063[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (44))){
var inst_14945 = (state_14952[(2)]);
var state_14952__$1 = (function (){var statearr_14993 = state_14952;
(statearr_14993[(28)] = inst_14945);

return statearr_14993;
})();
var statearr_14994_15064 = state_14952__$1;
(statearr_14994_15064[(2)] = null);

(statearr_14994_15064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var inst_14884 = (state_14952[(29)]);
var inst_14883 = cljs.core.deref.call(null,cs);
var inst_14884__$1 = cljs.core.keys.call(null,inst_14883);
var inst_14885 = cljs.core.count.call(null,inst_14884__$1);
var inst_14886 = cljs.core.reset_BANG_.call(null,dctr,inst_14885);
var inst_14891 = cljs.core.seq.call(null,inst_14884__$1);
var inst_14892 = inst_14891;
var inst_14893 = null;
var inst_14894 = (0);
var inst_14895 = (0);
var state_14952__$1 = (function (){var statearr_14995 = state_14952;
(statearr_14995[(30)] = inst_14886);

(statearr_14995[(20)] = inst_14892);

(statearr_14995[(29)] = inst_14884__$1);

(statearr_14995[(10)] = inst_14895);

(statearr_14995[(12)] = inst_14893);

(statearr_14995[(21)] = inst_14894);

return statearr_14995;
})();
var statearr_14996_15065 = state_14952__$1;
(statearr_14996_15065[(2)] = null);

(statearr_14996_15065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (28))){
var inst_14911 = (state_14952[(25)]);
var inst_14892 = (state_14952[(20)]);
var inst_14911__$1 = cljs.core.seq.call(null,inst_14892);
var state_14952__$1 = (function (){var statearr_14997 = state_14952;
(statearr_14997[(25)] = inst_14911__$1);

return statearr_14997;
})();
if(inst_14911__$1){
var statearr_14998_15066 = state_14952__$1;
(statearr_14998_15066[(1)] = (33));

} else {
var statearr_14999_15067 = state_14952__$1;
(statearr_14999_15067[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (25))){
var inst_14895 = (state_14952[(10)]);
var inst_14894 = (state_14952[(21)]);
var inst_14897 = (inst_14895 < inst_14894);
var inst_14898 = inst_14897;
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14898)){
var statearr_15000_15068 = state_14952__$1;
(statearr_15000_15068[(1)] = (27));

} else {
var statearr_15001_15069 = state_14952__$1;
(statearr_15001_15069[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (34))){
var state_14952__$1 = state_14952;
var statearr_15002_15070 = state_14952__$1;
(statearr_15002_15070[(2)] = null);

(statearr_15002_15070[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (17))){
var state_14952__$1 = state_14952;
var statearr_15003_15071 = state_14952__$1;
(statearr_15003_15071[(2)] = null);

(statearr_15003_15071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (3))){
var inst_14950 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14952__$1,inst_14950);
} else {
if((state_val_14953 === (12))){
var inst_14879 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15004_15072 = state_14952__$1;
(statearr_15004_15072[(2)] = inst_14879);

(statearr_15004_15072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14952__$1,(4),ch);
} else {
if((state_val_14953 === (23))){
var state_14952__$1 = state_14952;
var statearr_15005_15073 = state_14952__$1;
(statearr_15005_15073[(2)] = null);

(statearr_15005_15073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (35))){
var inst_14934 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15006_15074 = state_14952__$1;
(statearr_15006_15074[(2)] = inst_14934);

(statearr_15006_15074[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (19))){
var inst_14853 = (state_14952[(7)]);
var inst_14857 = cljs.core.chunk_first.call(null,inst_14853);
var inst_14858 = cljs.core.chunk_rest.call(null,inst_14853);
var inst_14859 = cljs.core.count.call(null,inst_14857);
var inst_14833 = inst_14858;
var inst_14834 = inst_14857;
var inst_14835 = inst_14859;
var inst_14836 = (0);
var state_14952__$1 = (function (){var statearr_15007 = state_14952;
(statearr_15007[(13)] = inst_14835);

(statearr_15007[(14)] = inst_14836);

(statearr_15007[(15)] = inst_14834);

(statearr_15007[(16)] = inst_14833);

return statearr_15007;
})();
var statearr_15008_15075 = state_14952__$1;
(statearr_15008_15075[(2)] = null);

(statearr_15008_15075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (11))){
var inst_14853 = (state_14952[(7)]);
var inst_14833 = (state_14952[(16)]);
var inst_14853__$1 = cljs.core.seq.call(null,inst_14833);
var state_14952__$1 = (function (){var statearr_15009 = state_14952;
(statearr_15009[(7)] = inst_14853__$1);

return statearr_15009;
})();
if(inst_14853__$1){
var statearr_15010_15076 = state_14952__$1;
(statearr_15010_15076[(1)] = (16));

} else {
var statearr_15011_15077 = state_14952__$1;
(statearr_15011_15077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (9))){
var inst_14881 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15012_15078 = state_14952__$1;
(statearr_15012_15078[(2)] = inst_14881);

(statearr_15012_15078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (5))){
var inst_14831 = cljs.core.deref.call(null,cs);
var inst_14832 = cljs.core.seq.call(null,inst_14831);
var inst_14833 = inst_14832;
var inst_14834 = null;
var inst_14835 = (0);
var inst_14836 = (0);
var state_14952__$1 = (function (){var statearr_15013 = state_14952;
(statearr_15013[(13)] = inst_14835);

(statearr_15013[(14)] = inst_14836);

(statearr_15013[(15)] = inst_14834);

(statearr_15013[(16)] = inst_14833);

return statearr_15013;
})();
var statearr_15014_15079 = state_14952__$1;
(statearr_15014_15079[(2)] = null);

(statearr_15014_15079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (14))){
var state_14952__$1 = state_14952;
var statearr_15015_15080 = state_14952__$1;
(statearr_15015_15080[(2)] = null);

(statearr_15015_15080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (45))){
var inst_14942 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15016_15081 = state_14952__$1;
(statearr_15016_15081[(2)] = inst_14942);

(statearr_15016_15081[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (26))){
var inst_14884 = (state_14952[(29)]);
var inst_14938 = (state_14952[(2)]);
var inst_14939 = cljs.core.seq.call(null,inst_14884);
var state_14952__$1 = (function (){var statearr_15017 = state_14952;
(statearr_15017[(31)] = inst_14938);

return statearr_15017;
})();
if(inst_14939){
var statearr_15018_15082 = state_14952__$1;
(statearr_15018_15082[(1)] = (42));

} else {
var statearr_15019_15083 = state_14952__$1;
(statearr_15019_15083[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (16))){
var inst_14853 = (state_14952[(7)]);
var inst_14855 = cljs.core.chunked_seq_QMARK_.call(null,inst_14853);
var state_14952__$1 = state_14952;
if(inst_14855){
var statearr_15020_15084 = state_14952__$1;
(statearr_15020_15084[(1)] = (19));

} else {
var statearr_15021_15085 = state_14952__$1;
(statearr_15021_15085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (38))){
var inst_14931 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15022_15086 = state_14952__$1;
(statearr_15022_15086[(2)] = inst_14931);

(statearr_15022_15086[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (30))){
var state_14952__$1 = state_14952;
var statearr_15023_15087 = state_14952__$1;
(statearr_15023_15087[(2)] = null);

(statearr_15023_15087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (10))){
var inst_14836 = (state_14952[(14)]);
var inst_14834 = (state_14952[(15)]);
var inst_14842 = cljs.core._nth.call(null,inst_14834,inst_14836);
var inst_14843 = cljs.core.nth.call(null,inst_14842,(0),null);
var inst_14844 = cljs.core.nth.call(null,inst_14842,(1),null);
var state_14952__$1 = (function (){var statearr_15024 = state_14952;
(statearr_15024[(26)] = inst_14843);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14844)){
var statearr_15025_15088 = state_14952__$1;
(statearr_15025_15088[(1)] = (13));

} else {
var statearr_15026_15089 = state_14952__$1;
(statearr_15026_15089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (18))){
var inst_14877 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_15027_15090 = state_14952__$1;
(statearr_15027_15090[(2)] = inst_14877);

(statearr_15027_15090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (42))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14952__$1,(45),dchan);
} else {
if((state_val_14953 === (37))){
var inst_14911 = (state_14952[(25)]);
var inst_14824 = (state_14952[(11)]);
var inst_14920 = (state_14952[(23)]);
var inst_14920__$1 = cljs.core.first.call(null,inst_14911);
var inst_14921 = cljs.core.async.put_BANG_.call(null,inst_14920__$1,inst_14824,done);
var state_14952__$1 = (function (){var statearr_15028 = state_14952;
(statearr_15028[(23)] = inst_14920__$1);

return statearr_15028;
})();
if(cljs.core.truth_(inst_14921)){
var statearr_15029_15091 = state_14952__$1;
(statearr_15029_15091[(1)] = (39));

} else {
var statearr_15030_15092 = state_14952__$1;
(statearr_15030_15092[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (8))){
var inst_14835 = (state_14952[(13)]);
var inst_14836 = (state_14952[(14)]);
var inst_14838 = (inst_14836 < inst_14835);
var inst_14839 = inst_14838;
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14839)){
var statearr_15031_15093 = state_14952__$1;
(statearr_15031_15093[(1)] = (10));

} else {
var statearr_15032_15094 = state_14952__$1;
(statearr_15032_15094[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8508__auto___15040,cs,m,dchan,dctr,done))
;
return ((function (switch__8433__auto__,c__8508__auto___15040,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8434__auto__ = null;
var cljs$core$async$mult_$_state_machine__8434__auto____0 = (function (){
var statearr_15036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15036[(0)] = cljs$core$async$mult_$_state_machine__8434__auto__);

(statearr_15036[(1)] = (1));

return statearr_15036;
});
var cljs$core$async$mult_$_state_machine__8434__auto____1 = (function (state_14952){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_14952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15037){if((e15037 instanceof Object)){
var ex__8437__auto__ = e15037;
var statearr_15038_15095 = state_14952;
(statearr_15038_15095[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15096 = state_14952;
state_14952 = G__15096;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8434__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8434__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8434__auto____0;
cljs$core$async$mult_$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8434__auto____1;
return cljs$core$async$mult_$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15040,cs,m,dchan,dctr,done))
})();
var state__8510__auto__ = (function (){var statearr_15039 = f__8509__auto__.call(null);
(statearr_15039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15040);

return statearr_15039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15040,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args15097 = [];
var len__5499__auto___15100 = arguments.length;
var i__5500__auto___15101 = (0);
while(true){
if((i__5500__auto___15101 < len__5499__auto___15100)){
args15097.push((arguments[i__5500__auto___15101]));

var G__15102 = (i__5500__auto___15101 + (1));
i__5500__auto___15101 = G__15102;
continue;
} else {
}
break;
}

var G__15099 = args15097.length;
switch (G__15099) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15097.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m,ch);
} else {
var m__5097__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m,ch);
} else {
var m__5097__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m);
} else {
var m__5097__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m,state_map);
} else {
var m__5097__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5096__auto__ = (((m == null))?null:m);
var m__5097__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,m,mode);
} else {
var m__5097__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
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
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t15269 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15269 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15270){
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
this.meta15270 = meta15270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15271,meta15270__$1){
var self__ = this;
var _15271__$1 = this;
return (new cljs.core.async.t15269(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15270__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15271){
var self__ = this;
var _15271__$1 = this;
return self__.meta15270;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t15269.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15270","meta15270",-266333911,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15269.cljs$lang$type = true;

cljs.core.async.t15269.cljs$lang$ctorStr = "cljs.core.async/t15269";

cljs.core.async.t15269.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t15269");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t15269 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t15269(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15270){
return (new cljs.core.async.t15269(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15270));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t15269(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8508__auto___15432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15369){
var state_val_15370 = (state_15369[(1)]);
if((state_val_15370 === (7))){
var inst_15287 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15371_15433 = state_15369__$1;
(statearr_15371_15433[(2)] = inst_15287);

(statearr_15371_15433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (20))){
var inst_15299 = (state_15369[(7)]);
var state_15369__$1 = state_15369;
var statearr_15372_15434 = state_15369__$1;
(statearr_15372_15434[(2)] = inst_15299);

(statearr_15372_15434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (27))){
var state_15369__$1 = state_15369;
var statearr_15373_15435 = state_15369__$1;
(statearr_15373_15435[(2)] = null);

(statearr_15373_15435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (1))){
var inst_15275 = (state_15369[(8)]);
var inst_15275__$1 = calc_state.call(null);
var inst_15277 = (inst_15275__$1 == null);
var inst_15278 = cljs.core.not.call(null,inst_15277);
var state_15369__$1 = (function (){var statearr_15374 = state_15369;
(statearr_15374[(8)] = inst_15275__$1);

return statearr_15374;
})();
if(inst_15278){
var statearr_15375_15436 = state_15369__$1;
(statearr_15375_15436[(1)] = (2));

} else {
var statearr_15376_15437 = state_15369__$1;
(statearr_15376_15437[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (24))){
var inst_15343 = (state_15369[(9)]);
var inst_15322 = (state_15369[(10)]);
var inst_15329 = (state_15369[(11)]);
var inst_15343__$1 = inst_15322.call(null,inst_15329);
var state_15369__$1 = (function (){var statearr_15377 = state_15369;
(statearr_15377[(9)] = inst_15343__$1);

return statearr_15377;
})();
if(cljs.core.truth_(inst_15343__$1)){
var statearr_15378_15438 = state_15369__$1;
(statearr_15378_15438[(1)] = (29));

} else {
var statearr_15379_15439 = state_15369__$1;
(statearr_15379_15439[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (4))){
var inst_15290 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15290)){
var statearr_15380_15440 = state_15369__$1;
(statearr_15380_15440[(1)] = (8));

} else {
var statearr_15381_15441 = state_15369__$1;
(statearr_15381_15441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (15))){
var inst_15316 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15316)){
var statearr_15382_15442 = state_15369__$1;
(statearr_15382_15442[(1)] = (19));

} else {
var statearr_15383_15443 = state_15369__$1;
(statearr_15383_15443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (21))){
var inst_15321 = (state_15369[(12)]);
var inst_15321__$1 = (state_15369[(2)]);
var inst_15322 = cljs.core.get.call(null,inst_15321__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15323 = cljs.core.get.call(null,inst_15321__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15324 = cljs.core.get.call(null,inst_15321__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15369__$1 = (function (){var statearr_15384 = state_15369;
(statearr_15384[(12)] = inst_15321__$1);

(statearr_15384[(13)] = inst_15323);

(statearr_15384[(10)] = inst_15322);

return statearr_15384;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15369__$1,(22),inst_15324);
} else {
if((state_val_15370 === (31))){
var inst_15351 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15351)){
var statearr_15385_15444 = state_15369__$1;
(statearr_15385_15444[(1)] = (32));

} else {
var statearr_15386_15445 = state_15369__$1;
(statearr_15386_15445[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (32))){
var inst_15328 = (state_15369[(14)]);
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15369__$1,(35),out,inst_15328);
} else {
if((state_val_15370 === (33))){
var inst_15321 = (state_15369[(12)]);
var inst_15299 = inst_15321;
var state_15369__$1 = (function (){var statearr_15387 = state_15369;
(statearr_15387[(7)] = inst_15299);

return statearr_15387;
})();
var statearr_15388_15446 = state_15369__$1;
(statearr_15388_15446[(2)] = null);

(statearr_15388_15446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (13))){
var inst_15299 = (state_15369[(7)]);
var inst_15306 = inst_15299.cljs$lang$protocol_mask$partition0$;
var inst_15307 = (inst_15306 & (64));
var inst_15308 = inst_15299.cljs$core$ISeq$;
var inst_15309 = (inst_15307) || (inst_15308);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15309)){
var statearr_15389_15447 = state_15369__$1;
(statearr_15389_15447[(1)] = (16));

} else {
var statearr_15390_15448 = state_15369__$1;
(statearr_15390_15448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (22))){
var inst_15328 = (state_15369[(14)]);
var inst_15329 = (state_15369[(11)]);
var inst_15327 = (state_15369[(2)]);
var inst_15328__$1 = cljs.core.nth.call(null,inst_15327,(0),null);
var inst_15329__$1 = cljs.core.nth.call(null,inst_15327,(1),null);
var inst_15330 = (inst_15328__$1 == null);
var inst_15331 = cljs.core._EQ_.call(null,inst_15329__$1,change);
var inst_15332 = (inst_15330) || (inst_15331);
var state_15369__$1 = (function (){var statearr_15391 = state_15369;
(statearr_15391[(14)] = inst_15328__$1);

(statearr_15391[(11)] = inst_15329__$1);

return statearr_15391;
})();
if(cljs.core.truth_(inst_15332)){
var statearr_15392_15449 = state_15369__$1;
(statearr_15392_15449[(1)] = (23));

} else {
var statearr_15393_15450 = state_15369__$1;
(statearr_15393_15450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (36))){
var inst_15321 = (state_15369[(12)]);
var inst_15299 = inst_15321;
var state_15369__$1 = (function (){var statearr_15394 = state_15369;
(statearr_15394[(7)] = inst_15299);

return statearr_15394;
})();
var statearr_15395_15451 = state_15369__$1;
(statearr_15395_15451[(2)] = null);

(statearr_15395_15451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (29))){
var inst_15343 = (state_15369[(9)]);
var state_15369__$1 = state_15369;
var statearr_15396_15452 = state_15369__$1;
(statearr_15396_15452[(2)] = inst_15343);

(statearr_15396_15452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (6))){
var state_15369__$1 = state_15369;
var statearr_15397_15453 = state_15369__$1;
(statearr_15397_15453[(2)] = false);

(statearr_15397_15453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (28))){
var inst_15339 = (state_15369[(2)]);
var inst_15340 = calc_state.call(null);
var inst_15299 = inst_15340;
var state_15369__$1 = (function (){var statearr_15398 = state_15369;
(statearr_15398[(7)] = inst_15299);

(statearr_15398[(15)] = inst_15339);

return statearr_15398;
})();
var statearr_15399_15454 = state_15369__$1;
(statearr_15399_15454[(2)] = null);

(statearr_15399_15454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (25))){
var inst_15365 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15400_15455 = state_15369__$1;
(statearr_15400_15455[(2)] = inst_15365);

(statearr_15400_15455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (34))){
var inst_15363 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15401_15456 = state_15369__$1;
(statearr_15401_15456[(2)] = inst_15363);

(statearr_15401_15456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (17))){
var state_15369__$1 = state_15369;
var statearr_15402_15457 = state_15369__$1;
(statearr_15402_15457[(2)] = false);

(statearr_15402_15457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (3))){
var state_15369__$1 = state_15369;
var statearr_15403_15458 = state_15369__$1;
(statearr_15403_15458[(2)] = false);

(statearr_15403_15458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (12))){
var inst_15367 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15369__$1,inst_15367);
} else {
if((state_val_15370 === (2))){
var inst_15275 = (state_15369[(8)]);
var inst_15280 = inst_15275.cljs$lang$protocol_mask$partition0$;
var inst_15281 = (inst_15280 & (64));
var inst_15282 = inst_15275.cljs$core$ISeq$;
var inst_15283 = (inst_15281) || (inst_15282);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15283)){
var statearr_15404_15459 = state_15369__$1;
(statearr_15404_15459[(1)] = (5));

} else {
var statearr_15405_15460 = state_15369__$1;
(statearr_15405_15460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (23))){
var inst_15328 = (state_15369[(14)]);
var inst_15334 = (inst_15328 == null);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15334)){
var statearr_15406_15461 = state_15369__$1;
(statearr_15406_15461[(1)] = (26));

} else {
var statearr_15407_15462 = state_15369__$1;
(statearr_15407_15462[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (35))){
var inst_15354 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15354)){
var statearr_15408_15463 = state_15369__$1;
(statearr_15408_15463[(1)] = (36));

} else {
var statearr_15409_15464 = state_15369__$1;
(statearr_15409_15464[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (19))){
var inst_15299 = (state_15369[(7)]);
var inst_15318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15299);
var state_15369__$1 = state_15369;
var statearr_15410_15465 = state_15369__$1;
(statearr_15410_15465[(2)] = inst_15318);

(statearr_15410_15465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (11))){
var inst_15299 = (state_15369[(7)]);
var inst_15303 = (inst_15299 == null);
var inst_15304 = cljs.core.not.call(null,inst_15303);
var state_15369__$1 = state_15369;
if(inst_15304){
var statearr_15411_15466 = state_15369__$1;
(statearr_15411_15466[(1)] = (13));

} else {
var statearr_15412_15467 = state_15369__$1;
(statearr_15412_15467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (9))){
var inst_15275 = (state_15369[(8)]);
var state_15369__$1 = state_15369;
var statearr_15413_15468 = state_15369__$1;
(statearr_15413_15468[(2)] = inst_15275);

(statearr_15413_15468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (5))){
var state_15369__$1 = state_15369;
var statearr_15414_15469 = state_15369__$1;
(statearr_15414_15469[(2)] = true);

(statearr_15414_15469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (14))){
var state_15369__$1 = state_15369;
var statearr_15415_15470 = state_15369__$1;
(statearr_15415_15470[(2)] = false);

(statearr_15415_15470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (26))){
var inst_15329 = (state_15369[(11)]);
var inst_15336 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15329);
var state_15369__$1 = state_15369;
var statearr_15416_15471 = state_15369__$1;
(statearr_15416_15471[(2)] = inst_15336);

(statearr_15416_15471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (16))){
var state_15369__$1 = state_15369;
var statearr_15417_15472 = state_15369__$1;
(statearr_15417_15472[(2)] = true);

(statearr_15417_15472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (38))){
var inst_15359 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15418_15473 = state_15369__$1;
(statearr_15418_15473[(2)] = inst_15359);

(statearr_15418_15473[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (30))){
var inst_15323 = (state_15369[(13)]);
var inst_15322 = (state_15369[(10)]);
var inst_15329 = (state_15369[(11)]);
var inst_15346 = cljs.core.empty_QMARK_.call(null,inst_15322);
var inst_15347 = inst_15323.call(null,inst_15329);
var inst_15348 = cljs.core.not.call(null,inst_15347);
var inst_15349 = (inst_15346) && (inst_15348);
var state_15369__$1 = state_15369;
var statearr_15419_15474 = state_15369__$1;
(statearr_15419_15474[(2)] = inst_15349);

(statearr_15419_15474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (10))){
var inst_15275 = (state_15369[(8)]);
var inst_15295 = (state_15369[(2)]);
var inst_15296 = cljs.core.get.call(null,inst_15295,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15297 = cljs.core.get.call(null,inst_15295,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15298 = cljs.core.get.call(null,inst_15295,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15299 = inst_15275;
var state_15369__$1 = (function (){var statearr_15420 = state_15369;
(statearr_15420[(7)] = inst_15299);

(statearr_15420[(16)] = inst_15297);

(statearr_15420[(17)] = inst_15298);

(statearr_15420[(18)] = inst_15296);

return statearr_15420;
})();
var statearr_15421_15475 = state_15369__$1;
(statearr_15421_15475[(2)] = null);

(statearr_15421_15475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (18))){
var inst_15313 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15422_15476 = state_15369__$1;
(statearr_15422_15476[(2)] = inst_15313);

(statearr_15422_15476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (37))){
var state_15369__$1 = state_15369;
var statearr_15423_15477 = state_15369__$1;
(statearr_15423_15477[(2)] = null);

(statearr_15423_15477[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (8))){
var inst_15275 = (state_15369[(8)]);
var inst_15292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15275);
var state_15369__$1 = state_15369;
var statearr_15424_15478 = state_15369__$1;
(statearr_15424_15478[(2)] = inst_15292);

(statearr_15424_15478[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8508__auto___15432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8433__auto__,c__8508__auto___15432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8434__auto__ = null;
var cljs$core$async$mix_$_state_machine__8434__auto____0 = (function (){
var statearr_15428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15428[(0)] = cljs$core$async$mix_$_state_machine__8434__auto__);

(statearr_15428[(1)] = (1));

return statearr_15428;
});
var cljs$core$async$mix_$_state_machine__8434__auto____1 = (function (state_15369){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_15369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15429){if((e15429 instanceof Object)){
var ex__8437__auto__ = e15429;
var statearr_15430_15479 = state_15369;
(statearr_15430_15479[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15480 = state_15369;
state_15369 = G__15480;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8434__auto__ = function(state_15369){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8434__auto____1.call(this,state_15369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8434__auto____0;
cljs$core$async$mix_$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8434__auto____1;
return cljs$core$async$mix_$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8510__auto__ = (function (){var statearr_15431 = f__8509__auto__.call(null);
(statearr_15431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15432);

return statearr_15431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5096__auto__ = (((p == null))?null:p);
var m__5097__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5097__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5096__auto__ = (((p == null))?null:p);
var m__5097__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,p,v,ch);
} else {
var m__5097__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args15483 = [];
var len__5499__auto___15486 = arguments.length;
var i__5500__auto___15487 = (0);
while(true){
if((i__5500__auto___15487 < len__5499__auto___15486)){
args15483.push((arguments[i__5500__auto___15487]));

var G__15488 = (i__5500__auto___15487 + (1));
i__5500__auto___15487 = G__15488;
continue;
} else {
}
break;
}

var G__15485 = args15483.length;
switch (G__15485) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15483.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5096__auto__ = (((p == null))?null:p);
var m__5097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,p);
} else {
var m__5097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5096__auto__ = (((p == null))?null:p);
var m__5097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,p,v);
} else {
var m__5097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
cljs.core.async.pub = (function cljs$core$async$pub(){
var args15491 = [];
var len__5499__auto___15616 = arguments.length;
var i__5500__auto___15617 = (0);
while(true){
if((i__5500__auto___15617 < len__5499__auto___15616)){
args15491.push((arguments[i__5500__auto___15617]));

var G__15618 = (i__5500__auto___15617 + (1));
i__5500__auto___15617 = G__15618;
continue;
} else {
}
break;
}

var G__15493 = args15491.length;
switch (G__15493) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15491.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4460__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4460__auto__,mults){
return (function (p1__15490_SHARP_){
if(cljs.core.truth_(p1__15490_SHARP_.call(null,topic))){
return p1__15490_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4460__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15494 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15494 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15495){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15495 = meta15495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15496,meta15495__$1){
var self__ = this;
var _15496__$1 = this;
return (new cljs.core.async.t15494(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15495__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15496){
var self__ = this;
var _15496__$1 = this;
return self__.meta15495;
});})(mults,ensure_mult))
;

cljs.core.async.t15494.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15494.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15494.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15494.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t15494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15494.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15494.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15495","meta15495",1747836082,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t15494.cljs$lang$type = true;

cljs.core.async.t15494.cljs$lang$ctorStr = "cljs.core.async/t15494";

cljs.core.async.t15494.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t15494");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15494 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15494(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15495){
return (new cljs.core.async.t15494(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15495));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15494(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8508__auto___15620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15620,mults,ensure_mult,p){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15620,mults,ensure_mult,p){
return (function (state_15568){
var state_val_15569 = (state_15568[(1)]);
if((state_val_15569 === (7))){
var inst_15564 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15570_15621 = state_15568__$1;
(statearr_15570_15621[(2)] = inst_15564);

(statearr_15570_15621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (20))){
var state_15568__$1 = state_15568;
var statearr_15571_15622 = state_15568__$1;
(statearr_15571_15622[(2)] = null);

(statearr_15571_15622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (1))){
var state_15568__$1 = state_15568;
var statearr_15572_15623 = state_15568__$1;
(statearr_15572_15623[(2)] = null);

(statearr_15572_15623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (24))){
var inst_15547 = (state_15568[(7)]);
var inst_15556 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15547);
var state_15568__$1 = state_15568;
var statearr_15573_15624 = state_15568__$1;
(statearr_15573_15624[(2)] = inst_15556);

(statearr_15573_15624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (4))){
var inst_15499 = (state_15568[(8)]);
var inst_15499__$1 = (state_15568[(2)]);
var inst_15500 = (inst_15499__$1 == null);
var state_15568__$1 = (function (){var statearr_15574 = state_15568;
(statearr_15574[(8)] = inst_15499__$1);

return statearr_15574;
})();
if(cljs.core.truth_(inst_15500)){
var statearr_15575_15625 = state_15568__$1;
(statearr_15575_15625[(1)] = (5));

} else {
var statearr_15576_15626 = state_15568__$1;
(statearr_15576_15626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (15))){
var inst_15541 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15577_15627 = state_15568__$1;
(statearr_15577_15627[(2)] = inst_15541);

(statearr_15577_15627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (21))){
var inst_15561 = (state_15568[(2)]);
var state_15568__$1 = (function (){var statearr_15578 = state_15568;
(statearr_15578[(9)] = inst_15561);

return statearr_15578;
})();
var statearr_15579_15628 = state_15568__$1;
(statearr_15579_15628[(2)] = null);

(statearr_15579_15628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (13))){
var inst_15523 = (state_15568[(10)]);
var inst_15525 = cljs.core.chunked_seq_QMARK_.call(null,inst_15523);
var state_15568__$1 = state_15568;
if(inst_15525){
var statearr_15580_15629 = state_15568__$1;
(statearr_15580_15629[(1)] = (16));

} else {
var statearr_15581_15630 = state_15568__$1;
(statearr_15581_15630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (22))){
var inst_15553 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15553)){
var statearr_15582_15631 = state_15568__$1;
(statearr_15582_15631[(1)] = (23));

} else {
var statearr_15583_15632 = state_15568__$1;
(statearr_15583_15632[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (6))){
var inst_15499 = (state_15568[(8)]);
var inst_15549 = (state_15568[(11)]);
var inst_15547 = (state_15568[(7)]);
var inst_15547__$1 = topic_fn.call(null,inst_15499);
var inst_15548 = cljs.core.deref.call(null,mults);
var inst_15549__$1 = cljs.core.get.call(null,inst_15548,inst_15547__$1);
var state_15568__$1 = (function (){var statearr_15584 = state_15568;
(statearr_15584[(11)] = inst_15549__$1);

(statearr_15584[(7)] = inst_15547__$1);

return statearr_15584;
})();
if(cljs.core.truth_(inst_15549__$1)){
var statearr_15585_15633 = state_15568__$1;
(statearr_15585_15633[(1)] = (19));

} else {
var statearr_15586_15634 = state_15568__$1;
(statearr_15586_15634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (25))){
var inst_15558 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15587_15635 = state_15568__$1;
(statearr_15587_15635[(2)] = inst_15558);

(statearr_15587_15635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (17))){
var inst_15523 = (state_15568[(10)]);
var inst_15532 = cljs.core.first.call(null,inst_15523);
var inst_15533 = cljs.core.async.muxch_STAR_.call(null,inst_15532);
var inst_15534 = cljs.core.async.close_BANG_.call(null,inst_15533);
var inst_15535 = cljs.core.next.call(null,inst_15523);
var inst_15509 = inst_15535;
var inst_15510 = null;
var inst_15511 = (0);
var inst_15512 = (0);
var state_15568__$1 = (function (){var statearr_15588 = state_15568;
(statearr_15588[(12)] = inst_15512);

(statearr_15588[(13)] = inst_15509);

(statearr_15588[(14)] = inst_15511);

(statearr_15588[(15)] = inst_15534);

(statearr_15588[(16)] = inst_15510);

return statearr_15588;
})();
var statearr_15589_15636 = state_15568__$1;
(statearr_15589_15636[(2)] = null);

(statearr_15589_15636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (3))){
var inst_15566 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15568__$1,inst_15566);
} else {
if((state_val_15569 === (12))){
var inst_15543 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15590_15637 = state_15568__$1;
(statearr_15590_15637[(2)] = inst_15543);

(statearr_15590_15637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (2))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15568__$1,(4),ch);
} else {
if((state_val_15569 === (23))){
var state_15568__$1 = state_15568;
var statearr_15591_15638 = state_15568__$1;
(statearr_15591_15638[(2)] = null);

(statearr_15591_15638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (19))){
var inst_15499 = (state_15568[(8)]);
var inst_15549 = (state_15568[(11)]);
var inst_15551 = cljs.core.async.muxch_STAR_.call(null,inst_15549);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15568__$1,(22),inst_15551,inst_15499);
} else {
if((state_val_15569 === (11))){
var inst_15509 = (state_15568[(13)]);
var inst_15523 = (state_15568[(10)]);
var inst_15523__$1 = cljs.core.seq.call(null,inst_15509);
var state_15568__$1 = (function (){var statearr_15592 = state_15568;
(statearr_15592[(10)] = inst_15523__$1);

return statearr_15592;
})();
if(inst_15523__$1){
var statearr_15593_15639 = state_15568__$1;
(statearr_15593_15639[(1)] = (13));

} else {
var statearr_15594_15640 = state_15568__$1;
(statearr_15594_15640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (9))){
var inst_15545 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15595_15641 = state_15568__$1;
(statearr_15595_15641[(2)] = inst_15545);

(statearr_15595_15641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (5))){
var inst_15506 = cljs.core.deref.call(null,mults);
var inst_15507 = cljs.core.vals.call(null,inst_15506);
var inst_15508 = cljs.core.seq.call(null,inst_15507);
var inst_15509 = inst_15508;
var inst_15510 = null;
var inst_15511 = (0);
var inst_15512 = (0);
var state_15568__$1 = (function (){var statearr_15596 = state_15568;
(statearr_15596[(12)] = inst_15512);

(statearr_15596[(13)] = inst_15509);

(statearr_15596[(14)] = inst_15511);

(statearr_15596[(16)] = inst_15510);

return statearr_15596;
})();
var statearr_15597_15642 = state_15568__$1;
(statearr_15597_15642[(2)] = null);

(statearr_15597_15642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (14))){
var state_15568__$1 = state_15568;
var statearr_15601_15643 = state_15568__$1;
(statearr_15601_15643[(2)] = null);

(statearr_15601_15643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (16))){
var inst_15523 = (state_15568[(10)]);
var inst_15527 = cljs.core.chunk_first.call(null,inst_15523);
var inst_15528 = cljs.core.chunk_rest.call(null,inst_15523);
var inst_15529 = cljs.core.count.call(null,inst_15527);
var inst_15509 = inst_15528;
var inst_15510 = inst_15527;
var inst_15511 = inst_15529;
var inst_15512 = (0);
var state_15568__$1 = (function (){var statearr_15602 = state_15568;
(statearr_15602[(12)] = inst_15512);

(statearr_15602[(13)] = inst_15509);

(statearr_15602[(14)] = inst_15511);

(statearr_15602[(16)] = inst_15510);

return statearr_15602;
})();
var statearr_15603_15644 = state_15568__$1;
(statearr_15603_15644[(2)] = null);

(statearr_15603_15644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (10))){
var inst_15512 = (state_15568[(12)]);
var inst_15509 = (state_15568[(13)]);
var inst_15511 = (state_15568[(14)]);
var inst_15510 = (state_15568[(16)]);
var inst_15517 = cljs.core._nth.call(null,inst_15510,inst_15512);
var inst_15518 = cljs.core.async.muxch_STAR_.call(null,inst_15517);
var inst_15519 = cljs.core.async.close_BANG_.call(null,inst_15518);
var inst_15520 = (inst_15512 + (1));
var tmp15598 = inst_15509;
var tmp15599 = inst_15511;
var tmp15600 = inst_15510;
var inst_15509__$1 = tmp15598;
var inst_15510__$1 = tmp15600;
var inst_15511__$1 = tmp15599;
var inst_15512__$1 = inst_15520;
var state_15568__$1 = (function (){var statearr_15604 = state_15568;
(statearr_15604[(12)] = inst_15512__$1);

(statearr_15604[(13)] = inst_15509__$1);

(statearr_15604[(17)] = inst_15519);

(statearr_15604[(14)] = inst_15511__$1);

(statearr_15604[(16)] = inst_15510__$1);

return statearr_15604;
})();
var statearr_15605_15645 = state_15568__$1;
(statearr_15605_15645[(2)] = null);

(statearr_15605_15645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (18))){
var inst_15538 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15606_15646 = state_15568__$1;
(statearr_15606_15646[(2)] = inst_15538);

(statearr_15606_15646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15569 === (8))){
var inst_15512 = (state_15568[(12)]);
var inst_15511 = (state_15568[(14)]);
var inst_15514 = (inst_15512 < inst_15511);
var inst_15515 = inst_15514;
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15515)){
var statearr_15607_15647 = state_15568__$1;
(statearr_15607_15647[(1)] = (10));

} else {
var statearr_15608_15648 = state_15568__$1;
(statearr_15608_15648[(1)] = (11));

}

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
}
}
}
}
}
}
});})(c__8508__auto___15620,mults,ensure_mult,p))
;
return ((function (switch__8433__auto__,c__8508__auto___15620,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_15612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15612[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_15612[(1)] = (1));

return statearr_15612;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_15568){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_15568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15613){if((e15613 instanceof Object)){
var ex__8437__auto__ = e15613;
var statearr_15614_15649 = state_15568;
(statearr_15614_15649[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15650 = state_15568;
state_15568 = G__15650;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15620,mults,ensure_mult,p))
})();
var state__8510__auto__ = (function (){var statearr_15615 = f__8509__auto__.call(null);
(statearr_15615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15620);

return statearr_15615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15620,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args15651 = [];
var len__5499__auto___15654 = arguments.length;
var i__5500__auto___15655 = (0);
while(true){
if((i__5500__auto___15655 < len__5499__auto___15654)){
args15651.push((arguments[i__5500__auto___15655]));

var G__15656 = (i__5500__auto___15655 + (1));
i__5500__auto___15655 = G__15656;
continue;
} else {
}
break;
}

var G__15653 = args15651.length;
switch (G__15653) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15651.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args15658 = [];
var len__5499__auto___15661 = arguments.length;
var i__5500__auto___15662 = (0);
while(true){
if((i__5500__auto___15662 < len__5499__auto___15661)){
args15658.push((arguments[i__5500__auto___15662]));

var G__15663 = (i__5500__auto___15662 + (1));
i__5500__auto___15662 = G__15663;
continue;
} else {
}
break;
}

var G__15660 = args15658.length;
switch (G__15660) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15658.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args15665 = [];
var len__5499__auto___15736 = arguments.length;
var i__5500__auto___15737 = (0);
while(true){
if((i__5500__auto___15737 < len__5499__auto___15736)){
args15665.push((arguments[i__5500__auto___15737]));

var G__15738 = (i__5500__auto___15737 + (1));
i__5500__auto___15737 = G__15738;
continue;
} else {
}
break;
}

var G__15667 = args15665.length;
switch (G__15667) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15665.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8508__auto___15740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15740,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15740,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15706){
var state_val_15707 = (state_15706[(1)]);
if((state_val_15707 === (7))){
var state_15706__$1 = state_15706;
var statearr_15708_15741 = state_15706__$1;
(statearr_15708_15741[(2)] = null);

(statearr_15708_15741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (1))){
var state_15706__$1 = state_15706;
var statearr_15709_15742 = state_15706__$1;
(statearr_15709_15742[(2)] = null);

(statearr_15709_15742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (4))){
var inst_15670 = (state_15706[(7)]);
var inst_15672 = (inst_15670 < cnt);
var state_15706__$1 = state_15706;
if(cljs.core.truth_(inst_15672)){
var statearr_15710_15743 = state_15706__$1;
(statearr_15710_15743[(1)] = (6));

} else {
var statearr_15711_15744 = state_15706__$1;
(statearr_15711_15744[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (15))){
var inst_15702 = (state_15706[(2)]);
var state_15706__$1 = state_15706;
var statearr_15712_15745 = state_15706__$1;
(statearr_15712_15745[(2)] = inst_15702);

(statearr_15712_15745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (13))){
var inst_15695 = cljs.core.async.close_BANG_.call(null,out);
var state_15706__$1 = state_15706;
var statearr_15713_15746 = state_15706__$1;
(statearr_15713_15746[(2)] = inst_15695);

(statearr_15713_15746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (6))){
var state_15706__$1 = state_15706;
var statearr_15714_15747 = state_15706__$1;
(statearr_15714_15747[(2)] = null);

(statearr_15714_15747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (3))){
var inst_15704 = (state_15706[(2)]);
var state_15706__$1 = state_15706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15706__$1,inst_15704);
} else {
if((state_val_15707 === (12))){
var inst_15692 = (state_15706[(8)]);
var inst_15692__$1 = (state_15706[(2)]);
var inst_15693 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15692__$1);
var state_15706__$1 = (function (){var statearr_15715 = state_15706;
(statearr_15715[(8)] = inst_15692__$1);

return statearr_15715;
})();
if(cljs.core.truth_(inst_15693)){
var statearr_15716_15748 = state_15706__$1;
(statearr_15716_15748[(1)] = (13));

} else {
var statearr_15717_15749 = state_15706__$1;
(statearr_15717_15749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (2))){
var inst_15669 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15670 = (0);
var state_15706__$1 = (function (){var statearr_15718 = state_15706;
(statearr_15718[(7)] = inst_15670);

(statearr_15718[(9)] = inst_15669);

return statearr_15718;
})();
var statearr_15719_15750 = state_15706__$1;
(statearr_15719_15750[(2)] = null);

(statearr_15719_15750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (11))){
var inst_15670 = (state_15706[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15706,(10),Object,null,(9));
var inst_15679 = chs__$1.call(null,inst_15670);
var inst_15680 = done.call(null,inst_15670);
var inst_15681 = cljs.core.async.take_BANG_.call(null,inst_15679,inst_15680);
var state_15706__$1 = state_15706;
var statearr_15720_15751 = state_15706__$1;
(statearr_15720_15751[(2)] = inst_15681);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15706__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (9))){
var inst_15670 = (state_15706[(7)]);
var inst_15683 = (state_15706[(2)]);
var inst_15684 = (inst_15670 + (1));
var inst_15670__$1 = inst_15684;
var state_15706__$1 = (function (){var statearr_15721 = state_15706;
(statearr_15721[(10)] = inst_15683);

(statearr_15721[(7)] = inst_15670__$1);

return statearr_15721;
})();
var statearr_15722_15752 = state_15706__$1;
(statearr_15722_15752[(2)] = null);

(statearr_15722_15752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (5))){
var inst_15690 = (state_15706[(2)]);
var state_15706__$1 = (function (){var statearr_15723 = state_15706;
(statearr_15723[(11)] = inst_15690);

return statearr_15723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15706__$1,(12),dchan);
} else {
if((state_val_15707 === (14))){
var inst_15692 = (state_15706[(8)]);
var inst_15697 = cljs.core.apply.call(null,f,inst_15692);
var state_15706__$1 = state_15706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15706__$1,(16),out,inst_15697);
} else {
if((state_val_15707 === (16))){
var inst_15699 = (state_15706[(2)]);
var state_15706__$1 = (function (){var statearr_15724 = state_15706;
(statearr_15724[(12)] = inst_15699);

return statearr_15724;
})();
var statearr_15725_15753 = state_15706__$1;
(statearr_15725_15753[(2)] = null);

(statearr_15725_15753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (10))){
var inst_15674 = (state_15706[(2)]);
var inst_15675 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15706__$1 = (function (){var statearr_15726 = state_15706;
(statearr_15726[(13)] = inst_15674);

return statearr_15726;
})();
var statearr_15727_15754 = state_15706__$1;
(statearr_15727_15754[(2)] = inst_15675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15706__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15707 === (8))){
var inst_15688 = (state_15706[(2)]);
var state_15706__$1 = state_15706;
var statearr_15728_15755 = state_15706__$1;
(statearr_15728_15755[(2)] = inst_15688);

(statearr_15728_15755[(1)] = (5));


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
});})(c__8508__auto___15740,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8433__auto__,c__8508__auto___15740,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_15732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15732[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_15732[(1)] = (1));

return statearr_15732;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_15706){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_15706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15733){if((e15733 instanceof Object)){
var ex__8437__auto__ = e15733;
var statearr_15734_15756 = state_15706;
(statearr_15734_15756[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15757 = state_15706;
state_15706 = G__15757;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_15706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_15706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15740,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8510__auto__ = (function (){var statearr_15735 = f__8509__auto__.call(null);
(statearr_15735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15740);

return statearr_15735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15740,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args15759 = [];
var len__5499__auto___15815 = arguments.length;
var i__5500__auto___15816 = (0);
while(true){
if((i__5500__auto___15816 < len__5499__auto___15815)){
args15759.push((arguments[i__5500__auto___15816]));

var G__15817 = (i__5500__auto___15816 + (1));
i__5500__auto___15816 = G__15817;
continue;
} else {
}
break;
}

var G__15761 = args15759.length;
switch (G__15761) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15759.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8508__auto___15819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15819,out){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15819,out){
return (function (state_15791){
var state_val_15792 = (state_15791[(1)]);
if((state_val_15792 === (7))){
var inst_15771 = (state_15791[(7)]);
var inst_15770 = (state_15791[(8)]);
var inst_15770__$1 = (state_15791[(2)]);
var inst_15771__$1 = cljs.core.nth.call(null,inst_15770__$1,(0),null);
var inst_15772 = cljs.core.nth.call(null,inst_15770__$1,(1),null);
var inst_15773 = (inst_15771__$1 == null);
var state_15791__$1 = (function (){var statearr_15793 = state_15791;
(statearr_15793[(7)] = inst_15771__$1);

(statearr_15793[(9)] = inst_15772);

(statearr_15793[(8)] = inst_15770__$1);

return statearr_15793;
})();
if(cljs.core.truth_(inst_15773)){
var statearr_15794_15820 = state_15791__$1;
(statearr_15794_15820[(1)] = (8));

} else {
var statearr_15795_15821 = state_15791__$1;
(statearr_15795_15821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (1))){
var inst_15762 = cljs.core.vec.call(null,chs);
var inst_15763 = inst_15762;
var state_15791__$1 = (function (){var statearr_15796 = state_15791;
(statearr_15796[(10)] = inst_15763);

return statearr_15796;
})();
var statearr_15797_15822 = state_15791__$1;
(statearr_15797_15822[(2)] = null);

(statearr_15797_15822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (4))){
var inst_15763 = (state_15791[(10)]);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15791__$1,(7),inst_15763);
} else {
if((state_val_15792 === (6))){
var inst_15787 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15798_15823 = state_15791__$1;
(statearr_15798_15823[(2)] = inst_15787);

(statearr_15798_15823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (3))){
var inst_15789 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15791__$1,inst_15789);
} else {
if((state_val_15792 === (2))){
var inst_15763 = (state_15791[(10)]);
var inst_15765 = cljs.core.count.call(null,inst_15763);
var inst_15766 = (inst_15765 > (0));
var state_15791__$1 = state_15791;
if(cljs.core.truth_(inst_15766)){
var statearr_15800_15824 = state_15791__$1;
(statearr_15800_15824[(1)] = (4));

} else {
var statearr_15801_15825 = state_15791__$1;
(statearr_15801_15825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (11))){
var inst_15763 = (state_15791[(10)]);
var inst_15780 = (state_15791[(2)]);
var tmp15799 = inst_15763;
var inst_15763__$1 = tmp15799;
var state_15791__$1 = (function (){var statearr_15802 = state_15791;
(statearr_15802[(10)] = inst_15763__$1);

(statearr_15802[(11)] = inst_15780);

return statearr_15802;
})();
var statearr_15803_15826 = state_15791__$1;
(statearr_15803_15826[(2)] = null);

(statearr_15803_15826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (9))){
var inst_15771 = (state_15791[(7)]);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15791__$1,(11),out,inst_15771);
} else {
if((state_val_15792 === (5))){
var inst_15785 = cljs.core.async.close_BANG_.call(null,out);
var state_15791__$1 = state_15791;
var statearr_15804_15827 = state_15791__$1;
(statearr_15804_15827[(2)] = inst_15785);

(statearr_15804_15827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (10))){
var inst_15783 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15805_15828 = state_15791__$1;
(statearr_15805_15828[(2)] = inst_15783);

(statearr_15805_15828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (8))){
var inst_15771 = (state_15791[(7)]);
var inst_15772 = (state_15791[(9)]);
var inst_15763 = (state_15791[(10)]);
var inst_15770 = (state_15791[(8)]);
var inst_15775 = (function (){var cs = inst_15763;
var vec__15768 = inst_15770;
var v = inst_15771;
var c = inst_15772;
return ((function (cs,vec__15768,v,c,inst_15771,inst_15772,inst_15763,inst_15770,state_val_15792,c__8508__auto___15819,out){
return (function (p1__15758_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15758_SHARP_);
});
;})(cs,vec__15768,v,c,inst_15771,inst_15772,inst_15763,inst_15770,state_val_15792,c__8508__auto___15819,out))
})();
var inst_15776 = cljs.core.filterv.call(null,inst_15775,inst_15763);
var inst_15763__$1 = inst_15776;
var state_15791__$1 = (function (){var statearr_15806 = state_15791;
(statearr_15806[(10)] = inst_15763__$1);

return statearr_15806;
})();
var statearr_15807_15829 = state_15791__$1;
(statearr_15807_15829[(2)] = null);

(statearr_15807_15829[(1)] = (2));


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
});})(c__8508__auto___15819,out))
;
return ((function (switch__8433__auto__,c__8508__auto___15819,out){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_15811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15811[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_15811[(1)] = (1));

return statearr_15811;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_15791){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_15791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15812){if((e15812 instanceof Object)){
var ex__8437__auto__ = e15812;
var statearr_15813_15830 = state_15791;
(statearr_15813_15830[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15831 = state_15791;
state_15791 = G__15831;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_15791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_15791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15819,out))
})();
var state__8510__auto__ = (function (){var statearr_15814 = f__8509__auto__.call(null);
(statearr_15814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15819);

return statearr_15814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15819,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args15832 = [];
var len__5499__auto___15881 = arguments.length;
var i__5500__auto___15882 = (0);
while(true){
if((i__5500__auto___15882 < len__5499__auto___15881)){
args15832.push((arguments[i__5500__auto___15882]));

var G__15883 = (i__5500__auto___15882 + (1));
i__5500__auto___15882 = G__15883;
continue;
} else {
}
break;
}

var G__15834 = args15832.length;
switch (G__15834) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15832.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8508__auto___15885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15885,out){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15885,out){
return (function (state_15858){
var state_val_15859 = (state_15858[(1)]);
if((state_val_15859 === (7))){
var inst_15840 = (state_15858[(7)]);
var inst_15840__$1 = (state_15858[(2)]);
var inst_15841 = (inst_15840__$1 == null);
var inst_15842 = cljs.core.not.call(null,inst_15841);
var state_15858__$1 = (function (){var statearr_15860 = state_15858;
(statearr_15860[(7)] = inst_15840__$1);

return statearr_15860;
})();
if(inst_15842){
var statearr_15861_15886 = state_15858__$1;
(statearr_15861_15886[(1)] = (8));

} else {
var statearr_15862_15887 = state_15858__$1;
(statearr_15862_15887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (1))){
var inst_15835 = (0);
var state_15858__$1 = (function (){var statearr_15863 = state_15858;
(statearr_15863[(8)] = inst_15835);

return statearr_15863;
})();
var statearr_15864_15888 = state_15858__$1;
(statearr_15864_15888[(2)] = null);

(statearr_15864_15888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (4))){
var state_15858__$1 = state_15858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15858__$1,(7),ch);
} else {
if((state_val_15859 === (6))){
var inst_15853 = (state_15858[(2)]);
var state_15858__$1 = state_15858;
var statearr_15865_15889 = state_15858__$1;
(statearr_15865_15889[(2)] = inst_15853);

(statearr_15865_15889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (3))){
var inst_15855 = (state_15858[(2)]);
var inst_15856 = cljs.core.async.close_BANG_.call(null,out);
var state_15858__$1 = (function (){var statearr_15866 = state_15858;
(statearr_15866[(9)] = inst_15855);

return statearr_15866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15858__$1,inst_15856);
} else {
if((state_val_15859 === (2))){
var inst_15835 = (state_15858[(8)]);
var inst_15837 = (inst_15835 < n);
var state_15858__$1 = state_15858;
if(cljs.core.truth_(inst_15837)){
var statearr_15867_15890 = state_15858__$1;
(statearr_15867_15890[(1)] = (4));

} else {
var statearr_15868_15891 = state_15858__$1;
(statearr_15868_15891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (11))){
var inst_15835 = (state_15858[(8)]);
var inst_15845 = (state_15858[(2)]);
var inst_15846 = (inst_15835 + (1));
var inst_15835__$1 = inst_15846;
var state_15858__$1 = (function (){var statearr_15869 = state_15858;
(statearr_15869[(10)] = inst_15845);

(statearr_15869[(8)] = inst_15835__$1);

return statearr_15869;
})();
var statearr_15870_15892 = state_15858__$1;
(statearr_15870_15892[(2)] = null);

(statearr_15870_15892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (9))){
var state_15858__$1 = state_15858;
var statearr_15871_15893 = state_15858__$1;
(statearr_15871_15893[(2)] = null);

(statearr_15871_15893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (5))){
var state_15858__$1 = state_15858;
var statearr_15872_15894 = state_15858__$1;
(statearr_15872_15894[(2)] = null);

(statearr_15872_15894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (10))){
var inst_15850 = (state_15858[(2)]);
var state_15858__$1 = state_15858;
var statearr_15873_15895 = state_15858__$1;
(statearr_15873_15895[(2)] = inst_15850);

(statearr_15873_15895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15859 === (8))){
var inst_15840 = (state_15858[(7)]);
var state_15858__$1 = state_15858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15858__$1,(11),out,inst_15840);
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
});})(c__8508__auto___15885,out))
;
return ((function (switch__8433__auto__,c__8508__auto___15885,out){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_15877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15877[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_15877[(1)] = (1));

return statearr_15877;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_15858){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_15858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15878){if((e15878 instanceof Object)){
var ex__8437__auto__ = e15878;
var statearr_15879_15896 = state_15858;
(statearr_15879_15896[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15897 = state_15858;
state_15858 = G__15897;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_15858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_15858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15885,out))
})();
var state__8510__auto__ = (function (){var statearr_15880 = f__8509__auto__.call(null);
(statearr_15880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15885);

return statearr_15880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15885,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15905 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15905 = (function (map_LT_,f,ch,meta15906){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15906 = meta15906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15907,meta15906__$1){
var self__ = this;
var _15907__$1 = this;
return (new cljs.core.async.t15905(self__.map_LT_,self__.f,self__.ch,meta15906__$1));
});

cljs.core.async.t15905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15907){
var self__ = this;
var _15907__$1 = this;
return self__.meta15906;
});

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15908 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15908 = (function (map_LT_,f,ch,meta15906,_,fn1,meta15909){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15906 = meta15906;
this._ = _;
this.fn1 = fn1;
this.meta15909 = meta15909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15910,meta15909__$1){
var self__ = this;
var _15910__$1 = this;
return (new cljs.core.async.t15908(self__.map_LT_,self__.f,self__.ch,self__.meta15906,self__._,self__.fn1,meta15909__$1));
});})(___$1))
;

cljs.core.async.t15908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15910){
var self__ = this;
var _15910__$1 = this;
return self__.meta15909;
});})(___$1))
;

cljs.core.async.t15908.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15908.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15898_SHARP_){
return f1.call(null,(((p1__15898_SHARP_ == null))?null:self__.f.call(null,p1__15898_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15908.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15906","meta15906",-1239992069,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t15905","cljs.core.async/t15905",2059548483,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15909","meta15909",-1885773742,null)], null);
});})(___$1))
;

cljs.core.async.t15908.cljs$lang$type = true;

cljs.core.async.t15908.cljs$lang$ctorStr = "cljs.core.async/t15908";

cljs.core.async.t15908.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t15908");
});})(___$1))
;

cljs.core.async.__GT_t15908 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15908(map_LT___$1,f__$1,ch__$1,meta15906__$1,___$2,fn1__$1,meta15909){
return (new cljs.core.async.t15908(map_LT___$1,f__$1,ch__$1,meta15906__$1,___$2,fn1__$1,meta15909));
});})(___$1))
;

}

return (new cljs.core.async.t15908(self__.map_LT_,self__.f,self__.ch,self__.meta15906,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4448__auto__ = ret;
if(cljs.core.truth_(and__4448__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4448__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15906","meta15906",-1239992069,null)], null);
});

cljs.core.async.t15905.cljs$lang$type = true;

cljs.core.async.t15905.cljs$lang$ctorStr = "cljs.core.async/t15905";

cljs.core.async.t15905.cljs$lang$ctorPrWriter = (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t15905");
});

cljs.core.async.__GT_t15905 = (function cljs$core$async$map_LT__$___GT_t15905(map_LT___$1,f__$1,ch__$1,meta15906){
return (new cljs.core.async.t15905(map_LT___$1,f__$1,ch__$1,meta15906));
});

}

return (new cljs.core.async.t15905(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15914 = (function (map_GT_,f,ch,meta15915){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15915 = meta15915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15916,meta15915__$1){
var self__ = this;
var _15916__$1 = this;
return (new cljs.core.async.t15914(self__.map_GT_,self__.f,self__.ch,meta15915__$1));
});

cljs.core.async.t15914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15916){
var self__ = this;
var _15916__$1 = this;
return self__.meta15915;
});

cljs.core.async.t15914.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15915","meta15915",-859771670,null)], null);
});

cljs.core.async.t15914.cljs$lang$type = true;

cljs.core.async.t15914.cljs$lang$ctorStr = "cljs.core.async/t15914";

cljs.core.async.t15914.cljs$lang$ctorPrWriter = (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t15914");
});

cljs.core.async.__GT_t15914 = (function cljs$core$async$map_GT__$___GT_t15914(map_GT___$1,f__$1,ch__$1,meta15915){
return (new cljs.core.async.t15914(map_GT___$1,f__$1,ch__$1,meta15915));
});

}

return (new cljs.core.async.t15914(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15920 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15920 = (function (filter_GT_,p,ch,meta15921){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15921 = meta15921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15922,meta15921__$1){
var self__ = this;
var _15922__$1 = this;
return (new cljs.core.async.t15920(self__.filter_GT_,self__.p,self__.ch,meta15921__$1));
});

cljs.core.async.t15920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15922){
var self__ = this;
var _15922__$1 = this;
return self__.meta15921;
});

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15921","meta15921",-2081513291,null)], null);
});

cljs.core.async.t15920.cljs$lang$type = true;

cljs.core.async.t15920.cljs$lang$ctorStr = "cljs.core.async/t15920";

cljs.core.async.t15920.cljs$lang$ctorPrWriter = (function (this__5039__auto__,writer__5040__auto__,opt__5041__auto__){
return cljs.core._write.call(null,writer__5040__auto__,"cljs.core.async/t15920");
});

cljs.core.async.__GT_t15920 = (function cljs$core$async$filter_GT__$___GT_t15920(filter_GT___$1,p__$1,ch__$1,meta15921){
return (new cljs.core.async.t15920(filter_GT___$1,p__$1,ch__$1,meta15921));
});

}

return (new cljs.core.async.t15920(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args15923 = [];
var len__5499__auto___15967 = arguments.length;
var i__5500__auto___15968 = (0);
while(true){
if((i__5500__auto___15968 < len__5499__auto___15967)){
args15923.push((arguments[i__5500__auto___15968]));

var G__15969 = (i__5500__auto___15968 + (1));
i__5500__auto___15968 = G__15969;
continue;
} else {
}
break;
}

var G__15925 = args15923.length;
switch (G__15925) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15923.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8508__auto___15971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___15971,out){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___15971,out){
return (function (state_15946){
var state_val_15947 = (state_15946[(1)]);
if((state_val_15947 === (7))){
var inst_15942 = (state_15946[(2)]);
var state_15946__$1 = state_15946;
var statearr_15948_15972 = state_15946__$1;
(statearr_15948_15972[(2)] = inst_15942);

(statearr_15948_15972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (1))){
var state_15946__$1 = state_15946;
var statearr_15949_15973 = state_15946__$1;
(statearr_15949_15973[(2)] = null);

(statearr_15949_15973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (4))){
var inst_15928 = (state_15946[(7)]);
var inst_15928__$1 = (state_15946[(2)]);
var inst_15929 = (inst_15928__$1 == null);
var state_15946__$1 = (function (){var statearr_15950 = state_15946;
(statearr_15950[(7)] = inst_15928__$1);

return statearr_15950;
})();
if(cljs.core.truth_(inst_15929)){
var statearr_15951_15974 = state_15946__$1;
(statearr_15951_15974[(1)] = (5));

} else {
var statearr_15952_15975 = state_15946__$1;
(statearr_15952_15975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (6))){
var inst_15928 = (state_15946[(7)]);
var inst_15933 = p.call(null,inst_15928);
var state_15946__$1 = state_15946;
if(cljs.core.truth_(inst_15933)){
var statearr_15953_15976 = state_15946__$1;
(statearr_15953_15976[(1)] = (8));

} else {
var statearr_15954_15977 = state_15946__$1;
(statearr_15954_15977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (3))){
var inst_15944 = (state_15946[(2)]);
var state_15946__$1 = state_15946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15946__$1,inst_15944);
} else {
if((state_val_15947 === (2))){
var state_15946__$1 = state_15946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15946__$1,(4),ch);
} else {
if((state_val_15947 === (11))){
var inst_15936 = (state_15946[(2)]);
var state_15946__$1 = state_15946;
var statearr_15955_15978 = state_15946__$1;
(statearr_15955_15978[(2)] = inst_15936);

(statearr_15955_15978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (9))){
var state_15946__$1 = state_15946;
var statearr_15956_15979 = state_15946__$1;
(statearr_15956_15979[(2)] = null);

(statearr_15956_15979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (5))){
var inst_15931 = cljs.core.async.close_BANG_.call(null,out);
var state_15946__$1 = state_15946;
var statearr_15957_15980 = state_15946__$1;
(statearr_15957_15980[(2)] = inst_15931);

(statearr_15957_15980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (10))){
var inst_15939 = (state_15946[(2)]);
var state_15946__$1 = (function (){var statearr_15958 = state_15946;
(statearr_15958[(8)] = inst_15939);

return statearr_15958;
})();
var statearr_15959_15981 = state_15946__$1;
(statearr_15959_15981[(2)] = null);

(statearr_15959_15981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15947 === (8))){
var inst_15928 = (state_15946[(7)]);
var state_15946__$1 = state_15946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15946__$1,(11),out,inst_15928);
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
});})(c__8508__auto___15971,out))
;
return ((function (switch__8433__auto__,c__8508__auto___15971,out){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_15963 = [null,null,null,null,null,null,null,null,null];
(statearr_15963[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_15963[(1)] = (1));

return statearr_15963;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_15946){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_15946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e15964){if((e15964 instanceof Object)){
var ex__8437__auto__ = e15964;
var statearr_15965_15982 = state_15946;
(statearr_15965_15982[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15983 = state_15946;
state_15946 = G__15983;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_15946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_15946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___15971,out))
})();
var state__8510__auto__ = (function (){var statearr_15966 = f__8509__auto__.call(null);
(statearr_15966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___15971);

return statearr_15966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___15971,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args15984 = [];
var len__5499__auto___15987 = arguments.length;
var i__5500__auto___15988 = (0);
while(true){
if((i__5500__auto___15988 < len__5499__auto___15987)){
args15984.push((arguments[i__5500__auto___15988]));

var G__15989 = (i__5500__auto___15988 + (1));
i__5500__auto___15988 = G__15989;
continue;
} else {
}
break;
}

var G__15986 = args15984.length;
switch (G__15986) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15984.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto__){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto__){
return (function (state_16156){
var state_val_16157 = (state_16156[(1)]);
if((state_val_16157 === (7))){
var inst_16152 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16158_16199 = state_16156__$1;
(statearr_16158_16199[(2)] = inst_16152);

(statearr_16158_16199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (20))){
var inst_16122 = (state_16156[(7)]);
var inst_16133 = (state_16156[(2)]);
var inst_16134 = cljs.core.next.call(null,inst_16122);
var inst_16108 = inst_16134;
var inst_16109 = null;
var inst_16110 = (0);
var inst_16111 = (0);
var state_16156__$1 = (function (){var statearr_16159 = state_16156;
(statearr_16159[(8)] = inst_16110);

(statearr_16159[(9)] = inst_16111);

(statearr_16159[(10)] = inst_16133);

(statearr_16159[(11)] = inst_16109);

(statearr_16159[(12)] = inst_16108);

return statearr_16159;
})();
var statearr_16160_16200 = state_16156__$1;
(statearr_16160_16200[(2)] = null);

(statearr_16160_16200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (1))){
var state_16156__$1 = state_16156;
var statearr_16161_16201 = state_16156__$1;
(statearr_16161_16201[(2)] = null);

(statearr_16161_16201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (4))){
var inst_16097 = (state_16156[(13)]);
var inst_16097__$1 = (state_16156[(2)]);
var inst_16098 = (inst_16097__$1 == null);
var state_16156__$1 = (function (){var statearr_16162 = state_16156;
(statearr_16162[(13)] = inst_16097__$1);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16098)){
var statearr_16163_16202 = state_16156__$1;
(statearr_16163_16202[(1)] = (5));

} else {
var statearr_16164_16203 = state_16156__$1;
(statearr_16164_16203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (15))){
var state_16156__$1 = state_16156;
var statearr_16168_16204 = state_16156__$1;
(statearr_16168_16204[(2)] = null);

(statearr_16168_16204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (21))){
var state_16156__$1 = state_16156;
var statearr_16169_16205 = state_16156__$1;
(statearr_16169_16205[(2)] = null);

(statearr_16169_16205[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (13))){
var inst_16110 = (state_16156[(8)]);
var inst_16111 = (state_16156[(9)]);
var inst_16109 = (state_16156[(11)]);
var inst_16108 = (state_16156[(12)]);
var inst_16118 = (state_16156[(2)]);
var inst_16119 = (inst_16111 + (1));
var tmp16165 = inst_16110;
var tmp16166 = inst_16109;
var tmp16167 = inst_16108;
var inst_16108__$1 = tmp16167;
var inst_16109__$1 = tmp16166;
var inst_16110__$1 = tmp16165;
var inst_16111__$1 = inst_16119;
var state_16156__$1 = (function (){var statearr_16170 = state_16156;
(statearr_16170[(8)] = inst_16110__$1);

(statearr_16170[(9)] = inst_16111__$1);

(statearr_16170[(14)] = inst_16118);

(statearr_16170[(11)] = inst_16109__$1);

(statearr_16170[(12)] = inst_16108__$1);

return statearr_16170;
})();
var statearr_16171_16206 = state_16156__$1;
(statearr_16171_16206[(2)] = null);

(statearr_16171_16206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (22))){
var state_16156__$1 = state_16156;
var statearr_16172_16207 = state_16156__$1;
(statearr_16172_16207[(2)] = null);

(statearr_16172_16207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (6))){
var inst_16097 = (state_16156[(13)]);
var inst_16106 = f.call(null,inst_16097);
var inst_16107 = cljs.core.seq.call(null,inst_16106);
var inst_16108 = inst_16107;
var inst_16109 = null;
var inst_16110 = (0);
var inst_16111 = (0);
var state_16156__$1 = (function (){var statearr_16173 = state_16156;
(statearr_16173[(8)] = inst_16110);

(statearr_16173[(9)] = inst_16111);

(statearr_16173[(11)] = inst_16109);

(statearr_16173[(12)] = inst_16108);

return statearr_16173;
})();
var statearr_16174_16208 = state_16156__$1;
(statearr_16174_16208[(2)] = null);

(statearr_16174_16208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (17))){
var inst_16122 = (state_16156[(7)]);
var inst_16126 = cljs.core.chunk_first.call(null,inst_16122);
var inst_16127 = cljs.core.chunk_rest.call(null,inst_16122);
var inst_16128 = cljs.core.count.call(null,inst_16126);
var inst_16108 = inst_16127;
var inst_16109 = inst_16126;
var inst_16110 = inst_16128;
var inst_16111 = (0);
var state_16156__$1 = (function (){var statearr_16175 = state_16156;
(statearr_16175[(8)] = inst_16110);

(statearr_16175[(9)] = inst_16111);

(statearr_16175[(11)] = inst_16109);

(statearr_16175[(12)] = inst_16108);

return statearr_16175;
})();
var statearr_16176_16209 = state_16156__$1;
(statearr_16176_16209[(2)] = null);

(statearr_16176_16209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (3))){
var inst_16154 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16156__$1,inst_16154);
} else {
if((state_val_16157 === (12))){
var inst_16142 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16177_16210 = state_16156__$1;
(statearr_16177_16210[(2)] = inst_16142);

(statearr_16177_16210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (2))){
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16156__$1,(4),in$);
} else {
if((state_val_16157 === (23))){
var inst_16150 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16178_16211 = state_16156__$1;
(statearr_16178_16211[(2)] = inst_16150);

(statearr_16178_16211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (19))){
var inst_16137 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16179_16212 = state_16156__$1;
(statearr_16179_16212[(2)] = inst_16137);

(statearr_16179_16212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (11))){
var inst_16122 = (state_16156[(7)]);
var inst_16108 = (state_16156[(12)]);
var inst_16122__$1 = cljs.core.seq.call(null,inst_16108);
var state_16156__$1 = (function (){var statearr_16180 = state_16156;
(statearr_16180[(7)] = inst_16122__$1);

return statearr_16180;
})();
if(inst_16122__$1){
var statearr_16181_16213 = state_16156__$1;
(statearr_16181_16213[(1)] = (14));

} else {
var statearr_16182_16214 = state_16156__$1;
(statearr_16182_16214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (9))){
var inst_16144 = (state_16156[(2)]);
var inst_16145 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16156__$1 = (function (){var statearr_16183 = state_16156;
(statearr_16183[(15)] = inst_16144);

return statearr_16183;
})();
if(cljs.core.truth_(inst_16145)){
var statearr_16184_16215 = state_16156__$1;
(statearr_16184_16215[(1)] = (21));

} else {
var statearr_16185_16216 = state_16156__$1;
(statearr_16185_16216[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (5))){
var inst_16100 = cljs.core.async.close_BANG_.call(null,out);
var state_16156__$1 = state_16156;
var statearr_16186_16217 = state_16156__$1;
(statearr_16186_16217[(2)] = inst_16100);

(statearr_16186_16217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (14))){
var inst_16122 = (state_16156[(7)]);
var inst_16124 = cljs.core.chunked_seq_QMARK_.call(null,inst_16122);
var state_16156__$1 = state_16156;
if(inst_16124){
var statearr_16187_16218 = state_16156__$1;
(statearr_16187_16218[(1)] = (17));

} else {
var statearr_16188_16219 = state_16156__$1;
(statearr_16188_16219[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (16))){
var inst_16140 = (state_16156[(2)]);
var state_16156__$1 = state_16156;
var statearr_16189_16220 = state_16156__$1;
(statearr_16189_16220[(2)] = inst_16140);

(statearr_16189_16220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16157 === (10))){
var inst_16111 = (state_16156[(9)]);
var inst_16109 = (state_16156[(11)]);
var inst_16116 = cljs.core._nth.call(null,inst_16109,inst_16111);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16156__$1,(13),out,inst_16116);
} else {
if((state_val_16157 === (18))){
var inst_16122 = (state_16156[(7)]);
var inst_16131 = cljs.core.first.call(null,inst_16122);
var state_16156__$1 = state_16156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16156__$1,(20),out,inst_16131);
} else {
if((state_val_16157 === (8))){
var inst_16110 = (state_16156[(8)]);
var inst_16111 = (state_16156[(9)]);
var inst_16113 = (inst_16111 < inst_16110);
var inst_16114 = inst_16113;
var state_16156__$1 = state_16156;
if(cljs.core.truth_(inst_16114)){
var statearr_16190_16221 = state_16156__$1;
(statearr_16190_16221[(1)] = (10));

} else {
var statearr_16191_16222 = state_16156__$1;
(statearr_16191_16222[(1)] = (11));

}

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
}
}
}
}
});})(c__8508__auto__))
;
return ((function (switch__8433__auto__,c__8508__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8434__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8434__auto____0 = (function (){
var statearr_16195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8434__auto__);

(statearr_16195[(1)] = (1));

return statearr_16195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8434__auto____1 = (function (state_16156){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_16156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e16196){if((e16196 instanceof Object)){
var ex__8437__auto__ = e16196;
var statearr_16197_16223 = state_16156;
(statearr_16197_16223[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16224 = state_16156;
state_16156 = G__16224;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8434__auto__ = function(state_16156){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8434__auto____1.call(this,state_16156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8434__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8434__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto__))
})();
var state__8510__auto__ = (function (){var statearr_16198 = f__8509__auto__.call(null);
(statearr_16198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto__);

return statearr_16198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto__))
);

return c__8508__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args16225 = [];
var len__5499__auto___16228 = arguments.length;
var i__5500__auto___16229 = (0);
while(true){
if((i__5500__auto___16229 < len__5499__auto___16228)){
args16225.push((arguments[i__5500__auto___16229]));

var G__16230 = (i__5500__auto___16229 + (1));
i__5500__auto___16229 = G__16230;
continue;
} else {
}
break;
}

var G__16227 = args16225.length;
switch (G__16227) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16225.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args16232 = [];
var len__5499__auto___16235 = arguments.length;
var i__5500__auto___16236 = (0);
while(true){
if((i__5500__auto___16236 < len__5499__auto___16235)){
args16232.push((arguments[i__5500__auto___16236]));

var G__16237 = (i__5500__auto___16236 + (1));
i__5500__auto___16236 = G__16237;
continue;
} else {
}
break;
}

var G__16234 = args16232.length;
switch (G__16234) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16232.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args16239 = [];
var len__5499__auto___16290 = arguments.length;
var i__5500__auto___16291 = (0);
while(true){
if((i__5500__auto___16291 < len__5499__auto___16290)){
args16239.push((arguments[i__5500__auto___16291]));

var G__16292 = (i__5500__auto___16291 + (1));
i__5500__auto___16291 = G__16292;
continue;
} else {
}
break;
}

var G__16241 = args16239.length;
switch (G__16241) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16239.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8508__auto___16294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___16294,out){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___16294,out){
return (function (state_16265){
var state_val_16266 = (state_16265[(1)]);
if((state_val_16266 === (7))){
var inst_16260 = (state_16265[(2)]);
var state_16265__$1 = state_16265;
var statearr_16267_16295 = state_16265__$1;
(statearr_16267_16295[(2)] = inst_16260);

(statearr_16267_16295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (1))){
var inst_16242 = null;
var state_16265__$1 = (function (){var statearr_16268 = state_16265;
(statearr_16268[(7)] = inst_16242);

return statearr_16268;
})();
var statearr_16269_16296 = state_16265__$1;
(statearr_16269_16296[(2)] = null);

(statearr_16269_16296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (4))){
var inst_16245 = (state_16265[(8)]);
var inst_16245__$1 = (state_16265[(2)]);
var inst_16246 = (inst_16245__$1 == null);
var inst_16247 = cljs.core.not.call(null,inst_16246);
var state_16265__$1 = (function (){var statearr_16270 = state_16265;
(statearr_16270[(8)] = inst_16245__$1);

return statearr_16270;
})();
if(inst_16247){
var statearr_16271_16297 = state_16265__$1;
(statearr_16271_16297[(1)] = (5));

} else {
var statearr_16272_16298 = state_16265__$1;
(statearr_16272_16298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (6))){
var state_16265__$1 = state_16265;
var statearr_16273_16299 = state_16265__$1;
(statearr_16273_16299[(2)] = null);

(statearr_16273_16299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (3))){
var inst_16262 = (state_16265[(2)]);
var inst_16263 = cljs.core.async.close_BANG_.call(null,out);
var state_16265__$1 = (function (){var statearr_16274 = state_16265;
(statearr_16274[(9)] = inst_16262);

return statearr_16274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16265__$1,inst_16263);
} else {
if((state_val_16266 === (2))){
var state_16265__$1 = state_16265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16265__$1,(4),ch);
} else {
if((state_val_16266 === (11))){
var inst_16245 = (state_16265[(8)]);
var inst_16254 = (state_16265[(2)]);
var inst_16242 = inst_16245;
var state_16265__$1 = (function (){var statearr_16275 = state_16265;
(statearr_16275[(10)] = inst_16254);

(statearr_16275[(7)] = inst_16242);

return statearr_16275;
})();
var statearr_16276_16300 = state_16265__$1;
(statearr_16276_16300[(2)] = null);

(statearr_16276_16300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (9))){
var inst_16245 = (state_16265[(8)]);
var state_16265__$1 = state_16265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16265__$1,(11),out,inst_16245);
} else {
if((state_val_16266 === (5))){
var inst_16242 = (state_16265[(7)]);
var inst_16245 = (state_16265[(8)]);
var inst_16249 = cljs.core._EQ_.call(null,inst_16245,inst_16242);
var state_16265__$1 = state_16265;
if(inst_16249){
var statearr_16278_16301 = state_16265__$1;
(statearr_16278_16301[(1)] = (8));

} else {
var statearr_16279_16302 = state_16265__$1;
(statearr_16279_16302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (10))){
var inst_16257 = (state_16265[(2)]);
var state_16265__$1 = state_16265;
var statearr_16280_16303 = state_16265__$1;
(statearr_16280_16303[(2)] = inst_16257);

(statearr_16280_16303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16266 === (8))){
var inst_16242 = (state_16265[(7)]);
var tmp16277 = inst_16242;
var inst_16242__$1 = tmp16277;
var state_16265__$1 = (function (){var statearr_16281 = state_16265;
(statearr_16281[(7)] = inst_16242__$1);

return statearr_16281;
})();
var statearr_16282_16304 = state_16265__$1;
(statearr_16282_16304[(2)] = null);

(statearr_16282_16304[(1)] = (2));


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
});})(c__8508__auto___16294,out))
;
return ((function (switch__8433__auto__,c__8508__auto___16294,out){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_16286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16286[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_16286[(1)] = (1));

return statearr_16286;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_16265){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_16265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e16287){if((e16287 instanceof Object)){
var ex__8437__auto__ = e16287;
var statearr_16288_16305 = state_16265;
(statearr_16288_16305[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16306 = state_16265;
state_16265 = G__16306;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_16265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_16265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___16294,out))
})();
var state__8510__auto__ = (function (){var statearr_16289 = f__8509__auto__.call(null);
(statearr_16289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___16294);

return statearr_16289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___16294,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args16307 = [];
var len__5499__auto___16377 = arguments.length;
var i__5500__auto___16378 = (0);
while(true){
if((i__5500__auto___16378 < len__5499__auto___16377)){
args16307.push((arguments[i__5500__auto___16378]));

var G__16379 = (i__5500__auto___16378 + (1));
i__5500__auto___16378 = G__16379;
continue;
} else {
}
break;
}

var G__16309 = args16307.length;
switch (G__16309) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16307.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8508__auto___16381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___16381,out){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___16381,out){
return (function (state_16347){
var state_val_16348 = (state_16347[(1)]);
if((state_val_16348 === (7))){
var inst_16343 = (state_16347[(2)]);
var state_16347__$1 = state_16347;
var statearr_16349_16382 = state_16347__$1;
(statearr_16349_16382[(2)] = inst_16343);

(statearr_16349_16382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (1))){
var inst_16310 = (new Array(n));
var inst_16311 = inst_16310;
var inst_16312 = (0);
var state_16347__$1 = (function (){var statearr_16350 = state_16347;
(statearr_16350[(7)] = inst_16311);

(statearr_16350[(8)] = inst_16312);

return statearr_16350;
})();
var statearr_16351_16383 = state_16347__$1;
(statearr_16351_16383[(2)] = null);

(statearr_16351_16383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (4))){
var inst_16315 = (state_16347[(9)]);
var inst_16315__$1 = (state_16347[(2)]);
var inst_16316 = (inst_16315__$1 == null);
var inst_16317 = cljs.core.not.call(null,inst_16316);
var state_16347__$1 = (function (){var statearr_16352 = state_16347;
(statearr_16352[(9)] = inst_16315__$1);

return statearr_16352;
})();
if(inst_16317){
var statearr_16353_16384 = state_16347__$1;
(statearr_16353_16384[(1)] = (5));

} else {
var statearr_16354_16385 = state_16347__$1;
(statearr_16354_16385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (15))){
var inst_16337 = (state_16347[(2)]);
var state_16347__$1 = state_16347;
var statearr_16355_16386 = state_16347__$1;
(statearr_16355_16386[(2)] = inst_16337);

(statearr_16355_16386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (13))){
var state_16347__$1 = state_16347;
var statearr_16356_16387 = state_16347__$1;
(statearr_16356_16387[(2)] = null);

(statearr_16356_16387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (6))){
var inst_16312 = (state_16347[(8)]);
var inst_16333 = (inst_16312 > (0));
var state_16347__$1 = state_16347;
if(cljs.core.truth_(inst_16333)){
var statearr_16357_16388 = state_16347__$1;
(statearr_16357_16388[(1)] = (12));

} else {
var statearr_16358_16389 = state_16347__$1;
(statearr_16358_16389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (3))){
var inst_16345 = (state_16347[(2)]);
var state_16347__$1 = state_16347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16347__$1,inst_16345);
} else {
if((state_val_16348 === (12))){
var inst_16311 = (state_16347[(7)]);
var inst_16335 = cljs.core.vec.call(null,inst_16311);
var state_16347__$1 = state_16347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16347__$1,(15),out,inst_16335);
} else {
if((state_val_16348 === (2))){
var state_16347__$1 = state_16347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16347__$1,(4),ch);
} else {
if((state_val_16348 === (11))){
var inst_16327 = (state_16347[(2)]);
var inst_16328 = (new Array(n));
var inst_16311 = inst_16328;
var inst_16312 = (0);
var state_16347__$1 = (function (){var statearr_16359 = state_16347;
(statearr_16359[(7)] = inst_16311);

(statearr_16359[(10)] = inst_16327);

(statearr_16359[(8)] = inst_16312);

return statearr_16359;
})();
var statearr_16360_16390 = state_16347__$1;
(statearr_16360_16390[(2)] = null);

(statearr_16360_16390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (9))){
var inst_16311 = (state_16347[(7)]);
var inst_16325 = cljs.core.vec.call(null,inst_16311);
var state_16347__$1 = state_16347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16347__$1,(11),out,inst_16325);
} else {
if((state_val_16348 === (5))){
var inst_16315 = (state_16347[(9)]);
var inst_16311 = (state_16347[(7)]);
var inst_16312 = (state_16347[(8)]);
var inst_16320 = (state_16347[(11)]);
var inst_16319 = (inst_16311[inst_16312] = inst_16315);
var inst_16320__$1 = (inst_16312 + (1));
var inst_16321 = (inst_16320__$1 < n);
var state_16347__$1 = (function (){var statearr_16361 = state_16347;
(statearr_16361[(12)] = inst_16319);

(statearr_16361[(11)] = inst_16320__$1);

return statearr_16361;
})();
if(cljs.core.truth_(inst_16321)){
var statearr_16362_16391 = state_16347__$1;
(statearr_16362_16391[(1)] = (8));

} else {
var statearr_16363_16392 = state_16347__$1;
(statearr_16363_16392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (14))){
var inst_16340 = (state_16347[(2)]);
var inst_16341 = cljs.core.async.close_BANG_.call(null,out);
var state_16347__$1 = (function (){var statearr_16365 = state_16347;
(statearr_16365[(13)] = inst_16340);

return statearr_16365;
})();
var statearr_16366_16393 = state_16347__$1;
(statearr_16366_16393[(2)] = inst_16341);

(statearr_16366_16393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (10))){
var inst_16331 = (state_16347[(2)]);
var state_16347__$1 = state_16347;
var statearr_16367_16394 = state_16347__$1;
(statearr_16367_16394[(2)] = inst_16331);

(statearr_16367_16394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16348 === (8))){
var inst_16311 = (state_16347[(7)]);
var inst_16320 = (state_16347[(11)]);
var tmp16364 = inst_16311;
var inst_16311__$1 = tmp16364;
var inst_16312 = inst_16320;
var state_16347__$1 = (function (){var statearr_16368 = state_16347;
(statearr_16368[(7)] = inst_16311__$1);

(statearr_16368[(8)] = inst_16312);

return statearr_16368;
})();
var statearr_16369_16395 = state_16347__$1;
(statearr_16369_16395[(2)] = null);

(statearr_16369_16395[(1)] = (2));


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
});})(c__8508__auto___16381,out))
;
return ((function (switch__8433__auto__,c__8508__auto___16381,out){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_16373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16373[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_16373[(1)] = (1));

return statearr_16373;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_16347){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_16347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e16374){if((e16374 instanceof Object)){
var ex__8437__auto__ = e16374;
var statearr_16375_16396 = state_16347;
(statearr_16375_16396[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16397 = state_16347;
state_16347 = G__16397;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_16347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_16347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___16381,out))
})();
var state__8510__auto__ = (function (){var statearr_16376 = f__8509__auto__.call(null);
(statearr_16376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___16381);

return statearr_16376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___16381,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args16398 = [];
var len__5499__auto___16472 = arguments.length;
var i__5500__auto___16473 = (0);
while(true){
if((i__5500__auto___16473 < len__5499__auto___16472)){
args16398.push((arguments[i__5500__auto___16473]));

var G__16474 = (i__5500__auto___16473 + (1));
i__5500__auto___16473 = G__16474;
continue;
} else {
}
break;
}

var G__16400 = args16398.length;
switch (G__16400) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16398.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8508__auto___16476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___16476,out){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___16476,out){
return (function (state_16442){
var state_val_16443 = (state_16442[(1)]);
if((state_val_16443 === (7))){
var inst_16438 = (state_16442[(2)]);
var state_16442__$1 = state_16442;
var statearr_16444_16477 = state_16442__$1;
(statearr_16444_16477[(2)] = inst_16438);

(statearr_16444_16477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (1))){
var inst_16401 = [];
var inst_16402 = inst_16401;
var inst_16403 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16442__$1 = (function (){var statearr_16445 = state_16442;
(statearr_16445[(7)] = inst_16402);

(statearr_16445[(8)] = inst_16403);

return statearr_16445;
})();
var statearr_16446_16478 = state_16442__$1;
(statearr_16446_16478[(2)] = null);

(statearr_16446_16478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (4))){
var inst_16406 = (state_16442[(9)]);
var inst_16406__$1 = (state_16442[(2)]);
var inst_16407 = (inst_16406__$1 == null);
var inst_16408 = cljs.core.not.call(null,inst_16407);
var state_16442__$1 = (function (){var statearr_16447 = state_16442;
(statearr_16447[(9)] = inst_16406__$1);

return statearr_16447;
})();
if(inst_16408){
var statearr_16448_16479 = state_16442__$1;
(statearr_16448_16479[(1)] = (5));

} else {
var statearr_16449_16480 = state_16442__$1;
(statearr_16449_16480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (15))){
var inst_16432 = (state_16442[(2)]);
var state_16442__$1 = state_16442;
var statearr_16450_16481 = state_16442__$1;
(statearr_16450_16481[(2)] = inst_16432);

(statearr_16450_16481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (13))){
var state_16442__$1 = state_16442;
var statearr_16451_16482 = state_16442__$1;
(statearr_16451_16482[(2)] = null);

(statearr_16451_16482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (6))){
var inst_16402 = (state_16442[(7)]);
var inst_16427 = inst_16402.length;
var inst_16428 = (inst_16427 > (0));
var state_16442__$1 = state_16442;
if(cljs.core.truth_(inst_16428)){
var statearr_16452_16483 = state_16442__$1;
(statearr_16452_16483[(1)] = (12));

} else {
var statearr_16453_16484 = state_16442__$1;
(statearr_16453_16484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (3))){
var inst_16440 = (state_16442[(2)]);
var state_16442__$1 = state_16442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16442__$1,inst_16440);
} else {
if((state_val_16443 === (12))){
var inst_16402 = (state_16442[(7)]);
var inst_16430 = cljs.core.vec.call(null,inst_16402);
var state_16442__$1 = state_16442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16442__$1,(15),out,inst_16430);
} else {
if((state_val_16443 === (2))){
var state_16442__$1 = state_16442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16442__$1,(4),ch);
} else {
if((state_val_16443 === (11))){
var inst_16406 = (state_16442[(9)]);
var inst_16410 = (state_16442[(10)]);
var inst_16420 = (state_16442[(2)]);
var inst_16421 = [];
var inst_16422 = inst_16421.push(inst_16406);
var inst_16402 = inst_16421;
var inst_16403 = inst_16410;
var state_16442__$1 = (function (){var statearr_16454 = state_16442;
(statearr_16454[(7)] = inst_16402);

(statearr_16454[(11)] = inst_16422);

(statearr_16454[(8)] = inst_16403);

(statearr_16454[(12)] = inst_16420);

return statearr_16454;
})();
var statearr_16455_16485 = state_16442__$1;
(statearr_16455_16485[(2)] = null);

(statearr_16455_16485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (9))){
var inst_16402 = (state_16442[(7)]);
var inst_16418 = cljs.core.vec.call(null,inst_16402);
var state_16442__$1 = state_16442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16442__$1,(11),out,inst_16418);
} else {
if((state_val_16443 === (5))){
var inst_16406 = (state_16442[(9)]);
var inst_16403 = (state_16442[(8)]);
var inst_16410 = (state_16442[(10)]);
var inst_16410__$1 = f.call(null,inst_16406);
var inst_16411 = cljs.core._EQ_.call(null,inst_16410__$1,inst_16403);
var inst_16412 = cljs.core.keyword_identical_QMARK_.call(null,inst_16403,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16413 = (inst_16411) || (inst_16412);
var state_16442__$1 = (function (){var statearr_16456 = state_16442;
(statearr_16456[(10)] = inst_16410__$1);

return statearr_16456;
})();
if(cljs.core.truth_(inst_16413)){
var statearr_16457_16486 = state_16442__$1;
(statearr_16457_16486[(1)] = (8));

} else {
var statearr_16458_16487 = state_16442__$1;
(statearr_16458_16487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (14))){
var inst_16435 = (state_16442[(2)]);
var inst_16436 = cljs.core.async.close_BANG_.call(null,out);
var state_16442__$1 = (function (){var statearr_16460 = state_16442;
(statearr_16460[(13)] = inst_16435);

return statearr_16460;
})();
var statearr_16461_16488 = state_16442__$1;
(statearr_16461_16488[(2)] = inst_16436);

(statearr_16461_16488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (10))){
var inst_16425 = (state_16442[(2)]);
var state_16442__$1 = state_16442;
var statearr_16462_16489 = state_16442__$1;
(statearr_16462_16489[(2)] = inst_16425);

(statearr_16462_16489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16443 === (8))){
var inst_16402 = (state_16442[(7)]);
var inst_16406 = (state_16442[(9)]);
var inst_16410 = (state_16442[(10)]);
var inst_16415 = inst_16402.push(inst_16406);
var tmp16459 = inst_16402;
var inst_16402__$1 = tmp16459;
var inst_16403 = inst_16410;
var state_16442__$1 = (function (){var statearr_16463 = state_16442;
(statearr_16463[(7)] = inst_16402__$1);

(statearr_16463[(14)] = inst_16415);

(statearr_16463[(8)] = inst_16403);

return statearr_16463;
})();
var statearr_16464_16490 = state_16442__$1;
(statearr_16464_16490[(2)] = null);

(statearr_16464_16490[(1)] = (2));


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
});})(c__8508__auto___16476,out))
;
return ((function (switch__8433__auto__,c__8508__auto___16476,out){
return (function() {
var cljs$core$async$state_machine__8434__auto__ = null;
var cljs$core$async$state_machine__8434__auto____0 = (function (){
var statearr_16468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16468[(0)] = cljs$core$async$state_machine__8434__auto__);

(statearr_16468[(1)] = (1));

return statearr_16468;
});
var cljs$core$async$state_machine__8434__auto____1 = (function (state_16442){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_16442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e16469){if((e16469 instanceof Object)){
var ex__8437__auto__ = e16469;
var statearr_16470_16491 = state_16442;
(statearr_16470_16491[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16492 = state_16442;
state_16442 = G__16492;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
cljs$core$async$state_machine__8434__auto__ = function(state_16442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8434__auto____1.call(this,state_16442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8434__auto____0;
cljs$core$async$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8434__auto____1;
return cljs$core$async$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___16476,out))
})();
var state__8510__auto__ = (function (){var statearr_16471 = f__8509__auto__.call(null);
(statearr_16471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___16476);

return statearr_16471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___16476,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
