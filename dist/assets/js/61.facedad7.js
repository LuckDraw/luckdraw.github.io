(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{643:function(t,e,n){"use strict";n.r(e);n(227);var o={data:function(){return{blocks:[{padding:"10px",background:"#869cfa"}],prizes:[{fonts:[{text:"0"}],background:"#e9e8fe"},{fonts:[{text:"1"}],background:"#b8c5f2"},{fonts:[{text:"2"}],background:"#e9e8fe"},{fonts:[{text:"3"}],background:"#b8c5f2"},{fonts:[{text:"4"}],background:"#e9e8fe"},{fonts:[{text:"5"}],background:"#b8c5f2"}],defaultConfig:{stopRange:.5}}},mounted:function(){this.handleStart()},methods:{handleStart:function(){var t=this;this.$refs.myLucky.play(),setTimeout((function(){t.$refs.myLucky.stop(0),setTimeout((function(){return t.handleStart()}),3500)}),1e3)}}},s=n(32),u=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("LuckyWheel",{ref:"myLucky",attrs:{width:"200px",height:"200px",blocks:this.blocks,prizes:this.prizes,defaultConfig:this.defaultConfig}})}),[],!1,null,null,null);e.default=u.exports}}]);