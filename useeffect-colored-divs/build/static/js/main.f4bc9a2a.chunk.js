(this["webpackJsonpuseeffect-colored-divs-starter"]=this["webpackJsonpuseeffect-colored-divs-starter"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),o=n.n(r),l=n(6),i=n(3),u=(n(12),function(e){var t={background:e.color,flex:e.width>1023?"1":"0"};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:t,className:"colored-div"},e.color,a.a.createElement("button",null,"Remove")))});function d(){var e=Object(c.useState)(["lightgreen","pink","lightblue"]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(0),d=Object(i.a)(o,2),s=d[0],m=d[1],f=function(){m(window.innerWidth)},v=n.map((function(e,t){return a.a.createElement(u,{color:e,key:t,index:t,width:s})}));return Object(c.useEffect)((function(){window.addEventListener("resize",f)}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Current Window Width: ",s),a.a.createElement("div",{className:"colored-divs"},v),a.a.createElement("button",{onClick:function(){r([].concat(Object(l.a)(n),["white"])),console.log(n)}},"Add New Color"))}var s=document.getElementById("root");o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),s)},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f4bc9a2a.chunk.js.map