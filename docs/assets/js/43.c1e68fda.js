(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1028:function(t,s,a){"use strict";a.r(s);a(327);var n={data:function(){return{currStatus:0,blocks:[{padding:"10px",background:"#869cfa"}],prizes:[{background:"#e9e8fe",fonts:[{text:"0"}]},{background:"#b8c5f2",fonts:[{text:"1"}]},{background:"#e9e8fe",fonts:[{text:"2"}]},{background:"#b8c5f2",fonts:[{text:"3"}]},{background:"#e9e8fe",fonts:[{text:"4"}]},{background:"#b8c5f2",fonts:[{text:"5"}]}],buttons:[{radius:"40%",background:"#617df2"},{radius:"35%",background:"#afc8ff"},{radius:"30%",background:"#869cfa",pointer:!0,fonts:[{text:"开始",top:"-10px"}]}]}},mounted:function(){this.startCallBack()},methods:{startCallBack:function(){var t=this;this.$refs.myLucky.play(),this.currStatus=1,setTimeout((function(s){t.currStatus=2}),2500),setTimeout((function(s){t.$refs.myLucky.stop(8*Math.random()>>0),t.currStatus=3}),5e3)},endCallBack:function(){this.currStatus=0}}},c=(a(934),a(48)),u=Object(c.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("LuckyWheel",{ref:"myLucky",attrs:{width:"200px",height:"200px",blocks:t.blocks,prizes:t.prizes,buttons:t.buttons},on:{start:t.startCallBack,end:t.endCallBack}}),t._v(" "),a("div",{staticClass:"flex"},[a("span",{class:["list",1===t.currStatus&&"green"]},[t._v("加速")]),t._v(" "),a("span",{class:["list",2===t.currStatus&&"yellow"]},[t._v("匀速")]),t._v(" "),a("span",{class:["list",3===t.currStatus&&"red"]},[t._v("减速")])])],1)}),[],!1,null,"17b22ae2",null);s.default=u.exports},694:function(t,s,a){},934:function(t,s,a){"use strict";a(694)}}]);