(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(t,e,n){},205:function(t,e,n){},206:function(t,e,n){},207:function(t,e,n){},208:function(t,e,n){},220:function(t,e,n){"use strict";var a=n(204);n.n(a).a},221:function(t,e,n){"use strict";var a=n(205);n.n(a).a},222:function(t,e,n){"use strict";var a=n(206);n.n(a).a},223:function(t,e,n){"use strict";var a=n(207);n.n(a).a},224:function(t,e,n){"use strict";var a=n(208);n.n(a).a},225:function(t,e,n){"use strict";n(48),n(13);var a={name:"GearLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"GearSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},i=(n(220),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"349f4785",null);s.options.__file="layout.vue";e.a=s.exports},226:function(t,e,n){"use strict";var a={name:"GearHeader",mounted:function(){}},i=(n(221),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"d51a5aec",null);s.options.__file="header.vue";e.a=s.exports},227:function(t,e,n){"use strict";var a={name:"GearSider",props:{closeButton:{type:Boolean,default:!1}},data:function(){return{visible:!0}}},i=(n(222),n(1)),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),t.closeButton?n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")]):t._e()],2):t._e()])},[],!1,null,"7a4759a1",null);s.options.__file="sider.vue";e.a=s.exports},228:function(t,e,n){"use strict";var a={name:"GearFooter",mounted:function(){}},i=(n(224),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"710c7c42",null);s.options.__file="footer.vue";e.a=s.exports},229:function(t,e,n){"use strict";var a={name:"GearContent",mounted:function(){}},i=(n(223),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"gear-content"},[this._t("default")],2)},[],!1,null,"04963db5",null);s.options.__file="content.vue";e.a=s.exports},251:function(t,e,n){},296:function(t,e,n){"use strict";var a=n(251);n.n(a).a},313:function(t,e,n){"use strict";n.r(e);var a=n(225),i=n(226),s=n(227),o=n(229),r=n(228),u={components:{"gear-layout":a.a,"gear-header":i.a,"gear-sider":s.a,"gear-content":o.a,"gear-footer":r.a}},c=(n(296),n(1)),l=Object(c.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("gear-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("gear-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("header")]),this._v(" "),e("gear-layout",[e("gear-sider",{staticStyle:{height:"200px",background:"#ddd",width:"200px",color:"black"},attrs:{closeButton:""}},[this._v("sider")]),this._v(" "),e("gear-content",{staticStyle:{height:"200px",background:"deepskyblue"}},[this._v("content")])],1),this._v(" "),e("gear-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("footer")])],1)],1)},[],!1,null,"5432278e",null);l.options.__file="layout-demos-two.vue";e.default=l.exports}}]);