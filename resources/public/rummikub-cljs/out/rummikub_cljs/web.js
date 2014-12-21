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
rummikub_cljs.web.p = (function p(p1__13452_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__13452_SHARP_));
});
var map__13453_13454 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__13453_13455__$1 = ((cljs.core.seq_QMARK_.call(null,map__13453_13454))?cljs.core.apply.call(null,cljs.core.hash_map,map__13453_13454):map__13453_13454);var state_13456 = cljs.core.get.call(null,map__13453_13455__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_13457 = cljs.core.get.call(null,map__13453_13455__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_13458 = cljs.core.get.call(null,map__13453_13455__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_13459 = cljs.core.get.call(null,map__13453_13455__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_13459;
rummikub_cljs.web.ch_chsk = ch_recv_13458;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_13457;
rummikub_cljs.web.chsk_state = state_13456;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6565__auto___13615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6565__auto___13615){
return (function (){var f__6566__auto__ = (function (){var switch__6550__auto__ = ((function (c__6565__auto___13615){
return (function (state_13557){var state_val_13558 = (state_13557[(1)]);if((state_val_13558 === (7)))
{var inst_13465 = (state_13557[(7)]);var inst_13465__$1 = (state_13557[(2)]);var inst_13466 = cljs.core.seq_QMARK_.call(null,inst_13465__$1);var state_13557__$1 = (function (){var statearr_13559 = state_13557;(statearr_13559[(7)] = inst_13465__$1);
return statearr_13559;
})();if(inst_13466)
{var statearr_13560_13616 = state_13557__$1;(statearr_13560_13616[(1)] = (8));
} else
{var statearr_13561_13617 = state_13557__$1;(statearr_13561_13617[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (20)))
{var inst_13485 = (state_13557[(8)]);var inst_13501 = cljs.core.nth.call(null,inst_13485,(0),null);var inst_13502 = cljs.core.nth.call(null,inst_13485,(1),null);var inst_13503 = cljs.core.nth.call(null,inst_13485,(2),null);var inst_13504 = cljs.core.nth.call(null,inst_13485,(3),null);var inst_13505 = cljs.core.first.call(null,inst_13503);var inst_13506 = cljs.core.last.call(null,inst_13503);var inst_13507 = cljs.core.drop_last.call(null,(1),inst_13503);var inst_13508 = cljs.core.drop.call(null,(1),inst_13507);var inst_13509 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_13510 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13509);var inst_13511 = cljs.core.not_EQ_.call(null,inst_13504,inst_13510);var inst_13512 = cljs.core._EQ_.call(null,"table",inst_13505,inst_13506);var inst_13513 = (inst_13511) && (inst_13512);var state_13557__$1 = (function (){var statearr_13562 = state_13557;(statearr_13562[(9)] = inst_13508);
(statearr_13562[(10)] = inst_13502);
(statearr_13562[(11)] = inst_13501);
return statearr_13562;
})();if(cljs.core.truth_(inst_13513))
{var statearr_13563_13618 = state_13557__$1;(statearr_13563_13618[(1)] = (23));
} else
{var statearr_13564_13619 = state_13557__$1;(statearr_13564_13619[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (27)))
{var inst_13484 = (state_13557[(12)]);var inst_13525 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_13484);var state_13557__$1 = state_13557;if(inst_13525)
{var statearr_13565_13620 = state_13557__$1;(statearr_13565_13620[(1)] = (29));
} else
{var statearr_13566_13621 = state_13557__$1;(statearr_13566_13621[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (1)))
{var state_13557__$1 = state_13557;var statearr_13567_13622 = state_13557__$1;(statearr_13567_13622[(2)] = null);
(statearr_13567_13622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (24)))
{var state_13557__$1 = state_13557;var statearr_13568_13623 = state_13557__$1;(statearr_13568_13623[(2)] = null);
(statearr_13568_13623[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (4)))
{var state_13557__$1 = state_13557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13557__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_13558 === (15)))
{var inst_13484 = (state_13557[(12)]);var inst_13494 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_13484);var state_13557__$1 = state_13557;if(inst_13494)
{var statearr_13569_13624 = state_13557__$1;(statearr_13569_13624[(1)] = (17));
} else
{var statearr_13570_13625 = state_13557__$1;(statearr_13570_13625[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (21)))
{var inst_13484 = (state_13557[(12)]);var inst_13521 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_13484);var state_13557__$1 = state_13557;if(inst_13521)
{var statearr_13571_13626 = state_13557__$1;(statearr_13571_13626[(1)] = (26));
} else
{var statearr_13572_13627 = state_13557__$1;(statearr_13572_13627[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (31)))
{var inst_13537 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13573_13628 = state_13557__$1;(statearr_13573_13628[(2)] = inst_13537);
(statearr_13573_13628[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (32)))
{var inst_13531 = rummikub_cljs.web.play_sound.call(null);var state_13557__$1 = state_13557;var statearr_13574_13629 = state_13557__$1;(statearr_13574_13629[(2)] = inst_13531);
(statearr_13574_13629[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (33)))
{var inst_13474 = (state_13557[(13)]);var inst_13533 = cljs.core.println.call(null,inst_13474);var state_13557__$1 = state_13557;var statearr_13575_13630 = state_13557__$1;(statearr_13575_13630[(2)] = inst_13533);
(statearr_13575_13630[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (13)))
{var inst_13549 = (state_13557[(2)]);var state_13557__$1 = (function (){var statearr_13576 = state_13557;(statearr_13576[(14)] = inst_13549);
return statearr_13576;
})();var statearr_13577_13631 = state_13557__$1;(statearr_13577_13631[(2)] = null);
(statearr_13577_13631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (22)))
{var inst_13541 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13578_13632 = state_13557__$1;(statearr_13578_13632[(2)] = inst_13541);
(statearr_13578_13632[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (29)))
{var inst_13485 = (state_13557[(8)]);var inst_13527 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_13485);var state_13557__$1 = state_13557;var statearr_13579_13633 = state_13557__$1;(statearr_13579_13633[(2)] = inst_13527);
(statearr_13579_13633[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (6)))
{var inst_13553 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13580_13634 = state_13557__$1;(statearr_13580_13634[(2)] = inst_13553);
(statearr_13580_13634[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (28)))
{var inst_13539 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13581_13635 = state_13557__$1;(statearr_13581_13635[(2)] = inst_13539);
(statearr_13581_13635[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (25)))
{var inst_13501 = (state_13557[(11)]);var inst_13518 = (state_13557[(2)]);var inst_13519 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_13501);var state_13557__$1 = (function (){var statearr_13582 = state_13557;(statearr_13582[(15)] = inst_13518);
return statearr_13582;
})();var statearr_13583_13636 = state_13557__$1;(statearr_13583_13636[(2)] = inst_13519);
(statearr_13583_13636[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (34)))
{var inst_13535 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13584_13637 = state_13557__$1;(statearr_13584_13637[(2)] = inst_13535);
(statearr_13584_13637[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (17)))
{var inst_13485 = (state_13557[(8)]);var inst_13496 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_13485);var state_13557__$1 = state_13557;var statearr_13585_13638 = state_13557__$1;(statearr_13585_13638[(2)] = inst_13496);
(statearr_13585_13638[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (3)))
{var inst_13555 = (state_13557[(2)]);var state_13557__$1 = state_13557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13557__$1,inst_13555);
} else
{if((state_val_13558 === (12)))
{var inst_13474 = (state_13557[(13)]);var inst_13547 = cljs.core.println.call(null,inst_13474);var state_13557__$1 = state_13557;var statearr_13586_13639 = state_13557__$1;(statearr_13586_13639[(2)] = inst_13547);
(statearr_13586_13639[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (2)))
{var state_13557__$1 = state_13557;var statearr_13587_13640 = state_13557__$1;(statearr_13587_13640[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (23)))
{var inst_13508 = (state_13557[(9)]);var inst_13502 = (state_13557[(10)]);var inst_13515 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_13502,inst_13508);var state_13557__$1 = state_13557;var statearr_13589_13641 = state_13557__$1;(statearr_13589_13641[(2)] = inst_13515);
(statearr_13589_13641[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (19)))
{var inst_13543 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13590_13642 = state_13557__$1;(statearr_13590_13642[(2)] = inst_13543);
(statearr_13590_13642[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (11)))
{var inst_13477 = (state_13557[(16)]);var inst_13484 = (state_13557[(12)]);var inst_13484__$1 = cljs.core.nth.call(null,inst_13477,(0),null);var inst_13485 = cljs.core.nth.call(null,inst_13477,(1),null);var inst_13489 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_13484__$1);var state_13557__$1 = (function (){var statearr_13591 = state_13557;(statearr_13591[(12)] = inst_13484__$1);
(statearr_13591[(8)] = inst_13485);
return statearr_13591;
})();if(inst_13489)
{var statearr_13592_13643 = state_13557__$1;(statearr_13592_13643[(1)] = (14));
} else
{var statearr_13593_13644 = state_13557__$1;(statearr_13593_13644[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (9)))
{var inst_13465 = (state_13557[(7)]);var state_13557__$1 = state_13557;var statearr_13594_13645 = state_13557__$1;(statearr_13594_13645[(2)] = inst_13465);
(statearr_13594_13645[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (5)))
{var state_13557__$1 = state_13557;var statearr_13595_13646 = state_13557__$1;(statearr_13595_13646[(2)] = null);
(statearr_13595_13646[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (14)))
{var inst_13485 = (state_13557[(8)]);var inst_13491 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_13485);var inst_13492 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_13557__$1 = (function (){var statearr_13596 = state_13557;(statearr_13596[(17)] = inst_13491);
return statearr_13596;
})();var statearr_13597_13647 = state_13557__$1;(statearr_13597_13647[(2)] = inst_13492);
(statearr_13597_13647[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (26)))
{var inst_13485 = (state_13557[(8)]);var inst_13523 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_13485);var state_13557__$1 = state_13557;var statearr_13598_13648 = state_13557__$1;(statearr_13598_13648[(2)] = inst_13523);
(statearr_13598_13648[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (16)))
{var inst_13545 = (state_13557[(2)]);var state_13557__$1 = state_13557;var statearr_13599_13649 = state_13557__$1;(statearr_13599_13649[(2)] = inst_13545);
(statearr_13599_13649[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (30)))
{var inst_13484 = (state_13557[(12)]);var inst_13529 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),inst_13484);var state_13557__$1 = state_13557;if(inst_13529)
{var statearr_13600_13650 = state_13557__$1;(statearr_13600_13650[(1)] = (32));
} else
{var statearr_13601_13651 = state_13557__$1;(statearr_13601_13651[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (10)))
{var inst_13474 = (state_13557[(13)]);var inst_13471 = (state_13557[(2)]);var inst_13472 = cljs.core.get.call(null,inst_13471,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_13473 = cljs.core.get.call(null,inst_13471,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_13474__$1 = cljs.core.get.call(null,inst_13471,new cljs.core.Keyword(null,"event","event",301435442));var inst_13475 = cljs.core.get.call(null,inst_13471,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_13476 = cljs.core.nth.call(null,inst_13474__$1,(0),null);var inst_13477 = cljs.core.nth.call(null,inst_13474__$1,(1),null);var inst_13481 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_13476);var state_13557__$1 = (function (){var statearr_13602 = state_13557;(statearr_13602[(16)] = inst_13477);
(statearr_13602[(13)] = inst_13474__$1);
(statearr_13602[(18)] = inst_13472);
(statearr_13602[(19)] = inst_13473);
(statearr_13602[(20)] = inst_13475);
return statearr_13602;
})();if(inst_13481)
{var statearr_13603_13652 = state_13557__$1;(statearr_13603_13652[(1)] = (11));
} else
{var statearr_13604_13653 = state_13557__$1;(statearr_13604_13653[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (18)))
{var inst_13484 = (state_13557[(12)]);var inst_13498 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_13484);var state_13557__$1 = state_13557;if(inst_13498)
{var statearr_13605_13654 = state_13557__$1;(statearr_13605_13654[(1)] = (20));
} else
{var statearr_13606_13655 = state_13557__$1;(statearr_13606_13655[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13558 === (8)))
{var inst_13465 = (state_13557[(7)]);var inst_13468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13465);var state_13557__$1 = state_13557;var statearr_13607_13656 = state_13557__$1;(statearr_13607_13656[(2)] = inst_13468);
(statearr_13607_13656[(1)] = (10));
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
});})(c__6565__auto___13615))
;return ((function (switch__6550__auto__,c__6565__auto___13615){
return (function() {
var state_machine__6551__auto__ = null;
var state_machine__6551__auto____0 = (function (){var statearr_13611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13611[(0)] = state_machine__6551__auto__);
(statearr_13611[(1)] = (1));
return statearr_13611;
});
var state_machine__6551__auto____1 = (function (state_13557){while(true){
var ret_value__6552__auto__ = (function (){try{while(true){
var result__6553__auto__ = switch__6550__auto__.call(null,state_13557);if(cljs.core.keyword_identical_QMARK_.call(null,result__6553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6553__auto__;
}
break;
}
}catch (e13612){if((e13612 instanceof Object))
{var ex__6554__auto__ = e13612;var statearr_13613_13657 = state_13557;(statearr_13613_13657[(5)] = ex__6554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13658 = state_13557;
state_13557 = G__13658;
continue;
}
} else
{return ret_value__6552__auto__;
}
break;
}
});
state_machine__6551__auto__ = function(state_13557){
switch(arguments.length){
case 0:
return state_machine__6551__auto____0.call(this);
case 1:
return state_machine__6551__auto____1.call(this,state_13557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6551__auto____0;
state_machine__6551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6551__auto____1;
return state_machine__6551__auto__;
})()
;})(switch__6550__auto__,c__6565__auto___13615))
})();var state__6567__auto__ = (function (){var statearr_13614 = f__6566__auto__.call(null);(statearr_13614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6565__auto___13615);
return statearr_13614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6567__auto__);
});})(c__6565__auto___13615))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__13659_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__13659_SHARP_);
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
rummikub_cljs.web.color_str = (function color_str(p__13660){var vec__13662 = p__13660;var r = cljs.core.nth.call(null,vec__13662,(0),null);var g = cljs.core.nth.call(null,vec__13662,(1),null);var b = cljs.core.nth.call(null,vec__13662,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
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
rummikub_cljs.web.scroll_box = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__13663){var map__13664 = p__13663;var map__13664__$1 = ((cljs.core.seq_QMARK_.call(null,map__13664))?cljs.core.apply.call(null,cljs.core.hash_map,map__13664):map__13664);var content = cljs.core.get.call(null,map__13664__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__13664__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13664__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13665_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__13665_SHARP_.target.value);
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
rummikub_cljs.web.pass_ints = cljs.core.concat.call(null,cljs.core.repeat.call(null,(44),(0)),cljs.core.range.call(null,(6)));
rummikub_cljs.web.play_sound = (function play_sound(){var G__13667 = document.getElementById(rummikub_cljs.core.format.call(null,"pass%s",cljs.core.rand_nth.call(null,rummikub_cljs.web.pass_ints)));G__13667.load();
G__13667.play();
return G__13667;
});
rummikub_cljs.web.pass = (function pass(){rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),null], null));
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__13670 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__13670__$1 = ((cljs.core.seq_QMARK_.call(null,map__13670))?cljs.core.apply.call(null,cljs.core.hash_map,map__13670):map__13670);var this_player = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__13671 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__13671__$1 = ((cljs.core.seq_QMARK_.call(null,map__13671))?cljs.core.apply.call(null,cljs.core.hash_map,map__13671):map__13671);var color = cljs.core.get.call(null,map__13671__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13671__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rummikub_cljs.web.pass], null)], null):null)], null);
});
rummikub_cljs.web.stand_box = (function stand_box(k,i,j,tile,user,value,color){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",(i * (24)),"20px","absolute","1px solid black","20px",(j * (24)),"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,user),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
});
rummikub_cljs.web.before_update = (function before_update(_,p__13672){var vec__13674 = p__13672;var ___$1 = cljs.core.nth.call(null,vec__13674,(0),null);var k = cljs.core.nth.call(null,vec__13674,(1),null);return rummikub_cljs.web.animate.call(null,k);
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
var animate__2 = (function (k,points){var vec__13682 = k.split(" ");var color = cljs.core.nth.call(null,vec__13682,(0),null);var value = cljs.core.nth.call(null,vec__13682,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__13683 = cljs.core.seq.call(null,points);var chunk__13684 = null;var count__13685 = (0);var i__13686 = (0);while(true){
if((i__13686 < count__13685))
{var vec__13687 = cljs.core._nth.call(null,chunk__13684,i__13686);var x = cljs.core.nth.call(null,vec__13687,(0),null);var y = cljs.core.nth.call(null,vec__13687,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__13689 = seq__13683;
var G__13690 = chunk__13684;
var G__13691 = count__13685;
var G__13692 = (i__13686 + (1));
seq__13683 = G__13689;
chunk__13684 = G__13690;
count__13685 = G__13691;
i__13686 = G__13692;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__13683);if(temp__4222__auto__)
{var seq__13683__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13683__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__13683__$1);{
var G__13693 = cljs.core.chunk_rest.call(null,seq__13683__$1);
var G__13694 = c__4316__auto__;
var G__13695 = cljs.core.count.call(null,c__4316__auto__);
var G__13696 = (0);
seq__13683 = G__13693;
chunk__13684 = G__13694;
count__13685 = G__13695;
i__13686 = G__13696;
continue;
}
} else
{var vec__13688 = cljs.core.first.call(null,seq__13683__$1);var x = cljs.core.nth.call(null,vec__13688,(0),null);var y = cljs.core.nth.call(null,vec__13688,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__13697 = cljs.core.next.call(null,seq__13683__$1);
var G__13698 = null;
var G__13699 = (0);
var G__13700 = (0);
seq__13683 = G__13697;
chunk__13684 = G__13698;
count__13685 = G__13699;
i__13686 = G__13700;
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
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__13701_SHARP_){return p1__13701_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__13702_SHARP_){return p1__13702_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__13703_SHARP_){var vec__13717 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__13717,(0),null);var tile = cljs.core.nth.call(null,vec__13717,(1),null);var x = (p1__13703_SHARP_.clientX - (17));var y = (p1__13703_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__13718(s__13719){return (new cljs.core.LazySeq(null,(function (){var s__13719__$1 = s__13719;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13719__$1);if(temp__4222__auto__)
{var s__13719__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13719__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13719__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13721 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13720 = (0);while(true){
if((i__13720 < size__4284__auto__))
{var vec__13726 = cljs.core._nth.call(null,c__4283__auto__,i__13720);var k = cljs.core.nth.call(null,vec__13726,(0),null);var tile = cljs.core.nth.call(null,vec__13726,(1),null);var map__13727 = tile;var map__13727__$1 = ((cljs.core.seq_QMARK_.call(null,map__13727))?cljs.core.apply.call(null,cljs.core.hash_map,map__13727):map__13727);var value = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__13721,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__13730 = (i__13720 + (1));
i__13720 = G__13730;
continue;
}
} else
{{
var G__13731 = (i__13720 + (1));
i__13720 = G__13731;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13721),iter__13718.call(null,cljs.core.chunk_rest.call(null,s__13719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13721),null);
}
} else
{var vec__13728 = cljs.core.first.call(null,s__13719__$2);var k = cljs.core.nth.call(null,vec__13728,(0),null);var tile = cljs.core.nth.call(null,vec__13728,(1),null);var map__13729 = tile;var map__13729__$1 = ((cljs.core.seq_QMARK_.call(null,map__13729))?cljs.core.apply.call(null,cljs.core.hash_map,map__13729):map__13729);var value = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__13718.call(null,cljs.core.rest.call(null,s__13719__$2)));
} else
{{
var G__13732 = cljs.core.rest.call(null,s__13719__$2);
s__13719__$1 = G__13732;
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
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__13733_SHARP_){p1__13733_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__13734_SHARP_){return p1__13734_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__13735_SHARP_){return p1__13735_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__13736_SHARP_){var vec__13751 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__13751,(0),null);var tile = cljs.core.nth.call(null,vec__13751,(1),null);var tile_x = (p1__13736_SHARP_.clientX - (20));var tile_y = (p1__13736_SHARP_.clientY - (20));var map__13752 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__13752__$1 = ((cljs.core.seq_QMARK_.call(null,map__13752))?cljs.core.apply.call(null,cljs.core.hash_map,map__13752):map__13752);var stand_x = cljs.core.get.call(null,map__13752__$1,"left");var stand_y = cljs.core.get.call(null,map__13752__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__13753(s__13754){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__13754__$1 = s__13754;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13754__$1);if(temp__4222__auto__)
{var s__13754__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13754__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13754__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13756 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13755 = (0);while(true){
if((i__13755 < size__4284__auto__))
{var vec__13761 = cljs.core._nth.call(null,c__4283__auto__,i__13755);var k = cljs.core.nth.call(null,vec__13761,(0),null);var tile = cljs.core.nth.call(null,vec__13761,(1),null);var map__13762 = tile;var map__13762__$1 = ((cljs.core.seq_QMARK_.call(null,map__13762))?cljs.core.apply.call(null,cljs.core.hash_map,map__13762):map__13762);var value = cljs.core.get.call(null,map__13762__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13762__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__13762__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__13762__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__13762__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__13756,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__13765 = (i__13755 + (1));
i__13755 = G__13765;
continue;
}
} else
{{
var G__13766 = (i__13755 + (1));
i__13755 = G__13766;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13756),iter__13753.call(null,cljs.core.chunk_rest.call(null,s__13754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13756),null);
}
} else
{var vec__13763 = cljs.core.first.call(null,s__13754__$2);var k = cljs.core.nth.call(null,vec__13763,(0),null);var tile = cljs.core.nth.call(null,vec__13763,(1),null);var map__13764 = tile;var map__13764__$1 = ((cljs.core.seq_QMARK_.call(null,map__13764))?cljs.core.apply.call(null,cljs.core.hash_map,map__13764):map__13764);var value = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__13753.call(null,cljs.core.rest.call(null,s__13754__$2)));
} else
{{
var G__13767 = cljs.core.rest.call(null,s__13754__$2);
s__13754__$1 = G__13767;
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
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__13776(s__13777){return (new cljs.core.LazySeq(null,(function (){var s__13777__$1 = s__13777;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13777__$1);if(temp__4222__auto__)
{var s__13777__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13777__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13777__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13779 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13778 = (0);while(true){
if((i__13778 < size__4284__auto__))
{var map__13782 = cljs.core._nth.call(null,c__4283__auto__,i__13778);var map__13782__$1 = ((cljs.core.seq_QMARK_.call(null,map__13782))?cljs.core.apply.call(null,cljs.core.hash_map,map__13782):map__13782);var color = cljs.core.get.call(null,map__13782__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13782__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__13779,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13778,map__13782,map__13782__$1,color,user,c__4283__auto__,size__4284__auto__,b__13779,s__13777__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__13778,map__13782,map__13782__$1,color,user,c__4283__auto__,size__4284__auto__,b__13779,s__13777__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__13784 = (i__13778 + (1));
i__13778 = G__13784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13779),iter__13776.call(null,cljs.core.chunk_rest.call(null,s__13777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13779),null);
}
} else
{var map__13783 = cljs.core.first.call(null,s__13777__$2);var map__13783__$1 = ((cljs.core.seq_QMARK_.call(null,map__13783))?cljs.core.apply.call(null,cljs.core.hash_map,map__13783):map__13783);var color = cljs.core.get.call(null,map__13783__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13783__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13783,map__13783__$1,color,user,s__13777__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__13783,map__13783__$1,color,user,s__13777__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__13776.call(null,cljs.core.rest.call(null,s__13777__$2)));
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
rummikub_cljs.web.contents = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__13785_SHARP_){var x = p1__13785_SHARP_.clientX;var y = p1__13785_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__13786){var map__13787 = p__13786;var map__13787__$1 = ((cljs.core.seq_QMARK_.call(null,map__13787))?cljs.core.apply.call(null,cljs.core.hash_map,map__13787):map__13787);var user = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),(function (){var iter__4285__auto__ = (function iter__13788(s__13789){return (new cljs.core.LazySeq(null,(function (){var s__13789__$1 = s__13789;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13789__$1);if(temp__4222__auto__)
{var s__13789__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13789__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13789__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13791 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13790 = (0);while(true){
if((i__13790 < size__4284__auto__))
{var i = cljs.core._nth.call(null,c__4283__auto__,i__13790);cljs.core.chunk_append.call(null,b__13791,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),("pass"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),rummikub_cljs.core.format.call(null,"/pass%s.wav",i),new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("pass"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null)));
{
var G__13792 = (i__13790 + (1));
i__13790 = G__13792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13791),iter__13788.call(null,cljs.core.chunk_rest.call(null,s__13789__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13791),null);
}
} else
{var i = cljs.core.first.call(null,s__13789__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),("pass"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),rummikub_cljs.core.format.call(null,"/pass%s.wav",i),new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("pass"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i))], null)),iter__13788.call(null,cljs.core.rest.call(null,s__13789__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4285__auto__.call(null,cljs.core.range.call(null,(6)));
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){key("enter",(function (){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),cljs.core.deref.call(null,rummikub_cljs.web.current_player)))
{return rummikub_cljs.web.pass.call(null);
} else
{return null;
}
}));
return key("p",(function (){return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pick-up","rummikub/pick-up",-386756038),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null));
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
