(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{10:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r.n(a),c=r(4),i=r.n(c),n=(r(10),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,28)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),s(e),c(e),i(e)}))}),o=r(3),u=r(17),m=r(18),l=r(19),d=r(20),h=r(21),j=r(22),b=r(23),p=r(24),g=r(25),x=r(26),f=r(27),O=r(1),w=[{name:"nineball",artist:"Harfield",cover:"https://img.discogs.com/y0lwZusbRhSSYsdCCVm6PeOZZIg=/fit-in/600x582/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1231518-1202408854.jpeg.jpg",source:"https://github.com/hannymaharani99/musicplayer/blob/main/music-player/Hartfield%20-%20True%20Color,TrueLie/hartfield%20-%2001%20-%20nineball.mp3?raw=true",url:"https://www.youtube.com/watch?v=VOsrD45eNcU",favorited:!1},{name:"True Color, True Lie",artist:"Hartfield",cover:"https://img.discogs.com/y0lwZusbRhSSYsdCCVm6PeOZZIg=/fit-in/600x582/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1231518-1202408854.jpeg.jpg",source:"https://github.com/hannymaharani99/musicplayer/blob/main/music-player/Hartfield%20-%20True%20Color,TrueLie/hartfield%20-%2003%20-%20true%20color.mp3?raw=true",url:"https://www.youtube.com/watch?v=VOsrD45eNcU",favorited:!0},{name:"Strangers When We Met",artist:"Hartfield",cover:"https://img.discogs.com/y0lwZusbRhSSYsdCCVm6PeOZZIg=/fit-in/600x582/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1231518-1202408854.jpeg.jpg",source:"https://github.com/hannymaharani99/musicplayer/blob/main/music-player/Hartfield%20-%20True%20Color,TrueLie/hartfield%20-%2008%20-%20strangers%20when%20we%20meet.mp3?raw=true",url:"https://www.youtube.com/watch?v=VOsrD45eNcU",favorited:!1},{name:"Stand By Me",artist:"Hartfield",cover:"https://img.discogs.com/y0lwZusbRhSSYsdCCVm6PeOZZIg=/fit-in/600x582/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1231518-1202408854.jpeg.jpg",source:"https://github.com/hannymaharani99/musicplayer/blob/main/music-player/Hartfield%20-%20True%20Color,TrueLie/hartfield%20-%2013%20-%20stand%20by%20me.mp3?raw=true",url:"https://www.youtube.com/watch?v=VOsrD45eNcU",favorited:!1},{name:"Lover's Rain",artist:"Hartfield",cover:"https://img.discogs.com/y0lwZusbRhSSYsdCCVm6PeOZZIg=/fit-in/600x582/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1231518-1202408854.jpeg.jpg",source:"https://github.com/hannymaharani99/musicplayer/blob/main/music-player/Hartfield%20-%20True%20Color,TrueLie/hartfield%20-%2009%20-%2016%20lover's%20rain.mp3?raw=true",url:"https://www.youtube.com/watch?v=VOsrD45eNcU",favorited:!0},{name:"Genius ft. Sia, Diplo, Labrinth",artist:"LSD",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",url:"https://www.youtube.com/watch?v=HhoATZ1Imtw",favorited:!1},{name:"The Comeback Kid",artist:"Lindi Ortega",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",url:"https://www.youtube.com/watch?v=me6aoX0wCV8",favorited:!0},{name:"Overdose",artist:"Grandson",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",url:"https://www.youtube.com/watch?v=00-Rl3Jlx-o",favorited:!1},{name:"Rag'n'Bone Man",artist:"Human",cover:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",source:"https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",url:"https://www.youtube.com/watch?v=L3wKzyIN1yk",favorited:!1}],y=new Audio(w[0].source);y.setAttribute("preload","metadata");var v=a.createContext({shuffle:!1,repeat:!1});function C(e){var t=a.useContext(v),r=a.useState(t.shuffle),s=Object(o.a)(r,2),c=s[0],i=s[1],n=a.useState(t.repeat),j=Object(o.a)(n,2),b=j[0],p=j[1],g=a.useState(w[e.idx].favorited),x=Object(o.a)(g,2),f=x[0],y=x[1];function C(){t.shuffle=!t.shuffle,t.repeat=!1,i(!c),p(!1)}function N(){t.repeat=!t.repeat,t.shuffle=!1,i(!1),p(!b)}function S(){w[e.idx].favorited=!w[e.idx].favorited,y(w[e.idx].favorited)}return a.useEffect((function(){return y(w[e.idx].favorited)})),Object(O.jsxs)("div",{className:"options",children:[c&&Object(O.jsx)("button",{onClick:C,className:"opt",style:{color:"#147CC0"},children:Object(O.jsx)(u.a,{})})||Object(O.jsx)("button",{onClick:C,className:"opt",children:Object(O.jsx)(u.a,{})}),Object(O.jsx)("button",{className:"opt",onClick:function(){window.open(w[e.idx].url,"_blank")},children:Object(O.jsx)(m.a,{})}),f&&Object(O.jsx)("button",{onClick:S,className:"opt",style:{color:"#147CC0"},children:Object(O.jsx)(l.a,{})})||Object(O.jsx)("button",{onClick:S,className:"opt",children:Object(O.jsx)(d.a,{})}),b&&Object(O.jsx)("button",{onClick:N,className:"opt",style:{color:"#147CC0"},children:Object(O.jsx)(h.a,{})})||Object(O.jsx)("button",{onClick:N,className:"opt",children:Object(O.jsx)(h.a,{})})]})}function N(e){return Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsx)("button",{className:"controlButton",onClick:function(t){return e.setIdx(e.idx-1<0?8:e.idx-1)},children:Object(O.jsx)(j.a,{})}),!0===e.playState?Object(O.jsx)("button",{className:"centerButton",onClick:function(t){return e.setPlayState(!1)},children:Object(O.jsx)(b.a,{})}):Object(O.jsx)("button",{className:"centerButton",onClick:function(t){return e.setPlayState(!0)},children:Object(O.jsx)(p.a,{})}),Object(O.jsx)("button",{className:"controlButton",onClick:function(t){return e.setIdx((e.idx+1)%9)},children:Object(O.jsx)(g.a,{})})]})}function S(e){var t=a.useState(0),r=Object(o.a)(t,2),s=r[0],c=r[1],i=a.useState(0),n=Object(o.a)(i,2),u=n[0],m=n[1],l=a.useContext(v),d=document.querySelector(".progressBar");function h(e){return Number.isNaN(e)?"0:00":(e-(e%=60))/60+(9<e?":":":0")+e}return setInterval((function(){m(Math.ceil(y.duration)),c(Math.ceil(y.currentTime));var t=Math.ceil(y.duration)/280,r=y.currentTime/t;document.querySelector(".progressBar").style.width=r+"px",y.currentTime===y.duration&&(!0===l.shuffle?e.setIdx(parseInt(1e3*Math.random())%9):!0===l.repeat?y.play():e.setIdx((e.idx+1)%9))}),1e3),Object(O.jsxs)("div",{className:"progress",children:[Object(O.jsx)("div",{className:"currentTime",children:Object(O.jsx)("p",{children:h(s)})}),Object(O.jsx)("div",{className:"progressCenter",onClick:function(e){return function(e){var t=e.target.getBoundingClientRect().left,r=e.clientX-t;d.style.width=r+"px";var a=u/280;y.currentTime=a*r}(e)},children:Object(O.jsx)("div",{className:"progressBar"})}),Object(O.jsx)("div",{className:"songLength",children:Object(O.jsx)("p",{children:h(u)})})]})}function T(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:w[e.idx].cover,className:"avatar1"}),Object(O.jsx)("img",{src:w[e.idx].cover,className:"avatar"}),Object(O.jsx)("h4",{className:"name",children:w[e.idx].artist}),Object(O.jsx)("h1",{className:"title",children:w[e.idx].name})]})}function I(){var e=a.useState(0),t=Object(o.a)(e,2),r=t[0],s=t[1],c=a.useState(!1),i=Object(o.a)(c,2),n=i[0],u=i[1],m=a.useRef(r);return a.useEffect((function(){!0===n?y.play():y.pause(),r!==m.current&&(y.pause(),y.src=w[r].source,y.load(),y.play(),u(!0),m.current=r)})),Object(O.jsxs)("div",{className:"playerContaier",children:[Object(O.jsx)(T,{idx:r}),Object(O.jsx)(S,{setIdx:s,idx:r}),Object(O.jsx)(N,{setIdx:s,idx:r,playState:n,setPlayState:u}),Object(O.jsx)(C,{setIdx:s,idx:r})]})}function k(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("button",{className:"icon",children:Object(O.jsx)(x.a,{})}),Object(O.jsx)("h1",{className:"headerText",children:"Song"}),Object(O.jsx)("button",{className:"icon",children:Object(O.jsx)(f.a,{})})]})}function Z(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(k,{}),Object(O.jsx)(I,{})]})}c.render(Object(O.jsx)(Z,{}),document.getElementById("root"));var R=Z;i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root")),n()}},[[14,1,2]]]);
//# sourceMappingURL=main.c996ecd7.chunk.js.map