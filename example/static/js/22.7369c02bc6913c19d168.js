webpackJsonp([22],{Dy48:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={data:function(){return{click:!1,checkedNames:["Han MeiMei"],picked:"Lucy",switchValue:!1}}},a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("vt-layout",{attrs:{title:"Cell",click:t.click}},[l("vt-cell-group",{staticClass:"demo-small-pitch"},[l("vt-cell-item",[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("姓名")]),t._v(" "),l("input",{attrs:{slot:"right",type:"text",placeholder:"请输入您的姓名"},slot:"right"})]),t._v(" "),l("vt-cell-item",{attrs:{arrow:""}},[l("input",{attrs:{slot:"right",type:"text",placeholder:"请输入您的姓名"},slot:"right"})]),t._v(" "),l("vt-cell-item",[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("配送方式")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[t._v("顺丰快递")])])],1),t._v(" "),l("vt-cell-group",{attrs:{title:"带图标的"}},[l("vt-cell-item",[l("i",{staticClass:"demo-icons-phone",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),l("input",{attrs:{slot:"right",type:"number",pattern:"[0-9]*",placeholder:"请输入手机号码",autocomplete:"off"},slot:"right"}),t._v(" "),l("vt-btn",{attrs:{slot:"right",type:"warning"},slot:"right"},[t._v("获取短信验证码")])],1),t._v(" "),l("vt-cell-item",{attrs:{href:"#",type:"link"}},[l("i",{staticClass:"demo-icons-like",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),l("span",{attrs:{slot:"left"},slot:"left"},[t._v("我的收藏")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[l("vt-badge",{attrs:{type:"danger"}},[t._v("8")])],1)]),t._v(" "),l("vt-cell-item",{attrs:{arrow:"",href:"tel:400-888-8888",type:"a"}},[l("i",{staticClass:"demo-icons-tel",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),l("span",{attrs:{slot:"left"},slot:"left"},[t._v("联系客服")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[t._v("400-888-8888")])]),t._v(" "),l("vt-cell-item",{attrs:{href:"#",arrow:""}},[l("i",{staticClass:"demo-icons-order",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),l("span",{attrs:{slot:"left"},slot:"left"},[t._v("我的订单")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[t._v("查看全部订单")])]),t._v(" "),l("vt-cell-item",{attrs:{href:"#",arrow:"",type:"link"}},[l("img",{attrs:{slot:"icon",src:s("YmZS")},slot:"icon"}),t._v(" "),l("span",{attrs:{slot:"left"},slot:"left"},[t._v("图标")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[t._v("图标是image")])])],1),t._v(" "),l("vt-cell-group",{attrs:{title:"下拉框"}},[l("vt-cell-item",{attrs:{arrow:"",type:"label"}},[l("select",{attrs:{slot:"right"},slot:"right"},[l("option",{attrs:{value:""}},[t._v("支付方式")]),t._v(" "),l("option",{attrs:{value:"1"}},[t._v("支付宝")]),t._v(" "),l("option",{attrs:{value:"2"}},[t._v("微信")]),t._v(" "),l("option",{attrs:{value:"3"}},[t._v("财付通")])])]),t._v(" "),l("vt-cell-item",{attrs:{arrow:""}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("性别：")]),t._v(" "),l("select",{attrs:{slot:"right"},slot:"right"},[l("option",{attrs:{value:""}},[t._v("请选择性别")]),t._v(" "),l("option",{attrs:{value:"1"}},[t._v("男")]),t._v(" "),l("option",{attrs:{value:"2"}},[t._v("女")]),t._v(" "),l("option",{attrs:{value:"3"}},[t._v("未知")])])])],1),t._v(" "),l("vt-cell-group",{attrs:{title:"多选"}},[l("vt-cell-item",{attrs:{type:"checkbox"}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("多选一")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedNames,expression:"checkedNames"}],attrs:{slot:"right",type:"checkbox",value:"Han MeiMei"},domProps:{checked:Array.isArray(t.checkedNames)?t._i(t.checkedNames,"Han MeiMei")>-1:t.checkedNames},on:{change:function(e){var s=t.checkedNames,l=e.target,a=!!l.checked;if(Array.isArray(s)){var r="Han MeiMei",o=t._i(s,r);l.checked?o<0&&(t.checkedNames=s.concat([r])):o>-1&&(t.checkedNames=s.slice(0,o).concat(s.slice(o+1)))}else t.checkedNames=a}},slot:"right"})]),t._v(" "),l("vt-cell-item",{attrs:{type:"checkbox"}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("多选二")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedNames,expression:"checkedNames"}],attrs:{slot:"right",type:"checkbox",value:"Li Lei"},domProps:{checked:Array.isArray(t.checkedNames)?t._i(t.checkedNames,"Li Lei")>-1:t.checkedNames},on:{change:function(e){var s=t.checkedNames,l=e.target,a=!!l.checked;if(Array.isArray(s)){var r=t._i(s,"Li Lei");l.checked?r<0&&(t.checkedNames=s.concat(["Li Lei"])):r>-1&&(t.checkedNames=s.slice(0,r).concat(s.slice(r+1)))}else t.checkedNames=a}},slot:"right"})]),t._v(" "),l("vt-cell-item",{attrs:{type:"checkbox"}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("多选三")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedNames,expression:"checkedNames"}],attrs:{slot:"right",type:"checkbox",value:"Jim Green"},domProps:{checked:Array.isArray(t.checkedNames)?t._i(t.checkedNames,"Jim Green")>-1:t.checkedNames},on:{change:function(e){var s=t.checkedNames,l=e.target,a=!!l.checked;if(Array.isArray(s)){var r=t._i(s,"Jim Green");l.checked?r<0&&(t.checkedNames=s.concat(["Jim Green"])):r>-1&&(t.checkedNames=s.slice(0,r).concat(s.slice(r+1)))}else t.checkedNames=a}},slot:"right"})]),t._v(" "),l("vt-cell-item",[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("选中的值：")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.checkedNames))])])],1),t._v(" "),l("vt-cell-group",{attrs:{title:"单选"}},[l("vt-cell-item",{attrs:{type:"radio"}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("单选一")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{slot:"right",type:"radio",value:"Lili"},domProps:{checked:t._q(t.picked,"Lili")},on:{change:function(e){t.picked="Lili"}},slot:"right"})]),t._v(" "),l("vt-cell-item",{attrs:{type:"radio"}},[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("单选二")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{slot:"right",type:"radio",value:"Lucy"},domProps:{checked:t._q(t.picked,"Lucy")},on:{change:function(e){t.picked="Lucy"}},slot:"right"})]),t._v(" "),l("vt-cell-item",[l("span",{attrs:{slot:"left"},slot:"left"},[t._v("选中的值：")]),t._v(" "),l("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.picked))])])],1),t._v(" "),l("vt-cell-group",{attrs:{title:"复选框"}},[l("vt-cell-item",{attrs:{type:"label"}},[l("div",{attrs:{slot:"left"},slot:"left"},[t._v("设为默认地址 - "+t._s(t.switchValue))]),t._v(" "),l("vt-switch",{attrs:{slot:"right",value:t.switchValue},on:{"update:value":function(e){t.switchValue=e}},slot:"right"})],1)],1),t._v(" "),l("vt-cell-group",{attrs:{title:"文本域"}},[l("vt-cell-item",[l("vt-textarea",{attrs:{slot:"right",placeholder:"请输入您的银行卡卡号和密码",maxlength:"100"},slot:"right"})],1)],1)],1)},r=[],o={render:a,staticRenderFns:r},i=o,c=s("VU/8"),v=c(l,i,!1,null,null,null);e.default=v.exports},YmZS:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAALb0lEQVR4Xu1ce3BU1Rn/nbuvZANClCCKEBC1ChTQUQIokGjH7FZta8ViGbVoLU/x0bF1Wth1yVKm2lHrg6ev1ld9jlYq2dS2u8EHAQexKg+HKgQGsKJNELPZZHfv6dzNBteQ7N77nX2cZe7+u9/3+x6/+9177vedcxnMn1QZYFJ5YzoDkxDJLgKTEJMQyTIgmTtmhZiESJYBydwxK8QkRLIMSOaOWSEmIZJlQDJ3zAoxCZEsA5K5Y1aISYhkGZDMHbNCTEIky4Bk7qStkIvX+0dxxh8T8ZlHVEv7Xw+M4VwlVaOl3N648Y8rfyTiQ6ru5Fvnr4u3Ri+i4CkOa7T0ylO3U3SP6jD8PejyLu8LI2OSqgN1rzKwH4o4EXnzC8Tea6FBKOCW88onN/kf2EQD+EZrkufWqvh7LRuh0uZA9ksGwz52gJAbKucTG93ed8mETGtYNkzh/BMG2Kie8E4VbX/aA7THSRDK0JL9mx5dexpJOUVp4o1zD/KD7UMoOMogO0pnDQdjGa/hPuE5xzMht+fadPZ1oVcH/L9nwJ2UQLp1otsOo+Mfn5MhrOcOvHnj8gdXUAEm3Xnzr+MffHU3Vb905jBYhpRQ1QHOw1xVR4Uu830mTMjkd+4rdRxua2YMFVSPOOdof3Yv1C86SRBsgK1j83OP0TLi81knbt/bxo/E7BTj1rP7o6SWVFgp5vjidM+ObkFdFaIJV9fXzWaMPUEJqFsn/lkE7c/vI0NYzun3dNN9K68zClB1+/yX1J1tVxnVS8hbGZyzR0Aps5LUu5T4Xu5QR4VqfLFMILoJSZAS8G9lwIRMoOn+jwQOIvbx1zQIh6JignPou76Vacs+FXzKsoWV0c1f70aUG4q1G8M+5STYLziR5m9SizNcGar1vKoHxJCTUwPLJlrBhVY7alsMYe0BH+N6/DtGxjKybEvTylXn61Wumjd3m9rcPlqvfKoc62+F8/pKMKtCUe+qDY63Qm7PVL0AhghJ3rqeYoylXSlkMt6x6UtEm/6XSaz3/xVw+/iBl7y9/MFgJoDJSxZeHtty5DWAtsx1XHYKbGf0y2Sm7/854lyJjw3V+nbqBTFOyOu+IUxRPgFjTr1GesrxmIrwk83gRzLeUns1oQwp+XzTE2tPzmS/6vpftKiHOgZmkuvtf+XUEjivHkZRParDgQdCLs9tRkAME5Kokgb/YsaxzIihnrLRXV+jY/1BMoRl3Al3Nt398D19AUy6Y9G98W2Hf0kywADntZVQTiQtyrpvVS0oiQ8P1fgMPTBJhIzZ5rMP3qfsAthwUsBJpfCL+6AeiJAgWH9r5+bRw8vgO3blMsa3oF/ZR+2tvC1uoYBbxw9ASfVgiuo3OozPDdZ61xoFIRGiGakJLL0KUF4yajBVXv2yA+Gn95IhlLPLXt50/6oZPQEmL5r/z9h/2i4mATsUlN04EsxOf5AD/N9Bl5e0GiUT0kWKvxHANFLgSaXIv/6L2Idf0SBsjNsm9hv5zpIVzd0AVb+9dZz6Yev7iBGXuTUVsI8jPXaOxpCpX5UuWCFCpr3hP0eJYxsjrmI0x3gkjrbHdwNR4jK40vlR0+rV3z1KyJw5e9R9kUoKw6zcBud1lUL9KgB/Cbo8syj2NR0hQpJVshLAfKoDml7n1lZ0bjhEg2Dg1vP6/2DjshV/q/rNLTeo77c+TgMCSmecBsvQUqq67n5VzipEA64O+gYiYtnLGPpTI+Eq71oGH46SIJQKR+umJx8pr5p1U1ht6SRl1HJWf5S6xfpVnGFJqNbzO1IQSSXhCtFwpjf4FykcD4o4EmsOI/LqfjKEMtS5T90fpr04WBjKZo8A60fvV3HwPSGXdyQ5gGwSAu5TqhuUjxnYGSIOta/bj/inYREIkq6t6iQ4Jon1q1Su/rjRfdcrJAdSlLJSIYlbV8D/PQa8IeKQ2tqJ8FPNgCqCYky3EP2qnD5DUsGr6+teY4xdYSwl35YWGvcSDDvcQ2A7i/z4Awj9qrwRom2KUBXsEBr3RlW0PUEf9xrhJBv9KnA8FHR7bjFiN2+EaIZq6v33gOFXIg6Kjnv12tbeOQrRr8orIdkY92oOh59pJo979RBiHTcAJTVi/SrOMS/k9qzRY0+vTNYe6qkGpwf8NygA+QVNwxId96ZNgNav0pa5JaTeYxKa3q/Ka4V0G8vKuLfhM8R2HtF7cemWs1dXwD6+cP2qghAiw7i3t8AT/aprK8EU+s2BA8+HXJ5rdF8BBgTpXukwUhOoewZg5EabZkJo3NuLj+L9KnRwNT4i0/4qHenpVSSnhFRLMO5Njdo6qgwll59KzVVCTwW8jS6PXwgkjXJOCdHsTg/4PQpQJxJAdNcRdKzXvfOnd1MWlthBopxA3hGb2F/1+TD1zG1jfLTdfjqSkHNCZBj3anmwXVAOx5RBOlKSTkSdEXTd9bIgSFr1nBOiWa9u8M9gHC+KBCIy7mVOS2L3IbPRx7JG91dRY80LIZpzhRz3OlxDYPuOPP2qgix7exot1LhXOdkB5zVCm2PAwR8OubyLqFe9Eb28VUji1lXvX80Y5hpxsKds59YWdG74QjeEdqbDUuHQLd9TkHNo+6tOD9X4WskgBhTzS0iex73WsSeg5JKMGxzTpktlWNBY61llIKdConklJFElgbrbGNj9Il7H9oYReSXDuNeWHMs6Rcay2BFyeUgbtanx5Z2QrI17XzuA+O62PuO2TxsE+7nl1Lx06Sn8ouCl3rfFQIxp55+QbI17v4oi/Oc9vY572QBb1zECgX4VwF8IurwzjaVTXLoghHTduvzrGHC5SAgdbx1CdMuxz9qSK4fCOpy8OV8by+a0XyXFsrenE7ka91pOd6L0iqEiPIMz+EK1nqVCIETlglVI1zK47g+MsTuIvifUotsPo+ON5OleBXD+bIT0/SopKyRBSNDXDxHLpyKnezWc7nGv7fxyOC4U61dxhqtDtR6hXf0iF1hBK6SrSvw/ZwyPigQRPxhB+7oDXccIrPSQ8tWvkrZCuh3LxrhXbemEUk4/8ZTt/VXUC4x+OVEt9qKXjXGvsDucrwy6vQuFcQQBpCBEi6Em4H8WwE8F4yGp57tfJf0tK/EsSYx7LXvAQO8EkuhIHCZfGHR7tXMuBf9JUyFdVVLnBVhe1/8c2BGqjY8F8+Vxi3ffvEtFiDburdhn2cOAU/J2qRagX1UUt6xuJ2sCdT8B2PP5IIRzvBRye67Ohy29NqSqkBRSmgBWpTcIkhxHR1xhZ26oXUL/PBHJcHolWQkZz8G0Lw/lzD/OsTTk9vhykFMhyJwFLORV4lhD3RowNkcUpzd9Dhw8NCw+Ipf7q6h+S0tINk739p0UPjPo8r5ATVou9aQlRAt6er3/doXhvmwmQIZ+VVGtsr7lbJZO93Zjcm30xOKjjXy/KpsXgx4sqStECyAbp3tTErEq6PIs0JOYQslIT4iWmJp6/+tg+L5IkmTqVxXvLSvpeVbGveCLQi7vwyKk5kO3KCokUSWBunsBRvpCnGz9qqKvkMSzRGTcK1m/6rggpOsBX3cTA3vEyK2Dg78ccnmP+eqcEYx8yhbNLas7KYbGvZL2q46bCtECMTju9QddHm8+r3BRW0VXIcl3k+cYkHabp8z9quOqQhKE6Bj3csauCdUuyctcRbQqUvWLskISpNT7fYzhrj6SsTno8uR2npJNFlKwipaQvsa9Wr8qzpUJb7oXf5CjnOUUtmgJSVRJw7KZjPPnUjPEOdaE3J55Oc1aDsGLmpDkG/zRcS/nOJL83npezgPmgpfjgZCj416V4ZbGWs9DuUhUvjCLnpDkG/wjALtQpv1VVAKPC0Kmrl9eYbXGRgcv9Wrfoi/q33FBSFEz0MN5kxDJ2DQJMQmRLAOSuWNWiEmIZBmQzB2zQkxCJMuAZO6YFSIZIf8Hi8EIoeykzGIAAAAASUVORK5CYII="}});