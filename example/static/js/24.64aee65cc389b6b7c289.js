webpackJsonp([24],{ZBt8:function(t,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var i={data:function(){return{input1:"",input2:"",input3:"xwpjava@gmail.com",input4:"",input5:"",input6:"",input7:"",input8:"",input9:"",result:""}},created:function(){this.click=!1,this.tap=!0},methods:{handleClick:function(){var t=this.$refs.input9;this.result="{<br />&nbsp;&nbsp;valid："+t.valid+"，<br />&nbsp;&nbsp;errorMsg：'"+t.errorMsg+"'，<br />&nbsp;&nbsp;errorCode：'"+t.errorCode+"'<br />}"}}},s=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("vt-layout",{attrs:{title:"Input",click:t.click,tap:t.tap}},[e("vt-cell-group",{staticClass:"demo-small-pitch"},[e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("用户名：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",required:"",max:"20",placeholder:"请输入用户名"},slot:"right",model:{value:t.input1,callback:function(l){t.input1=l},expression:"input1"}})],1),t._v(" "),e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("密码：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",type:"password",placeholder:"请输入密码"},slot:"right",model:{value:t.input2,callback:function(l){t.input2=l},expression:"input2"}})],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"验证 - 内置正则"}},[e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("邮箱：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",regex:"email",placeholder:"请输入邮箱地址"},slot:"right",model:{value:t.input3,callback:function(l){t.input3=l},expression:"input3"}})],1),t._v(" "),e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("手机号：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",regex:"mobile",placeholder:"请输入手机号码"},slot:"right",model:{value:t.input4,callback:function(l){t.input4=l},expression:"input4"}})],1),t._v(" "),e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("银行卡号：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",regex:"bankcard",placeholder:"请输入银行卡号"},slot:"right",model:{value:t.input5,callback:function(l){t.input5=l},expression:"input5"}})],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"验证 - 自定义正则"}},[e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("QQ：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",regex:"^\\d{5,12}$",placeholder:"请输入您的QQ号码"},slot:"right",model:{value:t.input6,callback:function(l){t.input6=l},expression:"input6"}})],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"不显示清空图标"}},[e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("姓名：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",required:"",showClearIcon:!1,placeholder:"请输入您的姓名"},slot:"right",model:{value:t.input7,callback:function(l){t.input7=l},expression:"input7"}})],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"不显示正确或错误图标"}},[e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("手机号：")]),t._v(" "),e("vt-input",{attrs:{slot:"right",required:"",showSuccessIcon:!1,showErrorIcon:!1,regex:"mobile",placeholder:"请输入手机号码"},slot:"right",model:{value:t.input8,callback:function(l){t.input8=l},expression:"input8"}})],1)],1),t._v(" "),e("vt-cell-group",{attrs:{title:"获取验证结果"}},[e("vt-cell-item",[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("手机号：")]),t._v(" "),e("vt-input",{ref:"input9",attrs:{slot:"right",required:"",regex:"mobile",placeholder:"请输入手机号码"},slot:"right",model:{value:t.input9,callback:function(l){t.input9=l},expression:"input9"}})],1),t._v(" "),e("p",{staticStyle:{color:"#F00",padding:"0 .3rem"},attrs:{slot:"bottom"},domProps:{innerHTML:t._s(t.result)},slot:"bottom"})],1),t._v(" "),e("vt-btn-group",[e("vt-btn",{attrs:{size:"large"},nativeOn:{click:function(l){t.handleClick(l)}}},[t._v("显示上方手机号验证结果")])],1)],1)},r=[],n={render:s,staticRenderFns:r},o=n,a=e("VU/8"),p=a(i,o,!1,null,null,null);l.default=p.exports}});