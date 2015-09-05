// Compiled by ClojureScript 1.7.48 {}
goog.provide('rummikub_cljs.web');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('rummikub_cljs.core');
goog.require('taoensso.sente');
goog.require('cljs.core.async');
rummikub_cljs.web.p = (function rummikub_cljs$web$p(p1__11976_SHARP_){
return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__11976_SHARP_));
});
var map__11977_11979 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__11977_11980__$1 = ((((!((map__11977_11979 == null)))?((((map__11977_11979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11977_11979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11977_11979):map__11977_11979);
var chsk_11981 = cljs.core.get.call(null,map__11977_11980__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_11982 = cljs.core.get.call(null,map__11977_11980__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_11983 = cljs.core.get.call(null,map__11977_11980__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_11984 = cljs.core.get.call(null,map__11977_11980__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rummikub_cljs.web.chsk = chsk_11981;

rummikub_cljs.web.ch_chsk = ch_recv_11982;

rummikub_cljs.web.chsk_send_BANG_ = send_fn_11983;

rummikub_cljs.web.chsk_state = state_11984;
rummikub_cljs.web.to_animate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var c__8508__auto___12162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8508__auto___12162){
return (function (){
var f__8509__auto__ = (function (){var switch__8433__auto__ = ((function (c__8508__auto___12162){
return (function (state_12096){
var state_val_12097 = (state_12096[(1)]);
if((state_val_12097 === (7))){
var inst_11990 = (state_12096[(7)]);
var inst_11990__$1 = (state_12096[(2)]);
var inst_11992 = (inst_11990__$1 == null);
var inst_11993 = cljs.core.not.call(null,inst_11992);
var state_12096__$1 = (function (){var statearr_12098 = state_12096;
(statearr_12098[(7)] = inst_11990__$1);

return statearr_12098;
})();
if(inst_11993){
var statearr_12099_12163 = state_12096__$1;
(statearr_12099_12163[(1)] = (8));

} else {
var statearr_12100_12164 = state_12096__$1;
(statearr_12100_12164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (20))){
var inst_12024 = (state_12096[(8)]);
var inst_12030 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.chat_atom,inst_12024);
var inst_12031 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);
var state_12096__$1 = (function (){var statearr_12101 = state_12096;
(statearr_12101[(9)] = inst_12030);

return statearr_12101;
})();
var statearr_12102_12165 = state_12096__$1;
(statearr_12102_12165[(2)] = inst_12031);

(statearr_12102_12165[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (27))){
var inst_12023 = (state_12096[(10)]);
var inst_12060 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),inst_12023);
var state_12096__$1 = state_12096;
if(inst_12060){
var statearr_12103_12166 = state_12096__$1;
(statearr_12103_12166[(1)] = (32));

} else {
var statearr_12104_12167 = state_12096__$1;
(statearr_12104_12167[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (1))){
var state_12096__$1 = state_12096;
var statearr_12105_12168 = state_12096__$1;
(statearr_12105_12168[(2)] = null);

(statearr_12105_12168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (24))){
var inst_12023 = (state_12096[(10)]);
var inst_12037 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update2","rummikub/tiles-update2",230482395),inst_12023);
var state_12096__$1 = state_12096;
if(inst_12037){
var statearr_12106_12169 = state_12096__$1;
(statearr_12106_12169[(1)] = (26));

} else {
var statearr_12107_12170 = state_12096__$1;
(statearr_12107_12170[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (39))){
var inst_12012 = (state_12096[(11)]);
var inst_12072 = cljs.core.println.call(null,inst_12012);
var state_12096__$1 = state_12096;
var statearr_12108_12171 = state_12096__$1;
(statearr_12108_12171[(2)] = inst_12072);

(statearr_12108_12171[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (4))){
var state_12096__$1 = state_12096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12096__$1,(7),rummikub_cljs.web.ch_chsk);
} else {
if((state_val_12097 === (15))){
var inst_11990 = (state_12096[(7)]);
var state_12096__$1 = state_12096;
var statearr_12109_12172 = state_12096__$1;
(statearr_12109_12172[(2)] = inst_11990);

(statearr_12109_12172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (21))){
var inst_12023 = (state_12096[(10)]);
var inst_12033 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","tiles-update","rummikub/tiles-update",2017550991),inst_12023);
var state_12096__$1 = state_12096;
if(inst_12033){
var statearr_12110_12173 = state_12096__$1;
(statearr_12110_12173[(1)] = (23));

} else {
var statearr_12111_12174 = state_12096__$1;
(statearr_12111_12174[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (31))){
var inst_12040 = (state_12096[(12)]);
var inst_12057 = (state_12096[(2)]);
var inst_12058 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_12040);
var state_12096__$1 = (function (){var statearr_12112 = state_12096;
(statearr_12112[(13)] = inst_12057);

return statearr_12112;
})();
var statearr_12113_12175 = state_12096__$1;
(statearr_12113_12175[(2)] = inst_12058);

(statearr_12113_12175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (32))){
var inst_12024 = (state_12096[(8)]);
var inst_12062 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_player,inst_12024);
var state_12096__$1 = state_12096;
var statearr_12114_12176 = state_12096__$1;
(statearr_12114_12176[(2)] = inst_12062);

(statearr_12114_12176[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (40))){
var inst_12074 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12115_12177 = state_12096__$1;
(statearr_12115_12177[(2)] = inst_12074);

(statearr_12115_12177[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (33))){
var inst_12023 = (state_12096[(10)]);
var inst_12064 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","users-update","rummikub/users-update",-439197917),inst_12023);
var state_12096__$1 = state_12096;
if(inst_12064){
var statearr_12116_12178 = state_12096__$1;
(statearr_12116_12178[(1)] = (35));

} else {
var statearr_12117_12179 = state_12096__$1;
(statearr_12117_12179[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (13))){
var inst_12002 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12118_12180 = state_12096__$1;
(statearr_12118_12180[(2)] = inst_12002);

(statearr_12118_12180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (22))){
var inst_12084 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12119_12181 = state_12096__$1;
(statearr_12119_12181[(2)] = inst_12084);

(statearr_12119_12181[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (36))){
var inst_12023 = (state_12096[(10)]);
var inst_12068 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),inst_12023);
var state_12096__$1 = state_12096;
if(inst_12068){
var statearr_12120_12182 = state_12096__$1;
(statearr_12120_12182[(1)] = (38));

} else {
var statearr_12121_12183 = state_12096__$1;
(statearr_12121_12183[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (29))){
var inst_12041 = (state_12096[(14)]);
var inst_12047 = (state_12096[(15)]);
var inst_12054 = cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.assoc,inst_12041,inst_12047);
var state_12096__$1 = state_12096;
var statearr_12122_12184 = state_12096__$1;
(statearr_12122_12184[(2)] = inst_12054);

(statearr_12122_12184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (6))){
var inst_12092 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12123_12185 = state_12096__$1;
(statearr_12123_12185[(2)] = inst_12092);

(statearr_12123_12185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (28))){
var inst_12080 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12124_12186 = state_12096__$1;
(statearr_12124_12186[(2)] = inst_12080);

(statearr_12124_12186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (25))){
var inst_12082 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12125_12187 = state_12096__$1;
(statearr_12125_12187[(2)] = inst_12082);

(statearr_12125_12187[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (34))){
var inst_12078 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12126_12188 = state_12096__$1;
(statearr_12126_12188[(2)] = inst_12078);

(statearr_12126_12188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (17))){
var inst_12023 = (state_12096[(10)]);
var inst_12016 = (state_12096[(16)]);
var inst_12023__$1 = cljs.core.nth.call(null,inst_12016,(0),null);
var inst_12024 = cljs.core.nth.call(null,inst_12016,(1),null);
var inst_12028 = cljs.core._EQ_.call(null,new cljs.core.Keyword("rummikub","chat-update","rummikub/chat-update",-1724036120),inst_12023__$1);
var state_12096__$1 = (function (){var statearr_12127 = state_12096;
(statearr_12127[(10)] = inst_12023__$1);

(statearr_12127[(8)] = inst_12024);

return statearr_12127;
})();
if(inst_12028){
var statearr_12128_12189 = state_12096__$1;
(statearr_12128_12189[(1)] = (20));

} else {
var statearr_12129_12190 = state_12096__$1;
(statearr_12129_12190[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (3))){
var inst_12094 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12096__$1,inst_12094);
} else {
if((state_val_12097 === (12))){
var state_12096__$1 = state_12096;
var statearr_12130_12191 = state_12096__$1;
(statearr_12130_12191[(2)] = false);

(statearr_12130_12191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (2))){
var state_12096__$1 = state_12096;
var statearr_12131_12192 = state_12096__$1;
(statearr_12131_12192[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (23))){
var inst_12024 = (state_12096[(8)]);
var inst_12035 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.tiles_atom,inst_12024);
var state_12096__$1 = state_12096;
var statearr_12133_12193 = state_12096__$1;
(statearr_12133_12193[(2)] = inst_12035);

(statearr_12133_12193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (35))){
var inst_12024 = (state_12096[(8)]);
var inst_12066 = cljs.core.reset_BANG_.call(null,rummikub_cljs.web.users_atom,inst_12024);
var state_12096__$1 = state_12096;
var statearr_12134_12194 = state_12096__$1;
(statearr_12134_12194[(2)] = inst_12066);

(statearr_12134_12194[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (19))){
var inst_12088 = (state_12096[(2)]);
var state_12096__$1 = (function (){var statearr_12135 = state_12096;
(statearr_12135[(17)] = inst_12088);

return statearr_12135;
})();
var statearr_12136_12195 = state_12096__$1;
(statearr_12136_12195[(2)] = null);

(statearr_12136_12195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (11))){
var state_12096__$1 = state_12096;
var statearr_12137_12196 = state_12096__$1;
(statearr_12137_12196[(2)] = true);

(statearr_12137_12196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (9))){
var state_12096__$1 = state_12096;
var statearr_12138_12197 = state_12096__$1;
(statearr_12138_12197[(2)] = false);

(statearr_12138_12197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (5))){
var state_12096__$1 = state_12096;
var statearr_12139_12198 = state_12096__$1;
(statearr_12139_12198[(2)] = null);

(statearr_12139_12198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (14))){
var inst_11990 = (state_12096[(7)]);
var inst_12007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11990);
var state_12096__$1 = state_12096;
var statearr_12140_12199 = state_12096__$1;
(statearr_12140_12199[(2)] = inst_12007);

(statearr_12140_12199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (26))){
var inst_12024 = (state_12096[(8)]);
var inst_12040 = cljs.core.nth.call(null,inst_12024,(0),null);
var inst_12041 = cljs.core.nth.call(null,inst_12024,(1),null);
var inst_12042 = cljs.core.nth.call(null,inst_12024,(2),null);
var inst_12043 = cljs.core.nth.call(null,inst_12024,(3),null);
var inst_12044 = cljs.core.first.call(null,inst_12042);
var inst_12045 = cljs.core.last.call(null,inst_12042);
var inst_12046 = cljs.core.drop_last.call(null,(1),inst_12042);
var inst_12047 = cljs.core.drop.call(null,(1),inst_12046);
var inst_12048 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);
var inst_12049 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_12048);
var inst_12050 = cljs.core.not_EQ_.call(null,inst_12043,inst_12049);
var inst_12051 = cljs.core._EQ_.call(null,"table",inst_12044,inst_12045);
var inst_12052 = (inst_12050) && (inst_12051);
var state_12096__$1 = (function (){var statearr_12141 = state_12096;
(statearr_12141[(14)] = inst_12041);

(statearr_12141[(15)] = inst_12047);

(statearr_12141[(12)] = inst_12040);

return statearr_12141;
})();
if(cljs.core.truth_(inst_12052)){
var statearr_12142_12200 = state_12096__$1;
(statearr_12142_12200[(1)] = (29));

} else {
var statearr_12143_12201 = state_12096__$1;
(statearr_12143_12201[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (16))){
var inst_12012 = (state_12096[(11)]);
var inst_12010 = (state_12096[(2)]);
var inst_12011 = cljs.core.get.call(null,inst_12010,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var inst_12012__$1 = cljs.core.get.call(null,inst_12010,new cljs.core.Keyword(null,"event","event",301435442));
var inst_12013 = cljs.core.get.call(null,inst_12010,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var inst_12014 = cljs.core.get.call(null,inst_12010,new cljs.core.Keyword(null,"push-fn","push-fn",269173601));
var inst_12015 = cljs.core.nth.call(null,inst_12012__$1,(0),null);
var inst_12016 = cljs.core.nth.call(null,inst_12012__$1,(1),null);
var inst_12020 = cljs.core._EQ_.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),inst_12015);
var state_12096__$1 = (function (){var statearr_12144 = state_12096;
(statearr_12144[(18)] = inst_12013);

(statearr_12144[(19)] = inst_12011);

(statearr_12144[(20)] = inst_12014);

(statearr_12144[(11)] = inst_12012__$1);

(statearr_12144[(16)] = inst_12016);

return statearr_12144;
})();
if(inst_12020){
var statearr_12145_12202 = state_12096__$1;
(statearr_12145_12202[(1)] = (17));

} else {
var statearr_12146_12203 = state_12096__$1;
(statearr_12146_12203[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (38))){
var inst_12070 = rummikub_cljs.web.play_sound.call(null);
var state_12096__$1 = state_12096;
var statearr_12147_12204 = state_12096__$1;
(statearr_12147_12204[(2)] = inst_12070);

(statearr_12147_12204[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (30))){
var state_12096__$1 = state_12096;
var statearr_12148_12205 = state_12096__$1;
(statearr_12148_12205[(2)] = null);

(statearr_12148_12205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (10))){
var inst_12005 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
if(cljs.core.truth_(inst_12005)){
var statearr_12149_12206 = state_12096__$1;
(statearr_12149_12206[(1)] = (14));

} else {
var statearr_12150_12207 = state_12096__$1;
(statearr_12150_12207[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (18))){
var inst_12012 = (state_12096[(11)]);
var inst_12086 = cljs.core.println.call(null,inst_12012);
var state_12096__$1 = state_12096;
var statearr_12151_12208 = state_12096__$1;
(statearr_12151_12208[(2)] = inst_12086);

(statearr_12151_12208[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (37))){
var inst_12076 = (state_12096[(2)]);
var state_12096__$1 = state_12096;
var statearr_12152_12209 = state_12096__$1;
(statearr_12152_12209[(2)] = inst_12076);

(statearr_12152_12209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12097 === (8))){
var inst_11990 = (state_12096[(7)]);
var inst_11995 = inst_11990.cljs$lang$protocol_mask$partition0$;
var inst_11996 = (inst_11995 & (64));
var inst_11997 = inst_11990.cljs$core$ISeq$;
var inst_11998 = (inst_11996) || (inst_11997);
var state_12096__$1 = state_12096;
if(cljs.core.truth_(inst_11998)){
var statearr_12153_12210 = state_12096__$1;
(statearr_12153_12210[(1)] = (11));

} else {
var statearr_12154_12211 = state_12096__$1;
(statearr_12154_12211[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__8508__auto___12162))
;
return ((function (switch__8433__auto__,c__8508__auto___12162){
return (function() {
var rummikub_cljs$web$state_machine__8434__auto__ = null;
var rummikub_cljs$web$state_machine__8434__auto____0 = (function (){
var statearr_12158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12158[(0)] = rummikub_cljs$web$state_machine__8434__auto__);

(statearr_12158[(1)] = (1));

return statearr_12158;
});
var rummikub_cljs$web$state_machine__8434__auto____1 = (function (state_12096){
while(true){
var ret_value__8435__auto__ = (function (){try{while(true){
var result__8436__auto__ = switch__8433__auto__.call(null,state_12096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8436__auto__;
}
break;
}
}catch (e12159){if((e12159 instanceof Object)){
var ex__8437__auto__ = e12159;
var statearr_12160_12212 = state_12096;
(statearr_12160_12212[(5)] = ex__8437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12213 = state_12096;
state_12096 = G__12213;
continue;
} else {
return ret_value__8435__auto__;
}
break;
}
});
rummikub_cljs$web$state_machine__8434__auto__ = function(state_12096){
switch(arguments.length){
case 0:
return rummikub_cljs$web$state_machine__8434__auto____0.call(this);
case 1:
return rummikub_cljs$web$state_machine__8434__auto____1.call(this,state_12096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rummikub_cljs$web$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$0 = rummikub_cljs$web$state_machine__8434__auto____0;
rummikub_cljs$web$state_machine__8434__auto__.cljs$core$IFn$_invoke$arity$1 = rummikub_cljs$web$state_machine__8434__auto____1;
return rummikub_cljs$web$state_machine__8434__auto__;
})()
;})(switch__8433__auto__,c__8508__auto___12162))
})();
var state__8510__auto__ = (function (){var statearr_12161 = f__8509__auto__.call(null);
(statearr_12161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8508__auto___12162);

return statearr_12161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8510__auto__);
});})(c__8508__auto___12162))
);

rummikub_cljs.web.get_user = (function rummikub_cljs$web$get_user(){
var temp__4423__auto__ = prompt("Your Name");
if(cljs.core.truth_(temp__4423__auto__)){
var user = temp__4423__auto__;
var user__$1 = user.trim();
if(!(cljs.core.empty_QMARK_.call(null,user__$1))){
return ajax.core.POST.call(null,"/add-user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),user__$1], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (user__$1,user,temp__4423__auto__){
return (function (p1__12214_SHARP_){
cljs.core.reset_BANG_.call(null,rummikub_cljs.web.user_atom,p1__12214_SHARP_);

return rummikub_cljs.web.render.call(null);
});})(user__$1,user,temp__4423__auto__))
], null));
} else {
return null;
}
} else {
return null;
}
});
rummikub_cljs.web.color_str = (function rummikub_cljs$web$color_str(p__12215){
var vec__12217 = p__12215;
var r = cljs.core.nth.call(null,vec__12217,(0),null);
var g = cljs.core.nth.call(null,vec__12217,(1),null);
var b = cljs.core.nth.call(null,vec__12217,(2),null);
return rummikub_cljs.core.format.call(null,"rgb(%s, %s, %s)",r,g,b);
});
rummikub_cljs.web.type_chat = (function rummikub_cljs$web$type_chat(event){
var val = event.target.value;
return rummikub_cljs.web.p.call(null,val);
});
rummikub_cljs.web.current_chat = reagent.core.atom.call(null,"");
rummikub_cljs.web.new_chat = (function rummikub_cljs$web$new_chat(){
var val = document.getElementById("new-chat").value;
var new_chat__$1 = cljs.core.assoc.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),new cljs.core.Keyword(null,"content","content",15833224),val);
rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-chat","rummikub/new-chat",-2037447566),new_chat__$1], null));

cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,"");

return false;
});
rummikub_cljs.web.scroll_to_bottom = (function rummikub_cljs$web$scroll_to_bottom(this$){
var node = this$.getDOMNode();
return node.scrollTop = node.scrollHeight;
});
rummikub_cljs.web.scroll_box = cljs.core.with_meta.call(null,(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"height","height",1025178622),"80%"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Chat Box"], null),cljs.core.map_indexed.call(null,(function (i,p__12218){
var map__12219 = p__12218;
var map__12219__$1 = ((((!((map__12219 == null)))?((((map__12219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12219):map__12219);
var user = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var color = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var content = cljs.core.get.call(null,map__12219__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user], null),": ",content], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(i),cljs.core.str("-chat-msg")].join('')], null));
}),cljs.core.deref.call(null,rummikub_cljs.web.chat_atom))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),rummikub_cljs.web.scroll_to_bottom,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),rummikub_cljs.web.scroll_to_bottom], null));
rummikub_cljs.web.margin = "0.5%";
rummikub_cljs.web.chat_box = (function rummikub_cljs$web$chat_box(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"30%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.scroll_box], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),rummikub_cljs.web.new_chat], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"new-chat",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rummikub_cljs.web.current_chat),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12221_SHARP_){
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.current_chat,p1__12221_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Minimize",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,false);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Edit Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_users_QMARK_,true);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Backup",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rummikub_cljs.core.link_to.call(null,"/rummikub-backup");
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"report-to-add",new cljs.core.Keyword(null,"on-change","on-change",-732046149),send_attachment], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null);
});
rummikub_cljs.web.minimized_chat_box = (function rummikub_cljs$web$minimized_chat_box(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_chat_QMARK_,true);
})], null),"X"], null);
});
rummikub_cljs.web.show_chat_QMARK_ = reagent.core.atom.call(null,true);
rummikub_cljs.web.dragging_tile = reagent.core.atom.call(null,null);
rummikub_cljs.web.pass_ints = cljs.core.concat.call(null,cljs.core.repeat.call(null,(44),(0)),cljs.core.range.call(null,(6)));
rummikub_cljs.web.play_sound = (function rummikub_cljs$web$play_sound(){
var G__12223 = document.getElementById(rummikub_cljs.core.format.call(null,"pass%s",cljs.core.rand_nth.call(null,rummikub_cljs.web.pass_ints)));
G__12223.load();

G__12223.play();

return G__12223;
});
rummikub_cljs.web.pass = (function rummikub_cljs$web$pass(){
rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pass-sound","rummikub/pass-sound",-362398972),null], null));

return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-user","rummikub/new-user",-1936333308),null], null));
});
rummikub_cljs.web.turn_indicator = (function rummikub_cljs$web$turn_indicator(){
var map__12228 = cljs.core.deref.call(null,rummikub_cljs.web.user_atom);
var map__12228__$1 = ((((!((map__12228 == null)))?((((map__12228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12228):map__12228);
var this_player = cljs.core.get.call(null,map__12228__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var map__12229 = cljs.core.deref.call(null,rummikub_cljs.web.current_player);
var map__12229__$1 = ((((!((map__12229 == null)))?((((map__12229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12229):map__12229);
var user = cljs.core.get.call(null,map__12229__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var color = cljs.core.get.call(null,map__12229__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color),new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),rummikub_cljs.core.format.call(null,"%s's Turn ",user),((cljs.core._EQ_.call(null,this_player,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"End Turn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),rummikub_cljs.web.pass], null)], null):null)], null);
});
rummikub_cljs.web.stand_box = (function rummikub_cljs$web$stand_box(k,i,j,tile,user,value,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",(i * (24)),"20px","absolute","1px solid black","20px",(j * (24)),"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,user),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
});
rummikub_cljs.web.before_update = (function rummikub_cljs$web$before_update(_,p__12232){
var vec__12234 = p__12232;
var ___$1 = cljs.core.nth.call(null,vec__12234,(0),null);
var k = cljs.core.nth.call(null,vec__12234,(1),null);
return rummikub_cljs.web.animate.call(null,k);
});
rummikub_cljs.web.table_box = cljs.core.with_meta.call(null,(function (k,left,top,color,tile,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],[color,"center",top,"20px","absolute","1px solid black","20px",left,"1px"]),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),rummikub_cljs.web.drag_start.call(null,k,tile,"table"),new cljs.core.Keyword(null,"id","id",-1388402092),rummikub_cljs.core.clean_id.call(null,color,"-",value,"-tile")], null),value], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),rummikub_cljs.web.before_update], null));
rummikub_cljs.web.animate = (function rummikub_cljs$web$animate(){
var args12235 = [];
var len__5499__auto___12245 = arguments.length;
var i__5500__auto___12246 = (0);
while(true){
if((i__5500__auto___12246 < len__5499__auto___12245)){
args12235.push((arguments[i__5500__auto___12246]));

var G__12247 = (i__5500__auto___12246 + (1));
i__5500__auto___12246 = G__12247;
continue;
} else {
}
break;
}

var G__12237 = args12235.length;
switch (G__12237) {
case 2:
return rummikub_cljs.web.animate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rummikub_cljs.web.animate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12235.length)].join('')));

}
});

rummikub_cljs.web.animate.cljs$core$IFn$_invoke$arity$2 = (function (k,points){
var vec__12238 = k.split(" ");
var color = cljs.core.nth.call(null,vec__12238,(0),null);
var value = cljs.core.nth.call(null,vec__12238,(1),null);
var to_animate = $(rummikub_cljs.core.clean_id.call(null,"#",color,"-",value,"-tile"));
var seq__12239 = cljs.core.seq.call(null,points);
var chunk__12240 = null;
var count__12241 = (0);
var i__12242 = (0);
while(true){
if((i__12242 < count__12241)){
var vec__12243 = cljs.core._nth.call(null,chunk__12240,i__12242);
var x = cljs.core.nth.call(null,vec__12243,(0),null);
var y = cljs.core.nth.call(null,vec__12243,(1),null);
to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));

var G__12249 = seq__12239;
var G__12250 = chunk__12240;
var G__12251 = count__12241;
var G__12252 = (i__12242 + (1));
seq__12239 = G__12249;
chunk__12240 = G__12250;
count__12241 = G__12251;
i__12242 = G__12252;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12239);
if(temp__4425__auto__){
var seq__12239__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12239__$1)){
var c__5244__auto__ = cljs.core.chunk_first.call(null,seq__12239__$1);
var G__12253 = cljs.core.chunk_rest.call(null,seq__12239__$1);
var G__12254 = c__5244__auto__;
var G__12255 = cljs.core.count.call(null,c__5244__auto__);
var G__12256 = (0);
seq__12239 = G__12253;
chunk__12240 = G__12254;
count__12241 = G__12255;
i__12242 = G__12256;
continue;
} else {
var vec__12244 = cljs.core.first.call(null,seq__12239__$1);
var x = cljs.core.nth.call(null,vec__12244,(0),null);
var y = cljs.core.nth.call(null,vec__12244,(1),null);
to_animate.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"left","left",-399115937),x], null)),(1));

var G__12257 = cljs.core.next.call(null,seq__12239__$1);
var G__12258 = null;
var G__12259 = (0);
var G__12260 = (0);
seq__12239 = G__12257;
chunk__12240 = G__12258;
count__12241 = G__12259;
i__12242 = G__12260;
continue;
}
} else {
return null;
}
}
break;
}
});

rummikub_cljs.web.animate.cljs$core$IFn$_invoke$arity$1 = (function (k){
var temp__4423__auto__ = cljs.core.deref.call(null,rummikub_cljs.web.to_animate).call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var points = temp__4423__auto__;
rummikub_cljs.web.animate.call(null,k,points);

return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.to_animate,cljs.core.dissoc,k);
} else {
return null;
}
});

