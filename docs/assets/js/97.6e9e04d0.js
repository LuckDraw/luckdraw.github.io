(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1029:function(t,n,e){"use strict";e.r(n);e(327);var s={data:function(){return{blocks:[{padding:"10px",background:"#869cfa"}],prizes:[{background:"#e9e8fe",fonts:[{text:"0"}]},{background:"#b8c5f2",fonts:[{text:"1"}]},{background:"#e9e8fe",fonts:[{text:"2"}]},{background:"#b8c5f2",fonts:[{text:"3"}]},{background:"#e9e8fe",fonts:[{text:"4"}]},{background:"#b8c5f2",fonts:[{text:"5"}]}],buttons:[{radius:"40%",background:"#617df2"},{radius:"35%",background:"#afc8ff"},{radius:"30%",background:"#869cfa",pointer:!0,fonts:[{text:"开始",top:"-10px"}]}]}},methods:{startCallBack:function(){var t=this;this.$refs.LuckyGrid.play(),setTimeout((function(){t.$refs.LuckyGrid.stop(0)}),5e3)},endCallBack:function(t){console.log(t)}}},o=e(48),a=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("LuckyWheel",{ref:"myLucky",attrs:{width:"200px",height:"200px",blocks:this.blocks,prizes:this.prizes,buttons:this.buttons},on:{start:this.startCallBack,end:this.endCallBack}})}),[],!1,null,null,null);n.default=a.exports}}]);