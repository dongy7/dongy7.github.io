module.exports=__NEXT_REGISTER_PAGE("/posts",function(){var t=webpackJsonp([4],{355:function(t,e,a){t.exports=a(356)},356:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});var n=a(0);var i=a.n(n);var r=a(1);var o=a(22);var l=a.n(o);var c=a(95);var d=a.n(c);var s=a(64);var p=a(357);var m=a.n(p);e["default"]=function(){return i.a.createElement(s["a"],null,i.a.createElement(l.a,null,i.a.createElement("title",null,"Posts")),i.a.createElement("div",{className:"posts"},p["posts"].map(function(t){var e=t.id,a=t.date,n=t.title;return i.a.createElement(x,{id:e,key:e,date:a,title:n})})))};var u=r["a"].div.withConfig({displayName:"posts__PostDiv",componentId:"tshj7r-0"})(["margin-bottom:10px;@media (max-width:500px){margin-bottom:15px;}"]);var h=r["a"].span.withConfig({displayName:"posts__DateSpan",componentId:"tshj7r-1"})(["display:inline-block;width:140px;text-align:right;margin-right:30px;color:#999;@media (max-width:500px){display:block;width:inherit;text-align:inherit;font-size:11px;color:#ccc;margin-bottom:5px;}"]);var v=r["a"].a.withConfig({displayName:"posts__A",componentId:"tshj7r-2"})(["text-decoration:none;"]);var x=function t(e){var a=e.id,n=e.date,r=e.title;return i.a.createElement(u,null,i.a.createElement(h,null,n),i.a.createElement(d.a,{prefetch:true,href:"/".concat(new Date(n).getFullYear(),"/").concat(a)},i.a.createElement("a",null,r," ")))}},357:function(t,e){t.exports={posts:[{id:"fun-with-circuits",date:"January 7, 2017",title:"Fun with Circuits"},{id:"complex-data-fetching-made-simple-with-rx",date:"June 24, 2017",title:"Complex Data Fetching Made Simple With Rx"},{id:"integrating-markdown-in-react-with-mdx",date:"May 4, 2018",title:"Integrating Markdown in React with MDX"}]}}},[355]);return{page:t.default}});