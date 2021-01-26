/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./survey.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./survey.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".aa_item {\r\n  color: blue;\r\n}\r\n/* \r\n\tcnbilgin \r\n\thttps://github.com/cnbilgin/jquery-drawpad\r\n\tv 0.1\r\n*/\r\n\r\n.drawpad * {\r\n  box-sizing: border-box;\r\n}\r\n.drawpad {\r\n  background-color: #fff;\r\n  position: relative;\r\n}\r\n.drawpad.drawpad-dashed {\r\n  border: 2px dashed black;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.drawpad > canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.drawpad .drawpad-toolbox {\r\n  width: 25px;\r\n  right: 10px;\r\n  top: 10px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  display: flex;\r\n  height: calc(100% - 20px);\r\n  flex-direction: column;\r\n  opacity: 0.3;\r\n  pointer-events: none;\r\n}\r\n.drawpad .drawpad-toolbox:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.drawpad .drawpad-colors {\r\n  margin-bottom: 15px;\r\n  pointer-events: all;\r\n}\r\n.drawpad .drawpad-colorbox {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-bottom: 10px;\r\n  border: 2px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.drawpad.drawpad-drawing .drawpad-colors {\r\n  pointer-events: none;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:hover {\r\n  filter: brightness(1.3);\r\n}\r\n.drawpad .drawpad-colorbox:active {\r\n  filter: brightness(0.8);\r\n}\r\n.drawpad .drawpad-eraser {\r\n  background-color: #fff;\r\n  border-style: dashed;\r\n  border-color: gray;\r\n}\r\n.drawpad .drawpad-colorbox.drawpad-colorbox-active {\r\n  border-color: #000;\r\n}\r\n\r\n/*Feedback Syles*/\r\n/*\r\n * Bootstrap v2.0.4\r\n *\r\n * Copyright 2012 Twitter, Inc\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Designed and built with all the love in the world @twitter by @mdo and @fat.\r\n*/\r\n\r\n.feedback-review label {\r\n  font-size: 14px;\r\n}\r\n.feedback-info {\r\n  position: absolute;\r\n  display: none;\r\n  z-index: 9999;\r\n  left: 30%;\r\n  top: 10px;\r\n  padding: 10px;\r\n  background-color: aliceblue;\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n}\r\n\r\n.feedback-body .feedback-error {\r\n  color: #b94a48;\r\n  border-color: #b94a48;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.feedback-body .feedback-error:focus {\r\n  border-color: #953b39;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.feedback-body p a {\r\n  color: #0088cc;\r\n  text-decoration: none;\r\n}\r\n.feedback-body p a:hover {\r\n  color: #005580;\r\n  text-decoration: underline;\r\n}\r\n\r\n.feedback-modal h3 {\r\n  line-height: 27px;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.feedback-modal {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2050;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n  width: 560px;\r\n  margin: -250px 0 0 -280px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  *border: 1px solid #999;\r\n  /* IE6-7 */\r\n\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n}\r\n.feedback-modal.large {\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 10px;\r\n  z-index: 2050;\r\n  max-height: 1200px;\r\n  margin: 0;\r\n  overflow: auto;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow: hidden;\r\n}\r\n.feedback-modal.large .feedback-body {\r\n  overflow: auto;\r\n  height: 700px;\r\n}\r\n.feedback-modal .feedback-body .feedback-screenshot {\r\n  overflow: hidden;\r\n  max-height: 300px;\r\n  max-height: 300px;\r\n  width: 300px;\r\n  border: 1px dotted lightblue;\r\n}\r\n.feedback-screenshot canvas {\r\n  background-color: rgb(240, 248, 255);\r\n}\r\n\r\n.feedback-modal .feedback-close {\r\n  float: right;\r\n  top: 10%;\r\n  left: 10%;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  line-height: 18px;\r\n  color: #000000;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.feedback-modal .feedback-close:hover {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=40);\r\n  cursor: pointer;\r\n}\r\n\r\n.feedback-btn {\r\n  display: inline-block;\r\n  padding: 4px 10px 4px;\r\n  margin-bottom: 0;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333333;\r\n  text-align: center;\r\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n  vertical-align: middle;\r\n  background-color: #f5f5f5;\r\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#ffffff),\r\n    to(#e6e6e6)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);\r\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  border: 1px solid #ccc;\r\n  border-bottom-color: #bbb;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  cursor: pointer;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  *margin-left: 0.3em;\r\n}\r\n.feedback-btn:hover,\r\n.feedback-btn:active,\r\n.feedback-btn.active,\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  background-color: #e6e6e6;\r\n}\r\n.feedback-btn:active,\r\n.feedback-btn.active {\r\n  background-color: #cccccc \\9;\r\n}\r\n.feedback-btn:first-child {\r\n  *margin-left: 0;\r\n}\r\n.feedback-btn:hover {\r\n  color: #333333;\r\n  text-decoration: none;\r\n  background-color: #e6e6e6;\r\n  background-position: 0 -15px;\r\n  -webkit-transition: background-position 0.1s linear;\r\n  -moz-transition: background-position 0.1s linear;\r\n  -ms-transition: background-position 0.1s linear;\r\n  -o-transition: background-position 0.1s linear;\r\n  transition: background-position 0.1s linear;\r\n}\r\n.feedback-btn:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.feedback-btn.active,\r\n.feedback-btn:active {\r\n  background-image: none;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  background-color: #e6e6e6;\r\n  background-color: #d9d9d9 \\9;\r\n  outline: 0;\r\n}\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  cursor: default;\r\n  background-image: none;\r\n  background-color: #e6e6e6;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.feedback-btn-small {\r\n  padding: 5px 9px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n.feedback-btn-small [class^='icon-'] {\r\n  margin-top: -1px;\r\n}\r\n\r\n.feedback-btn-inverse,\r\n.feedback-btn-inverse:hover {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  color: #ffffff;\r\n}\r\n\r\n.feedback-btn-inverse {\r\n  background-color: #393939;\r\n  background-image: -moz-linear-gradient(top, #454545, #262626);\r\n  background-image: -ms-linear-gradient(top, #454545, #262626);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#454545),\r\n    to(#262626)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #454545, #262626);\r\n  background-image: -o-linear-gradient(top, #454545, #262626);\r\n  background-image: linear-gradient(top, #454545, #262626);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#454545', endColorstr='#262626', GradientType=0);\r\n  border-color: #262626 #262626 #000000;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.feedback-btn-inverse:hover,\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active,\r\n.feedback-btn-inverse.disabled,\r\n.feedback-btn-inverse[disabled] {\r\n  background-color: #262626;\r\n}\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active {\r\n  background-color: #0c0c0c \\9;\r\n}\r\nbutton.feedback-btn,\r\ninput[type='submit'].feedback-btn {\r\n  *padding-top: 2px;\r\n  *padding-bottom: 2px;\r\n}\r\nbutton.feedback-btn::-moz-focus-inner,\r\ninput[type='submit'].feedback-btn::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\nbutton.feedback-btn.large,\r\ninput[type='submit'].feedback-btn.large {\r\n  *padding-top: 7px;\r\n  *padding-bottom: 7px;\r\n}\r\nbutton.feedback-btn.small,\r\ninput[type='submit'].feedback-btn.small {\r\n  *padding-top: 3px;\r\n  *padding-bottom: 3px;\r\n}\r\n\r\n.feedback-btn .caret {\r\n  margin-top: 7px;\r\n  margin-left: 0;\r\n}\r\n.feedback-btn:hover .caret,\r\n.open.btn-group .caret {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n.feedback-btn-inverse .caret {\r\n  border-top-color: #ffffff;\r\n  opacity: 0.75;\r\n  filter: alpha(opacity=75);\r\n}\r\n.feedback-btn-small .caret {\r\n  margin-top: 4px;\r\n}\r\n\r\n.feedback-bottom-right {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.feedback-header {\r\n  padding: 9px 15px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.feedback-header .feedback-close {\r\n  margin-top: 2px;\r\n}\r\n.feedback-body {\r\n  padding: 15px;\r\n  height: 380px;\r\n}\r\n.feedback-body .modal-form {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-body textarea {\r\n  margin: 0;\r\n  font-size: 100%;\r\n  vertical-align: middle;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n  display: inline-block;\r\n  width: 520px;\r\n  height: 100px;\r\n  padding: 4px;\r\n  margin-bottom: 9px;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #555555;\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -o-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  transition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\n.feedback-body textarea:focus {\r\n  border-color: rgba(82, 168, 236, 0.8);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  outline: 0;\r\n  outline: thin dotted \\9;\r\n  /* IE6-9 */\r\n}\r\n\r\n.feedback-footer {\r\n  padding: 5px 14px 15px 15px;\r\n  line-height: 20px;\r\n  margin-bottom: 0;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  -webkit-border-radius: 0 0 6px 6px;\r\n  -moz-border-radius: 0 0 6px 6px;\r\n  border-radius: 0 0 6px 6px;\r\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\r\n  -moz-box-shadow: inset 0 1px 0 #ffffff;\r\n  box-shadow: inset 0 1px 0 #ffffff;\r\n  *zoom: 1;\r\n}\r\n.feedback-footer:before,\r\n.feedback-footer:after {\r\n  display: table;\r\n  content: '';\r\n}\r\n.feedback-footer:after {\r\n  clear: both;\r\n}\r\n.feedback-footer .feedback-btn {\r\n  float: right;\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-glass {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #777;\r\n  opacity: 0.5;\r\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n.feedback-canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3999;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.feedback-canvas canvas {\r\n  position: absolute;\r\n}\r\n\r\n#feedback-blackout-element {\r\n  background: #000;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-highlight-element,\r\n.feedback-highlighted {\r\n  position: absolute;\r\n\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n\r\n  z-index: 2000;\r\n  -moz-background-clip: padding;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-box-shadow: 0px 0px 8px 0px yellow;\r\n  box-shadow: 0px 0px 8px 0px yellow;\r\n}\r\n\r\n.feedback-highlight-element {\r\n  pointer-events: none;\r\n}\r\n\r\n#feedback-highlight-close {\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n\r\n  z-index: 2001;\r\n\r\n  -webkit-border-radius: 10px;\r\n  border-radius: 10px;\r\n\r\n  -webkit-box-shadow: 0px 0px 4px 0px #615e5e;\r\n  box-shadow: 0px 0px 4px 0px #615e5e;\r\n\r\n  background-color: #c5c5c5;\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    from(#c5c5c5),\r\n    to(#999999)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -moz-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -o-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: linear-gradient(to bottom, #c5c5c5, #999999);\r\n}\r\n\r\n.feedback-blackedout {\r\n  background: #000;\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n#feedback-highlight-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 2010;\r\n}\r\n\r\n.feedback-animate-toside {\r\n  top: 100%;\r\n  left: 100%;\r\n  width: 300px;\r\n  margin-left: -320px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-animate-review {\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 600px;\r\n\r\n  margin-left: -300px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-canvas-complete {\r\n  -webkit-filter: blur(5px);\r\n}\r\n\r\n.feedback-body canvas {\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #636363;\r\n  -webkit-box-shadow: 0px 0px 12px 0px #615e5e;\r\n  box-shadow: 0px 0px 12px 0px #615e5e;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-browser {\r\n  margin-left: 330px;\r\n}\r\n\r\n.feedback-loader {\r\n  text-align: center;\r\n}\r\n.feedback-loader span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 50px auto;\r\n  background: black;\r\n  border-radius: 50px;\r\n  -webkit-animation: feedback-loader 0.9s infinite alternate;\r\n  -moz-animation: feedback-loader 0.9s infinite alternate;\r\n}\r\n.feedback-loader span:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.3s;\r\n  -moz-animation-delay: 0.3s;\r\n}\r\n.feedback-loader span:nth-of-type(3) {\r\n  -webkit-animation-delay: 0.6s;\r\n  -moz-animation-delay: 0.6s;\r\n}\r\n@-webkit-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -webkit-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -webkit-transform: translateY(-21px);\r\n  }\r\n}\r\n@-moz-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -moz-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -moz-transform: translateY(-21px);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./survey.css"],"names":[],"mappings":"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","sourcesContent":[".aa_item {\r\n  color: blue;\r\n}\r\n/* \r\n\tcnbilgin \r\n\thttps://github.com/cnbilgin/jquery-drawpad\r\n\tv 0.1\r\n*/\r\n\r\n.drawpad * {\r\n  box-sizing: border-box;\r\n}\r\n.drawpad {\r\n  background-color: #fff;\r\n  position: relative;\r\n}\r\n.drawpad.drawpad-dashed {\r\n  border: 2px dashed black;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.drawpad > canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.drawpad .drawpad-toolbox {\r\n  width: 25px;\r\n  right: 10px;\r\n  top: 10px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  display: flex;\r\n  height: calc(100% - 20px);\r\n  flex-direction: column;\r\n  opacity: 0.3;\r\n  pointer-events: none;\r\n}\r\n.drawpad .drawpad-toolbox:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.drawpad .drawpad-colors {\r\n  margin-bottom: 15px;\r\n  pointer-events: all;\r\n}\r\n.drawpad .drawpad-colorbox {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-bottom: 10px;\r\n  border: 2px solid transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.drawpad.drawpad-drawing .drawpad-colors {\r\n  pointer-events: none;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:hover {\r\n  filter: brightness(1.3);\r\n}\r\n.drawpad .drawpad-colorbox:active {\r\n  filter: brightness(0.8);\r\n}\r\n.drawpad .drawpad-eraser {\r\n  background-color: #fff;\r\n  border-style: dashed;\r\n  border-color: gray;\r\n}\r\n.drawpad .drawpad-colorbox.drawpad-colorbox-active {\r\n  border-color: #000;\r\n}\r\n\r\n/*Feedback Syles*/\r\n/*\r\n * Bootstrap v2.0.4\r\n *\r\n * Copyright 2012 Twitter, Inc\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Designed and built with all the love in the world @twitter by @mdo and @fat.\r\n*/\r\n\r\n.feedback-review label {\r\n  font-size: 14px;\r\n}\r\n.feedback-info {\r\n  position: absolute;\r\n  display: none;\r\n  z-index: 9999;\r\n  left: 30%;\r\n  top: 10px;\r\n  padding: 10px;\r\n  background-color: aliceblue;\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n}\r\n\r\n.feedback-body .feedback-error {\r\n  color: #b94a48;\r\n  border-color: #b94a48;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.feedback-body .feedback-error:focus {\r\n  border-color: #953b39;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.feedback-body p a {\r\n  color: #0088cc;\r\n  text-decoration: none;\r\n}\r\n.feedback-body p a:hover {\r\n  color: #005580;\r\n  text-decoration: underline;\r\n}\r\n\r\n.feedback-modal h3 {\r\n  line-height: 27px;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.feedback-modal {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2050;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n  width: 560px;\r\n  margin: -250px 0 0 -280px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  *border: 1px solid #999;\r\n  /* IE6-7 */\r\n\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n}\r\n.feedback-modal.large {\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 10px;\r\n  z-index: 2050;\r\n  max-height: 1200px;\r\n  margin: 0;\r\n  overflow: auto;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow: hidden;\r\n}\r\n.feedback-modal.large .feedback-body {\r\n  overflow: auto;\r\n  height: 700px;\r\n}\r\n.feedback-modal .feedback-body .feedback-screenshot {\r\n  overflow: hidden;\r\n  max-height: 300px;\r\n  max-height: 300px;\r\n  width: 300px;\r\n  border: 1px dotted lightblue;\r\n}\r\n.feedback-screenshot canvas {\r\n  background-color: rgb(240, 248, 255);\r\n}\r\n\r\n.feedback-modal .feedback-close {\r\n  float: right;\r\n  top: 10%;\r\n  left: 10%;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  line-height: 18px;\r\n  color: #000000;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.feedback-modal .feedback-close:hover {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=40);\r\n  cursor: pointer;\r\n}\r\n\r\n.feedback-btn {\r\n  display: inline-block;\r\n  padding: 4px 10px 4px;\r\n  margin-bottom: 0;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333333;\r\n  text-align: center;\r\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n  vertical-align: middle;\r\n  background-color: #f5f5f5;\r\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#ffffff),\r\n    to(#e6e6e6)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);\r\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  border: 1px solid #ccc;\r\n  border-bottom-color: #bbb;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  cursor: pointer;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  *margin-left: 0.3em;\r\n}\r\n.feedback-btn:hover,\r\n.feedback-btn:active,\r\n.feedback-btn.active,\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  background-color: #e6e6e6;\r\n}\r\n.feedback-btn:active,\r\n.feedback-btn.active {\r\n  background-color: #cccccc \\9;\r\n}\r\n.feedback-btn:first-child {\r\n  *margin-left: 0;\r\n}\r\n.feedback-btn:hover {\r\n  color: #333333;\r\n  text-decoration: none;\r\n  background-color: #e6e6e6;\r\n  background-position: 0 -15px;\r\n  -webkit-transition: background-position 0.1s linear;\r\n  -moz-transition: background-position 0.1s linear;\r\n  -ms-transition: background-position 0.1s linear;\r\n  -o-transition: background-position 0.1s linear;\r\n  transition: background-position 0.1s linear;\r\n}\r\n.feedback-btn:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.feedback-btn.active,\r\n.feedback-btn:active {\r\n  background-image: none;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  background-color: #e6e6e6;\r\n  background-color: #d9d9d9 \\9;\r\n  outline: 0;\r\n}\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  cursor: default;\r\n  background-image: none;\r\n  background-color: #e6e6e6;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.feedback-btn-small {\r\n  padding: 5px 9px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n.feedback-btn-small [class^='icon-'] {\r\n  margin-top: -1px;\r\n}\r\n\r\n.feedback-btn-inverse,\r\n.feedback-btn-inverse:hover {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  color: #ffffff;\r\n}\r\n\r\n.feedback-btn-inverse {\r\n  background-color: #393939;\r\n  background-image: -moz-linear-gradient(top, #454545, #262626);\r\n  background-image: -ms-linear-gradient(top, #454545, #262626);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#454545),\r\n    to(#262626)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #454545, #262626);\r\n  background-image: -o-linear-gradient(top, #454545, #262626);\r\n  background-image: linear-gradient(top, #454545, #262626);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#454545', endColorstr='#262626', GradientType=0);\r\n  border-color: #262626 #262626 #000000;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.feedback-btn-inverse:hover,\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active,\r\n.feedback-btn-inverse.disabled,\r\n.feedback-btn-inverse[disabled] {\r\n  background-color: #262626;\r\n}\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active {\r\n  background-color: #0c0c0c \\9;\r\n}\r\nbutton.feedback-btn,\r\ninput[type='submit'].feedback-btn {\r\n  *padding-top: 2px;\r\n  *padding-bottom: 2px;\r\n}\r\nbutton.feedback-btn::-moz-focus-inner,\r\ninput[type='submit'].feedback-btn::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\nbutton.feedback-btn.large,\r\ninput[type='submit'].feedback-btn.large {\r\n  *padding-top: 7px;\r\n  *padding-bottom: 7px;\r\n}\r\nbutton.feedback-btn.small,\r\ninput[type='submit'].feedback-btn.small {\r\n  *padding-top: 3px;\r\n  *padding-bottom: 3px;\r\n}\r\n\r\n.feedback-btn .caret {\r\n  margin-top: 7px;\r\n  margin-left: 0;\r\n}\r\n.feedback-btn:hover .caret,\r\n.open.btn-group .caret {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n.feedback-btn-inverse .caret {\r\n  border-top-color: #ffffff;\r\n  opacity: 0.75;\r\n  filter: alpha(opacity=75);\r\n}\r\n.feedback-btn-small .caret {\r\n  margin-top: 4px;\r\n}\r\n\r\n.feedback-bottom-right {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.feedback-header {\r\n  padding: 9px 15px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.feedback-header .feedback-close {\r\n  margin-top: 2px;\r\n}\r\n.feedback-body {\r\n  padding: 15px;\r\n  height: 380px;\r\n}\r\n.feedback-body .modal-form {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-body textarea {\r\n  margin: 0;\r\n  font-size: 100%;\r\n  vertical-align: middle;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n  display: inline-block;\r\n  width: 520px;\r\n  height: 100px;\r\n  padding: 4px;\r\n  margin-bottom: 9px;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #555555;\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -o-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  transition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\n.feedback-body textarea:focus {\r\n  border-color: rgba(82, 168, 236, 0.8);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  outline: 0;\r\n  outline: thin dotted \\9;\r\n  /* IE6-9 */\r\n}\r\n\r\n.feedback-footer {\r\n  padding: 5px 14px 15px 15px;\r\n  line-height: 20px;\r\n  margin-bottom: 0;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  -webkit-border-radius: 0 0 6px 6px;\r\n  -moz-border-radius: 0 0 6px 6px;\r\n  border-radius: 0 0 6px 6px;\r\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\r\n  -moz-box-shadow: inset 0 1px 0 #ffffff;\r\n  box-shadow: inset 0 1px 0 #ffffff;\r\n  *zoom: 1;\r\n}\r\n.feedback-footer:before,\r\n.feedback-footer:after {\r\n  display: table;\r\n  content: '';\r\n}\r\n.feedback-footer:after {\r\n  clear: both;\r\n}\r\n.feedback-footer .feedback-btn {\r\n  float: right;\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-glass {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #777;\r\n  opacity: 0.5;\r\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n.feedback-canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3999;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.feedback-canvas canvas {\r\n  position: absolute;\r\n}\r\n\r\n#feedback-blackout-element {\r\n  background: #000;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-highlight-element,\r\n.feedback-highlighted {\r\n  position: absolute;\r\n\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n\r\n  z-index: 2000;\r\n  -moz-background-clip: padding;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-box-shadow: 0px 0px 8px 0px yellow;\r\n  box-shadow: 0px 0px 8px 0px yellow;\r\n}\r\n\r\n.feedback-highlight-element {\r\n  pointer-events: none;\r\n}\r\n\r\n#feedback-highlight-close {\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n\r\n  z-index: 2001;\r\n\r\n  -webkit-border-radius: 10px;\r\n  border-radius: 10px;\r\n\r\n  -webkit-box-shadow: 0px 0px 4px 0px #615e5e;\r\n  box-shadow: 0px 0px 4px 0px #615e5e;\r\n\r\n  background-color: #c5c5c5;\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    from(#c5c5c5),\r\n    to(#999999)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -moz-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -o-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: linear-gradient(to bottom, #c5c5c5, #999999);\r\n}\r\n\r\n.feedback-blackedout {\r\n  background: #000;\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n#feedback-highlight-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 2010;\r\n}\r\n\r\n.feedback-animate-toside {\r\n  top: 100%;\r\n  left: 100%;\r\n  width: 300px;\r\n  margin-left: -320px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-animate-review {\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 600px;\r\n\r\n  margin-left: -300px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-canvas-complete {\r\n  -webkit-filter: blur(5px);\r\n}\r\n\r\n.feedback-body canvas {\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #636363;\r\n  -webkit-box-shadow: 0px 0px 12px 0px #615e5e;\r\n  box-shadow: 0px 0px 12px 0px #615e5e;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-browser {\r\n  margin-left: 330px;\r\n}\r\n\r\n.feedback-loader {\r\n  text-align: center;\r\n}\r\n.feedback-loader span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 50px auto;\r\n  background: black;\r\n  border-radius: 50px;\r\n  -webkit-animation: feedback-loader 0.9s infinite alternate;\r\n  -moz-animation: feedback-loader 0.9s infinite alternate;\r\n}\r\n.feedback-loader span:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.3s;\r\n  -moz-animation-delay: 0.3s;\r\n}\r\n.feedback-loader span:nth-of-type(3) {\r\n  -webkit-animation-delay: 0.6s;\r\n  -moz-animation-delay: 0.6s;\r\n}\r\n@-webkit-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -webkit-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -webkit-transform: translateY(-21px);\r\n  }\r\n}\r\n@-moz-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -moz-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -moz-transform: translateY(-21px);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./survey.html":
/*!*********************!*\
  !*** ./survey.html ***!
  \*********************/
/***/ ((module) => {

// Module
var code = "<div class=\"aa_surveys\">\r\n  <div id=\"aa_nps_surveyContainer\"></div>\r\n</div>\r\n<h4 class=\"feedback-info\">\r\n  Using the toolbar on the rightside, hightlight the problem area or erase\r\n  sensitive information\r\n</h4>\r\n<div class=\"feedback-canvas\" style=\"display: none\"></div>\r\n<div class=\"feedback-glass\" style=\"pointer-events: none; display: none\"></div>\r\n<div class=\"feedback-modal\" style=\"display: none\">\r\n  <div class=\"feedback-header\">\r\n    <a class=\"feedback-close\" href=\"#\">×</a>\r\n    <h3>Send Feedback</h3>\r\n  </div>\r\n  <div class=\"feedback-body\">\r\n    <div>\r\n      <label>Please describe the issue you are experiencing:</label\r\n      ><textarea class=\"feedback-comments\"></textarea> <label>Your Name:</label\r\n      ><input class=\"feedback-name\" /><label>Your EMail:</label\r\n      ><input class=\"feedback-email\" />\r\n      <!--<input type=\"checkbox\" class=\"feedback-include-screen\" />-->\r\n      <label>Click below to include a screenshot</label>\r\n      <div class=\"feedback-screenshot\" style=\"cursor: pointer\">\r\n        <canvas></canvas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"feedback-footer\">\r\n    <button class=\"feedback-btn continue-btn\">Continue</button>\r\n    <button class=\"feedback-btn close-btn\" style=\"display: none\">Close</button>\r\n  </div>\r\n</div>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./survey.css":
/*!********************!*\
  !*** ./survey.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_survey_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./survey.css */ "./node_modules/css-loader/dist/cjs.js!./survey.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_survey_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_survey_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./cookie.service.ts":
/*!***************************!*\
  !*** ./cookie.service.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieService": () => /* binding */ CookieService
/* harmony export */ });
var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.getSMSession = function () {
        var cname = 'SMSESSION';
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    return CookieService;
}());



