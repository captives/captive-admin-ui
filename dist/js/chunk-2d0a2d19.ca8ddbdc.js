(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2d19"],{"0014":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},t._l(t.list,(function(e,l){return a("el-form-item",{key:l,attrs:{label:e.itemAttrs.label},nativeOn:{click:function(a){return t.formItemHandler(e,l)}}},[a(e.tag,t._g(t._b({tag:"component",model:{value:t.form[e.attrs.key],callback:function(a){t.$set(t.form,e.attrs.key,a)},expression:"form[item.attrs.key]"}},"component",e.attrs,!1),e.listeners||{}),[t._v(t._s(e.attrs.label))])],1)})),1)],1),a("el-footer",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addItem("input")}}},[t._v("Input 输入框")]),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.addItem("tag")}}},[t._v("Tag 标签")]),a("el-button",{attrs:{type:"success"},on:{click:function(e){return t.addItem("slider")}}},[t._v("Slider 滑块")]),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.addItem("rate")}}},[t._v("Rate 评分")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addItem("avatar")}}},[t._v("Avatar 头像")]),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.addItem("badge")}}},[t._v("Badge 标记")]),a("el-button",{attrs:{type:"success"},on:{click:function(e){return t.addItem("image")}}},[t._v("Image 图片")]),a("el-button",{attrs:{type:"info"},on:{click:function(e){return t.addItem("divider")}}},[t._v("Divider 分割线")])],1),a("el-dialog",{attrs:{title:"编辑属性",visible:t.dialog.visible,width:"500px","before-close":t.dialogBeforeClose},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[a("div"),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submitHandler}},[t._v("确 定")])],1)])],1)},r=[];const i={input:{tag:"el-input",itemAttrs:{label:"姓名",required:!0,rules:{required:!0,message:"姓名不能为空",trigger:"click,hover"}},attrs:{key:"name",value:"captives",placeholder:"请输入姓名",clearable:!0}},tag:{tag:"el-tag",itemAttrs:{label:"标签"},attrs:{key:"label",label:"captives"}},slider:{tag:"el-slider",itemAttrs:{label:"年龄"},attrs:{key:"age",label:"标记",value:30,max:50,min:20}},rate:{tag:"el-rate",itemAttrs:{label:"星级",required:!0},attrs:{key:"rate",value:6,max:10}},avatar:{tag:"el-avatar",itemAttrs:{label:"头像"},attrs:{key:"avatar",src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",size:"large",shape:"circle"}},badge:{tag:"el-badge",itemAttrs:{label:"标记"},attrs:{type:"warning",label:"标记",value:10}},image:{tag:"el-image",itemAttrs:{label:"照片墙"},attrs:{key:"image",src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",size:"large",shape:"circle"}},divider:{tag:"el-divider",itemAttrs:{label:"分割线"},attrs:{key:"divider",label:"我是中国人",contentPosition:"right"}}};console.log(i);var n={name:"EditerFrom",data(){return{list:[],form:{},dialog:{visible:!1,index:0,data:null}}},methods:{addItem(t){let e=Object.assign({},i[t]);this.$set(this.form,e.attrs.key,e.attrs.value||e.attrs.src),this.list.push(e)},formItemHandler(t,e){this.dialog.index=e,this.dialog.data=t,console.log(this.dialog)},dialogBeforeClose(){},submitHandler(){this.dialog.visible=!1}}},s=n,o=a("2877"),c=Object(o["a"])(s,l,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a2d19.ca8ddbdc.js.map