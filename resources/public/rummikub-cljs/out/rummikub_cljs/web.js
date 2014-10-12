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
rummikub_cljs.web.p = (function p(p1__13524_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__13524_SHARP_));
});
var map__13525_13526 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__13525_13527__$1 = ((cljs.core.seq_QMARK_.call(null,map__13525_13526))?cljs.core.apply.call(null,cljs.core.hash_map,map__13525_13526):map__13525_13526);var state_13528 = cljs.core.get.call(null,map__13525_13527__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_13529 = cljs.core.get.call(null,map__13525_13527__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_13530 = cljs.core.get.call(null,map__13525_13527__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_13531 = cljs.core.get.call(null,map__13525_13527__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_13531;
rummikub_cljs.web.ch_chsk = ch_recv_13530;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_13529;
rummikub_cljs.web.chsk_state = state_13528;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6565__auto___13687 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6565__auto___13687){
return (function (){var f__6566__auto__ = (function (){var switch__6550__auto__ = ((function (c__6565__auto___13687){
return (function (state_13629){var state_val_13630 = (state_13629[(1)]);if((state_val_13630 === (7)))
{var inst_13537 = (state_13629[(7)]);var inst_13537__$1 = (state_13629[(2)]);var inst_13538 = cljs.core.seq_QMARK_.call(null,inst_13537__$1);var state_13629__$1 = (function (){var statearr_13631 = state_13629;(statearr_13631[(7)] = inst_13537__$1);
return statearr_13631;
})();if(inst_13538)
{var statearr_13632_13688 = state_13629__$1;(statearr_13632_13688[(1)] = (8));
} else
{var statearr_13633_13689 = state_13629__$1;(statearr_13633_13689[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (20)))
{var inst_13557 = (state_13629[(8)]);var inst_13573 = cljs.core.nth.call(null,inst_13557,(0),null);var inst_13574 = cljs.core.nth.call(null,inst_13557,(1),null);var inst_13575 = cljs.core.nth.call(null,inst_13557,(2),null);var inst_13576 = cljs.core.nth.call(null,inst_13557,(3),null);var inst_13577 = cljs.core.first.call(null,inst_13575);var inst_13578 = cljs.core.last.call(null,inst_13575);var inst_13579 = cljs.core.drop_last.call(null,(1),inst_13575);var inst_13580 = cljs.core.drop.call(null,(1),inst_13579);var inst_13581 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_13582 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13581);var inst_13583 = cljs.core.not_EQ_.call(null,inst_13576,inst_13582);var inst_13584 = cljs.core._EQ_.call(null,"table",inst_13577,inst_13578);var inst_13585 = (inst_13583) && (inst_13584);var state_13629__$1 = (function (){var statearr_13634 = state_13629;(statearr_13634[(9)] = inst_13573);
(statearr_13634[(10)] = inst_13580);
(statearr_13634[(11)] = inst_13574);
return statearr_13634;
})();if(cljs.core.truth_(inst_13585))
{var statearr_13635_13690 = state_13629__$1;(statearr_13635_13690[(1)] = (23));
} else
{var statearr_13636_13691 = state_13629__$1;(statearr_13636_13691[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (27)))
{var inst_13556 = (state_13629[(12)]);var inst_13597 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_13556);var state_13629__$1 = state_13629;if(inst_13597)
{var statearr_13637_13692 = state_13629__$1;(statearr_13637_13692[(1)] = (29));
} else
{var statearr_13638_13693 = state_13629__$1;(statearr_13638_13693[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (1)))
{var state_13629__$1 = state_13629;var statearr_13639_13694 = state_13629__$1;(statearr_13639_13694[(2)] = null);
(statearr_13639_13694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (24)))
{var state_13629__$1 = state_13629;var statearr_13640_13695 = state_13629__$1;(statearr_13640_13695[(2)] = null);
(statearr_13640_13695[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (4)))
{var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13629__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_13630 === (15)))
{var inst_13556 = (state_13629[(12)]);var inst_13566 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_13556);var state_13629__$1 = state_13629;if(inst_13566)
{var statearr_13641_13696 = state_13629__$1;(statearr_13641_13696[(1)] = (17));
} else
{var statearr_13642_13697 = state_13629__$1;(statearr_13642_13697[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (21)))
{var inst_13556 = (state_13629[(12)]);var inst_13593 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_13556);var state_13629__$1 = state_13629;if(inst_13593)
{var statearr_13643_13698 = state_13629__$1;(statearr_13643_13698[(1)] = (26));
} else
{var statearr_13644_13699 = state_13629__$1;(statearr_13644_13699[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (31)))
{var inst_13609 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13645_13700 = state_13629__$1;(statearr_13645_13700[(2)] = inst_13609);
(statearr_13645_13700[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (32)))
{var inst_13603 = rummikub_cljs.web.play_sound.call(null);var state_13629__$1 = state_13629;var statearr_13646_13701 = state_13629__$1;(statearr_13646_13701[(2)] = inst_13603);
(statearr_13646_13701[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (33)))
{var inst_13546 = (state_13629[(13)]);var inst_13605 = cljs.core.println.call(null,inst_13546);var state_13629__$1 = state_13629;var statearr_13647_13702 = state_13629__$1;(statearr_13647_13702[(2)] = inst_13605);
(statearr_13647_13702[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (13)))
{var inst_13621 = (state_13629[(2)]);var state_13629__$1 = (function (){var statearr_13648 = state_13629;(statearr_13648[(14)] = inst_13621);
return statearr_13648;
})();var statearr_13649_13703 = state_13629__$1;(statearr_13649_13703[(2)] = null);
(statearr_13649_13703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (22)))
{var inst_13613 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13650_13704 = state_13629__$1;(statearr_13650_13704[(2)] = inst_13613);
(statearr_13650_13704[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (29)))
{var inst_13557 = (state_13629[(8)]);var inst_13599 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_13557);var state_13629__$1 = state_13629;var statearr_13651_13705 = state_13629__$1;(statearr_13651_13705[(2)] = inst_13599);
(statearr_13651_13705[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (6)))
{var inst_13625 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13652_13706 = state_13629__$1;(statearr_13652_13706[(2)] = inst_13625);
(statearr_13652_13706[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (28)))
{var inst_13611 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13653_13707 = state_13629__$1;(statearr_13653_13707[(2)] = inst_13611);
(statearr_13653_13707[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (25)))
{var inst_13573 = (state_13629[(9)]);var inst_13590 = (state_13629[(2)]);var inst_13591 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_13573);var state_13629__$1 = (function (){var statearr_13654 = state_13629;(statearr_13654[(15)] = inst_13590);
return statearr_13654;
})();var statearr_13655_13708 = state_13629__$1;(statearr_13655_13708[(2)] = inst_13591);
(statearr_13655_13708[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (34)))
{var inst_13607 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13656_13709 = state_13629__$1;(statearr_13656_13709[(2)] = inst_13607);
(statearr_13656_13709[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (17)))
{var inst_13557 = (state_13629[(8)]);var inst_13568 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_13557);var state_13629__$1 = state_13629;var statearr_13657_13710 = state_13629__$1;(statearr_13657_13710[(2)] = inst_13568);
(statearr_13657_13710[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (3)))
{var inst_13627 = (state_13629[(2)]);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13629__$1,inst_13627);
} else
{if((state_val_13630 === (12)))
{var inst_13546 = (state_13629[(13)]);var inst_13619 = cljs.core.println.call(null,inst_13546);var state_13629__$1 = state_13629;var statearr_13658_13711 = state_13629__$1;(statearr_13658_13711[(2)] = inst_13619);
(statearr_13658_13711[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (2)))
{var state_13629__$1 = state_13629;var statearr_13659_13712 = state_13629__$1;(statearr_13659_13712[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (23)))
{var inst_13580 = (state_13629[(10)]);var inst_13574 = (state_13629[(11)]);var inst_13587 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_13574,inst_13580);var state_13629__$1 = state_13629;var statearr_13661_13713 = state_13629__$1;(statearr_13661_13713[(2)] = inst_13587);
(statearr_13661_13713[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (19)))
{var inst_13615 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13662_13714 = state_13629__$1;(statearr_13662_13714[(2)] = inst_13615);
(statearr_13662_13714[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (11)))
{var inst_13549 = (state_13629[(16)]);var inst_13556 = (state_13629[(12)]);var inst_13556__$1 = cljs.core.nth.call(null,inst_13549,(0),null);var inst_13557 = cljs.core.nth.call(null,inst_13549,(1),null);var inst_13561 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_13556__$1);var state_13629__$1 = (function (){var statearr_13663 = state_13629;(statearr_13663[(8)] = inst_13557);
(statearr_13663[(12)] = inst_13556__$1);
return statearr_13663;
})();if(inst_13561)
{var statearr_13664_13715 = state_13629__$1;(statearr_13664_13715[(1)] = (14));
} else
{var statearr_13665_13716 = state_13629__$1;(statearr_13665_13716[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (9)))
{var inst_13537 = (state_13629[(7)]);var state_13629__$1 = state_13629;var statearr_13666_13717 = state_13629__$1;(statearr_13666_13717[(2)] = inst_13537);
(statearr_13666_13717[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (5)))
{var state_13629__$1 = state_13629;var statearr_13667_13718 = state_13629__$1;(statearr_13667_13718[(2)] = null);
(statearr_13667_13718[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (14)))
{var inst_13557 = (state_13629[(8)]);var inst_13563 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_13557);var inst_13564 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_13629__$1 = (function (){var statearr_13668 = state_13629;(statearr_13668[(17)] = inst_13563);
return statearr_13668;
})();var statearr_13669_13719 = state_13629__$1;(statearr_13669_13719[(2)] = inst_13564);
(statearr_13669_13719[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (26)))
{var inst_13557 = (state_13629[(8)]);var inst_13595 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_13557);var state_13629__$1 = state_13629;var statearr_13670_13720 = state_13629__$1;(statearr_13670_13720[(2)] = inst_13595);
(statearr_13670_13720[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (16)))
{var inst_13617 = (state_13629[(2)]);var state_13629__$1 = state_13629;var statearr_13671_13721 = state_13629__$1;(statearr_13671_13721[(2)] = inst_13617);
(statearr_13671_13721[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (30)))
{var inst_13556 = (state_13629[(12)]);var inst_13601 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),inst_13556);var state_13629__$1 = state_13629;if(inst_13601)
{var statearr_13672_13722 = state_13629__$1;(statearr_13672_13722[(1)] = (32));
} else
{var statearr_13673_13723 = state_13629__$1;(statearr_13673_13723[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (10)))
{var inst_13546 = (state_13629[(13)]);var inst_13543 = (state_13629[(2)]);var inst_13544 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_13545 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_13546__$1 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"event","event",301435442));var inst_13547 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_13548 = cljs.core.nth.call(null,inst_13546__$1,(0),null);var inst_13549 = cljs.core.nth.call(null,inst_13546__$1,(1),null);var inst_13553 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_13548);var state_13629__$1 = (function (){var statearr_13674 = state_13629;(statearr_13674[(13)] = inst_13546__$1);
(statearr_13674[(18)] = inst_13544);
(statearr_13674[(16)] = inst_13549);
(statearr_13674[(19)] = inst_13545);
(statearr_13674[(20)] = inst_13547);
return statearr_13674;
})();if(inst_13553)
{var statearr_13675_13724 = state_13629__$1;(statearr_13675_13724[(1)] = (11));
} else
{var statearr_13676_13725 = state_13629__$1;(statearr_13676_13725[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (18)))
{var inst_13556 = (state_13629[(12)]);var inst_13570 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_13556);var state_13629__$1 = state_13629;if(inst_13570)
{var statearr_13677_13726 = state_13629__$1;(statearr_13677_13726[(1)] = (20));
} else
{var statearr_13678_13727 = state_13629__$1;(statearr_13678_13727[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13630 === (8)))
{var inst_13537 = (state_13629[(7)]);var inst_13540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13537);var state_13629__$1 = state_13629;var statearr_13679_13728 = state_13629__$1;(statearr_13679_13728[(2)] = inst_13540);
(statearr_13679_13728[(1)] = (10));
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
});})(c__6565__auto___13687))
;return ((function (switch__6550__auto__,c__6565__auto___13687){
return (function() {
var state_machine__6551__auto__ = null;
var state_machine__6551__auto____0 = (function (){var statearr_13683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13683[(0)] = state_machine__6551__auto__);
(statearr_13683[(1)] = (1));
return statearr_13683;
});
var state_machine__6551__auto____1 = (function (state_13629){while(true){
var ret_value__6552__auto__ = (function (){try{while(true){
var result__6553__auto__ = switch__6550__auto__.call(null,state_13629);if(cljs.core.keyword_identical_QMARK_.call(null,result__6553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6553__auto__;
}
break;
}
}catch (e13684){if((e13684 instanceof Object))
{var ex__6554__auto__ = e13684;var statearr_13685_13729 = state_13629;(statearr_13685_13729[(5)] = ex__6554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13684;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13730 = state_13629;
state_13629 = G__13730;
continue;
}
} else
{return ret_value__6552__auto__;
}
break;
}
});
state_machine__6551__auto__ = function(state_13629){
switch(arguments.length){
case 0:
return state_machine__6551__auto____0.call(this);
case 1:
return state_machine__6551__auto____1.call(this,state_13629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6551__auto____0;
state_machine__6551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6551__auto____1;
return state_machine__6551__auto__;
})()
;})(switch__6550__auto__,c__6565__auto___13687))
})();var state__6567__auto__ = (function (){var statearr_13686 = f__6566__auto__.call(null);(statearr_13686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6565__auto___13687);
return statearr_13686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6567__auto__);
});})(c__6565__auto___13687))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__13731_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__13731_SHARP_);
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
rummikub_cljs.web.color_str = (function color_str(p__13732){var vec__13734 = p__13732;var r = cljs.core.nth.call(null,vec__13734,(0),null);var g = cljs.core.nth.call(null,vec__13734,(1),null);var b = cljs.core.nth.call(null,vec__13734,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
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
rummikub_cljs.web.scroll_box = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__13735){var map__13736 = p__13735;var map__13736__$1 = ((cljs.core.seq_QMARK_.call(null,map__13736))?cljs.core.apply.call(null,cljs.core.hash_map,map__13736):map__13736);var content = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13737_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__13737_SHARP_.target.value);
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
rummikub_cljs.web.play_sound = (function play_sound(){var G__13739 = document.getElementById("yourAudioTag");G__13739.load();
G__13739.play();
return G__13739;
});
rummikub_cljs.web.pass = (function pass(){rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),null], null));
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__13742 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__13742__$1 = ((cljs.core.seq_QMARK_.call(null,map__13742))?cljs.core.apply.call(null,cljs.core.hash_map,map__13742):map__13742);var this_player = cljs.core.get.call(null,map__13742__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__13743 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__13743__$1 = ((cljs.core.seq_QMARK_.call(null,map__13743))?cljs.core.apply.call(null,cljs.core.hash_map,map__13743):map__13743);var color = cljs.core.get.call(null,map__13743__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13743__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rummikub_cljs.web.pass], null)], null):null)], null);
});
rummikub_cljs.web.stand_box = (function stand_box(k,i,j,tile,user,value,color){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",(i * (24)),"20px","absolute","1px solid black","20px",(j * (24)),"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,user),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
});
rummikub_cljs.web.before_update = (function before_update(_,p__13744){var vec__13746 = p__13744;var ___$1 = cljs.core.nth.call(null,vec__13746,(0),null);var k = cljs.core.nth.call(null,vec__13746,(1),null);return rummikub_cljs.web.animate.call(null,k);
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
var animate__2 = (function (k,points){var vec__13754 = k.split(" ");var color = cljs.core.nth.call(null,vec__13754,(0),null);var value = cljs.core.nth.call(null,vec__13754,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__13755 = cljs.core.seq.call(null,points);var chunk__13756 = null;var count__13757 = (0);var i__13758 = (0);while(true){
if((i__13758 < count__13757))
{var vec__13759 = cljs.core._nth.call(null,chunk__13756,i__13758);var x = cljs.core.nth.call(null,vec__13759,(0),null);var y = cljs.core.nth.call(null,vec__13759,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__13761 = seq__13755;
var G__13762 = chunk__13756;
var G__13763 = count__13757;
var G__13764 = (i__13758 + (1));
seq__13755 = G__13761;
chunk__13756 = G__13762;
count__13757 = G__13763;
i__13758 = G__13764;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__13755);if(temp__4222__auto__)
{var seq__13755__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13755__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__13755__$1);{
var G__13765 = cljs.core.chunk_rest.call(null,seq__13755__$1);
var G__13766 = c__4316__auto__;
var G__13767 = cljs.core.count.call(null,c__4316__auto__);
var G__13768 = (0);
seq__13755 = G__13765;
chunk__13756 = G__13766;
count__13757 = G__13767;
i__13758 = G__13768;
continue;
}
} else
{var vec__13760 = cljs.core.first.call(null,seq__13755__$1);var x = cljs.core.nth.call(null,vec__13760,(0),null);var y = cljs.core.nth.call(null,vec__13760,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__13769 = cljs.core.next.call(null,seq__13755__$1);
var G__13770 = null;
var G__13771 = (0);
var G__13772 = (0);
seq__13755 = G__13769;
chunk__13756 = G__13770;
count__13757 = G__13771;
i__13758 = G__13772;
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
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__13773_SHARP_){return p1__13773_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__13774_SHARP_){return p1__13774_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__13775_SHARP_){var vec__13789 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__13789,(0),null);var tile = cljs.core.nth.call(null,vec__13789,(1),null);var x = (p1__13775_SHARP_.clientX - (17));var y = (p1__13775_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__13790(s__13791){return (new cljs.core.LazySeq(null,(function (){var s__13791__$1 = s__13791;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13791__$1);if(temp__4222__auto__)
{var s__13791__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13791__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13791__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13793 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13792 = (0);while(true){
if((i__13792 < size__4284__auto__))
{var vec__13798 = cljs.core._nth.call(null,c__4283__auto__,i__13792);var k = cljs.core.nth.call(null,vec__13798,(0),null);var tile = cljs.core.nth.call(null,vec__13798,(1),null);var map__13799 = tile;var map__13799__$1 = ((cljs.core.seq_QMARK_.call(null,map__13799))?cljs.core.apply.call(null,cljs.core.hash_map,map__13799):map__13799);var value = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__13793,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__13802 = (i__13792 + (1));
i__13792 = G__13802;
continue;
}
} else
{{
var G__13803 = (i__13792 + (1));
i__13792 = G__13803;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13793),iter__13790.call(null,cljs.core.chunk_rest.call(null,s__13791__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13793),null);
}
} else
{var vec__13800 = cljs.core.first.call(null,s__13791__$2);var k = cljs.core.nth.call(null,vec__13800,(0),null);var tile = cljs.core.nth.call(null,vec__13800,(1),null);var map__13801 = tile;var map__13801__$1 = ((cljs.core.seq_QMARK_.call(null,map__13801))?cljs.core.apply.call(null,cljs.core.hash_map,map__13801):map__13801);var value = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__13801__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__13790.call(null,cljs.core.rest.call(null,s__13791__$2)));
} else
{{
var G__13804 = cljs.core.rest.call(null,s__13791__$2);
s__13791__$1 = G__13804;
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
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__13805_SHARP_){p1__13805_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__13806_SHARP_){return p1__13806_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__13807_SHARP_){return p1__13807_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__13808_SHARP_){var vec__13823 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__13823,(0),null);var tile = cljs.core.nth.call(null,vec__13823,(1),null);var tile_x = (p1__13808_SHARP_.clientX - (20));var tile_y = (p1__13808_SHARP_.clientY - (20));var map__13824 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__13824__$1 = ((cljs.core.seq_QMARK_.call(null,map__13824))?cljs.core.apply.call(null,cljs.core.hash_map,map__13824):map__13824);var stand_x = cljs.core.get.call(null,map__13824__$1,"left");var stand_y = cljs.core.get.call(null,map__13824__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__13825(s__13826){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__13826__$1 = s__13826;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13826__$1);if(temp__4222__auto__)
{var s__13826__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13826__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13826__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13828 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13827 = (0);while(true){
if((i__13827 < size__4284__auto__))
{var vec__13833 = cljs.core._nth.call(null,c__4283__auto__,i__13827);var k = cljs.core.nth.call(null,vec__13833,(0),null);var tile = cljs.core.nth.call(null,vec__13833,(1),null);var map__13834 = tile;var map__13834__$1 = ((cljs.core.seq_QMARK_.call(null,map__13834))?cljs.core.apply.call(null,cljs.core.hash_map,map__13834):map__13834);var value = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__13834__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__13828,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__13837 = (i__13827 + (1));
i__13827 = G__13837;
continue;
}
} else
{{
var G__13838 = (i__13827 + (1));
i__13827 = G__13838;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13828),iter__13825.call(null,cljs.core.chunk_rest.call(null,s__13826__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13828),null);
}
} else
{var vec__13835 = cljs.core.first.call(null,s__13826__$2);var k = cljs.core.nth.call(null,vec__13835,(0),null);var tile = cljs.core.nth.call(null,vec__13835,(1),null);var map__13836 = tile;var map__13836__$1 = ((cljs.core.seq_QMARK_.call(null,map__13836))?cljs.core.apply.call(null,cljs.core.hash_map,map__13836):map__13836);var value = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__13836__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__13825.call(null,cljs.core.rest.call(null,s__13826__$2)));
} else
{{
var G__13839 = cljs.core.rest.call(null,s__13826__$2);
s__13826__$1 = G__13839;
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
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__13848(s__13849){return (new cljs.core.LazySeq(null,(function (){var s__13849__$1 = s__13849;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__13849__$1);if(temp__4222__auto__)
{var s__13849__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13849__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__13849__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__13851 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__13850 = (0);while(true){
if((i__13850 < size__4284__auto__))
{var map__13854 = cljs.core._nth.call(null,c__4283__auto__,i__13850);var map__13854__$1 = ((cljs.core.seq_QMARK_.call(null,map__13854))?cljs.core.apply.call(null,cljs.core.hash_map,map__13854):map__13854);var color = cljs.core.get.call(null,map__13854__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13854__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__13851,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13850,map__13854,map__13854__$1,color,user,c__4283__auto__,size__4284__auto__,b__13851,s__13849__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__13850,map__13854,map__13854__$1,color,user,c__4283__auto__,size__4284__auto__,b__13851,s__13849__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__13856 = (i__13850 + (1));
i__13850 = G__13856;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13851),iter__13848.call(null,cljs.core.chunk_rest.call(null,s__13849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13851),null);
}
} else
{var map__13855 = cljs.core.first.call(null,s__13849__$2);var map__13855__$1 = ((cljs.core.seq_QMARK_.call(null,map__13855))?cljs.core.apply.call(null,cljs.core.hash_map,map__13855):map__13855);var color = cljs.core.get.call(null,map__13855__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__13855__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__13855,map__13855__$1,color,user,s__13849__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__13855,map__13855__$1,color,user,s__13849__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__13848.call(null,cljs.core.rest.call(null,s__13849__$2)));
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
rummikub_cljs.web.contents = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__13857_SHARP_){var x = p1__13857_SHARP_.clientX;var y = p1__13857_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__13858){var map__13859 = p__13858;var map__13859__$1 = ((cljs.core.seq_QMARK_.call(null,map__13859))?cljs.core.apply.call(null,cljs.core.hash_map,map__13859):map__13859);var user = cljs.core.get.call(null,map__13859__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yourAudioTag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/pass.wav",new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null)], null);
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
