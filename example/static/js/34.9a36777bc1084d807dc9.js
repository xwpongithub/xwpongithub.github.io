webpackJsonp([34],{hOPR:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{show1:!1,model1:""}},created:function(){this.click=!1,this.tap=!0}},s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("vt-layout",{attrs:{title:"IndexList",click:t.click,tap:t.tap}},[l("vt-cell-group",{staticClass:"demo-small-pitch",attrs:{title:"城市选择"}},[l("vt-cell-item",{attrs:{arrow:""}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("所在城市：")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.model1,expression:"model1"}],attrs:{slot:"right",type:"text",readonly:"",placeholder:"请选择所在城市"},domProps:{value:t.model1},on:{click:function(e){t.show1=!0},input:function(e){e.target.composing||(t.model1=e.target.value)}},slot:"right"})])],1),t._v(" "),l("div",{attrs:{slot:"bottom"},slot:"bottom"},[l("vt-index-list",{model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}})],1)],1)},a=[],n={render:s,staticRenderFns:a},i=n,r=l("VU/8"),c=r(o,i,!1,null,null,null);e.default=c.exports}});