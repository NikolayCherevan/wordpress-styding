/*!/wp-content/plugins/hummingbird-performance/admin/assets/js/wphb-global.min.js*/
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=65)}({65:function(t,e){!function(){"use strict";var t={menuButton:document.querySelector("#wp-admin-bar-wphb-clear-cache > a"),noticeButton:document.getElementById("wp-admin-notice-wphb-clear-cache"),ajaxurl:null,init:function(){var e=this;wphbGlobal?this.ajaxurl=wphbGlobal.ajaxurl:this.ajaxurl=ajaxurl,this.menuButton&&this.menuButton.addEventListener("click",(function(){return e.post(t.ajaxurl,"wphb_front_clear_cache")})),this.noticeButton&&this.noticeButton.addEventListener("click",(function(){return e.post(t.ajaxurl,"wphb_global_clear_cache")}))},post:function(t,e){var n=new XMLHttpRequest;n.open("POST",t+"?action="+e),n.onload=function(){200===n.status?location.reload():console.log("Request failed.  Returned status of "+n.status)},n.send()}};document.addEventListener("DOMContentLoaded",(function(){t.init()}))}()}});
//# Original Source Map: wphb-global.min.js.map
;