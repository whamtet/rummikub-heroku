// Compiled by ClojureScript 1.7.48 {}
goog.provide('rummikub_cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('ajax.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
rummikub_cljs.core.apply_interpose = (function rummikub_cljs$core$apply_interpose(i,s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,i,s));
});
rummikub_cljs.core.value_filter = (function rummikub_cljs$core$value_filter(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5213__auto__ = (function rummikub_cljs$core$value_filter_$_iter__7085(s__7086){
return (new cljs.core.LazySeq(null,(function (){
var s__7086__$1 = s__7086;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7086__$1);
if(temp__4425__auto__){
var s__7086__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7086__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__7086__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__7088 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__7087 = (0);
while(true){
if((i__7087 < size__5212__auto__)){
var vec__7091 = cljs.core._nth.call(null,c__5211__auto__,i__7087);
var k = cljs.core.nth.call(null,vec__7091,(0),null);
var v = cljs.core.nth.call(null,vec__7091,(1),null);
if(cljs.core.truth_(f.call(null,v))){
cljs.core.chunk_append.call(null,b__7088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__7093 = (i__7087 + (1));
i__7087 = G__7093;
continue;
} else {
var G__7094 = (i__7087 + (1));
i__7087 = G__7094;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7088),rummikub_cljs$core$value_filter_$_iter__7085.call(null,cljs.core.chunk_rest.call(null,s__7086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7088),null);
}
} else {
var vec__7092 = cljs.core.first.call(null,s__7086__$2);
var k = cljs.core.nth.call(null,vec__7092,(0),null);
var v = cljs.core.nth.call(null,vec__7092,(1),null);
if(cljs.core.truth_(f.call(null,v))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),rummikub_cljs$core$value_filter_$_iter__7085.call(null,cljs.core.rest.call(null,s__7086__$2)));
} else {
var G__7095 = cljs.core.rest.call(null,s__7086__$2);
s__7086__$1 = G__7095;
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
return iter__5213__auto__.call(null,m);
})());
});
rummikub_cljs.core.to_num = (function rummikub_cljs$core$to_num(v){
if(cljs.core.truth_(isNaN(Number(v)))){
return v;
} else {
return Number(v);
}
});
rummikub_cljs.core.num_val = (function rummikub_cljs$core$num_val(x){
return rummikub_cljs.core.to_num.call(null,cljs.core.val.call(null,x));
});
rummikub_cljs.core.trim_val = (function rummikub_cljs$core$trim_val(x){
return cljs.core.val.call(null,x).trim();
});
rummikub_cljs.core.p = (function rummikub_cljs$core$p(x){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,x));
});
rummikub_cljs.core.page = (function rummikub_cljs$core$page(){
var args__5506__auto__ = [];
var len__5499__auto___7098 = arguments.length;
var i__5500__auto___7099 = (0);
while(true){
if((i__5500__auto___7099 < len__5499__auto___7098)){
args__5506__auto__.push((arguments[i__5500__auto___7099]));

var G__7100 = (i__5500__auto___7099 + (1));
i__5500__auto___7099 = G__7100;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return rummikub_cljs.core.page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

rummikub_cljs.core.page.cljs$core$IFn$_invoke$arity$variadic = (function (f,contents){
return rummikub_cljs.core.replace_with.call(null,rummikub_cljs.core.$.call(null,"#content"),crate.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0)",new cljs.core.Keyword(null,"onclick","onclick",1297553739),f,new cljs.core.Keyword(null,"id","id",-1388402092),"root_link"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"octant_small.png"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),contents], null)));
});

rummikub_cljs.core.page.cljs$lang$maxFixedArity = (1);

rummikub_cljs.core.page.cljs$lang$applyTo = (function (seq7096){
var G__7097 = cljs.core.first.call(null,seq7096);
var seq7096__$1 = cljs.core.next.call(null,seq7096);
return rummikub_cljs.core.page.cljs$core$IFn$_invoke$arity$variadic(G__7097,seq7096__$1);
});
rummikub_cljs.core.page2 = (function rummikub_cljs$core$page2(f,contents){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0)",new cljs.core.Keyword(null,"on-click","on-click",1632826543),f,new cljs.core.Keyword(null,"id","id",-1388402092),"root_link"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"octant_small.png"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contents], null)], null),cljs.core.first.call(null,rummikub_cljs.core.$.call(null,"#content")));
});
rummikub_cljs.core.my_replace_with = (function rummikub_cljs$core$my_replace_with(){
var args__5506__auto__ = [];
var len__5499__auto___7103 = arguments.length;
var i__5500__auto___7104 = (0);
while(true){
if((i__5500__auto___7104 < len__5499__auto___7103)){
args__5506__auto__.push((arguments[i__5500__auto___7104]));

var G__7105 = (i__5500__auto___7104 + (1));
i__5500__auto___7104 = G__7105;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return rummikub_cljs.core.my_replace_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

rummikub_cljs.core.my_replace_with.cljs$core$IFn$_invoke$arity$variadic = (function (id,contents){
return rummikub_cljs.core.replace_with.call(null,rummikub_cljs.core.$.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')),cljs.core.apply.call(null,crate.html,contents));
});

rummikub_cljs.core.my_replace_with.cljs$lang$maxFixedArity = (1);

rummikub_cljs.core.my_replace_with.cljs$lang$applyTo = (function (seq7101){
var G__7102 = cljs.core.first.call(null,seq7101);
var seq7101__$1 = cljs.core.next.call(null,seq7101);
return rummikub_cljs.core.my_replace_with.cljs$core$IFn$_invoke$arity$variadic(G__7102,seq7101__$1);
});
rummikub_cljs.core.str_contains_QMARK_ = (function rummikub_cljs$core$str_contains_QMARK_(a,b){
return cljs.core.not_EQ_.call(null,(-1),a.indexOf(b));
});
rummikub_cljs.core.format = (function rummikub_cljs$core$format(){
var args__5506__auto__ = [];
var len__5499__auto___7108 = arguments.length;
var i__5500__auto___7109 = (0);
while(true){
if((i__5500__auto___7109 < len__5499__auto___7108)){
args__5506__auto__.push((arguments[i__5500__auto___7109]));

var G__7110 = (i__5500__auto___7109 + (1));
i__5500__auto___7109 = G__7110;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return rummikub_cljs.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

rummikub_cljs.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,subs){
var s__$1 = s;
var current = cljs.core.first.call(null,subs);
var todo = cljs.core.rest.call(null,subs);
while(true){
if(cljs.core.truth_((function (){var and__4448__auto__ = rummikub_cljs.core.str_contains_QMARK_.call(null,s__$1,"%s");
if(cljs.core.truth_(and__4448__auto__)){
return current;
} else {
return and__4448__auto__;
}
})())){
var G__7111 = s__$1.replace("%s",current);
var G__7112 = cljs.core.first.call(null,todo);
var G__7113 = cljs.core.rest.call(null,todo);
s__$1 = G__7111;
current = G__7112;
todo = G__7113;
continue;
} else {
return s__$1;
}
break;
}
});

rummikub_cljs.core.format.cljs$lang$maxFixedArity = (1);

rummikub_cljs.core.format.cljs$lang$applyTo = (function (seq7106){
var G__7107 = cljs.core.first.call(null,seq7106);
var seq7106__$1 = cljs.core.next.call(null,seq7106);
return rummikub_cljs.core.format.cljs$core$IFn$_invoke$arity$variadic(G__7107,seq7106__$1);
});
rummikub_cljs.core.format_int = (function rummikub_cljs$core$format_int(s,n){
return s.replace("%i",n);
});
rummikub_cljs.core.round = (function rummikub_cljs$core$round(x,decimals){
var factor = Math.pow((10),decimals);
return (Math.round((x * factor)) / factor);
});
rummikub_cljs.core.update_db = (function rummikub_cljs$core$update_db(command,payload,f){
return ajax.core.POST.call(null,"/update-db",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null),new cljs.core.Keyword(null,"handler","handler",-195596612),f], null));
});
rummikub_cljs.core.eager_every_QMARK_ = (function rummikub_cljs$core$eager_every_QMARK_(f,s){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.doall.call(null,cljs.core.map.call(null,f,s)));
});
rummikub_cljs.core.link_to = (function rummikub_cljs$core$link_to(url2,m){
return document.location = rummikub_cljs.core.url.call(null,url2,m);
});
rummikub_cljs.core.link_to2 = (function rummikub_cljs$core$link_to2(url2,m,new_window_QMARK_){
if(cljs.core.truth_(new_window_QMARK_)){
return window.open(rummikub_cljs.core.url.call(null,url2,m),"_blank");
} else {
return document.location = rummikub_cljs.core.url.call(null,url2,m);
}
});
rummikub_cljs.core.replace_all = (function rummikub_cljs$core$replace_all(a,b,c){
var a__$1 = a;
while(true){
if(cljs.core._EQ_.call(null,(-1),a__$1.indexOf(b))){
return a__$1;
} else {
var G__7114 = a__$1.replace(b,c);
a__$1 = G__7114;
continue;
}
break;
}
});
rummikub_cljs.core.safe_name = (function rummikub_cljs$core$safe_name(x){
if(cljs.core.truth_(x)){
return cljs.core.name.call(null,x);
} else {
return "";
}
});
rummikub_cljs.core.url = (function rummikub_cljs$core$url(host,m){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,host,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__7117){
var vec__7118 = p__7117;
var k = cljs.core.nth.call(null,vec__7118,(0),null);
var v = cljs.core.nth.call(null,vec__7118,(1),null);
return [cljs.core.str(rummikub_cljs.core.safe_name.call(null,k)),cljs.core.str("="),cljs.core.str(rummikub_cljs.core.replace_all.call(null,rummikub_cljs.core.safe_name.call(null,v)," ","%20"))].join('');
}),m))))].join('');
});
rummikub_cljs.core.clean_string = (function rummikub_cljs$core$clean_string(s,to_remove){
return cljs.core.reduce.call(null,(function (a,b){
return rummikub_cljs.core.replace_all.call(null,a,b,"");
}),s,to_remove);
});
rummikub_cljs.core.clean_id = (function rummikub_cljs$core$clean_id(){
var args__5506__auto__ = [];
var len__5499__auto___7120 = arguments.length;
var i__5500__auto___7121 = (0);
while(true){
if((i__5500__auto___7121 < len__5499__auto___7120)){
args__5506__auto__.push((arguments[i__5500__auto___7121]));

var G__7122 = (i__5500__auto___7121 + (1));
i__5500__auto___7121 = G__7122;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return rummikub_cljs.core.clean_id.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

rummikub_cljs.core.clean_id.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return rummikub_cljs.core.clean_string.call(null,cljs.core.apply.call(null,cljs.core.str,args),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",",","(",")","&","'","/"], null));
});

rummikub_cljs.core.clean_id.cljs$lang$maxFixedArity = (0);

rummikub_cljs.core.clean_id.cljs$lang$applyTo = (function (seq7119){
return rummikub_cljs.core.clean_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7119));
});
rummikub_cljs.core.scroll_to = (function rummikub_cljs$core$scroll_to(h){
return rummikub_cljs.core.$.call(null,"html, body").animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),(h - (100))], null)),(50));
});
rummikub_cljs.core.get_position = (function rummikub_cljs$core$get_position(element,total_height){
var h = rummikub_cljs.core.$.call(null,element).offset().top;
var y = (h / total_height);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,h], null);
});
rummikub_cljs.core.position_div = (function rummikub_cljs$core$position_div(class$,element,total_height){
var vec__7124 = rummikub_cljs.core.get_position.call(null,element,total_height);
var y = cljs.core.nth.call(null,vec__7124,(0),null);
var h = cljs.core.nth.call(null,vec__7124,(1),null);
return rummikub_cljs.core.append.call(null,rummikub_cljs.core.$.call(null,"body"),crate.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),rummikub_cljs.core.format.call(null,"position: fixed; width: 20px;\n                                              height: 3px; top: %s%; right: 0px;\n                                              ",(((100) * y) | (0))),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("override_marker "),cljs.core.str(class$)].join(''),new cljs.core.Keyword(null,"onclick","onclick",1297553739),rummikub_cljs.core.format.call(null,"octant_cljs.core.scroll_to(%s)",h)], null)], null)));
});
/**
 * shows colored sidebars
 */
