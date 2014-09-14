// Compiled by ClojureScript 0.0-2322
goog.provide('rummikub_cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
rummikub_cljs.core.apply_interpose = (function apply_interpose(i,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,i,s));
});
rummikub_cljs.core.value_filter = (function value_filter(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4285__auto__ = (function iter__5242(s__5243){return (new cljs.core.LazySeq(null,(function (){var s__5243__$1 = s__5243;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__5243__$1);if(temp__4222__auto__)
{var s__5243__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5243__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__5243__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__5245 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__5244 = (0);while(true){
if((i__5244 < size__4284__auto__))
{var vec__5248 = cljs.core._nth.call(null,c__4283__auto__,i__5244);var k = cljs.core.nth.call(null,vec__5248,(0),null);var v = cljs.core.nth.call(null,vec__5248,(1),null);if(cljs.core.truth_(f.call(null,v)))
{cljs.core.chunk_append.call(null,b__5245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__5250 = (i__5244 + (1));
i__5244 = G__5250;
continue;
}
} else
{{
var G__5251 = (i__5244 + (1));
i__5244 = G__5251;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5245),iter__5242.call(null,cljs.core.chunk_rest.call(null,s__5243__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5245),null);
}
} else
{var vec__5249 = cljs.core.first.call(null,s__5243__$2);var k = cljs.core.nth.call(null,vec__5249,(0),null);var v = cljs.core.nth.call(null,vec__5249,(1),null);if(cljs.core.truth_(f.call(null,v)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__5242.call(null,cljs.core.rest.call(null,s__5243__$2)));
} else
{{
var G__5252 = cljs.core.rest.call(null,s__5243__$2);
s__5243__$1 = G__5252;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,m);
})());
});
rummikub_cljs.core.to_num = (function to_num(v){if(cljs.core.truth_(isNaN(Number(v))))
{return v;
} else
{return Number(v);
}
});
rummikub_cljs.core.num_val = (function num_val(x){return rummikub_cljs.core.to_num.call(null,cljs.core.val.call(null,x));
});
rummikub_cljs.core.trim_val = (function trim_val(x){return cljs.core.val.call(null,x).trim();
});
rummikub_cljs.core.p = (function p(x){return cljs.core.println.call(null,cljs.core.pr_str.call(null,x));
});
/**
* @param {...*} var_args
*/
rummikub_cljs.core.page = (function() { 
var page__delegate = function (f,contents){return rummikub_cljs.core.replace_with.call(null,rummikub_cljs.core.$.call(null,"#content"),crate.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0)",new cljs.core.Keyword(null,"onclick","onclick",1297553739),f,new cljs.core.Keyword(null,"id","id",-1388402092),"root_link"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"octant_small.png"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),contents], null)));
};
var page = function (f,var_args){
var contents = null;if (arguments.length > 1) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return page__delegate.call(this,f,contents);};
page.cljs$lang$maxFixedArity = 1;
page.cljs$lang$applyTo = (function (arglist__5253){
var f = cljs.core.first(arglist__5253);
var contents = cljs.core.rest(arglist__5253);
return page__delegate(f,contents);
});
page.cljs$core$IFn$_invoke$arity$variadic = page__delegate;
return page;
})()
;
rummikub_cljs.core.page2 = (function page2(f,contents){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0)",new cljs.core.Keyword(null,"on-click","on-click",1632826543),f,new cljs.core.Keyword(null,"id","id",-1388402092),"root_link"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"octant_small.png"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contents], null)], null),cljs.core.first.call(null,rummikub_cljs.core.$.call(null,"#content")));
});
/**
* @param {...*} var_args
*/
rummikub_cljs.core.my_replace_with = (function() { 
var my_replace_with__delegate = function (id,contents){return rummikub_cljs.core.replace_with.call(null,rummikub_cljs.core.$.call(null,("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id))),cljs.core.apply.call(null,crate.html,contents));
};
var my_replace_with = function (id,var_args){
var contents = null;if (arguments.length > 1) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return my_replace_with__delegate.call(this,id,contents);};
my_replace_with.cljs$lang$maxFixedArity = 1;
my_replace_with.cljs$lang$applyTo = (function (arglist__5254){
var id = cljs.core.first(arglist__5254);
var contents = cljs.core.rest(arglist__5254);
return my_replace_with__delegate(id,contents);
});
my_replace_with.cljs$core$IFn$_invoke$arity$variadic = my_replace_with__delegate;
return my_replace_with;
})()
;
rummikub_cljs.core.str_contains_QMARK_ = (function str_contains_QMARK_(a,b){return cljs.core.not_EQ_.call(null,(-1),a.indexOf(b));
});
/**
* @param {...*} var_args
*/
rummikub_cljs.core.format = (function() { 
var format__delegate = function (s,subs){var s__$1 = s;var current = cljs.core.first.call(null,subs);var todo = cljs.core.rest.call(null,subs);while(true){
if(cljs.core.truth_((function (){var and__3548__auto__ = rummikub_cljs.core.str_contains_QMARK_.call(null,s__$1,"%s");if(and__3548__auto__)
{return current;
} else
{return and__3548__auto__;
}
})()))
{{
var G__5255 = s__$1.replace("%s",current);
var G__5256 = cljs.core.first.call(null,todo);
var G__5257 = cljs.core.rest.call(null,todo);
s__$1 = G__5255;
current = G__5256;
todo = G__5257;
continue;
}
} else
{return s__$1;
}
break;
}
};
var format = function (s,var_args){
var subs = null;if (arguments.length > 1) {
  subs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,s,subs);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__5258){
var s = cljs.core.first(arglist__5258);
var subs = cljs.core.rest(arglist__5258);
return format__delegate(s,subs);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
rummikub_cljs.core.format_int = (function format_int(s,n){return s.replace("%i",n);
});
rummikub_cljs.core.round = (function round(x,decimals){var factor = Math.pow((10),decimals);return (Math.round((x * factor)) / factor);
});
rummikub_cljs.core.update_db = (function update_db(command,payload,f){return ajax.core.POST.call(null,"/update-db",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null),new cljs.core.Keyword(null,"handler","handler",-195596612),f], null));
});
rummikub_cljs.core.eager_every_QMARK_ = (function eager_every_QMARK_(f,s){return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.doall.call(null,cljs.core.map.call(null,f,s)));
});
rummikub_cljs.core.link_to = (function link_to(url2,m,new_window_QMARK_){return document.location = rummikub_cljs.core.url.call(null,url2,m);
});
rummikub_cljs.core.link_to2 = (function link_to2(url2,m,new_window_QMARK_){if(cljs.core.truth_(new_window_QMARK_))
{return window.open(rummikub_cljs.core.url.call(null,url2,m),"_blank");
} else
{return document.location = rummikub_cljs.core.url.call(null,url2,m);
}
});
rummikub_cljs.core.replace_all = (function replace_all(a,b,c){var a__$1 = a;while(true){
if(cljs.core._EQ_.call(null,(-1),a__$1.indexOf(b)))
{return a__$1;
} else
{{
var G__5259 = a__$1.replace(b,c);
a__$1 = G__5259;
continue;
}
}
break;
}
});
rummikub_cljs.core.safe_name = (function safe_name(x){if(cljs.core.truth_(x))
{return cljs.core.name.call(null,x);
} else
{return "";
}
});
rummikub_cljs.core.url = (function url(host,m){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,host,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__5262){var vec__5263 = p__5262;var k = cljs.core.nth.call(null,vec__5263,(0),null);var v = cljs.core.nth.call(null,vec__5263,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rummikub_cljs.core.safe_name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rummikub_cljs.core.replace_all.call(null,rummikub_cljs.core.safe_name.call(null,v)," ","%20")));
}),m)))));
});
rummikub_cljs.core.clean_string = (function clean_string(s,to_remove){return cljs.core.reduce.call(null,(function (a,b){return rummikub_cljs.core.replace_all.call(null,a,b,"");
}),s,to_remove);
});
/**
* @param {...*} var_args
*/
rummikub_cljs.core.clean_id = (function() { 
var clean_id__delegate = function (args){return rummikub_cljs.core.clean_string.call(null,cljs.core.apply.call(null,cljs.core.str,args),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",",","(",")","&","'","/"], null));
};
var clean_id = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return clean_id__delegate.call(this,args);};
clean_id.cljs$lang$maxFixedArity = 0;
clean_id.cljs$lang$applyTo = (function (arglist__5264){
var args = cljs.core.seq(arglist__5264);
return clean_id__delegate(args);
});
clean_id.cljs$core$IFn$_invoke$arity$variadic = clean_id__delegate;
return clean_id;
})()
;
rummikub_cljs.core.scroll_to = (function scroll_to(h){return rummikub_cljs.core.$.call(null,"html, body").animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),(h - (100))], null)),(50));
});
rummikub_cljs.core.get_position = (function get_position(element,total_height){var h = rummikub_cljs.core.$.call(null,element).offset().top;var y = (h / total_height);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,h], null);
});
rummikub_cljs.core.position_div = (function position_div(class$,element,total_height){var vec__5266 = rummikub_cljs.core.get_position.call(null,element,total_height);var y = cljs.core.nth.call(null,vec__5266,(0),null);var h = cljs.core.nth.call(null,vec__5266,(1),null);return rummikub_cljs.core.append.call(null,rummikub_cljs.core.$.call(null,"body"),crate.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),rummikub_cljs.core.format.call(null,"position: fixed; width: 20px;\n                                              height: 3px; top: %s%; right: 0px;\n                                              ",(((100) * y) | (0))),new cljs.core.Keyword(null,"class","class",-2030961996),("override_marker "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)),new cljs.core.Keyword(null,"onclick","onclick",1297553739),rummikub_cljs.core.format.call(null,"octant_cljs.core.scroll_to(%s)",h)], null)], null)));
});
/**
* shows colored sidebars
*/
rummikub_cljs.core.show_overridden = (function() {
var show_overridden = null;
var show_overridden__0 = (function (){rummikub_cljs.core.$.call(null,".override_marker").remove();
show_overridden.call(null,"bloomberg-row");
show_overridden.call(null,"not-found");
return show_overridden.call(null,"overridden");
});
var show_overridden__1 = (function (class$){var total_height = rummikub_cljs.core.$.call(null,document).height();var seq__5271 = cljs.core.seq.call(null,rummikub_cljs.core.$.call(null,("."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$))));var chunk__5272 = null;var count__5273 = (0);var i__5274 = (0);while(true){
if((i__5274 < count__5273))
{var element = cljs.core._nth.call(null,chunk__5272,i__5274);rummikub_cljs.core.position_div.call(null,class$,element,total_height);
{
var G__5275 = seq__5271;
var G__5276 = chunk__5272;
var G__5277 = count__5273;
var G__5278 = (i__5274 + (1));
seq__5271 = G__5275;
chunk__5272 = G__5276;
count__5273 = G__5277;
i__5274 = G__5278;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__5271);if(temp__4222__auto__)
{var seq__5271__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5271__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5271__$1);{
var G__5279 = cljs.core.chunk_rest.call(null,seq__5271__$1);
var G__5280 = c__4316__auto__;
var G__5281 = cljs.core.count.call(null,c__4316__auto__);
var G__5282 = (0);
seq__5271 = G__5279;
chunk__5272 = G__5280;
count__5273 = G__5281;
i__5274 = G__5282;
continue;
}
} else
{var element = cljs.core.first.call(null,seq__5271__$1);rummikub_cljs.core.position_div.call(null,class$,element,total_height);
{
var G__5283 = cljs.core.next.call(null,seq__5271__$1);
var G__5284 = null;
var G__5285 = (0);
var G__5286 = (0);
seq__5271 = G__5283;
chunk__5272 = G__5284;
count__5273 = G__5285;
i__5274 = G__5286;
continue;
}
}
} else
{return null;
}
}
break;
}
});
show_overridden = function(class$){
switch(arguments.length){
case 0:
return show_overridden__0.call(this);
case 1:
return show_overridden__1.call(this,class$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
show_overridden.cljs$core$IFn$_invoke$arity$0 = show_overridden__0;
show_overridden.cljs$core$IFn$_invoke$arity$1 = show_overridden__1;
return show_overridden;
})()
;
rummikub_cljs.core.split_line = (function split_line(s){var lines = cljs.core.map.call(null,(function (p1__5287_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5287_SHARP_)+" ");
}),s.split(" "));var lines__$1 = cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.partition_all.call(null,(4),lines));return lines__$1;
});
rummikub_cljs.core.pprint_number = (function pprint_number(x){var y = Math.abs(x);var left = cljs.core.long$.call(null,y);var right = frac(y);var rightd = cljs.core.second.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)).split("."));var left__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.flatten.call(null,cljs.core.interpose.call(null,",",cljs.core.partition_all.call(null,(3),cljs.core.reverse.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left))))))));var num = (((right === (0)))?left__$1:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left__$1)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rightd)));if((x < (0)))
{return ("-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
}
});
rummikub_cljs.core.pprint_num = (function pprint_num(x){if(typeof x === 'string')
{return Number(rummikub_cljs.core.replace_all.call(null,x,",",""));
} else
{return x;
}
});
rummikub_cljs.core.pprint_nums2 = (function pprint_nums2(x){if(typeof x === 'string')
{return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,rummikub_cljs.core.pprint_num,x.trim().split(" ")));
} else
{return x;
}
});
rummikub_cljs.core.pprint_nums = (function pprint_nums(x){return rummikub_cljs.core.apply_interpose.call(null," ",cljs.core.map.call(null,(function (p1__5288_SHARP_){return rummikub_cljs.core.pprint_number.call(null,rummikub_cljs.core.pprint_num.call(null,p1__5288_SHARP_));
}),x.trim().split(" ")));
});
rummikub_cljs.core.sanitize_map = (function sanitize_map(m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,m)),cljs.core.map.call(null,sanitize_map,cljs.core.vals.call(null,m)));
} else
{if(cljs.core.coll_QMARK_.call(null,m))
{return cljs.core.map.call(null,sanitize_map,m);
} else
{return m;

}
}
});
rummikub_cljs.core.clean_set_BANG_ = (function clean_set_BANG_(atom,val){return cljs.core.reset_BANG_.call(null,atom,rummikub_cljs.core.sanitize_map.call(null,val));
});
rummikub_cljs.core.validate = (function validate(){if(rummikub_cljs.core.eager_every_QMARK_.call(null,(function (input){if(cljs.core.truth_(isNaN(Number(input.value))))
{rummikub_cljs.core.add_class.call(null,rummikub_cljs.core.$.call(null,input),"warning");
return false;
} else
{rummikub_cljs.core.remove_class.call(null,rummikub_cljs.core.$.call(null,input),"warning");
return true;
}
}),rummikub_cljs.core.$.call(null,".numeric-input")))
{return true;
} else
{alert("Invalid Input");
return false;
}
});
rummikub_cljs.core.apply_interpose = (function apply_interpose(i,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,i,s));
});
rummikub_cljs.core.transfer_alias = (function transfer_alias(to_transfer,from,to){var seq__5293 = cljs.core.seq.call(null,to_transfer);var chunk__5294 = null;var count__5295 = (0);var i__5296 = (0);while(true){
if((i__5296 < count__5295))
{var atom = cljs.core._nth.call(null,chunk__5294,i__5296);eval(rummikub_cljs.core.format.call(null,"%s.%s = %s.%s",to,atom,from,atom));
{
var G__5297 = seq__5293;
var G__5298 = chunk__5294;
var G__5299 = count__5295;
var G__5300 = (i__5296 + (1));
seq__5293 = G__5297;
chunk__5294 = G__5298;
count__5295 = G__5299;
i__5296 = G__5300;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__5293);if(temp__4222__auto__)
{var seq__5293__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5293__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5293__$1);{
var G__5301 = cljs.core.chunk_rest.call(null,seq__5293__$1);
var G__5302 = c__4316__auto__;
var G__5303 = cljs.core.count.call(null,c__4316__auto__);
var G__5304 = (0);
seq__5293 = G__5301;
chunk__5294 = G__5302;
count__5295 = G__5303;
i__5296 = G__5304;
continue;
}
} else
{var atom = cljs.core.first.call(null,seq__5293__$1);eval(rummikub_cljs.core.format.call(null,"%s.%s = %s.%s",to,atom,from,atom));
{
var G__5305 = cljs.core.next.call(null,seq__5293__$1);
var G__5306 = null;
var G__5307 = (0);
var G__5308 = (0);
seq__5293 = G__5305;
chunk__5294 = G__5306;
count__5295 = G__5307;
i__5296 = G__5308;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
rummikub_cljs.core.interleave_all = (function() { 
var interleave_all__delegate = function (seqs){var m = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,seqs));var safe_nth = ((function (m){
return (function (coll,i){if((i < cljs.core.count.call(null,coll)))
{return cljs.core.nth.call(null,coll,i);
} else
{return null;
}
});})(m))
;return cljs.core.filter.call(null,cljs.core.identity,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4285__auto__ = ((function (m,safe_nth){
return (function iter__5314(s__5315){return (new cljs.core.LazySeq(null,((function (m,safe_nth){
return (function (){var s__5315__$1 = s__5315;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__5315__$1);if(temp__4222__auto__)
{var s__5315__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5315__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__5315__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__5317 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__5316 = (0);while(true){
if((i__5316 < size__4284__auto__))
{var i = cljs.core._nth.call(null,c__4283__auto__,i__5316);cljs.core.chunk_append.call(null,b__5317,cljs.core.map.call(null,((function (i__5316,i,c__4283__auto__,size__4284__auto__,b__5317,s__5315__$2,temp__4222__auto__,m,safe_nth){
return (function (p1__5309_SHARP_){return safe_nth.call(null,p1__5309_SHARP_,i);
});})(i__5316,i,c__4283__auto__,size__4284__auto__,b__5317,s__5315__$2,temp__4222__auto__,m,safe_nth))
,seqs));
{
var G__5318 = (i__5316 + (1));
i__5316 = G__5318;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5317),iter__5314.call(null,cljs.core.chunk_rest.call(null,s__5315__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5317),null);
}
} else
{var i = cljs.core.first.call(null,s__5315__$2);return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__5315__$2,temp__4222__auto__,m,safe_nth){
return (function (p1__5309_SHARP_){return safe_nth.call(null,p1__5309_SHARP_,i);
});})(i,s__5315__$2,temp__4222__auto__,m,safe_nth))
,seqs),iter__5314.call(null,cljs.core.rest.call(null,s__5315__$2)));
}
} else
{return null;
}
break;
}
});})(m,safe_nth))
,null,null));
});})(m,safe_nth))
;return iter__4285__auto__.call(null,cljs.core.range.call(null,m));
})()));
};
var interleave_all = function (var_args){
var seqs = null;if (arguments.length > 0) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,seqs);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__5319){
var seqs = cljs.core.seq(arglist__5319);
return interleave_all__delegate(seqs);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
rummikub_cljs.core.take_all = (function take_all(n,coll){return cljs.core.take.call(null,n,cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,null)));
});
/**
* @param {...*} var_args
*/
rummikub_cljs.core.map_all = (function() { 
var map_all__delegate = function (f,seqs){var m = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,seqs));var seqs__$1 = cljs.core.map.call(null,((function (m){
return (function (p1__5320_SHARP_){return rummikub_cljs.core.take_all.call(null,m,p1__5320_SHARP_);
});})(m))
,seqs);return cljs.core.apply.call(null,cljs.core.map,f,seqs__$1);
};
var map_all = function (f,var_args){
var seqs = null;if (arguments.length > 1) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_all__delegate.call(this,f,seqs);};
map_all.cljs$lang$maxFixedArity = 1;
map_all.cljs$lang$applyTo = (function (arglist__5321){
var f = cljs.core.first(arglist__5321);
var seqs = cljs.core.rest(arglist__5321);
return map_all__delegate(f,seqs);
});
map_all.cljs$core$IFn$_invoke$arity$variadic = map_all__delegate;
return map_all;
})()
;
/**
* @param {...*} var_args
*/
rummikub_cljs.core.map_indexed_all = (function() { 
var map_indexed_all__delegate = function (f,seqs){var m = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,seqs));var seqs__$1 = cljs.core.map.call(null,((function (m){
return (function (p1__5322_SHARP_){return rummikub_cljs.core.take_all.call(null,m,p1__5322_SHARP_);
});})(m))
,seqs);return cljs.core.apply.call(null,cljs.core.map,f,cljs.core.range.call(null),seqs__$1);
};
var map_indexed_all = function (f,var_args){
var seqs = null;if (arguments.length > 1) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_indexed_all__delegate.call(this,f,seqs);};
map_indexed_all.cljs$lang$maxFixedArity = 1;
map_indexed_all.cljs$lang$applyTo = (function (arglist__5323){
var f = cljs.core.first(arglist__5323);
var seqs = cljs.core.rest(arglist__5323);
return map_indexed_all__delegate(f,seqs);
});
map_indexed_all.cljs$core$IFn$_invoke$arity$variadic = map_indexed_all__delegate;
return map_indexed_all;
})()
;
/**
* @param {...*} var_args
*/
rummikub_cljs.core.apply_r = (function() { 
var apply_r__delegate = function (m,args){return rummikub_cljs.core.format.call(null,"%s('%s')",m,cljs.core.pr_str.call(null,cljs.core.vec.call(null,args)));
};
var apply_r = function (m,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return apply_r__delegate.call(this,m,args);};
apply_r.cljs$lang$maxFixedArity = 1;
apply_r.cljs$lang$applyTo = (function (arglist__5324){
var m = cljs.core.first(arglist__5324);
var args = cljs.core.rest(arglist__5324);
return apply_r__delegate(m,args);
});
apply_r.cljs$core$IFn$_invoke$arity$variadic = apply_r__delegate;
return apply_r;
})()
;
rummikub_cljs.core.max_by = (function max_by(f,p__5325){var vec__5329 = p__5325;var head = cljs.core.nth.call(null,vec__5329,(0),null);var rest = cljs.core.nthnext.call(null,vec__5329,(1));if(cljs.core.truth_(head))
{return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (vec__5329,head,rest){
return (function (p__5330,xd){var vec__5331 = p__5330;var x = cljs.core.nth.call(null,vec__5331,(0),null);var y = cljs.core.nth.call(null,vec__5331,(1),null);var yd = f.call(null,xd);if(cljs.core._EQ_.call(null,(-1),cljs.core.compare.call(null,y,yd)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xd,yd], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});})(vec__5329,head,rest))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,f.call(null,head)], null),rest));
} else
{return null;
}
});
rummikub_cljs.core.value_map = (function value_map(f,m){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});