/***/ }),

/***/ "./jquery-drawpad.ts":
/*!***************************!*\
  !*** ./jquery-drawpad.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-utilities */ "./media-utilities.ts");
/*
    cnbilgin
    https://github.com/cnbilgin/jquery-drawpad
    v 0.1
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

(function ($) {
    var pluginSuffix = 'drawpad';
    $.drawpad = function (element, options) {
        var _this = this;
        var defaults = {
            defaultColor: '#000000',
            colors: [
                '#000000',
                '#2ecc71',
                '#3498db',
                '#e74c3c',
                '#f1c40f',
                '#9b59b6',
                '#e67e22' //orange
            ],
            eraserSize: 10
        };
        var plugin = this;
        var $element = $(element);
        plugin.settings = {};
        var coordinate = { x: 0, y: 0 };
        var drawing = false;
        var drawingType = 'pen';
        var lineStyle = {
            width: 5,
            color: 'black',
            type: 'round'
        };
        var bytes = '';
        //Rectangle Stuff
        var positionA;
        var positionB;
        var canvasOffset; // = $canvas.offset();
        var offsetX; //= canvasOffset.left;
        var offsetY; //= canvasOffset.top;
        var scrollX; //= $canvas.scrollLeft();
        var scrollY; //= $canvas.scrollTop();
        var startX;
        var startY;
        var prevStartX = 0;
        var prevStartY = 0;
        var prevWidth = 0;
        var prevHeight = 0;
        //End Rectangle Stuff
        /* private methods */
        var createCanvas = function () {
            plugin.$canvas = $('<canvas></canvas>');
            plugin.canvas = plugin.$canvas.get(0);
            plugin.context = plugin.canvas.getContext('2d');
            return plugin.$canvas;
        };
        var createOverlayCanvas = function () {
            plugin.$overlayCanvas = $('<canvas></canvas>');
            plugin.overlayCanvas = plugin.$overlayCanvas.get(0);
            plugin.overlayContext = plugin.overlayCanvas.getContext('2d');
            return plugin.$overlayCanvas;
        };
        var resizeCanvas = function () {
            plugin.canvas.width = $element.width();
            plugin.canvas.height = $element.height();
            plugin.overlayCanvas.width = $element.width();
            plugin.overlayCanvas.height = $element.height();
        };
        var getMousePos = function (canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        };
        var createToolbox = function () {
            var $toolbox = $("<div class=\"" + pluginSuffix + "-toolbox\"></div>");
            var createColorbox = function (color) {
                var activeClass = pluginSuffix + "-colorbox-active";
                var $colorbox = $("<div class=\"" + pluginSuffix + "-colorbox\" style=\"background-color:" + color + ";\"></div>");
                if (color === plugin.settings.defaultColor)
                    $colorbox.addClass(activeClass);
                $colorbox.on('click', function () {
                    $element.removeClass(pluginSuffix + "-erase-mode");
                    lineStyle.color = color;
                    // drawingType = 'pen';
                    $colorbox.addClass(activeClass).siblings().removeClass(activeClass);
                });
                return $colorbox;
            };
            var createEraser = function () {
                var activeClass = pluginSuffix + "-colorbox-active";
                var $eraser = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-eraser\"></div>");
                $eraser.on('click', function () {
                    drawingType = 'eraser';
                    $element.addClass(pluginSuffix + "-erase-mode");
                    $eraser.addClass(activeClass).siblings().removeClass(activeClass);
                });
                return $eraser;
            };
            var createDrawingTool = function () {
                var activeClass = pluginSuffix + "-colorbox-active";
                var $drawingTool = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-drawing-tool\">&#x3030;</div>");
                $drawingTool.on('click', function () {
                    drawingType = drawingType == 'pen' ? 'rectangle' : 'pen';
                    this.innerHTML = drawingType == 'pen' ? '&#x3030;' : '&#x25AD;';
                    this.title = drawingType == 'pen' ? 'Freehand' : 'Rectangles';
                    $element.addClass(pluginSuffix + "-drawing-tool");
                    $drawingTool
                        .addClass(activeClass)
                        .siblings()
                        .removeClass(activeClass);
                });
                return $drawingTool;
            };
            var createScreenCapture = function () {
                var $screenCapture = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-screen\">&#x1F3AC;</div>");
                $screenCapture.on('click', function () { return __awaiter(_this, void 0, void 0, function () {
                    var screenshotJpegBlob;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                //jQuery('.feedback-glass').hide();
                                //jQuery('.feedback-modal').hide();
                                jQuery('.feedback-canvas').hide();
                                return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_0__.takeScreenshotJpegBlob)()];
                            case 1:
                                screenshotJpegBlob = _a.sent();
                                return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_0__.blobToCanvas)(screenshotJpegBlob, null, null, plugin.canvas)];
                            case 2:
                                _a.sent();
                                jQuery('.feedback-canvas').show();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return $screenCapture;
            };
            var createDoneButton = function () {
                var $doneButton = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-done\" title=\"Click here after done editing.\">&#x1F197;</div>");
                $doneButton.on('click', function () { return __awaiter(_this, void 0, void 0, function () {
                    var blob, canvas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_0__.getJpegBlob)(plugin.canvas)];
                            case 1:
                                blob = _a.sent();
                                jQuery('.feedback-glass').show();
                                jQuery('.feedback-modal').show();
                                jQuery('.feedback-canvas').hide();
                                canvas = jQuery('.feedback-screenshot canvas')[0];
                                bytes = canvas.toDataURL();
                                return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_0__.blobToCanvas)(blob, 300, 300, canvas)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return $doneButton;
            };
            var $colors = $("<div class=\"" + pluginSuffix + "-colors\"></div>");
            plugin.settings.colors.forEach(function (color) {
                $colors.append(createColorbox(color));
            });
            $colors.append(createEraser());
            // $colors.append(createScreenCapture());
            $colors.append(createDrawingTool());
            $colors.append(createDoneButton());
            $toolbox.append($colors);
            return $toolbox;
        };
        var updateCoordinate = function (event) {
            coordinate.x = event.offsetX;
            coordinate.y = event.offsetY;
        };
        var handleStartDraw = function (event) {
            drawing = true;
            $element.addClass(pluginSuffix + "-drawing");
            updateCoordinate(event);
            positionA = getMousePos(plugin.canvas, event);
            startX = event.clientX - offsetX;
            startY = event.clientY - offsetY;
            handleDraw(event);
        };
        var handleStopDraw = function (event) {
            drawing = false;
            $element.removeClass(pluginSuffix + "-drawing");
            positionB = getMousePos(plugin.canvas, event);
            if (drawingType == 'rectangle') {
                plugin.context.strokeRect(prevStartX, prevStartY, prevWidth, prevHeight);
            }
        };
        var handleDraw = function (event) {
            if (!drawing)
                return;
            var ctx = plugin.context;
            if (drawingType != 'rectangle') {
                ctx.beginPath();
                switch (drawingType) {
                    case 'pen':
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.lineWidth = lineStyle.width;
                        ctx.strokeStyle = lineStyle.color;
                        break;
                    case 'eraser':
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.lineWidth = plugin.settings.eraserSize;
                        ctx.strokeStyle = 'black';
                        break;
                }
                ctx.lineCap = lineStyle.type;
                ctx.moveTo(coordinate.x, coordinate.y);
                updateCoordinate(event);
                ctx.lineTo(coordinate.x, coordinate.y);
                ctx.stroke();
            }
            else {
                var octx = plugin.overlayContext;
                octx.globalCompositeOperation = 'source-over';
                octx.lineWidth = lineStyle.width;
                octx.strokeStyle = lineStyle.color;
                var mouseX = event.clientX - offsetX;
                var mouseY = event.clientY - offsetY;
                var width = mouseX - startX;
                var height = mouseY - startY;
                // clear the canvas
                octx.clearRect(0, 0, plugin.canvas.width, plugin.canvas.height);
                octx.strokeRect(startX, startY, width, height);
                prevStartX = startX;
                prevStartY = startY;
                prevWidth = width;
                prevHeight = height;
            }
        };
        var initialize = function () {
            $element.addClass(pluginSuffix);
            $element.append(createCanvas());
            $element.append(createOverlayCanvas()); //TODO: Support drawing rectangles
            $element.append(createToolbox());
            resizeCanvas();
            plugin.$overlayCanvas.on('mousedown', handleStartDraw);
            plugin.$overlayCanvas.on('mouseup mouseleave mouseout', handleStopDraw);
            plugin.$overlayCanvas.on('mousemove', handleDraw);
        };
        /* public methods */
        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);
            initialize();
            return plugin;
        };
        plugin.clear = function () {
            plugin.context.clearRect(0, 0, plugin.context.canvas.width, plugin.context.canvas.height);
            plugin.overlayContext.clearRect(0, 0, plugin.overlayContext.canvas.width, plugin.overlayContext.canvas.height);
        };
        plugin.resize = function () {
            resizeCanvas();
        };
        plugin.getBytes = function () {
            return plugin.canvas.toDataURL();
        };
        plugin.setCaptureScreen = function (blob) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            plugin.clear();
                            return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_0__.blobToCanvas)(blob, null, null, plugin.canvas)];
                        case 1:
                            _a.sent();
                            canvasOffset = plugin.$canvas.offset();
                            offsetX = canvasOffset.left;
                            offsetY = canvasOffset.top;
                            scrollX = plugin.$canvas.scrollLeft();
                            scrollY = plugin.$canvas.scrollTop();
                            return [2 /*return*/, plugin];
                    }
                });
            });
        };
        plugin.init();
    };
    $.fn.drawpad = function (options) {
        if ($(this).data(pluginSuffix) === undefined) {
            var plugin = new $.drawpad(this, options);
            $(this).data(pluginSuffix, plugin);
        }
        return $(this).data(pluginSuffix);
    };
})(jQuery);


