(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{10:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),s=r(4),n=r.n(s),i=(r(10),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),a(e),c(e),s(e),n(e)}))}),o=r(3),m=r(17),u=r(18),l=r(19),d=r(20),h=r(21),j=r(22),b=r(23),p=r(24),x=r(25),f=r(26),w=r(27),O=r(1),g=[{name:"nineball",artist:"Harfield",cover:"https://github.com/hannymaharani99/musicplayer/blob/17cb4cb3a100854e164ed9c7c7f3b884cb454f2a/music-player/Hartfield%20-%20True%20Color,TrueLie/R-1231518-1202408854.jpeg",source:"https://github.com/hannymaharani99/musicplayer/blob/main/music-player/Hartfield%20-%20True%20Color,TrueLie/hartfield%20-%2001%20-%20nineball.mp3?raw=true",url:"https://www.youtube.com/watch?v=VOsrD45eNcU",favorited:!1},{name:"Everybody Knows",artist:"Leonard Cohen",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",url:"https://www.youtube.com/watch?v=Lin-a2lTelg",favorited:!0},{name:"Extreme Ways",artist:"Moby",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",url:"https://www.youtube.com/watch?v=ICjyAe9S54c",favorited:!1},{name:"Butterflies",artist:"Sia",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",url:"https://www.youtube.com/watch?v=kYgGwWYOd9Y",favorited:!1},{name:"The Final Victory",artist:"Haggard",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",url:"https://www.youtube.com/watch?v=0WlpALnQdN8",favorited:!0},{name:"Genius ft. Sia, Diplo, Labrinth",artist:"LSD",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",url:"https://www.youtube.com/watch?v=HhoATZ1Imtw",favorited:!1},{name:"The Comeback Kid",artist:"Lindi Ortega",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",url:"https://www.youtube.com/watch?v=me6aoX0wCV8",favorited:!0},{name:"Overdose",artist:"Grandson",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",url:"https://www.youtube.com/watch?v=00-Rl3Jlx-o",favorited:!1},{name:"Rag'n'Bone Man",artist:"Human",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",url:"https://www.youtube.com/watch?v=L3wKzyIN1yk",favorited:!1}],v=new Audio(g[0].source);v.setAttribute("preload","metadata");var y=a.createContext({shuffle:!1,repeat:!1});function N(e){var t=a.useContext(y),r=a.useState(t.shuffle),c=Object(o.a)(r,2),s=c[0],n=c[1],i=a.useState(t.repeat),j=Object(o.a)(i,2),b=j[0],p=j[1],x=a.useState(g[e.idx].favorited),f=Object(o.a)(x,2),w=f[0],v=f[1];function N(){t.shuffle=!t.shuffle,t.repeat=!1,n(!s),p(!1)}function C(){t.repeat=!t.repeat,t.shuffle=!1,n(!1),p(!b)}function S(){g[e.idx].favorited=!g[e.idx].favorited,v(g[e.idx].favorited)}return a.useEffect((function(){return v(g[e.idx].favorited)})),Object(O.jsxs)("div",{className:"options",children:[s&&Object(O.jsx)("button",{onClick:N,className:"opt",style:{color:"#147CC0"},children:Object(O.jsx)(m.a,{})})||Object(O.jsx)("button",{onClick:N,className:"opt",children:Object(O.jsx)(m.a,{})}),Object(O.jsx)("button",{className:"opt",onClick:function(){window.open(g[e.idx].url,"_blank")},children:Object(O.jsx)(u.a,{})}),w&&Object(O.jsx)("button",{onClick:S,className:"opt",style:{color:"#147CC0"},children:Object(O.jsx)(l.a,{})})||Object(O.jsx)("button",{onClick:S,className:"opt",children:Object(O.jsx)(d.a,{})}),b&&Object(O.jsx)("button",{onClick:C,className:"opt",style:{color:"#147CC0"},children:Object(O.jsx)(h.a,{})})||Object(O.jsx)("button",{onClick:C,className:"opt",children:Object(O.jsx)(h.a,{})})]})}function C(e){return Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsx)("button",{className:"controlButton",onClick:function(t){return e.setIdx(e.idx-1<0?8:e.idx-1)},children:Object(O.jsx)(j.a,{})}),!0===e.playState?Object(O.jsx)("button",{className:"centerButton",onClick:function(t){return e.setPlayState(!1)},children:Object(O.jsx)(b.a,{})}):Object(O.jsx)("button",{className:"centerButton",onClick:function(t){return e.setPlayState(!0)},children:Object(O.jsx)(p.a,{})}),Object(O.jsx)("button",{className:"controlButton",onClick:function(t){return e.setIdx((e.idx+1)%9)},children:Object(O.jsx)(x.a,{})})]})}function S(e){var t=a.useState(0),r=Object(o.a)(t,2),c=r[0],s=r[1],n=a.useState(0),i=Object(o.a)(n,2),m=i[0],u=i[1],l=a.useContext(y),d=document.querySelector(".progressBar");function h(e){return Number.isNaN(e)?"0:00":(e-(e%=60))/60+(9<e?":":":0")+e}return setInterval((function(){u(Math.ceil(v.duration)),s(Math.ceil(v.currentTime));var t=Math.ceil(v.duration)/280,r=v.currentTime/t;document.querySelector(".progressBar").style.width=r+"px",v.currentTime===v.duration&&(!0===l.shuffle?e.setIdx(parseInt(1e3*Math.random())%9):!0===l.repeat?v.play():e.setIdx((e.idx+1)%9))}),1e3),Object(O.jsxs)("div",{className:"progress",children:[Object(O.jsx)("div",{className:"currentTime",children:Object(O.jsx)("p",{children:h(c)})}),Object(O.jsx)("div",{className:"progressCenter",onClick:function(e){return function(e){var t=e.target.getBoundingClientRect().left,r=e.clientX-t;d.style.width=r+"px";var a=m/280;v.currentTime=a*r}(e)},children:Object(O.jsx)("div",{className:"progressBar"})}),Object(O.jsx)("div",{className:"songLength",children:Object(O.jsx)("p",{children:h(m)})})]})}function k(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:g[e.idx].cover,className:"avatar1"}),Object(O.jsx)("img",{src:g[e.idx].cover,className:"avatar"}),Object(O.jsx)("h4",{className:"name",children:g[e.idx].artist}),Object(O.jsx)("h1",{className:"title",children:g[e.idx].name})]})}function T(){var e=a.useState(0),t=Object(o.a)(e,2),r=t[0],c=t[1],s=a.useState(!1),n=Object(o.a)(s,2),i=n[0],m=n[1],u=a.useRef(r);return a.useEffect((function(){!0===i?v.play():v.pause(),r!==u.current&&(v.pause(),v.src=g[r].source,v.load(),v.play(),m(!0),u.current=r)})),Object(O.jsxs)("div",{className:"playerContaier",children:[Object(O.jsx)(k,{idx:r}),Object(O.jsx)(S,{setIdx:c,idx:r}),Object(O.jsx)(C,{setIdx:c,idx:r,playState:i,setPlayState:m}),Object(O.jsx)(N,{setIdx:c,idx:r})]})}function I(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("button",{className:"icon",children:Object(O.jsx)(f.a,{})}),Object(O.jsx)("h1",{className:"headerText",children:"Song"}),Object(O.jsx)("button",{className:"icon",children:Object(O.jsx)(w.a,{})})]})}function B(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(I,{}),Object(O.jsx)(T,{})]})}s.render(Object(O.jsx)(B,{}),document.getElementById("root"));var L=B;n.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),i()}},[[14,1,2]]]);
//# sourceMappingURL=main.9fb4de2c.chunk.js.map