rummikub_cljs.core.show_overridden = (function rummikub_cljs$core$show_overridden(){
var args7125 = [];
var len__5499__auto___7132 = arguments.length;
var i__5500__auto___7133 = (0);
while(true){
if((i__5500__auto___7133 < len__5499__auto___7132)){
args7125.push((arguments[i__5500__auto___7133]));

var G__7134 = (i__5500__auto___7133 + (1));
i__5500__auto___7133 = G__7134;
continue;
} else {
}
break;
}

var G__7127 = args7125.length;
switch (G__7127) {
case 0:
return rummikub_cljs.core.show_overridden.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rummikub_cljs.core.show_overridden.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7125.length)].join('')));

}
});

rummikub_cljs.core.show_overridden.cljs$core$IFn$_invoke$arity$0 = (function (){
rummikub_cljs.core.$.call(null,".override_marker").remove();

rummikub_cljs.core.show_overridden.call(null,"bloomberg-row");

rummikub_cljs.core.show_overridden.call(null,"not-found");

return rummikub_cljs.core.show_overridden.call(null,"overridden");
});

rummikub_cljs.core.show_overridden.cljs$core$IFn$_invoke$arity$1 = (function (class$){
var total_height = rummikub_cljs.core.$.call(null,document).height();
var seq__7128 = cljs.core.seq.call(null,rummikub_cljs.core.$.call(null,[cljs.core.str("."),cljs.core.str(class$)].join('')));
var chunk__7129 = null;
var count__7130 = (0);
var i__7131 = (0);
while(true){
if((i__7131 < count__7130)){
var element = cljs.core._nth.call(null,chunk__7129,i__7131);
rummikub_cljs.core.position_div.call(null,class$,element,total_height);

var G__7136 = seq__7128;
var G__7137 = chunk__7129;
var G__7138 = count__7130;
var G__7139 = (i__7131 + (1));
seq__7128 = G__7136;
chunk__7129 = G__7137;
count__7130 = G__7138;
i__7131 = G__7139;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7128);
if(temp__4425__auto__){
var seq__7128__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7128__$1)){
var c__5244__auto__ = cljs.core.chunk_first.call(null,seq__7128__$1);
var G__7140 = cljs.core.chunk_rest.call(null,seq__7128__$1);
var G__7141 = c__5244__auto__;
var G__7142 = cljs.core.count.call(null,c__5244__auto__);
var G__7143 = (0);
seq__7128 = G__7140;
chunk__7129 = G__7141;
count__7130 = G__7142;
i__7131 = G__7143;
continue;
} else {
var element = cljs.core.first.call(null,seq__7128__$1);
rummikub_cljs.core.position_div.call(null,class$,element,total_height);

var G__7144 = cljs.core.next.call(null,seq__7128__$1);
var G__7145 = null;
var G__7146 = (0);
var G__7147 = (0);
seq__7128 = G__7144;
chunk__7129 = G__7145;
count__7130 = G__7146;
i__7131 = G__7147;
continue;
}
} else {
return null;
}
}
break;
}
});