/***/ }),

/***/ "./jquery-feedback.ts":
/*!****************************!*\
  !*** ./jquery-feedback.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-utilities */ "./media-utilities.ts");
/* harmony import */ var _surveys_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surveys.service */ "./surveys.service.ts");
/*
    cnbilgin
    https://github.com/cnbilgin/jquery-drawpad
    v 0.1
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


(function ($) {
    var pluginSuffix = 'feedback';
    var surveyservice;
    $.feedback = function (element, options) {
        var _this = this;
        var plugin = this;
        var $element = $(element);
        var defaults = {
            url: 'https://aa-nps-admin-gw-apim.azure-api.net/graphql'
        };
        plugin.settings = {};
        /* private methods */
        var initialize = function () {
            surveyservice = new _surveys_service__WEBPACK_IMPORTED_MODULE_1__.SurveysService({
                allow_multiple: false,
                archer_id: plugin.settings.archer_id,
                url: plugin.settings.url,
                assetsUrl: null,
                feedbackSource: null,
                mode: '',
                outputSelector: '',
                survey_id: ''
            });
            $element.addClass(pluginSuffix);
            jQuery('.feedback-close').on('click', function () {
                jQuery('.feedback-glass').hide();
                jQuery('.feedback-modal').hide();
            });
            jQuery('.feedback-btn.close-btn').on('click', function () {
                jQuery('.feedback-glass').hide();
                jQuery('.feedback-modal').hide();
            });
            jQuery('.feedback-btn.continue-btn').on('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = {
                                comments: jQuery('.feedback-comments').eq(0).val(),
                                employee_name: jQuery('.feedback-name').eq(0).val(),
                                employee_email: jQuery('.feedback-email').eq(0).val(),
                                screen_shot: plugin.getBytes()
                            };
                            return [4 /*yield*/, surveyservice.postUserFeedback(data)];
                        case 1:
                            _a.sent();
                            jQuery('.feedback-modal').removeClass('large');
                            jQuery('.feedback-body')
                                .eq(0)
                                .html('<h3>Thank you for your feedback.we will contact you if we need more information</h3>');
                            jQuery('.feedback-btn').hide();
                            jQuery('.feedback-btn.close-btn').show();
                            return [2 /*return*/];
                    }
                });
            }); });
            jQuery('.feedback-screenshot').on('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var screenshotJpegBlob;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            jQuery('.feedback-glass').hide();
                            jQuery('.feedback-modal').hide();
                            return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_0__.takeScreenshotJpegBlob)()];
                        case 1:
                            screenshotJpegBlob = _a.sent();
                            plugin = jQuery('.feedback-canvas').show().drawpad();
                            plugin.setCaptureScreen(screenshotJpegBlob);
                            jQuery('.feedback-info').show().delay(5000).fadeOut();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /* public methods */
        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);
            initialize();
            return plugin;
        };
        plugin.show = function () {
            jQuery('.feedback-glass').show();
            jQuery('.feedback-modal').show();
            jQuery('.feedback-btn.close-btn').hide();
            jQuery('.feedback-btn.continue-btn').show();
        };
        plugin.init();
    };
    $.fn.feedback = function (options) {
        if ($(this).data(pluginSuffix) === undefined) {
            var plugin = new $.feedback(this, options);
            $(this).data(pluginSuffix, plugin);
        }
        return $(this).data(pluginSuffix);
    };
})(jQuery);


/***/ }),

/***/ "./jquery-surveys-plugin.ts":
/*!**********************************!*\
  !*** ./jquery-surveys-plugin.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-utilities */ "./media-utilities.ts");
/* harmony import */ var _surveys_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./surveys.service */ "./surveys.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.surveysPlugin) = Object.assign(function (options) {
    var _this = this;
    // Merge the global options with the options given as argument.
    options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({}, (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.surveysPlugin.options), options);
    // Check if required options are missing.
    if (!options.archer_id) {
        console.error('Plugin options are missing required parameter "archer_id": ', JSON.stringify(options));
        return this;
    }
    // Do what the plugin should do. Here we create an instance of the separate service which is then used when the
    // user clicks the element that the plugin is attached to. It produces a greeting message and appends it to the output.
    var surveyservice = new _surveys_service__WEBPACK_IMPORTED_MODULE_2__.SurveysService(options);
    surveyservice.initializeSurvey();
    var plugin;
    jQuery("#" + options.feedbackSource).on('click', function () {
        jQuery('.feedback-glass').show();
        jQuery('.feedback-modal').show();
        jQuery('.feedback-btn.close-btn').hide();
        jQuery('.feedback-btn.continue-btn').show();
        jQuery('.feedback-close').on('click', function () {
            jQuery('.feedback-glass').hide();
            jQuery('.feedback-modal').hide();
        });
        jQuery('.feedback-btn.close-btn').on('click', function () {
            jQuery('.feedback-glass').hide();
            jQuery('.feedback-modal').hide();
        });
        jQuery('.feedback-btn.continue-btn').on('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = {
                            comments: jQuery('.feedback-comments').eq(0).val(),
                            employee_name: jQuery('.feedback-name').eq(0).val(),
                            employee_email: jQuery('.feedback-email').eq(0).val(),
                            screen_shot: plugin.getBytes()
                        };
                        return [4 /*yield*/, surveyservice.postUserFeedback(data)];
                    case 1:
                        _a.sent();
                        jQuery('.feedback-modal').removeClass('large');
                        jQuery('.feedback-body')
                            .eq(0)
                            .html('<h3>Thank you for your feedback.we will contact you if we need more information</h3>');
                        jQuery('.feedback-btn').hide();
                        jQuery('.feedback-btn.close-btn').show();
                        return [2 /*return*/];
                }
            });
        }); });
        //canvas.toDataURL();
        jQuery('.feedback-include-screen').on('change', function () {
            if (jQuery('.feedback-include-screen').prop('checked')) {
                //1.Hide the modal
                //jQuery('.feedback-glass').hide();
                //jQuery('.feedback-modal').hide();
                //2.Grab the screenshot
                //3.Show the drawpad
                jQuery('.feedback-screenshot').drawpad();
                //4.Enlarge the modal window
                //jQuery('.feedback-modal').addClass('large');
            }
        });
        jQuery('.feedback-screenshot').on('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var screenshotJpegBlob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jQuery('.feedback-glass').hide();
                        jQuery('.feedback-modal').hide();
                        return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_1__.takeScreenshotJpegBlob)()];
                    case 1:
                        screenshotJpegBlob = _a.sent();
                        plugin = jQuery('.feedback-canvas').show().drawpad();
                        plugin.setCaptureScreen(screenshotJpegBlob);
                        jQuery('.feedback-info').show().delay(5000).fadeOut();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // Return the jQuery object for chaining.
    return this;
}, 
// Define the global default options.
{
    options: {
        outputSelector: null,
        allow_multiple: false,
        archer_id: '2340720',
        assetsUrl: 'https://aanpsadminui.z13.web.core.windows.net',
        mode: 'widget',
        survey_id: null,
        url: 'https://aa-nps-admin-gw-apim.azure-api.net/graphql',
        feedbackSource: null
    }
});


/***/ }),

/***/ "./media-utilities.ts":
/*!****************************!*\
  !*** ./media-utilities.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDisplayMedia": () => /* binding */ getDisplayMedia,
/* harmony export */   "getUserMedia": () => /* binding */ getUserMedia,
/* harmony export */   "takeScreenshotStream": () => /* binding */ takeScreenshotStream,
/* harmony export */   "takeScreenshotCanvas": () => /* binding */ takeScreenshotCanvas,
/* harmony export */   "getJpegBlob": () => /* binding */ getJpegBlob,
/* harmony export */   "getJpegBytes": () => /* binding */ getJpegBytes,
/* harmony export */   "takeScreenshotJpegBlob": () => /* binding */ takeScreenshotJpegBlob,
/* harmony export */   "takeScreenshotJpegBytes": () => /* binding */ takeScreenshotJpegBytes,
/* harmony export */   "blobToCanvas": () => /* binding */ blobToCanvas
/* harmony export */ });
// docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
// see: https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#20893521368186473
// see: https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Pluginfree-Screen-Sharing/conference.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getDisplayMedia = function (options) {
    var nav = navigator;
    if (nav.mediaDevices && nav.mediaDevices.getDisplayMedia) {
        return nav.mediaDevices.getDisplayMedia(options);
    }
    if (nav.getDisplayMedia) {
        return nav.getDisplayMedia(options);
    }
    if (nav.webkitGetDisplayMedia) {
        return nav.webkitGetDisplayMedia(options);
    }
    if (nav.mozGetDisplayMedia) {
        return nav.mozGetDisplayMedia(options);
    }
    throw new Error('getDisplayMedia is not defined');
};
var getUserMedia = function (options) {
    var nav = navigator;
    if (nav.mediaDevices && nav.mediaDevices.getUserMedia) {
        return navigator.mediaDevices.getUserMedia(options);
    }
    if (nav.getUserMedia) {
        return navigator.getUserMedia(options, undefined, undefined);
    }
    if (nav.webkitGetUserMedia) {
        return nav.webkitGetUserMedia(options);
    }
    if (nav.mozGetUserMedia) {
        return nav.mozGetUserMedia(options);
    }
    throw new Error('getUserMedia is not defined');
};
var takeScreenshotStream = function () { return __awaiter(void 0, void 0, void 0, function () {
    var width, height, errors, stream, ex_1, ex_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                width = screen.width * (window.devicePixelRatio || 1);
                height = screen.height * (window.devicePixelRatio || 1);
                errors = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getDisplayMedia({
                        audio: false,
                        // see: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/video
                        video: {
                            width: width,
                            height: height,
                            frameRate: 1
                        }
                    })];
            case 2:
                stream = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                ex_1 = _a.sent();
                errors.push(ex_1);
                return [3 /*break*/, 4];
            case 4:
                if (!(navigator.userAgent.indexOf('Electron') >= 0)) return [3 /*break*/, 8];
                _a.label = 5;
            case 5:
                _a.trys.push([5, 7, , 8]);
                return [4 /*yield*/, getUserMedia({
                        audio: false,
                        video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                // chromeMediaSourceId: source.id,
                                minWidth: width,
                                maxWidth: width,
                                minHeight: height,
                                maxHeight: height
                            }
                        }
                    })];
            case 6:
                stream = _a.sent();
                return [3 /*break*/, 8];
            case 7:
                ex_2 = _a.sent();
                errors.push(ex_2);
                return [3 /*break*/, 8];
            case 8:
                if (errors.length) {
                    console.debug.apply(console, errors);
                    if (!stream) {
                        throw errors[errors.length - 1];
                    }
                }
                return [2 /*return*/, stream];
        }
    });
}); };
var takeScreenshotCanvas = function () { return __awaiter(void 0, void 0, void 0, function () {
    var stream, video, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeScreenshotStream()];
            case 1:
                stream = _a.sent();
                video = document.createElement('video');
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        video.onloadedmetadata = function () {
                            video.play();
                            video.pause();
                            // from: https://github.com/kasprownik/electron-screencapture/blob/master/index.js
                            var canvas = document.createElement('canvas');
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                            var context = canvas.getContext('2d');
                            // see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
                            context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                            resolve(canvas);
                        };
                        video.srcObject = stream;
                    })];
            case 2:
                result = _a.sent();
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });
                if (result == null) {
                    throw new Error('Cannot take canvas screenshot');
                }
                return [2 /*return*/, result];
        }
    });
}); };
// from: https://stackoverflow.com/a/46182044/5221762
var getJpegBlob = function (canvas) {
    return new Promise(function (resolve, reject) {
        // docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
        canvas.toBlob(function (blob) { return resolve(blob); }, 'image/jpeg', 0.95);
    });
};
var getJpegBytes = function (canvas) { return __awaiter(void 0, void 0, void 0, function () {
    var blob;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getJpegBlob(canvas)];
            case 1:
                blob = _a.sent();
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var fileReader = new FileReader();
                        fileReader.addEventListener('loadend', function () {
                            if (this.error) {
                                reject(this.error);
                                return;
                            }
                            resolve(this.result);
                        });
                        fileReader.readAsArrayBuffer(blob);
                    })];
        }
    });
}); };
var takeScreenshotJpegBlob = function () { return __awaiter(void 0, void 0, void 0, function () {
    var canvas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeScreenshotCanvas()];
            case 1:
                canvas = _a.sent();
                return [2 /*return*/, getJpegBlob(canvas)];
        }
    });
}); };
var takeScreenshotJpegBytes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var canvas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, takeScreenshotCanvas()];
            case 1:
                canvas = _a.sent();
                return [2 /*return*/, getJpegBytes(canvas)];
        }
    });
}); };
var blobToCanvas = function (blob, maxWidth, maxHeight, canvas) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            var scale = Math.min(1, maxWidth ? maxWidth / img.width : 1, maxHeight ? maxHeight / img.height : 1);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            canvas.setAttribute('style', "width:" + canvas.width + "px;height:" + canvas.height + "px");
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
            //document.body.appendChild(img)
            resolve(canvas);
        };
        img.onerror = function () {
            reject(new Error('Error load blob to Image'));
        };
        img.src = URL.createObjectURL(blob);
    });
};


