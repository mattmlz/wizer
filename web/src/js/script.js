(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(){function e(e){return document.querySelector(e)}function a(){var a=new TimelineLite;window.innerWidth;a.to(e(".screen-01"),0,{opacity:1}),a.from(e(".screen-01"),1,{opacity:0,y:"25%"}),a.to(e(".screen-01"),.5,{opacity:0,delay:2.5}),a.to(e(".screen-02"),1,{opacity:1}),a.from(e(".screen-02 .tap-marker"),.35,{opacity:0,delay:.5}),a.to(e(".screen-02 .tap-marker"),.25,{scale:.7,delay:.5}),a.to(e(".screen-02 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),a.to(e(".screen-02"),.5,{opacity:0,delay:1.5}),a.to(e(".screen-03"),0,{opacity:1}),a.from(e(".screen-03 .tap-marker"),.35,{opacity:0,delay:.5}),a.to(e(".screen-03 .tap-marker"),.25,{scale:.7,delay:.5}),a.to(e(".screen-03 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),a.to(e(".screen-03"),1,{delay:.5}),a.to(e(".screen-04"),0,{opacity:1,x:"+250px"},"-=3"),a.to(e(".screen-04"),1,{x:"0"},"-=1.5"),a.from(e(".screen-04 .tap-marker"),.35,{opacity:0,delay:4}),a.to(e(".screen-04 .tap-marker"),.25,{scale:.7,delay:.5}),a.to(e(".screen-04 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),a.to(e(".screen-04"),1,{delay:.5}),a.to(e(".screen-05"),0,{opacity:1,x:"+250px"},"-=3"),a.to(e(".screen-05"),1,{x:"0"},"-=1.5"),a.from(e(".screen-05 .tap-marker"),.35,{opacity:0,delay:2}),a.to(e(".screen-05 .tap-marker"),.25,{scale:.7,delay:.5}),a.to(e(".screen-05 .tap-marker"),.35,{opacity:0,scale:1},"+=0.5"),a.to(e(".screen-05"),.5,{opacity:0,delay:1.5}),a.to(e(".screen-04"),0,{opacity:1,x:"-250px"},"-=3"),a.to(e(".screen-04"),1,{x:"0"},"-=1.5")}window.addEventListener("load",a)}();
},{}]},{},[1]);