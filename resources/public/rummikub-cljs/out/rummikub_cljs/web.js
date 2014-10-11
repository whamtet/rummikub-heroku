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
rummikub_cljs.web.p = (function p(p1__17327_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__17327_SHARP_));
});
var map__17328_17329 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));var map__17328_17330__$1 = ((cljs.core.seq_QMARK_.call(null,map__17328_17329))?cljs.core.apply.call(null,cljs.core.hash_map,map__17328_17329):map__17328_17329);var state_17331 = cljs.core.get.call(null,map__17328_17330__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var send_fn_17332 = cljs.core.get.call(null,map__17328_17330__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));var ch_recv_17333 = cljs.core.get.call(null,map__17328_17330__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));var chsk_17334 = cljs.core.get.call(null,map__17328_17330__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));rummikub_cljs.web.chsk = chsk_17334;
rummikub_cljs.web.ch_chsk = ch_recv_17333;
rummikub_cljs.web.chsk_send_BANG_ = send_fn_17332;
rummikub_cljs.web.chsk_state = state_17331;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__6605__auto___17490 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6605__auto___17490){
return (function (){var f__6606__auto__ = (function (){var switch__6590__auto__ = ((function (c__6605__auto___17490){
return (function (state_17432){var state_val_17433 = (state_17432[(1)]);if((state_val_17433 === (7)))
{var inst_17340 = (state_17432[(7)]);var inst_17340__$1 = (state_17432[(2)]);var inst_17341 = cljs.core.seq_QMARK_.call(null,inst_17340__$1);var state_17432__$1 = (function (){var statearr_17434 = state_17432;(statearr_17434[(7)] = inst_17340__$1);
return statearr_17434;
})();if(inst_17341)
{var statearr_17435_17491 = state_17432__$1;(statearr_17435_17491[(1)] = (8));
} else
{var statearr_17436_17492 = state_17432__$1;(statearr_17436_17492[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (20)))
{var inst_17360 = (state_17432[(8)]);var inst_17376 = cljs.core.nth.call(null,inst_17360,(0),null);var inst_17377 = cljs.core.nth.call(null,inst_17360,(1),null);var inst_17378 = cljs.core.nth.call(null,inst_17360,(2),null);var inst_17379 = cljs.core.nth.call(null,inst_17360,(3),null);var inst_17380 = cljs.core.first.call(null,inst_17378);var inst_17381 = cljs.core.last.call(null,inst_17378);var inst_17382 = cljs.core.drop_last.call(null,(1),inst_17378);var inst_17383 = cljs.core.drop.call(null,(1),inst_17382);var inst_17384 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var inst_17385 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_17384);var inst_17386 = cljs.core.not_EQ_.call(null,inst_17379,inst_17385);var inst_17387 = cljs.core._EQ_.call(null,"table",inst_17380,inst_17381);var inst_17388 = (inst_17386) && (inst_17387);var state_17432__$1 = (function (){var statearr_17437 = state_17432;(statearr_17437[(9)] = inst_17383);
(statearr_17437[(10)] = inst_17377);
(statearr_17437[(11)] = inst_17376);
return statearr_17437;
})();if(cljs.core.truth_(inst_17388))
{var statearr_17438_17493 = state_17432__$1;(statearr_17438_17493[(1)] = (23));
} else
{var statearr_17439_17494 = state_17432__$1;(statearr_17439_17494[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (27)))
{var inst_17359 = (state_17432[(12)]);var inst_17400 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_17359);var state_17432__$1 = state_17432;if(inst_17400)
{var statearr_17440_17495 = state_17432__$1;(statearr_17440_17495[(1)] = (29));
} else
{var statearr_17441_17496 = state_17432__$1;(statearr_17441_17496[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (1)))
{var state_17432__$1 = state_17432;var statearr_17442_17497 = state_17432__$1;(statearr_17442_17497[(2)] = null);
(statearr_17442_17497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (24)))
{var state_17432__$1 = state_17432;var statearr_17443_17498 = state_17432__$1;(statearr_17443_17498[(2)] = null);
(statearr_17443_17498[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (4)))
{var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17432__$1,(7),rummikub_cljs.web.ch_chsk);
} else
{if((state_val_17433 === (15)))
{var inst_17359 = (state_17432[(12)]);var inst_17369 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_17359);var state_17432__$1 = state_17432;if(inst_17369)
{var statearr_17444_17499 = state_17432__$1;(statearr_17444_17499[(1)] = (17));
} else
{var statearr_17445_17500 = state_17432__$1;(statearr_17445_17500[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (21)))
{var inst_17359 = (state_17432[(12)]);var inst_17396 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_17359);var state_17432__$1 = state_17432;if(inst_17396)
{var statearr_17446_17501 = state_17432__$1;(statearr_17446_17501[(1)] = (26));
} else
{var statearr_17447_17502 = state_17432__$1;(statearr_17447_17502[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (31)))
{var inst_17412 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17448_17503 = state_17432__$1;(statearr_17448_17503[(2)] = inst_17412);
(statearr_17448_17503[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (32)))
{var inst_17406 = rummikub_cljs.web.play_sound.call(null);var state_17432__$1 = state_17432;var statearr_17449_17504 = state_17432__$1;(statearr_17449_17504[(2)] = inst_17406);
(statearr_17449_17504[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (33)))
{var inst_17349 = (state_17432[(13)]);var inst_17408 = cljs.core.println.call(null,inst_17349);var state_17432__$1 = state_17432;var statearr_17450_17505 = state_17432__$1;(statearr_17450_17505[(2)] = inst_17408);
(statearr_17450_17505[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (13)))
{var inst_17424 = (state_17432[(2)]);var state_17432__$1 = (function (){var statearr_17451 = state_17432;(statearr_17451[(14)] = inst_17424);
return statearr_17451;
})();var statearr_17452_17506 = state_17432__$1;(statearr_17452_17506[(2)] = null);
(statearr_17452_17506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (22)))
{var inst_17416 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17453_17507 = state_17432__$1;(statearr_17453_17507[(2)] = inst_17416);
(statearr_17453_17507[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (29)))
{var inst_17360 = (state_17432[(8)]);var inst_17402 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_17360);var state_17432__$1 = state_17432;var statearr_17454_17508 = state_17432__$1;(statearr_17454_17508[(2)] = inst_17402);
(statearr_17454_17508[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (6)))
{var inst_17428 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17455_17509 = state_17432__$1;(statearr_17455_17509[(2)] = inst_17428);
(statearr_17455_17509[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (28)))
{var inst_17414 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17456_17510 = state_17432__$1;(statearr_17456_17510[(2)] = inst_17414);
(statearr_17456_17510[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (25)))
{var inst_17376 = (state_17432[(11)]);var inst_17393 = (state_17432[(2)]);var inst_17394 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_17376);var state_17432__$1 = (function (){var statearr_17457 = state_17432;(statearr_17457[(15)] = inst_17393);
return statearr_17457;
})();var statearr_17458_17511 = state_17432__$1;(statearr_17458_17511[(2)] = inst_17394);
(statearr_17458_17511[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (34)))
{var inst_17410 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17459_17512 = state_17432__$1;(statearr_17459_17512[(2)] = inst_17410);
(statearr_17459_17512[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (17)))
{var inst_17360 = (state_17432[(8)]);var inst_17371 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_17360);var state_17432__$1 = state_17432;var statearr_17460_17513 = state_17432__$1;(statearr_17460_17513[(2)] = inst_17371);
(statearr_17460_17513[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (3)))
{var inst_17430 = (state_17432[(2)]);var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17432__$1,inst_17430);
} else
{if((state_val_17433 === (12)))
{var inst_17349 = (state_17432[(13)]);var inst_17422 = cljs.core.println.call(null,inst_17349);var state_17432__$1 = state_17432;var statearr_17461_17514 = state_17432__$1;(statearr_17461_17514[(2)] = inst_17422);
(statearr_17461_17514[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (2)))
{var state_17432__$1 = state_17432;var statearr_17462_17515 = state_17432__$1;(statearr_17462_17515[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (23)))
{var inst_17383 = (state_17432[(9)]);var inst_17377 = (state_17432[(10)]);var inst_17390 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_17377,inst_17383);var state_17432__$1 = state_17432;var statearr_17464_17516 = state_17432__$1;(statearr_17464_17516[(2)] = inst_17390);
(statearr_17464_17516[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (19)))
{var inst_17418 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17465_17517 = state_17432__$1;(statearr_17465_17517[(2)] = inst_17418);
(statearr_17465_17517[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (11)))
{var inst_17352 = (state_17432[(16)]);var inst_17359 = (state_17432[(12)]);var inst_17359__$1 = cljs.core.nth.call(null,inst_17352,(0),null);var inst_17360 = cljs.core.nth.call(null,inst_17352,(1),null);var inst_17364 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_17359__$1);var state_17432__$1 = (function (){var statearr_17466 = state_17432;(statearr_17466[(12)] = inst_17359__$1);
(statearr_17466[(8)] = inst_17360);
return statearr_17466;
})();if(inst_17364)
{var statearr_17467_17518 = state_17432__$1;(statearr_17467_17518[(1)] = (14));
} else
{var statearr_17468_17519 = state_17432__$1;(statearr_17468_17519[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (9)))
{var inst_17340 = (state_17432[(7)]);var state_17432__$1 = state_17432;var statearr_17469_17520 = state_17432__$1;(statearr_17469_17520[(2)] = inst_17340);
(statearr_17469_17520[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (5)))
{var state_17432__$1 = state_17432;var statearr_17470_17521 = state_17432__$1;(statearr_17470_17521[(2)] = null);
(statearr_17470_17521[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (14)))
{var inst_17360 = (state_17432[(8)]);var inst_17366 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_17360);var inst_17367 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);var state_17432__$1 = (function (){var statearr_17471 = state_17432;(statearr_17471[(17)] = inst_17366);
return statearr_17471;
})();var statearr_17472_17522 = state_17432__$1;(statearr_17472_17522[(2)] = inst_17367);
(statearr_17472_17522[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (26)))
{var inst_17360 = (state_17432[(8)]);var inst_17398 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_17360);var state_17432__$1 = state_17432;var statearr_17473_17523 = state_17432__$1;(statearr_17473_17523[(2)] = inst_17398);
(statearr_17473_17523[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (16)))
{var inst_17420 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17474_17524 = state_17432__$1;(statearr_17474_17524[(2)] = inst_17420);
(statearr_17474_17524[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (30)))
{var inst_17359 = (state_17432[(12)]);var inst_17404 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),inst_17359);var state_17432__$1 = state_17432;if(inst_17404)
{var statearr_17475_17525 = state_17432__$1;(statearr_17475_17525[(1)] = (32));
} else
{var statearr_17476_17526 = state_17432__$1;(statearr_17476_17526[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (10)))
{var inst_17349 = (state_17432[(13)]);var inst_17346 = (state_17432[(2)]);var inst_17347 = cljs.core.get.call(null,inst_17346,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));var inst_17348 = cljs.core.get.call(null,inst_17346,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));var inst_17349__$1 = cljs.core.get.call(null,inst_17346,new cljs.core.Keyword(null,"event","event",301435442));var inst_17350 = cljs.core.get.call(null,inst_17346,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));var inst_17351 = cljs.core.nth.call(null,inst_17349__$1,(0),null);var inst_17352 = cljs.core.nth.call(null,inst_17349__$1,(1),null);var inst_17356 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_17351);var state_17432__$1 = (function (){var statearr_17477 = state_17432;(statearr_17477[(18)] = inst_17348);
(statearr_17477[(13)] = inst_17349__$1);
(statearr_17477[(16)] = inst_17352);
(statearr_17477[(19)] = inst_17347);
(statearr_17477[(20)] = inst_17350);
return statearr_17477;
})();if(inst_17356)
{var statearr_17478_17527 = state_17432__$1;(statearr_17478_17527[(1)] = (11));
} else
{var statearr_17479_17528 = state_17432__$1;(statearr_17479_17528[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (18)))
{var inst_17359 = (state_17432[(12)]);var inst_17373 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_17359);var state_17432__$1 = state_17432;if(inst_17373)
{var statearr_17480_17529 = state_17432__$1;(statearr_17480_17529[(1)] = (20));
} else
{var statearr_17481_17530 = state_17432__$1;(statearr_17481_17530[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (8)))
{var inst_17340 = (state_17432[(7)]);var inst_17343 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17340);var state_17432__$1 = state_17432;var statearr_17482_17531 = state_17432__$1;(statearr_17482_17531[(2)] = inst_17343);
(statearr_17482_17531[(1)] = (10));
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
});})(c__6605__auto___17490))
;return ((function (switch__6590__auto__,c__6605__auto___17490){
return (function() {
var state_machine__6591__auto__ = null;
var state_machine__6591__auto____0 = (function (){var statearr_17486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17486[(0)] = state_machine__6591__auto__);
(statearr_17486[(1)] = (1));
return statearr_17486;
});
var state_machine__6591__auto____1 = (function (state_17432){while(true){
var ret_value__6592__auto__ = (function (){try{while(true){
var result__6593__auto__ = switch__6590__auto__.call(null,state_17432);if(cljs.core.keyword_identical_QMARK_.call(null,result__6593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6593__auto__;
}
break;
}
}catch (e17487){if((e17487 instanceof Object))
{var ex__6594__auto__ = e17487;var statearr_17488_17532 = state_17432;(statearr_17488_17532[(5)] = ex__6594__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17487;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17533 = state_17432;
state_17432 = G__17533;
continue;
}
} else
{return ret_value__6592__auto__;
}
break;
}
});
state_machine__6591__auto__ = function(state_17432){
switch(arguments.length){
case 0:
return state_machine__6591__auto____0.call(this);
case 1:
return state_machine__6591__auto____1.call(this,state_17432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6591__auto____0;
state_machine__6591__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6591__auto____1;
return state_machine__6591__auto__;
})()
;})(switch__6590__auto__,c__6605__auto___17490))
})();var state__6607__auto__ = (function (){var statearr_17489 = f__6606__auto__.call(null);(statearr_17489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6605__auto___17490);
return statearr_17489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6607__auto__);
});})(c__6605__auto___17490))
);
rummikub_cljs.web.get_user = (function get_user(){var temp__4220__auto__ = prompt("Your Name");if(cljs.core.truth_(temp__4220__auto__))
{var user = temp__4220__auto__;var user__$1 = user.trim();if(!(cljs.core.empty_QMARK_.call(null,user__$1)))
{return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4220__auto__){
return (function (p1__17534_SHARP_){cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__17534_SHARP_);
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
rummikub_cljs.web.color_str = (function color_str(p__17535){var vec__17537 = p__17535;var r = cljs.core.nth.call(null,vec__17537,(0),null);var g = cljs.core.nth.call(null,vec__17537,(1),null);var b = cljs.core.nth.call(null,vec__17537,(2),null);return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
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
rummikub_cljs.web.scroll_box = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__17538){var map__17539 = p__17538;var map__17539__$1 = ((cljs.core.seq_QMARK_.call(null,map__17539))?cljs.core.apply.call(null,cljs.core.hash_map,map__17539):map__17539);var content = cljs.core.get.call(null,map__17539__$1,new cljs.core.Keyword(null,"content","content",15833224));var color = cljs.core.get.call(null,map__17539__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__17539__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+"-chat-msg")], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function chat_box(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17540_SHARP_){return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__17540_SHARP_.target.value);
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
rummikub_cljs.web.play_sound = (function play_sound(){var G__17542 = document.getElementById("yourAudioTag");G__17542.load();
G__17542.play();
return G__17542;
});
rummikub_cljs.web.pass = (function pass(){rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),null], null));
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});
rummikub_cljs.web.turn_indicator = (function turn_indicator(){var map__17545 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);var map__17545__$1 = ((cljs.core.seq_QMARK_.call(null,map__17545))?cljs.core.apply.call(null,cljs.core.hash_map,map__17545):map__17545);var this_player = cljs.core.get.call(null,map__17545__$1,new cljs.core.Keyword(null,"user","user",1532431356));var map__17546 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);var map__17546__$1 = ((cljs.core.seq_QMARK_.call(null,map__17546))?cljs.core.apply.call(null,cljs.core.hash_map,map__17546):map__17546);var color = cljs.core.get.call(null,map__17546__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__17546__$1,new cljs.core.Keyword(null,"user","user",1532431356));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rummikub_cljs.web.pass], null)], null):null)], null);
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
var animate__2 = (function (k,points){var vec__17554 = k.split(" ");var color = cljs.core.nth.call(null,vec__17554,(0),null);var value = cljs.core.nth.call(null,vec__17554,(1),null);var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));var seq__17555 = cljs.core.seq.call(null,points);var chunk__17556 = null;var count__17557 = (0);var i__17558 = (0);while(true){
if((i__17558 < count__17557))
{var vec__17559 = cljs.core._nth.call(null,chunk__17556,i__17558);var x = cljs.core.nth.call(null,vec__17559,(0),null);var y = cljs.core.nth.call(null,vec__17559,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__17561 = seq__17555;
var G__17562 = chunk__17556;
var G__17563 = count__17557;
var G__17564 = (i__17558 + (1));
seq__17555 = G__17561;
chunk__17556 = G__17562;
count__17557 = G__17563;
i__17558 = G__17564;
continue;
}
} else
{var temp__4222__auto__ = cljs.core.seq.call(null,seq__17555);if(temp__4222__auto__)
{var seq__17555__$1 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17555__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__17555__$1);{
var G__17565 = cljs.core.chunk_rest.call(null,seq__17555__$1);
var G__17566 = c__4316__auto__;
var G__17567 = cljs.core.count.call(null,c__4316__auto__);
var G__17568 = (0);
seq__17555 = G__17565;
chunk__17556 = G__17566;
count__17557 = G__17567;
i__17558 = G__17568;
continue;
}
} else
{var vec__17560 = cljs.core.first.call(null,seq__17555__$1);var x = cljs.core.nth.call(null,vec__17560,(0),null);var y = cljs.core.nth.call(null,vec__17560,(1),null);to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));
{
var G__17569 = cljs.core.next.call(null,seq__17555__$1);
var G__17570 = null;
var G__17571 = (0);
var G__17572 = (0);
seq__17555 = G__17569;
chunk__17556 = G__17570;
count__17557 = G__17571;
i__17558 = G__17572;
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
rummikub_cljs.web.before_update = (function before_update(_,p__17573){var vec__17575 = p__17573;var ___$1 = cljs.core.nth.call(null,vec__17575,(0),null);var k = cljs.core.nth.call(null,vec__17575,(1),null);return rummikub_cljs.web.animate.call(null,k);
});
rummikub_cljs.web.table = (function table(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__17576_SHARP_){return p1__17576_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__17577_SHARP_){return p1__17577_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__17578_SHARP_){var vec__17592 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__17592,(0),null);var tile = cljs.core.nth.call(null,vec__17592,(1),null);var x = (p1__17578_SHARP_.clientX - (17));var y = (p1__17578_SHARP_.clientY - (15));var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__4285__auto__ = (function iter__17593(s__17594){return (new cljs.core.LazySeq(null,(function (){var s__17594__$1 = s__17594;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__17594__$1);if(temp__4222__auto__)
{var s__17594__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17594__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__17594__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__17596 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__17595 = (0);while(true){
if((i__17595 < size__4284__auto__))
{var vec__17601 = cljs.core._nth.call(null,c__4283__auto__,i__17595);var k = cljs.core.nth.call(null,vec__17601,(0),null);var tile = cljs.core.nth.call(null,vec__17601,(1),null);var map__17602 = tile;var map__17602__$1 = ((cljs.core.seq_QMARK_.call(null,map__17602))?cljs.core.apply.call(null,cljs.core.hash_map,map__17602):map__17602);var value = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{cljs.core.chunk_append.call(null,b__17596,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)));
{
var G__17605 = (i__17595 + (1));
i__17595 = G__17605;
continue;
}
} else
{{
var G__17606 = (i__17595 + (1));
i__17595 = G__17606;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17596),iter__17593.call(null,cljs.core.chunk_rest.call(null,s__17594__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17596),null);
}
} else
{var vec__17603 = cljs.core.first.call(null,s__17594__$2);var k = cljs.core.nth.call(null,vec__17603,(0),null);var tile = cljs.core.nth.call(null,vec__17603,(1),null);var map__17604 = tile;var map__17604__$1 = ((cljs.core.seq_QMARK_.call(null,map__17604))?cljs.core.apply.call(null,cljs.core.hash_map,map__17604):map__17604);var value = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"color","color",1011675173));var top = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"top","top",-1856271961));var left = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"left","left",-399115937));var location = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,"table"))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("tablized"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))], null)),iter__17593.call(null,cljs.core.rest.call(null,s__17594__$2)));
} else
{{
var G__17607 = cljs.core.rest.call(null,s__17594__$2);
s__17594__$1 = G__17607;
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
rummikub_cljs.web.drag_start = (function drag_start(k,tile,location){return (function (p1__17608_SHARP_){p1__17608_SHARP_.dataTransfer.setData("text/html","");
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function stand(){var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__17609_SHARP_){return p1__17609_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__17610_SHARP_){return p1__17610_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__17611_SHARP_){var vec__17626 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);var k = cljs.core.nth.call(null,vec__17626,(0),null);var tile = cljs.core.nth.call(null,vec__17626,(1),null);var tile_x = (p1__17611_SHARP_.clientX - (20));var tile_y = (p1__17611_SHARP_.clientY - (20));var map__17627 = cljs.core.js__GT_clj.call(null,$("#stand").position());var map__17627__$1 = ((cljs.core.seq_QMARK_.call(null,map__17627))?cljs.core.apply.call(null,cljs.core.hash_map,map__17627):map__17627);var stand_x = cljs.core.get.call(null,map__17627__$1,"left");var stand_y = cljs.core.get.call(null,map__17627__$1,"top");var rel_x = (tile_x - stand_x);var rel_y = (tile_y - stand_y);var i = ((rel_y / (24)) | (0));var j = ((tile_x / (24)) | (0));var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__4285__auto__ = ((function (user){
return (function iter__17628(s__17629){return (new cljs.core.LazySeq(null,((function (user){
return (function (){var s__17629__$1 = s__17629;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__17629__$1);if(temp__4222__auto__)
{var s__17629__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17629__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__17629__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__17631 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__17630 = (0);while(true){
if((i__17630 < size__4284__auto__))
{var vec__17636 = cljs.core._nth.call(null,c__4283__auto__,i__17630);var k = cljs.core.nth.call(null,vec__17636,(0),null);var tile = cljs.core.nth.call(null,vec__17636,(1),null);var map__17637 = tile;var map__17637__$1 = ((cljs.core.seq_QMARK_.call(null,map__17637))?cljs.core.apply.call(null,cljs.core.hash_map,map__17637):map__17637);var value = cljs.core.get.call(null,map__17637__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__17637__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__17637__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__17637__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__17637__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{cljs.core.chunk_append.call(null,b__17631,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));
{
var G__17640 = (i__17630 + (1));
i__17630 = G__17640;
continue;
}
} else
{{
var G__17641 = (i__17630 + (1));
i__17630 = G__17641;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17631),iter__17628.call(null,cljs.core.chunk_rest.call(null,s__17629__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17631),null);
}
} else
{var vec__17638 = cljs.core.first.call(null,s__17629__$2);var k = cljs.core.nth.call(null,vec__17638,(0),null);var tile = cljs.core.nth.call(null,vec__17638,(1),null);var map__17639 = tile;var map__17639__$1 = ((cljs.core.seq_QMARK_.call(null,map__17639))?cljs.core.apply.call(null,cljs.core.hash_map,map__17639):map__17639);var value = cljs.core.get.call(null,map__17639__$1,new cljs.core.Keyword(null,"value","value",305978217));var color = cljs.core.get.call(null,map__17639__$1,new cljs.core.Keyword(null,"color","color",1011675173));var j = cljs.core.get.call(null,map__17639__$1,new cljs.core.Keyword(null,"j","j",-1397974765));var i = cljs.core.get.call(null,map__17639__$1,new cljs.core.Keyword(null,"i","i",-1386841315));var location = cljs.core.get.call(null,map__17639__$1,new cljs.core.Keyword(null,"location","location",1815599388));if(cljs.core._EQ_.call(null,location,user))
{return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),iter__17628.call(null,cljs.core.rest.call(null,s__17629__$2)));
} else
{{
var G__17642 = cljs.core.rest.call(null,s__17629__$2);
s__17629__$1 = G__17642;
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
rummikub_cljs.web.users_box = (function users_box(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__4285__auto__ = (function iter__17651(s__17652){return (new cljs.core.LazySeq(null,(function (){var s__17652__$1 = s__17652;while(true){
var temp__4222__auto__ = cljs.core.seq.call(null,s__17652__$1);if(temp__4222__auto__)
{var s__17652__$2 = temp__4222__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17652__$2))
{var c__4283__auto__ = cljs.core.chunk_first.call(null,s__17652__$2);var size__4284__auto__ = cljs.core.count.call(null,c__4283__auto__);var b__17654 = cljs.core.chunk_buffer.call(null,size__4284__auto__);if((function (){var i__17653 = (0);while(true){
if((i__17653 < size__4284__auto__))
{var map__17657 = cljs.core._nth.call(null,c__4283__auto__,i__17653);var map__17657__$1 = ((cljs.core.seq_QMARK_.call(null,map__17657))?cljs.core.apply.call(null,cljs.core.hash_map,map__17657):map__17657);var color = cljs.core.get.call(null,map__17657__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__17657__$1,new cljs.core.Keyword(null,"user","user",1532431356));cljs.core.chunk_append.call(null,b__17654,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17653,map__17657,map__17657__$1,color,user,c__4283__auto__,size__4284__auto__,b__17654,s__17652__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(i__17653,map__17657,map__17657__$1,color,user,c__4283__auto__,size__4284__auto__,b__17654,s__17652__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)));
{
var G__17659 = (i__17653 + (1));
i__17653 = G__17659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17654),iter__17651.call(null,cljs.core.chunk_rest.call(null,s__17652__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17654),null);
}
} else
{var map__17658 = cljs.core.first.call(null,s__17652__$2);var map__17658__$1 = ((cljs.core.seq_QMARK_.call(null,map__17658))?cljs.core.apply.call(null,cljs.core.hash_map,map__17658):map__17658);var color = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"color","color",1011675173));var user = cljs.core.get.call(null,map__17658__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17658,map__17658__$1,color,user,s__17652__$2,temp__4222__auto__){
return (function (){if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user))))
{return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else
{return null;
}
});})(map__17658,map__17658__$1,color,user,s__17652__$2,temp__4222__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("delete-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(user))], null)),iter__17651.call(null,cljs.core.rest.call(null,s__17652__$2)));
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
rummikub_cljs.web.contents = cljs.core.with_meta.call(null,(function (){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__17660_SHARP_){var x = p1__17660_SHARP_.clientX;var y = p1__17660_SHARP_.clientY;return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__17661){var map__17662 = p__17661;var map__17662__$1 = ((cljs.core.seq_QMARK_.call(null,map__17662))?cljs.core.apply.call(null,cljs.core.hash_map,map__17662):map__17662);var user = cljs.core.get.call(null,map__17662__$1,new cljs.core.Keyword(null,"user","user",1532431356));return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yourAudioTag"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/pass.wav",new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){return key("enter",(function (){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),cljs.core.deref.call(null,rummikub_cljs.web.current_player)))
{return rummikub_cljs.web.pass.call(null);
} else
{return null;
}
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
