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
rummikub_cljs.web.p = (function p(p1__16312_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__16312_SHARP_));
});
var map__16313_16314 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__16313_16315__$1 = ((cljs.core.seq_QMARK_.call(null,map__16313_16314))?cljs.core.apply.call(null,cljs.core.hash_map,map__16313_16314):map__16313_16314);var state_16316 = cljs.core.get.call(null,map__16313_16315__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_16317 = cljs.core.get.call(null,map__16313_16315__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_16318 = cljs.core.get.call(null,map__16313_16315__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_16319 = cljs.core.get.call(null,map__16313_16315__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_16319;
rummikub_cljs.web.ch_chsk = ch_recv_16318;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_16317;
rummikub_cljs.web.chsk_state = state_16316;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6514__auto___16475 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6514__auto___16475){
return (function (){var f__6515__auto__ = (function (){var switch__6499__auto__ = ((function (c__6514__auto___16475){
return (function (state_16417){var state_val_16418 = (state_16417[(1)]);if((state_val_16418 === (7)))
{var inst_16325 = (state_16417[(7)]);var inst_16325__$1 = (state_16417[(2)]);var inst_16326 = cljs.core.seq_QMARK_.call(null,inst_16325__$1);var state_16417__$1 = (function (){var statearr_16419 = state_16417;(statearr_16419[(7)] = inst_16325__$1);
return statearr_16419;
})();if(inst_16326)
{var statearr_16420_16476 = state_16417__$1;(statearr_16420_16476[(1)] = (8));
} else
{var statearr_16421_16477 = state_16417__$1;(statearr_16421_16477[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (20)))
{var inst_16345 = (state_16417[(8)]);var inst_16361 = cljs.core.nth.call(null,inst_16345,(0),null);var inst_16362 = cljs.core.nth.call(null,inst_16345,(1),null);var inst_16363 = cljs.core.nth.call(null,inst_16345,(2),null);var inst_16364 = cljs.core.nth.call(null,inst_16345,(3),null);var inst_16365 = cljs.core.first.call(null,inst_16363);var inst_16366 = cljs.core.last.call(null,inst_16363);var inst_16367 = cljs.core.drop_last.call(null,(1),inst_16363);var inst_16368 = cljs.core.drop.call(null,(1),inst_16367);var inst_16369 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_16370 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_16369);var inst_16371 = cljs.core.not_EQ_.call(null,inst_16364,inst_16370);var inst_16372 = cljs.core._EQ_.call(null,"table",inst_16365,inst_16366);var inst_16373 = (inst_16371) && (inst_16372);var state_16417__$1 = (function (){var statearr_16422 = state_16417;(statearr_16422[(9)] = inst_16368);
(statearr_16422[(10)] = inst_16361);
(statearr_16422[(11)] = inst_16362);
return statearr_16422;
})();if(cljs.core.truth_(inst_16373))
{var statearr_16423_16478 = state_16417__$1;(statearr_16423_16478[(1)] = (23));
} else
{var statearr_16424_16479 = state_16417__$1;(statearr_16424_16479[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (27)))
{var inst_16344 = (state_16417[(12)]);var inst_16385 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_16344);var state_16417__$1 = state_16417;if(inst_16385)
{var statearr_16425_16480 = state_16417__$1;(statearr_16425_16480[(1)] = (29));
} else
{var statearr_16426_16481 = state_16417__$1;(statearr_16426_16481[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (1)))
{var state_16417__$1 = state_16417;var statearr_16427_16482 = state_16417__$1;(statearr_16427_16482[(2)] = null);
(statearr_16427_16482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (24)))
{var state_16417__$1 = state_16417;var statearr_16428_16483 = state_16417__$1;(statearr_16428_16483[(2)] = null);
(statearr_16428_16483[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (4)))
{var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16417__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_16418 === (15)))
{var inst_16344 = (state_16417[(12)]);var inst_16354 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_16344);var state_16417__$1 = state_16417;if(inst_16354)
{var statearr_16429_16484 = state_16417__$1;(statearr_16429_16484[(1)] = (17));
} else
{var statearr_16430_16485 = state_16417__$1;(statearr_16430_16485[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (21)))
{var inst_16344 = (state_16417[(12)]);var inst_16381 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_16344);var state_16417__$1 = state_16417;if(inst_16381)
{var statearr_16431_16486 = state_16417__$1;(statearr_16431_16486[(1)] = (26));
} else
{var statearr_16432_16487 = state_16417__$1;(statearr_16432_16487[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (31)))
{var inst_16397 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16433_16488 = state_16417__$1;(statearr_16433_16488[(2)] = inst_16397);
(statearr_16433_16488[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (32)))
{var inst_16391 = rummikub_cljs.web.play_sound.call(null);var state_16417__$1 = state_16417;var statearr_16434_16489 = state_16417__$1;(statearr_16434_16489[(2)] = inst_16391);
(statearr_16434_16489[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (33)))
{var inst_16334 = (state_16417[(13)]);var inst_16393 = cljs.core.println.call(null,inst_16334);var state_16417__$1 = state_16417;var statearr_16435_16490 = state_16417__$1;(statearr_16435_16490[(2)] = inst_16393);
(statearr_16435_16490[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (13)))
{var inst_16409 = (state_16417[(2)]);var state_16417__$1 = (function (){var statearr_16436 = state_16417;(statearr_16436[(14)] = inst_16409);
return statearr_16436;
})();var statearr_16437_16491 = state_16417__$1;(statearr_16437_16491[(2)] = null);
(statearr_16437_16491[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (22)))
{var inst_16401 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16438_16492 = state_16417__$1;(statearr_16438_16492[(2)] = inst_16401);
(statearr_16438_16492[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (29)))
{var inst_16345 = (state_16417[(8)]);var inst_16387 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_16345);var state_16417__$1 = state_16417;var statearr_16439_16493 = state_16417__$1;(statearr_16439_16493[(2)] = inst_16387);
(statearr_16439_16493[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (6)))
{var inst_16413 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16440_16494 = state_16417__$1;(statearr_16440_16494[(2)] = inst_16413);
(statearr_16440_16494[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (28)))
{var inst_16399 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16441_16495 = state_16417__$1;(statearr_16441_16495[(2)] = inst_16399);
(statearr_16441_16495[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (25)))
{var inst_16361 = (state_16417[(10)]);var inst_16378 = (state_16417[(2)]);var inst_16379 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_16361);var state_16417__$1 = (function (){var statearr_16442 = state_16417;(statearr_16442[(15)] = inst_16378);
return statearr_16442;
})();var statearr_16443_16496 = state_16417__$1;(statearr_16443_16496[(2)] = inst_16379);
(statearr_16443_16496[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (34)))
{var inst_16395 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16444_16497 = state_16417__$1;(statearr_16444_16497[(2)] = inst_16395);
(statearr_16444_16497[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (17)))
{var inst_16345 = (state_16417[(8)]);var inst_16356 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_16345);var state_16417__$1 = state_16417;var statearr_16445_16498 = state_16417__$1;(statearr_16445_16498[(2)] = inst_16356);
(statearr_16445_16498[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (3)))
{var inst_16415 = (state_16417[(2)]);var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16417__$1,inst_16415);
} else
{if((state_val_16418 === (12)))
{var inst_16334 = (state_16417[(13)]);var inst_16407 = cljs.core.println.call(null,inst_16334);var state_16417__$1 = state_16417;var statearr_16446_16499 = state_16417__$1;(statearr_16446_16499[(2)] = inst_16407);
(statearr_16446_16499[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (2)))
{var state_16417__$1 = state_16417;var statearr_16447_16500 = state_16417__$1;(statearr_16447_16500[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (23)))
{var inst_16368 = (state_16417[(9)]);var inst_16362 = (state_16417[(11)]);var inst_16375 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_16362,inst_16368);var state_16417__$1 = state_16417;var statearr_16449_16501 = state_16417__$1;(statearr_16449_16501[(2)] = inst_16375);
(statearr_16449_16501[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (19)))
{var inst_16403 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16450_16502 = state_16417__$1;(statearr_16450_16502[(2)] = inst_16403);
(statearr_16450_16502[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (11)))
{var inst_16337 = (state_16417[(16)]);var inst_16344 = (state_16417[(12)]);var inst_16344__$1 = cljs.core.nth.call(null,inst_16337,(0),null);var inst_16345 = cljs.core.nth.call(null,inst_16337,(1),null);var inst_16349 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_16344__$1);var state_16417__$1 = (function (){var statearr_16451 = state_16417;(statearr_16451[(8)] = inst_16345);
(statearr_16451[(12)] = inst_16344__$1);
return statearr_16451;
})();if(inst_16349)
{var statearr_16452_16503 = state_16417__$1;(statearr_16452_16503[(1)] = (14));
} else
{var statearr_16453_16504 = state_16417__$1;(statearr_16453_16504[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (9)))
{var inst_16325 = (state_16417[(7)]);var state_16417__$1 = state_16417;var statearr_16454_16505 = state_16417__$1;(statearr_16454_16505[(2)] = inst_16325);
(statearr_16454_16505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (5)))
{var state_16417__$1 = state_16417;var statearr_16455_16506 = state_16417__$1;(statearr_16455_16506[(2)] = null);
(statearr_16455_16506[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (14)))
{var inst_16345 = (state_16417[(8)]);var inst_16351 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_16345);var inst_16352 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_16417__$1 = (function (){var statearr_16456 = state_16417;(statearr_16456[(17)] = inst_16351);
return statearr_16456;
})();var statearr_16457_16507 = state_16417__$1;(statearr_16457_16507[(2)] = inst_16352);
(statearr_16457_16507[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (26)))
{var inst_16345 = (state_16417[(8)]);var inst_16383 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_16345);var state_16417__$1 = state_16417;var statearr_16458_16508 = state_16417__$1;(statearr_16458_16508[(2)] = inst_16383);
(statearr_16458_16508[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (16)))
{var inst_16405 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16459_16509 = state_16417__$1;(statearr_16459_16509[(2)] = inst_16405);
(statearr_16459_16509[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (30)))
{var inst_16344 = (state_16417[(12)]);var inst_16389 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),inst_16344);var state_16417__$1 = state_16417;if(inst_16389)
{var statearr_16460_16510 = state_16417__$1;(statearr_16460_16510[(1)] = (32));
} else
{var statearr_16461_16511 = state_16417__$1;(statearr_16461_16511[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (10)))
{var inst_16334 = (state_16417[(13)]);var inst_16331 = (state_16417[(2)]);var inst_16332 = cljs.core.get.call(null,inst_16331,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_16333 = cljs.core.get.call(null,inst_16331,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_16334__$1 = cljs.core.get.call(null,inst_16331,new cljs.core.Keyword(null,"event","event",301435442));var inst_16335 = cljs.core.get.call(null,inst_16331,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_16336 = cljs.core.nth.call(null,inst_16334__$1,(0),null);var inst_16337 = cljs.core.nth.call(null,inst_16334__$1,(1),null);var inst_16341 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_16336);var state_16417__$1 = (function (){var statearr_16462 = state_16417;(statearr_16462[(16)] = inst_16337);
(statearr_16462[(18)] = inst_16333);
(statearr_16462[(19)] = inst_16335);
(statearr_16462[(20)] = inst_16332);
(statearr_16462[(13)] = inst_16334__$1);
return statearr_16462;
})();if(inst_16341)
{var statearr_16463_16512 = state_16417__$1;(statearr_16463_16512[(1)] = (11));
} else
{var statearr_16464_16513 = state_16417__$1;(statearr_16464_16513[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (18)))
{var inst_16344 = (state_16417[(12)]);var inst_16358 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_16344);var state_16417__$1 = state_16417;if(inst_16358)
{var statearr_16465_16514 = state_16417__$1;(statearr_16465_16514[(1)] = (20));
} else
{var statearr_16466_16515 = state_16417__$1;(statearr_16466_16515[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (8)))
{var inst_16325 = (state_16417[(7)]);var inst_16328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16325);var state_16417__$1 = state_16417;var statearr_16467_16516 = state_16417__$1;(statearr_16467_16516[(2)] = inst_16328);
(statearr_16467_16516[(1)] = (10));
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
});})(c__6514__auto___16475))
;return ((function (switch__6499__auto__,c__6514__auto___16475){
return (function() {
var state_machine__6500__auto__ = null;
var state_machine__6500__auto____0 = (function (){var statearr_16471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16471[(0)] = state_machine__6500__auto__);
(statearr_16471[(1)] = (1));
return statearr_16471;
});
var state_machine__6500__auto____1 = (function (state_16417){while(true){
var ret_value__6501__auto__ = (function (){try{while(true){
var result__6502__auto__ = switch__6499__auto__.call(null,state_16417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6502__auto__;
}
break;
}
}catch (e16472){if((e16472 instanceof Object))
{var ex__6503__auto__ = e16472;var statearr_16473_16517 = state_16417;(statearr_16473_16517[(5)] = ex__6503__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16472;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16518 = state_16417;
state_16417 = G__16518;
continue;
}
} else
{return ret_value__6501__auto__;
}
break;
}
});
state_machine__6500__auto__ = function(state_16417){
switch(arguments.length){
case 0:
return state_machine__6500__auto____0.call(this);
case 1:
return state_machine__6500__auto____1.call(this,state_16417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6500__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6500__auto____0;
state_machine__6500__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6500__auto____1;
return state_machine__6500__auto__;
})()
;})(switch__6499__auto__,c__6514__auto___16475))
})();var state__6516__auto__ = (function (){var statearr_16474 = f__6515__auto__.call(null);(statearr_16474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6514__auto___16475);
return statearr_16474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6516__auto__);
});})(c__6514__auto___16475))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__16519_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__16519_SHARP_);
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
rummikub_cljs.web.color_str = (function color_str(p__16520){var vec__16522 = p__16520;var r = cljs.core.nth.call(null,vec__16522,(0),null);var g = cljs.core.nth.call(null,vec__16522,(1),null);var b = cljs.core.nth.call(null,vec__16522,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function type_chat(event){var val = event.target.value;return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function new_chat(){var val = document.getElementById("new-chat").value;var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");
return false;
});
rummikub_cljs.web.scroll_box = (function scroll_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__16525){var map__16526 = p__16525;var map__16526__$1 = ((cljs.core.seq_QMARK_.call(null,map__16526))?cljs.core.apply.call(null,cljs.core.hash_map,map__16526):map__16526);var content = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__16526__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
});
rummikub_cljs.web.scroll_to_bottom = (function scroll_to_bottom(this$){var node = this$.getDOMNode();return node.scrollTop = node.scrollHeight;
});
rummikub_cljs.web.scroll_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.scroll_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box2], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__16527_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__16527_SHARP_.target.value);
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
rummikub_cljs.web.play_sound = (function play_sound(){var G__16529 = document.getElementById("yourAudioTag");G__16529.load();
G__16529.play();
return G__16529;
});
rummikub_cljs.web.pass = (function pass(){rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),null], null));
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__16532 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__16532__$1 = ((cljs.core.seq_QMARK_.call(null,map__16532))?cljs.core.apply.call(null,cljs.core.hash_map,map__16532):map__16532);var this_player = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__16533 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__16533__$1 = ((cljs.core.seq_QMARK_.call(null,map__16533))?cljs.core.apply.call(null,cljs.core.hash_map,map__16533):map__16533);var color = cljs.core.get.call(null,map__16533__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__16533__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rummikub_cljs.web.pass], null)], null):null)], null);
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
var animate__2 = (function (k,points){var vec__16541 = k.split(" ");var color = cljs.core.nth.call(null,vec__16541,(0),null);var value = cljs.core.nth.call(null,vec__16541,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__16542 = cljs.core.seq.call(null,points);var chunk__16543 = null;var count__16544 = (0);var i__16545 = (0);while(true){
if((i__16545 < count__16544))
{var vec__16546 = cljs.core._nth.call(null,chunk__16543,i__16545);var x = cljs.core.nth.call(null,vec__16546,(0),null);var y = cljs.core.nth.call(null,vec__16546,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__16548 = seq__16542;
var G__16549 = chunk__16543;
var G__16550 = count__16544;
var G__16551 = (i__16545 + (1));
seq__16542 = G__16548;
chunk__16543 = G__16549;
count__16544 = G__16550;
i__16545 = G__16551;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__16542);if(temp__4222__auto__)
{var seq__16542__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16542__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__16542__$1);{
var G__16552 = cljs.core.chunk_rest.call(null,seq__16542__$1);
var G__16553 = c__4316__auto__;
var G__16554 = cljs.core.count.call(null,c__4316__auto__);
var G__16555 = (0);
seq__16542 = G__16552;
chunk__16543 = G__16553;
count__16544 = G__16554;
i__16545 = G__16555;
continue;
}
} else
{var vec__16547 = cljs.core.first.call(null,seq__16542__$1);var x = cljs.core.nth.call(null,vec__16547,(0),null);var y = cljs.core.nth.call(null,vec__16547,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__16556 = cljs.core.next.call(null,seq__16542__$1);
var G__16557 = null;
var G__16558 = (0);
var G__16559 = (0);
seq__16542 = G__16556;
chunk__16543 = G__16557;
count__16544 = G__16558;
i__16545 = G__16559;
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
rummikub_cljs.web.before_update = (function before_update(_,p__16560){var vec__16562 = p__16560;var ___$1 = cljs.core.nth.call(null,vec__16562,(0),null);var k = cljs.core.nth.call(null,vec__16562,(1),null);return rummikub_cljs.web.animate.call(null,k);
});
rummikub_cljs.web.table_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.table_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),rummikub_cljs.web.before_update], null));
rummikub_cljs.web.stand_box2 = cljs.core.with_meta.call(null,rummikub_cljs.web.stand_box,cljs.core.PersistentArrayMap.EMPTY);
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__16563_SHARP_){return p1__16563_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__16564_SHARP_){return p1__16564_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__16565_SHARP_){var vec__16579 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__16579,(0),null);var tile = cljs.core.nth.call(null,vec__16579,(1),null);var x = (p1__16565_SHARP_.clientX - (17));var y = (p1__16565_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__16580(s__16581){return (new cljs.core.LazySeq(null,(function (){var s__16581__$1 = s__16581;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__16581__$1);if(temp__4222__auto__)
{var s__16581__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16581__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__16581__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__16583 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__16582 = (0);while(true){
if((i__16582 < size__4284__auto__))
{var vec__16588 = cljs.core._nth.call(null,c__4283__auto__,i__16582);var k = cljs.core.nth.call(null,vec__16588,(0),null);var tile = cljs.core.nth.call(null,vec__16588,(1),null);var map__16589 = tile;var map__16589__$1 = ((cljs.core.seq_QMARK_.call(null,map__16589))?cljs.core.apply.call(null,cljs.core.hash_map,map__16589):map__16589);var value = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__16583,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box2,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__16592 = (i__16582 + (1));
i__16582 = G__16592;
continue;
}
} else
{{
var G__16593 = (i__16582 + (1));
i__16582 = G__16593;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16583),iter__16580.call(null,cljs.core.chunk_rest.call(null,s__16581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16583),null);
}
} else
{var vec__16590 = cljs.core.first.call(null,s__16581__$2);var k = cljs.core.nth.call(null,vec__16590,(0),null);var tile = cljs.core.nth.call(null,vec__16590,(1),null);var map__16591 = tile;var map__16591__$1 = ((cljs.core.seq_QMARK_.call(null,map__16591))?cljs.core.apply.call(null,cljs.core.hash_map,map__16591):map__16591);var value = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box2,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__16580.call(null,cljs.core.rest.call(null,s__16581__$2)));
} else
{{
var G__16594 = cljs.core.rest.call(null,s__16581__$2);
s__16581__$1 = G__16594;
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
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__16595_SHARP_){p1__16595_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__16596_SHARP_){return p1__16596_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__16597_SHARP_){return p1__16597_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__16598_SHARP_){var vec__16613 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__16613,(0),null);var tile = cljs.core.nth.call(null,vec__16613,(1),null);var tile_x = (p1__16598_SHARP_.clientX - (20));var tile_y = (p1__16598_SHARP_.clientY - (20));var map__16614 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__16614__$1 = ((cljs.core.seq_QMARK_.call(null,map__16614))?cljs.core.apply.call(null,cljs.core.hash_map,map__16614):map__16614);var stand_x = cljs.core.get.call(null,map__16614__$1,"left");var stand_y = cljs.core.get.call(null,map__16614__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__16615(s__16616){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__16616__$1 = s__16616;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__16616__$1);if(temp__4222__auto__)
{var s__16616__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16616__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__16616__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__16618 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__16617 = (0);while(true){
if((i__16617 < size__4284__auto__))
{var vec__16623 = cljs.core._nth.call(null,c__4283__auto__,i__16617);var k = cljs.core.nth.call(null,vec__16623,(0),null);var tile = cljs.core.nth.call(null,vec__16623,(1),null);var map__16624 = tile;var map__16624__$1 = ((cljs.core.seq_QMARK_.call(null,map__16624))?cljs.core.apply.call(null,cljs.core.hash_map,map__16624):map__16624);var value = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__16618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box2,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__16627 = (i__16617 + (1));
i__16617 = G__16627;
continue;
}
} else
{{
var G__16628 = (i__16617 + (1));
i__16617 = G__16628;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16618),iter__16615.call(null,cljs.core.chunk_rest.call(null,s__16616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16618),null);
}
} else
{var vec__16625 = cljs.core.first.call(null,s__16616__$2);var k = cljs.core.nth.call(null,vec__16625,(0),null);var tile = cljs.core.nth.call(null,vec__16625,(1),null);var map__16626 = tile;var map__16626__$1 = ((cljs.core.seq_QMARK_.call(null,map__16626))?cljs.core.apply.call(null,cljs.core.hash_map,map__16626):map__16626);var value = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box2,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__16615.call(null,cljs.core.rest.call(null,s__16616__$2)));
} else
{{
var G__16629 = cljs.core.rest.call(null,s__16616__$2);
s__16616__$1 = G__16629;
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
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__16638(s__16639){return (new cljs.core.LazySeq(null,(function (){var s__16639__$1 = s__16639;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__16639__$1);if(temp__4222__auto__)
{var s__16639__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16639__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__16639__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__16641 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__16640 = (0);while(true){
if((i__16640 < size__4284__auto__))
{var map__16644 = cljs.core._nth.call(null,c__4283__auto__,i__16640);var map__16644__$1 = ((cljs.core.seq_QMARK_.call(null,map__16644))?cljs.core.apply.call(null,cljs.core.hash_map,map__16644):map__16644);var color = cljs.core.get.call(null,map__16644__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__16644__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__16641,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16640,map__16644,map__16644__$1,color,user,c__4283__auto__,size__4284__auto__,b__16641,s__16639__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__16640,map__16644,map__16644__$1,color,user,c__4283__auto__,size__4284__auto__,b__16641,s__16639__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__16646 = (i__16640 + (1));
i__16640 = G__16646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16641),iter__16638.call(null,cljs.core.chunk_rest.call(null,s__16639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16641),null);
}
} else
{var map__16645 = cljs.core.first.call(null,s__16639__$2);var map__16645__$1 = ((cljs.core.seq_QMARK_.call(null,map__16645))?cljs.core.apply.call(null,cljs.core.hash_map,map__16645):map__16645);var color = cljs.core.get.call(null,map__16645__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__16645__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16645,map__16645__$1,color,user,s__16639__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__16645,map__16645__$1,color,user,s__16639__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__16638.call(null,cljs.core.rest.call(null,s__16639__$2)));
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
rummikub_cljs.web.contents = (function contents(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__16647_SHARP_){var x = p1__16647_SHARP_.clientX;var y = p1__16647_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__16650){var map__16651 = p__16650;var map__16651__$1 = ((cljs.core.seq_QMARK_.call(null,map__16651))?cljs.core.apply.call(null,cljs.core.hash_map,map__16651):map__16651);var user = cljs.core.get.call(null,map__16651__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yourAudioTag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/pass.wav",new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null)], null);
});
rummikub_cljs.web.contents2 = cljs.core.with_meta.call(null,rummikub_cljs.web.contents,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){return key("enter",(function (){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),cljs.core.deref.call(null,rummikub_cljs.web.current_player)))
{return rummikub_cljs.web.pass.call(null);
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
