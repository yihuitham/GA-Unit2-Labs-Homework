(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),u=n(1),l=[{name:"off",color:"rgba(0,0,0,1)"},{name:"low",color:"rgba(0,0,0,.6)"},{name:"med",color:"rgba(0,0,0,.4)"},{name:"high",color:"rgba(0,0,0,.1)"}],i=Object(r.createContext)(),m=Object(r.useReducer)(function(e,t){switch(t){case"off":return l[0];case"low":return l[1];case"medium":return l[2];case"high":return l[3];default:return l[0]}},l[0]),s=Object(u.a)(m,2),d=s[0],f=s[1];function b(){return Object(r.useContext)(i)}function h(e){var t=e.children;return a.a.createElement(i.Provider,{value:[d,f]},t)}var p=function(e){var t=b(),n=Object(u.a)(t,2),r=(n[0],n[1]),c=e.controls.map(function(e,t){return a.a.createElement("button",{key:t,onClick:function(){return r(e)}},e)});return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"controls"},c))};var v=function(){var e=b(),t=Object(u.a)(e,2),n=t[0],r=(t[1],{width:"100px",height:"100px",borderRadius:"50%",border:"1px solid",background:n.color});return a.a.createElement("div",{style:r})};var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null,a.a.createElement(p,{controls:["off","low","medium","high"]}),a.a.createElement(v,null)))},w=(n(10),document.getElementById("root"));o.a.render(a.a.createElement(g,null),w)},4:function(e,t,n){e.exports=n(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.720bbd8e.chunk.js.map