rummikub_cljs.core.show_overridden.cljs$lang$maxFixedArity = 1;
rummikub_cljs.core.split_line = (function rummikub_cljs$core$split_line(s){
var lines = cljs.core.map.call(null,(function (p1__7148_SHARP_){
return [cljs.core.str(p1__7148_SHARP_),cljs.core.str(" ")].join('');
}),s.split(" "));
var lines__$1 = cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.partition_all.call(null,(4),lines));
return lines__$1;
});
rummikub_cljs.core.pprint_number = (function rummikub_cljs$core$pprint_number(x){
var y = Math.abs(x);
var left = cljs.core.long$.call(null,y);
var right = frac(y);
var rightd = cljs.core.second.call(null,[cljs.core.str(right)].join('').split("."));
var left__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.flatten.call(null,cljs.core.interpose.call(null,",",cljs.core.partition_all.call(null,(3),cljs.core.reverse.call(null,[cljs.core.str(left)].join('')))))));
var num = (((right === (0)))?left__$1:[cljs.core.str(left__$1),cljs.core.str("."),cljs.core.str(rightd)].join(''));
if((x < (0))){
return [cljs.core.str("-"),cljs.core.str(num)].join('');
} else {
return [cljs.core.str(num)].join('');
}
});
rummikub_cljs.core.pprint_num = (function rummikub_cljs$core$pprint_num(x){
if(typeof x === 'string'){
return Number(rummikub_cljs.core.replace_all.call(null,x,",",""));
} else {
return x;
}
});
rummikub_cljs.core.pprint_nums2 = (function rummikub_cljs$core$pprint_nums2(x){
if(typeof x === 'string'){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,rummikub_cljs.core.pprint_num,x.trim().split(" ")));
} else {
return x;
}
});
rummikub_cljs.core.pprint_nums = (function rummikub_cljs$core$pprint_nums(x){
return rummikub_cljs.core.apply_interpose.call(null," ",cljs.core.map.call(null,(function (p1__7149_SHARP_){
return rummikub_cljs.core.pprint_number.call(null,rummikub_cljs.core.pprint_num.call(null,p1__7149_SHARP_));
}),x.trim().split(" ")));
});
rummikub_cljs.core.sanitize_map = (function rummikub_cljs$core$sanitize_map(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,m)),cljs.core.map.call(null,rummikub_cljs$core$sanitize_map,cljs.core.vals.call(null,m)));
} else {
if(cljs.core.coll_QMARK_.call(null,m)){
return cljs.core.map.call(null,rummikub_cljs$core$sanitize_map,m);
} else {
return m;

}
}
});
rummikub_cljs.core.clean_set_BANG_ = (function rummikub_cljs$core$clean_set_BANG_(atom,val){
return cljs.core.reset_BANG_.call(null,atom,rummikub_cljs.core.sanitize_map.call(null,val));
});
rummikub_cljs.core.validate = (function rummikub_cljs$core$validate(){
if(cljs.core.truth_(rummikub_cljs.core.eager_every_QMARK_.call(null,(function (input){
if(cljs.core.truth_(isNaN(Number(input.value)))){
rummikub_cljs.core.add_class.call(null,rummikub_cljs.core.$.call(null,input),"warning");

return false;
} else {
rummikub_cljs.core.remove_class.call(null,rummikub_cljs.core.$.call(null,input),"warning");

return true;
}
}),rummikub_cljs.core.$.call(null,".numeric-input")))){
return true;
} else {
alert("Invalid Input");

return false;
}
});
rummikub_cljs.core.apply_interpose = (function rummikub_cljs$core$apply_interpose(i,s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,i,s));
});
rummikub_cljs.core.transfer_alias = (function rummikub_cljs$core$transfer_alias(to_transfer,from,to){
var seq__7154 = cljs.core.seq.call(null,to_transfer);
var chunk__7155 = null;
var count__7156 = (0);
var i__7157 = (0);
while(true){
if((i__7157 < count__7156)){
var atom = cljs.core._nth.call(null,chunk__7155,i__7157);
eval(rummikub_cljs.core.format.call(null,"%s.%s = %s.%s",to,atom,from,atom));

var G__7158 = seq__7154;
var G__7159 = chunk__7155;
var G__7160 = count__7156;
var G__7161 = (i__7157 + (1));
seq__7154 = G__7158;
chunk__7155 = G__7159;
count__7156 = G__7160;
i__7157 = G__7161;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7154);
if(temp__4425__auto__){
var seq__7154__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7154__$1)){
var c__5244__auto__ = cljs.core.chunk_first.call(null,seq__7154__$1);
var G__7162 = cljs.core.chunk_rest.call(null,seq__7154__$1);
var G__7163 = c__5244__auto__;
var G__7164 = cljs.core.count.call(null,c__5244__auto__);
var G__7165 = (0);
seq__7154 = G__7162;
chunk__7155 = G__7163;
count__7156 = G__7164;
i__7157 = G__7165;
continue;
} else {
var atom = cljs.core.first.call(null,seq__7154__$1);
eval(rummikub_cljs.core.format.call(null,"%s.%s = %s.%s",to,atom,from,atom));

var G__7166 = cljs.core.next.call(null,seq__7154__$1);
var G__7167 = null;
var G__7168 = (0);
var G__7169 = (0);
seq__7154 = G__7166;
chunk__7155 = G__7167;
count__7156 = G__7168;
i__7157 = G__7169;
continue;
}
} else {
return null;
}
}
break;
}
});
rummikub_cljs.core.interleave_all = (function rummikub_cljs$core$interleave_all(){
var args__5506__auto__ = [];
var len__5499__auto___7176 = arguments.length;
var i__5500__auto___7177 = (0);
while(true){
if((i__5500__auto___7177 < len__5499__auto___7176)){
args__5506__auto__.push((arguments[i__5500__auto___7177]));

var G__7178 = (i__5500__auto___7177 + (1));
i__5500__auto___7177 = G__7178;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((0) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((0)),(0))):null);
return rummikub_cljs.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5507__auto__);
});

