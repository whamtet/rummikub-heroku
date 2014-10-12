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
rummikub_cljs.web.p = (function p(p1__10500_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__10500_SHARP_));
});
var map__10501_10502 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__10501_10503__$1 = ((cljs.core.seq_QMARK_.call(null,map__10501_10502))?cljs.core.apply.call(null,cljs.core.hash_map,map__10501_10502):map__10501_10502);var state_10504 = cljs.core.get.call(null,map__10501_10503__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_10505 = cljs.core.get.call(null,map__10501_10503__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_10506 = cljs.core.get.call(null,map__10501_10503__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_10507 = cljs.core.get.call(null,map__10501_10503__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_10507;
rummikub_cljs.web.ch_chsk = ch_recv_10506;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_10505;
rummikub_cljs.web.chsk_state = state_10504;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6565__auto___10663 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6565__auto___10663){
return (function (){var f__6566__auto__ = (function (){var switch__6550__auto__ = ((function (c__6565__auto___10663){
return (function (state_10605){var state_val_10606 = (state_10605[(1)]);if((state_val_10606 === (7)))
{var inst_10513 = (state_10605[(7)]);var inst_10513__$1 = (state_10605[(2)]);var inst_10514 = cljs.core.seq_QMARK_.call(null,inst_10513__$1);var state_10605__$1 = (function (){var statearr_10607 = state_10605;(statearr_10607[(7)] = inst_10513__$1);
return statearr_10607;
})();if(inst_10514)
{var statearr_10608_10664 = state_10605__$1;(statearr_10608_10664[(1)] = (8));
} else
{var statearr_10609_10665 = state_10605__$1;(statearr_10609_10665[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (20)))
{var inst_10533 = (state_10605[(8)]);var inst_10549 = cljs.core.nth.call(null,inst_10533,(0),null);var inst_10550 = cljs.core.nth.call(null,inst_10533,(1),null);var inst_10551 = cljs.core.nth.call(null,inst_10533,(2),null);var inst_10552 = cljs.core.nth.call(null,inst_10533,(3),null);var inst_10553 = cljs.core.first.call(null,inst_10551);var inst_10554 = cljs.core.last.call(null,inst_10551);var inst_10555 = cljs.core.drop_last.call(null,(1),inst_10551);var inst_10556 = cljs.core.drop.call(null,(1),inst_10555);var inst_10557 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_10558 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_10557);var inst_10559 = cljs.core.not_EQ_.call(null,inst_10552,inst_10558);var inst_10560 = cljs.core._EQ_.call(null,"table",inst_10553,inst_10554);var inst_10561 = (inst_10559) && (inst_10560);var state_10605__$1 = (function (){var statearr_10610 = state_10605;(statearr_10610[(9)] = inst_10556);
(statearr_10610[(10)] = inst_10549);
(statearr_10610[(11)] = inst_10550);
return statearr_10610;
})();if(cljs.core.truth_(inst_10561))
{var statearr_10611_10666 = state_10605__$1;(statearr_10611_10666[(1)] = (23));
} else
{var statearr_10612_10667 = state_10605__$1;(statearr_10612_10667[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (27)))
{var inst_10532 = (state_10605[(12)]);var inst_10573 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_10532);var state_10605__$1 = state_10605;if(inst_10573)
{var statearr_10613_10668 = state_10605__$1;(statearr_10613_10668[(1)] = (29));
} else
{var statearr_10614_10669 = state_10605__$1;(statearr_10614_10669[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (1)))
{var state_10605__$1 = state_10605;var statearr_10615_10670 = state_10605__$1;(statearr_10615_10670[(2)] = null);
(statearr_10615_10670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (24)))
{var state_10605__$1 = state_10605;var statearr_10616_10671 = state_10605__$1;(statearr_10616_10671[(2)] = null);
(statearr_10616_10671[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (4)))
{var state_10605__$1 = state_10605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10605__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_10606 === (15)))
{var inst_10532 = (state_10605[(12)]);var inst_10542 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_10532);var state_10605__$1 = state_10605;if(inst_10542)
{var statearr_10617_10672 = state_10605__$1;(statearr_10617_10672[(1)] = (17));
} else
{var statearr_10618_10673 = state_10605__$1;(statearr_10618_10673[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (21)))
{var inst_10532 = (state_10605[(12)]);var inst_10569 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_10532);var state_10605__$1 = state_10605;if(inst_10569)
{var statearr_10619_10674 = state_10605__$1;(statearr_10619_10674[(1)] = (26));
} else
{var statearr_10620_10675 = state_10605__$1;(statearr_10620_10675[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (31)))
{var inst_10585 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10621_10676 = state_10605__$1;(statearr_10621_10676[(2)] = inst_10585);
(statearr_10621_10676[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (32)))
{var inst_10579 = rummikub_cljs.web.play_sound.call(null);var state_10605__$1 = state_10605;var statearr_10622_10677 = state_10605__$1;(statearr_10622_10677[(2)] = inst_10579);
(statearr_10622_10677[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (33)))
{var inst_10522 = (state_10605[(13)]);var inst_10581 = cljs.core.println.call(null,inst_10522);var state_10605__$1 = state_10605;var statearr_10623_10678 = state_10605__$1;(statearr_10623_10678[(2)] = inst_10581);
(statearr_10623_10678[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (13)))
{var inst_10597 = (state_10605[(2)]);var state_10605__$1 = (function (){var statearr_10624 = state_10605;(statearr_10624[(14)] = inst_10597);
return statearr_10624;
})();var statearr_10625_10679 = state_10605__$1;(statearr_10625_10679[(2)] = null);
(statearr_10625_10679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (22)))
{var inst_10589 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10626_10680 = state_10605__$1;(statearr_10626_10680[(2)] = inst_10589);
(statearr_10626_10680[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (29)))
{var inst_10533 = (state_10605[(8)]);var inst_10575 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_10533);var state_10605__$1 = state_10605;var statearr_10627_10681 = state_10605__$1;(statearr_10627_10681[(2)] = inst_10575);
(statearr_10627_10681[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (6)))
{var inst_10601 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10628_10682 = state_10605__$1;(statearr_10628_10682[(2)] = inst_10601);
(statearr_10628_10682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (28)))
{var inst_10587 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10629_10683 = state_10605__$1;(statearr_10629_10683[(2)] = inst_10587);
(statearr_10629_10683[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (25)))
{var inst_10549 = (state_10605[(10)]);var inst_10566 = (state_10605[(2)]);var inst_10567 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_10549);var state_10605__$1 = (function (){var statearr_10630 = state_10605;(statearr_10630[(15)] = inst_10566);
return statearr_10630;
})();var statearr_10631_10684 = state_10605__$1;(statearr_10631_10684[(2)] = inst_10567);
(statearr_10631_10684[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (34)))
{var inst_10583 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10632_10685 = state_10605__$1;(statearr_10632_10685[(2)] = inst_10583);
(statearr_10632_10685[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (17)))
{var inst_10533 = (state_10605[(8)]);var inst_10544 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_10533);var state_10605__$1 = state_10605;var statearr_10633_10686 = state_10605__$1;(statearr_10633_10686[(2)] = inst_10544);
(statearr_10633_10686[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (3)))
{var inst_10603 = (state_10605[(2)]);var state_10605__$1 = state_10605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10605__$1,inst_10603);
} else
{if((state_val_10606 === (12)))
{var inst_10522 = (state_10605[(13)]);var inst_10595 = cljs.core.println.call(null,inst_10522);var state_10605__$1 = state_10605;var statearr_10634_10687 = state_10605__$1;(statearr_10634_10687[(2)] = inst_10595);
(statearr_10634_10687[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (2)))
{var state_10605__$1 = state_10605;var statearr_10635_10688 = state_10605__$1;(statearr_10635_10688[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (23)))
{var inst_10556 = (state_10605[(9)]);var inst_10550 = (state_10605[(11)]);var inst_10563 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_10550,inst_10556);var state_10605__$1 = state_10605;var statearr_10637_10689 = state_10605__$1;(statearr_10637_10689[(2)] = inst_10563);
(statearr_10637_10689[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (19)))
{var inst_10591 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10638_10690 = state_10605__$1;(statearr_10638_10690[(2)] = inst_10591);
(statearr_10638_10690[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (11)))
{var inst_10532 = (state_10605[(12)]);var inst_10525 = (state_10605[(16)]);var inst_10532__$1 = cljs.core.nth.call(null,inst_10525,(0),null);var inst_10533 = cljs.core.nth.call(null,inst_10525,(1),null);var inst_10537 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_10532__$1);var state_10605__$1 = (function (){var statearr_10639 = state_10605;(statearr_10639[(8)] = inst_10533);
(statearr_10639[(12)] = inst_10532__$1);
return statearr_10639;
})();if(inst_10537)
{var statearr_10640_10691 = state_10605__$1;(statearr_10640_10691[(1)] = (14));
} else
{var statearr_10641_10692 = state_10605__$1;(statearr_10641_10692[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (9)))
{var inst_10513 = (state_10605[(7)]);var state_10605__$1 = state_10605;var statearr_10642_10693 = state_10605__$1;(statearr_10642_10693[(2)] = inst_10513);
(statearr_10642_10693[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (5)))
{var state_10605__$1 = state_10605;var statearr_10643_10694 = state_10605__$1;(statearr_10643_10694[(2)] = null);
(statearr_10643_10694[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (14)))
{var inst_10533 = (state_10605[(8)]);var inst_10539 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_10533);var inst_10540 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_10605__$1 = (function (){var statearr_10644 = state_10605;(statearr_10644[(17)] = inst_10539);
return statearr_10644;
})();var statearr_10645_10695 = state_10605__$1;(statearr_10645_10695[(2)] = inst_10540);
(statearr_10645_10695[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (26)))
{var inst_10533 = (state_10605[(8)]);var inst_10571 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_10533);var state_10605__$1 = state_10605;var statearr_10646_10696 = state_10605__$1;(statearr_10646_10696[(2)] = inst_10571);
(statearr_10646_10696[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (16)))
{var inst_10593 = (state_10605[(2)]);var state_10605__$1 = state_10605;var statearr_10647_10697 = state_10605__$1;(statearr_10647_10697[(2)] = inst_10593);
(statearr_10647_10697[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (30)))
{var inst_10532 = (state_10605[(12)]);var inst_10577 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),inst_10532);var state_10605__$1 = state_10605;if(inst_10577)
{var statearr_10648_10698 = state_10605__$1;(statearr_10648_10698[(1)] = (32));
} else
{var statearr_10649_10699 = state_10605__$1;(statearr_10649_10699[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (10)))
{var inst_10522 = (state_10605[(13)]);var inst_10519 = (state_10605[(2)]);var inst_10520 = cljs.core.get.call(null,inst_10519,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_10521 = cljs.core.get.call(null,inst_10519,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_10522__$1 = cljs.core.get.call(null,inst_10519,new cljs.core.Keyword(null,"event","event",301435442));var inst_10523 = cljs.core.get.call(null,inst_10519,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_10524 = cljs.core.nth.call(null,inst_10522__$1,(0),null);var inst_10525 = cljs.core.nth.call(null,inst_10522__$1,(1),null);var inst_10529 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_10524);var state_10605__$1 = (function (){var statearr_10650 = state_10605;(statearr_10650[(18)] = inst_10520);
(statearr_10650[(19)] = inst_10523);
(statearr_10650[(20)] = inst_10521);
(statearr_10650[(16)] = inst_10525);
(statearr_10650[(13)] = inst_10522__$1);
return statearr_10650;
})();if(inst_10529)
{var statearr_10651_10700 = state_10605__$1;(statearr_10651_10700[(1)] = (11));
} else
{var statearr_10652_10701 = state_10605__$1;(statearr_10652_10701[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (18)))
{var inst_10532 = (state_10605[(12)]);var inst_10546 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_10532);var state_10605__$1 = state_10605;if(inst_10546)
{var statearr_10653_10702 = state_10605__$1;(statearr_10653_10702[(1)] = (20));
} else
{var statearr_10654_10703 = state_10605__$1;(statearr_10654_10703[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10606 === (8)))
{var inst_10513 = (state_10605[(7)]);var inst_10516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10513);var state_10605__$1 = state_10605;var statearr_10655_10704 = state_10605__$1;(statearr_10655_10704[(2)] = inst_10516);
(statearr_10655_10704[(1)] = (10));
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
});})(c__6565__auto___10663))
;return ((function (switch__6550__auto__,c__6565__auto___10663){
return (function() {
var state_machine__6551__auto__ = null;
var state_machine__6551__auto____0 = (function (){var statearr_10659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10659[(0)] = state_machine__6551__auto__);
(statearr_10659[(1)] = (1));
return statearr_10659;
});
var state_machine__6551__auto____1 = (function (state_10605){while(true){
var ret_value__6552__auto__ = (function (){try{while(true){
var result__6553__auto__ = switch__6550__auto__.call(null,state_10605);if(cljs.core.keyword_identical_QMARK_.call(null,result__6553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6553__auto__;
}
break;
}
}catch (e10660){if((e10660 instanceof Object))
{var ex__6554__auto__ = e10660;var statearr_10661_10705 = state_10605;(statearr_10661_10705[(5)] = ex__6554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10660;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10706 = state_10605;
state_10605 = G__10706;
continue;
}
} else
{return ret_value__6552__auto__;
}
break;
}
});
state_machine__6551__auto__ = function(state_10605){
switch(arguments.length){
case 0:
return state_machine__6551__auto____0.call(this);
case 1:
return state_machine__6551__auto____1.call(this,state_10605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6551__auto____0;
state_machine__6551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6551__auto____1;
return state_machine__6551__auto__;
})()
;})(switch__6550__auto__,c__6565__auto___10663))
})();var state__6567__auto__ = (function (){var statearr_10662 = f__6566__auto__.call(null);(statearr_10662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6565__auto___10663);
return statearr_10662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6567__auto__);
});})(c__6565__auto___10663))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__10707_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__10707_SHARP_);
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
rummikub_cljs.web.color_str = (function color_str(p__10708){var vec__10710 = p__10708;var r = cljs.core.nth.call(null,vec__10710,(0),null);var g = cljs.core.nth.call(null,vec__10710,(1),null);var b = cljs.core.nth.call(null,vec__10710,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function type_chat(event){var val = event.target.value;return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function new_chat(){var val = document.getElementById("new-chat").value;var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");
return false;
});
rummikub_cljs.web.scroll_to_bottom = (function scroll_to_bottom(this$){var node = this$.getDOMNode();return node.scrollTop = node.scrollHeight;
});
rummikub_cljs.web.scroll_box = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__10711){var map__10712 = p__10711;var map__10712__$1 = ((cljs.core.seq_QMARK_.call(null,map__10712))?cljs.core.apply.call(null,cljs.core.hash_map,map__10712):map__10712);var content = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10713_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__10713_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Minimize",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,false);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Edit Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_users_QMARK_,true);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Backup",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return rummikub_cljs.core.link_to.call(null,"/rummikub-backup");
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"report-to-add",new cljs.core.Keyword(null,"on-change","on-change",-732046149),send_attachment], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null);
});
rummikub_cljs.web.minimized_chat_box = (function minimized_chat_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);
})], null),"X"], null);
});
rummikub_cljs.web.show_chat_QMARK_ = reagent.core.atom.call(null,true);
rummikub_cljs.web.dragging_tile = reagent.core.atom.call(null,null);
rummikub_cljs.web.play_sound = (function play_sound(){var G__10715 = document.getElementById("yourAudioTag");G__10715.load();
G__10715.play();
return G__10715;
});
rummikub_cljs.web.pass = (function pass(){rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),null], null));
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__10718 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__10718__$1 = ((cljs.core.seq_QMARK_.call(null,map__10718))?cljs.core.apply.call(null,cljs.core.hash_map,map__10718):map__10718);var this_player = cljs.core.get.call(null,map__10718__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__10719 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__10719__$1 = ((cljs.core.seq_QMARK_.call(null,map__10719))?cljs.core.apply.call(null,cljs.core.hash_map,map__10719):map__10719);var color = cljs.core.get.call(null,map__10719__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10719__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rummikub_cljs.web.pass], null)], null):null)], null);
});
rummikub_cljs.web.stand_box = (function stand_box(k,i,j,tile,user,value,color){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",(i * (24)),"20px","absolute","1px solid black","20px",(j * (24)),"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,user),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
});
rummikub_cljs.web.table_box = cljs.core.with_meta.call(null,(function (k,left,top,color,tile,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",top,"20px","absolute","1px solid black","20px",left,"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,"table"),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),rummikub_cljs.web.before_update], null));
rummikub_cljs.web.animate = (function() {
var animate = null;
var animate__1 = (function (k){var temp__4220__auto__ = cljs.core.deref.call(null,rummikub_cljs.web.to_animate).call(null,k);if(cljs.core.truth_(temp__4220__auto__))
{var points = temp__4220__auto__;animate.call(null,k,points);
return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.dissoc,k);
} else
{return null;
}
});
var animate__2 = (function (k,points){var vec__10727 = k.split(" ");var color = cljs.core.nth.call(null,vec__10727,(0),null);var value = cljs.core.nth.call(null,vec__10727,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__10728 = cljs.core.seq.call(null,points);var chunk__10729 = null;var count__10730 = (0);var i__10731 = (0);while(true){
if((i__10731 < count__10730))
{var vec__10732 = cljs.core._nth.call(null,chunk__10729,i__10731);var x = cljs.core.nth.call(null,vec__10732,(0),null);var y = cljs.core.nth.call(null,vec__10732,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__10734 = seq__10728;
var G__10735 = chunk__10729;
var G__10736 = count__10730;
var G__10737 = (i__10731 + (1));
seq__10728 = G__10734;
chunk__10729 = G__10735;
count__10730 = G__10736;
i__10731 = G__10737;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__10728);if(temp__4222__auto__)
{var seq__10728__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10728__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__10728__$1);{
var G__10738 = cljs.core.chunk_rest.call(null,seq__10728__$1);
var G__10739 = c__4316__auto__;
var G__10740 = cljs.core.count.call(null,c__4316__auto__);
var G__10741 = (0);
seq__10728 = G__10738;
chunk__10729 = G__10739;
count__10730 = G__10740;
i__10731 = G__10741;
continue;
}
} else
{var vec__10733 = cljs.core.first.call(null,seq__10728__$1);var x = cljs.core.nth.call(null,vec__10733,(0),null);var y = cljs.core.nth.call(null,vec__10733,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__10742 = cljs.core.next.call(null,seq__10728__$1);
var G__10743 = null;
var G__10744 = (0);
var G__10745 = (0);
seq__10728 = G__10742;
chunk__10729 = G__10743;
count__10730 = G__10744;
i__10731 = G__10745;
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
rummikub_cljs.web.before_update = (function before_update(_,p__10746){var vec__10748 = p__10746;var ___$1 = cljs.core.nth.call(null,vec__10748,(0),null);var k = cljs.core.nth.call(null,vec__10748,(1),null);return rummikub_cljs.web.animate.call(null,k);
});
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__10749_SHARP_){return p1__10749_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__10750_SHARP_){return p1__10750_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__10751_SHARP_){var vec__10765 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__10765,(0),null);var tile = cljs.core.nth.call(null,vec__10765,(1),null);var x = (p1__10751_SHARP_.clientX - (17));var y = (p1__10751_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__10766(s__10767){return (new cljs.core.LazySeq(null,(function (){var s__10767__$1 = s__10767;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10767__$1);if(temp__4222__auto__)
{var s__10767__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10767__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10767__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10769 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10768 = (0);while(true){
if((i__10768 < size__4284__auto__))
{var vec__10774 = cljs.core._nth.call(null,c__4283__auto__,i__10768);var k = cljs.core.nth.call(null,vec__10774,(0),null);var tile = cljs.core.nth.call(null,vec__10774,(1),null);var map__10775 = tile;var map__10775__$1 = ((cljs.core.seq_QMARK_.call(null,map__10775))?cljs.core.apply.call(null,cljs.core.hash_map,map__10775):map__10775);var value = cljs.core.get.call(null,map__10775__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10775__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__10775__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10775__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__10775__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__10769,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__10778 = (i__10768 + (1));
i__10768 = G__10778;
continue;
}
} else
{{
var G__10779 = (i__10768 + (1));
i__10768 = G__10779;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10769),iter__10766.call(null,cljs.core.chunk_rest.call(null,s__10767__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10769),null);
}
} else
{var vec__10776 = cljs.core.first.call(null,s__10767__$2);var k = cljs.core.nth.call(null,vec__10776,(0),null);var tile = cljs.core.nth.call(null,vec__10776,(1),null);var map__10777 = tile;var map__10777__$1 = ((cljs.core.seq_QMARK_.call(null,map__10777))?cljs.core.apply.call(null,cljs.core.hash_map,map__10777):map__10777);var value = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__10766.call(null,cljs.core.rest.call(null,s__10767__$2)));
} else
{{
var G__10780 = cljs.core.rest.call(null,s__10767__$2);
s__10767__$1 = G__10780;
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
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__10781_SHARP_){p1__10781_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__10782_SHARP_){return p1__10782_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__10783_SHARP_){return p1__10783_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__10784_SHARP_){var vec__10799 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__10799,(0),null);var tile = cljs.core.nth.call(null,vec__10799,(1),null);var tile_x = (p1__10784_SHARP_.clientX - (20));var tile_y = (p1__10784_SHARP_.clientY - (20));var map__10800 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__10800__$1 = ((cljs.core.seq_QMARK_.call(null,map__10800))?cljs.core.apply.call(null,cljs.core.hash_map,map__10800):map__10800);var stand_x = cljs.core.get.call(null,map__10800__$1,"left");var stand_y = cljs.core.get.call(null,map__10800__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__10801(s__10802){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__10802__$1 = s__10802;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10802__$1);if(temp__4222__auto__)
{var s__10802__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10802__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10802__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10804 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10803 = (0);while(true){
if((i__10803 < size__4284__auto__))
{var vec__10809 = cljs.core._nth.call(null,c__4283__auto__,i__10803);var k = cljs.core.nth.call(null,vec__10809,(0),null);var tile = cljs.core.nth.call(null,vec__10809,(1),null);var map__10810 = tile;var map__10810__$1 = ((cljs.core.seq_QMARK_.call(null,map__10810))?cljs.core.apply.call(null,cljs.core.hash_map,map__10810):map__10810);var value = cljs.core.get.call(null,map__10810__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10810__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__10810__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__10810__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__10810__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__10804,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__10813 = (i__10803 + (1));
i__10803 = G__10813;
continue;
}
} else
{{
var G__10814 = (i__10803 + (1));
i__10803 = G__10814;
continue;
}
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
{var vec__10811 = cljs.core.first.call(null,s__10802__$2);var k = cljs.core.nth.call(null,vec__10811,(0),null);var tile = cljs.core.nth.call(null,vec__10811,(1),null);var map__10812 = tile;var map__10812__$1 = ((cljs.core.seq_QMARK_.call(null,map__10812))?cljs.core.apply.call(null,cljs.core.hash_map,map__10812):map__10812);var value = cljs.core.get.call(null,map__10812__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10812__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__10812__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__10812__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__10812__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__10801.call(null,cljs.core.rest.call(null,s__10802__$2)));
} else
{{
var G__10815 = cljs.core.rest.call(null,s__10802__$2);
s__10802__$1 = G__10815;
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
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Pick Up",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user){
return (function (){return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pick-up","rummikub/pick-up",-386756038),user], null));
});})(user))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Sort Tiles",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user){
return (function (){return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","sort-tiles","rummikub/sort-tiles",-181838496),user], null));
});})(user))
], null)], null)], null)], null);
});
rummikub_cljs.web.show_users_QMARK_ = reagent.core.atom.call(null,false);
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__10824(s__10825){return (new cljs.core.LazySeq(null,(function (){var s__10825__$1 = s__10825;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10825__$1);if(temp__4222__auto__)
{var s__10825__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10825__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10825__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10827 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10826 = (0);while(true){
if((i__10826 < size__4284__auto__))
{var map__10830 = cljs.core._nth.call(null,c__4283__auto__,i__10826);var map__10830__$1 = ((cljs.core.seq_QMARK_.call(null,map__10830))?cljs.core.apply.call(null,cljs.core.hash_map,map__10830):map__10830);var color = cljs.core.get.call(null,map__10830__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10830__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__10827,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10826,map__10830,map__10830__$1,color,user,c__4283__auto__,size__4284__auto__,b__10827,s__10825__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__10826,map__10830,map__10830__$1,color,user,c__4283__auto__,size__4284__auto__,b__10827,s__10825__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__10832 = (i__10826 + (1));
i__10826 = G__10832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10827),iter__10824.call(null,cljs.core.chunk_rest.call(null,s__10825__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10827),null);
}
} else
{var map__10831 = cljs.core.first.call(null,s__10825__$2);var map__10831__$1 = ((cljs.core.seq_QMARK_.call(null,map__10831))?cljs.core.apply.call(null,cljs.core.hash_map,map__10831):map__10831);var color = cljs.core.get.call(null,map__10831__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10831__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10831,map__10831__$1,color,user,s__10825__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__10831,map__10831__$1,color,user,s__10825__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__10824.call(null,cljs.core.rest.call(null,s__10825__$2)));
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
rummikub_cljs.web.contents = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__10833_SHARP_){var x = p1__10833_SHARP_.clientX;var y = p1__10833_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__10834){var map__10835 = p__10834;var map__10835__$1 = ((cljs.core.seq_QMARK_.call(null,map__10835))?cljs.core.apply.call(null,cljs.core.hash_map,map__10835):map__10835);var user = cljs.core.get.call(null,map__10835__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yourAudioTag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/pass.wav",new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){key("enter",(function (){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),cljs.core.deref.call(null,rummikub_cljs.web.current_player)))
{return rummikub_cljs.web.pass.call(null);
} else
{return null;
}
}));
return key("p",(function (){return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pick-up","rummikub/pick-up",-386756038),rummikub_cljs.web.user], null));
}));
})], null));
rummikub_cljs.web.render = (function render(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.contents], null),document.getElementById("content"));
});
rummikub_cljs.web.main = (function main(){if(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)))
{return rummikub_cljs.web.render.call(null);
} else
{return rummikub_cljs.web.get_user.call(null);
}
});
