webpackJsonp([4,13],{12:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){var i=t(1),o=t.n(i),a=t(2),r=t.n(a),l=t(97);t.n(l);!function(){var n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).enterModule;n&&n(e)}();var c=function(e){var n=e.timelines,t=e.activeIndex;return o.a.createElement("div",null,n.map(function(e,n){return o.a.createElement("div",{className:"timeline ".concat(t===n&&"active"),key:e.id},o.a.createElement("i",{className:"circle"}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"time"},e.time),o.a.createElement("div",{className:"status"},e.status),o.a.createElement("div",{className:"number"},e.name)))}))};c.propTypes={timelines:r.a.arrayOf(r.a.shape({id:r.a.string,time:r.a.string,status:r.a.string,name:r.a.string})),activeIndex:r.a.number};var s=c;n.default=s,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).default;e&&(e.register(c,"TimeLine","/Users/kanon/Tradeshift/react-components/src/components/TimeLine/index.js"),e.register(s,"default","/Users/kanon/Tradeshift/react-components/src/components/TimeLine/index.js"))}(),function(){var n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:t(0)).leaveModule;n&&n(e)}()}.call(n,t(4)(e))},143:function(e,n,t){(e.exports=t(5)(!1)).push([e.i,".timeline {\n  padding-left: 20px;\n  position: relative;\n  width: 100%;\n}\n.timeline::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 5px;\n  width: 2px;\n  background-color: hsl(198, 20%, 67%);\n}\n.timeline .content {\n  color: hsl(199, 20%, 31%);\n  border-bottom: dashed 1px hsl(198, 20%, 67%);\n  padding-bottom: 10px;\n  padding-left: 5px;\n  opacity: 0.6;\n}\n.timeline .content .time {\n  color: hsl(196, 20%, 15%);\n  font-size: 14px;\n  line-height: 20px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-weight: 600;\n}\n.timeline .content .status,\n.timeline .content .number {\n  font-size: 12px;\n}\n.timeline .circle {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 20px;\n  height: 20px;\n  background-color: hsl(198, 20%, 67%);\n  border-radius: 10px;\n  border: solid 1px hsl(0, 0%, 100%);\n}\n.timeline.active .content {\n  opacity: 1;\n}\n.timeline.active .content .time {\n  margin-top: 0;\n}\n.timeline.active .circle {\n  background-color: hsl(199, 100%, 50%);\n  top: 0;\n}\n.timeline.active .circle::before {\n  content: '';\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border-radius: 10px;\n  border: solid 1px hsl(0, 0%, 100%);\n}\n",""])},97:function(e,n,t){var i=t(143);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(e.exports=i.locals)}});