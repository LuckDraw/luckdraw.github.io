(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{407:function(t,e,i){},408:function(t,e,i){},420:function(t,e,i){"use strict";i(407)},421:function(t,e,i){"use strict";i(408)},422:function(t,e,i){"use strict";i(222),i(49),i(122),i(120),i(412),i(28),i(130),i(403),i(50);var n=i(37),s=i(410),a=i(423);i(35),i(118),i(123),i(121),i(124),i(216),i(119);function r(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var l=i(409),o=i(81),c={name:"NavLinks",data:function(){return{flag:"",userInfo:{}}},mounted:function(){this.flag=localStorage.getItem("flag")||"",this.userInfo=JSON.parse(localStorage.getItem("userInfo"))||{}},components:{NavLink:l.a,DropdownLink:a.a},watch:{$userInfo:function(t){this.userInfo=t}},computed:Object(s.a)(Object(s.a)({},Object(o.b)(["$userInfo"])),{},{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var i=this.$page.path,s=this.$router.options.routes,a=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(n){var r,l=e[n],o=a[n]&&a[n].label||l.lang;return l.lang===t.$lang?r=i:(r=i.replace(t.$localeConfig.path,n),s.some((function(t){return t.path===r}))||(r=n)),{text:o,link:r}}))};return[].concat(Object(n.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(r(t),{items:(t.items||[]).map(r)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],i=0;i<e.length;i++){var n=e[i];if(new RegExp(n,"i").test(t))return n}return"Source"}}})},u=(i(420),i(27)),d={components:{NavLinks:Object(u.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.userLinks.length||t.repoLink?i("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return i("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?i("DropdownLink",{attrs:{item:t}}):i("NavLink",{attrs:{item:t}})],1)})),t._v(" "),i("div",{staticClass:"nav-item",staticStyle:{display:"none"}},[t.userInfo.login?i("div",[i("img",{staticClass:"nav-avatar",attrs:{src:t.userInfo.avatar_url,title:t.userInfo.login}}),t._v(" "),i("span",{staticStyle:{color:"#fff"},attrs:{title:t.userInfo.login}},[t._v(t._s(t.userInfo.name||t.userInfo.login))])]):i("a",{staticClass:"nav-link",attrs:{href:"https://github.com/login/oauth/authorize?client_id=e41e27785100375e0e37",target:"_black"}},[t._v("\n      Github 登录\n    ")])]),t._v("\n   \n  "),t._v(" "),t.repoLink?i("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),i("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports},data:function(){return{activeIndex:"/"}},computed:{navList:function(){return this.$themeConfig.locales[this.$localePath].nav}}},h=(i(421),Object(u.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page-head"},[e("el-container",{staticClass:"header-box"},[e("div",{staticClass:"mobile mobile-nav"},[this._v("移动端菜单栏未开启")]),this._v(" "),e("router-link",{staticClass:"logo hidden-719",attrs:{to:"/",tag:"div"}},[this._v("\n       lucky-canvas 【大转盘 / 九宫格】抽奖\n    ")]),this._v(" "),e("div",{staticClass:"nav-bar hidden-719"},[e("NavLinks")],1)],1)],1)}),[],!1,null,"56a2cfdc",null));e.a=h.exports},484:function(t,e,i){},485:function(t,e,i){},486:function(t,e,i){},487:function(t,e,i){},488:function(t,e,i){},490:function(t,e,i){},491:function(t,e,i){},522:function(t,e,i){"use strict";i(484)},525:function(t,e,i){"use strict";i(485)},526:function(t,e,i){"use strict";i(486)},527:function(t,e,i){"use strict";i(487)},528:function(t,e,i){"use strict";i(488)},533:function(t,e,i){"use strict";i(490)},534:function(t,e,i){"use strict";i(491)},572:function(t,e,i){"use strict";i.r(e);i(118),i(120),i(119);var n=i(422),s={data:function(){return{}},methods:{}},a=(i(522),i(27)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-options"},[i("div",{staticClass:"active"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("path",{attrs:{d:"M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",fill:"#43CCF8",stroke:"#FFF","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",fill:"#43CCF8",stroke:"#FFF","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",fill:"#43CCF8",stroke:"#FFF","stroke-width":"3","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("配置项")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32 28L24 20L16 28",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 36V20.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 14H32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("保存本地")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32 28L24 36L16 28",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 20V35.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 14H32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("读取缓存")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",stroke:"#333","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("复制代码")])]),t._v(" "),i("div",[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("path",{attrs:{d:"M4 9C4 7.89543 4.89543 7 6 7H19L24 13H42C43.1046 13 44 13.8954 44 15V39C44 40.1046 43.1046 41 42 41H6C4.89543 41 4 40.1046 4 39V9Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M31.0277 26.9724L24 34.0001L16.988 26.9881",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 20V33.5",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("导出文件")])]),t._v(" "),i("div",{staticClass:"disabled"},[i("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 5.91396H28V13.914H43V21.914H5V13.914H20V5.91396Z",stroke:"#333","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M8 40H40V22H8V40Z",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M16 39.8975V33.914",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M24 39.8975V33.8975",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M32 39.8975V33.914",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),i("path",{attrs:{d:"M12 40H36",stroke:"#333","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})]),t._v(" "),i("div",[t._v("重置样式")])])])}),[],!1,null,"2fa66f10",null).exports,l=(i(77),i(215),i(410)),o=i(523),c={inject:["luckyData"],data:function(){return{$lucky:null}},mounted:function(){this.init()},watch:{luckyData:{handler:function(){this.init({})},deep:!0}},methods:{init:function(){var t=this;this.$refs.myLucky.innerHTML="";var e=window.$lucky=this.$lucky=new o.LuckyWheel({divElement:this.$refs.myLucky,width:this.luckyData.width||"300px",height:this.luckyData.height||"300px"},Object(l.a)(Object(l.a)({},this.luckyData),{},{start:function(){var t=this;this.play(),setTimeout((function(){t.stop(100*Math.random()>>0)}),3500)},end:function(e){t.$message.success(e.name)}}));this.$store.commit("setLucky",e)}}},u=(i(525),Object(a.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"edit-luckdraw"},[e("div",{staticClass:"warn"},[e("el-alert",{attrs:{title:"可视化编辑还在开发中~ 更详的细参数配置请参考文档",type:"success",effect:"dark","show-icon":"",closable:!1}}),this._v(" "),e("el-alert",{attrs:{title:"图片闪烁是因为抽奖组件在初始时会去异步加载图片资源",type:"warning",effect:"dark","show-icon":"",closable:!1}})],1),this._v(" "),e("div",{ref:"myLucky",staticClass:"luckdraw"},[e("canvas")])])}),[],!1,null,"5f22a84b",null).exports),d=i(81),h={computed:Object(l.a)({},Object(d.b)(["$lucky"]))},f={mixins:[h],inject:["luckyData","setData"],data:function(){return{ruleForm:{radius:""},rules:{radius:[{required:!0,message:"大转盘半径不能为空",trigger:"blur"}]}}},mounted:function(){this.ruleForm.radius=Math.min(this.$lucky.config.width,this.$lucky.config.height)},watch:{ruleForm:{deep:!0,handler:function(t){this.setData({width:t.radius,height:t.radius})}}}},p=Object(a.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("属性 - attribute")]),t._v(" "),i("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"150px"}},[i("el-form-item",{attrs:{label:"转盘直径",prop:"radius"}},[i("input-number",{attrs:{size:"small",min:1},model:{value:t.ruleForm.radius,callback:function(e){t.$set(t.ruleForm,"radius",e)},expression:"ruleForm.radius"}})],1)],1)],1)}),[],!1,null,null,null).exports,m=(i(49),i(437),i(37)),b={mixins:[h],inject:["luckyData","setData"],data:function(){return{currIndex:"0",blocks:[]}},mounted:function(){this.blocks=this.$lucky.blocks},methods:{add:function(){this.blocks.push({padding:"1px",background:"#000"}),this.setData({blocks:Object(m.a)(this.blocks)}),this.currIndex=String(this.blocks.length-1),this.$forceUpdate()},remove:function(t){this.blocks.splice(t,1),this.setData({blocks:Object(m.a)(this.blocks)}),t>0&&(this.currIndex=String(t-1)),this.$forceUpdate()}},render:function(){var t=this,e=arguments[0];return e("div",[e("h3",["背景 - blocks",e("span",{on:{click:function(e){return t.add()}}},["添加",e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),e("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M24 16V32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16 24L32 24",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])])]),e("el-tabs",{attrs:{type:"border-card",closable:!0},on:{"tab-remove":function(e){return t.remove(e)}},model:{value:t.currIndex,callback:function(e){t.currIndex=e}}},[this.blocks.length?this.blocks.map((function(i,n){return e("el-tab-pane",{attrs:{label:"背景[".concat(n,"]"),name:"".concat(n)}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},["内边距"]),e("el-col",{attrs:{span:10}},[e("input-number",{model:{value:i.padding,callback:function(e){t.$set(i,"padding",e)}}})]),e("el-col",{attrs:{span:5}},["背景颜色"]),e("el-col",{attrs:{span:4}},[e("el-color-picker",{attrs:{size:"small","show-alpha":!0},model:{value:i.background,callback:function(e){t.$set(i,"background",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无背景"])])])}},k=Object(a.a)(b,void 0,void 0,!1,null,null,null).exports,g={mixins:[h],inject:["luckyData","setData"],data:function(){return{currIndex:"0",prizes:[]}},mounted:function(){this.prizes=this.$lucky.prizes},methods:{add:function(){this.prizes.push({name:"",background:"#fff"}),this.setData({prizes:Object(m.a)(this.prizes)}),this.currIndex=String(this.prizes.length-1),this.$forceUpdate()},remove:function(t){this.prizes.splice(t,1),this.setData({prizes:Object(m.a)(this.prizes)}),t>0&&(this.currIndex=String(t-1)),this.$forceUpdate()}},render:function(){var t=this,e=arguments[0];return e("div",[e("h3",["奖品 - prizes",e("span",{on:{click:function(e){return t.add()}}},["添加",e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),e("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M24 16V32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16 24L32 24",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])])]),e("el-tabs",{attrs:{type:"border-card",closable:!0},on:{"tab-remove":function(e){return t.remove(e)}},model:{value:t.currIndex,callback:function(e){t.currIndex=e}}},[this.prizes.length?this.prizes.map((function(i,n){return e("el-tab-pane",{attrs:{label:"奖品[".concat(n,"]"),name:"".concat(n)}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:5}},[e("tips",{attrs:{type:"name"}},["name"])]),e("el-col",{attrs:{span:10}},[e("el-input",{attrs:{size:"small",placeholder:"奖品名称"},style:"width: 160px",model:{value:i.name,callback:function(e){t.$set(i,"name",e)}}})]),e("el-col",{attrs:{span:5}},["背景颜色"]),e("el-col",{attrs:{span:4}},[e("el-color-picker",{attrs:{size:"small","show-alpha":!0},model:{value:i.background,callback:function(e){t.$set(i,"background",e)}}})])]),e("el-tabs",{attrs:{type:"border-card","tab-position":"left"},style:"height: 170px;margin-top: 20px; box-shadow: none;"},[i.fonts&&i.fonts.length?i.fonts.map((function(i,n){return e("el-tab-pane",{attrs:{label:"文字[".concat(n,"]")}},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"文字内容"}},[e("el-input",{attrs:{size:"small"},model:{value:i.text,callback:function(e){t.$set(i,"text",e)}}})]),e("el-form-item",{attrs:{label:"距离顶部"}},[e("input-number",{attrs:{size:"small"},model:{value:i.top,callback:function(e){t.$set(i,"top",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无文字"])]),e("el-tabs",{attrs:{type:"border-card","tab-position":"left"},style:"height: 230px;margin-top: 20px; box-shadow: none;"},[i.imgs&&i.imgs.length?i.imgs.map((function(i,n){return e("el-tab-pane",{attrs:{label:"图片[".concat(n,"]")}},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",[e("tips",{slot:"label",attrs:{type:"src"}},["图片地址"]),e("el-input",{attrs:{type:"textarea",size:"small"},model:{value:i.src,callback:function(e){t.$set(i,"src",e)}}})]),e("el-form-item",{attrs:{label:"距离顶部"}},[e("input-number",{attrs:{size:"small"},model:{value:i.top,callback:function(e){t.$set(i,"top",e)}}})]),e("el-form-item",{attrs:{label:"图片宽度"}},[e("input-number",{attrs:{size:"small",unit:"%"},model:{value:i.width,callback:function(e){t.$set(i,"width",e)}}})]),e("el-form-item",{attrs:{label:"图片高度"}},[e("input-number",{attrs:{size:"small",placeholder:"auto",unit:"%"},model:{value:i.height,callback:function(e){t.$set(i,"height",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无图片"])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无奖品"])])])}},v=Object(a.a)(g,void 0,void 0,!1,null,null,null).exports,w={mixins:[h],inject:["luckyData","setData"],data:function(){return{currIndex:"0",buttons:[]}},mounted:function(){this.buttons=this.$lucky.buttons},methods:{add:function(){this.buttons.push({radius:"10px",background:"#000"}),this.setData({buttons:Object(m.a)(this.buttons)}),this.currIndex=String(this.buttons.length-1),this.$forceUpdate()},remove:function(t){this.buttons.splice(t,1),this.setData({buttons:Object(m.a)(this.buttons)}),t>0&&(this.currIndex=String(t-1)),this.$forceUpdate()}},render:function(){var t=this,e=arguments[0];return e("div",[e("h3",["按钮 - buttons",e("span",{on:{click:function(e){return t.add()}}},["添加",e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),e("rect",{attrs:{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:"#2F88FF",stroke:"#333","stroke-width":"3","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M24 16V32",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}}),e("path",{attrs:{d:"M16 24L32 24",stroke:"#FFF","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"round"}})])])]),e("el-tabs",{attrs:{type:"border-card",closable:!0},on:{"tab-remove":function(e){return t.remove(e)}},model:{value:t.currIndex,callback:function(e){t.currIndex=e}}},[this.buttons.length?this.buttons.map((function(i,n){return e("el-tab-pane",{attrs:{label:"按钮[".concat(n,"]"),name:"".concat(n)}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:3}},["半径"]),e("el-col",{attrs:{span:8}},[e("input-number",{model:{value:i.radius,callback:function(e){t.$set(i,"radius",e)}}})]),e("el-col",{attrs:{span:3}},["指针"]),e("el-col",{attrs:{span:3}},[e("el-switch",{attrs:{size:"small"},model:{value:i.pointer,callback:function(e){t.$set(i,"pointer",e)}}})]),e("el-col",{attrs:{span:4}},["背景色"]),e("el-col",{attrs:{span:3}},[e("el-color-picker",{attrs:{size:"small","show-alpha":!0},model:{value:i.background,callback:function(e){t.$set(i,"background",e)}}})])])])})):e("el-divider",{attrs:{"content-position":"left"}},["暂无按钮"])])])}},x=Object(a.a)(w,void 0,void 0,!1,null,null,null).exports,F=(i(225),i(40),i(438),i(229),{mixins:[h],inject:["luckyData","setData"],data:function(){return{ruleForm:{fontColor:"",fontSize:"",fontStyle:"",fontWeight:"",lineHeight:"",background:"",wordWrap:!1,lengthLimit:0}}},mounted:function(){var t=this,e=this.$lucky._defaultStyle;e.lineHeight||(e.lineHeight=e.fontSize),Object.keys(e).forEach((function(i){var n=e[i];if("background"===i&&"transparent"===n&&(n="rgba(0,0,0,0)"),"lengthLimit"===i)return n.includes("%")&&(n=n.slice(0,-1)/100),t.ruleForm[i]=Number(n);t.ruleForm[i]=n}))},watch:{ruleForm:{deep:!0,handler:function(t){this.setData({defaultStyle:Object(l.a)(Object(l.a)({},t),{},{lengthLimit:100*t.lengthLimit+"%"})})}}},methods:{formatTooltip:function(t){return 100*t+"%"}}}),_={mixins:[h],inject:["luckyData","setData"],data:function(){return{defaultConfig:{},ruleForm:{gutter:"",stopRange:0,offsetDegree:"",speed:"",accelerationTime:"",decelerationTime:""}}},mounted:function(){this.defaultConfig=Object(l.a)({},this.$lucky._defaultConfig),console.log(this.$lucky._defaultConfig)},watch:{defaultConfig:{deep:!0,handler:function(t){console.log(123),this.setData({defaultConfig:Object(l.a)({},t)})}}},methods:{formatTooltip:function(t){return 100*t+"%"}}},y={},C={components:{attribute:p,blocks:k,prizes:v,buttons:x,defaultStyle:Object(a.a)(F,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("默认样式 - defaultStyle")]),t._v(" "),i("el-form",{attrs:{"label-width":"150px"}},[i("el-form-item",{attrs:{label:"字体颜色"}},[i("el-color-picker",{attrs:{size:"small","show-alpha":""},model:{value:t.ruleForm.fontColor,callback:function(e){t.$set(t.ruleForm,"fontColor",e)},expression:"ruleForm.fontColor"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"字体大小"}},[i("input-number",{attrs:{size:"small"},model:{value:t.ruleForm.fontSize,callback:function(e){t.$set(t.ruleForm,"fontSize",e)},expression:"ruleForm.fontSize"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"字体样式"}},[i("el-input",{attrs:{size:"small"},model:{value:t.ruleForm.fontStyle,callback:function(e){t.$set(t.ruleForm,"fontStyle",e)},expression:"ruleForm.fontStyle"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"字体粗细"}},[i("el-select",{attrs:{size:"small",placeholder:"默认为400"},model:{value:t.ruleForm.fontWeight,callback:function(e){t.$set(t.ruleForm,"fontWeight",e)},expression:"ruleForm.fontWeight"}},t._l([300,400,500,600,700],(function(t){return i("el-option",{attrs:{value:t}})})),1)],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"lineHeight"},slot:"label"},[t._v("字体行高")]),t._v(" "),i("input-number",{attrs:{size:"small"},model:{value:t.ruleForm.lineHeight,callback:function(e){t.$set(t.ruleForm,"lineHeight",e)},expression:"ruleForm.lineHeight"}})],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"defaultBackground"},slot:"label"},[t._v("奖品背景")]),t._v(" "),i("el-color-picker",{attrs:{size:"small","show-alpha":""},model:{value:t.ruleForm.background,callback:function(e){t.$set(t.ruleForm,"background",e)},expression:"ruleForm.background"}})],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"defaultWordWarp"},slot:"label"},[t._v("文字自动换行")]),t._v(" "),i("el-switch",{attrs:{size:"small"},model:{value:t.ruleForm.wordWrap,callback:function(e){t.$set(t.ruleForm,"wordWrap",e)},expression:"ruleForm.wordWrap"}})],1),t._v(" "),i("el-form-item",[i("tips",{attrs:{slot:"label",type:"defaultLengthLimit"},slot:"label"},[t._v("换行宽度限制")]),t._v(" "),i("el-slider",{attrs:{size:"small",min:.3,max:1,step:.01,"format-tooltip":t.formatTooltip},model:{value:t.ruleForm.lengthLimit,callback:function(e){t.$set(t.ruleForm,"lengthLimit",e)},expression:"ruleForm.lengthLimit"}})],1)],1)],1)}),[],!1,null,"21a64a18",null).exports,defaultConfig:Object(a.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",[t._v("默认配置 - defaultConfig")]),t._v(" "),i("el-form",{attrs:{"label-width":"150px"}},[i("el-form-item",{attrs:{label:"扇形缝隙"}},[i("input-number",{attrs:{size:"small"},model:{value:t.defaultConfig.gutter,callback:function(e){t.$set(t.defaultConfig,"gutter",e)},expression:"defaultConfig.gutter"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"停止范围"}},[i("el-slider",{attrs:{size:"small",min:0,max:1,step:.01},model:{value:t.defaultConfig.stopRange,callback:function(e){t.$set(t.defaultConfig,"stopRange",e)},expression:"defaultConfig.stopRange"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"偏移角度"}},[i("el-input-number",{attrs:{size:"small"},model:{value:t.defaultConfig.offsetDegree,callback:function(e){t.$set(t.defaultConfig,"offsetDegree",e)},expression:"defaultConfig.offsetDegree"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"速度"}},[i("el-input-number",{attrs:{size:"small",min:10,max:40},model:{value:t.defaultConfig.speed,callback:function(e){t.$set(t.defaultConfig,"speed",e)},expression:"defaultConfig.speed"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"开始旋转时间"}},[i("el-input-number",{attrs:{size:"small",min:100},model:{value:t.defaultConfig.accelerationTime,callback:function(e){t.$set(t.defaultConfig,"accelerationTime",e)},expression:"defaultConfig.accelerationTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"缓慢停止时间"}},[i("el-input-number",{attrs:{size:"small",min:100},model:{value:t.defaultConfig.decelerationTime,callback:function(e){t.$set(t.defaultConfig,"decelerationTime",e)},expression:"defaultConfig.decelerationTime"}})],1)],1)],1)}),[],!1,null,"3ec7ead5",null).exports,methods:Object(a.a)(y,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("回调 & 方法")]),this._v("\n  敬请期待\n")])}],!1,null,null,null).exports},computed:Object(l.a)({},Object(d.b)(["$currSelect"]))},$=(i(526),{components:{Wheel:Object(a.a)(C,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("attribute"),t._v(" "),i("hr"),t._v(" "),i("blocks"),t._v(" "),i("hr"),t._v(" "),i("prizes"),t._v(" "),i("hr"),t._v(" "),i("buttons"),t._v(" "),i("hr"),t._v(" "),i("defaultConfig"),t._v(" "),i("hr"),t._v(" "),i("defaultStyle")],1)}),[],!1,null,"1f8b6616",null).exports},data:function(){return{showSetting:!0}}}),j=(i(527),i(528),Object(a.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-aside",{staticClass:"edit-setting",style:{left:this.showSetting?"0px":"-500px"}},[e("div",{staticClass:"edit-setting-content"},[e("Wheel")],1)])}),[],!1,null,"37894f5d",null).exports),L=(i(11),i(28),i(30),i(50),i(39),i(529),{inject:["luckyData"],data:function(){return{format:{indent:2,string:"1"}}},methods:{downloadJSON:function(){var t,e,i,n,s,a,r,l=JSON.stringify(this.luckyData,["name","width","height","rows","cols","blocks","prizes","x","y","row","col","shadow","buttons","defaultConfig","gutter","stopRange","offsetDegree","speed","accelerationTime","decelerationTime","defaultStyle","borderRadius","activeStyle","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","radius","background","pointer","text","src","activeSrc","top","rotate","fontColor","fontSize","fontStyle","fontWeight","lineHeight","wordWrap","lengthLimit","fonts","imgs"],this.format.indent);l=l.replace(/\"(\w+)\"\:/g,(function(t,e){return e+":"})),"1"===this.format.string&&(l=l.replace(/["]/g,"'")),console.log(l),t="100px_data.txt",e=l,s=window.URL||window.webkitURL||window,a=new Blob([e]),(r=document.createElementNS("http://www.w3.org/1999/xhtml","a")).href=s.createObjectURL(a),r.download=t,i=r,(n=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(n)}}}),z=(i(533),Object(a.a)(L,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-aside",{staticClass:"edit-download"},[i("h3",[t._v("导出格式")]),t._v(" "),i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"缩进"}},[i("el-select",{model:{value:t.format.indent,callback:function(e){t.$set(t.format,"indent",e)},expression:"format.indent"}},[i("el-option",{attrs:{label:"2个空格",value:2}}),t._v(" "),i("el-option",{attrs:{label:"4个空格",value:4}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"字符串"}},[i("el-select",{model:{value:t.format.string,callback:function(e){t.$set(t.format,"string",e)},expression:"format.string"}},[i("el-option",{attrs:{label:"单引号",value:"1"}}),t._v(" "),i("el-option",{attrs:{label:"双引号",value:"2"}})],1)],1)],1),t._v(" "),i("hr",{staticStyle:{margin:"25px -20px"}}),t._v(" "),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.downloadJSON}},[t._v("导出 TXT（测试）")])],1)}),[],!1,null,"d81922a8",null).exports),O={components:{Header:n.a,Options:r,LuckDraw:u,Setting:j,Download:z},data:function(){return{luckyData:{width:"300px",height:"300px",prizes:[{name:"恭喜你获得1元红包",background:"#f9e3bb",fonts:[{text:"1元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/0.efbe4dff.png",width:"30%",top:"35%"}]},{name:"恭喜你获得100元红包",background:"#f8d384",fonts:[{text:"100元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/1.de299995.png",width:"30%",top:"35%"}]},{name:"恭喜你获得0.5元红包",background:"#f9e3bb",fonts:[{text:"0.5元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/2.8f1949c9.png",width:"30%",top:"35%"}]},{name:"恭喜你获得2元红包",background:"#f8d384",fonts:[{text:"2元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/3.9307595d.png",width:"30%",top:"35%"}]},{name:"恭喜你获得10元红包",background:"#f9e3bb",fonts:[{text:"10元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/4.1349538d.png",width:"30%",top:"35%"}]},{name:"恭喜你获得50元红包",background:"#f8d384",fonts:[{text:"50元红包",top:"18%"}],imgs:[{src:"https://100px.net/assets/img/5.b92ceb2f.png",width:"30%",top:"35%"}]}],defaultStyle:{fontColor:"#d64737",fontSize:"14px"},blocks:[{padding:"13px",background:"#d64737"}],buttons:[{radius:"50px",background:"#d64737"},{radius:"45px",background:"#fff"},{radius:"41px",background:"#f6c66f",pointer:!0},{radius:"35px",background:"#ffdea0"}]}}},provide:function(){return{luckyData:this.luckyData,setData:this.setData}},mounted:function(){},methods:{setData:function(t){var e=this;Object.keys(t).forEach((function(i){e.$set(e.luckyData,i,t[i])}))}}},S=(i(534),Object(a.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"visual-edit"},[e("Header"),this._v(" "),e("Options",{staticStyle:{"margin-top":"60px",height:"70px"}}),this._v(" "),e("el-container",{staticStyle:{"max-width":"none",height:"calc(100vh - 60px - 70px)"}},[e("el-main",{staticStyle:{order:"2",padding:"0"}},[e("LuckDraw")],1),this._v(" "),e("Setting",{staticStyle:{order:"3"}}),this._v(" "),e("Download",{staticStyle:{order:"1"}})],1)],1)}),[],!1,null,"07cad3bd",null));e.default=S.exports}}]);