rummikub_cljs.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var m = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,seqs));
var safe_nth = ((function (m){
return (function (coll,i){
if((i < cljs.core.count.call(null,coll))){
return cljs.core.nth.call(null,coll,i);
} else {
return null;
}
});})(m))
;
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5213__auto__ = ((function (m,safe_nth){
return (function rummikub_cljs$core$iter__7172(s__7173){
return (new cljs.core.LazySeq(null,((function (m,safe_nth){
return (function (){
var s__7173__$1 = s__7173;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7173__$1);
if(temp__4425__auto__){
var s__7173__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7173__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__7173__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__7175 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__7174 = (0);
while(true){
if((i__7174 < size__5212__auto__)){
var i = cljs.core._nth.call(null,c__5211__auto__,i__7174);
cljs.core.chunk_append.call(null,b__7175,cljs.core.map.call(null,((function (i__7174,i,c__5211__auto__,size__5212__auto__,b__7175,s__7173__$2,temp__4425__auto__,m,safe_nth){
return (function (p1__7170_SHARP_){
return safe_nth.call(null,p1__7170_SHARP_,i);
});})(i__7174,i,c__5211__auto__,size__5212__auto__,b__7175,s__7173__$2,temp__4425__auto__,m,safe_nth))
,seqs));

var G__7179 = (i__7174 + (1));
i__7174 = G__7179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7175),rummikub_cljs$core$iter__7172.call(null,cljs.core.chunk_rest.call(null,s__7173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7175),null);
}
} else {
var i = cljs.core.first.call(null,s__7173__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__7173__$2,temp__4425__auto__,m,safe_nth){
return (function (p1__7170_SHARP_){
return safe_nth.call(null,p1__7170_SHARP_,i);
});})(i,s__7173__$2,temp__4425__auto__,m,safe_nth))
,seqs),rummikub_cljs$core$iter__7172.call(null,cljs.core.rest.call(null,s__7173__$2)));
}
} else {
return null;
}
break;
}
});})(m,safe_nth))
,null,null));
});})(m,safe_nth))
;
return iter__5213__auto__.call(null,cljs.core.range.call(null,m));
})()));
});

