webpackJsonp([31],{D0v4:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s={data:function(){return{show:!1,probeType:3,listenScroll:!0,showDistance:200}},methods:{backTop:function(){this.$refs.layout.scrollToTop()},scroll:function(t){Math.abs(t.y)>=this.showDistance?1===t.directionY&&(this.show=!0):this.show=!1}}},l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vt-layout",{ref:"layout",attrs:{title:"BackTop",probeType:t.probeType,listenScroll:t.listenScroll},on:{scroll:t.scroll}},[t._l(100,function(o){return e("p",{staticStyle:{padding:".1rem .24rem"}},[t._v(t._s(o)+" - 啦啦啦啦啦啦啦啦")])}),t._v(" "),e("div",{attrs:{slot:"bottom"},slot:"bottom"},[e("vt-backtop",{attrs:{show:t.show},on:{click:t.backTop}})],1)],2)},r=[],n={render:l,staticRenderFns:r},c=n,i=e("VU/8"),a=i(s,c,!1,null,null,null);o.default=a.exports}});