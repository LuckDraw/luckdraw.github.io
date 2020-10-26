(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{589:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("实际上"),a("code",[t._v("奖品格子")]),t._v("的属性与"),a("code",[t._v("按钮格子")]),t._v("的属性相差无几，但是有个区别：1.奖品有很多个所以是数组，而抽奖按钮只有一个所以是对象；")])]),t._v(" "),a("ul",[a("li",[a("Describe",{attrs:{name:"button?: object",mean:"抽奖按钮"}}),t._v(" "),a("ul",[a("li",[a("Describe",{attrs:{name:"x: number",mean:"相对坐标x",desc:"如果是标准的 3*3 宫格，那 x 的范围是 0 ~ 2",isRequire:!0}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"y: number",mean:"相对坐标y",desc:"如果是标准的 3*3 宫格，那 y 的范围是 0 ~ 2",isRequire:!0}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"col?: number",mean:"横向合并格子",desc:"用来横向合并单元格，默认为 1"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"row?: number",mean:"纵向合并格子",desc:"用来纵向合并单元格，默认为 1"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"borderRadius?: number",mean:"格子圆角",desc:"可继承 defaultStyle 圆角，默认为 20"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"shadow?: string",mean:"格子阴影",desc:"由 4 个值组成：1.水平位置、2.垂直位置、3.模糊度、4.阴影颜色"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"background?: string",mean:"格子背景色",desc:"可继承 defaultStyle 背景色，默认为 '#fff'"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"fonts?: Array<object>",mean:"文字列表"}}),t._v(" "),a("ul",[a("li",[a("Describe",{attrs:{name:"text: string",mean:"字体内容",desc:"可以使用 \\n 用来换行",isRequire:!0}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"top?: string | number",mean:"距离顶部的高度",desc:"格式为：20 | '20px' | '20%'，默认为 0"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"fontColor?: string",mean:"字体颜色"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"fontSize?: string",mean:"字体大小(px)",desc:"可继承 defaultStyle 字体样式，默认为 '18px'"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"fontStyle?: string",mean:"字体样式",desc:"可继承 defaultStyle 字体样式，默认为 'sans-serif'"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"fontWeight?: string",mean:"字体粗细",desc:"可继承 defaultStyle 字体粗细，默认为 '400'"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"lineHeight?: string",mean:"字体行高",desc:"默认等于字体大小"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"wordWrap?: boolean",mean:"文字自动换行",desc:"默认为 true 开启，关闭时可以使用 \\n 换行"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"lengthLimit?: string | number",mean:"换行宽度限制",desc:"格式为：90 | '90px' | '90%'，默认为 '90%'"}})],1)])],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"imgs?: Array<object>",mean:"图片列表"}}),t._v(" "),a("ul",[a("li",[a("Describe",{attrs:{name:"src: string",mean:"图片路径",isRequire:!0}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"top?: string | number",mean:"距离顶部的高度",desc:"格式为：20 | '20px' | '20%'，默认为 0"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"width?: string",mean:"图片宽度",desc:"关于图片宽高有四种可能"}})],1),t._v(" "),a("li",[a("Describe",{attrs:{name:"height?: string",mean:"图片高度",desc:"关于图片宽高有四种可能"}})],1)])],1)])],1)]),t._v(" "),a("p",[t._v("1.宽高都未设置：则使用图片原大小；2.有宽度无高度：则高度随着宽度等比缩放；3.有高度无宽度：则宽度随着高度等比缩放；4.既有宽度也有高度：则图片宽高均等于设置的值（会被拉伸）")]),t._v(" "),a("h2",{attrs:{id:"关于配置按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于配置按钮"}},[t._v("#")]),t._v(" 关于配置按钮")]),t._v(" "),a("Exhibition",{scopedSlots:t._u([{key:"code",fn:function(){return[a("grid-button1")]},proxy:!0},{key:"text",fn:function(){return[a("li",[t._v("抽奖按钮和奖品格子配置基本一致")]),t._v(" "),a("li",[t._v("但是抽奖按钮只能充当于一个"),a("code",[t._v("button")]),t._v("按钮的作用，帮助你触发"),a("code",[t._v("start")]),t._v("的回调，所以具体的抽奖逻得由你自己来实现")]),t._v(" "),a("li",[t._v("实际上，你甚至可以选择不配置抽奖按钮，然后在外部自己用"),a("code",[t._v("dom")]),t._v("做一个抽奖按钮，然后调用"),a("code",[t._v("play")]),t._v("方法开始游戏也是可以的")])]},proxy:!0}])}),t._v(" "),a("RecoDemo",{attrs:{collapse:!0}},[a("template",{slot:"code-vue"},[a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("LuckyGrid")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":blocks")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[{ padding: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", background: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("#ff4a4c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", borderRadius: 10 }]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\r\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":button")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\r\n      x: 1, y: 1, borderRadius: 10,\r\n      imgs: [{\r\n        src: $withBase("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/img/button.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("),\r\n        width: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("75%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\r\n        top: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("20%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\r\n      }]\r\n    }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\r\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\r\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\r\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])])],2)],1)}),[],!1,null,null,null);s.default=n.exports}}]);