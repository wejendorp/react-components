webpackJsonp([5,19],{103:function(e,t,r){var _=r(269);"string"==typeof _&&(_=[[e.i,_,""]]);var n={hmr:!0};n.transform=void 0;r(6)(_,n);_.locals&&(e.exports=_.locals)},17:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var _=t[r];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var __WEBPACK_IMPORTED_MODULE_0_nprogress__=__webpack_require__(41),__WEBPACK_IMPORTED_MODULE_0_nprogress___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nprogress__),__WEBPACK_IMPORTED_MODULE_1_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_1_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__),__WEBPACK_IMPORTED_MODULE_2__index_less__=__webpack_require__(103),__WEBPACK_IMPORTED_MODULE_2__index_less___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_less__);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var InProgress=function(_React$Component){function InProgress(){var e,t;_classCallCheck(this,InProgress);for(var r=arguments.length,_=new Array(r),n=0;n<r;n++)_[n]=arguments[n];return t=_possibleConstructorReturn(this,(e=_getPrototypeOf(InProgress)).call.apply(e,[this].concat(_))),_defineProperty(_assertThisInitialized(t),"state",{imageStatus:"loading"}),_defineProperty(_assertThisInitialized(t),"handleImageLoaded",function(){t.setState({imageStatus:"loaded"}),__WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done()}),_defineProperty(_assertThisInitialized(t),"handleImageErrored",function(){t.setState({imageStatus:"failed"}),__WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done()}),t}return _inherits(InProgress,_React$Component),_createClass(InProgress,[{key:"render",value:function(){return"loading"===this.state.imageStatus?__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img",{style:{display:"none"},src:"./img/in_progress.png",alt:"Work in progress",onLoad:this.handleImageLoaded,onError:this.handleImageErrored}):__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"in-progress"},"loaded"===this.state.imageStatus&&__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img",{className:"in-progress__image",src:"./img/in_progress.png",alt:"Work in progress",draggable:"false"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",null,"Work in progress..."))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),InProgress}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component),_default=InProgress;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(InProgress,"InProgress","/Users/kanon/Tradeshift/react-components/site/apps/InProgress/index.js"),e.register(_default,"default","/Users/kanon/Tradeshift/react-components/site/apps/InProgress/index.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(4)(module))},269:function(e,t,r){t=e.exports=r(5)(!1),t.push([e.i,".in-progress {\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -250px;\n  margin-top: -230px;\n  width: 500px;\n}\n.in-progress p {\n  margin-top: 10px;\n  font-size: 16px;\n  font-family: 'Ubuntu Mono', 'Menlo', 'Monaco', 'Consolas', 'Bitstream Vera Sans Mono', monospace;\n}\n.in-progress__image {\n  user-select: none;\n  height: 325px;\n}\n",""])}});