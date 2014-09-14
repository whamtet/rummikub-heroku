// Compiled by ClojureScript 0.0-2322
goog.provide('rummikub_cljs.web');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('taoensso.sente');
goog.require('rummikub_cljs.core');
goog.require('rummikub_cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('cljs.reader');
rummikub_cljs.web.p = (function p(p1__20141_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__20141_SHARP_));
});
var map__20142_20143 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__20142_20144__$1 = ((cljs.core.seq_QMARK_.call(null,map__20142_20143))?cljs.core.apply.call(null,cljs.core.hash_map,map__20142_20143):map__20142_20143);var state_20145 = cljs.core.get.call(null,map__20142_20144__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_20146 = cljs.core.get.call(null,map__20142_20144__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_20147 = cljs.core.get.call(null,map__20142_20144__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_20148 = cljs.core.get.call(null,map__20142_20144__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_20148;
rummikub_cljs.web.ch_chsk = ch_recv_20147;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_20146;
rummikub_cljs.web.chsk_state = state_20145;
var c__8138__auto___20227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___20227){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___20227){
return (function (state_20196){var state_val_20197 = (state_20196[(1)]);if((state_val_20197 === (7)))
{var inst_20154 = (state_20196[(7)]);var inst_20154__$1 = (state_20196[(2)]);var inst_20155 = cljs.core.seq_QMARK_.call(null,inst_20154__$1);var state_20196__$1 = (function (){var statearr_20198 = state_20196;(statearr_20198[(7)] = inst_20154__$1);
return statearr_20198;
})();if(inst_20155)
{var statearr_20199_20228 = state_20196__$1;(statearr_20199_20228[(1)] = (8));
} else
{var statearr_20200_20229 = state_20196__$1;(statearr_20200_20229[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (1)))
{var state_20196__$1 = state_20196;var statearr_20201_20230 = state_20196__$1;(statearr_20201_20230[(2)] = null);
(statearr_20201_20230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (4)))
{var state_20196__$1 = state_20196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20196__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_20197 === (15)))
{var inst_20163 = (state_20196[(8)]);var inst_20182 = cljs.core.println.call(null,inst_20163);var state_20196__$1 = state_20196;var statearr_20202_20231 = state_20196__$1;(statearr_20202_20231[(2)] = inst_20182);
(statearr_20202_20231[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (13)))
{var inst_20188 = (state_20196[(2)]);var state_20196__$1 = (function (){var statearr_20203 = state_20196;(statearr_20203[(9)] = inst_20188);
return statearr_20203;
})();var statearr_20204_20232 = state_20196__$1;(statearr_20204_20232[(2)] = null);
(statearr_20204_20232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (6)))
{var inst_20192 = (state_20196[(2)]);var state_20196__$1 = state_20196;var statearr_20205_20233 = state_20196__$1;(statearr_20205_20233[(2)] = inst_20192);
(statearr_20205_20233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (3)))
{var inst_20194 = (state_20196[(2)]);var state_20196__$1 = state_20196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20196__$1,inst_20194);
} else
{if((state_val_20197 === (12)))
{var inst_20163 = (state_20196[(8)]);var inst_20186 = cljs.core.println.call(null,inst_20163);var state_20196__$1 = state_20196;var statearr_20206_20234 = state_20196__$1;(statearr_20206_20234[(2)] = inst_20186);
(statearr_20206_20234[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (2)))
{var state_20196__$1 = state_20196;var statearr_20207_20235 = state_20196__$1;(statearr_20207_20235[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (11)))
{var inst_20166 = (state_20196[(10)]);var inst_20173 = cljs.core.nth.call(null,inst_20166,(0),null);var inst_20174 = cljs.core.nth.call(null,inst_20166,(1),null);var inst_20178 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_20173);var state_20196__$1 = (function (){var statearr_20209 = state_20196;(statearr_20209[(11)] = inst_20174);
return statearr_20209;
})();if(inst_20178)
{var statearr_20210_20236 = state_20196__$1;(statearr_20210_20236[(1)] = (14));
} else
{var statearr_20211_20237 = state_20196__$1;(statearr_20211_20237[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (9)))
{var inst_20154 = (state_20196[(7)]);var state_20196__$1 = state_20196;var statearr_20212_20238 = state_20196__$1;(statearr_20212_20238[(2)] = inst_20154);
(statearr_20212_20238[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (5)))
{var state_20196__$1 = state_20196;var statearr_20213_20239 = state_20196__$1;(statearr_20213_20239[(2)] = null);
(statearr_20213_20239[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (14)))
{var inst_20174 = (state_20196[(11)]);var inst_20180 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_20174);var state_20196__$1 = state_20196;var statearr_20214_20240 = state_20196__$1;(statearr_20214_20240[(2)] = inst_20180);
(statearr_20214_20240[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (16)))
{var inst_20184 = (state_20196[(2)]);var state_20196__$1 = state_20196;var statearr_20215_20241 = state_20196__$1;(statearr_20215_20241[(2)] = inst_20184);
(statearr_20215_20241[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (10)))
{var inst_20163 = (state_20196[(8)]);var inst_20160 = (state_20196[(2)]);var inst_20161 = cljs.core.get.call(null,inst_20160,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_20162 = cljs.core.get.call(null,inst_20160,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_20163__$1 = cljs.core.get.call(null,inst_20160,new cljs.core.Keyword(null,"event","event",301435442));var inst_20164 = cljs.core.get.call(null,inst_20160,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_20165 = cljs.core.nth.call(null,inst_20163__$1,(0),null);var inst_20166 = cljs.core.nth.call(null,inst_20163__$1,(1),null);var inst_20170 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_20165);var state_20196__$1 = (function (){var statearr_20216 = state_20196;(statearr_20216[(12)] = inst_20162);
(statearr_20216[(13)] = inst_20164);
(statearr_20216[(8)] = inst_20163__$1);
(statearr_20216[(14)] = inst_20161);
(statearr_20216[(10)] = inst_20166);
return statearr_20216;
})();if(inst_20170)
{var statearr_20217_20242 = state_20196__$1;(statearr_20217_20242[(1)] = (11));
} else
{var statearr_20218_20243 = state_20196__$1;(statearr_20218_20243[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20197 === (8)))
{var inst_20154 = (state_20196[(7)]);var inst_20157 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20154);var state_20196__$1 = state_20196;var statearr_20219_20244 = state_20196__$1;(statearr_20219_20244[(2)] = inst_20157);
(statearr_20219_20244[(1)] = (10));
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
});})(c__8138__auto___20227))
;return ((function (switch__8123__auto__,c__8138__auto___20227){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_20223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20223[(0)] = state_machine__8124__auto__);
(statearr_20223[(1)] = (1));
return statearr_20223;
});
var state_machine__8124__auto____1 = (function (state_20196){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_20196);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e20224){if((e20224 instanceof Object))
{var ex__8127__auto__ = e20224;var statearr_20225_20245 = state_20196;(statearr_20225_20245[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20224;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20246 = state_20196;
state_20196 = G__20246;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_20196){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_20196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___20227))
})();var state__8140__auto__ = (function (){var statearr_20226 = f__8139__auto__.call(null);(statearr_20226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___20227);
return statearr_20226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___20227))
);
rummikub_cljs.web.random_color = (function random_color(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(200)),cljs.core.rand_int.call(null,(200)),cljs.core.rand_int.call(null,(200))], null);
});
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.random_color.call(null)], null);return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,user__$1);
return rummikub_cljs.web.render.call(null);
});})(user__$1,user,temp__4220__auto__))
], null));
} else
{return null;
}
});
rummikub_cljs.web.color_str = (function color_str(p__20247){var vec__20249 = p__20247;var r = cljs.core.nth.call(null,vec__20249,(0),null);var g = cljs.core.nth.call(null,vec__20249,(1),null);var b = cljs.core.nth.call(null,vec__20249,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function type_chat(event){var val = event.target.value;return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function new_chat(){var val = document.getElementById("new-chat").value;var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");
return false;
});
rummikub_cljs.web.scroll_box = (function scroll_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%",new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),(1000000)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__20252){var map__20253 = p__20252;var map__20253__$1 = ((cljs.core.seq_QMARK_.call(null,map__20253))?cljs.core.apply.call(null,cljs.core.hash_map,map__20253):map__20253);var content = cljs.core.get.call(null,map__20253__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__20253__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__20253__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
});
rummikub_cljs.web.scroll_to_bottom = (function scroll_to_bottom(this$){var node = this$.getDOMNode();return node.scrollTop = node.scrollHeight;
});
rummikub_cljs.web.scroll_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.scroll_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5%",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20254_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__20254_SHARP_.target.value);
})], null)], null)], null)], null)], null);
});
rummikub_cljs.web.chat_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.chat_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){return cljs.core.println.call(null,"done");
})], null));
rummikub_cljs.web.render = (function render(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null),document.getElementById("content"));
});
rummikub_cljs.web.main = (function main(){if(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)))
{return rummikub_cljs.web.render.call(null);
} else
{return rummikub_cljs.web.get_user.call(null);
}
});
rummikub_cljs.web.t = (function t(){return rummikub_cljs.web.p.call(null,cljs.core.deref.call(null,rummikub_cljs.web.chat_atom));
});
