webpackJsonp([66],{113:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var _=arguments[t];for(var o in _)Object.prototype.hasOwnProperty.call(_,o)&&(e[o]=_[o])}return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var _,o,r=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)_=a[o],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(r[_]=e[_])}return r}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var _,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)_=a[o],t.indexOf(_)>=0||(r[_]=e[_]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var o=t[_];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,_){return t in e?Object.defineProperty(e,t,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[t]=_,e}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),__WEBPACK_IMPORTED_MODULE_2_classlist__=__webpack_require__(71),__WEBPACK_IMPORTED_MODULE_2_classlist___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classlist__),__WEBPACK_IMPORTED_MODULE_3_classnames__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_3_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).enterModule;e&&e(module)}();var ModalContent=function(_Component){function ModalContent(e){var t;return _classCallCheck(this,ModalContent),t=_possibleConstructorReturn(this,_getPrototypeOf(ModalContent).call(this,e)),_defineProperty(_assertThisInitialized(t),"handleModalClick",function(e){if(e.target.className==="".concat("ts-rc","-modal__modal"))if(t.props.lock){var _="".concat("ts-rc","-modal__modal-dialog_lock");__WEBPACK_IMPORTED_MODULE_2_classlist___default()(t.modalNode).add(_);var o=function e(){t.modalNode.removeEventListener("animationend",e),__WEBPACK_IMPORTED_MODULE_2_classlist___default()(t.modalNode).remove(_)};t.modalNode.addEventListener("animationend",o)}else t.props.close()}),t.relativeValue=0,t}return _inherits(ModalContent,_Component),_createClass(ModalContent,[{key:"getChildContext",value:function(){return{modalContent:this}}},{key:"backUp",value:function(){this.relativeValue+=20,this.transform();var e=this.props.modal.context.modalContent;e&&e.backUp()}},{key:"goForward",value:function(){this.relativeValue-=20,this.transform();var e=this.props.modal.context.modalContent;e&&e.goForward()}},{key:"transform",value:function(){this.modalNode.style.transform="translateY(-".concat(this.relativeValue,"px)")}},{key:"render",value:function(){var e=this,t=this.props,_=t.children,o=t.className,r=(t.lock,t.size),a=t.zIndex,n=t.close,l=(t.modal,_objectWithoutProperties(t,["children","className","lock","size","zIndex","close","modal"]));return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",_extends({className:__WEBPACK_IMPORTED_MODULE_3_classnames___default()("".concat("ts-rc","-modal"),_defineProperty({},"".concat("ts-rc","-modal_").concat(r),r),o)},l),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__backdrop"),style:{zIndex:a||3e3}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal"),style:{zIndex:a||3e3},onClick:this.handleModalClick},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal-dialog"),ref:function(t){return e.modalNode=t}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal-content")},_),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"".concat("ts-rc","-modal__modal-close"),onClick:function(){return n()}}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ModalContent}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);ModalContent.childContextTypes={modalContent:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(ModalContent)},ModalContent.propTypes={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,lock:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,zIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,close:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,modal:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var _default=ModalContent;__webpack_exports__.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).default;e&&(e.register(ModalContent,"ModalContent","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/ModalContent.js"),e.register(_default,"default","/Users/Kimi/Documents/Projects/tradeshift-projects/react-components/src/components/Modal/ModalContent.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(0)).leaveModule;e&&e(module)}()}.call(__webpack_exports__,__webpack_require__(3)(module))}});