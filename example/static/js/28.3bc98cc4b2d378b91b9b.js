webpackJsonp([28],{bR5P:function(t,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var l={data:function(){return{click:!1,tap:!0,checkbox1:!0,checkbox2:[],checkbox3:["2"],checkbox4:["2"],checkbox5:["1"],checkbox6:["1"],checkbox7:["3"],checkbox8:["1"]}},methods:{update:function(){var t=this;setTimeout(function(){t.$refs.page.refresh()},40)}}},o=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("vt-layout",{ref:"page",attrs:{click:t.click,tap:t.tap}},[e("vt-navbar",{attrs:{slot:"navbar",title:"CheckBox"},slot:"navbar"},[e("router-link",{attrs:{slot:"left",to:"/cr"},slot:"left"},[e("vt-navbar-back-icon")],1)],1),t._v(" "),e("vt-cell-group",{staticClass:"demo-small-pitch"},[e("div",{staticClass:"cell-title",attrs:{slot:"cell-title"},slot:"cell-title"},[t._v("单独使用 - "+t._s(t.checkbox1))]),t._v(" "),e("vt-cell-item",[e("vt-checkbox",{attrs:{slot:"left"},slot:"left",model:{value:t.checkbox1,callback:function(c){t.checkbox1=c},expression:"checkbox1"}},[t._v("啦啦啦啦")])],1)],1),t._v(" "),e("vt-cell-group",{staticClass:"demo-small-pitch"},[e("div",{staticClass:"cell-title",attrs:{slot:"cell-title"},slot:"cell-title"},[t._v("值和标签一致 -> "+t._s(t.checkbox2))]),t._v(" "),e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left"},on:{change:t.update},slot:"left",model:{value:t.checkbox2,callback:function(c){t.checkbox2=c},expression:"checkbox2"}},[e("vt-checkbox",{attrs:{val:"啦啦啦"}}),t._v(" "),e("vt-checkbox",{attrs:{val:"啊啊啊"}}),t._v(" "),e("vt-checkbox",{attrs:{val:"喔喔喔"}})],1)],1)],1),t._v(" "),e("vt-cell-group",{staticClass:"demo-small-pitch"},[e("div",{staticClass:"cell-title",attrs:{slot:"cell-title"},slot:"cell-title"},[t._v("值和标签不同 -> "+t._s(t.checkbox3))]),t._v(" "),e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left"},on:{change:t.update},slot:"left",model:{value:t.checkbox3,callback:function(c){t.checkbox3=c},expression:"checkbox3"}},[e("vt-checkbox",{attrs:{val:"1"}},[t._v("啦啦啦")]),t._v(" "),e("vt-checkbox",{attrs:{val:"2"}},[t._v("啊啊啊")]),t._v(" "),e("vt-checkbox",{attrs:{val:"3"}},[t._v("喔喔喔")])],1)],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"禁用"}},[e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left"},slot:"left",model:{value:t.checkbox4,callback:function(c){t.checkbox4=c},expression:"checkbox4"}},[e("vt-checkbox",{attrs:{val:"1"}},[t._v("啦啦啦")]),t._v(" "),e("vt-checkbox",{attrs:{val:"2",disabled:""}},[t._v("啊啊啊")]),t._v(" "),e("vt-checkbox",{attrs:{val:"3",disabled:""}},[t._v("喔喔喔")])],1)],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"自定义图标颜色"}},[e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left",color:"#F00"},slot:"left",model:{value:t.checkbox5,callback:function(c){t.checkbox5=c},expression:"checkbox5"}},[e("vt-checkbox",{attrs:{val:"1"}},[t._v("啦啦啦")]),t._v(" "),e("vt-checkbox",{attrs:{val:"2"}},[t._v("啊啊啊")]),t._v(" "),e("vt-checkbox",{attrs:{val:"3"}},[t._v("喔喔喔")])],1)],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"圆形图标"}},[e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left"},slot:"left",model:{value:t.checkbox6,callback:function(c){t.checkbox6=c},expression:"checkbox6"}},[e("vt-checkbox",{attrs:{val:"1",shape:"circle"}},[t._v("啦啦啦")]),t._v(" "),e("vt-checkbox",{attrs:{val:"2",shape:"circle"}},[t._v("啊啊啊")]),t._v(" "),e("vt-checkbox",{attrs:{val:"3",shape:"circle"}},[t._v("喔喔喔")])],1)],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"自定义图标大小"}},[e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left",size:"30"},slot:"left",model:{value:t.checkbox7,callback:function(c){t.checkbox7=c},expression:"checkbox7"}},[e("vt-checkbox",{attrs:{val:"1"}},[e("span",{staticStyle:{"font-size":"24px"}},[t._v("男")])]),t._v(" "),e("vt-checkbox",{attrs:{val:"2"}},[e("span",{staticStyle:{"font-size":"24px"}},[t._v("女")])]),t._v(" "),e("vt-checkbox",{attrs:{val:"3"}},[e("span",{staticStyle:{"font-size":"24px"}},[t._v("未知")])])],1)],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"圆形图标"}},[e("vt-cell-item",[e("vt-checkbox-group",{attrs:{slot:"left"},slot:"left",model:{value:t.checkbox8,callback:function(c){t.checkbox8=c},expression:"checkbox8"}},[e("vt-checkbox",{attrs:{val:"1",shape:"circle"}},[t._v("啦啦啦")]),t._v(" "),e("vt-checkbox",{attrs:{val:"2",shape:"circle"}},[t._v("啊啊啊")]),t._v(" "),e("vt-checkbox",{attrs:{val:"3",shape:"circle"}},[t._v("喔喔喔")])],1)],1)],1)],1)},a=[],s={render:o,staticRenderFns:a},v=s,r=e("VU/8"),b=r(l,v,!1,null,null,null);c.default=b.exports}});