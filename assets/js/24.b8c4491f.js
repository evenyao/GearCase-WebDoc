(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{263:function(t,o,s){},307:function(t,o,s){"use strict";var e=s(263);s.n(e).a},318:function(t,o,s){"use strict";s.r(o);var e=s(270),a=s(202),n=s(264);s(0).a.use(e.a);var i={components:{"gear-button":a.a,"gear-toast":n.a},methods:{showToast1:function(){this.$toast("this is message top",{position:"top",autoClose:!1,closeButton:{text:"Close",callback:function(){console.log("callback()回调，关闭被点击了")}},enableHtml:!1})},showToast2:function(){this.$toast("this is message middle",{position:"middle",autoClose:1,enableHtml:!1,closeButton:!1})},showToast3:function(){this.$toast("this is message bottom",{position:"bottom"})}}},c=(s(307),s(1)),l=Object(c.a)(i,function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"demo"},[s("gear-button",{on:{click:t.showToast1}},[t._v("上方弹出")]),t._v(" "),s("gear-button",{on:{click:t.showToast2}},[t._v("中间弹出")]),t._v(" "),s("gear-button",{on:{click:t.showToast3}},[t._v("下方弹出")])],1)},[],!1,null,"726b64f3",null);l.options.__file="toast-demos-two.vue";o.default=l.exports}}]);