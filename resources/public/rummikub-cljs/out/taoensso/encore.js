// Compiled by ClojureScript 1.7.48 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Stolen from `clojure.tools.macro`.
 * Handles optional docstrings & attr maps for a macro def's name.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__12739 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__12739,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__12739,(1),null);
var vec__12740 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__12740,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__12740,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.nnil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
taoensso.encore.nblank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
var and__4448__auto__ = typeof x === 'string';
if(and__4448__auto__){
return taoensso.encore.nblank_QMARK_.call(null,x);
} else {
return and__4448__auto__;
}
});
/**
 * Is `x` a vector of size `n`?
 */
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.first_nth = (function taoensso$encore$first_nth(){
var args12741 = [];
var len__5499__auto___12744 = arguments.length;
var i__5500__auto___12745 = (0);
while(true){
if((i__5500__auto___12745 < len__5499__auto___12744)){
args12741.push((arguments[i__5500__auto___12745]));

var G__12746 = (i__5500__auto___12745 + (1));
i__5500__auto___12745 = G__12746;
continue;
} else {
}
break;
}

var G__12743 = args12741.length;
switch (G__12743) {
case 1:
return taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12741.length)].join('')));

}
});

taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.nth.call(null,coll,(0));
});

taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
return cljs.core.nth.call(null,coll,(0),not_found);
});

