(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{661:function(t,e,n){},750:function(t,e,n){"use strict";n(661)},891:function(t,e,n){"use strict";n.r(e);var o=n(610),i=n.n(o),c=n(620).wheel,s={data:function(){return{drawer:!1,currItem:{},list:[{title:"通过padding挤出边框",desc:"blocks[ ].padding",component:"block-padding"},{title:"使用图片作为背景",desc:"blocks[ ].imgs",component:"block-img"},{title:"使用图片作为边框",desc:"blocks[ ].imgs",component:"block-border"},{title:"设置多个图片作为边框",desc:"blocks[ ].imgs",component:"block-borders"},{title:"设置背景图片跟随旋转",desc:"blocks[ ].imgs[ ].rotate",component:"block-rotate"},{title:"设置扇形区域的背景颜色",desc:"prizes[ ].background",component:"prize-background"},{title:"设置奖品文字",desc:"prizes[ ].fonts",component:"prize-font"},{title:"设置奖品文字换行",desc:"prizes[ ].fonts[ ].wordWrap",component:"prize-wordWrap"},{title:"设置奖品文字溢出隐藏",desc:"prizes[ ].fonts[ ].lineClamp",component:"prize-lineClamp"},{title:"设置奖品图片",desc:"prizes[ ].imgs",component:"prize-img"},{title:"设置扇形之间的缝隙",desc:"defaultConfig.gutter",component:"default-gutter"},{title:"设置抽奖按钮",desc:"buttons[ ].radius",component:"btn-radius"},{title:"带指针的抽奖按钮",desc:"buttons[ ].pointer",component:"btn-pointer"},{title:"使用图片作为抽奖按钮",desc:"buttons[ ].imgs",component:"btn-img"},{title:"使用Dom作为抽奖按钮",desc:"<div></div>",component:"btn-dom"},{title:"指针在扇形50%区域内随机停止",desc:"defaultConfig.stopRange",component:"default-stopRange"},{title:"设置抽奖的旋转速度",desc:"defaultConfig.speed",component:"default-speed"},{title:"控制游戏的开始和结束",desc:"play() & stop()",component:"demo"}]}},methods:{toPlayground:function(t){var e=c[t.component];this.$router.push({path:"/playground.html?code=".concat(i.a.encode(e))})},showCode:function(t){var e=this,n=document.getElementById(t.component);n&&(this.drawer=!0,this.currItem=t,this.$nextTick((function(){n.style.display="block",e.$refs.drawer.appendChild(n)})))},handleClose:function(t){var e=document.querySelector(".content__default"),n=document.getElementById(this.currItem.component);n.style.display="none",e.appendChild(n),t()}}},l=(n(750),n(48)),d=Object(l.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo-page"},[o("el-row",{attrs:{gutter:20}},t._l(t.list,(function(e){return o("el-col",{key:e.title,attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[o("el-card",{staticClass:"box-card",nativeOn:{click:function(n){return t.showCode(e)}}},[e.component?o("demo-wheel-"+e.component,{tag:"component"}):o("img",{staticStyle:{"margin-top":"15%"},attrs:{src:n(607),width:"70%"}}),t._v(" "),o("div",{staticClass:"code-icon"},[o("span",{on:{click:function(n){return t.toPlayground(e)}}},[t._v("查看代码")])])],1),t._v(" "),o("div",{staticClass:"title"},[o("h3",[t._v(t._s(e.title))]),t._v(" "),e.desc?o("p",[t._v(t._s(e.desc))]):t._e()])],1)})),1),t._v(" "),o("el-drawer",{attrs:{size:"450",direction:"btt",title:t.currItem.title,visible:t.drawer,"before-close":t.handleClose},on:{"update:visible":function(e){t.drawer=e}}},[o("div",{ref:"drawer"})])],1)}),[],!1,null,null,null);e.default=d.exports}}]);