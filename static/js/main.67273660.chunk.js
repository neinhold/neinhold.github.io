(this.webpackJsonphax=this.webpackJsonphax||[]).push([[0],{32:function(e,a,t){e.exports=t(68)},37:function(e,a,t){},38:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},39:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(29),s=t.n(r),i=(t(37),t(13)),c=t(14),o=t(18),m=t(17),u=(t(38),t(39),t(9)),d=t.n(u),v=t(6),h=t(10),f=t.n(h),p=(t(62),"https://lively-scene-db1a.neinhold.workers.dev/?http://85.159.209.166.nip.io/"),E="http://www.haxball.com/replay?v=3#http://85.159.209.166/replays/",N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(i.a)(this,t),(l=a.call(this,e)).state={curlink:"",stats:[],replayInfo:[],chatLogs:[],chatLog:[],playerClicked:{}},d.a.get(p+"data/url.txt").then((function(e){var a=e.data;l.state.curlink=a,l.setState({curlink:l.state.curlink})})),l.getJsonl("data/stats"),l.getJsonl("data/replayInfo"),d.a.get(p+"chatlogs/").then((function(e){var a=e.data;l.state.chatLogs=a,l.setState({curlink:l.state.curlink})})),l}return Object(c.a)(t,[{key:"getJsonl",value:function(e){var a=this,t=p+e+".jsonl";d.a.get(t).then((function(t){var l=[t.data];"string"===typeof t.data&&(l=y(t.data)),"data/stats"==e&&(l.sort(a.sortByProperty("totalmatchcount")),a.state.stats=l),"data/replayInfo"==e&&(l.sort(a.sortByProperty("id")),a.state.replayInfo=l),e.includes("chatlogs/")&&(a.state.chatLog=l),a.setState({curlink:a.state.curlink})}))}},{key:"msToString",value:function(e){var a=Math.floor(e/1e3),t=Math.floor(a/3600),l=Math.floor((a-3600*t)/60);return t+"h"+l+"m"+(a-3600*t-60*l)+"s"}},{key:"sortByProperty",value:function(e){return function(a,t){var l=parseInt(a[e]),n=parseInt(t[e]);return l<n?1:l>n?-1:0}}},{key:"playerClicked",value:function(e){this.state.playerClicked[e]=!this.state.playerClicked[e],this.setState({playerClicked:this.state.playerClicked})}},{key:"renderPlayerStats",value:function(e,a){var t=this;return"HOST_AUTH"==e.auth?n.a.createElement("div",null):(a in this.state.playerClicked||(this.state.playerClicked[a]=!1),this.state.playerClicked[a]?n.a.createElement("div",{className:"Container Click",onClick:function(){return t.playerClicked(a)}},n.a.createElement("div",{className:"InfoTitle"},e.lastname),n.a.createElement("div",{className:"InfoPlainTitle"},"Games played"),n.a.createElement("div",{className:"BigDigit"},e.totalmatchcount),n.a.createElement("div",{className:"PlayerStatsGames"},n.a.createElement("div",{className:"InfoBox"},n.a.createElement("div",{className:"InfoPlainTitle"},"Wins"),n.a.createElement("div",{className:"SmallDigit"},e.totalwincount),n.a.createElement("hr",null),n.a.createElement("div",{className:"SmallDigitSmall"},(Math.floor(100*(e.totalwincount/e.totalmatchcount).toFixed(2))||0)+"%"),n.a.createElement("div",{className:"SubTitle"},"won")),n.a.createElement("div",{className:"InfoBox"},n.a.createElement("div",{className:"InfoPlainTitle"},"Losses"),n.a.createElement("div",{className:"SmallDigit"},e.totallosscount),n.a.createElement("hr",null),n.a.createElement("div",{className:"SmallDigitSmall"},(Math.floor(100*(e.totallosscount/e.totalmatchcount).toFixed(2))||0)+"%"),n.a.createElement("div",{className:"SubTitle"},"lost")),n.a.createElement("div",{className:"InfoBox"},n.a.createElement("div",{className:"InfoPlainTitle"},"Goals"),n.a.createElement("div",{className:"SmallDigit"},e.totalscorecount),n.a.createElement("hr",null),n.a.createElement("div",{className:"SmallDigitSmall"},(e.totalscorecount/e.totalmatchcount||0).toFixed(2)),n.a.createElement("div",{className:"SubTitle"},"per game")),n.a.createElement("div",{className:"InfoBox"},n.a.createElement("div",{className:"InfoPlainTitle"},"Assists"),n.a.createElement("div",{className:"SmallDigit"},e.totalassistcount),n.a.createElement("hr",null),n.a.createElement("div",{className:"SmallDigitSmall"},(e.totalassistcount/e.totalmatchcount||0).toFixed(2)),n.a.createElement("div",{className:"SubTitle"},"per game")),n.a.createElement("div",{className:"InfoPlainTitle"},"Total time played"),n.a.createElement("div",{className:"SmallDigit"},this.msToString(e.totalplaytime)))):n.a.createElement("div",{onClick:function(){return t.playerClicked(a)},className:"Container Click"},n.a.createElement("div",{className:"TextLeft"},e.lastname),n.a.createElement("div",{className:"TextRight"},e.totalmatchcount)))}},{key:"goToReplay",value:function(e){var a=E+e+".hbr2";window.open(a,"_blank")}},{key:"renderChatLog",value:function(e,a){var t=e.substring(0,e.length-6);return n.a.createElement("a",{href:t,target:"_blank"},n.a.createElement("div",{className:"Container Click"},n.a.createElement("div",{className:"SmallDigitSmall"},t)))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(v.c,null,n.a.createElement(v.a,{exact:!0,path:"/"},n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"Header"},n.a.createElement("div",{className:"Title"},"/hax/"),n.a.createElement("a",{className:"RoomLink",href:this.state.curlink,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"LinkContainer"},this.state.curlink))),n.a.createElement("div",{className:"Row"},n.a.createElement("div",{className:"Column"},n.a.createElement("div",{className:"ColumnTitle"},"Chatlogs"),n.a.createElement(f.a,null,n.a.createElement("div",{className:"Column Chatlog"},this.state.chatLogs.map((function(a,t){return e.renderChatLog(a,t)}))))),n.a.createElement("div",{className:"Column"},n.a.createElement("div",{className:"ColumnTitle"},"Stats"),n.a.createElement(f.a,null,n.a.createElement("div",{className:"Column Stats"},this.state.stats.map((function(a,t){return e.renderPlayerStats(a,t)}))))),n.a.createElement("div",{className:"Column"},n.a.createElement("div",{className:"ColumnTitle"},"Replays"),n.a.createElement(f.a,null,n.a.createElement("div",{className:"Column Replays"},this.state.replayInfo.map((function(e,a){return S(e,a)})))))))),n.a.createElement(v.a,{exact:!0,path:"/:id",component:function(a){return n.a.createElement(g,{id:a.match.params,replayInfo:e.state.replayInfo})}}),n.a.createElement(v.a,{path:"/d/:id",component:function(e){return window.location="http://85.159.209.166/replays/"+k(e.match.params.id)+".hbr2",null}})))}}]),t}(n.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var l;Object(i.a)(this,t),(l=a.call(this,e)).state={chatLog:[],replayInfo:[]};var n=e.id.id,r=e.replayInfo;if(l.state.replayInfo=r,isNaN(n)){var s=p+"chatlogs/"+n+".jsonl";d.a.get(s).then((function(e){var a=[e.data];"string"===typeof e.data&&(a=y(e.data)),l.state.chatLog=a,l.setState({chatLog:l.state.chatLog})}))}else{var c=k(n);window.location=E+c+".hbr2"}return l}return Object(c.a)(t,[{key:"getReplayInfo",value:function(e){if(this.state.replayInfo)for(var a=0;a<this.state.replayInfo.length;a++){if(e==this.state.replayInfo[a].id)return this.state.replayInfo[a]}}},{key:"renderMessage",value:function(e){var a="",t="ChatMessage",l=new Date(parseInt(e.timeStamp)).toLocaleString();if(0==e.type&&(a+=e.name+": "),1==e.type&&(t="ChatMessageHost"),2==e.type&&(t="ChatAnnouncement"),3==e.type){t="ChatReplay",a="Replay Match #"+parseInt(e.id,10);var r=this.getReplayInfo(e.id);return n.a.createElement("div",null,n.a.createElement("div",{className:"ChatTimeStamp"},l),n.a.createElement("div",{className:t},a,r?S(r,-1):n.a.createElement("div",null)))}return a+=e.message,n.a.createElement("div",null,n.a.createElement("div",{className:"ChatTimeStamp"},l),n.a.createElement("div",{className:t},a))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"ChatContainer"},this.state.chatLog.map((function(a,t){return e.renderMessage(a,t)})))}}]),t}(n.a.Component);function y(e){var a=e.split("\n");a=a.slice(0,a.length-1);for(var t=[],l=0;l<a.length;l++){var n=JSON.parse(a[l]);t.push(n)}return t}function k(e){var a="000000000"+e;return a.substr(a.length-8)}function S(e,a){var t="Container";return-1==a&&(t="ContainerChat"),n.a.createElement("a",{href:E+e.id+".hbr2",target:"_blank"},n.a.createElement("div",{className:t+" Click"},n.a.createElement("div",{className:"SmallDigitSmall"},parseInt(e.id,10)),n.a.createElement("div",{className:"InfoPlainTitle"},function(e){var a=e,t=Math.floor(a/60);return t+"m"+parseInt(a-60*t)+"s"}(e.duration)),n.a.createElement("div",{className:"SubTitleOffset"},e.stadium),function(e){if("No modifiers active"!=e.modifiers)return n.a.createElement("div",{className:"SubTitle"},e.modifiers)}(e),n.a.createElement("div",{className:"PlayerStatsGames"},n.a.createElement("div",{className:"InfoBoxWide"},n.a.createElement("div",{className:"InfoPlainTitle"},"Red"),n.a.createElement("div",{className:"SmallDigit"},e.scorered),n.a.createElement("hr",null)),n.a.createElement("div",{className:"InfoBoxWide"},n.a.createElement("div",{className:"InfoPlainTitle"},"Blue"),n.a.createElement("div",{className:"SmallDigit"},e.scoreblue),n.a.createElement("hr",null)),n.a.createElement("div",{className:"PlayerStatsGames"},n.a.createElement("div",{className:"InfoBoxWide"},n.a.createElement("div",{className:"SubTitle"},e.redplayers.map((function(e,a){return n.a.createElement("div",{className:"SubTitleOffset"},e)})))),n.a.createElement("div",{className:"InfoBoxWide"},n.a.createElement("div",{className:"SubTitle"},e.blueplayers.map((function(e,a){return n.a.createElement("div",{className:"SubTitleOffset"},e)}))))))))}var C=Object(v.f)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=t(12);s.a.render(n.a.createElement(I.a,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.67273660.chunk.js.map