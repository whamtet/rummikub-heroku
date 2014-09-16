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
rummikub_cljs.web.p = (function p(p1__10449_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__10449_SHARP_));
});
var map__10450_10451 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__10450_10452__$1 = ((cljs.core.seq_QMARK_.call(null,map__10450_10451))?cljs.core.apply.call(null,cljs.core.hash_map,map__10450_10451):map__10450_10451);var state_10453 = cljs.core.get.call(null,map__10450_10452__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_10454 = cljs.core.get.call(null,map__10450_10452__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_10455 = cljs.core.get.call(null,map__10450_10452__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_10456 = cljs.core.get.call(null,map__10450_10452__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_10456;
rummikub_cljs.web.ch_chsk = ch_recv_10455;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_10454;
rummikub_cljs.web.chsk_state = state_10453;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6514__auto___10602 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6514__auto___10602){
return (function (){var f__6515__auto__ = (function (){var switch__6499__auto__ = ((function (c__6514__auto___10602){
return (function (state_10548){var state_val_10549 = (state_10548[(1)]);if((state_val_10549 === (7)))
{var inst_10462 = (state_10548[(7)]);var inst_10462__$1 = (state_10548[(2)]);var inst_10463 = cljs.core.seq_QMARK_.call(null,inst_10462__$1);var state_10548__$1 = (function (){var statearr_10550 = state_10548;(statearr_10550[(7)] = inst_10462__$1);
return statearr_10550;
})();if(inst_10463)
{var statearr_10551_10603 = state_10548__$1;(statearr_10551_10603[(1)] = (8));
} else
{var statearr_10552_10604 = state_10548__$1;(statearr_10552_10604[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (20)))
{var inst_10482 = (state_10548[(8)]);var inst_10498 = cljs.core.nth.call(null,inst_10482,(0),null);var inst_10499 = cljs.core.nth.call(null,inst_10482,(1),null);var inst_10500 = cljs.core.nth.call(null,inst_10482,(2),null);var inst_10501 = cljs.core.nth.call(null,inst_10482,(3),null);var inst_10502 = cljs.core.first.call(null,inst_10500);var inst_10503 = cljs.core.last.call(null,inst_10500);var inst_10504 = cljs.core.drop_last.call(null,(1),inst_10500);var inst_10505 = cljs.core.drop.call(null,(1),inst_10504);var inst_10506 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_10507 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_10506);var inst_10508 = cljs.core.not_EQ_.call(null,inst_10501,inst_10507);var inst_10509 = cljs.core._EQ_.call(null,"table",inst_10502,inst_10503);var inst_10510 = (inst_10508) && (inst_10509);var state_10548__$1 = (function (){var statearr_10553 = state_10548;(statearr_10553[(9)] = inst_10498);
(statearr_10553[(10)] = inst_10505);
(statearr_10553[(11)] = inst_10499);
return statearr_10553;
})();if(cljs.core.truth_(inst_10510))
{var statearr_10554_10605 = state_10548__$1;(statearr_10554_10605[(1)] = (23));
} else
{var statearr_10555_10606 = state_10548__$1;(statearr_10555_10606[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (27)))
{var inst_10481 = (state_10548[(12)]);var inst_10522 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_10481);var state_10548__$1 = state_10548;if(inst_10522)
{var statearr_10556_10607 = state_10548__$1;(statearr_10556_10607[(1)] = (29));
} else
{var statearr_10557_10608 = state_10548__$1;(statearr_10557_10608[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (1)))
{var state_10548__$1 = state_10548;var statearr_10558_10609 = state_10548__$1;(statearr_10558_10609[(2)] = null);
(statearr_10558_10609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (24)))
{var state_10548__$1 = state_10548;var statearr_10559_10610 = state_10548__$1;(statearr_10559_10610[(2)] = null);
(statearr_10559_10610[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (4)))
{var state_10548__$1 = state_10548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10548__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_10549 === (15)))
{var inst_10481 = (state_10548[(12)]);var inst_10491 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_10481);var state_10548__$1 = state_10548;if(inst_10491)
{var statearr_10560_10611 = state_10548__$1;(statearr_10560_10611[(1)] = (17));
} else
{var statearr_10561_10612 = state_10548__$1;(statearr_10561_10612[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (21)))
{var inst_10481 = (state_10548[(12)]);var inst_10518 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_10481);var state_10548__$1 = state_10548;if(inst_10518)
{var statearr_10562_10613 = state_10548__$1;(statearr_10562_10613[(1)] = (26));
} else
{var statearr_10563_10614 = state_10548__$1;(statearr_10563_10614[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (31)))
{var inst_10528 = (state_10548[(2)]);var state_10548__$1 = state_10548;var statearr_10564_10615 = state_10548__$1;(statearr_10564_10615[(2)] = inst_10528);
(statearr_10564_10615[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (13)))
{var inst_10540 = (state_10548[(2)]);var state_10548__$1 = (function (){var statearr_10565 = state_10548;(statearr_10565[(13)] = inst_10540);
return statearr_10565;
})();var statearr_10566_10616 = state_10548__$1;(statearr_10566_10616[(2)] = null);
(statearr_10566_10616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (22)))
{var inst_10532 = (state_10548[(2)]);var state_10548__$1 = state_10548;var statearr_10567_10617 = state_10548__$1;(statearr_10567_10617[(2)] = inst_10532);
(statearr_10567_10617[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (29)))
{var inst_10482 = (state_10548[(8)]);var inst_10524 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_10482);var state_10548__$1 = state_10548;var statearr_10568_10618 = state_10548__$1;(statearr_10568_10618[(2)] = inst_10524);
(statearr_10568_10618[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (6)))
{var inst_10544 = (state_10548[(2)]);var state_10548__$1 = state_10548;var statearr_10569_10619 = state_10548__$1;(statearr_10569_10619[(2)] = inst_10544);
(statearr_10569_10619[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (28)))
{var inst_10530 = (state_10548[(2)]);var state_10548__$1 = state_10548;var statearr_10570_10620 = state_10548__$1;(statearr_10570_10620[(2)] = inst_10530);
(statearr_10570_10620[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (25)))
{var inst_10498 = (state_10548[(9)]);var inst_10515 = (state_10548[(2)]);var inst_10516 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_10498);var state_10548__$1 = (function (){var statearr_10571 = state_10548;(statearr_10571[(14)] = inst_10515);
return statearr_10571;
})();var statearr_10572_10621 = state_10548__$1;(statearr_10572_10621[(2)] = inst_10516);
(statearr_10572_10621[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (17)))
{var inst_10482 = (state_10548[(8)]);var inst_10493 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_10482);var state_10548__$1 = state_10548;var statearr_10573_10622 = state_10548__$1;(statearr_10573_10622[(2)] = inst_10493);
(statearr_10573_10622[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (3)))
{var inst_10546 = (state_10548[(2)]);var state_10548__$1 = state_10548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10548__$1,inst_10546);
} else
{if((state_val_10549 === (12)))
{var inst_10471 = (state_10548[(15)]);var inst_10538 = cljs.core.println.call(null,inst_10471);var state_10548__$1 = state_10548;var statearr_10574_10623 = state_10548__$1;(statearr_10574_10623[(2)] = inst_10538);
(statearr_10574_10623[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (2)))
{var state_10548__$1 = state_10548;var statearr_10575_10624 = state_10548__$1;(statearr_10575_10624[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (23)))
{var inst_10505 = (state_10548[(10)]);var inst_10499 = (state_10548[(11)]);var inst_10512 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_10499,inst_10505);var state_10548__$1 = state_10548;var statearr_10577_10625 = state_10548__$1;(statearr_10577_10625[(2)] = inst_10512);
(statearr_10577_10625[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (19)))
{var inst_10534 = (state_10548[(2)]);var state_10548__$1 = state_10548;var statearr_10578_10626 = state_10548__$1;(statearr_10578_10626[(2)] = inst_10534);
(statearr_10578_10626[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (11)))
{var inst_10474 = (state_10548[(16)]);var inst_10481 = (state_10548[(12)]);var inst_10481__$1 = cljs.core.nth.call(null,inst_10474,(0),null);var inst_10482 = cljs.core.nth.call(null,inst_10474,(1),null);var inst_10486 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_10481__$1);var state_10548__$1 = (function (){var statearr_10579 = state_10548;(statearr_10579[(8)] = inst_10482);
(statearr_10579[(12)] = inst_10481__$1);
return statearr_10579;
})();if(inst_10486)
{var statearr_10580_10627 = state_10548__$1;(statearr_10580_10627[(1)] = (14));
} else
{var statearr_10581_10628 = state_10548__$1;(statearr_10581_10628[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (9)))
{var inst_10462 = (state_10548[(7)]);var state_10548__$1 = state_10548;var statearr_10582_10629 = state_10548__$1;(statearr_10582_10629[(2)] = inst_10462);
(statearr_10582_10629[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (5)))
{var state_10548__$1 = state_10548;var statearr_10583_10630 = state_10548__$1;(statearr_10583_10630[(2)] = null);
(statearr_10583_10630[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (14)))
{var inst_10482 = (state_10548[(8)]);var inst_10488 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_10482);var inst_10489 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_10548__$1 = (function (){var statearr_10584 = state_10548;(statearr_10584[(17)] = inst_10488);
return statearr_10584;
})();var statearr_10585_10631 = state_10548__$1;(statearr_10585_10631[(2)] = inst_10489);
(statearr_10585_10631[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (26)))
{var inst_10482 = (state_10548[(8)]);var inst_10520 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_10482);var state_10548__$1 = state_10548;var statearr_10586_10632 = state_10548__$1;(statearr_10586_10632[(2)] = inst_10520);
(statearr_10586_10632[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (16)))
{var inst_10536 = (state_10548[(2)]);var state_10548__$1 = state_10548;var statearr_10587_10633 = state_10548__$1;(statearr_10587_10633[(2)] = inst_10536);
(statearr_10587_10633[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (30)))
{var inst_10471 = (state_10548[(15)]);var inst_10526 = cljs.core.println.call(null,inst_10471);var state_10548__$1 = state_10548;var statearr_10588_10634 = state_10548__$1;(statearr_10588_10634[(2)] = inst_10526);
(statearr_10588_10634[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (10)))
{var inst_10471 = (state_10548[(15)]);var inst_10468 = (state_10548[(2)]);var inst_10469 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_10470 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_10471__$1 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"event","event",301435442));var inst_10472 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_10473 = cljs.core.nth.call(null,inst_10471__$1,(0),null);var inst_10474 = cljs.core.nth.call(null,inst_10471__$1,(1),null);var inst_10478 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_10473);var state_10548__$1 = (function (){var statearr_10589 = state_10548;(statearr_10589[(18)] = inst_10470);
(statearr_10589[(15)] = inst_10471__$1);
(statearr_10589[(19)] = inst_10469);
(statearr_10589[(16)] = inst_10474);
(statearr_10589[(20)] = inst_10472);
return statearr_10589;
})();if(inst_10478)
{var statearr_10590_10635 = state_10548__$1;(statearr_10590_10635[(1)] = (11));
} else
{var statearr_10591_10636 = state_10548__$1;(statearr_10591_10636[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (18)))
{var inst_10481 = (state_10548[(12)]);var inst_10495 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_10481);var state_10548__$1 = state_10548;if(inst_10495)
{var statearr_10592_10637 = state_10548__$1;(statearr_10592_10637[(1)] = (20));
} else
{var statearr_10593_10638 = state_10548__$1;(statearr_10593_10638[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10549 === (8)))
{var inst_10462 = (state_10548[(7)]);var inst_10465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10462);var state_10548__$1 = state_10548;var statearr_10594_10639 = state_10548__$1;(statearr_10594_10639[(2)] = inst_10465);
(statearr_10594_10639[(1)] = (10));
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
});})(c__6514__auto___10602))
;return ((function (switch__6499__auto__,c__6514__auto___10602){
return (function() {
var state_machine__6500__auto__ = null;
var state_machine__6500__auto____0 = (function (){var statearr_10598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10598[(0)] = state_machine__6500__auto__);
(statearr_10598[(1)] = (1));
return statearr_10598;
});
var state_machine__6500__auto____1 = (function (state_10548){while(true){
var ret_value__6501__auto__ = (function (){try{while(true){
var result__6502__auto__ = switch__6499__auto__.call(null,state_10548);if(cljs.core.keyword_identical_QMARK_.call(null,result__6502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6502__auto__;
}
break;
}
}catch (e10599){if((e10599 instanceof Object))
{var ex__6503__auto__ = e10599;var statearr_10600_10640 = state_10548;(statearr_10600_10640[(5)] = ex__6503__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10641 = state_10548;
state_10548 = G__10641;
continue;
}
} else
{return ret_value__6501__auto__;
}
break;
}
});
state_machine__6500__auto__ = function(state_10548){
switch(arguments.length){
case 0:
return state_machine__6500__auto____0.call(this);
case 1:
return state_machine__6500__auto____1.call(this,state_10548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6500__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6500__auto____0;
state_machine__6500__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6500__auto____1;
return state_machine__6500__auto__;
})()
;})(switch__6499__auto__,c__6514__auto___10602))
})();var state__6516__auto__ = (function (){var statearr_10601 = f__6515__auto__.call(null);(statearr_10601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6514__auto___10602);
return statearr_10601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6516__auto__);
});})(c__6514__auto___10602))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__10642_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__10642_SHARP_);
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
rummikub_cljs.web.color_str = (function color_str(p__10643){var vec__10645 = p__10643;var r = cljs.core.nth.call(null,vec__10645,(0),null);var g = cljs.core.nth.call(null,vec__10645,(1),null);var b = cljs.core.nth.call(null,vec__10645,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function type_chat(event){var val = event.target.value;return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function new_chat(){var val = document.getElementById("new-chat").value;var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");
return false;
});
rummikub_cljs.web.scroll_box = (function scroll_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__10648){var map__10649 = p__10648;var map__10649__$1 = ((cljs.core.seq_QMARK_.call(null,map__10649))?cljs.core.apply.call(null,cljs.core.hash_map,map__10649):map__10649);var content = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
});
rummikub_cljs.web.scroll_to_bottom = (function scroll_to_bottom(this$){var node = this$.getDOMNode();return node.scrollTop = node.scrollHeight;
});
rummikub_cljs.web.scroll_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.scroll_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box2], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10650_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__10650_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Minimize",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,false);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Edit Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_users_QMARK_,true);
})], null)], null)], null)], null);
});
rummikub_cljs.web.minimized_chat_box = (function minimized_chat_box(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);
})], null),"X"], null);
});
rummikub_cljs.web.show_chat_QMARK_ = reagent.core.atom.call(null,true);
rummikub_cljs.web.dragging_tile = reagent.core.atom.call(null,null);
rummikub_cljs.web.play_sound = (function play_sound(){var G__10652 = document.getElementById("yourAudioTag");G__10652.load();
G__10652.play();
return G__10652;
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__10655 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__10655__$1 = ((cljs.core.seq_QMARK_.call(null,map__10655))?cljs.core.apply.call(null,cljs.core.hash_map,map__10655):map__10655);var this_player = cljs.core.get.call(null,map__10655__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__10656 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__10656__$1 = ((cljs.core.seq_QMARK_.call(null,map__10656))?cljs.core.apply.call(null,cljs.core.hash_map,map__10656):map__10656);var color = cljs.core.get.call(null,map__10656__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10656__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10655,map__10655__$1,this_player,map__10656,map__10656__$1,color,user){
return (function (){rummikub_cljs.web.play_sound.call(null);
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});})(map__10655,map__10655__$1,this_player,map__10656,map__10656__$1,color,user))
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
var animate__2 = (function (k,points){var vec__10664 = k.split(" ");var color = cljs.core.nth.call(null,vec__10664,(0),null);var value = cljs.core.nth.call(null,vec__10664,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__10665 = cljs.core.seq.call(null,points);var chunk__10666 = null;var count__10667 = (0);var i__10668 = (0);while(true){
if((i__10668 < count__10667))
{var vec__10669 = cljs.core._nth.call(null,chunk__10666,i__10668);var x = cljs.core.nth.call(null,vec__10669,(0),null);var y = cljs.core.nth.call(null,vec__10669,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__10671 = seq__10665;
var G__10672 = chunk__10666;
var G__10673 = count__10667;
var G__10674 = (i__10668 + (1));
seq__10665 = G__10671;
chunk__10666 = G__10672;
count__10667 = G__10673;
i__10668 = G__10674;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__10665);if(temp__4222__auto__)
{var seq__10665__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10665__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__10665__$1);{
var G__10675 = cljs.core.chunk_rest.call(null,seq__10665__$1);
var G__10676 = c__4316__auto__;
var G__10677 = cljs.core.count.call(null,c__4316__auto__);
var G__10678 = (0);
seq__10665 = G__10675;
chunk__10666 = G__10676;
count__10667 = G__10677;
i__10668 = G__10678;
continue;
}
} else
{var vec__10670 = cljs.core.first.call(null,seq__10665__$1);var x = cljs.core.nth.call(null,vec__10670,(0),null);var y = cljs.core.nth.call(null,vec__10670,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__10679 = cljs.core.next.call(null,seq__10665__$1);
var G__10680 = null;
var G__10681 = (0);
var G__10682 = (0);
seq__10665 = G__10679;
chunk__10666 = G__10680;
count__10667 = G__10681;
i__10668 = G__10682;
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
rummikub_cljs.web.before_update = (function before_update(_,p__10683){var vec__10685 = p__10683;var ___$1 = cljs.core.nth.call(null,vec__10685,(0),null);var k = cljs.core.nth.call(null,vec__10685,(1),null);return rummikub_cljs.web.animate.call(null,k);
});
rummikub_cljs.web.table_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.table_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),rummikub_cljs.web.before_update], null));
rummikub_cljs.web.stand_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.stand_box,cljs.core.PersistentArrayMap.EMPTY);
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__10686_SHARP_){return p1__10686_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__10687_SHARP_){return p1__10687_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__10688_SHARP_){var vec__10702 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__10702,(0),null);var tile = cljs.core.nth.call(null,vec__10702,(1),null);var x = (p1__10688_SHARP_.clientX - (17));var y = (p1__10688_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__10703(s__10704){return (new cljs.core.LazySeq(null,(function (){var s__10704__$1 = s__10704;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10704__$1);if(temp__4222__auto__)
{var s__10704__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10704__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10704__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10706 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10705 = (0);while(true){
if((i__10705 < size__4284__auto__))
{var vec__10711 = cljs.core._nth.call(null,c__4283__auto__,i__10705);var k = cljs.core.nth.call(null,vec__10711,(0),null);var tile = cljs.core.nth.call(null,vec__10711,(1),null);var map__10712 = tile;var map__10712__$1 = ((cljs.core.seq_QMARK_.call(null,map__10712))?cljs.core.apply.call(null,cljs.core.hash_map,map__10712):map__10712);var value = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__10706,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box2,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__10715 = (i__10705 + (1));
i__10705 = G__10715;
continue;
}
} else
{{
var G__10716 = (i__10705 + (1));
i__10705 = G__10716;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10706),iter__10703.call(null,cljs.core.chunk_rest.call(null,s__10704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10706),null);
}
} else
{var vec__10713 = cljs.core.first.call(null,s__10704__$2);var k = cljs.core.nth.call(null,vec__10713,(0),null);var tile = cljs.core.nth.call(null,vec__10713,(1),null);var map__10714 = tile;var map__10714__$1 = ((cljs.core.seq_QMARK_.call(null,map__10714))?cljs.core.apply.call(null,cljs.core.hash_map,map__10714):map__10714);var value = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__10714__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box2,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__10703.call(null,cljs.core.rest.call(null,s__10704__$2)));
} else
{{
var G__10717 = cljs.core.rest.call(null,s__10704__$2);
s__10704__$1 = G__10717;
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
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__10718_SHARP_){p1__10718_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__10719_SHARP_){return p1__10719_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__10720_SHARP_){return p1__10720_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__10721_SHARP_){var vec__10736 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__10736,(0),null);var tile = cljs.core.nth.call(null,vec__10736,(1),null);var tile_x = (p1__10721_SHARP_.clientX - (20));var tile_y = (p1__10721_SHARP_.clientY - (20));var map__10737 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__10737__$1 = ((cljs.core.seq_QMARK_.call(null,map__10737))?cljs.core.apply.call(null,cljs.core.hash_map,map__10737):map__10737);var stand_x = cljs.core.get.call(null,map__10737__$1,"left");var stand_y = cljs.core.get.call(null,map__10737__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__10738(s__10739){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__10739__$1 = s__10739;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10739__$1);if(temp__4222__auto__)
{var s__10739__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10739__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10739__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10741 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10740 = (0);while(true){
if((i__10740 < size__4284__auto__))
{var vec__10746 = cljs.core._nth.call(null,c__4283__auto__,i__10740);var k = cljs.core.nth.call(null,vec__10746,(0),null);var tile = cljs.core.nth.call(null,vec__10746,(1),null);var map__10747 = tile;var map__10747__$1 = ((cljs.core.seq_QMARK_.call(null,map__10747))?cljs.core.apply.call(null,cljs.core.hash_map,map__10747):map__10747);var value = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__10747__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__10741,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box2,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__10750 = (i__10740 + (1));
i__10740 = G__10750;
continue;
}
} else
{{
var G__10751 = (i__10740 + (1));
i__10740 = G__10751;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10741),iter__10738.call(null,cljs.core.chunk_rest.call(null,s__10739__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10741),null);
}
} else
{var vec__10748 = cljs.core.first.call(null,s__10739__$2);var k = cljs.core.nth.call(null,vec__10748,(0),null);var tile = cljs.core.nth.call(null,vec__10748,(1),null);var map__10749 = tile;var map__10749__$1 = ((cljs.core.seq_QMARK_.call(null,map__10749))?cljs.core.apply.call(null,cljs.core.hash_map,map__10749):map__10749);var value = cljs.core.get.call(null,map__10749__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__10749__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__10749__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__10749__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__10749__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box2,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__10738.call(null,cljs.core.rest.call(null,s__10739__$2)));
} else
{{
var G__10752 = cljs.core.rest.call(null,s__10739__$2);
s__10739__$1 = G__10752;
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
rummikub_cljs.web.show_users_QMARK_ = reagent.core.atom.call(null,false);
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__10761(s__10762){return (new cljs.core.LazySeq(null,(function (){var s__10762__$1 = s__10762;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__10762__$1);if(temp__4222__auto__)
{var s__10762__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10762__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__10762__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__10764 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__10763 = (0);while(true){
if((i__10763 < size__4284__auto__))
{var map__10767 = cljs.core._nth.call(null,c__4283__auto__,i__10763);var map__10767__$1 = ((cljs.core.seq_QMARK_.call(null,map__10767))?cljs.core.apply.call(null,cljs.core.hash_map,map__10767):map__10767);var color = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__10764,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10763,map__10767,map__10767__$1,color,user,c__4283__auto__,size__4284__auto__,b__10764,s__10762__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__10763,map__10767,map__10767__$1,color,user,c__4283__auto__,size__4284__auto__,b__10764,s__10762__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__10769 = (i__10763 + (1));
i__10763 = G__10769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10764),iter__10761.call(null,cljs.core.chunk_rest.call(null,s__10762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10764),null);
}
} else
{var map__10768 = cljs.core.first.call(null,s__10762__$2);var map__10768__$1 = ((cljs.core.seq_QMARK_.call(null,map__10768))?cljs.core.apply.call(null,cljs.core.hash_map,map__10768):map__10768);var color = cljs.core.get.call(null,map__10768__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__10768__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__10768,map__10768__$1,color,user,s__10762__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__10768,map__10768__$1,color,user,s__10762__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__10761.call(null,cljs.core.rest.call(null,s__10762__$2)));
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
rummikub_cljs.web.contents = (function contents(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__10770_SHARP_){var x = p1__10770_SHARP_.clientX;var y = p1__10770_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__10773){var map__10774 = p__10773;var map__10774__$1 = ((cljs.core.seq_QMARK_.call(null,map__10774))?cljs.core.apply.call(null,cljs.core.hash_map,map__10774):map__10774);var user = cljs.core.get.call(null,map__10774__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
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