/***/ }),

/***/ "./surveys.service.ts":
/*!****************************!*\
  !*** ./surveys.service.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveysService": () => /* binding */ SurveysService
/* harmony export */ });
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie.service */ "./cookie.service.ts");
/* harmony import */ var _survey_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey.html */ "./survey.html");
/* harmony import */ var _survey_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_survey_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _survey_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey.css */ "./survey.css");
/* harmony import */ var survey_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-jquery */ "survey-jquery");
/* harmony import */ var survey_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_jquery__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SurveysService = /** @class */ (function () {
    function SurveysService(options) {
        this.FEEDBACK_SURVEY_ID = '60015dbce08d4f006815c1d3';
        this.options = options;
    }
    SurveysService.prototype.initializeSurvey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var survey, _a, results, surveyJsOptions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getActiveSurvey()];
                    case 1:
                        survey = _b.sent();
                        if (!survey) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.renderSurvey(survey)];
                    case 2:
                        _a = _b.sent(), results = _a.results, surveyJsOptions = _a.surveyJsOptions;
                        return [4 /*yield*/, this.postSurveyResults(results, surveyJsOptions)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SurveysService.prototype.getActiveSurvey = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: _this.options.url,
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify({
                    query: _this.options.survey_id
                        ? "query Query($surveyId: String) \n                            { activeSurvey(surveyId: $surveyId) \n                                { \n                                  surveyId\n                                  activationWindowId\n                                  definition \n                                } \n                            }\n                        "
                        : "query Query($archerId: String) \n                        { activeSurvey(archerId: $archerId) \n                            { \n                              surveyId\n                              activationWindowId\n                              definition \n                            } \n                        }\n                    ",
                    variables: _this.options.survey_id
                        ? {
                            surveyId: _this.options.survey_id
                        }
                        : {
                            archerId: _this.options.archer_id
                        }
                }),
                success: function (json) {
                    var surveyJSON = json.data.activeSurvey || {};
                    resolve(surveyJSON);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    SurveysService.prototype.postUserFeedback = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var cookieService = new _cookie_service__WEBPACK_IMPORTED_MODULE_0__.CookieService();
            var smsession = cookieService.getSMSession();
            $.ajax({
                url: _this.options.url,
                contentType: 'application/json',
                headers: { SMSESSION: smsession },
                type: 'POST',
                data: JSON.stringify({
                    query: "mutation CreateSurveyResultMutation($surveyId: String!,$archerId: String!, $input: SurveyResultInput!) \n                  {  createSurveyResult(\n                      surveyId: $surveyId, \n                      archerId: $archerId,\n                      input: $input\n                      )\n                  }\n              ",
                    variables: {
                        surveyId: _this.FEEDBACK_SURVEY_ID,
                        archerId: _this.options.archer_id,
                        input: {
                            result: data
                        }
                    }
                }),
                error: function () {
                    reject(false);
                },
                success: function (response) {
                    resolve(true);
                }
            });
        });
    };
    SurveysService.prototype.postSurveyResults = function (survey, surveyJsOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var cookieService = new _cookie_service__WEBPACK_IMPORTED_MODULE_0__.CookieService();
            var smsession = cookieService.getSMSession();
            $.ajax({
                url: _this.options.url,
                contentType: 'application/json',
                headers: { SMSESSION: smsession },
                type: 'POST',
                data: JSON.stringify({
                    query: "mutation CreateSurveyResultMutation($surveyId: String!,$archerId: String!, $input: SurveyResultInput!) \n                    {  createSurveyResult(\n                        surveyId: $surveyId, \n                        archerId: $archerId,\n                        input: $input\n                        )\n                    }\n                ",
                    variables: {
                        surveyId: _this.options.survey_id,
                        archerId: _this.options.archer_id,
                        input: {
                            result: survey.data
                        }
                    }
                }),
                error: function () {
                    survey.deleteCookie();
                    surveyJsOptions.showDataSavingError();
                },
                success: function (response) {
                    var _a;
                    if (!((_a = response.data) === null || _a === void 0 ? void 0 : _a.createSurveyResult)) {
                        survey.deleteCookie();
                        surveyJsOptions.showDataSavingError();
                    }
                    resolve(response.data.createSurveyResult);
                }
            });
        });
    };
    SurveysService.prototype.renderSurvey = function (surveyJSON) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var temporary = document.createElement('div');
            temporary.innerHTML = (_survey_html__WEBPACK_IMPORTED_MODULE_1___default());
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(temporary);
            var surveyDefinition = surveyJSON.definition || {};
            if (!surveyJSON.surveyId) {
                console.log('No Active survey at the moment');
                if (_this.options.mode === 'inline') {
                    window.close();
                }
                return;
            }
            _this.options.survey_id = surveyJSON.surveyId;
            //TODO:Find a better way
            if (_this.options.allow_multiple !== true) {
                surveyDefinition.cookieName = surveyJSON.activationWindowId;
            }
            survey_jquery__WEBPACK_IMPORTED_MODULE_3__.StylesManager.applyTheme('bootstrap');
            survey_jquery__WEBPACK_IMPORTED_MODULE_3__.defaultBootstrapCss.navigationButton = 'btn btn-success';
            survey_jquery__WEBPACK_IMPORTED_MODULE_3__.surveyStrings.emptySurvey =
                'There is no survey active at the moment.';
            //config.title || surveyDefinition.title || 'Feedback?';
            surveyDefinition.title = 'Feedback?';
            _this.aa_survey = new survey_jquery__WEBPACK_IMPORTED_MODULE_3__.Model(surveyDefinition);
            if (_this.aa_survey.state == 'completed' &&
                _this.options.allow_multiple !== true) {
                return;
            }
            // survey.css = myCss;
            // append elements to body
            if (_this.options.mode === 'inline') {
                $('#aa_nps_surveyContainer').Survey({
                    model: _this.aa_survey,
                    onComplete: function (results, surveyJsOptions) {
                        resolve({ results: results, surveyJsOptions: surveyJsOptions });
                    }
                });
            }
            else {
                $('#aa_nps_surveyContainer').SurveyWindow({
                    model: _this.aa_survey,
                    isExpanded: true,
                    closeOnCompleteTimeout: 2,
                    onComplete: function (results, surveyJsOptions) {
                        resolve({ results: results, surveyJsOptions: surveyJsOptions });
                    }
                });
            }
        });
    };
    return SurveysService;
}());



/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ }),

