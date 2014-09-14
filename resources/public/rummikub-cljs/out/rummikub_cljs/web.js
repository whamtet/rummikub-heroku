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
rummikub_cljs.web.p = (function p(p1__17521_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__17521_SHARP_));
});
var map__17522_17523 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__17522_17524__$1 = ((cljs.core.seq_QMARK_.call(null,map__17522_17523))?cljs.core.apply.call(null,cljs.core.hash_map,map__17522_17523):map__17522_17523);var state_17525 = cljs.core.get.call(null,map__17522_17524__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_17526 = cljs.core.get.call(null,map__17522_17524__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_17527 = cljs.core.get.call(null,map__17522_17524__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_17528 = cljs.core.get.call(null,map__17522_17524__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_17528;
rummikub_cljs.web.ch_chsk = ch_recv_17527;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_17526;
rummikub_cljs.web.chsk_state = state_17525;
var c__8138__auto___17607 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8138__auto___17607){
return (function (){var f__8139__auto__ = (function (){var switch__8123__auto__ = ((function (c__8138__auto___17607){
return (function (state_17576){var state_val_17577 = (state_17576[(1)]);if((state_val_17577 === (7)))
{var inst_17534 = (state_17576[(7)]);var inst_17534__$1 = (state_17576[(2)]);var inst_17535 = cljs.core.seq_QMARK_.call(null,inst_17534__$1);var state_17576__$1 = (function (){var statearr_17578 = state_17576;(statearr_17578[(7)] = inst_17534__$1);
return statearr_17578;
})();if(inst_17535)
{var statearr_17579_17608 = state_17576__$1;(statearr_17579_17608[(1)] = (8));
} else
{var statearr_17580_17609 = state_17576__$1;(statearr_17580_17609[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (1)))
{var state_17576__$1 = state_17576;var statearr_17581_17610 = state_17576__$1;(statearr_17581_17610[(2)] = null);
(statearr_17581_17610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (4)))
{var state_17576__$1 = state_17576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17576__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_17577 === (15)))
{var inst_17543 = (state_17576[(8)]);var inst_17562 = cljs.core.println.call(null,inst_17543);var state_17576__$1 = state_17576;var statearr_17582_17611 = state_17576__$1;(statearr_17582_17611[(2)] = inst_17562);
(statearr_17582_17611[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (13)))
{var inst_17568 = (state_17576[(2)]);var state_17576__$1 = (function (){var statearr_17583 = state_17576;(statearr_17583[(9)] = inst_17568);
return statearr_17583;
})();var statearr_17584_17612 = state_17576__$1;(statearr_17584_17612[(2)] = null);
(statearr_17584_17612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (6)))
{var inst_17572 = (state_17576[(2)]);var state_17576__$1 = state_17576;var statearr_17585_17613 = state_17576__$1;(statearr_17585_17613[(2)] = inst_17572);
(statearr_17585_17613[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (3)))
{var inst_17574 = (state_17576[(2)]);var state_17576__$1 = state_17576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17576__$1,inst_17574);
} else
{if((state_val_17577 === (12)))
{var inst_17543 = (state_17576[(8)]);var inst_17566 = cljs.core.println.call(null,inst_17543);var state_17576__$1 = state_17576;var statearr_17586_17614 = state_17576__$1;(statearr_17586_17614[(2)] = inst_17566);
(statearr_17586_17614[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (2)))
{var state_17576__$1 = state_17576;var statearr_17587_17615 = state_17576__$1;(statearr_17587_17615[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (11)))
{var inst_17546 = (state_17576[(10)]);var inst_17553 = cljs.core.nth.call(null,inst_17546,(0),null);var inst_17554 = cljs.core.nth.call(null,inst_17546,(1),null);var inst_17558 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_17553);var state_17576__$1 = (function (){var statearr_17589 = state_17576;(statearr_17589[(11)] = inst_17554);
return statearr_17589;
})();if(inst_17558)
{var statearr_17590_17616 = state_17576__$1;(statearr_17590_17616[(1)] = (14));
} else
{var statearr_17591_17617 = state_17576__$1;(statearr_17591_17617[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (9)))
{var inst_17534 = (state_17576[(7)]);var state_17576__$1 = state_17576;var statearr_17592_17618 = state_17576__$1;(statearr_17592_17618[(2)] = inst_17534);
(statearr_17592_17618[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (5)))
{var state_17576__$1 = state_17576;var statearr_17593_17619 = state_17576__$1;(statearr_17593_17619[(2)] = null);
(statearr_17593_17619[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (14)))
{var inst_17554 = (state_17576[(11)]);var inst_17560 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_17554);var state_17576__$1 = state_17576;var statearr_17594_17620 = state_17576__$1;(statearr_17594_17620[(2)] = inst_17560);
(statearr_17594_17620[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (16)))
{var inst_17564 = (state_17576[(2)]);var state_17576__$1 = state_17576;var statearr_17595_17621 = state_17576__$1;(statearr_17595_17621[(2)] = inst_17564);
(statearr_17595_17621[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (10)))
{var inst_17543 = (state_17576[(8)]);var inst_17540 = (state_17576[(2)]);var inst_17541 = cljs.core.get.call(null,inst_17540,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_17542 = cljs.core.get.call(null,inst_17540,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_17543__$1 = cljs.core.get.call(null,inst_17540,new cljs.core.Keyword(null,"event","event",301435442));var inst_17544 = cljs.core.get.call(null,inst_17540,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_17545 = cljs.core.nth.call(null,inst_17543__$1,(0),null);var inst_17546 = cljs.core.nth.call(null,inst_17543__$1,(1),null);var inst_17550 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_17545);var state_17576__$1 = (function (){var statearr_17596 = state_17576;(statearr_17596[(12)] = inst_17542);
(statearr_17596[(8)] = inst_17543__$1);
(statearr_17596[(10)] = inst_17546);
(statearr_17596[(13)] = inst_17544);
(statearr_17596[(14)] = inst_17541);
return statearr_17596;
})();if(inst_17550)
{var statearr_17597_17622 = state_17576__$1;(statearr_17597_17622[(1)] = (11));
} else
{var statearr_17598_17623 = state_17576__$1;(statearr_17598_17623[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17577 === (8)))
{var inst_17534 = (state_17576[(7)]);var inst_17537 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17534);var state_17576__$1 = state_17576;var statearr_17599_17624 = state_17576__$1;(statearr_17599_17624[(2)] = inst_17537);
(statearr_17599_17624[(1)] = (10));
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
});})(c__8138__auto___17607))
;return ((function (switch__8123__auto__,c__8138__auto___17607){
return (function() {
var state_machine__8124__auto__ = null;
var state_machine__8124__auto____0 = (function (){var statearr_17603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17603[(0)] = state_machine__8124__auto__);
(statearr_17603[(1)] = (1));
return statearr_17603;
});
var state_machine__8124__auto____1 = (function (state_17576){while(true){
var ret_value__8125__auto__ = (function (){try{while(true){
var result__8126__auto__ = switch__8123__auto__.call(null,state_17576);if(cljs.core.keyword_identical_QMARK_.call(null,result__8126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8126__auto__;
}
break;
}
}catch (e17604){if((e17604 instanceof Object))
{var ex__8127__auto__ = e17604;var statearr_17605_17625 = state_17576;(statearr_17605_17625[(5)] = ex__8127__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17604;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17626 = state_17576;
state_17576 = G__17626;
continue;
}
} else
{return ret_value__8125__auto__;
}
break;
}
});
state_machine__8124__auto__ = function(state_17576){
switch(arguments.length){
case 0:
return state_machine__8124__auto____0.call(this);
case 1:
return state_machine__8124__auto____1.call(this,state_17576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8124__auto____0;
state_machine__8124__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8124__auto____1;
return state_machine__8124__auto__;
})()
;})(switch__8123__auto__,c__8138__auto___17607))
})();var state__8140__auto__ = (function (){var statearr_17606 = f__8139__auto__.call(null);(statearr_17606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8138__auto___17607);
return statearr_17606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8140__auto__);
});})(c__8138__auto___17607))
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
rummikub_cljs.web.color_str = (function color_str(p__17627){var vec__17629 = p__17627;var r = cljs.core.nth.call(null,vec__17629,(0),null);var g = cljs.core.nth.call(null,vec__17629,(1),null);var b = cljs.core.nth.call(null,vec__17629,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function type_chat(event){var val = event.target.value;return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function new_chat(){var val = document.getElementById("new-chat").value;var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");
return false;
});
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5%",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),cljs.core.map_indexed.call(null,(function (i,p__17633){var map__17634 = p__17633;var map__17634__$1 = ((cljs.core.seq_QMARK_.call(null,map__17634))?cljs.core.apply.call(null,cljs.core.hash_map,map__17634):map__17634);var content = cljs.core.get.call(null,map__17634__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__17634__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__17634__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"15%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17630_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__17630_SHARP_.target.value);
})], null)], null)], null)], null)], null);
});
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
