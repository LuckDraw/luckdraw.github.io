(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{399:function(t,e,n){t.exports=n.p+"assets/img/btn.fd3cae66.png"},400:function(t,e,n){t.exports=n.p+"assets/img/bg.05735182.png"},500:function(t,e,n){"use strict";n.r(e);n(74),n(198);var s={data:function(){return{prizes:[{name:"免费住酒店"},{name:"房型升级"},{name:"免费取消"},{name:"延迟退房"},{name:"免费早餐"},{name:"明天再来"}],buttons:[{radius:"25%",fonts:[{text:"开始\n抽奖",fontColor:"#fff",top:"-50%",fontSize:"16px"}],imgs:[{src:n(399),width:"120%",top:"-175%"}]}],blocks:[{imgs:[{src:n(400),width:"100%",rotate:!0}]}],defaultConfig:{offsetDegree:30}}},methods:{startCallBack:function(){var t=this;this.$refs.LuckyWheel.play(),setTimeout((function(){t.$refs.LuckyWheel.stop(6*Math.random()>>0)}),3e3)},endCallBack:function(t){alert("恭喜你获得".concat(t.name))}}},a=n(25),o=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("LuckyWheel",{ref:"LuckyWheel",attrs:{width:"300px",height:"300px",blocks:this.blocks,prizes:this.prizes,buttons:this.buttons,defaultConfig:this.defaultConfig},on:{start:this.startCallBack,end:this.endCallBack}})}),[],!1,null,null,null);e.default=o.exports}}]);