/***/ "survey-jquery":
/*!*************************************!*\
  !*** external "window[\"Survey\"]" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["Survey"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./jquery-surveys-plugin.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./jquery-drawpad.ts");
/******/ 	__webpack_require__("./jquery-feedback.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL3N1cnZleS5jc3MiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9zdXJ2ZXkuaHRtbCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL3N1cnZleS5jc3M/OWY5OCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL2Nvb2tpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vanF1ZXJ5LWRyYXdwYWQudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9qcXVlcnktZmVlZGJhY2sudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9qcXVlcnktc3VydmV5cy1wbHVnaW4udHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9tZWRpYS11dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9zdXJ2ZXlzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC9leHRlcm5hbCBcIndpbmRvd1tcXFwiU3VydmV5XFxcIl1cIiIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNxSDtBQUM3QjtBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELGtCQUFrQixLQUFLLDJHQUEyRyw2QkFBNkIsS0FBSyxjQUFjLDZCQUE2Qix5QkFBeUIsS0FBSyw2QkFBNkIsK0JBQStCLGlEQUFpRCxLQUFLLDJCQUEyQixrQkFBa0IsbUJBQW1CLEtBQUssK0JBQStCLGtCQUFrQixrQkFBa0IsZ0JBQWdCLHlCQUF5QixrQkFBa0Isb0JBQW9CLGdDQUFnQyw2QkFBNkIsbUJBQW1CLDJCQUEyQixLQUFLLHFDQUFxQyxpQkFBaUIsS0FBSyxrQ0FBa0MsMEJBQTBCLDBCQUEwQixLQUFLLGdDQUFnQyxrQkFBa0IsbUJBQW1CLDBCQUEwQixvQ0FBb0Msc0JBQXNCLEtBQUssa0RBQWtELDJCQUEyQixLQUFLLCtDQUErQyx1QkFBdUIsS0FBSywwQ0FBMEMsOEJBQThCLEtBQUssdUNBQXVDLDhCQUE4QixLQUFLLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLHlCQUF5QixLQUFLLHdEQUF3RCx5QkFBeUIsS0FBSyw0VEFBNFQsc0JBQXNCLEtBQUssb0JBQW9CLHlCQUF5QixvQkFBb0Isb0JBQW9CLGdCQUFnQixnQkFBZ0Isb0JBQW9CLGtDQUFrQyw0QkFBNEIseUJBQXlCLEtBQUssd0NBQXdDLHFCQUFxQiw0QkFB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LFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsTUFBTSxTQUFTLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFNBQVMsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLE9BQU8sTUFBTSxPQUFPLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFP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Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFhX2l0ZW0ge1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbi8qIFxcclxcblxcdGNuYmlsZ2luIFxcclxcblxcdGh0dHBzOi8vZ2l0aHViLmNvbS9jbmJpbGdpbi9qcXVlcnktZHJhd3BhZFxcclxcblxcdHYgMC4xXFxyXFxuKi9cXHJcXG5cXHJcXG4uZHJhd3BhZCAqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5kcmF3cGFkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5kcmF3cGFkLmRyYXdwYWQtZGFzaGVkIHtcXHJcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgPiBjYW52YXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLXRvb2xib3gge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLXRvb2xib3g6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3JzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveCB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQuZHJhd3BhZC1kcmF3aW5nIC5kcmF3cGFkLWNvbG9ycyB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveDpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1lcmFzZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveC5kcmF3cGFkLWNvbG9yYm94LWFjdGl2ZSB7XFxyXFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qRmVlZGJhY2sgU3lsZXMqL1xcclxcbi8qXFxyXFxuICogQm9vdHN0cmFwIHYyLjAuNFxcclxcbiAqXFxyXFxuICogQ29weXJpZ2h0IDIwMTIgVHdpdHRlciwgSW5jXFxyXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjBcXHJcXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXHJcXG4gKlxcclxcbiAqIERlc2lnbmVkIGFuZCBidWlsdCB3aXRoIGFsbCB0aGUgbG92ZSBpbiB0aGUgd29ybGQgQHR3aXR0ZXIgYnkgQG1kbyBhbmQgQGZhdC5cXHJcXG4qL1xcclxcblxcclxcbi5mZWVkYmFjay1yZXZpZXcgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2staW5mbyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIGxlZnQ6IDMwJTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IC5mZWVkYmFjay1lcnJvciB7XFxyXFxuICBjb2xvcjogI2I5NGE0ODtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2I5NGE0ODtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IC5mZWVkYmFjay1lcnJvcjpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6ICM5NTNiMzk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSBwIGEge1xcclxcbiAgY29sb3I6ICMwMDg4Y2M7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1ib2R5IHAgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwNTU4MDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stbW9kYWwgaDMge1xcclxcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLW1vZGFsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgei1pbmRleDogMjA1MDtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogNTYwcHg7XFxyXFxuICBtYXJnaW46IC0yNTBweCAwIDAgLTI4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAqYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG4gIC8qIElFNi03ICovXFxyXFxuXFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuXFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbW9kYWwubGFyZ2Uge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHotaW5kZXg6IDIwNTA7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5mZWVkYmFjay1tb2RhbC5sYXJnZSAuZmVlZGJhY2stYm9keSB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1tb2RhbCAuZmVlZGJhY2stYm9keSAuZmVlZGJhY2stc2NyZWVuc2hvdCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGJsdWU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1zY3JlZW5zaG90IGNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1tb2RhbCAuZmVlZGJhY2stY2xvc2Uge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICBsZWZ0OiAxMCU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLW1vZGFsIC5mZWVkYmFjay1jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogNHB4IDEwcHggNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBmcm9tKCNmZmZmZmYpLFxcclxcbiAgICB0bygjZTZlNmU2KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZTZlNmU2JywgR3JhZGllbnRUeXBlPTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2ICNlNmU2ZTYgI2JmYmZiZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmJiO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbiAgKm1hcmdpbi1sZWZ0OiAwLjNlbTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjpob3ZlcixcXHJcXG4uZmVlZGJhY2stYnRuOmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLmRpc2FibGVkLFxcclxcbi5mZWVkYmFjay1idG5bZGlzYWJsZWRdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46YWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2MgXFxcXDk7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46Zmlyc3QtY2hpbGQge1xcclxcbiAgKm1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1cHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XFxyXFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi5hY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOSBcXFxcOTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4uZGlzYWJsZWQsXFxyXFxuLmZlZWRiYWNrLWJ0bltkaXNhYmxlZF0ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICBvcGFjaXR5OiAwLjY1O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4tc21hbGwge1xcclxcbiAgcGFkZGluZzogNXB4IDlweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLXNtYWxsIFtjbGFzc149J2ljb24tJ10ge1xcclxcbiAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZTpob3ZlciB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBmcm9tKCM0NTQ1NDUpLFxcclxcbiAgICB0bygjMjYyNjI2KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzQ1NDU0NScsIGVuZENvbG9yc3RyPScjMjYyNjI2JywgR3JhZGllbnRUeXBlPTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjYyNjI2ICMyNjI2MjYgIzAwMDAwMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlOmhvdmVyLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZTphY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlLmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UuZGlzYWJsZWQsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlW2Rpc2FibGVkXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2U6YWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYyBcXFxcOTtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bixcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG4ge1xcclxcbiAgKnBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG46Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bi5sYXJnZSxcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG4ubGFyZ2Uge1xcclxcbiAgKnBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDdweDtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bi5zbWFsbCxcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG4uc21hbGwge1xcclxcbiAgKnBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0biAuY2FyZXQge1xcclxcbiAgbWFyZ2luLXRvcDogN3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46aG92ZXIgLmNhcmV0LFxcclxcbi5vcGVuLmJ0bi1ncm91cCAuY2FyZXQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UgLmNhcmV0IHtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTc1KTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi1zbWFsbCAuY2FyZXQge1xcclxcbiAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm90dG9tLXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiA5cHggMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2staGVhZGVyIC5mZWVkYmFjay1jbG9zZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDM4MHB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYm9keSAubW9kYWwtZm9ybSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSB0ZXh0YXJlYSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNTIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzU1NTU1NTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoODIsIDE2OCwgMjM2LCAwLjgpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXFxyXFxuICAgIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCBcXFxcOTtcXHJcXG4gIC8qIElFNi05ICovXFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1mb290ZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDE0cHggMTVweCAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICAqem9vbTogMTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWZvb3RlcjpiZWZvcmUsXFxyXFxuLmZlZWRiYWNrLWZvb3RlcjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stZm9vdGVyOmFmdGVyIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stZm9vdGVyIC5mZWVkYmFjay1idG4ge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1nbGFzcyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzc3NztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIC1tcy1maWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MCknO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWNhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMzk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stY2FudmFzIGNhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNmZWVkYmFjay1ibGFja291dC1lbGVtZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1oaWdobGlnaHQtZWxlbWVudCxcXHJcXG4uZmVlZGJhY2staGlnaGxpZ2h0ZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggeWVsbG93O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWhpZ2hsaWdodC1lbGVtZW50IHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlZGJhY2staGlnaGxpZ2h0LWNsb3NlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcclxcblxcclxcbiAgei1pbmRleDogMjAwMTtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNjE1ZTVlO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICM2MTVlNWU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcXHJcXG4gICAgbGluZWFyLFxcclxcbiAgICBsZWZ0IHRvcCxcXHJcXG4gICAgbGVmdCBib3R0b20sXFxyXFxuICAgIGZyb20oI2M1YzVjNSksXFxyXFxuICAgIHRvKCM5OTk5OTkpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYmxhY2tlZG91dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWRiYWNrLWhpZ2hsaWdodC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgei1pbmRleDogMjAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWFuaW1hdGUtdG9zaWRlIHtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYW5pbWF0ZS1yZXZpZXcge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG5cXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcblxcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWNhbnZhcy1jb21wbGV0ZSB7XFxyXFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSBjYW52YXMge1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjM2MzYzO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4ICM2MTVlNWU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4ICM2MTVlNWU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1icm93c2VyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWxvYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mZWVkYmFjay1sb2FkZXIgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmZWVkYmFjay1sb2FkZXIgMC45cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogZmVlZGJhY2stbG9hZGVyIDAuOXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbG9hZGVyIHNwYW46bnRoLW9mLXR5cGUoMikge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XFxyXFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4zcztcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWxvYWRlciBzcGFuOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmZWVkYmFjay1sb2FkZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALW1vei1rZXlmcmFtZXMgZmVlZGJhY2stbG9hZGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMXB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazov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O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMERBQTBEO0VBQzFELHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztFQUN0QztBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUNBQWlDO0VBQ25DO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFhX2l0ZW0ge1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbi8qIFxcclxcblxcdGNuYmlsZ2luIFxcclxcblxcdGh0dHBzOi8vZ2l0aHViLmNvbS9jbmJpbGdpbi9qcXVlcnktZHJhd3BhZFxcclxcblxcdHYgMC4xXFxyXFxuKi9cXHJcXG5cXHJcXG4uZHJhd3BhZCAqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5kcmF3cGFkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5kcmF3cGFkLmRyYXdwYWQtZGFzaGVkIHtcXHJcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgPiBjYW52YXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLXRvb2xib3gge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLXRvb2xib3g6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3JzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveCB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQuZHJhd3BhZC1kcmF3aW5nIC5kcmF3cGFkLWNvbG9ycyB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveDpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1lcmFzZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveC5kcmF3cGFkLWNvbG9yYm94LWFjdGl2ZSB7XFxyXFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qRmVlZGJhY2sgU3lsZXMqL1xcclxcbi8qXFxyXFxuICogQm9vdHN0cmFwIHYyLjAuNFxcclxcbiAqXFxyXFxuICogQ29weXJpZ2h0IDIwMTIgVHdpdHRlciwgSW5jXFxyXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjBcXHJcXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXHJcXG4gKlxcclxcbiAqIERlc2lnbmVkIGFuZCBidWlsdCB3aXRoIGFsbCB0aGUgbG92ZSBpbiB0aGUgd29ybGQgQHR3aXR0ZXIgYnkgQG1kbyBhbmQgQGZhdC5cXHJcXG4qL1xcclxcblxcclxcbi5mZWVkYmFjay1yZXZpZXcgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2staW5mbyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIGxlZnQ6IDMwJTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IC5mZWVkYmFjay1lcnJvciB7XFxyXFxuICBjb2xvcjogI2I5NGE0ODtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2I5NGE0ODtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IC5mZWVkYmFjay1lcnJvcjpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6ICM5NTNiMzk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSBwIGEge1xcclxcbiAgY29sb3I6ICMwMDg4Y2M7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1ib2R5IHAgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwNTU4MDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stbW9kYWwgaDMge1xcclxcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLW1vZGFsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgei1pbmRleDogMjA1MDtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogNTYwcHg7XFxyXFxuICBtYXJnaW46IC0yNTBweCAwIDAgLTI4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAqYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG4gIC8qIElFNi03ICovXFxyXFxuXFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuXFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbW9kYWwubGFyZ2Uge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHotaW5kZXg6IDIwNTA7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5mZWVkYmFjay1tb2RhbC5sYXJnZSAuZmVlZGJhY2stYm9keSB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1tb2RhbCAuZmVlZGJhY2stYm9keSAuZmVlZGJhY2stc2NyZWVuc2hvdCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGJsdWU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1zY3JlZW5zaG90IGNhbnZhcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1tb2RhbCAuZmVlZGJhY2stY2xvc2Uge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICBsZWZ0OiAxMCU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLW1vZGFsIC5mZWVkYmFjay1jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogNHB4IDEwcHggNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBmcm9tKCNmZmZmZmYpLFxcclxcbiAgICB0bygjZTZlNmU2KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZTZlNmU2JywgR3JhZGllbnRUeXBlPTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2ICNlNmU2ZTYgI2JmYmZiZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmJiO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbiAgKm1hcmdpbi1sZWZ0OiAwLjNlbTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjpob3ZlcixcXHJcXG4uZmVlZGJhY2stYnRuOmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLmRpc2FibGVkLFxcclxcbi5mZWVkYmFjay1idG5bZGlzYWJsZWRdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46YWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2MgXFxcXDk7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46Zmlyc3QtY2hpbGQge1xcclxcbiAgKm1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1cHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XFxyXFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi5hY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOSBcXFxcOTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4uZGlzYWJsZWQsXFxyXFxuLmZlZWRiYWNrLWJ0bltkaXNhYmxlZF0ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICBvcGFjaXR5OiAwLjY1O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4tc21hbGwge1xcclxcbiAgcGFkZGluZzogNXB4IDlweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLXNtYWxsIFtjbGFzc149J2ljb24tJ10ge1xcclxcbiAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZTpob3ZlciB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBmcm9tKCM0NTQ1NDUpLFxcclxcbiAgICB0bygjMjYyNjI2KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzQ1NDU0NScsIGVuZENvbG9yc3RyPScjMjYyNjI2JywgR3JhZGllbnRUeXBlPTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjYyNjI2ICMyNjI2MjYgIzAwMDAwMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlOmhvdmVyLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZTphY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlLmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UuZGlzYWJsZWQsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlW2Rpc2FibGVkXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2U6YWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYyBcXFxcOTtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bixcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG4ge1xcclxcbiAgKnBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG46Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bi5sYXJnZSxcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG4ubGFyZ2Uge1xcclxcbiAgKnBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDdweDtcXHJcXG59XFxyXFxuYnV0dG9uLmZlZWRiYWNrLWJ0bi5zbWFsbCxcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mZWVkYmFjay1idG4uc21hbGwge1xcclxcbiAgKnBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0biAuY2FyZXQge1xcclxcbiAgbWFyZ2luLXRvcDogN3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46aG92ZXIgLmNhcmV0LFxcclxcbi5vcGVuLmJ0bi1ncm91cCAuY2FyZXQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UgLmNhcmV0IHtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTc1KTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi1zbWFsbCAuY2FyZXQge1xcclxcbiAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm90dG9tLXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiA5cHggMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2staGVhZGVyIC5mZWVkYmFjay1jbG9zZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDM4MHB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYm9keSAubW9kYWwtZm9ybSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSB0ZXh0YXJlYSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNTIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzU1NTU1NTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoODIsIDE2OCwgMjM2LCAwLjgpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXFxyXFxuICAgIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCBcXFxcOTtcXHJcXG4gIC8qIElFNi05ICovXFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1mb290ZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDE0cHggMTVweCAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICAqem9vbTogMTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWZvb3RlcjpiZWZvcmUsXFxyXFxuLmZlZWRiYWNrLWZvb3RlcjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stZm9vdGVyOmFmdGVyIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stZm9vdGVyIC5mZWVkYmFjay1idG4ge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1nbGFzcyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzc3NztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIC1tcy1maWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MCknO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWNhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMzk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stY2FudmFzIGNhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbiNmZWVkYmFjay1ibGFja291dC1lbGVtZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1oaWdobGlnaHQtZWxlbWVudCxcXHJcXG4uZmVlZGJhY2staGlnaGxpZ2h0ZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggeWVsbG93O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWhpZ2hsaWdodC1lbGVtZW50IHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlZGJhY2staGlnaGxpZ2h0LWNsb3NlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcclxcblxcclxcbiAgei1pbmRleDogMjAwMTtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNjE1ZTVlO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICM2MTVlNWU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcXHJcXG4gICAgbGluZWFyLFxcclxcbiAgICBsZWZ0IHRvcCxcXHJcXG4gICAgbGVmdCBib3R0b20sXFxyXFxuICAgIGZyb20oI2M1YzVjNSksXFxyXFxuICAgIHRvKCM5OTk5OTkpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYmxhY2tlZG91dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWRiYWNrLWhpZ2hsaWdodC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgei1pbmRleDogMjAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWFuaW1hdGUtdG9zaWRlIHtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYW5pbWF0ZS1yZXZpZXcge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG5cXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcblxcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWNhbnZhcy1jb21wbGV0ZSB7XFxyXFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSBjYW52YXMge1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjM2MzYzO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4ICM2MTVlNWU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4ICM2MTVlNWU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1icm93c2VyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWxvYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mZWVkYmFjay1sb2FkZXIgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmZWVkYmFjay1sb2FkZXIgMC45cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogZmVlZGJhY2stbG9hZGVyIDAuOXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbG9hZGVyIHNwYW46bnRoLW9mLXR5cGUoMikge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XFxyXFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4zcztcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWxvYWRlciBzcGFuOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmZWVkYmFjay1sb2FkZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5ALW1vei1rZXlmcmFtZXMgZmVlZGJhY2stbG9hZGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMXB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJhYV9zdXJ2ZXlzXFxcIj5cXHJcXG4gIDxkaXYgaWQ9XFxcImFhX25wc19zdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxoNCBjbGFzcz1cXFwiZmVlZGJhY2staW5mb1xcXCI+XFxyXFxuICBVc2luZyB0aGUgdG9vbGJhciBvbiB0aGUgcmlnaHRzaWRlLCBoaWdodGxpZ2h0IHRoZSBwcm9ibGVtIGFyZWEgb3IgZXJhc2VcXHJcXG4gIHNlbnNpdGl2ZSBpbmZvcm1hdGlvblxcclxcbjwvaDQ+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZmVlZGJhY2stY2FudmFzXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZmVlZGJhY2stZ2xhc3NcXFwiIHN0eWxlPVxcXCJwb2ludGVyLWV2ZW50czogbm9uZTsgZGlzcGxheTogbm9uZVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZmVlZGJhY2stbW9kYWxcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImZlZWRiYWNrLWhlYWRlclxcXCI+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJmZWVkYmFjay1jbG9zZVxcXCIgaHJlZj1cXFwiI1xcXCI+w5c8L2E+XFxyXFxuICAgIDxoMz5TZW5kIEZlZWRiYWNrPC9oMz5cXHJcXG4gIDwvZGl2PlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZmVlZGJhY2stYm9keVxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGxhYmVsPlBsZWFzZSBkZXNjcmliZSB0aGUgaXNzdWUgeW91IGFyZSBleHBlcmllbmNpbmc6PC9sYWJlbFxcclxcbiAgICAgID48dGV4dGFyZWEgY2xhc3M9XFxcImZlZWRiYWNrLWNvbW1lbnRzXFxcIj48L3RleHRhcmVhPiA8bGFiZWw+WW91ciBOYW1lOjwvbGFiZWxcXHJcXG4gICAgICA+PGlucHV0IGNsYXNzPVxcXCJmZWVkYmFjay1uYW1lXFxcIiAvPjxsYWJlbD5Zb3VyIEVNYWlsOjwvbGFiZWxcXHJcXG4gICAgICA+PGlucHV0IGNsYXNzPVxcXCJmZWVkYmFjay1lbWFpbFxcXCIgLz5cXHJcXG4gICAgICA8IS0tPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiZmVlZGJhY2staW5jbHVkZS1zY3JlZW5cXFwiIC8+LS0+XFxyXFxuICAgICAgPGxhYmVsPkNsaWNrIGJlbG93IHRvIGluY2x1ZGUgYSBzY3JlZW5zaG90PC9sYWJlbD5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmZWVkYmFjay1zY3JlZW5zaG90XFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyXFxcIj5cXHJcXG4gICAgICAgIDxjYW52YXM+PC9jYW52YXM+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmZWVkYmFjay1mb290ZXJcXFwiPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJmZWVkYmFjay1idG4gY29udGludWUtYnRuXFxcIj5Db250aW51ZTwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJmZWVkYmFjay1idG4gY2xvc2UtYnRuXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZVxcXCI+Q2xvc2U8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N1cnZleS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIHtcclxuICBnZXRTTVNlc3Npb24oKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNuYW1lID0gJ1NNU0VTU0lPTic7XHJcbiAgICB2YXIgbmFtZSA9IGNuYW1lICsgJz0nO1xyXG4gICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgIHZhciBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iLCIvKiBcclxuXHRjbmJpbGdpbiBcclxuXHRodHRwczovL2dpdGh1Yi5jb20vY25iaWxnaW4vanF1ZXJ5LWRyYXdwYWRcclxuXHR2IDAuMVxyXG4qL1xyXG5cclxuaW1wb3J0IHtcclxuICBibG9iVG9DYW52YXMsXHJcbiAgZ2V0SnBlZ0Jsb2IsXHJcbiAgdGFrZVNjcmVlbnNob3RKcGVnQmxvYlxyXG59IGZyb20gJy4vbWVkaWEtdXRpbGl0aWVzJztcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IHBsdWdpblN1ZmZpeCA9ICdkcmF3cGFkJztcclxuICAkLmRyYXdwYWQgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IERyYXdwYWRQbHVnaW5PcHRpb25zKSB7XHJcbiAgICBsZXQgZGVmYXVsdHMgPSB7XHJcbiAgICAgIGRlZmF1bHRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICBjb2xvcnM6IFtcclxuICAgICAgICAnIzAwMDAwMCcsIC8vYmxhY2tcclxuICAgICAgICAnIzJlY2M3MScsIC8vZ3JlZW5cclxuICAgICAgICAnIzM0OThkYicsIC8vYmx1ZVxyXG4gICAgICAgICcjZTc0YzNjJywgLy9yZWRcclxuICAgICAgICAnI2YxYzQwZicsIC8veWVsbG93XHJcbiAgICAgICAgJyM5YjU5YjYnLCAvL3B1cnBsZVxyXG4gICAgICAgICcjZTY3ZTIyJyAvL29yYW5nZVxyXG4gICAgICBdLFxyXG4gICAgICBlcmFzZXJTaXplOiAxMFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcGx1Z2luID0gdGhpcztcclxuICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblxyXG4gICAgcGx1Z2luLnNldHRpbmdzID0ge307XHJcblxyXG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgbGV0IGRyYXdpbmcgPSBmYWxzZTtcclxuICAgIGxldCBkcmF3aW5nVHlwZSA9ICdwZW4nO1xyXG4gICAgY29uc3QgbGluZVN0eWxlID0ge1xyXG4gICAgICB3aWR0aDogNSxcclxuICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIHR5cGU6ICdyb3VuZCdcclxuICAgIH07XHJcbiAgICBsZXQgYnl0ZXMgPSAnJztcclxuICAgIC8vUmVjdGFuZ2xlIFN0dWZmXHJcbiAgICBsZXQgcG9zaXRpb25BOiBhbnk7XHJcbiAgICBsZXQgcG9zaXRpb25COiBhbnk7XHJcbiAgICBsZXQgY2FudmFzT2Zmc2V0OyAvLyA9ICRjYW52YXMub2Zmc2V0KCk7XHJcbiAgICBsZXQgb2Zmc2V0WDogbnVtYmVyOyAvLz0gY2FudmFzT2Zmc2V0LmxlZnQ7XHJcbiAgICBsZXQgb2Zmc2V0WTogbnVtYmVyOyAvLz0gY2FudmFzT2Zmc2V0LnRvcDtcclxuICAgIGxldCBzY3JvbGxYOiBudW1iZXI7IC8vPSAkY2FudmFzLnNjcm9sbExlZnQoKTtcclxuICAgIGxldCBzY3JvbGxZOiBudW1iZXI7IC8vPSAkY2FudmFzLnNjcm9sbFRvcCgpO1xyXG4gICAgbGV0IHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgbGV0IHN0YXJ0WTogbnVtYmVyO1xyXG5cclxuICAgIGxldCBwcmV2U3RhcnRYID0gMDtcclxuICAgIGxldCBwcmV2U3RhcnRZID0gMDtcclxuXHJcbiAgICBsZXQgcHJldldpZHRoID0gMDtcclxuICAgIGxldCBwcmV2SGVpZ2h0ID0gMDtcclxuICAgIC8vRW5kIFJlY3RhbmdsZSBTdHVmZlxyXG4gICAgLyogcHJpdmF0ZSBtZXRob2RzICovXHJcbiAgICBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XHJcbiAgICAgIHBsdWdpbi4kY2FudmFzID0gJCgnPGNhbnZhcz48L2NhbnZhcz4nKTtcclxuICAgICAgcGx1Z2luLmNhbnZhcyA9IHBsdWdpbi4kY2FudmFzLmdldCgwKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgcGx1Z2luLmNvbnRleHQgPSBwbHVnaW4uY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICByZXR1cm4gcGx1Z2luLiRjYW52YXM7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlT3ZlcmxheUNhbnZhcyA9ICgpID0+IHtcclxuICAgICAgcGx1Z2luLiRvdmVybGF5Q2FudmFzID0gJCgnPGNhbnZhcz48L2NhbnZhcz4nKTtcclxuICAgICAgcGx1Z2luLm92ZXJsYXlDYW52YXMgPSBwbHVnaW4uJG92ZXJsYXlDYW52YXMuZ2V0KDApIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBwbHVnaW4ub3ZlcmxheUNvbnRleHQgPSBwbHVnaW4ub3ZlcmxheUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgcmV0dXJuIHBsdWdpbi4kb3ZlcmxheUNhbnZhcztcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNpemVDYW52YXMgPSAoKSA9PiB7XHJcbiAgICAgIHBsdWdpbi5jYW52YXMud2lkdGggPSAkZWxlbWVudC53aWR0aCgpO1xyXG4gICAgICBwbHVnaW4uY2FudmFzLmhlaWdodCA9ICRlbGVtZW50LmhlaWdodCgpO1xyXG4gICAgICBwbHVnaW4ub3ZlcmxheUNhbnZhcy53aWR0aCA9ICRlbGVtZW50LndpZHRoKCk7XHJcbiAgICAgIHBsdWdpbi5vdmVybGF5Q2FudmFzLmhlaWdodCA9ICRlbGVtZW50LmhlaWdodCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldE1vdXNlUG9zID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBldnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICB5OiBldnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlVG9vbGJveCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgJHRvb2xib3ggPSAkKGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LXRvb2xib3hcIj48L2Rpdj5gKTtcclxuICAgICAgY29uc3QgY3JlYXRlQ29sb3Jib3ggPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYCR7cGx1Z2luU3VmZml4fS1jb2xvcmJveC1hY3RpdmVgO1xyXG4gICAgICAgIGxldCAkY29sb3Jib3ggPSAkKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3Jib3hcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHtjb2xvcn07XCI+PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSBwbHVnaW4uc2V0dGluZ3MuZGVmYXVsdENvbG9yKVxyXG4gICAgICAgICAgJGNvbG9yYm94LmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcclxuXHJcbiAgICAgICAgJGNvbG9yYm94Lm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGAke3BsdWdpblN1ZmZpeH0tZXJhc2UtbW9kZWApO1xyXG4gICAgICAgICAgbGluZVN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAvLyBkcmF3aW5nVHlwZSA9ICdwZW4nO1xyXG4gICAgICAgICAgJGNvbG9yYm94LmFkZENsYXNzKGFjdGl2ZUNsYXNzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRjb2xvcmJveDtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgY3JlYXRlRXJhc2VyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYCR7cGx1Z2luU3VmZml4fS1jb2xvcmJveC1hY3RpdmVgO1xyXG4gICAgICAgIGNvbnN0ICRlcmFzZXIgPSAkKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3Jib3ggJHtwbHVnaW5TdWZmaXh9LWVyYXNlclwiPjwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkZXJhc2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRyYXdpbmdUeXBlID0gJ2VyYXNlcic7XHJcbiAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcyhgJHtwbHVnaW5TdWZmaXh9LWVyYXNlLW1vZGVgKTtcclxuICAgICAgICAgICRlcmFzZXIuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVyYXNlcjtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgY3JlYXRlRHJhd2luZ1Rvb2wgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBgJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94LWFjdGl2ZWA7XHJcbiAgICAgICAgY29uc3QgJGRyYXdpbmdUb29sID0gJChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94ICR7cGx1Z2luU3VmZml4fS1kcmF3aW5nLXRvb2xcIj4mI3gzMDMwOzwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkZHJhd2luZ1Rvb2wub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZHJhd2luZ1R5cGUgPSBkcmF3aW5nVHlwZSA9PSAncGVuJyA/ICdyZWN0YW5nbGUnIDogJ3Blbic7XHJcbiAgICAgICAgICB0aGlzLmlubmVySFRNTCA9IGRyYXdpbmdUeXBlID09ICdwZW4nID8gJyYjeDMwMzA7JyA6ICcmI3gyNUFEOyc7XHJcbiAgICAgICAgICB0aGlzLnRpdGxlID0gZHJhd2luZ1R5cGUgPT0gJ3BlbicgPyAnRnJlZWhhbmQnIDogJ1JlY3RhbmdsZXMnO1xyXG4gICAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoYCR7cGx1Z2luU3VmZml4fS1kcmF3aW5nLXRvb2xgKTtcclxuICAgICAgICAgICRkcmF3aW5nVG9vbFxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpXHJcbiAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkZHJhd2luZ1Rvb2w7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGNyZWF0ZVNjcmVlbkNhcHR1cmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHNjcmVlbkNhcHR1cmUgPSAkKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3Jib3ggJHtwbHVnaW5TdWZmaXh9LXNjcmVlblwiPiYjeDFGM0FDOzwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkc2NyZWVuQ2FwdHVyZS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAvL2pRdWVyeSgnLmZlZWRiYWNrLWdsYXNzJykuaGlkZSgpO1xyXG4gICAgICAgICAgLy9qUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWNhbnZhcycpLmhpZGUoKTtcclxuICAgICAgICAgIHZhciBzY3JlZW5zaG90SnBlZ0Jsb2IgPSBhd2FpdCB0YWtlU2NyZWVuc2hvdEpwZWdCbG9iKCk7XHJcbiAgICAgICAgICBhd2FpdCBibG9iVG9DYW52YXMoc2NyZWVuc2hvdEpwZWdCbG9iLCBudWxsLCBudWxsLCBwbHVnaW4uY2FudmFzKTtcclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWNhbnZhcycpLnNob3coKTtcclxuICAgICAgICAgIC8valF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkc2NyZWVuQ2FwdHVyZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZURvbmVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGRvbmVCdXR0b24gPSAkKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3Jib3ggJHtwbHVnaW5TdWZmaXh9LWRvbmVcIiB0aXRsZT1cIkNsaWNrIGhlcmUgYWZ0ZXIgZG9uZSBlZGl0aW5nLlwiPiYjeDFGMTk3OzwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkZG9uZUJ1dHRvbi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgZ2V0SnBlZ0Jsb2IocGx1Z2luLmNhbnZhcyk7XHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLnNob3coKTtcclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuc2hvdygpO1xyXG4gICAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stY2FudmFzJykuaGlkZSgpO1xyXG4gICAgICAgICAgdmFyIGNhbnZhcyA9IGpRdWVyeShcclxuICAgICAgICAgICAgJy5mZWVkYmFjay1zY3JlZW5zaG90IGNhbnZhcydcclxuICAgICAgICAgIClbMF0gYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICBieXRlcyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgICAgIGF3YWl0IGJsb2JUb0NhbnZhcyhibG9iLCAzMDAsIDMwMCwgY2FudmFzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRkb25lQnV0dG9uO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgJGNvbG9ycyA9ICQoYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3JzXCI+PC9kaXY+YCk7XHJcbiAgICAgIHBsdWdpbi5zZXR0aW5ncy5jb2xvcnMuZm9yRWFjaCgoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICRjb2xvcnMuYXBwZW5kKGNyZWF0ZUNvbG9yYm94KGNvbG9yKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJGNvbG9ycy5hcHBlbmQoY3JlYXRlRXJhc2VyKCkpO1xyXG4gICAgICAvLyAkY29sb3JzLmFwcGVuZChjcmVhdGVTY3JlZW5DYXB0dXJlKCkpO1xyXG4gICAgICAkY29sb3JzLmFwcGVuZChjcmVhdGVEcmF3aW5nVG9vbCgpKTtcclxuICAgICAgJGNvbG9ycy5hcHBlbmQoY3JlYXRlRG9uZUJ1dHRvbigpKTtcclxuICAgICAgJHRvb2xib3guYXBwZW5kKCRjb2xvcnMpO1xyXG5cclxuICAgICAgcmV0dXJuICR0b29sYm94O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVDb29yZGluYXRlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgY29vcmRpbmF0ZS54ID0gZXZlbnQub2Zmc2V0WDtcclxuICAgICAgY29vcmRpbmF0ZS55ID0gZXZlbnQub2Zmc2V0WTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RhcnREcmF3ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGRyYXdpbmcgPSB0cnVlO1xyXG4gICAgICAkZWxlbWVudC5hZGRDbGFzcyhgJHtwbHVnaW5TdWZmaXh9LWRyYXdpbmdgKTtcclxuICAgICAgdXBkYXRlQ29vcmRpbmF0ZShldmVudCk7XHJcbiAgICAgIHBvc2l0aW9uQSA9IGdldE1vdXNlUG9zKHBsdWdpbi5jYW52YXMsIGV2ZW50KTtcclxuICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCAtIG9mZnNldFg7XHJcbiAgICAgIHN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBvZmZzZXRZO1xyXG4gICAgICBoYW5kbGVEcmF3KGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVTdG9wRHJhdyA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBkcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGAke3BsdWdpblN1ZmZpeH0tZHJhd2luZ2ApO1xyXG4gICAgICBwb3NpdGlvbkIgPSBnZXRNb3VzZVBvcyhwbHVnaW4uY2FudmFzLCBldmVudCk7XHJcbiAgICAgIGlmIChkcmF3aW5nVHlwZSA9PSAncmVjdGFuZ2xlJykge1xyXG4gICAgICAgIHBsdWdpbi5jb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICBwcmV2U3RhcnRYLFxyXG4gICAgICAgICAgcHJldlN0YXJ0WSxcclxuICAgICAgICAgIHByZXZXaWR0aCxcclxuICAgICAgICAgIHByZXZIZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlRHJhdyA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIWRyYXdpbmcpIHJldHVybjtcclxuICAgICAgY29uc3QgY3R4ID0gcGx1Z2luLmNvbnRleHQ7XHJcbiAgICAgIGlmIChkcmF3aW5nVHlwZSAhPSAncmVjdGFuZ2xlJykge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBzd2l0Y2ggKGRyYXdpbmdUeXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdwZW4nOlxyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVTdHlsZS53aWR0aDtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGluZVN0eWxlLmNvbG9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2VyYXNlcic6XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHBsdWdpbi5zZXR0aW5ncy5lcmFzZXJTaXplO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSBsaW5lU3R5bGUudHlwZTtcclxuICAgICAgICBjdHgubW92ZVRvKGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcclxuICAgICAgICB1cGRhdGVDb29yZGluYXRlKGV2ZW50KTtcclxuICAgICAgICBjdHgubGluZVRvKGNvb3JkaW5hdGUueCwgY29vcmRpbmF0ZS55KTtcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG9jdHggPSBwbHVnaW4ub3ZlcmxheUNvbnRleHQ7XHJcbiAgICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xyXG4gICAgICAgIG9jdHgubGluZVdpZHRoID0gbGluZVN0eWxlLndpZHRoO1xyXG4gICAgICAgIG9jdHguc3Ryb2tlU3R5bGUgPSBsaW5lU3R5bGUuY29sb3I7XHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSBvZmZzZXRYO1xyXG4gICAgICAgIGxldCBtb3VzZVkgPSBldmVudC5jbGllbnRZIC0gb2Zmc2V0WTtcclxuICAgICAgICB2YXIgd2lkdGggPSBtb3VzZVggLSBzdGFydFg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IG1vdXNlWSAtIHN0YXJ0WTtcclxuICAgICAgICAvLyBjbGVhciB0aGUgY2FudmFzXHJcbiAgICAgICAgb2N0eC5jbGVhclJlY3QoMCwgMCwgcGx1Z2luLmNhbnZhcy53aWR0aCwgcGx1Z2luLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBvY3R4LnN0cm9rZVJlY3Qoc3RhcnRYLCBzdGFydFksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHByZXZTdGFydFggPSBzdGFydFg7XHJcbiAgICAgICAgcHJldlN0YXJ0WSA9IHN0YXJ0WTtcclxuXHJcbiAgICAgICAgcHJldldpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgcHJldkhlaWdodCA9IGhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAkZWxlbWVudC5hZGRDbGFzcyhwbHVnaW5TdWZmaXgpO1xyXG4gICAgICAkZWxlbWVudC5hcHBlbmQoY3JlYXRlQ2FudmFzKCkpO1xyXG4gICAgICAkZWxlbWVudC5hcHBlbmQoY3JlYXRlT3ZlcmxheUNhbnZhcygpKTsgLy9UT0RPOiBTdXBwb3J0IGRyYXdpbmcgcmVjdGFuZ2xlc1xyXG4gICAgICAkZWxlbWVudC5hcHBlbmQoY3JlYXRlVG9vbGJveCgpKTtcclxuICAgICAgcmVzaXplQ2FudmFzKCk7XHJcblxyXG4gICAgICBwbHVnaW4uJG92ZXJsYXlDYW52YXMub24oJ21vdXNlZG93bicsIGhhbmRsZVN0YXJ0RHJhdyk7XHJcbiAgICAgIHBsdWdpbi4kb3ZlcmxheUNhbnZhcy5vbignbW91c2V1cCBtb3VzZWxlYXZlIG1vdXNlb3V0JywgaGFuZGxlU3RvcERyYXcpO1xyXG4gICAgICBwbHVnaW4uJG92ZXJsYXlDYW52YXMub24oJ21vdXNlbW92ZScsIGhhbmRsZURyYXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgcGx1Z2luLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBsdWdpbi5zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICAgIGluaXRpYWxpemUoKTtcclxuICAgICAgcmV0dXJuIHBsdWdpbjtcclxuICAgIH07XHJcblxyXG4gICAgcGx1Z2luLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwbHVnaW4uY29udGV4dC5jbGVhclJlY3QoXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIHBsdWdpbi5jb250ZXh0LmNhbnZhcy53aWR0aCxcclxuICAgICAgICBwbHVnaW4uY29udGV4dC5jYW52YXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHBsdWdpbi5vdmVybGF5Q29udGV4dC5jbGVhclJlY3QoXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIHBsdWdpbi5vdmVybGF5Q29udGV4dC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgcGx1Z2luLm92ZXJsYXlDb250ZXh0LmNhbnZhcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcGx1Z2luLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHBsdWdpbi5nZXRCeXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHBsdWdpbi5jYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICB9O1xyXG4gICAgcGx1Z2luLnNldENhcHR1cmVTY3JlZW4gPSBhc3luYyBmdW5jdGlvbiAoYmxvYjogQmxvYikge1xyXG4gICAgICBwbHVnaW4uY2xlYXIoKTtcclxuICAgICAgYXdhaXQgYmxvYlRvQ2FudmFzKGJsb2IsIG51bGwsIG51bGwsIHBsdWdpbi5jYW52YXMpO1xyXG4gICAgICBjYW52YXNPZmZzZXQgPSBwbHVnaW4uJGNhbnZhcy5vZmZzZXQoKTtcclxuICAgICAgb2Zmc2V0WCA9IGNhbnZhc09mZnNldC5sZWZ0O1xyXG4gICAgICBvZmZzZXRZID0gY2FudmFzT2Zmc2V0LnRvcDtcclxuICAgICAgc2Nyb2xsWCA9IHBsdWdpbi4kY2FudmFzLnNjcm9sbExlZnQoKTtcclxuICAgICAgc2Nyb2xsWSA9IHBsdWdpbi4kY2FudmFzLnNjcm9sbFRvcCgpO1xyXG4gICAgICByZXR1cm4gcGx1Z2luO1xyXG4gICAgfTtcclxuXHJcbiAgICBwbHVnaW4uaW5pdCgpO1xyXG4gIH07XHJcblxyXG4gICQuZm4uZHJhd3BhZCA9IGZ1bmN0aW9uIChvcHRpb25zOiBEcmF3cGFkUGx1Z2luT3B0aW9ucykge1xyXG4gICAgaWYgKCQodGhpcykuZGF0YShwbHVnaW5TdWZmaXgpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIHBsdWdpbiA9IG5ldyAkLmRyYXdwYWQodGhpcywgb3B0aW9ucyk7XHJcbiAgICAgICQodGhpcykuZGF0YShwbHVnaW5TdWZmaXgsIHBsdWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICQodGhpcykuZGF0YShwbHVnaW5TdWZmaXgpO1xyXG4gIH07XHJcbn0pKGpRdWVyeSk7XHJcbiIsIi8qIFxyXG5cdGNuYmlsZ2luIFxyXG5cdGh0dHBzOi8vZ2l0aHViLmNvbS9jbmJpbGdpbi9qcXVlcnktZHJhd3BhZFxyXG5cdHYgMC4xXHJcbiovXHJcblxyXG5pbXBvcnQge1xyXG4gIGJsb2JUb0NhbnZhcyxcclxuICBnZXRKcGVnQmxvYixcclxuICB0YWtlU2NyZWVuc2hvdEpwZWdCbG9iXHJcbn0gZnJvbSAnLi9tZWRpYS11dGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBTdXJ2ZXlzU2VydmljZSB9IGZyb20gJy4vc3VydmV5cy5zZXJ2aWNlJztcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IHBsdWdpblN1ZmZpeCA9ICdmZWVkYmFjayc7XHJcbiAgbGV0IHN1cnZleXNlcnZpY2U6IFN1cnZleXNTZXJ2aWNlO1xyXG4gICQuZmVlZGJhY2sgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IEZlZWRiYWNrUGx1Z2luT3B0aW9ucykge1xyXG4gICAgbGV0IHBsdWdpbiA9IHRoaXM7XHJcbiAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgbGV0IGRlZmF1bHRzID0ge1xyXG4gICAgICB1cmw6ICdodHRwczovL2FhLW5wcy1hZG1pbi1ndy1hcGltLmF6dXJlLWFwaS5uZXQvZ3JhcGhxbCdcclxuICAgIH07XHJcbiAgICBwbHVnaW4uc2V0dGluZ3MgPSB7fTtcclxuXHJcbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICBzdXJ2ZXlzZXJ2aWNlID0gbmV3IFN1cnZleXNTZXJ2aWNlKHtcclxuICAgICAgICBhbGxvd19tdWx0aXBsZTogZmFsc2UsXHJcbiAgICAgICAgYXJjaGVyX2lkOiBwbHVnaW4uc2V0dGluZ3MuYXJjaGVyX2lkLFxyXG4gICAgICAgIHVybDogcGx1Z2luLnNldHRpbmdzLnVybCxcclxuICAgICAgICBhc3NldHNVcmw6IG51bGwsXHJcbiAgICAgICAgZmVlZGJhY2tTb3VyY2U6IG51bGwsXHJcbiAgICAgICAgbW9kZTogJycsXHJcbiAgICAgICAgb3V0cHV0U2VsZWN0b3I6ICcnLFxyXG4gICAgICAgIHN1cnZleV9pZDogJydcclxuICAgICAgfSk7XHJcbiAgICAgICRlbGVtZW50LmFkZENsYXNzKHBsdWdpblN1ZmZpeCk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWNsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWdsYXNzJykuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuaGlkZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYnRuLmNsb3NlLWJ0bicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJ0bi5jb250aW51ZS1idG4nKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICBjb21tZW50czogalF1ZXJ5KCcuZmVlZGJhY2stY29tbWVudHMnKS5lcSgwKS52YWwoKSxcclxuICAgICAgICAgIGVtcGxveWVlX25hbWU6IGpRdWVyeSgnLmZlZWRiYWNrLW5hbWUnKS5lcSgwKS52YWwoKSxcclxuICAgICAgICAgIGVtcGxveWVlX2VtYWlsOiBqUXVlcnkoJy5mZWVkYmFjay1lbWFpbCcpLmVxKDApLnZhbCgpLFxyXG4gICAgICAgICAgc2NyZWVuX3Nob3Q6IHBsdWdpbi5nZXRCeXRlcygpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBhd2FpdCBzdXJ2ZXlzZXJ2aWNlLnBvc3RVc2VyRmVlZGJhY2soZGF0YSk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5yZW1vdmVDbGFzcygnbGFyZ2UnKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1ib2R5JylcclxuICAgICAgICAgIC5lcSgwKVxyXG4gICAgICAgICAgLmh0bWwoXHJcbiAgICAgICAgICAgICc8aDM+VGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrLndlIHdpbGwgY29udGFjdCB5b3UgaWYgd2UgbmVlZCBtb3JlIGluZm9ybWF0aW9uPC9oMz4nXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJ0bicpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY2xvc2UtYnRuJykuc2hvdygpO1xyXG4gICAgICB9KTtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stc2NyZWVuc2hvdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgICB2YXIgc2NyZWVuc2hvdEpwZWdCbG9iID0gYXdhaXQgdGFrZVNjcmVlbnNob3RKcGVnQmxvYigpO1xyXG4gICAgICAgIHBsdWdpbiA9IGpRdWVyeSgnLmZlZWRiYWNrLWNhbnZhcycpLnNob3coKS5kcmF3cGFkKCk7XHJcbiAgICAgICAgcGx1Z2luLnNldENhcHR1cmVTY3JlZW4oc2NyZWVuc2hvdEpwZWdCbG9iKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1pbmZvJykuc2hvdygpLmRlbGF5KDUwMDApLmZhZGVPdXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIHB1YmxpYyBtZXRob2RzICovXHJcbiAgICBwbHVnaW4uaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGx1Z2luLnNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgaW5pdGlhbGl6ZSgpO1xyXG4gICAgICByZXR1cm4gcGx1Z2luO1xyXG4gICAgfTtcclxuXHJcbiAgICBwbHVnaW4uc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5zaG93KCk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuc2hvdygpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY2xvc2UtYnRuJykuaGlkZSgpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY29udGludWUtYnRuJykuc2hvdygpO1xyXG4gICAgfTtcclxuICAgIHBsdWdpbi5pbml0KCk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5mZWVkYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zOiBGZWVkYmFja1BsdWdpbk9wdGlvbnMpIHtcclxuICAgIGlmICgkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4KSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciBwbHVnaW4gPSBuZXcgJC5mZWVkYmFjayh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHBsdWdpblN1ZmZpeCwgcGx1Z2luKTtcclxuICAgIH1cclxuICAgIHJldHVybiAkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4KTtcclxuICB9O1xyXG59KShqUXVlcnkpO1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyB0YWtlU2NyZWVuc2hvdEpwZWdCbG9iIH0gZnJvbSAnLi9tZWRpYS11dGlsaXRpZXMnO1xyXG5cclxuaW1wb3J0IHsgU3VydmV5c1NlcnZpY2UgfSBmcm9tICcuL3N1cnZleXMuc2VydmljZSc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHBsdWdpbiBmdW5jdGlvbiBvbiB0aGUgalF1ZXJ5IGV4dGVuc2lvbiBwb2ludC5cclxuLy8gTm90ZTogRnVuY3Rpb24gYW5kIGdsb2JhbCBkZWZhdWx0IG9wdGlvbnMgbXVzdCBiZSBjb21iaW5lZCBhcyBsb25nIGFzIHRoZSBvcHRpb25zIGFyZSBtYW5kYXRvcnkuXHJcbiQuZm4uc3VydmV5c1BsdWdpbiA9IE9iamVjdC5hc3NpZ248XHJcbiAgU3VydmV5c1BsdWdpbkZ1bmN0aW9uLFxyXG4gIFN1cnZleXNQbHVnaW5HbG9iYWxPcHRpb25zXHJcbj4oXHJcbiAgZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSwgb3B0aW9uczogU3VydmV5c1BsdWdpbk9wdGlvbnMpOiBKUXVlcnkge1xyXG4gICAgLy8gTWVyZ2UgdGhlIGdsb2JhbCBvcHRpb25zIHdpdGggdGhlIG9wdGlvbnMgZ2l2ZW4gYXMgYXJndW1lbnQuXHJcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sICQuZm4uc3VydmV5c1BsdWdpbi5vcHRpb25zLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiByZXF1aXJlZCBvcHRpb25zIGFyZSBtaXNzaW5nLlxyXG4gICAgaWYgKCFvcHRpb25zLmFyY2hlcl9pZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICdQbHVnaW4gb3B0aW9ucyBhcmUgbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJhcmNoZXJfaWRcIjogJyxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyB3aGF0IHRoZSBwbHVnaW4gc2hvdWxkIGRvLiBIZXJlIHdlIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgc2VwYXJhdGUgc2VydmljZSB3aGljaCBpcyB0aGVuIHVzZWQgd2hlbiB0aGVcclxuICAgIC8vIHVzZXIgY2xpY2tzIHRoZSBlbGVtZW50IHRoYXQgdGhlIHBsdWdpbiBpcyBhdHRhY2hlZCB0by4gSXQgcHJvZHVjZXMgYSBncmVldGluZyBtZXNzYWdlIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBvdXRwdXQuXHJcbiAgICBsZXQgc3VydmV5c2VydmljZSA9IG5ldyBTdXJ2ZXlzU2VydmljZShvcHRpb25zKTtcclxuICAgIHN1cnZleXNlcnZpY2UuaW5pdGlhbGl6ZVN1cnZleSgpO1xyXG4gICAgbGV0IHBsdWdpbjogYW55O1xyXG4gICAgalF1ZXJ5KGAjJHtvcHRpb25zLmZlZWRiYWNrU291cmNlfWApLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5zaG93KCk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuc2hvdygpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY2xvc2UtYnRuJykuaGlkZSgpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY29udGludWUtYnRuJykuc2hvdygpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1jbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJ0bi5jbG9zZS1idG4nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY29udGludWUtYnRuJykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgY29tbWVudHM6IGpRdWVyeSgnLmZlZWRiYWNrLWNvbW1lbnRzJykuZXEoMCkudmFsKCksXHJcbiAgICAgICAgICBlbXBsb3llZV9uYW1lOiBqUXVlcnkoJy5mZWVkYmFjay1uYW1lJykuZXEoMCkudmFsKCksXHJcbiAgICAgICAgICBlbXBsb3llZV9lbWFpbDogalF1ZXJ5KCcuZmVlZGJhY2stZW1haWwnKS5lcSgwKS52YWwoKSxcclxuICAgICAgICAgIHNjcmVlbl9zaG90OiBwbHVnaW4uZ2V0Qnl0ZXMoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgc3VydmV5c2VydmljZS5wb3N0VXNlckZlZWRiYWNrKGRhdGEpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2xhcmdlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYm9keScpXHJcbiAgICAgICAgICAuZXEoMClcclxuICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAnPGgzPlRoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjay53ZSB3aWxsIGNvbnRhY3QgeW91IGlmIHdlIG5lZWQgbW9yZSBpbmZvcm1hdGlvbjwvaDM+J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4nKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYnRuLmNsb3NlLWJ0bicpLnNob3coKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1pbmNsdWRlLXNjcmVlbicpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGpRdWVyeSgnLmZlZWRiYWNrLWluY2x1ZGUtc2NyZWVuJykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAvLzEuSGlkZSB0aGUgbW9kYWxcclxuICAgICAgICAgIC8valF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAvL2pRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuaGlkZSgpO1xyXG4gICAgICAgICAgLy8yLkdyYWIgdGhlIHNjcmVlbnNob3RcclxuICAgICAgICAgIC8vMy5TaG93IHRoZSBkcmF3cGFkXHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1zY3JlZW5zaG90JykuZHJhd3BhZCgpO1xyXG4gICAgICAgICAgLy80LkVubGFyZ2UgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgLy9qUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmFkZENsYXNzKCdsYXJnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLXNjcmVlbnNob3QnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5oaWRlKCk7XHJcbiAgICAgICAgdmFyIHNjcmVlbnNob3RKcGVnQmxvYiA9IGF3YWl0IHRha2VTY3JlZW5zaG90SnBlZ0Jsb2IoKTtcclxuICAgICAgICBwbHVnaW4gPSBqUXVlcnkoJy5mZWVkYmFjay1jYW52YXMnKS5zaG93KCkuZHJhd3BhZCgpO1xyXG4gICAgICAgIHBsdWdpbi5zZXRDYXB0dXJlU2NyZWVuKHNjcmVlbnNob3RKcGVnQmxvYik7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2staW5mbycpLnNob3coKS5kZWxheSg1MDAwKS5mYWRlT3V0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGpRdWVyeSBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICAvLyBEZWZpbmUgdGhlIGdsb2JhbCBkZWZhdWx0IG9wdGlvbnMuXHJcbiAge1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBvdXRwdXRTZWxlY3RvcjogbnVsbCxcclxuICAgICAgYWxsb3dfbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICBhcmNoZXJfaWQ6ICcyMzQwNzIwJyxcclxuICAgICAgYXNzZXRzVXJsOiAnaHR0cHM6Ly9hYW5wc2FkbWludWkuejEzLndlYi5jb3JlLndpbmRvd3MubmV0JyxcclxuICAgICAgbW9kZTogJ3dpZGdldCcsXHJcbiAgICAgIHN1cnZleV9pZDogbnVsbCxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hYS1ucHMtYWRtaW4tZ3ctYXBpbS5henVyZS1hcGkubmV0L2dyYXBocWwnLFxyXG4gICAgICBmZWVkYmFja1NvdXJjZTogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuIiwiLy8gZG9jczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhRGV2aWNlcy9nZXREaXNwbGF5TWVkaWFcclxuLy8gc2VlOiBodHRwczovL3d3dy53ZWJydGMtZXhwZXJpbWVudC5jb20vUGx1Z2luZnJlZS1TY3JlZW4tU2hhcmluZy8jMjA4OTM1MjEzNjgxODY0NzNcclxuLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1dlYlJUQy1FeHBlcmltZW50L2Jsb2IvbWFzdGVyL1BsdWdpbmZyZWUtU2NyZWVuLVNoYXJpbmcvY29uZmVyZW5jZS5qc1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERpc3BsYXlNZWRpYSA9IChvcHRpb25zOiBhbnkpID0+IHtcclxuICB2YXIgbmF2ID0gbmF2aWdhdG9yIGFzIGFueTtcclxuICBpZiAobmF2Lm1lZGlhRGV2aWNlcyAmJiBuYXYubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdi5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKG9wdGlvbnMpO1xyXG4gIH1cclxuICBpZiAobmF2LmdldERpc3BsYXlNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdi5nZXREaXNwbGF5TWVkaWEob3B0aW9ucyk7XHJcbiAgfVxyXG4gIGlmIChuYXYud2Via2l0R2V0RGlzcGxheU1lZGlhKSB7XHJcbiAgICByZXR1cm4gbmF2LndlYmtpdEdldERpc3BsYXlNZWRpYShvcHRpb25zKTtcclxuICB9XHJcbiAgaWYgKG5hdi5tb3pHZXREaXNwbGF5TWVkaWEpIHtcclxuICAgIHJldHVybiBuYXYubW96R2V0RGlzcGxheU1lZGlhKG9wdGlvbnMpO1xyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ2dldERpc3BsYXlNZWRpYSBpcyBub3QgZGVmaW5lZCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJNZWRpYSA9IChvcHRpb25zOiBhbnkpID0+IHtcclxuICB2YXIgbmF2ID0gbmF2aWdhdG9yIGFzIGFueTtcclxuICBpZiAobmF2Lm1lZGlhRGV2aWNlcyAmJiBuYXYubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG9wdGlvbnMpO1xyXG4gIH1cclxuICBpZiAobmF2LmdldFVzZXJNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEob3B0aW9ucywgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gIH1cclxuICBpZiAobmF2LndlYmtpdEdldFVzZXJNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdi53ZWJraXRHZXRVc2VyTWVkaWEob3B0aW9ucyk7XHJcbiAgfVxyXG4gIGlmIChuYXYubW96R2V0VXNlck1lZGlhKSB7XHJcbiAgICByZXR1cm4gbmF2Lm1vekdldFVzZXJNZWRpYShvcHRpb25zKTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0YWtlU2NyZWVuc2hvdFN0cmVhbSA9IGFzeW5jICgpID0+IHtcclxuICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2NyZWVuXHJcbiAgY29uc3Qgd2lkdGggPSBzY3JlZW4ud2lkdGggKiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gc2NyZWVuLmhlaWdodCAqICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcclxuXHJcbiAgY29uc3QgZXJyb3JzID0gW107XHJcbiAgbGV0IHN0cmVhbTtcclxuICB0cnkge1xyXG4gICAgc3RyZWFtID0gYXdhaXQgZ2V0RGlzcGxheU1lZGlhKHtcclxuICAgICAgYXVkaW86IGZhbHNlLFxyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYVN0cmVhbUNvbnN0cmFpbnRzL3ZpZGVvXHJcbiAgICAgIHZpZGVvOiB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChleCkge1xyXG4gICAgZXJyb3JzLnB1c2goZXgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGVsZWN0cm9uIGpzXHJcbiAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWxlY3Ryb24nKSA+PSAwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdHJlYW0gPSBhd2FpdCBnZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgIGF1ZGlvOiBmYWxzZSxcclxuICAgICAgICB2aWRlbzoge1xyXG4gICAgICAgICAgbWFuZGF0b3J5OiB7XHJcbiAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAnZGVza3RvcCcsXHJcbiAgICAgICAgICAgIC8vIGNocm9tZU1lZGlhU291cmNlSWQ6IHNvdXJjZS5pZCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IGhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBlcnJvcnMucHVzaChleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyguLi5lcnJvcnMpO1xyXG4gICAgaWYgKCFzdHJlYW0pIHtcclxuICAgICAgdGhyb3cgZXJyb3JzW2Vycm9ycy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHJlYW07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGFrZVNjcmVlbnNob3RDYW52YXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc3RyZWFtID0gYXdhaXQgdGFrZVNjcmVlbnNob3RTdHJlYW0oKTtcclxuXHJcbiAgLy8gZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU3NjY1MzA5LzUyMjE3NjJcclxuICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2U8SFRNTENhbnZhc0VsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgdmlkZW8ucGF1c2UoKTtcclxuXHJcbiAgICAgIC8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXNwcm93bmlrL2VsZWN0cm9uLXNjcmVlbmNhcHR1cmUvYmxvYi9tYXN0ZXIvaW5kZXguanNcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MVmlkZW9FbGVtZW50XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XHJcbiAgICAgIHJlc29sdmUoY2FudmFzKTtcclxuICAgIH07XHJcbiAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgfSk7XHJcblxyXG4gIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjazogYW55KSB7XHJcbiAgICB0cmFjay5zdG9wKCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdGFrZSBjYW52YXMgc2NyZWVuc2hvdCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8vIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjE4MjA0NC81MjIxNzYyXHJcbmV4cG9ydCBjb25zdCBnZXRKcGVnQmxvYiA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlPEJsb2I+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIGRvY3M6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2JcclxuICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHJlc29sdmUoYmxvYiksICdpbWFnZS9qcGVnJywgMC45NSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SnBlZ0J5dGVzID0gYXN5bmMgKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcclxuICBjb25zdCBibG9iID0gYXdhaXQgZ2V0SnBlZ0Jsb2IoY2FudmFzKTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5lcnJvcikge1xyXG4gICAgICAgIHJlamVjdCh0aGlzLmVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZSh0aGlzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRha2VTY3JlZW5zaG90SnBlZ0Jsb2IgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzID0gYXdhaXQgdGFrZVNjcmVlbnNob3RDYW52YXMoKTtcclxuICByZXR1cm4gZ2V0SnBlZ0Jsb2IoY2FudmFzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0YWtlU2NyZWVuc2hvdEpwZWdCeXRlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjYW52YXMgPSBhd2FpdCB0YWtlU2NyZWVuc2hvdENhbnZhcygpO1xyXG4gIHJldHVybiBnZXRKcGVnQnl0ZXMoY2FudmFzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBibG9iVG9DYW52YXMgPSAoXHJcbiAgYmxvYjogQmxvYixcclxuICBtYXhXaWR0aDogbnVtYmVyLFxyXG4gIG1heEhlaWdodDogbnVtYmVyLFxyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihcclxuICAgICAgICAxLFxyXG4gICAgICAgIG1heFdpZHRoID8gbWF4V2lkdGggLyBpbWcud2lkdGggOiAxLFxyXG4gICAgICAgIG1heEhlaWdodCA/IG1heEhlaWdodCAvIGltZy5oZWlnaHQgOiAxXHJcbiAgICAgICk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIHNjYWxlO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICdzdHlsZScsXHJcbiAgICAgICAgYHdpZHRoOiR7Y2FudmFzLndpZHRofXB4O2hlaWdodDoke2NhbnZhcy5oZWlnaHR9cHhgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltZyxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgaW1nLndpZHRoLFxyXG4gICAgICAgIGltZy5oZWlnaHQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICBjYW52YXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICAgIHJlc29sdmUoY2FudmFzKTtcclxuICAgIH07XHJcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignRXJyb3IgbG9hZCBibG9iIHRvIEltYWdlJykpO1xyXG4gICAgfTtcclxuICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XHJcbmltcG9ydCBodG1sIGZyb20gJy4vc3VydmV5Lmh0bWwnO1xyXG5cclxuaW1wb3J0ICcuL3N1cnZleS5jc3MnO1xyXG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSAnc3VydmV5LWpxdWVyeSc7XHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBGRUVEQkFDS19TVVJWRVlfSUQgPSAnNjAwMTVkYmNlMDhkNGYwMDY4MTVjMWQzJztcclxuICBwcml2YXRlIG9wdGlvbnM6IFN1cnZleXNQbHVnaW5PcHRpb25zO1xyXG4gIHByaXZhdGUgYWFfc3VydmV5OiBTdXJ2ZXkuU3VydmV5O1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFN1cnZleXNQbHVnaW5PcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIH1cclxuICBhc3luYyBpbml0aWFsaXplU3VydmV5KCkge1xyXG4gICAgdmFyIHN1cnZleSA9IGF3YWl0IHRoaXMuZ2V0QWN0aXZlU3VydmV5KCk7XHJcbiAgICBpZiAoIXN1cnZleSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgeyByZXN1bHRzLCBzdXJ2ZXlKc09wdGlvbnMgfSA9IGF3YWl0IHRoaXMucmVuZGVyU3VydmV5KHN1cnZleSk7XHJcbiAgICBhd2FpdCB0aGlzLnBvc3RTdXJ2ZXlSZXN1bHRzKHJlc3VsdHMsIHN1cnZleUpzT3B0aW9ucyk7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0QWN0aXZlU3VydmV5KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLm9wdGlvbnMudXJsLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHF1ZXJ5OiB0aGlzLm9wdGlvbnMuc3VydmV5X2lkXHJcbiAgICAgICAgICAgID8gYHF1ZXJ5IFF1ZXJ5KCRzdXJ2ZXlJZDogU3RyaW5nKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYWN0aXZlU3VydmV5KHN1cnZleUlkOiAkc3VydmV5SWQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbldpbmRvd0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgOiBgcXVlcnkgUXVlcnkoJGFyY2hlcklkOiBTdHJpbmcpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFjdGl2ZVN1cnZleShhcmNoZXJJZDogJGFyY2hlcklkKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZleUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25XaW5kb3dJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMub3B0aW9ucy5zdXJ2ZXlfaWRcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBzdXJ2ZXlJZDogdGhpcy5vcHRpb25zLnN1cnZleV9pZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBhcmNoZXJJZDogdGhpcy5vcHRpb25zLmFyY2hlcl9pZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzOiAoanNvbikgPT4ge1xyXG4gICAgICAgICAgdmFyIHN1cnZleUpTT04gPSBqc29uLmRhdGEuYWN0aXZlU3VydmV5IHx8IHt9O1xyXG4gICAgICAgICAgcmVzb2x2ZShzdXJ2ZXlKU09OKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHBvc3RVc2VyRmVlZGJhY2soZGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb29raWVTZXJ2aWNlID0gbmV3IENvb2tpZVNlcnZpY2UoKTtcclxuICAgICAgY29uc3Qgc21zZXNzaW9uID0gY29va2llU2VydmljZS5nZXRTTVNlc3Npb24oKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwsXHJcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBoZWFkZXJzOiB7IFNNU0VTU0lPTjogc21zZXNzaW9uIH0sXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHF1ZXJ5OiBgbXV0YXRpb24gQ3JlYXRlU3VydmV5UmVzdWx0TXV0YXRpb24oJHN1cnZleUlkOiBTdHJpbmchLCRhcmNoZXJJZDogU3RyaW5nISwgJGlucHV0OiBTdXJ2ZXlSZXN1bHRJbnB1dCEpIFxyXG4gICAgICAgICAgICAgICAgICB7ICBjcmVhdGVTdXJ2ZXlSZXN1bHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlJZDogJHN1cnZleUlkLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGFyY2hlcklkOiAkYXJjaGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogJGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIHN1cnZleUlkOiB0aGlzLkZFRURCQUNLX1NVUlZFWV9JRCxcclxuICAgICAgICAgICAgYXJjaGVySWQ6IHRoaXMub3B0aW9ucy5hcmNoZXJfaWQsXHJcbiAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0OiBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBlcnJvcjogKCkgPT4ge1xyXG4gICAgICAgICAgcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgcG9zdFN1cnZleVJlc3VsdHMoXHJcbiAgICBzdXJ2ZXk6IGFueSxcclxuICAgIHN1cnZleUpzT3B0aW9uczogYW55XHJcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBjb29raWVTZXJ2aWNlID0gbmV3IENvb2tpZVNlcnZpY2UoKTtcclxuICAgICAgY29uc3Qgc21zZXNzaW9uID0gY29va2llU2VydmljZS5nZXRTTVNlc3Npb24oKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwsXHJcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBoZWFkZXJzOiB7IFNNU0VTU0lPTjogc21zZXNzaW9uIH0sXHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIHF1ZXJ5OiBgbXV0YXRpb24gQ3JlYXRlU3VydmV5UmVzdWx0TXV0YXRpb24oJHN1cnZleUlkOiBTdHJpbmchLCRhcmNoZXJJZDogU3RyaW5nISwgJGlucHV0OiBTdXJ2ZXlSZXN1bHRJbnB1dCEpIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgIGNyZWF0ZVN1cnZleVJlc3VsdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VydmV5SWQ6ICRzdXJ2ZXlJZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyY2hlcklkOiAkYXJjaGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiAkaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgc3VydmV5SWQ6IHRoaXMub3B0aW9ucy5zdXJ2ZXlfaWQsXHJcbiAgICAgICAgICAgIGFyY2hlcklkOiB0aGlzLm9wdGlvbnMuYXJjaGVyX2lkLFxyXG4gICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgIHJlc3VsdDogc3VydmV5LmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGVycm9yOiAoKSA9PiB7XHJcbiAgICAgICAgICBzdXJ2ZXkuZGVsZXRlQ29va2llKCk7XHJcbiAgICAgICAgICBzdXJ2ZXlKc09wdGlvbnMuc2hvd0RhdGFTYXZpbmdFcnJvcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGE/LmNyZWF0ZVN1cnZleVJlc3VsdCkge1xyXG4gICAgICAgICAgICBzdXJ2ZXkuZGVsZXRlQ29va2llKCk7XHJcbiAgICAgICAgICAgIHN1cnZleUpzT3B0aW9ucy5zaG93RGF0YVNhdmluZ0Vycm9yKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEuY3JlYXRlU3VydmV5UmVzdWx0IGFzIGJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSByZW5kZXJTdXJ2ZXkoc3VydmV5SlNPTjogYW55KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyByZXN1bHRzOiBhbnk7IHN1cnZleUpzT3B0aW9uczogYW55IH0+KFxyXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXBvcmFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRlbXBvcmFyeS5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0ZW1wb3JhcnkpO1xyXG4gICAgICAgIHZhciBzdXJ2ZXlEZWZpbml0aW9uID0gc3VydmV5SlNPTi5kZWZpbml0aW9uIHx8IHt9O1xyXG4gICAgICAgIGlmICghc3VydmV5SlNPTi5zdXJ2ZXlJZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ05vIEFjdGl2ZSBzdXJ2ZXkgYXQgdGhlIG1vbWVudCcpO1xyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnN1cnZleV9pZCA9IHN1cnZleUpTT04uc3VydmV5SWQ7XHJcbiAgICAgICAgLy9UT0RPOkZpbmQgYSBiZXR0ZXIgd2F5XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbGxvd19tdWx0aXBsZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc3VydmV5RGVmaW5pdGlvbi5jb29raWVOYW1lID0gc3VydmV5SlNPTi5hY3RpdmF0aW9uV2luZG93SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN1cnZleS5TdHlsZXNNYW5hZ2VyLmFwcGx5VGhlbWUoJ2Jvb3RzdHJhcCcpO1xyXG4gICAgICAgIFN1cnZleS5kZWZhdWx0Qm9vdHN0cmFwQ3NzLm5hdmlnYXRpb25CdXR0b24gPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgICAgICBTdXJ2ZXkuc3VydmV5U3RyaW5ncy5lbXB0eVN1cnZleSA9XHJcbiAgICAgICAgICAnVGhlcmUgaXMgbm8gc3VydmV5IGFjdGl2ZSBhdCB0aGUgbW9tZW50Lic7XHJcbiAgICAgICAgLy9jb25maWcudGl0bGUgfHwgc3VydmV5RGVmaW5pdGlvbi50aXRsZSB8fCAnRmVlZGJhY2s/JztcclxuICAgICAgICBzdXJ2ZXlEZWZpbml0aW9uLnRpdGxlID0gJ0ZlZWRiYWNrPyc7XHJcbiAgICAgICAgdGhpcy5hYV9zdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleURlZmluaXRpb24pO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmFhX3N1cnZleS5zdGF0ZSA9PSAnY29tcGxldGVkJyAmJlxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmFsbG93X211bHRpcGxlICE9PSB0cnVlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1cnZleS5jc3MgPSBteUNzcztcclxuICAgICAgICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gYm9keVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgICAkKCcjYWFfbnBzX3N1cnZleUNvbnRhaW5lcicpLlN1cnZleSh7XHJcbiAgICAgICAgICAgIG1vZGVsOiB0aGlzLmFhX3N1cnZleSxcclxuICAgICAgICAgICAgb25Db21wbGV0ZTogKHJlc3VsdHM6IGFueSwgc3VydmV5SnNPcHRpb25zOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHsgcmVzdWx0cywgc3VydmV5SnNPcHRpb25zIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCgnI2FhX25wc19zdXJ2ZXlDb250YWluZXInKS5TdXJ2ZXlXaW5kb3coe1xyXG4gICAgICAgICAgICBtb2RlbDogdGhpcy5hYV9zdXJ2ZXksXHJcbiAgICAgICAgICAgIGlzRXhwYW5kZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNsb3NlT25Db21wbGV0ZVRpbWVvdXQ6IDIsXHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU6IChyZXN1bHRzOiBhbnksIHN1cnZleUpzT3B0aW9uczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlc3VsdHMsIHN1cnZleUpzT3B0aW9ucyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlN1cnZleVwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcXVlcnktc3VydmV5cy1wbHVnaW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcXVlcnktZHJhd3BhZC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pxdWVyeS1mZWVkYmFjay50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=