(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{501:function(t,s,e){},560:function(t,s,e){"use strict";var n=e(501);e.n(n).a},587:function(t,s,e){"use strict";e.r(s);var n={data:function(){return{currStatus:0,blocks:[{padding:"10px",background:"#d64737"}],prizes:[{background:"#f9e3bb",fonts:[{text:"0",top:5}]},{background:"#f9e3bb",fonts:[{text:"1",top:5}]},{background:"#f9e3bb",fonts:[{text:"2",top:5}]},{background:"#f9e3bb",fonts:[{text:"3",top:5}]},{background:"#f9e3bb",fonts:[{text:"4",top:5}]},{background:"#f9e3bb",fonts:[{text:"5",top:5}]}],buttons:[{radius:"35px",background:"#d64737"},{radius:"30px",background:"#f6c66f",pointer:!0},{radius:"25px",background:"#ffdea0",fonts:[{text:"开始",top:"-13px"}]}],defaultConfig:{gutter:"5px",fontColor:"#d64737"}}},methods:{startCallBack:function(){var t=this;this.$refs.LuckyWheel.play(),this.currStatus=1,setTimeout((function(s){t.currStatus=2}),2500),setTimeout((function(s){t.$refs.LuckyWheel.stop(8*Math.random()>>0),t.currStatus=3}),5e3)},endCallBack:function(){this.currStatus=0}}},a=(e(560),e(3)),u=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("LuckyWheel",{ref:"LuckyWheel",staticStyle:{width:"200px",height:"200px"},attrs:{blocks:t.blocks,prizes:t.prizes,buttons:t.buttons,"default-config":t.defaultConfig},on:{start:t.startCallBack,end:t.endCallBack}}),t._v(" "),e("div",{staticClass:"flex"},[e("span",{class:["list",1===t.currStatus&&"green"]},[t._v("加速")]),t._v(" "),e("span",{class:["list",2===t.currStatus&&"yellow"]},[t._v("匀速")]),t._v(" "),e("span",{class:["list",3===t.currStatus&&"red"]},[t._v("减速")])])],1)}),[],!1,null,"4f869ebd",null);s.default=u.exports}}]);