rummikub_cljs.core.interleave_all.cljs$lang$maxFixedArity = (0);

rummikub_cljs.core.interleave_all.cljs$lang$applyTo = (function (seq7171){
return rummikub_cljs.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7171));
});
rummikub_cljs.core.take_all = (function rummikub_cljs$core$take_all(n,coll){
return cljs.core.take.call(null,n,cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,null)));
});
rummikub_cljs.core.map_all = (function rummikub_cljs$core$map_all(){
var args__5506__auto__ = [];
var len__5499__auto___7183 = arguments.length;
var i__5500__auto___7184 = (0);
while(true){
if((i__5500__auto___7184 < len__5499__auto___7183)){
args__5506__auto__.push((arguments[i__5500__auto___7184]));

var G__7185 = (i__5500__auto___7184 + (1));
i__5500__auto___7184 = G__7185;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return rummikub_cljs.core.map_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

rummikub_cljs.core.map_all.cljs$core$IFn$_invoke$arity$variadic = (function (f,seqs){
var m = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,seqs));
var seqs__$1 = cljs.core.map.call(null,((function (m){
return (function (p1__7180_SHARP_){
return rummikub_cljs.core.take_all.call(null,m,p1__7180_SHARP_);
});})(m))
,seqs);
return cljs.core.apply.call(null,cljs.core.map,f,seqs__$1);
});

rummikub_cljs.core.map_all.cljs$lang$maxFixedArity = (1);

rummikub_cljs.core.map_all.cljs$lang$applyTo = (function (seq7181){
var G__7182 = cljs.core.first.call(null,seq7181);
var seq7181__$1 = cljs.core.next.call(null,seq7181);
return rummikub_cljs.core.map_all.cljs$core$IFn$_invoke$arity$variadic(G__7182,seq7181__$1);
});
rummikub_cljs.core.map_indexed_all = (function rummikub_cljs$core$map_indexed_all(){
var args__5506__auto__ = [];
var len__5499__auto___7189 = arguments.length;
var i__5500__auto___7190 = (0);
while(true){
if((i__5500__auto___7190 < len__5499__auto___7189)){
args__5506__auto__.push((arguments[i__5500__auto___7190]));

var G__7191 = (i__5500__auto___7190 + (1));
i__5500__auto___7190 = G__7191;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return rummikub_cljs.core.map_indexed_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

rummikub_cljs.core.map_indexed_all.cljs$core$IFn$_invoke$arity$variadic = (function (f,seqs){
var m = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,seqs));
var seqs__$1 = cljs.core.map.call(null,((function (m){
return (function (p1__7186_SHARP_){
return rummikub_cljs.core.take_all.call(null,m,p1__7186_SHARP_);
});})(m))
,seqs);
return cljs.core.apply.call(null,cljs.core.map,f,cljs.core.range.call(null),seqs__$1);
});

rummikub_cljs.core.map_indexed_all.cljs$lang$maxFixedArity = (1);

rummikub_cljs.core.map_indexed_all.cljs$lang$applyTo = (function (seq7187){
var G__7188 = cljs.core.first.call(null,seq7187);
var seq7187__$1 = cljs.core.next.call(null,seq7187);
return rummikub_cljs.core.map_indexed_all.cljs$core$IFn$_invoke$arity$variadic(G__7188,seq7187__$1);
});
rummikub_cljs.core.apply_r = (function rummikub_cljs$core$apply_r(){
var args__5506__auto__ = [];
var len__5499__auto___7194 = arguments.length;
var i__5500__auto___7195 = (0);
while(true){
if((i__5500__auto___7195 < len__5499__auto___7194)){
args__5506__auto__.push((arguments[i__5500__auto___7195]));

var G__7196 = (i__5500__auto___7195 + (1));
i__5500__auto___7195 = G__7196;
continue;
} else {
}
break;
}

var argseq__5507__auto__ = ((((1) < args__5506__auto__.length))?(new cljs.core.IndexedSeq(args__5506__auto__.slice((1)),(0))):null);
return rummikub_cljs.core.apply_r.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5507__auto__);
});

rummikub_cljs.core.apply_r.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
return rummikub_cljs.core.format.call(null,"%s('%s')",m,cljs.core.pr_str.call(null,cljs.core.vec.call(null,args)));
});

rummikub_cljs.core.apply_r.cljs$lang$maxFixedArity = (1);

rummikub_cljs.core.apply_r.cljs$lang$applyTo = (function (seq7192){
var G__7193 = cljs.core.first.call(null,seq7192);
var seq7192__$1 = cljs.core.next.call(null,seq7192);
return rummikub_cljs.core.apply_r.cljs$core$IFn$_invoke$arity$variadic(G__7193,seq7192__$1);
});
rummikub_cljs.core.max_by = (function rummikub_cljs$core$max_by(f,p__7197){
var vec__7201 = p__7197;
var head = cljs.core.nth.call(null,vec__7201,(0),null);
var rest = cljs.core.nthnext.call(null,vec__7201,(1));
if(cljs.core.truth_(head)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (vec__7201,head,rest){
return (function (p__7202,xd){
var vec__7203 = p__7202;
var x = cljs.core.nth.call(null,vec__7203,(0),null);
var y = cljs.core.nth.call(null,vec__7203,(1),null);
var yd = f.call(null,xd);
if(cljs.core._EQ_.call(null,(-1),cljs.core.compare.call(null,y,yd))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xd,yd], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});})(vec__7201,head,rest))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,f.call(null,head)], null),rest));
} else {
return null;
}
});
rummikub_cljs.core.value_map = (function rummikub_cljs$core$value_map(f,m){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});
