(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(){function e(e){return document.querySelector(".screens").querySelector(e)}function t(){var t=new TimelineLite;window.innerWidth;t.from(e(".screen-03 .tap-marker"),0,{opacity:0,delay:1.5,top:"-245px",left:"60px"}),t.to(e(".screen-03 .tap-marker"),0,{top:"-245px",left:"60px"}),t.to(e(".screen-03 .tap-marker"),.25,{opacity:.8,scale:.7,delay:.5}),t.to(e(".screen-03 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),t.to(e(".screen-04"),0,{opacity:1,x:"+250px"},"-=3"),t.to(e(".screen-04"),1,{x:"0",delay:2.5},"-=1.5"),t.to(e(".screen-04 .tap-marker"),0,{bottom:"400px",left:"180px"}),t.from(e(".screen-04 .tap-marker"),.35,{opacity:0,delay:4}),t.to(e(".screen-04 .tap-marker"),.25,{scale:.7,delay:.5}),t.to(e(".screen-04 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),t.to(e(".screen-04"),1,{delay:.5}),t.to(e(".screen-05"),0,{opacity:1,x:"+250px"},"-=3"),t.to(e(".screen-05"),1,{x:"0"},"-=1.5"),t.from(e(".screen-05 .tap-marker"),.35,{opacity:0,delay:2}),t.to(e(".screen-05 .tap-marker"),.25,{scale:.7,delay:.5}),t.to(e(".screen-05 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),t.to(e(".screen-05"),.5,{opacity:0,delay:1.5}),t.to(e(".screen-05"),1,{opacity:0,x:"+250px",delay:.5}),t.to(e(".screen-04"),0,{opacity:1,x:"-250px"},"-=3"),t.to(e(".screen-04"),1,{x:"0"},"-=1.5"),t.from(e(".screen-04 .tap-marker"),0,{opacity:0,delay:1.5,bottom:"40px",left:"100px"}),t.to(e(".screen-04 .tap-marker"),0,{bottom:"40px",left:"100px"}),t.to(e(".screen-04 .tap-marker"),.25,{opacity:.8,scale:.7,delay:.5}),t.to(e(".screen-04 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),t.from(e(".screen-06"),0,{opacity:0,y:"25%"}),t.to(e(".screen-06"),1,{opacity:1})}window.addEventListener("load",t)}();
},{}]},{},[1]);