rummikub_cljs.web.animate.cljs$lang$maxFixedArity = 2;
rummikub_cljs.web.table = (function rummikub_cljs$web$table(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"75.5%"], null),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__12261_SHARP_){
return p1__12261_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__12262_SHARP_){
return p1__12262_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__12263_SHARP_){
var vec__12281 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);
var k = cljs.core.nth.call(null,vec__12281,(0),null);
var tile = cljs.core.nth.call(null,vec__12281,(1),null);
var x = (p1__12263_SHARP_.clientX - (17));
var y = (p1__12263_SHARP_.clientY - (15));
var new_tile = cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"location","location",1815599388),"table");
var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),"table");
var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-update","rummikub/tile-update",-1265699015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_tile,drag_coords,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null)], null);
return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
})], null),(function (){var iter__5213__auto__ = (function rummikub_cljs$web$table_$_iter__12282(s__12283){
return (new cljs.core.LazySeq(null,(function (){
var s__12283__$1 = s__12283;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12283__$1);
if(temp__4425__auto__){
var s__12283__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12283__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__12283__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__12285 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__12284 = (0);
while(true){
if((i__12284 < size__5212__auto__)){
var vec__12292 = cljs.core._nth.call(null,c__5211__auto__,i__12284);
var k = cljs.core.nth.call(null,vec__12292,(0),null);
var tile = cljs.core.nth.call(null,vec__12292,(1),null);
var map__12293 = tile;
var map__12293__$1 = ((((!((map__12293 == null)))?((((map__12293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12293):map__12293);
var location = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var left = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var color = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var value = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,location,"table")){
cljs.core.chunk_append.call(null,b__12285,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("tablized"),cljs.core.str(k)].join('')], null)));

var G__12298 = (i__12284 + (1));
i__12284 = G__12298;
continue;
} else {
var G__12299 = (i__12284 + (1));
i__12284 = G__12299;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12285),rummikub_cljs$web$table_$_iter__12282.call(null,cljs.core.chunk_rest.call(null,s__12283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12285),null);
}
} else {
var vec__12295 = cljs.core.first.call(null,s__12283__$2);
var k = cljs.core.nth.call(null,vec__12295,(0),null);
var tile = cljs.core.nth.call(null,vec__12295,(1),null);
var map__12296 = tile;
var map__12296__$1 = ((((!((map__12296 == null)))?((((map__12296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12296):map__12296);
var location = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var left = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var color = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var value = cljs.core.get.call(null,map__12296__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,location,"table")){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table_box,k,left,top,color,tile,value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("tablized"),cljs.core.str(k)].join('')], null)),rummikub_cljs$web$table_$_iter__12282.call(null,cljs.core.rest.call(null,s__12283__$2)));
} else {
var G__12300 = cljs.core.rest.call(null,s__12283__$2);
s__12283__$1 = G__12300;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5213__auto__.call(null,cljs.core.deref.call(null,rummikub_cljs.web.tiles_atom));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.turn_indicator], null)], null);
});
rummikub_cljs.web.drag_coords = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
rummikub_cljs.web.drag_start = (function rummikub_cljs$web$drag_start(k,tile,location){
return (function (p1__12301_SHARP_){
p1__12301_SHARP_.dataTransfer.setData("text/html","");

cljs.core.reset_BANG_.call(null,rummikub_cljs.web.dragging_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile], null));

return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.drag_coords,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null));
});
});
rummikub_cljs.web.stand = (function rummikub_cljs$web$stand(){
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?"67%":"95%"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"height","height",1025178622),"20%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"stand",new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (user){
return (function (p1__12302_SHARP_){
return p1__12302_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (user){
return (function (p1__12303_SHARP_){
return p1__12303_SHARP_.preventDefault();
});})(user))
,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),((function (user){
return (function (p1__12304_SHARP_){
var vec__12324 = cljs.core.deref.call(null,rummikub_cljs.web.dragging_tile);
var k = cljs.core.nth.call(null,vec__12324,(0),null);
var tile = cljs.core.nth.call(null,vec__12324,(1),null);
var tile_x = (p1__12304_SHARP_.clientX - (20));
var tile_y = (p1__12304_SHARP_.clientY - (20));
var map__12325 = cljs.core.js__GT_clj.call(null,$("#stand").position());
var map__12325__$1 = ((((!((map__12325 == null)))?((((map__12325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12325):map__12325);
var stand_x = cljs.core.get.call(null,map__12325__$1,"left");
var stand_y = cljs.core.get.call(null,map__12325__$1,"top");
var rel_x = (tile_x - stand_x);
var rel_y = (tile_y - stand_y);
var i = ((rel_y / (24)) | (0));
var j = ((tile_x / (24)) | (0));
var drag_coords = cljs.core.conj.call(null,cljs.core.deref.call(null,rummikub_cljs.web.drag_coords),user);
var event = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","tile-insert","rummikub/tile-insert",974698413),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tile,i,j,user,drag_coords], null)], null);
return rummikub_cljs.web.chsk_send_BANG_.call(null,event);
});})(user))
], null),(function (){var iter__5213__auto__ = ((function (user){
return (function rummikub_cljs$web$stand_$_iter__12327(s__12328){
return (new cljs.core.LazySeq(null,((function (user){
return (function (){
var s__12328__$1 = s__12328;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12328__$1);
if(temp__4425__auto__){
var s__12328__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12328__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__12328__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__12330 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__12329 = (0);
while(true){
if((i__12329 < size__5212__auto__)){
var vec__12337 = cljs.core._nth.call(null,c__5211__auto__,i__12329);
var k = cljs.core.nth.call(null,vec__12337,(0),null);
var tile = cljs.core.nth.call(null,vec__12337,(1),null);
var map__12338 = tile;
var map__12338__$1 = ((((!((map__12338 == null)))?((((map__12338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12338):map__12338);
var location = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var i = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var color = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var value = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,location,user)){
cljs.core.chunk_append.call(null,b__12330,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__12343 = (i__12329 + (1));
i__12329 = G__12343;
continue;
} else {
var G__12344 = (i__12329 + (1));
i__12329 = G__12344;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12330),rummikub_cljs$web$stand_$_iter__12327.call(null,cljs.core.chunk_rest.call(null,s__12328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12330),null);
}
} else {
var vec__12340 = cljs.core.first.call(null,s__12328__$2);
var k = cljs.core.nth.call(null,vec__12340,(0),null);
var tile = cljs.core.nth.call(null,vec__12340,(1),null);
var map__12341 = tile;
var map__12341__$1 = ((((!((map__12341 == null)))?((((map__12341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12341):map__12341);
var location = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var i = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var j = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var color = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var value = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,location,user)){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand_box,k,i,j,tile,user,value,color], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),rummikub_cljs$web$stand_$_iter__12327.call(null,cljs.core.rest.call(null,s__12328__$2)));
} else {
var G__12345 = cljs.core.rest.call(null,s__12328__$2);
s__12328__$1 = G__12345;
continue;
}
}
} else {
return null;
}
break;
}
});})(user))
,null,null));
});})(user))
;
return iter__5213__auto__.call(null,cljs.core.deref.call(null,rummikub_cljs.web.tiles_atom));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Pick Up",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user){
return (function (){
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pick-up","rummikub/pick-up",-386756038),user], null));
});})(user))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Sort Tiles",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user){
return (function (){
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","sort-tiles","rummikub/sort-tiles",-181838496),user], null));
});})(user))
], null)], null)], null)], null);
});
rummikub_cljs.web.show_users_QMARK_ = reagent.core.atom.call(null,false);
rummikub_cljs.web.users_box = (function rummikub_cljs$web$users_box(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"28%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"margin","margin",-995903681),rummikub_cljs.web.margin,new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993)," Edit Users"], null),(function (){var iter__5213__auto__ = (function rummikub_cljs$web$users_box_$_iter__12358(s__12359){
return (new cljs.core.LazySeq(null,(function (){
var s__12359__$1 = s__12359;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12359__$1);
if(temp__4425__auto__){
var s__12359__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12359__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__12359__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__12361 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__12360 = (0);
while(true){
if((i__12360 < size__5212__auto__)){
var map__12366 = cljs.core._nth.call(null,c__5211__auto__,i__12360);
var map__12366__$1 = ((((!((map__12366 == null)))?((((map__12366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12366):map__12366);
var user = cljs.core.get.call(null,map__12366__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var color = cljs.core.get.call(null,map__12366__$1,new cljs.core.Keyword(null,"color","color",1011675173));
cljs.core.chunk_append.call(null,b__12361,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12360,map__12366,map__12366__$1,user,color,c__5211__auto__,size__5212__auto__,b__12361,s__12359__$2,temp__4425__auto__){
return (function (){
if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user)))){
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else {
return null;
}
});})(i__12360,map__12366,map__12366__$1,user,color,c__5211__auto__,size__5212__auto__,b__12361,s__12359__$2,temp__4425__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("delete-"),cljs.core.str(user)].join('')], null)));

var G__12370 = (i__12360 + (1));
i__12360 = G__12370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),rummikub_cljs$web$users_box_$_iter__12358.call(null,cljs.core.chunk_rest.call(null,s__12359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),null);
}
} else {
var map__12368 = cljs.core.first.call(null,s__12359__$2);
var map__12368__$1 = ((((!((map__12368 == null)))?((((map__12368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12368):map__12368);
var user = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var color = cljs.core.get.call(null,map__12368__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rummikub_cljs.web.color_str.call(null,color)], null)], null),user," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__12368,map__12368__$1,user,color,s__12359__$2,temp__4425__auto__){
return (function (){
if(cljs.core.truth_(confirm(rummikub_cljs.core.format.call(null,"Really delete %s?",user)))){
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","remove-user","rummikub/remove-user",886628233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
} else {
return null;
}
});})(map__12368,map__12368__$1,user,color,s__12359__$2,temp__4425__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("delete-"),cljs.core.str(user)].join('')], null)),rummikub_cljs$web$users_box_$_iter__12358.call(null,cljs.core.rest.call(null,s__12359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5213__auto__.call(null,cljs.core.deref.call(null,rummikub_cljs.web.users_atom));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"New Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","new-game","rummikub/new-game",-639074722),null], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Done",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,rummikub_cljs.web.show_users_QMARK_,false);
})], null)], null)], null);
});
rummikub_cljs.web.contents = cljs.core.with_meta.call(null,(function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__12371_SHARP_){
var x = p1__12371_SHARP_.clientX;
var y = p1__12371_SHARP_.clientY;
return cljs.core.swap_BANG_.call(null,rummikub_cljs.web.drag_coords,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_users_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.users_box], null):(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.show_chat_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.chat_box], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.minimized_chat_box], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.table], null),(cljs.core.truth_(cljs.core.some.call(null,(function (p__12372){
var map__12373 = p__12372;
var map__12373__$1 = ((((!((map__12373 == null)))?((((map__12373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12373):map__12373);
var user = cljs.core.get.call(null,map__12373__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return cljs.core._EQ_.call(null,user,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom)));
}),cljs.core.deref.call(null,rummikub_cljs.web.users_atom)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.stand], null):null),(function (){var iter__5213__auto__ = (function rummikub_cljs$web$iter__12375(s__12376){
return (new cljs.core.LazySeq(null,(function (){
var s__12376__$1 = s__12376;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12376__$1);
if(temp__4425__auto__){
var s__12376__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12376__$2)){
var c__5211__auto__ = cljs.core.chunk_first.call(null,s__12376__$2);
var size__5212__auto__ = cljs.core.count.call(null,c__5211__auto__);
var b__12378 = cljs.core.chunk_buffer.call(null,size__5212__auto__);
if((function (){var i__12377 = (0);
while(true){
if((i__12377 < size__5212__auto__)){
var i = cljs.core._nth.call(null,c__5211__auto__,i__12377);
cljs.core.chunk_append.call(null,b__12378,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("pass"),cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),rummikub_cljs.core.format.call(null,"/pass%s.wav",i),new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("pass"),cljs.core.str(i)].join('')], null)));

var G__12379 = (i__12377 + (1));
i__12377 = G__12379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12378),rummikub_cljs$web$iter__12375.call(null,cljs.core.chunk_rest.call(null,s__12376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12378),null);
}
} else {
var i = cljs.core.first.call(null,s__12376__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("pass"),cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),rummikub_cljs.core.format.call(null,"/pass%s.wav",i),new cljs.core.Keyword(null,"type","type",1174270348),"audio/wav"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("pass"),cljs.core.str(i)].join('')], null)),rummikub_cljs$web$iter__12375.call(null,cljs.core.rest.call(null,s__12376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5213__auto__.call(null,cljs.core.range.call(null,(6)));
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
key("enter",(function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,rummikub_cljs.web.user_atom),cljs.core.deref.call(null,rummikub_cljs.web.current_player))){
return rummikub_cljs.web.pass.call(null);
} else {
return null;
}
}));

return key("p",(function (){
return rummikub_cljs.web.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rummikub","pick-up","rummikub/pick-up",-386756038),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))], null));
}));
})], null));
rummikub_cljs.web.render = (function rummikub_cljs$web$render(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rummikub_cljs.web.contents], null),document.getElementById("content"));
});
rummikub_cljs.web.main = (function rummikub_cljs$web$main(){
if(cljs.core.truth_(cljs.core.deref.call(null,rummikub_cljs.web.user_atom))){
return rummikub_cljs.web.render.call(null);
} else {
return rummikub_cljs.web.get_user.call(null);
}
});