taoensso.encore.first_nth.cljs$lang$maxFixedArity = 2;
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
taoensso.encore.format = (function taoensso$encore$format(){
var args__5506__auto__ = [];
var len__5499__auto___12750 = arguments.length;
var i__5500__auto___12751 = (0);
while(true){
if((i__5500__auto___12751 < len__5499__auto___12750)){
args__5506__auto__.push((arguments[i__5500__auto___12751]));

var G__12752 = (i__5500__auto___12751 + (1));
i__5500__auto___12751 = G__12752;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq12748){
var G__12749 = cljs.core.first.call(null,seq12748);
var seq12748__$1 = cljs.core.next.call(null,seq12748);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__12749,seq12748__$1);
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.nnil_keys_QMARK_ = (function taoensso$encore$nnil_keys_QMARK_(m,ks){
return cljs.core.every_QMARK_.call(null,(function (p1__12753_SHARP_){
return !((cljs.core.get.call(null,m,p1__12753_SHARP_) == null));
}),ks);
});
/**
 * Returns x as a unambiguous Boolean, or nil on failure. Requires more
 * explicit truthiness than (boolean x).
 */
taoensso.encore.parse_bool = (function taoensso$encore$parse_bool(x){
if(cljs.core.truth_(x)){
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")) || (cljs.core._EQ_.call(null,x,(0)))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")) || (cljs.core._EQ_.call(null,x,(1)))){
return true;
} else {
return null;

}
}
}
} else {
return null;
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){

if(cljs.core.truth_(x)){
var p = taoensso.encore.parse_bool.call(null,x);
if(!((p == null))){
return p;
} else {
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-bool failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else {
return null;
}
});
/**
 * Returns x as Long (or JavaScript integer), or nil on failure.
 */
taoensso.encore.parse_int = (function taoensso$encore$parse_int(x){
if(cljs.core.truth_(x)){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;

}
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){

if(cljs.core.truth_(x)){
var or__4460__auto__ = taoensso.encore.parse_int.call(null,x);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-int failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else {
return null;
}
});
/**
 * Returns x as Double (or JavaScript float), or nil on failure.
 */
taoensso.encore.parse_float = (function taoensso$encore$parse_float(x){
if(cljs.core.truth_(x)){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;

}
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){

var or__4460__auto__ = taoensso.encore.parse_float.call(null,x);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-float failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
/**
 * Like `name` but includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(){
var args__5506__auto__ = [];
var len__5499__auto___12758 = arguments.length;
var i__5500__auto___12759 = (0);
while(true){
if((i__5500__auto___12759 < len__5499__auto___12758)){
args__5506__auto__.push((arguments[i__5500__auto___12759]));

var G__12760 = (i__5500__auto___12759 + (1));
i__5500__auto___12759 = G__12760;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__12756){
var vec__12757 = p__12756;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__12757,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq12754){
var G__12755 = cljs.core.first.call(null,seq12754);
var seq12754__$1 = cljs.core.next.call(null,seq12754);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__12755,seq12754__$1);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
var or__4460__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return (x instanceof Error);
}
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.round = (function taoensso$encore$round(){
var args__5506__auto__ = [];
var len__5499__auto___12766 = arguments.length;
var i__5500__auto___12767 = (0);
while(true){
if((i__5500__auto___12767 < len__5499__auto___12766)){
args__5506__auto__.push((arguments[i__5500__auto___12767]));

var G__12768 = (i__5500__auto___12767 + (1));
i__5500__auto___12767 = G__12768;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__12763){
var vec__12764 = p__12763;
var type = cljs.core.nth.call(null,vec__12764,(0),null);
var nplaces = cljs.core.nth.call(null,vec__12764,(1),null);
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n:(n * modifier));
var rounded = (function (){var G__12765 = ((((function (){var or__4460__auto__ = type;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__4460__auto__ = type;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__12765) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return cljs.core.long$.call(null,Math.floor(n_STAR_));

break;
case "ceil":
return cljs.core.long$.call(null,Math.ceil(n_STAR_));

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return rounded;
} else {
return (rounded / modifier);
}
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq12761){
var G__12762 = cljs.core.first.call(null,seq12761);
var seq12761__$1 = cljs.core.next.call(null,seq12761);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__12762,seq12761__$1);
});
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 1000.0)) / 1000.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(){
var args__5506__auto__ = [];
var len__5499__auto___12776 = arguments.length;
var i__5500__auto___12777 = (0);
while(true){
if((i__5500__auto___12777 < len__5499__auto___12776)){
args__5506__auto__.push((arguments[i__5500__auto___12777]));

var G__12778 = (i__5500__auto___12777 + (1));
i__5500__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__12772){
var vec__12773 = p__12772;
var map__12774 = cljs.core.nth.call(null,vec__12773,(0),null);
var map__12774__$1 = ((((!((map__12774 == null)))?((((map__12774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12774):map__12774);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__4772__auto__ = min_SINGLEQUOTE_;
var y__4773__auto__ = time;
return ((x__4772__auto__ > y__4773__auto__) ? x__4772__auto__ : y__4773__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__4779__auto__ = max_SINGLEQUOTE_;
var y__4780__auto__ = time__$1;
return ((x__4779__auto__ < y__4780__auto__) ? x__4779__auto__ : y__4780__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq12770){
var G__12771 = cljs.core.first.call(null,seq12770);
var seq12770__$1 = cljs.core.next.call(null,seq12770);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__12771,seq12770__$1);
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).valueOf();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(){
var args__5506__auto__ = [];
var len__5499__auto___12782 = arguments.length;
var i__5500__auto___12783 = (0);
while(true){
if((i__5500__auto___12783 < len__5499__auto___12782)){
args__5506__auto__.push((arguments[i__5500__auto___12783]));

var G__12784 = (i__5500__auto___12783 + (1));
i__5500__auto___12783 = G__12784;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__12780){
var vec__12781 = p__12780;
var mock_udts = cljs.core.nth.call(null,vec__12781,(0),null);
var mock_udts__$1 = (function (){var or__4460__auto__ = mock_udts;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__12781,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__12781,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq12779){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12779));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(){
var args__5506__auto__ = [];
var len__5499__auto___12789 = arguments.length;
var i__5500__auto___12790 = (0);
while(true){
if((i__5500__auto___12790 < len__5499__auto___12789)){
args__5506__auto__.push((arguments[i__5500__auto___12790]));

var G__12791 = (i__5500__auto___12790 + (1));
i__5500__auto___12790 = G__12791;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__12786){
var map__12787 = p__12786;
var map__12787__$1 = ((((!((map__12787 == null)))?((((map__12787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12787):map__12787);
var opts = map__12787__$1;
var years = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__12787__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.keys.call(null,opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms)?ms:(0))));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq12785){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12785));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k12793,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__12795 = (((k12793 instanceof cljs.core.Keyword))?k12793.fqn:null);
switch (G__12795) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12793,else__5058__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#taoensso.encore.Swapped{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12792){
var self__ = this;
var G__12792__$1 = this;
return (new cljs.core.RecordIter((0),G__12792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__12792){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__12796 = cljs.core.keyword_identical_QMARK_;
var expr__12797 = k__5063__auto__;
if(cljs.core.truth_(pred__12796.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__12797))){
return (new taoensso.encore.Swapped(G__12792,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12796.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__12797))){
return (new taoensso.encore.Swapped(self__.new_val,G__12792,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__12792),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__12792){
var self__ = this;
var this__5054__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__12792,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__12794){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__12794),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__12794),null,cljs.core.dissoc.call(null,G__12794,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return taoensso.encore.__GT_Swapped.call(null,new_val,return_val);
});
taoensso.encore.as_swapped = (function taoensso$encore$as_swapped(x){
if((x instanceof taoensso.encore.Swapped)){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),x,new cljs.core.Keyword(null,"return-val","return-val",-512772489),x], null);
}
});
/**
 * More powerful version of `swap!`:
 * * Supports optional `update-in` semantics.
 * * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 * <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(){
var args__5506__auto__ = [];
var len__5499__auto___12808 = arguments.length;
var i__5500__auto___12809 = (0);
while(true){
if((i__5500__auto___12809 < len__5499__auto___12808)){
args__5506__auto__.push((arguments[i__5500__auto___12809]));

var G__12810 = (i__5500__auto___12809 + (1));
i__5500__auto___12809 = G__12810;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((3) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((3)),(0))):null);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5507__auto__);
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,args){
var ks__$1 = ((((ks == null)) || (cljs.core.empty_QMARK_.call(null,ks)))?null:ks);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var map__12804 = ((cljs.core.not.call(null,ks__$1))?taoensso.encore.as_swapped.call(null,cljs.core.apply.call(null,f,old_val,args)):(function (){var old_val_in = cljs.core.get_in.call(null,old_val,ks__$1);
var map__12805 = taoensso.encore.as_swapped.call(null,cljs.core.apply.call(null,f,old_val_in,args));
var map__12805__$1 = ((((!((map__12805 == null)))?((((map__12805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12805):map__12805);
var new_val_in = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"new-val","new-val",-738158599));
var return_val = cljs.core.get.call(null,map__12805__$1,new cljs.core.Keyword(null,"return-val","return-val",-512772489));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),cljs.core.assoc_in.call(null,old_val,ks__$1,new_val_in),new cljs.core.Keyword(null,"return-val","return-val",-512772489),return_val], null);
})());
var map__12804__$1 = ((((!((map__12804 == null)))?((((map__12804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12804):map__12804);
var new_val = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"new-val","new-val",-738158599));
var return_val = cljs.core.get.call(null,map__12804__$1,new cljs.core.Keyword(null,"return-val","return-val",-512772489));
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq12800){
var G__12801 = cljs.core.first.call(null,seq12800);
var seq12800__$1 = cljs.core.next.call(null,seq12800);
var G__12802 = cljs.core.first.call(null,seq12800__$1);
var seq12800__$2 = cljs.core.next.call(null,seq12800__$1);
var G__12803 = cljs.core.first.call(null,seq12800__$2);
var seq12800__$3 = cljs.core.next.call(null,seq12800__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12801,G__12802,G__12803,seq12800__$3);
});
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(atom_,ks,newval){
return taoensso.encore.swap_in_BANG_.call(null,atom_,ks,cljs.core.constantly.call(null,newval));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(){
var args__5506__auto__ = [];
var len__5499__auto___12814 = arguments.length;
var i__5500__auto___12815 = (0);
while(true){
if((i__5500__auto___12815 < len__5499__auto___12814)){
args__5506__auto__.push((arguments[i__5500__auto___12815]));

var G__12816 = (i__5500__auto___12815 + (1));
i__5500__auto___12815 = G__12816;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((2) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5507__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq12811){
var G__12812 = cljs.core.first.call(null,seq12811);
var seq12811__$1 = cljs.core.next.call(null,seq12811);
var G__12813 = cljs.core.first.call(null,seq12811__$1);
var seq12811__$2 = cljs.core.next.call(null,seq12811__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__12812,G__12813,seq12811__$2);
});
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(){
var args__5506__auto__ = [];
var len__5499__auto___12827 = arguments.length;
var i__5500__auto___12828 = (0);
while(true){
if((i__5500__auto___12828 < len__5499__auto___12827)){
args__5506__auto__.push((arguments[i__5500__auto___12828]));

var G__12829 = (i__5500__auto___12828 + (1));
i__5500__auto___12828 = G__12829;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4460__auto__ = m;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5213__auto__ = (function taoensso$encore$iter__12819(s__12820){
return (new cljs.core.LazySeq(null,(function (){
var s__12820__$1 = s__12820;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12820__$1);
if(temp__4425__auto__){
var s__12820__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12820__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__12820__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__12822 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__12821 = (0);
while(true){
if((i__12821 < size__5212__auto__)){
var vec__12825 = cljs.core._nth.call(null,c__5211__auto__,i__12821);
var k = cljs.core.nth.call(null,vec__12825,(0),null);
var v = cljs.core.nth.call(null,vec__12825,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__12822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__12830 = (i__12821 + (1));
i__12821 = G__12830;
continue;
} else {
var G__12831 = (i__12821 + (1));
i__12821 = G__12831;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12822),taoensso$encore$iter__12819.call(null,cljs.core.chunk_rest.call(null,s__12820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12822),null);
}
} else {
var vec__12826 = cljs.core.first.call(null,s__12820__$2);
var k = cljs.core.nth.call(null,vec__12826,(0),null);
var v = cljs.core.nth.call(null,vec__12826,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__12819.call(null,cljs.core.rest.call(null,s__12820__$2)));
} else {
var G__12832 = cljs.core.rest.call(null,s__12820__$2);
s__12820__$1 = G__12832;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5213__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq12817){
var G__12818 = cljs.core.first.call(null,seq12817);
var seq12817__$1 = cljs.core.next.call(null,seq12817);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__12818,seq12817__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(){
var args__5506__auto__ = [];
var len__5499__auto___12843 = arguments.length;
var i__5500__auto___12844 = (0);
while(true){
if((i__5500__auto___12844 < len__5499__auto___12843)){
args__5506__auto__.push((arguments[i__5500__auto___12844]));

var G__12845 = (i__5500__auto___12844 + (1));
i__5500__auto___12844 = G__12845;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4460__auto__ = m;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5213__auto__ = (function taoensso$encore$iter__12835(s__12836){
return (new cljs.core.LazySeq(null,(function (){
var s__12836__$1 = s__12836;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12836__$1);
if(temp__4425__auto__){
var s__12836__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12836__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__12836__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__12838 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__12837 = (0);
while(true){
if((i__12837 < size__5212__auto__)){
var vec__12841 = cljs.core._nth.call(null,c__5211__auto__,i__12837);
var k = cljs.core.nth.call(null,vec__12841,(0),null);
var v = cljs.core.nth.call(null,vec__12841,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__12838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__12846 = (i__12837 + (1));
i__12837 = G__12846;
continue;
} else {
var G__12847 = (i__12837 + (1));
i__12837 = G__12847;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12838),taoensso$encore$iter__12835.call(null,cljs.core.chunk_rest.call(null,s__12836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12838),null);
}
} else {
var vec__12842 = cljs.core.first.call(null,s__12836__$2);
var k = cljs.core.nth.call(null,vec__12842,(0),null);
var v = cljs.core.nth.call(null,vec__12842,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__12835.call(null,cljs.core.rest.call(null,s__12836__$2)));
} else {
var G__12848 = cljs.core.rest.call(null,s__12836__$2);
s__12836__$1 = G__12848;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5213__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq12833){
var G__12834 = cljs.core.first.call(null,seq12833);
var seq12833__$1 = cljs.core.next.call(null,seq12833);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__12834,seq12833__$1);
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 * to `f` as an unpaired seq:
 * (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 * where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(){
var args__5506__auto__ = [];
var len__5499__auto___12851 = arguments.length;
var i__5500__auto___12852 = (0);
while(true){
if((i__5500__auto___12852 < len__5499__auto___12851)){
args__5506__auto__.push((arguments[i__5500__auto___12852]));

var G__12853 = (i__5500__auto___12852 + (1));
i__5500__auto___12852 = G__12853;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq12849){
var G__12850 = cljs.core.first.call(null,seq12849);
var seq12849__$1 = cljs.core.next.call(null,seq12849);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__12850,seq12849__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var kf__$1 = ((!((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((!((vf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,v,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),(function (){var or__4460__auto__ = m;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return null;
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.truth_(m)){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__4448__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__4448__auto__)){
return predv.call(null,v);
} else {
return and__4448__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),(function (){var or__4460__auto__ = m;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var or__4460__auto__ = m;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else {
return null;
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 * pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 * way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.truth_(m)){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(){
var args__5506__auto__ = [];
var len__5499__auto___12862 = arguments.length;
var i__5500__auto___12863 = (0);
while(true){
if((i__5500__auto___12863 < len__5499__auto___12862)){
args__5506__auto__.push((arguments[i__5500__auto___12863]));

var G__12864 = (i__5500__auto___12863 + (1));
i__5500__auto___12863 = G__12864;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__12856){
var vec__12857 = p__12856;
var kf = cljs.core.nth.call(null,vec__12857,(0),null);
var vf = cljs.core.nth.call(null,vec__12857,(1),null);
if(cljs.core.coll_QMARK_.call(null,coll)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null))))].join('')));
}

if(((kf == null)) || (cljs.core.fn_QMARK_.call(null,kf)) || ((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))))].join('')));
}

if(((vf == null)) || (cljs.core.fn_QMARK_.call(null,vf))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null)))))].join('')));
}

var _PERCENT_ = (function (){var temp__4425__auto__ = cljs.core.seq.call(null,coll);
if(temp__4425__auto__){
var s_SINGLEQUOTE_ = temp__4425__auto__;
var kf__$1 = ((!((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (s_SINGLEQUOTE_,temp__4425__auto__,vec__12857,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(s_SINGLEQUOTE_,temp__4425__auto__,vec__12857,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__12859 = s_SINGLEQUOTE_;
var vec__12860 = G__12859;
var k = cljs.core.nth.call(null,vec__12860,(0),null);
var v = cljs.core.nth.call(null,vec__12860,(1),null);
var s = vec__12860;
var m__$1 = m;
var G__12859__$1 = G__12859;
while(true){
var m__$2 = m__$1;
var vec__12861 = G__12859__$1;
var k__$1 = cljs.core.nth.call(null,vec__12861,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12861,(1),null);
var s__$1 = vec__12861;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4423__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
var G__12865 = new_m;
var G__12866 = n;
m__$1 = G__12865;
G__12859__$1 = G__12866;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
} else {
return null;
}
})();
if(((_PERCENT_ == null)) || (cljs.core.map_QMARK_.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq12854){
var G__12855 = cljs.core.first.call(null,seq12854);
var seq12854__$1 = cljs.core.next.call(null,seq12854);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__12855,seq12854__$1);
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(){
var args12867 = [];
var len__5499__auto___12873 = arguments.length;
var i__5500__auto___12874 = (0);
while(true){
if((i__5500__auto___12874 < len__5499__auto___12873)){
args12867.push((arguments[i__5500__auto___12874]));

var G__12875 = (i__5500__auto___12874 + (1));
i__5500__auto___12874 = G__12875;
continue;
} else {
}
break;
}

var G__12872 = args12867.length;
switch (G__12872) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5518__auto__ = (new cljs.core.IndexedSeq(args12867.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5518__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq12868){
var G__12869 = cljs.core.first.call(null,seq12868);
var seq12868__$1 = cljs.core.next.call(null,seq12868);
var G__12870 = cljs.core.first.call(null,seq12868__$1);
var seq12868__$2 = cljs.core.next.call(null,seq12868__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__12869,G__12870,seq12868__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`.
 * Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(){
var args12877 = [];
var len__5499__auto___12883 = arguments.length;
var i__5500__auto___12884 = (0);
while(true){
if((i__5500__auto___12884 < len__5499__auto___12883)){
args12877.push((arguments[i__5500__auto___12884]));

var G__12885 = (i__5500__auto___12884 + (1));
i__5500__auto___12884 = G__12885;
continue;
} else {
}
break;
}

var G__12882 = args12877.length;
switch (G__12882) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5518__auto__ = (new cljs.core.IndexedSeq(args12877.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5518__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq12878){
var G__12879 = cljs.core.first.call(null,seq12878);
var seq12878__$1 = cljs.core.next.call(null,seq12878);
var G__12880 = cljs.core.first.call(null,seq12878__$1);
var seq12878__$2 = cljs.core.next.call(null,seq12878__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__12879,G__12880,seq12878__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(){
var args12887 = [];
var len__5499__auto___12894 = arguments.length;
var i__5500__auto___12895 = (0);
while(true){
if((i__5500__auto___12895 < len__5499__auto___12894)){
args12887.push((arguments[i__5500__auto___12895]));

var G__12896 = (i__5500__auto___12895 + (1));
i__5500__auto___12895 = G__12896;
continue;
} else {
}
break;
}

var G__12889 = args12887.length;
switch (G__12889) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12887.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__12890,in$){
var vec__12891 = p__12890;
var v = cljs.core.nth.call(null,vec__12891,(0),null);
var seen = cljs.core.nth.call(null,vec__12891,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__12892,in$){
var vec__12893 = p__12892;
var v = cljs.core.nth.call(null,vec__12893,(0),null);
var seen = cljs.core.nth.call(null,vec__12893,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__12904,seen__$1){
while(true){
var vec__12905 = p__12904;
var v = cljs.core.nth.call(null,vec__12905,(0),null);
var xs__$1 = vec__12905;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__12906 = cljs.core.rest.call(null,s);
var G__12907 = seen__$1;
p__12904 = G__12906;
seen__$1 = G__12907;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
/**
 * Like `merge-with` but merges maps recursively, applying the given fn
 * only when there's a non-map at a particular level.
 * 
 * (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
 * {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
 * => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
 */
taoensso.encore.merge_deep_with = (function taoensso$encore$merge_deep_with(){
var args__5506__auto__ = [];
var len__5499__auto___12910 = arguments.length;
var i__5500__auto___12911 = (0);
while(true){
if((i__5500__auto___12911 < len__5499__auto___12910)){
args__5506__auto__.push((arguments[i__5500__auto___12911]));

var G__12912 = (i__5500__auto___12911 + (1));
i__5500__auto___12911 = G__12912;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var taoensso$encore$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,taoensso$encore$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var taoensso$encore$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__12913__i = 0, G__12913__a = new Array(arguments.length -  0);
while (G__12913__i < G__12913__a.length) {G__12913__a[G__12913__i] = arguments[G__12913__i + 0]; ++G__12913__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__12913__a,0);
} 
return taoensso$encore$m__delegate.call(this,maps__$1);};
taoensso$encore$m.cljs$lang$maxFixedArity = 0;
taoensso$encore$m.cljs$lang$applyTo = (function (arglist__12914){
var maps__$1 = cljs.core.seq(arglist__12914);
return taoensso$encore$m__delegate(maps__$1);
});
taoensso$encore$m.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$m__delegate;
return taoensso$encore$m;
})()
,maps);
});

taoensso.encore.merge_deep_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_deep_with.cljs$lang$applyTo = (function (seq12908){
var G__12909 = cljs.core.first.call(null,seq12908);
var seq12908__$1 = cljs.core.next.call(null,seq12908);
return taoensso.encore.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic(G__12909,seq12908__$1);
});
taoensso.encore.merge_deep = cljs.core.partial.call(null,taoensso.encore.merge_deep_with,(function (x,y){
return y;
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(){
var args__5506__auto__ = [];
var len__5499__auto___12921 = arguments.length;
var i__5500__auto___12922 = (0);
while(true){
if((i__5500__auto___12922 < len__5499__auto___12921)){
args__5506__auto__.push((arguments[i__5500__auto___12922]));

var G__12923 = (i__5500__auto___12922 + (1));
i__5500__auto___12922 = G__12923;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__12919){
var vec__12920 = p__12919;
var _QMARK_comparator = cljs.core.nth.call(null,vec__12920,(0),null);
var comparator = (function (){var or__4460__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__12920,_QMARK_comparator){
return (function (p1__12915_SHARP_,p2__12916_SHARP_){
if((comparator.call(null,p1__12915_SHARP_,p2__12916_SHARP_) > (0))){
return p2__12916_SHARP_;
} else {
return p1__12915_SHARP_;
}
});})(comparator,vec__12920,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq12917){
var G__12918 = cljs.core.first.call(null,seq12917);
var seq12917__$1 = cljs.core.next.call(null,seq12917);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__12918,seq12917__$1);
});
/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(){
var args__5506__auto__ = [];
var len__5499__auto___12930 = arguments.length;
var i__5500__auto___12931 = (0);
while(true){
if((i__5500__auto___12931 < len__5499__auto___12930)){
args__5506__auto__.push((arguments[i__5500__auto___12931]));

var G__12932 = (i__5500__auto___12931 + (1));
i__5500__auto___12931 = G__12932;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__12928){
var vec__12929 = p__12928;
var _QMARK_comparator = cljs.core.nth.call(null,vec__12929,(0),null);
var comparator = (function (){var or__4460__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__12929,_QMARK_comparator){
return (function (p1__12924_SHARP_,p2__12925_SHARP_){
if((comparator.call(null,p1__12924_SHARP_,p2__12925_SHARP_) < (0))){
return p2__12925_SHARP_;
} else {
return p1__12924_SHARP_;
}
});})(comparator,vec__12929,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq12926){
var G__12927 = cljs.core.first.call(null,seq12926);
var seq12926__$1 = cljs.core.next.call(null,seq12926);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__12927,seq12926__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__12933 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__12934 = (idx + (1));
v = G__12933;
idx = G__12934;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__12935 = cljs.core.conj.call(null,v,f.call(null));
var G__12936 = (idx + (1));
v = G__12935;
idx = G__12936;
continue;
}
break;
}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API with support for:
 * * Clamping of indexes beyond string limits.
 * * Negative indexes: [   0   |   1   |  ...  |  n-1  |   n   ) or
 * [  -n   | -n+1  |  ...  |  -1   |   0   ).
 * (start index inclusive, end index exclusive).
 * 
 * Note that `max-len` was chosen over `end-idx` since it's less ambiguous and
 * easier to reason about - esp. when accepting negative indexes.
 */
taoensso.encore.substr = (function taoensso$encore$substr(){
var args__5506__auto__ = [];
var len__5499__auto___12942 = arguments.length;
var i__5500__auto___12943 = (0);
while(true){
if((i__5500__auto___12943 < len__5499__auto___12942)){
args__5506__auto__.push((arguments[i__5500__auto___12943]));

var G__12944 = (i__5500__auto___12943 + (1));
i__5500__auto___12943 = G__12944;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((2) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5507__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__12940){
var vec__12941 = p__12940;
var max_len = cljs.core.nth.call(null,vec__12941,(0),null);
if(cljs.core.truth_((function (){var or__4460__auto__ = (max_len == null);
if(or__4460__auto__){
return or__4460__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,max_len);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)))))].join('')));
}

var slen = cljs.core.count.call(null,s);
var start_idx_STAR_ = (((start_idx >= (0)))?(function (){var x__4779__auto__ = start_idx;
var y__4780__auto__ = slen;
return ((x__4779__auto__ < y__4780__auto__) ? x__4779__auto__ : y__4780__auto__);
})():(function (){var x__4772__auto__ = (0);
var y__4773__auto__ = ((slen + start_idx) - (1));
return ((x__4772__auto__ > y__4773__auto__) ? x__4772__auto__ : y__4773__auto__);
})());
var end_idx_STAR_ = ((cljs.core.not.call(null,max_len))?slen:(function (){var x__4779__auto__ = (start_idx_STAR_ + max_len);
var y__4780__auto__ = slen;
return ((x__4779__auto__ < y__4780__auto__) ? x__4779__auto__ : y__4780__auto__);
})());
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq12937){
var G__12938 = cljs.core.first.call(null,seq12937);
var seq12937__$1 = cljs.core.next.call(null,seq12937);
var G__12939 = cljs.core.first.call(null,seq12937__$1);
var seq12937__$2 = cljs.core.next.call(null,seq12937__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__12938,G__12939,seq12937__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(){
var args__5506__auto__ = [];
var len__5499__auto___12947 = arguments.length;
var i__5500__auto___12948 = (0);
while(true){
if((i__5500__auto___12948 < len__5499__auto___12947)){
args__5506__auto__.push((arguments[i__5500__auto___12948]));

var G__12949 = (i__5500__auto___12948 + (1));
i__5500__auto___12948 = G__12949;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq12945){
var G__12946 = cljs.core.first.call(null,seq12945);
var seq12945__$1 = cljs.core.next.call(null,seq12945);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__12946,seq12945__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 * interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(){
var args__5506__auto__ = [];
var len__5499__auto___12951 = arguments.length;
var i__5500__auto___12952 = (0);
while(true){
if((i__5500__auto___12952 < len__5499__auto___12951)){
args__5506__auto__.push((arguments[i__5500__auto___12952]));

var G__12953 = (i__5500__auto___12952 + (1));
i__5500__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq12950){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12950));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 * form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
taoensso.encore.count_words.call(null,"Hello this is a    test");
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 * Ref. http://www.ietf.org/rfc/rfc4122.txt,
 * https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(){
var args12954 = [];
var len__5499__auto___12957 = arguments.length;
var i__5500__auto___12958 = (0);
while(true){
if((i__5500__auto___12958 < len__5499__auto___12957)){
args12954.push((arguments[i__5500__auto___12958]));

var G__12959 = (i__5500__auto___12958 + (1));
i__5500__auto___12958 = G__12959;
continue;
} else {
}
break;
}

var G__12956 = args12954.length;
switch (G__12956) {
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12954.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var fs = (function (n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));
return sb.toString();
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
/**
 * Swaps associative value at key and returns the new value.
 * Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 * and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(){
var args__5506__auto__ = [];
var len__5499__auto___12965 = arguments.length;
var i__5500__auto___12966 = (0);
while(true){
if((i__5500__auto___12966 < len__5499__auto___12965)){
args__5506__auto__.push((arguments[i__5500__auto___12966]));

var G__12967 = (i__5500__auto___12966 + (1));
i__5500__auto___12966 = G__12967;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((2) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5507__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__12961_SHARP_){
if(cljs.core.truth_(p1__12961_SHARP_)){
return p1__12961_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq12962){
var G__12963 = cljs.core.first.call(null,seq12962);
var seq12962__$1 = cljs.core.next.call(null,seq12962);
var G__12964 = cljs.core.first.call(null,seq12962__$1);
var seq12962__$2 = cljs.core.next.call(null,seq12962__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__12963,G__12964,seq12962__$2);
});
/**
 * Like `clojure.core/memoize` but:
 * * Uses delays to prevent race conditions on writes.
 * * Supports auto invalidation & gc with `ttl-ms` option.
 * * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 * * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(){
var args12970 = [];
var len__5499__auto___12991 = arguments.length;
var i__5500__auto___12992 = (0);
while(true){
if((i__5500__auto___12992 < len__5499__auto___12991)){
args12970.push((arguments[i__5500__auto___12992]));

var G__12993 = (i__5500__auto___12992 + (1));
i__5500__auto___12992 = G__12993;
continue;
} else {
}
break;
}

var G__12972 = args12970.length;
switch (G__12972) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12970.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__12995__delegate = function (p__12973){
var vec__12974 = p__12973;
var arg1 = cljs.core.nth.call(null,vec__12974,(0),null);
var argn = cljs.core.nthnext.call(null,vec__12974,(1));
var args = vec__12974;
if((arg1 === new cljs.core.Keyword("mem","del","mem/del",574870667))){
if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__12974,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__4448__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__4448__auto__)){
return !(fresh_QMARK_);
} else {
return and__4448__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__12974,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__12974,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__12974,arg1,argn,args,cache))
));
}
};
var G__12995 = function (var_args){
var p__12973 = null;
if (arguments.length > 0) {
var G__12996__i = 0, G__12996__a = new Array(arguments.length -  0);
while (G__12996__i < G__12996__a.length) {G__12996__a[G__12996__i] = arguments[G__12996__i + 0]; ++G__12996__i;}
  p__12973 = new cljs.core.IndexedSeq(G__12996__a,0);
} 
return G__12995__delegate.call(this,p__12973);};
G__12995.cljs$lang$maxFixedArity = 0;
G__12995.cljs$lang$applyTo = (function (arglist__12997){
var p__12973 = cljs.core.seq(arglist__12997);
return G__12995__delegate(p__12973);
});
G__12995.cljs$core$IFn$_invoke$arity$variadic = G__12995__delegate;
return G__12995;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__12998__delegate = function (p__12975){
var vec__12976 = p__12975;
var arg1 = cljs.core.nth.call(null,vec__12976,(0),null);
var argn = cljs.core.nthnext.call(null,vec__12976,(1));
var args = vec__12976;
if((arg1 === new cljs.core.Keyword("mem","del","mem/del",574870667))){
if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate)){
var instant_12999 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_12999,vec__12976,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_12999,vec__12976,arg1,argn,args,cache){
return (function (m_STAR_,k,p__12977){
var vec__12978 = p__12977;
var dv = cljs.core.nth.call(null,vec__12978,(0),null);
var udt = cljs.core.nth.call(null,vec__12978,(1),null);
var cv = vec__12978;
if(((instant_12999 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_12999,vec__12976,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,m);
});})(instant_12999,vec__12976,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
return cljs.core.deref.call(null,taoensso.encore.first_nth.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__12976,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4448__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = !(fresh_QMARK_);
if(and__4448__auto____$1){
var vec__12980 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__12980,(0),null);
var udt = cljs.core.nth.call(null,vec__12980,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__12976,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__12976,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__12976,arg1,argn,args,cache))
)));
}
};
var G__12998 = function (var_args){
var p__12975 = null;
if (arguments.length > 0) {
var G__13000__i = 0, G__13000__a = new Array(arguments.length -  0);
while (G__13000__i < G__13000__a.length) {G__13000__a[G__13000__i] = arguments[G__13000__i + 0]; ++G__13000__i;}
  p__12975 = new cljs.core.IndexedSeq(G__13000__a,0);
} 
return G__12998__delegate.call(this,p__12975);};
G__12998.cljs$lang$maxFixedArity = 0;
G__12998.cljs$lang$applyTo = (function (arglist__13001){
var p__12975 = cljs.core.seq(arglist__13001);
return G__12998__delegate(p__12975);
});
G__12998.cljs$core$IFn$_invoke$arity$variadic = G__12998__delegate;
return G__12998;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__13002__delegate = function (p__12981){
var vec__12982 = p__12981;
var arg1 = cljs.core.nth.call(null,vec__12982,(0),null);
var argn = cljs.core.nthnext.call(null,vec__12982,(1));
var args = vec__12982;
if((arg1 === new cljs.core.Keyword("mem","del","mem/del",574870667))){
if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate)){
var instant_13003 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_13003,vec__12982,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_13003,vec__12982,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__12983){
var vec__12984 = p__12983;
var dv = cljs.core.nth.call(null,vec__12984,(0),null);
var udt = cljs.core.nth.call(null,vec__12984,(1),null);
var _ = cljs.core.nth.call(null,vec__12984,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__12984,(3),null);
var cv = vec__12984;
if(((instant_13003 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_13003,vec__12982,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,m_STAR_));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_13003,vec__12982,arg1,argn,args,state){
return (function (p1__12969_SHARP_){
return cljs.core.nth.call(null,p1__12969_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_13003,vec__12982,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_13003,vec__12982,arg1,argn,args,state){
return (function (p1__12968_SHARP_){
return cljs.core.nth.call(null,p1__12968_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_13003,vec__12982,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_13003,vec__12982,arg1,argn,args,state){
return (function (k){
var vec__12985 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__12985,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12985,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__12985,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__12985,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_13003,vec__12982,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_13003,vec__12982,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var dv = taoensso.encore.first_nth.call(null,taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__12982,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4448__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = !(fresh_QMARK_);
if(and__4448__auto____$1){
var or__4460__auto__ = (_QMARK_instant == null);
if(or__4460__auto__){
return or__4460__auto__;
} else {
var vec__12989 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__12989,(0),null);
var udt = cljs.core.nth.call(null,vec__12989,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__12982,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__12982,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__12982,arg1,argn,args,state))
));
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,dv,vec__12982,arg1,argn,args,state){
return (function (m){
var temp__4425__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__12990 = temp__4425__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__12990,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__12990,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__12990,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__12990,(3),null);
var cv = vec__12990;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,dv,vec__12982,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__13002 = function (var_args){
var p__12981 = null;
if (arguments.length > 0) {
var G__13004__i = 0, G__13004__a = new Array(arguments.length -  0);
while (G__13004__i < G__13004__a.length) {G__13004__a[G__13004__i] = arguments[G__13004__i + 0]; ++G__13004__i;}
  p__12981 = new cljs.core.IndexedSeq(G__13004__a,0);
} 
return G__13002__delegate.call(this,p__12981);};
G__13002.cljs$lang$maxFixedArity = 0;
G__13002.cljs$lang$applyTo = (function (arglist__13005){
var p__12981 = cljs.core.seq(arglist__13005);
return G__13002__delegate(p__12981);
});
G__13002.cljs$core$IFn$_invoke$arity$variadic = G__13002__delegate;
return G__13002;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
 * msecs until next rate limit window (rate limited).
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));
return ((function (state){
return (function() { 
var G__13024__delegate = function (p__13015){
var vec__13016 = p__13015;
var id = cljs.core.nth.call(null,vec__13016,(0),null);
if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate)){
var instant_13025 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_13025,vec__13016,id,state){
return (function (p__13017){
var vec__13018 = p__13017;
var _ = cljs.core.nth.call(null,vec__13018,(0),null);
var m = cljs.core.nth.call(null,vec__13018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__13018,_,m,instant_13025,vec__13016,id,state){
return (function (m_STAR_,id__$1,p__13019){
var vec__13020 = p__13019;
var udt_window_start = cljs.core.nth.call(null,vec__13020,(0),null);
var ncalls = cljs.core.nth.call(null,vec__13020,(1),null);
if(((instant_13025 - udt_window_start) > window_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__13018,_,m,instant_13025,vec__13016,id,state))
,cljs.core.PersistentArrayMap.EMPTY,m)], null);
});})(instant_13025,vec__13016,id,state))
);
} else {
}

return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);
return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__13016,id,state){
return (function (p__13021){
var vec__13022 = p__13021;
var _ = cljs.core.nth.call(null,vec__13022,(0),null);
var m = cljs.core.nth.call(null,vec__13022,(1),null);
var temp__4423__auto__ = m.call(null,id);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__13023 = temp__4423__auto__;
var udt_window_start = cljs.core.nth.call(null,vec__13023,(0),null);
var ncalls = cljs.core.nth.call(null,vec__13023,(1),null);
if(((instant - udt_window_start) > window_ms)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else {
if((ncalls < ncalls_limit)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__13016,id,state))
);
})(),(0));
};
var G__13024 = function (var_args){
var p__13015 = null;
if (arguments.length > 0) {
var G__13026__i = 0, G__13026__a = new Array(arguments.length -  0);
while (G__13026__i < G__13026__a.length) {G__13026__a[G__13026__i] = arguments[G__13026__i + 0]; ++G__13026__i;}
  p__13015 = new cljs.core.IndexedSeq(G__13026__a,0);
} 
return G__13024__delegate.call(this,p__13015);};
G__13024.cljs$lang$maxFixedArity = 0;
G__13024.cljs$lang$applyTo = (function (arglist__13027){
var p__13015 = cljs.core.seq(arglist__13027);
return G__13024__delegate(p__13015);
});
G__13024.cljs$core$IFn$_invoke$arity$variadic = G__13024__delegate;
return G__13024;
})()
;
;})(state))
});
/**
 * Wraps fn so that it returns {:result _ :backoff-ms _}.
 */
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);
return ((function (rl){
return (function() { 
var G__13028__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__13028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13029__i = 0, G__13029__a = new Array(arguments.length -  0);
while (G__13029__i < G__13029__a.length) {G__13029__a[G__13029__i] = arguments[G__13029__i + 0]; ++G__13029__i;}
  args = new cljs.core.IndexedSeq(G__13029__a,0);
} 
return G__13028__delegate.call(this,args);};
G__13028.cljs$lang$maxFixedArity = 0;
G__13028.cljs$lang$applyTo = (function (arglist__13030){
var args = cljs.core.seq(arglist__13030);
return G__13028__delegate(args);
});
G__13028.cljs$core$IFn$_invoke$arity$variadic = G__13028__delegate;
return G__13028;
})()
;
;})(rl))
});
taoensso.encore.log = (function taoensso$encore$log(x){
if(cljs.core.truth_(typeof console != 'undefined')){
console.log(x);
} else {
print(x);
}

return null;
});

taoensso.encore.sayp = (function taoensso$encore$sayp(){
var args__5506__auto__ = [];
var len__5499__auto___13051 = arguments.length;
var i__5500__auto___13052 = (0);
while(true){
if((i__5500__auto___13052 < len__5499__auto___13051)){
args__5506__auto__.push((arguments[i__5500__auto___13052]));

var G__13053 = (i__5500__auto___13052 + (1));
i__5500__auto___13052 = G__13053;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(clojure.string.join.call(null," ",xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq13031){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13031));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(){
var args__5506__auto__ = [];
var len__5499__auto___13054 = arguments.length;
var i__5500__auto___13055 = (0);
while(true){
if((i__5500__auto___13055 < len__5499__auto___13054)){
args__5506__auto__.push((arguments[i__5500__auto___13055]));

var G__13056 = (i__5500__auto___13055 + (1));
i__5500__auto___13055 = G__13056;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq13032){
var G__13033 = cljs.core.first.call(null,seq13032);
var seq13032__$1 = cljs.core.next.call(null,seq13032);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__13033,seq13032__$1);
});

taoensso.encore.logp = (function taoensso$encore$logp(){
var args__5506__auto__ = [];
var len__5499__auto___13057 = arguments.length;
var i__5500__auto___13058 = (0);
while(true){
if((i__5500__auto___13058 < len__5499__auto___13057)){
args__5506__auto__.push((arguments[i__5500__auto___13058]));

var G__13059 = (i__5500__auto___13058 + (1));
i__5500__auto___13058 = G__13059;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.log.call(null,clojure.string.join.call(null," ",xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq13034){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13034));
});

taoensso.encore.logf = (function taoensso$encore$logf(){
var args__5506__auto__ = [];
var len__5499__auto___13060 = arguments.length;
var i__5500__auto___13061 = (0);
while(true){
if((i__5500__auto___13061 < len__5499__auto___13060)){
args__5506__auto__.push((arguments[i__5500__auto___13061]));

var G__13062 = (i__5500__auto___13061 + (1));
i__5500__auto___13061 = G__13062;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.log.call(null,cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq13035){
var G__13036 = cljs.core.first.call(null,seq13035);
var seq13035__$1 = cljs.core.next.call(null,seq13035);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__13036,seq13035__$1);
});

/**
 * Log only >= <this-level> calls
 */
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.logging_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = cljs.core.deref.call(null,taoensso.encore.logging_level);
if(cljs.core.truth_(valid_level_QMARK_.call(null,current_level))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null),new cljs.core.Symbol(null,"current-level","current-level",1628605637,null))))].join('')));
}

if(cljs.core.truth_(valid_level_QMARK_.call(null,level))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null),new cljs.core.Symbol(null,"level","level",-1363938217,null))))].join('')));
}

return (scored_levels.call(null,level) >= scored_levels.call(null,current_level));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.lls_QMARK_ = taoensso.encore.logging_level_sufficient_QMARK_;

taoensso.encore.tracef = (function taoensso$encore$tracef(){
var args__5506__auto__ = [];
var len__5499__auto___13063 = arguments.length;
var i__5500__auto___13064 = (0);
while(true){
if((i__5500__auto___13064 < len__5499__auto___13063)){
args__5506__auto__.push((arguments[i__5500__auto___13064]));

var G__13065 = (i__5500__auto___13064 + (1));
i__5500__auto___13064 = G__13065;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq13037){
var G__13038 = cljs.core.first.call(null,seq13037);
var seq13037__$1 = cljs.core.next.call(null,seq13037);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__13038,seq13037__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(){
var args__5506__auto__ = [];
var len__5499__auto___13066 = arguments.length;
var i__5500__auto___13067 = (0);
while(true){
if((i__5500__auto___13067 < len__5499__auto___13066)){
args__5506__auto__.push((arguments[i__5500__auto___13067]));

var G__13068 = (i__5500__auto___13067 + (1));
i__5500__auto___13067 = G__13068;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq13039){
var G__13040 = cljs.core.first.call(null,seq13039);
var seq13039__$1 = cljs.core.next.call(null,seq13039);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__13040,seq13039__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(){
var args__5506__auto__ = [];
var len__5499__auto___13069 = arguments.length;
var i__5500__auto___13070 = (0);
while(true){
if((i__5500__auto___13070 < len__5499__auto___13069)){
args__5506__auto__.push((arguments[i__5500__auto___13070]));

var G__13071 = (i__5500__auto___13070 + (1));
i__5500__auto___13070 = G__13071;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq13041){
var G__13042 = cljs.core.first.call(null,seq13041);
var seq13041__$1 = cljs.core.next.call(null,seq13041);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__13042,seq13041__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(){
var args__5506__auto__ = [];
var len__5499__auto___13072 = arguments.length;
var i__5500__auto___13073 = (0);
while(true){
if((i__5500__auto___13073 < len__5499__auto___13072)){
args__5506__auto__.push((arguments[i__5500__auto___13073]));

var G__13074 = (i__5500__auto___13073 + (1));
i__5500__auto___13073 = G__13074;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return [cljs.core.str("WARN: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq13043){
var G__13044 = cljs.core.first.call(null,seq13043);
var seq13043__$1 = cljs.core.next.call(null,seq13043);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__13044,seq13043__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(){
var args__5506__auto__ = [];
var len__5499__auto___13075 = arguments.length;
var i__5500__auto___13076 = (0);
while(true){
if((i__5500__auto___13076 < len__5499__auto___13075)){
args__5506__auto__.push((arguments[i__5500__auto___13076]));

var G__13077 = (i__5500__auto___13076 + (1));
i__5500__auto___13076 = G__13077;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return [cljs.core.str("ERROR: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq13045){
var G__13046 = cljs.core.first.call(null,seq13045);
var seq13045__$1 = cljs.core.next.call(null,seq13045);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__13046,seq13045__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(){
var args__5506__auto__ = [];
var len__5499__auto___13078 = arguments.length;
var i__5500__auto___13079 = (0);
while(true){
if((i__5500__auto___13079 < len__5499__auto___13078)){
args__5506__auto__.push((arguments[i__5500__auto___13079]));

var G__13080 = (i__5500__auto___13079 + (1));
i__5500__auto___13079 = G__13080;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return [cljs.core.str("FATAL: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq13047){
var G__13048 = cljs.core.first.call(null,seq13047);
var seq13047__$1 = cljs.core.next.call(null,seq13047);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__13048,seq13047__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(){
var args__5506__auto__ = [];
var len__5499__auto___13081 = arguments.length;
var i__5500__auto___13082 = (0);
while(true){
if((i__5500__auto___13082 < len__5499__auto___13081)){
args__5506__auto__.push((arguments[i__5500__auto___13082]));

var G__13083 = (i__5500__auto___13082 + (1));
i__5500__auto___13082 = G__13083;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq13049){
var G__13050 = cljs.core.first.call(null,seq13049);
var seq13049__$1 = cljs.core.next.call(null,seq13049);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__13050,seq13049__$1);
});
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(){
var args__5506__auto__ = [];
var len__5499__auto___13088 = arguments.length;
var i__5500__auto___13089 = (0);
while(true){
if((i__5500__auto___13089 < len__5499__auto___13088)){
args__5506__auto__.push((arguments[i__5500__auto___13089]));

var G__13090 = (i__5500__auto___13089 + (1));
i__5500__auto___13089 = G__13090;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__13086){
var vec__13087 = p__13086;
var nattempt = cljs.core.nth.call(null,vec__13087,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__4460__auto__ = nattempt;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq13084){
var G__13085 = cljs.core.first.call(null,seq13084);
var seq13084__$1 = cljs.core.next.call(null,seq13084);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13085,seq13084__$1);
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 * released back to pool manually. Use core.async to wait for an available
 * instance, etc.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(((params == null)) || (cljs.core.map_QMARK_.call(null,params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__13092 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__13092) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-lite "/my-post-route"
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__13096,callback){
var map__13111 = p__13096;
var map__13111__$1 = ((((!((map__13111 == null)))?((((map__13111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13111):map__13111);
var opts = map__13111__$1;
var method = cljs.core.get.call(null,map__13111__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__13111__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__13111__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__13111__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__13111__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
if(cljs.core.truth_((function (){var or__4460__auto__ = (timeout_ms == null);
if(or__4460__auto__){
return or__4460__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__4460__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__13115 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__13115) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__13114 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__13114,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__13114,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__13116_13126 = xhr;
goog.events.listenOnce(G__13116_13126,goog.net.EventType.READY,((function (G__13116_13126,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13114,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__13111,map__13111__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__13116_13126,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13114,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__13111,map__13111__$1,opts,method,params,headers,timeout_ms,resp_type))
);

goog.events.listenOnce(G__13116_13126,goog.net.EventType.COMPLETE,((function (G__13116_13126,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13114,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__13111,map__13111__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),(cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__13121 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__13116_13126,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13114,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__13111,map__13111__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function (p1__13095_SHARP_,p2__13094_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__13094_SHARP_,p1__13095_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__13116_13126,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13114,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__13111,map__13111__$1,opts,method,params,headers,timeout_ms,resp_type))
;
var expr__13122 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__13121.call(null,"/edn",expr__13122))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__13121.call(null,"/json",expr__13122))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__13121.call(null,"/xml",expr__13122))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__13121.call(null,"/html",expr__13122))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
var G__13124 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__13124) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
})():null),new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(_QMARK_http_status)?(((((200) <= _QMARK_http_status)) && ((_QMARK_http_status <= (299))))?null:_QMARK_http_status):cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)))], null);
return callback.call(null,cb_arg);
});})(G__13116_13126,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__13114,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__13111,map__13111__$1,opts,method,params,headers,timeout_ms,resp_type))
);

G__13116_13126.setTimeoutInterval((function (){var or__4460__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4460__auto__)){
return or__4460__auto__;
} else {
return (0);
}
})());

G__13116_13126.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e13113){if((e13113 instanceof Error)){
var e = e13113;
taoensso.encore.logf.call(null,"Ajax error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e13113;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
