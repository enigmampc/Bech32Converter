(this["webpackJsonpbech32-converter"]=this["webpackJsonpbech32-converter"]||[]).push([[0],{171:function(e,t,a){e.exports=a(300)},176:function(e,t,a){},178:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o),s=(a(176),a(159)),l=a(139),i=a(140),u=a(158),p=a(160),d=a(314),h=a(312),v=a(313),m=a(20),g=a.n(m),f=(a(177),a(178),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={input:"",from:"",to:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=function(e){e=e||"enigma";try{return JSON.stringify({wallet:g.a.encode(e,g.a.decode("enigma1pnsceh64jyrsfwjd2k865eetmsgg5grw8sma87").words),valoper:g.a.encode("".concat(e,"valoper"),g.a.decode("enigmavaloper1qx5pppsfrqwlnmxj7prpx8rysxm2u5vzqwv3ly").words),pub:g.a.encode("".concat(e,"pub"),g.a.decode("enigmapub1addwnpepqgauy23vhvvr8uezgczuzh7lj64r9ahd4vsshz5fksezk5lw5k6swjskux6").words),valconspub:g.a.encode("".concat(e,"valconspub"),g.a.decode("enigmavalconspub1zcjduepqj7ygd0gulz2qa03hgzf3ye40pmeyen2z64xjvpkw8mfhuu7j2vcqk6lgcu").words)},null,4)}catch(t){return t.message}}(this.state.from);return r.a.createElement("div",null,r.a.createElement(d.a,{style:{display:"flex",height:"8vh"}},r.a.createElement(h.a,{value:this.state.from,placeholder:"from: enigma",style:{padding:"10px",flex:1},onChange:function(t,a){var n=a.value;return e.setState({from:n})}}),r.a.createElement(h.a,{value:this.state.to,placeholder:"to: secret",style:{padding:"10px",flex:1},onChange:function(t,a){var n=a.value;return e.setState({to:n})}})),r.a.createElement(d.a,{style:{display:"flex",height:"92vh"}},r.a.createElement(v.a,{onChange:function(t,a){var n=a.value;return e.setState({input:n})},placeholder:t,style:{padding:"10px"}}),r.a.createElement(v.a,{value:y(this.state.input,this.state.from,this.state.to),placeholder:y(t,this.state.from,this.state.to),style:{padding:"10px"}})))}}]),a}(r.a.Component)),w={};function y(e,t,a){a=a||"secret",w[t=t||"enigma"]||(w[t]=new RegExp("".concat(t,"(pub|valoper|valoperpub|valcons|valconspub)?1[a-z0-9]+\\b"),"g"));var n,r=w[t],o=e,c=e.match(r)||[],l=Object(s.a)(c);try{for(l.s();!(n=l.n()).done;){var i=n.value;try{var u=g.a.decode(i),p=u.prefix.replace(t,a),d=g.a.encode(p,u.words);o=o.replace(new RegExp(i,"g"),d)}catch(h){o=o.split(i).join("||| ".concat(i," ||| <-- ERROR CONVERTING THIS ADDRESS: ").concat(h.message)),console.error(h)}}}catch(v){l.e(v)}finally{l.f()}return o}var b=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.a43da035.chunk.js.map