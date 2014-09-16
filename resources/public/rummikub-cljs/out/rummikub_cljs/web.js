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
rummikub_cljs.web.p = (function p(p1__10489_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__10489_SHARP_));
});
var map__10490_10491 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__10490_10492__$1 = ((cljs.core.seq_QMARK_.call(null,map__10490_10491))?cljs.core.apply.call(null,cljs.core.hash_map,map__10490_10491):map__10490_10491);var state_10493 = cljs.core.get.call(null,map__10490_10492__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_10494 = cljs.core.get.call(null,map__10490_10492__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_10495 = cljs.core.get.call(null,map__10490_10492__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_10496 = cljs.core.get.call(null,map__10490_10492__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_10496;
rummikub_cljs.web.ch_chsk = ch_recv_10495;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_10494;
rummikub_cljs.web.chsk_state = state_10493;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6554__auto___10642 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6554__auto___10642){
return (function (){var f__6555__auto__ = (function (){var switch__6539__auto__ = ((function (c__6554__auto___10642){
return (function (state_10588){var state_val_10589 = (state_10588[(1)]);if((state_val_10589 === (7)))
{var inst_10502 = (state_10588[(7)]);var inst_10502__$1 = (state_10588[(2)]);var inst_10503 = cljs.core.seq_QMARK_.call(null,inst_10502__$1);var state_10588__$1 = (function (){var statearr_10590 = state_10588;(statearr_10590[(7)] = inst_10502__$1);
return statearr_10590;
})();if(inst_10503)
{var statearr_10591_10643 = state_10588__$1;(statearr_10591_10643[(1)] = (8));
} else
{var statearr_10592_10644 = state_10588__$1;(statearr_10592_10644[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (20)))
{var inst_10522 = (state_10588[(8)]);var inst_10538 = cljs.core.nth.call(null,inst_10522,(0),null);var inst_10539 = cljs.core.nth.call(null,inst_10522,(1),null);var inst_10540 = cljs.core.nth.call(null,inst_10522,(2),null);var inst_10541 = cljs.core.nth.call(null,inst_10522,(3),null);var inst_10542 = cljs.core.first.call(null,inst_10540);var inst_10543 = cljs.core.last.call(null,inst_10540);var inst_10544 = cljs.core.drop_last.call(null,(1),inst_10540);var inst_10545 = cljs.core.drop.call(null,(1),inst_10544);var inst_10546 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_10547 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_10546);var inst_10548 = cljs.core.not_EQ_.call(null,inst_10541,inst_10547);var inst_10549 = cljs.core._EQ_.call(null,"table",inst_10542,inst_10543);var inst_10550 = (inst_10548) && (inst_10549);var state_10588__$1 = (function (){var statearr_10593 = state_10588;(statearr_10593[(9)] = inst_10538);
(statearr_10593[(10)] = inst_10545);
(statearr_10593[(11)] = inst_10539);
return statearr_10593;
})();if(cljs.core.truth_(inst_10550))
{var statearr_10594_10645 = state_10588__$1;(statearr_10594_10645[(1)] = (23));
} else
{var statearr_10595_10646 = state_10588__$1;(statearr_10595_10646[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (27)))
{var inst_10521 = (state_10588[(12)]);var inst_10562 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_10521);var state_10588__$1 = state_10588;if(inst_10562)
{var statearr_10596_10647 = state_10588__$1;(statearr_10596_10647[(1)] = (29));
} else
{var statearr_10597_10648 = state_10588__$1;(statearr_10597_10648[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (1)))
{var state_10588__$1 = state_10588;var statearr_10598_10649 = state_10588__$1;(statearr_10598_10649[(2)] = null);
(statearr_10598_10649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (24)))
{var state_10588__$1 = state_10588;var statearr_10599_10650 = state_10588__$1;(statearr_10599_10650[(2)] = null);
(statearr_10599_10650[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (4)))
{var state_10588__$1 = state_10588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10588__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_10589 === (15)))
{var inst_10521 = (state_10588[(12)]);var inst_10531 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_10521);var state_10588__$1 = state_10588;if(inst_10531)
{var statearr_10600_10651 = state_10588__$1;(statearr_10600_10651[(1)] = (17));
} else
{var statearr_10601_10652 = state_10588__$1;(statearr_10601_10652[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (21)))
{var inst_10521 = (state_10588[(12)]);var inst_10558 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_10521);var state_10588__$1 = state_10588;if(inst_10558)
{var statearr_10602_10653 = state_10588__$1;(statearr_10602_10653[(1)] = (26));
} else
{var statearr_10603_10654 = state_10588__$1;(statearr_10603_10654[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (31)))
{var inst_10568 = (state_10588[(2)]);var state_10588__$1 = state_10588;var statearr_10604_10655 = state_10588__$1;(statearr_10604_10655[(2)] = inst_10568);
(statearr_10604_10655[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (13)))
{var inst_10580 = (state_10588[(2)]);var state_10588__$1 = (function (){var statearr_10605 = state_10588;(statearr_10605[(13)] = inst_10580);
return statearr_10605;
})();var statearr_10606_10656 = state_10588__$1;(statearr_10606_10656[(2)] = null);
(statearr_10606_10656[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (22)))
{var inst_10572 = (state_10588[(2)]);var state_10588__$1 = state_10588;var statearr_10607_10657 = state_10588__$1;(statearr_10607_10657[(2)] = inst_10572);
(statearr_10607_10657[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (29)))
{var inst_10522 = (state_10588[(8)]);var inst_10564 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_10522);var state_10588__$1 = state_10588;var statearr_10608_10658 = state_10588__$1;(statearr_10608_10658[(2)] = inst_10564);
(statearr_10608_10658[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (6)))
{var inst_10584 = (state_10588[(2)]);var state_10588__$1 = state_10588;var statearr_10609_10659 = state_10588__$1;(statearr_10609_10659[(2)] = inst_10584);
(statearr_10609_10659[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (28)))
{var inst_10570 = (state_10588[(2)]);var state_10588__$1 = state_10588;var statearr_10610_10660 = state_10588__$1;(statearr_10610_10660[(2)] = inst_10570);
(statearr_10610_10660[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (25)))
{var inst_10538 = (state_10588[(9)]);var inst_10555 = (state_10588[(2)]);var inst_10556 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_10538);var state_10588__$1 = (function (){var statearr_10611 = state_10588;(statearr_10611[(14)] = inst_10555);
return statearr_10611;
})();var statearr_10612_10661 = state_10588__$1;(statearr_10612_10661[(2)] = inst_10556);
(statearr_10612_10661[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (17)))
{var inst_10522 = (state_10588[(8)]);var inst_10533 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_10522);var state_10588__$1 = state_10588;var statearr_10613_10662 = state_10588__$1;(statearr_10613_10662[(2)] = inst_10533);
(statearr_10613_10662[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (3)))
{var inst_10586 = (state_10588[(2)]);var state_10588__$1 = state_10588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10588__$1,inst_10586);
} else
{if((state_val_10589 === (12)))
{var inst_10511 = (state_10588[(15)]);var inst_10578 = cljs.core.println.call(null,inst_10511);var state_10588__$1 = state_10588;var statearr_10614_10663 = state_10588__$1;(statearr_10614_10663[(2)] = inst_10578);
(statearr_10614_10663[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (2)))
{var state_10588__$1 = state_10588;var statearr_10615_10664 = state_10588__$1;(statearr_10615_10664[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (23)))
{var inst_10545 = (state_10588[(10)]);var inst_10539 = (state_10588[(11)]);var inst_10552 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_10539,inst_10545);var state_10588__$1 = state_10588;var statearr_10617_10665 = state_10588__$1;(statearr_10617_10665[(2)] = inst_10552);
(statearr_10617_10665[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (19)))
{var inst_10574 = (state_10588[(2)]);var state_10588__$1 = state_10588;var statearr_10618_10666 = state_10588__$1;(statearr_10618_10666[(2)] = inst_10574);
(statearr_10618_10666[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (11)))
{var inst_10521 = (state_10588[(12)]);var inst_10514 = (state_10588[(16)]);var inst_10521__$1 = cljs.core.nth.call(null,inst_10514,(0),null);var inst_10522 = cljs.core.nth.call(null,inst_10514,(1),null);var inst_10526 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_10521__$1);var state_10588__$1 = (function (){var statearr_10619 = state_10588;(statearr_10619[(12)] = inst_10521__$1);
(statearr_10619[(8)] = inst_10522);
return statearr_10619;
})();if(inst_10526)
{var statearr_10620_10667 = state_10588__$1;(statearr_10620_10667[(1)] = (14));
} else
{var statearr_10621_10668 = state_10588__$1;(statearr_10621_10668[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (9)))
{var inst_10502 = (state_10588[(7)]);var state_10588__$1 = state_10588;var statearr_10622_10669 = state_10588__$1;(statearr_10622_10669[(2)] = inst_10502);
(statearr_10622_10669[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (5)))
{var state_10588__$1 = state_10588;var statearr_10623_10670 = state_10588__$1;(statearr_10623_10670[(2)] = null);
(statearr_10623_10670[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (14)))
{var inst_10522 = (state_10588[(8)]);var inst_10528 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_10522);var inst_10529 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_10588__$1 = (function (){var statearr_10624 = state_10588;(statearr_10624[(17)] = inst_10528);
return statearr_10624;
})();var statearr_10625_10671 = state_10588__$1;(statearr_10625_10671[(2)] = inst_10529);
(statearr_10625_10671[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (26)))
{var inst_10522 = (state_10588[(8)]);var inst_10560 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_10522);var state_10588__$1 = state_10588;var statearr_10626_10672 = state_10588__$1;(statearr_10626_10672[(2)] = inst_10560);
(statearr_10626_10672[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (16)))
{var inst_10576 = (state_10588[(2)]);var state_10588__$1 = state_10588;var statearr_10627_10673 = state_10588__$1;(statearr_10627_10673[(2)] = inst_10576);
(statearr_10627_10673[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (30)))
{var inst_10511 = (state_10588[(15)]);var inst_10566 = cljs.core.println.call(null,inst_10511);var state_10588__$1 = state_10588;var statearr_10628_10674 = state_10588__$1;(statearr_10628_10674[(2)] = inst_10566);
(statearr_10628_10674[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (10)))
{var inst_10511 = (state_10588[(15)]);var inst_10508 = (state_10588[(2)]);var inst_10509 = cljs.core.get.call(null,inst_10508,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_10510 = cljs.core.get.call(null,inst_10508,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_10511__$1 = cljs.core.get.call(null,inst_10508,new cljs.core.Keyword(null,"event","event",301435442));var inst_10512 = cljs.core.get.call(null,inst_10508,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_10513 = cljs.core.nth.call(null,inst_10511__$1,(0),null);var inst_10514 = cljs.core.nth.call(null,inst_10511__$1,(1),null);var inst_10518 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_10513);var state_10588__$1 = (function (){var statearr_10629 = state_10588;(statearr_10629[(18)] = inst_10509);
(statearr_10629[(19)] = inst_10510);
(statearr_10629[(20)] = inst_10512);
(statearr_10629[(15)] = inst_10511__$1);
(statearr_10629[(16)] = inst_10514);
return statearr_10629;
})();if(inst_10518)
{var statearr_10630_10675 = state_10588__$1;(statearr_10630_10675[(1)] = (11));
} else
{var statearr_10631_10676 = state_10588__$1;(statearr_10631_10676[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (18)))
{var inst_10521 = (state_10588[(12)]);var inst_10535 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_10521);var state_10588__$1 = state_10588;if(inst_10535)
{var statearr_10632_10677 = state_10588__$1;(statearr_10632_10677[(1)] = (20));
} else
{var statearr_10633_10678 = state_10588__$1;(statearr_10633_10678[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10589 === (8)))
{var inst_10502 = (state_10588[(7)]);var inst_10505 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10502);var state_10588__$1 = state_10588;var statearr_10634_10679 = state_10588__$1;(statearr_10634_10679[(2)] = inst_10505);
(statearr_10634_10679[(1)] = (10));
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
});})(c__6554__auto___10642))
;return ((function (switch__6539__auto__,c__6554__auto___10642){
return (function() {
var state_machine__6540__auto__ = null;
var state_machine__6540__auto____0 = (function (){var statearr_10638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10638[(0)] = state_machine__6540__auto__);
(statearr_10638[(1)] = (1));
return statearr_10638;
});
var state_machine__6540__auto____1 = (function (state_10588){while(true){
var ret_value__6541__auto__ = (function (){try{while(true){
var result__6542__auto__ = switch__6539__auto__.call(null,state_10588);if(cljs.core.keyword_identical_QMARK_.call(null,result__6542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6542__auto__;
}
break;
}
}catch (e10639){if((e10639 instanceof Object))
{var ex__6543__auto__ = e10639;var statearr_10640_10680 = state_10588;(statearr_10640_10680[(5)] = ex__6543__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10588);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10639;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10681 = state_10588;
state_10588 = G__10681;
continue;
}
} else
{return ret_value__6541__auto__;
}
break;
}
});
state_machine__6540__auto__ = function(state_10588){
switch(arguments.length){
case 0:
return state_machine__6540__auto____0.call(this);
case 1:
return state_machine__6540__auto____1.call(this,state_10588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6540__auto____0;
state_machine__6540__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6540__auto____1;
return state_machine__6540__auto__;
})()
;})(switch__6539__auto__,c__6554__auto___10642))
})();var state__6556__auto__ = (function (){var statearr_10641 = f__6555__auto__.call(null);(statearr_10641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6554__auto___10642);
return statearr_10641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6556__auto__);
});})(c__6554__auto___10642))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__10682_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__10682_SHARP_);
return rummikub_cljs.web.render.call(null);
});})(user__$1,user,temp__4220__auto__))
], null));
} else
{return null;
}
} else
{return null;
}
});
rummikub_cljs.web.color_str = (function color_str(p__10683){var vec__10685 = p__10683;var r = cljs.core.nth.call(null,vec__10685,(0),null);var g = cljs.core.nth.call(null,vec__10685,(1),null);var b = cljs.core.nth.call(null,vec__10685,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function type_chat(event){var val = event.target.value;return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function new_chat(){var val = document.getElementById("new-chat").value;var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");
return false;
});
rummikub_cljs.web.scroll_box = (function scroll_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__10688){var map__10689 = p__10688;var map__10689__$1 = ((cljs.core.seq_QMARK_.call(null,map__10689))?cljs.core.apply.call(null,cljs.core.hash_map,map__10689):map__10689);var content = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
});
rummikub_cljs.web.scroll_to_bottom = (function scroll_to_bottom(this$){var node = this$.getDOMNode();return node.scrollTop = node.scrollHeight;
});
rummikub_cljs.web.scroll_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.scroll_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box2], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10690_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__10690_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Minimize",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,false);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Edit Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_users_QMARK_,true);
})], null)], null)], null)], null);
});
rummikub_cljs.web.minimized_chat_box = (function minimized_chat_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);
})], null),"X"], null);
});
rummikub_cljs.web.show_chat_QMARK_ = reagent.core.atom.call(null,true);
rummikub_cljs.web.dragging_tile = reagent.core.atom.call(null,null);
rummikub_cljs.web.play_sound = (function play_sound(){var G__10692 = document.getElementById("yourAudioTag");G__10692.load();
G__10692.play();
return G__10692;
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__10695 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__10695__$1 = ((cljs.core.seq_QMARK_.call(null,map__10695))?cljs.core.apply.call(null,cljs.core.hash_map,map__10695):map__10695);var this_player = cljs.core.get.call(null,map__10695__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__10696 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__10696__$1 = ((cljs.core.seq_QMARK_.call(null,map__10696))?cljs.core.apply.call(null,cljs.core.hash_map,map__10696):map__10696);var color = cljs.core.get.call(null,map__10696__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10696__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10695,map__10695__$1,this_player,map__10696,map__10696__$1,color,user){
return (function (){rummikub_cljs.web.play_sound.call(null);
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});})(map__10695,map__10695__$1,this_player,map__10696,map__10696__$1,color,user))
], null)], null):null)], null);
});
rummikub_cljs.web.stand_box = (function stand_box(k,i,j,tile,user,value,color){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",(i * (24)),"20px","absolute","1px solid black","20px",(j * (24)),"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,user),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
});
rummikub_cljs.web.table_box = (function table_box(k,left,top,color,tile,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",top,"20px","absolute","1px solid black","20px",left,"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,"table"),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
});
rummikub_cljs.web.animate = (function() {
var animate = null;
var animate__1 = (function (k){var temp__4220__auto__ = cljs.core.deref.call(null,rummikub_cljs.web.to_animate).call(null,k);if(cljs.core.truth_(temp__4220__auto__))
{var points = temp__4220__auto__;animate.call(null,k,points);
return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.dissoc,k);
} else
{return null;
}
});
var animate__2 = (function (k,points){var vec__10704 = k.split(" ");var color = cljs.core.nth.call(null,vec__10704,(0),null);var value = cljs.core.nth.call(null,vec__10704,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__10705 = cljs.core.seq.call(null,points);var chunk__10706 = null;var count__10707 = (0);var i__10708 = (0);while(true){
if((i__10708 < count__10707))
{var vec__10709 = cljs.core._nth.call(null,chunk__10706,i__10708);var x = cljs.core.nth.call(null,vec__10709,(0),null);var y = cljs.core.nth.call(null,vec__10709,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__10711 = seq__10705;
var G__10712 = chunk__10706;
var G__10713 = count__10707;
var G__10714 = (i__10708 + (1));
seq__10705 = G__10711;
chunk__10706 = G__10712;
count__10707 = G__10713;
i__10708 = G__10714;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__10705);if(temp__4222__auto__)
{var seq__10705__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10705__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__10705__$1);{
var G__10715 = cljs.core.chunk_rest.call(null,seq__10705__$1);
var G__10716 = c__4316__auto__;
var G__10717 = cljs.core.count.call(null,c__4316__auto__);
var G__10718 = (0);
seq__10705 = G__10715;
chunk__10706 = G__10716;
count__10707 = G__10717;
i__10708 = G__10718;
continue;
}
} else
{var vec__10710 = cljs.core.first.call(null,seq__10705__$1);var x = cljs.core.nth.call(null,vec__10710,(0),null);var y = cljs.core.nth.call(null,vec__10710,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__10719 = cljs.core.next.call(null,seq__10705__$1);
var G__10720 = null;
var G__10721 = (0);
var G__10722 = (0);
seq__10705 = G__10719;
chunk__10706 = G__10720;
count__10707 = G__10721;
i__10708 = G__10722;
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
animate = function(k,points){
switch(arguments.length){
case 1:
return animate__1.call(this,k);
case 2:
return animate__2.call(this,k,points);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
animate.cljs$core$IFn$_invoke$arity$1 = animate__1;
animate.cljs$core$IFn$_invoke$arity$2 = animate__2;
return animate;
})()
;
rummikub_cljs.web.before_update = (function before_update(_,p__10723){var vec__10725 = p__10723;var ___$1 = cljs.core.nth.call(null,vec__10725,(0),null);var k = cljs.core.nth.call(null,vec__10725,(1),null);return rummikub_cljs.web.animate.call(null,k);
});
rummikub_cljs.web.table_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.table_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),rummikub_cljs.web.before_update], null));
rummikub_cljs.web.stand_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.stand_box,cljs.core.PersistentArrayMap.EMPTY);
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__10726_SHARP_){return p1__10726_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__10727_SHARP_){return p1__10727_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__10728_SHARP_){var vec__10742 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__10742,(0),null);var tile = cljs.core.nth.call(null,vec__10742,(1),null);var x = (p1__10728_SHARP_.clientX - (17));var y = (p1__10728_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__10743(s__10744){return (new cljs.core.LazySeq(null,(function (){var s__10744__$1 = s__10744;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10744__$1);if(temp__4222__auto__)
{var s__10744__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10744__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10744__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10746 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10745 = (0);while(true){
if((i__10745 < size__4284__auto__))
{var vec__10751 = cljs.core._nth.call(null,c__4283__auto__,i__10745);var k = cljs.core.nth.call(null,vec__10751,(0),null);var tile = cljs.core.nth.call(null,vec__10751,(1),null);var map__10752 = tile;var map__10752__$1 = ((cljs.core.seq_QMARK_.call(null,map__10752))?cljs.core.apply.call(null,cljs.core.hash_map,map__10752):map__10752);var value = cljs.core.get.call(null,map__10752__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10752__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__10752__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10752__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__10752__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__10746,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box2,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__10755 = (i__10745 + (1));
i__10745 = G__10755;
continue;
}
} else
{{
var G__10756 = (i__10745 + (1));
i__10745 = G__10756;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10746),iter__10743.call(null,cljs.core.chunk_rest.call(null,s__10744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10746),null);
}
} else
{var vec__10753 = cljs.core.first.call(null,s__10744__$2);var k = cljs.core.nth.call(null,vec__10753,(0),null);var tile = cljs.core.nth.call(null,vec__10753,(1),null);var map__10754 = tile;var map__10754__$1 = ((cljs.core.seq_QMARK_.call(null,map__10754))?cljs.core.apply.call(null,cljs.core.hash_map,map__10754):map__10754);var value = cljs.core.get.call(null,map__10754__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10754__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__10754__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10754__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__10754__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box2,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__10743.call(null,cljs.core.rest.call(null,s__10744__$2)));
} else
{{
var G__10757 = cljs.core.rest.call(null,s__10744__$2);
s__10744__$1 = G__10757;
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
});return iter__4285__auto__.call(null,cljs.core.deref.call(null,rummikub_cljs.web.tiles_atom));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.turn_indicator], null)], null);
});
rummikub_cljs.web.drag_coords = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__10758_SHARP_){p1__10758_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__10759_SHARP_){return p1__10759_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__10760_SHARP_){return p1__10760_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__10761_SHARP_){var vec__10776 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__10776,(0),null);var tile = cljs.core.nth.call(null,vec__10776,(1),null);var tile_x = (p1__10761_SHARP_.clientX - (20));var tile_y = (p1__10761_SHARP_.clientY - (20));var map__10777 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__10777__$1 = ((cljs.core.seq_QMARK_.call(null,map__10777))?cljs.core.apply.call(null,cljs.core.hash_map,map__10777):map__10777);var stand_x = cljs.core.get.call(null,map__10777__$1,"left");var stand_y = cljs.core.get.call(null,map__10777__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__10778(s__10779){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__10779__$1 = s__10779;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10779__$1);if(temp__4222__auto__)
{var s__10779__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10779__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10779__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10781 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10780 = (0);while(true){
if((i__10780 < size__4284__auto__))
{var vec__10786 = cljs.core._nth.call(null,c__4283__auto__,i__10780);var k = cljs.core.nth.call(null,vec__10786,(0),null);var tile = cljs.core.nth.call(null,vec__10786,(1),null);var map__10787 = tile;var map__10787__$1 = ((cljs.core.seq_QMARK_.call(null,map__10787))?cljs.core.apply.call(null,cljs.core.hash_map,map__10787):map__10787);var value = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__10787__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__10781,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box2,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__10790 = (i__10780 + (1));
i__10780 = G__10790;
continue;
}
} else
{{
var G__10791 = (i__10780 + (1));
i__10780 = G__10791;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10781),iter__10778.call(null,cljs.core.chunk_rest.call(null,s__10779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10781),null);
}
} else
{var vec__10788 = cljs.core.first.call(null,s__10779__$2);var k = cljs.core.nth.call(null,vec__10788,(0),null);var tile = cljs.core.nth.call(null,vec__10788,(1),null);var map__10789 = tile;var map__10789__$1 = ((cljs.core.seq_QMARK_.call(null,map__10789))?cljs.core.apply.call(null,cljs.core.hash_map,map__10789):map__10789);var value = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__10789__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box2,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__10778.call(null,cljs.core.rest.call(null,s__10779__$2)));
} else
{{
var G__10792 = cljs.core.rest.call(null,s__10779__$2);
s__10779__$1 = G__10792;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(user))
,null,null));
});})(user))
;return iter__4285__auto__.call(null,cljs.core.deref.call(null,rummikub_cljs.web.tiles_atom));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin], null),new cljs.core.Keyword(null,"value","value",305978217),"Sort Tiles",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user){
return (function (){return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","sort-tiles","rummikub/sort-tiles",-181838496),user], null));
});})(user))
], null)], null)], null);
});
rummikub_cljs.web.show_users_QMARK_ = reagent.core.atom.call(null,true);
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__10801(s__10802){return (new cljs.core.LazySeq(null,(function (){var s__10802__$1 = s__10802;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10802__$1);if(temp__4222__auto__)
{var s__10802__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10802__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10802__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10804 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10803 = (0);while(true){
if((i__10803 < size__4284__auto__))
{var map__10807 = cljs.core._nth.call(null,c__4283__auto__,i__10803);var map__10807__$1 = ((cljs.core.seq_QMARK_.call(null,map__10807))?cljs.core.apply.call(null,cljs.core.hash_map,map__10807):map__10807);var color = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10807__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__10804,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10803,map__10807,map__10807__$1,color,user,c__4283__auto__,size__4284__auto__,b__10804,s__10802__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__10803,map__10807,map__10807__$1,color,user,c__4283__auto__,size__4284__auto__,b__10804,s__10802__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__10809 = (i__10803 + (1));
i__10803 = G__10809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10804),iter__10801.call(null,cljs.core.chunk_rest.call(null,s__10802__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10804),null);
}
} else
{var map__10808 = cljs.core.first.call(null,s__10802__$2);var map__10808__$1 = ((cljs.core.seq_QMARK_.call(null,map__10808))?cljs.core.apply.call(null,cljs.core.hash_map,map__10808):map__10808);var color = cljs.core.get.call(null,map__10808__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10808__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10808,map__10808__$1,color,user,s__10802__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__10808,map__10808__$1,color,user,s__10802__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__10801.call(null,cljs.core.rest.call(null,s__10802__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,cljs.core.deref.call(null,rummikub_cljs.web.users_atom));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"New Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-game","rummikub/new-game",-639074722),null], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_users_QMARK_,false);
})], null)], null)], null);
});
rummikub_cljs.web.contents = (function contents(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__10810_SHARP_){var x = p1__10810_SHARP_.clientX;var y = p1__10810_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__10813){var map__10814 = p__10813;var map__10814__$1 = ((cljs.core.seq_QMARK_.call(null,map__10814))?cljs.core.apply.call(null,cljs.core.hash_map,map__10814):map__10814);var user = cljs.core.get.call(null,map__10814__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yourAudioTag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/pass.wav",new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null)], null);
});
rummikub_cljs.web.contents2 = cljs.core.with_meta.call(null,rummikub_cljs.web.contents,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){return key("enter",(function (){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),cljs.core.deref.call(null,rummikub_cljs.web.current_player)))
{rummikub_cljs.web.play_sound.call(null);
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
} else
{return null;
}
}));
})], null));
rummikub_cljs.web.render = (function render(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.contents2], null),document.getElementById("content"));
});
rummikub_cljs.web.main = (function main(){if(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)))
{return rummikub_cljs.web.render.call(null);
} else
{return rummikub_cljs.web.get_user.call(null);
}
});
rummikub_cljs.web.t = (function t(){return rummikub_cljs.web.p.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom));
});
rummikub_cljs.web.t2 = (function t2(){return rummikub_cljs.web.p.call(null,cljs.core.deref.call(null,rummikub_cljs.web.users_atom));
});
