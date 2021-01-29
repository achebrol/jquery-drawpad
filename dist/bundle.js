/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./survey.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./survey.css ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".aa_item {\r\n  color: blue;\r\n}\r\n/* \r\n\tcnbilgin \r\n\thttps://github.com/cnbilgin/jquery-drawpad\r\n\tv 0.1\r\n*/\r\n\r\n.drawpad * {\r\n  box-sizing: border-box;\r\n}\r\n.drawpad {\r\n  background-color: #fff;\r\n  position: relative;\r\n}\r\n.drawpad.drawpad-dashed {\r\n  border: 2px dashed black;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.drawpad > canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.drawpad .drawpad-toolbox {\r\n  width: 277px;\r\n  right: 10px;\r\n  top: 10px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  display: flex;\r\n  height: 27px;\r\n  flex-direction: column;\r\n  opacity: 0.3;\r\n  pointer-events: none;\r\n}\r\n.drawpad .drawpad-toolbox:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.drawpad .drawpad-colors {\r\n  pointer-events: all;\r\n}\r\n.drawpad .drawpad-colorbox {\r\n  width: 25px;\r\n  height: 25px;\r\n  border: 2px solid transparent;\r\n  cursor: pointer;\r\n  background-color: #ddd;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.drawpad.drawpad-drawing .drawpad-colors {\r\n  pointer-events: none;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:hover {\r\n  filter: brightness(1.3);\r\n}\r\n.drawpad .drawpad-colorbox:active {\r\n  filter: brightness(0.8);\r\n}\r\n.drawpad .drawpad-eraser {\r\n  background-color: #fff;\r\n  border-style: dashed;\r\n  border-color: gray;\r\n}\r\n.drawpad .drawpad-colorbox.drawpad-colorbox-active,\r\n.drawpad .drawpad-colorbox.drawpad-drawing-type-active {\r\n  border-color: #000;\r\n}\r\n\r\n/*Feedback Syles*/\r\n/*\r\n * Bootstrap v2.0.4\r\n *\r\n * Copyright 2012 Twitter, Inc\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Designed and built with all the love in the world @twitter by @mdo and @fat.\r\n*/\r\n\r\n.feedback-review label {\r\n  font-size: 14px;\r\n}\r\n.feedback-info {\r\n  position: absolute;\r\n  display: none;\r\n  z-index: 9999;\r\n  left: 30%;\r\n  top: 10px;\r\n  padding: 10px;\r\n  background-color: aliceblue;\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n}\r\n\r\n.feedback-body .feedback-error {\r\n  color: #b94a48;\r\n  border-color: #b94a48;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.feedback-body .feedback-error:focus {\r\n  border-color: #953b39;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.feedback-body p a {\r\n  color: #0088cc;\r\n  text-decoration: none;\r\n}\r\n.feedback-body p a:hover {\r\n  color: #005580;\r\n  text-decoration: underline;\r\n}\r\n\r\n.feedback-modal h3 {\r\n  line-height: 27px;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.feedback-modal {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2050;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n  width: 560px;\r\n  margin: -250px 0 0 -280px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  *border: 1px solid #999;\r\n  /* IE6-7 */\r\n\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n}\r\n.feedback-modal.large {\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 10px;\r\n  z-index: 2050;\r\n  max-height: 1200px;\r\n  margin: 0;\r\n  overflow: auto;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow: hidden;\r\n}\r\n.feedback-modal.large .feedback-body {\r\n  overflow: auto;\r\n  height: 700px;\r\n}\r\n.feedback-modal .feedback-body .feedback-screenshot {\r\n  overflow: hidden;\r\n  max-height: 300px;\r\n  max-height: 300px;\r\n  width: 300px;\r\n  border: 1px dotted lightblue;\r\n}\r\n.feedback-screenshot canvas {\r\n  background-color: rgb(240, 248, 255);\r\n}\r\n\r\n.feedback-modal .feedback-close {\r\n  float: right;\r\n  top: 10%;\r\n  left: 10%;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  line-height: 18px;\r\n  color: #000000;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.feedback-modal .feedback-close:hover {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=40);\r\n  cursor: pointer;\r\n}\r\n\r\n.feedback-btn {\r\n  display: inline-block;\r\n  padding: 4px 10px 4px;\r\n  margin-bottom: 0;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333333;\r\n  text-align: center;\r\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n  vertical-align: middle;\r\n  background-color: #f5f5f5;\r\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#ffffff),\r\n    to(#e6e6e6)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);\r\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  border: 1px solid #ccc;\r\n  border-bottom-color: #bbb;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  cursor: pointer;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  *margin-left: 0.3em;\r\n}\r\n.feedback-btn:hover,\r\n.feedback-btn:active,\r\n.feedback-btn.active,\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  background-color: #e6e6e6;\r\n}\r\n.feedback-btn:active,\r\n.feedback-btn.active {\r\n  background-color: #cccccc \\9;\r\n}\r\n.feedback-btn:first-child {\r\n  *margin-left: 0;\r\n}\r\n.feedback-btn:hover {\r\n  color: #333333;\r\n  text-decoration: none;\r\n  background-color: #e6e6e6;\r\n  background-position: 0 -15px;\r\n  -webkit-transition: background-position 0.1s linear;\r\n  -moz-transition: background-position 0.1s linear;\r\n  -ms-transition: background-position 0.1s linear;\r\n  -o-transition: background-position 0.1s linear;\r\n  transition: background-position 0.1s linear;\r\n}\r\n.feedback-btn:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.feedback-btn.active,\r\n.feedback-btn:active {\r\n  background-image: none;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  background-color: #e6e6e6;\r\n  background-color: #d9d9d9 \\9;\r\n  outline: 0;\r\n}\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  cursor: default;\r\n  background-image: none;\r\n  background-color: #e6e6e6;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.feedback-btn-small {\r\n  padding: 5px 9px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n.feedback-btn-small [class^='icon-'] {\r\n  margin-top: -1px;\r\n}\r\n\r\n.feedback-btn-inverse,\r\n.feedback-btn-inverse:hover {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  color: #ffffff;\r\n}\r\n\r\n.feedback-btn-inverse {\r\n  background-color: #393939;\r\n  background-image: -moz-linear-gradient(top, #454545, #262626);\r\n  background-image: -ms-linear-gradient(top, #454545, #262626);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#454545),\r\n    to(#262626)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #454545, #262626);\r\n  background-image: -o-linear-gradient(top, #454545, #262626);\r\n  background-image: linear-gradient(top, #454545, #262626);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#454545', endColorstr='#262626', GradientType=0);\r\n  border-color: #262626 #262626 #000000;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.feedback-btn-inverse:hover,\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active,\r\n.feedback-btn-inverse.disabled,\r\n.feedback-btn-inverse[disabled] {\r\n  background-color: #262626;\r\n}\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active {\r\n  background-color: #0c0c0c \\9;\r\n}\r\nbutton.feedback-btn,\r\ninput[type='submit'].feedback-btn {\r\n  *padding-top: 2px;\r\n  *padding-bottom: 2px;\r\n}\r\nbutton.feedback-btn::-moz-focus-inner,\r\ninput[type='submit'].feedback-btn::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\nbutton.feedback-btn.large,\r\ninput[type='submit'].feedback-btn.large {\r\n  *padding-top: 7px;\r\n  *padding-bottom: 7px;\r\n}\r\nbutton.feedback-btn.small,\r\ninput[type='submit'].feedback-btn.small {\r\n  *padding-top: 3px;\r\n  *padding-bottom: 3px;\r\n}\r\n\r\n.feedback-btn .caret {\r\n  margin-top: 7px;\r\n  margin-left: 0;\r\n}\r\n.feedback-btn:hover .caret,\r\n.open.btn-group .caret {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n.feedback-btn-inverse .caret {\r\n  border-top-color: #ffffff;\r\n  opacity: 0.75;\r\n  filter: alpha(opacity=75);\r\n}\r\n.feedback-btn-small .caret {\r\n  margin-top: 4px;\r\n}\r\n\r\n.feedback-bottom-right {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.feedback-header {\r\n  padding: 9px 15px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.feedback-header .feedback-close {\r\n  margin-top: 2px;\r\n}\r\n.feedback-body {\r\n  padding: 15px;\r\n  height: 380px;\r\n}\r\n.feedback-body .modal-form {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-body textarea {\r\n  margin: 0;\r\n  font-size: 100%;\r\n  vertical-align: middle;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n  display: inline-block;\r\n  width: 520px;\r\n  height: 100px;\r\n  padding: 4px;\r\n  margin-bottom: 9px;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #555555;\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -o-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  transition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\n.feedback-body textarea:focus {\r\n  border-color: rgba(82, 168, 236, 0.8);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  outline: 0;\r\n  outline: thin dotted \\9;\r\n  /* IE6-9 */\r\n}\r\n\r\n.feedback-footer {\r\n  padding: 5px 14px 15px 15px;\r\n  line-height: 20px;\r\n  margin-bottom: 0;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  -webkit-border-radius: 0 0 6px 6px;\r\n  -moz-border-radius: 0 0 6px 6px;\r\n  border-radius: 0 0 6px 6px;\r\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\r\n  -moz-box-shadow: inset 0 1px 0 #ffffff;\r\n  box-shadow: inset 0 1px 0 #ffffff;\r\n  *zoom: 1;\r\n}\r\n.feedback-footer:before,\r\n.feedback-footer:after {\r\n  display: table;\r\n  content: '';\r\n}\r\n.feedback-footer:after {\r\n  clear: both;\r\n}\r\n.feedback-footer .feedback-btn {\r\n  float: right;\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-glass {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #777;\r\n  opacity: 0.5;\r\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n.feedback-canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3999;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.feedback-canvas canvas {\r\n  position: absolute;\r\n}\r\n\r\n#feedback-blackout-element {\r\n  background: #000;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-highlight-element,\r\n.feedback-highlighted {\r\n  position: absolute;\r\n\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n\r\n  z-index: 2000;\r\n  -moz-background-clip: padding;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-box-shadow: 0px 0px 8px 0px yellow;\r\n  box-shadow: 0px 0px 8px 0px yellow;\r\n}\r\n\r\n.feedback-highlight-element {\r\n  pointer-events: none;\r\n}\r\n\r\n#feedback-highlight-close {\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n\r\n  z-index: 2001;\r\n\r\n  -webkit-border-radius: 10px;\r\n  border-radius: 10px;\r\n\r\n  -webkit-box-shadow: 0px 0px 4px 0px #615e5e;\r\n  box-shadow: 0px 0px 4px 0px #615e5e;\r\n\r\n  background-color: #c5c5c5;\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    from(#c5c5c5),\r\n    to(#999999)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -moz-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -o-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: linear-gradient(to bottom, #c5c5c5, #999999);\r\n}\r\n\r\n.feedback-blackedout {\r\n  background: #000;\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n#feedback-highlight-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 2010;\r\n}\r\n\r\n.feedback-animate-toside {\r\n  top: 100%;\r\n  left: 100%;\r\n  width: 300px;\r\n  margin-left: -320px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-animate-review {\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 600px;\r\n\r\n  margin-left: -300px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-canvas-complete {\r\n  -webkit-filter: blur(5px);\r\n}\r\n\r\n.feedback-body canvas {\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #636363;\r\n  -webkit-box-shadow: 0px 0px 12px 0px #615e5e;\r\n  box-shadow: 0px 0px 12px 0px #615e5e;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-browser {\r\n  margin-left: 330px;\r\n}\r\n\r\n.feedback-loader {\r\n  text-align: center;\r\n}\r\n.feedback-loader span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 50px auto;\r\n  background: black;\r\n  border-radius: 50px;\r\n  -webkit-animation: feedback-loader 0.9s infinite alternate;\r\n  -moz-animation: feedback-loader 0.9s infinite alternate;\r\n}\r\n.feedback-loader span:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.3s;\r\n  -moz-animation-delay: 0.3s;\r\n}\r\n.feedback-loader span:nth-of-type(3) {\r\n  -webkit-animation-delay: 0.6s;\r\n  -moz-animation-delay: 0.6s;\r\n}\r\n@-webkit-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -webkit-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -webkit-transform: translateY(-21px);\r\n  }\r\n}\r\n@-moz-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -moz-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -moz-transform: translateY(-21px);\r\n  }\r\n}\r\n\r\n/*Feedback Legacy Styles*/\r\n.fb-review label {\r\n  font-size: 14px;\r\n}\r\n\r\n.fb-body .fb-error {\r\n  color: #b94a48;\r\n  border-color: #b94a48;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.fb-body .fb-error:focus {\r\n  border-color: #953b39;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.fb-body p a {\r\n  color: #0088cc;\r\n  text-decoration: none;\r\n}\r\n.fb-body p a:hover {\r\n  color: #005580;\r\n  text-decoration: underline;\r\n}\r\n\r\n.fb-modal h3 {\r\n  line-height: 27px;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.fb-modal {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2050;\r\n  max-height: 600px;\r\n  overflow: auto;\r\n  width: 560px;\r\n  margin: -250px 0 0 -280px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  *border: 1px solid #999;\r\n  /* IE6-7 */\r\n\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n}\r\n\r\n.fb-modal .fb-close {\r\n  float: right;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  line-height: 18px;\r\n  color: #000000;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.fb-modal .fb-close:hover {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=40);\r\n  cursor: pointer;\r\n}\r\n\r\n.fb-btn {\r\n  display: inline-block;\r\n  padding: 4px 10px 4px;\r\n  margin-bottom: 0;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333333;\r\n  text-align: center;\r\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n  vertical-align: middle;\r\n  background-color: #f5f5f5;\r\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#ffffff),\r\n    to(#e6e6e6)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);\r\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  border: 1px solid #ccc;\r\n  border-bottom-color: #bbb;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  cursor: pointer;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  *margin-left: 0.3em;\r\n}\r\n.fb-btn:hover,\r\n.fb-btn:active,\r\n.fb-btn.active,\r\n.fb-btn.disabled,\r\n.fb-btn[disabled] {\r\n  background-color: #e6e6e6;\r\n}\r\n.fb-btn:active,\r\n.fb-btn.active {\r\n  background-color: #cccccc \\9;\r\n}\r\n.fb-btn:first-child {\r\n  *margin-left: 0;\r\n}\r\n.fb-btn:hover {\r\n  color: #333333;\r\n  text-decoration: none;\r\n  background-color: #e6e6e6;\r\n  background-position: 0 -15px;\r\n  -webkit-transition: background-position 0.1s linear;\r\n  -moz-transition: background-position 0.1s linear;\r\n  -ms-transition: background-position 0.1s linear;\r\n  -o-transition: background-position 0.1s linear;\r\n  transition: background-position 0.1s linear;\r\n}\r\n.fb-btn:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.fb-btn.active,\r\n.fb-btn:active {\r\n  background-image: none;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  background-color: #e6e6e6;\r\n  background-color: #d9d9d9 \\9;\r\n  outline: 0;\r\n}\r\n.fb-btn.disabled,\r\n.fb-btn[disabled] {\r\n  cursor: default;\r\n  background-image: none;\r\n  background-color: #e6e6e6;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.fb-btn-small {\r\n  padding: 5px 9px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n.fb-btn-small [class^='icon-'] {\r\n  margin-top: -1px;\r\n}\r\n\r\n.fb-btn-inverse,\r\n.fb-btn-inverse:hover {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  color: #ffffff;\r\n}\r\n\r\n.fb-btn-inverse {\r\n  background-color: #393939;\r\n  background-image: -moz-linear-gradient(top, #454545, #262626);\r\n  background-image: -ms-linear-gradient(top, #454545, #262626);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#454545),\r\n    to(#262626)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #454545, #262626);\r\n  background-image: -o-linear-gradient(top, #454545, #262626);\r\n  background-image: linear-gradient(top, #454545, #262626);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#454545', endColorstr='#262626', GradientType=0);\r\n  border-color: #262626 #262626 #000000;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.fb-btn-inverse:hover,\r\n.fb-btn-inverse:active,\r\n.fb-btn-inverse.active,\r\n.fb-btn-inverse.disabled,\r\n.fb-btn-inverse[disabled] {\r\n  background-color: #262626;\r\n}\r\n.fb-btn-inverse:active,\r\n.fb-btn-inverse.active {\r\n  background-color: #0c0c0c \\9;\r\n}\r\nbutton.fb-btn,\r\ninput[type='submit'].fb-btn {\r\n  *padding-top: 2px;\r\n  *padding-bottom: 2px;\r\n}\r\nbutton.fb-btn::-moz-focus-inner,\r\ninput[type='submit'].fb-btn::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\nbutton.fb-btn.large,\r\ninput[type='submit'].fb-btn.large {\r\n  *padding-top: 7px;\r\n  *padding-bottom: 7px;\r\n}\r\nbutton.fb-btn.small,\r\ninput[type='submit'].fb-btn.small {\r\n  *padding-top: 3px;\r\n  *padding-bottom: 3px;\r\n}\r\n\r\n.fb-btn .caret {\r\n  margin-top: 7px;\r\n  margin-left: 0;\r\n}\r\n.fb-btn:hover .caret,\r\n.open.btn-group .caret {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n.fb-btn-inverse .caret {\r\n  border-top-color: #ffffff;\r\n  opacity: 0.75;\r\n  filter: alpha(opacity=75);\r\n}\r\n.fb-btn-small .caret {\r\n  margin-top: 4px;\r\n}\r\n\r\n.fb-bottom-right {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.fb-header {\r\n  padding: 9px 15px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.fb-header .fb-close {\r\n  margin-top: 2px;\r\n}\r\n.fb-body {\r\n  padding: 15px;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n.fb-body .modal-form {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.fb-body textarea {\r\n  margin: 0;\r\n  font-size: 100%;\r\n  vertical-align: middle;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n  display: inline-block;\r\n  width: 520px;\r\n  height: 100px;\r\n  padding: 4px;\r\n  margin-bottom: 9px;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #555555;\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -o-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  transition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\n.fb-body textarea:focus {\r\n  border-color: rgba(82, 168, 236, 0.8);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  outline: 0;\r\n  outline: thin dotted \\9;\r\n  /* IE6-9 */\r\n}\r\n\r\n.fb-footer {\r\n  padding: 5px 14px 15px 15px;\r\n  line-height: 20px;\r\n  margin-bottom: 0;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  -webkit-border-radius: 0 0 6px 6px;\r\n  -moz-border-radius: 0 0 6px 6px;\r\n  border-radius: 0 0 6px 6px;\r\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\r\n  -moz-box-shadow: inset 0 1px 0 #ffffff;\r\n  box-shadow: inset 0 1px 0 #ffffff;\r\n  *zoom: 1;\r\n}\r\n.fb-footer:before,\r\n.fb-footer:after {\r\n  display: table;\r\n  content: '';\r\n}\r\n.fb-footer:after {\r\n  clear: both;\r\n}\r\n.fb-footer .fb-btn {\r\n  float: right;\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.fb-glass {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #777;\r\n  opacity: 0.5;\r\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n.fb-canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 1999;\r\n}\r\n\r\n#fb-blackout-element {\r\n  background: #000;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n}\r\n\r\n.fb-highlight-element,\r\n.fb-highlighted {\r\n  position: absolute;\r\n\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n\r\n  z-index: 2000;\r\n  -moz-background-clip: padding;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-box-shadow: 0px 0px 8px 0px yellow;\r\n  box-shadow: 0px 0px 8px 0px yellow;\r\n}\r\n\r\n.fb-highlight-element {\r\n  pointer-events: none;\r\n}\r\n\r\n#fb-highlight-close {\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n\r\n  z-index: 2001;\r\n\r\n  -webkit-border-radius: 10px;\r\n  border-radius: 10px;\r\n\r\n  -webkit-box-shadow: 0px 0px 4px 0px #615e5e;\r\n  box-shadow: 0px 0px 4px 0px #615e5e;\r\n\r\n  background-color: #c5c5c5;\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    from(#c5c5c5),\r\n    to(#999999)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -moz-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -o-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: linear-gradient(to bottom, #c5c5c5, #999999);\r\n}\r\n\r\n.fb-blackedout {\r\n  background: #000;\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n#fb-highlight-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 2010;\r\n}\r\n\r\n.fb-animate-toside {\r\n  top: 100%;\r\n  left: 100%;\r\n  width: 300px;\r\n  margin-left: -320px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.fb-animate-review {\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 600px;\r\n\r\n  margin-left: -300px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.fb-canvas-complete {\r\n  -webkit-filter: blur(5px);\r\n}\r\n\r\n.fb-body canvas {\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #636363;\r\n  -webkit-box-shadow: 0px 0px 12px 0px #615e5e;\r\n  box-shadow: 0px 0px 12px 0px #615e5e;\r\n  position: absolute;\r\n}\r\n\r\n.fb-browser {\r\n  margin-left: 330px;\r\n}\r\n\r\n.fb-loader {\r\n  text-align: center;\r\n}\r\n.fb-loader span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 50px auto;\r\n  background: black;\r\n  border-radius: 50px;\r\n  -webkit-animation: feedback-loader 0.9s infinite alternate;\r\n  -moz-animation: feedback-loader 0.9s infinite alternate;\r\n}\r\n.fb-loader span:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.3s;\r\n  -moz-animation-delay: 0.3s;\r\n}\r\n.fb-loader span:nth-of-type(3) {\r\n  -webkit-animation-delay: 0.6s;\r\n  -moz-animation-delay: 0.6s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./survey.css"],"names":[],"mappings":"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","sourcesContent":[".aa_item {\r\n  color: blue;\r\n}\r\n/* \r\n\tcnbilgin \r\n\thttps://github.com/cnbilgin/jquery-drawpad\r\n\tv 0.1\r\n*/\r\n\r\n.drawpad * {\r\n  box-sizing: border-box;\r\n}\r\n.drawpad {\r\n  background-color: #fff;\r\n  position: relative;\r\n}\r\n.drawpad.drawpad-dashed {\r\n  border: 2px dashed black;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.drawpad > canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.drawpad .drawpad-toolbox {\r\n  width: 277px;\r\n  right: 10px;\r\n  top: 10px;\r\n  position: absolute;\r\n  z-index: 10;\r\n  display: flex;\r\n  height: 27px;\r\n  flex-direction: column;\r\n  opacity: 0.3;\r\n  pointer-events: none;\r\n}\r\n.drawpad .drawpad-toolbox:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.drawpad .drawpad-colors {\r\n  pointer-events: all;\r\n}\r\n.drawpad .drawpad-colorbox {\r\n  width: 25px;\r\n  height: 25px;\r\n  border: 2px solid transparent;\r\n  cursor: pointer;\r\n  background-color: #ddd;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.drawpad.drawpad-drawing .drawpad-colors {\r\n  pointer-events: none;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.drawpad .drawpad-colorbox:hover {\r\n  filter: brightness(1.3);\r\n}\r\n.drawpad .drawpad-colorbox:active {\r\n  filter: brightness(0.8);\r\n}\r\n.drawpad .drawpad-eraser {\r\n  background-color: #fff;\r\n  border-style: dashed;\r\n  border-color: gray;\r\n}\r\n.drawpad .drawpad-colorbox.drawpad-colorbox-active,\r\n.drawpad .drawpad-colorbox.drawpad-drawing-type-active {\r\n  border-color: #000;\r\n}\r\n\r\n/*Feedback Syles*/\r\n/*\r\n * Bootstrap v2.0.4\r\n *\r\n * Copyright 2012 Twitter, Inc\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Designed and built with all the love in the world @twitter by @mdo and @fat.\r\n*/\r\n\r\n.feedback-review label {\r\n  font-size: 14px;\r\n}\r\n.feedback-info {\r\n  position: absolute;\r\n  display: none;\r\n  z-index: 9999;\r\n  left: 30%;\r\n  top: 10px;\r\n  padding: 10px;\r\n  background-color: aliceblue;\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n}\r\n\r\n.feedback-body .feedback-error {\r\n  color: #b94a48;\r\n  border-color: #b94a48;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.feedback-body .feedback-error:focus {\r\n  border-color: #953b39;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.feedback-body p a {\r\n  color: #0088cc;\r\n  text-decoration: none;\r\n}\r\n.feedback-body p a:hover {\r\n  color: #005580;\r\n  text-decoration: underline;\r\n}\r\n\r\n.feedback-modal h3 {\r\n  line-height: 27px;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.feedback-modal {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2050;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n  width: 560px;\r\n  margin: -250px 0 0 -280px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  *border: 1px solid #999;\r\n  /* IE6-7 */\r\n\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n}\r\n.feedback-modal.large {\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 10px;\r\n  z-index: 2050;\r\n  max-height: 1200px;\r\n  margin: 0;\r\n  overflow: auto;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow: hidden;\r\n}\r\n.feedback-modal.large .feedback-body {\r\n  overflow: auto;\r\n  height: 700px;\r\n}\r\n.feedback-modal .feedback-body .feedback-screenshot {\r\n  overflow: hidden;\r\n  max-height: 300px;\r\n  max-height: 300px;\r\n  width: 300px;\r\n  border: 1px dotted lightblue;\r\n}\r\n.feedback-screenshot canvas {\r\n  background-color: rgb(240, 248, 255);\r\n}\r\n\r\n.feedback-modal .feedback-close {\r\n  float: right;\r\n  top: 10%;\r\n  left: 10%;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  line-height: 18px;\r\n  color: #000000;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.feedback-modal .feedback-close:hover {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=40);\r\n  cursor: pointer;\r\n}\r\n\r\n.feedback-btn {\r\n  display: inline-block;\r\n  padding: 4px 10px 4px;\r\n  margin-bottom: 0;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333333;\r\n  text-align: center;\r\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n  vertical-align: middle;\r\n  background-color: #f5f5f5;\r\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#ffffff),\r\n    to(#e6e6e6)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);\r\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  border: 1px solid #ccc;\r\n  border-bottom-color: #bbb;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  cursor: pointer;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  *margin-left: 0.3em;\r\n}\r\n.feedback-btn:hover,\r\n.feedback-btn:active,\r\n.feedback-btn.active,\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  background-color: #e6e6e6;\r\n}\r\n.feedback-btn:active,\r\n.feedback-btn.active {\r\n  background-color: #cccccc \\9;\r\n}\r\n.feedback-btn:first-child {\r\n  *margin-left: 0;\r\n}\r\n.feedback-btn:hover {\r\n  color: #333333;\r\n  text-decoration: none;\r\n  background-color: #e6e6e6;\r\n  background-position: 0 -15px;\r\n  -webkit-transition: background-position 0.1s linear;\r\n  -moz-transition: background-position 0.1s linear;\r\n  -ms-transition: background-position 0.1s linear;\r\n  -o-transition: background-position 0.1s linear;\r\n  transition: background-position 0.1s linear;\r\n}\r\n.feedback-btn:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.feedback-btn.active,\r\n.feedback-btn:active {\r\n  background-image: none;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  background-color: #e6e6e6;\r\n  background-color: #d9d9d9 \\9;\r\n  outline: 0;\r\n}\r\n.feedback-btn.disabled,\r\n.feedback-btn[disabled] {\r\n  cursor: default;\r\n  background-image: none;\r\n  background-color: #e6e6e6;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.feedback-btn-small {\r\n  padding: 5px 9px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n.feedback-btn-small [class^='icon-'] {\r\n  margin-top: -1px;\r\n}\r\n\r\n.feedback-btn-inverse,\r\n.feedback-btn-inverse:hover {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  color: #ffffff;\r\n}\r\n\r\n.feedback-btn-inverse {\r\n  background-color: #393939;\r\n  background-image: -moz-linear-gradient(top, #454545, #262626);\r\n  background-image: -ms-linear-gradient(top, #454545, #262626);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#454545),\r\n    to(#262626)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #454545, #262626);\r\n  background-image: -o-linear-gradient(top, #454545, #262626);\r\n  background-image: linear-gradient(top, #454545, #262626);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#454545', endColorstr='#262626', GradientType=0);\r\n  border-color: #262626 #262626 #000000;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.feedback-btn-inverse:hover,\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active,\r\n.feedback-btn-inverse.disabled,\r\n.feedback-btn-inverse[disabled] {\r\n  background-color: #262626;\r\n}\r\n.feedback-btn-inverse:active,\r\n.feedback-btn-inverse.active {\r\n  background-color: #0c0c0c \\9;\r\n}\r\nbutton.feedback-btn,\r\ninput[type='submit'].feedback-btn {\r\n  *padding-top: 2px;\r\n  *padding-bottom: 2px;\r\n}\r\nbutton.feedback-btn::-moz-focus-inner,\r\ninput[type='submit'].feedback-btn::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\nbutton.feedback-btn.large,\r\ninput[type='submit'].feedback-btn.large {\r\n  *padding-top: 7px;\r\n  *padding-bottom: 7px;\r\n}\r\nbutton.feedback-btn.small,\r\ninput[type='submit'].feedback-btn.small {\r\n  *padding-top: 3px;\r\n  *padding-bottom: 3px;\r\n}\r\n\r\n.feedback-btn .caret {\r\n  margin-top: 7px;\r\n  margin-left: 0;\r\n}\r\n.feedback-btn:hover .caret,\r\n.open.btn-group .caret {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n.feedback-btn-inverse .caret {\r\n  border-top-color: #ffffff;\r\n  opacity: 0.75;\r\n  filter: alpha(opacity=75);\r\n}\r\n.feedback-btn-small .caret {\r\n  margin-top: 4px;\r\n}\r\n\r\n.feedback-bottom-right {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.feedback-header {\r\n  padding: 9px 15px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.feedback-header .feedback-close {\r\n  margin-top: 2px;\r\n}\r\n.feedback-body {\r\n  padding: 15px;\r\n  height: 380px;\r\n}\r\n.feedback-body .modal-form {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-body textarea {\r\n  margin: 0;\r\n  font-size: 100%;\r\n  vertical-align: middle;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n  display: inline-block;\r\n  width: 520px;\r\n  height: 100px;\r\n  padding: 4px;\r\n  margin-bottom: 9px;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #555555;\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -o-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  transition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\n.feedback-body textarea:focus {\r\n  border-color: rgba(82, 168, 236, 0.8);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  outline: 0;\r\n  outline: thin dotted \\9;\r\n  /* IE6-9 */\r\n}\r\n\r\n.feedback-footer {\r\n  padding: 5px 14px 15px 15px;\r\n  line-height: 20px;\r\n  margin-bottom: 0;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  -webkit-border-radius: 0 0 6px 6px;\r\n  -moz-border-radius: 0 0 6px 6px;\r\n  border-radius: 0 0 6px 6px;\r\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\r\n  -moz-box-shadow: inset 0 1px 0 #ffffff;\r\n  box-shadow: inset 0 1px 0 #ffffff;\r\n  *zoom: 1;\r\n}\r\n.feedback-footer:before,\r\n.feedback-footer:after {\r\n  display: table;\r\n  content: '';\r\n}\r\n.feedback-footer:after {\r\n  clear: both;\r\n}\r\n.feedback-footer .feedback-btn {\r\n  float: right;\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.feedback-glass {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #777;\r\n  opacity: 0.5;\r\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n.feedback-canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3999;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.feedback-canvas canvas {\r\n  position: absolute;\r\n}\r\n\r\n#feedback-blackout-element {\r\n  background: #000;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-highlight-element,\r\n.feedback-highlighted {\r\n  position: absolute;\r\n\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n\r\n  z-index: 2000;\r\n  -moz-background-clip: padding;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-box-shadow: 0px 0px 8px 0px yellow;\r\n  box-shadow: 0px 0px 8px 0px yellow;\r\n}\r\n\r\n.feedback-highlight-element {\r\n  pointer-events: none;\r\n}\r\n\r\n#feedback-highlight-close {\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n\r\n  z-index: 2001;\r\n\r\n  -webkit-border-radius: 10px;\r\n  border-radius: 10px;\r\n\r\n  -webkit-box-shadow: 0px 0px 4px 0px #615e5e;\r\n  box-shadow: 0px 0px 4px 0px #615e5e;\r\n\r\n  background-color: #c5c5c5;\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    from(#c5c5c5),\r\n    to(#999999)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -moz-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -o-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: linear-gradient(to bottom, #c5c5c5, #999999);\r\n}\r\n\r\n.feedback-blackedout {\r\n  background: #000;\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n#feedback-highlight-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 2010;\r\n}\r\n\r\n.feedback-animate-toside {\r\n  top: 100%;\r\n  left: 100%;\r\n  width: 300px;\r\n  margin-left: -320px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-animate-review {\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 600px;\r\n\r\n  margin-left: -300px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.feedback-canvas-complete {\r\n  -webkit-filter: blur(5px);\r\n}\r\n\r\n.feedback-body canvas {\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #636363;\r\n  -webkit-box-shadow: 0px 0px 12px 0px #615e5e;\r\n  box-shadow: 0px 0px 12px 0px #615e5e;\r\n  position: absolute;\r\n}\r\n\r\n.feedback-browser {\r\n  margin-left: 330px;\r\n}\r\n\r\n.feedback-loader {\r\n  text-align: center;\r\n}\r\n.feedback-loader span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 50px auto;\r\n  background: black;\r\n  border-radius: 50px;\r\n  -webkit-animation: feedback-loader 0.9s infinite alternate;\r\n  -moz-animation: feedback-loader 0.9s infinite alternate;\r\n}\r\n.feedback-loader span:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.3s;\r\n  -moz-animation-delay: 0.3s;\r\n}\r\n.feedback-loader span:nth-of-type(3) {\r\n  -webkit-animation-delay: 0.6s;\r\n  -moz-animation-delay: 0.6s;\r\n}\r\n@-webkit-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -webkit-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -webkit-transform: translateY(-21px);\r\n  }\r\n}\r\n@-moz-keyframes feedback-loader {\r\n  0% {\r\n    width: 10px;\r\n    height: 10px;\r\n    opacity: 0.9;\r\n    -moz-transform: translateY(0);\r\n  }\r\n  100% {\r\n    width: 24px;\r\n    height: 24px;\r\n    opacity: 0.1;\r\n    -moz-transform: translateY(-21px);\r\n  }\r\n}\r\n\r\n/*Feedback Legacy Styles*/\r\n.fb-review label {\r\n  font-size: 14px;\r\n}\r\n\r\n.fb-body .fb-error {\r\n  color: #b94a48;\r\n  border-color: #b94a48;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.fb-body .fb-error:focus {\r\n  border-color: #953b39;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #d59392;\r\n}\r\n\r\n.fb-body p a {\r\n  color: #0088cc;\r\n  text-decoration: none;\r\n}\r\n.fb-body p a:hover {\r\n  color: #005580;\r\n  text-decoration: underline;\r\n}\r\n\r\n.fb-modal h3 {\r\n  line-height: 27px;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  font-weight: bold;\r\n  color: #333;\r\n  text-rendering: optimizelegibility;\r\n}\r\n\r\n.fb-modal {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 2050;\r\n  max-height: 600px;\r\n  overflow: auto;\r\n  width: 560px;\r\n  margin: -250px 0 0 -280px;\r\n  background-color: #ffffff;\r\n  border: 1px solid #999;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  *border: 1px solid #999;\r\n  /* IE6-7 */\r\n\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n}\r\n\r\n.fb-modal .fb-close {\r\n  float: right;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  line-height: 18px;\r\n  color: #000000;\r\n  text-shadow: 0 1px 0 #ffffff;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=20);\r\n}\r\n.fb-modal .fb-close:hover {\r\n  color: #000000;\r\n  text-decoration: none;\r\n  opacity: 0.4;\r\n  filter: alpha(opacity=40);\r\n  cursor: pointer;\r\n}\r\n\r\n.fb-btn {\r\n  display: inline-block;\r\n  padding: 4px 10px 4px;\r\n  margin-bottom: 0;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #333333;\r\n  text-align: center;\r\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\r\n  vertical-align: middle;\r\n  background-color: #f5f5f5;\r\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#ffffff),\r\n    to(#e6e6e6)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-image: linear-gradient(top, #ffffff, #e6e6e6);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);\r\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  border: 1px solid #ccc;\r\n  border-bottom-color: #bbb;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  cursor: pointer;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n  *margin-left: 0.3em;\r\n}\r\n.fb-btn:hover,\r\n.fb-btn:active,\r\n.fb-btn.active,\r\n.fb-btn.disabled,\r\n.fb-btn[disabled] {\r\n  background-color: #e6e6e6;\r\n}\r\n.fb-btn:active,\r\n.fb-btn.active {\r\n  background-color: #cccccc \\9;\r\n}\r\n.fb-btn:first-child {\r\n  *margin-left: 0;\r\n}\r\n.fb-btn:hover {\r\n  color: #333333;\r\n  text-decoration: none;\r\n  background-color: #e6e6e6;\r\n  background-position: 0 -15px;\r\n  -webkit-transition: background-position 0.1s linear;\r\n  -moz-transition: background-position 0.1s linear;\r\n  -ms-transition: background-position 0.1s linear;\r\n  -o-transition: background-position 0.1s linear;\r\n  transition: background-position 0.1s linear;\r\n}\r\n.fb-btn:focus {\r\n  outline: thin dotted #333;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n  outline-offset: -2px;\r\n}\r\n.fb-btn.active,\r\n.fb-btn:active {\r\n  background-image: none;\r\n  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),\r\n    0 1px 2px rgba(0, 0, 0, 0.05);\r\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n  background-color: #e6e6e6;\r\n  background-color: #d9d9d9 \\9;\r\n  outline: 0;\r\n}\r\n.fb-btn.disabled,\r\n.fb-btn[disabled] {\r\n  cursor: default;\r\n  background-image: none;\r\n  background-color: #e6e6e6;\r\n  opacity: 0.65;\r\n  filter: alpha(opacity=65);\r\n  -webkit-box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.fb-btn-small {\r\n  padding: 5px 9px;\r\n  font-size: 11px;\r\n  line-height: 16px;\r\n}\r\n.fb-btn-small [class^='icon-'] {\r\n  margin-top: -1px;\r\n}\r\n\r\n.fb-btn-inverse,\r\n.fb-btn-inverse:hover {\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n  color: #ffffff;\r\n}\r\n\r\n.fb-btn-inverse {\r\n  background-color: #393939;\r\n  background-image: -moz-linear-gradient(top, #454545, #262626);\r\n  background-image: -ms-linear-gradient(top, #454545, #262626);\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    0 0,\r\n    0 100%,\r\n    from(#454545),\r\n    to(#262626)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #454545, #262626);\r\n  background-image: -o-linear-gradient(top, #454545, #262626);\r\n  background-image: linear-gradient(top, #454545, #262626);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#454545', endColorstr='#262626', GradientType=0);\r\n  border-color: #262626 #262626 #000000;\r\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\r\n}\r\n.fb-btn-inverse:hover,\r\n.fb-btn-inverse:active,\r\n.fb-btn-inverse.active,\r\n.fb-btn-inverse.disabled,\r\n.fb-btn-inverse[disabled] {\r\n  background-color: #262626;\r\n}\r\n.fb-btn-inverse:active,\r\n.fb-btn-inverse.active {\r\n  background-color: #0c0c0c \\9;\r\n}\r\nbutton.fb-btn,\r\ninput[type='submit'].fb-btn {\r\n  *padding-top: 2px;\r\n  *padding-bottom: 2px;\r\n}\r\nbutton.fb-btn::-moz-focus-inner,\r\ninput[type='submit'].fb-btn::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\nbutton.fb-btn.large,\r\ninput[type='submit'].fb-btn.large {\r\n  *padding-top: 7px;\r\n  *padding-bottom: 7px;\r\n}\r\nbutton.fb-btn.small,\r\ninput[type='submit'].fb-btn.small {\r\n  *padding-top: 3px;\r\n  *padding-bottom: 3px;\r\n}\r\n\r\n.fb-btn .caret {\r\n  margin-top: 7px;\r\n  margin-left: 0;\r\n}\r\n.fb-btn:hover .caret,\r\n.open.btn-group .caret {\r\n  opacity: 1;\r\n  filter: alpha(opacity=100);\r\n}\r\n\r\n.fb-btn-inverse .caret {\r\n  border-top-color: #ffffff;\r\n  opacity: 0.75;\r\n  filter: alpha(opacity=75);\r\n}\r\n.fb-btn-small .caret {\r\n  margin-top: 4px;\r\n}\r\n\r\n.fb-bottom-right {\r\n  position: fixed;\r\n  bottom: 5px;\r\n  right: 5px;\r\n}\r\n\r\n.fb-header {\r\n  padding: 9px 15px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.fb-header .fb-close {\r\n  margin-top: 2px;\r\n}\r\n.fb-body {\r\n  padding: 15px;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n.fb-body .modal-form {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.fb-body textarea {\r\n  margin: 0;\r\n  font-size: 100%;\r\n  vertical-align: middle;\r\n  overflow: auto;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 18px;\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\r\n  display: inline-block;\r\n  width: 520px;\r\n  height: 100px;\r\n  padding: 4px;\r\n  margin-bottom: 9px;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: #555555;\r\n  border: 1px solid #ccc;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  -o-transition: border linear 0.2s, box-shadow linear 0.2s;\r\n  transition: border linear 0.2s, box-shadow linear 0.2s;\r\n}\r\n\r\n.fb-body textarea:focus {\r\n  border-color: rgba(82, 168, 236, 0.8);\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),\r\n    0 0 8px rgba(82, 168, 236, 0.6);\r\n  outline: 0;\r\n  outline: thin dotted \\9;\r\n  /* IE6-9 */\r\n}\r\n\r\n.fb-footer {\r\n  padding: 5px 14px 15px 15px;\r\n  line-height: 20px;\r\n  margin-bottom: 0;\r\n  background-color: #f5f5f5;\r\n  border-top: 1px solid #ddd;\r\n  -webkit-border-radius: 0 0 6px 6px;\r\n  -moz-border-radius: 0 0 6px 6px;\r\n  border-radius: 0 0 6px 6px;\r\n  -webkit-box-shadow: inset 0 1px 0 #ffffff;\r\n  -moz-box-shadow: inset 0 1px 0 #ffffff;\r\n  box-shadow: inset 0 1px 0 #ffffff;\r\n  *zoom: 1;\r\n}\r\n.fb-footer:before,\r\n.fb-footer:after {\r\n  display: table;\r\n  content: '';\r\n}\r\n.fb-footer:after {\r\n  clear: both;\r\n}\r\n.fb-footer .fb-btn {\r\n  float: right;\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.fb-glass {\r\n  position: fixed;\r\n  z-index: 2000;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #777;\r\n  opacity: 0.5;\r\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\r\n  filter: alpha(opacity=50);\r\n}\r\n\r\n.fb-canvas {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 1999;\r\n}\r\n\r\n#fb-blackout-element {\r\n  background: #000;\r\n  opacity: 0.8;\r\n  position: absolute;\r\n}\r\n\r\n.fb-highlight-element,\r\n.fb-highlighted {\r\n  position: absolute;\r\n\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n\r\n  z-index: 2000;\r\n  -moz-background-clip: padding;\r\n  -webkit-background-clip: padding-box;\r\n  background-clip: padding-box;\r\n\r\n  -webkit-box-shadow: 0px 0px 8px 0px yellow;\r\n  box-shadow: 0px 0px 8px 0px yellow;\r\n}\r\n\r\n.fb-highlight-element {\r\n  pointer-events: none;\r\n}\r\n\r\n#fb-highlight-close {\r\n  background: #ccc;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n\r\n  z-index: 2001;\r\n\r\n  -webkit-border-radius: 10px;\r\n  border-radius: 10px;\r\n\r\n  -webkit-box-shadow: 0px 0px 4px 0px #615e5e;\r\n  box-shadow: 0px 0px 4px 0px #615e5e;\r\n\r\n  background-color: #c5c5c5;\r\n  background-image: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    from(#c5c5c5),\r\n    to(#999999)\r\n  );\r\n  background-image: -webkit-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -moz-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: -o-linear-gradient(top, #c5c5c5, #999999);\r\n  background-image: linear-gradient(to bottom, #c5c5c5, #999999);\r\n}\r\n\r\n.fb-blackedout {\r\n  background: #000;\r\n  position: absolute;\r\n  z-index: 2000;\r\n}\r\n\r\n#fb-highlight-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  z-index: 2010;\r\n}\r\n\r\n.fb-animate-toside {\r\n  top: 100%;\r\n  left: 100%;\r\n  width: 300px;\r\n  margin-left: -320px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.fb-animate-review {\r\n  -webkit-transition: all 2s ease 0s;\r\n  -moz-transition: all 2s ease 0s;\r\n  -ms-transition: all 2s ease 0s;\r\n  -o-transition: all 2s ease 0s;\r\n\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 600px;\r\n\r\n  margin-left: -300px;\r\n  margin-top: -200px;\r\n}\r\n\r\n.fb-canvas-complete {\r\n  -webkit-filter: blur(5px);\r\n}\r\n\r\n.fb-body canvas {\r\n  -webkit-border-radius: 4px;\r\n  border-radius: 4px;\r\n  border: 1px solid #636363;\r\n  -webkit-box-shadow: 0px 0px 12px 0px #615e5e;\r\n  box-shadow: 0px 0px 12px 0px #615e5e;\r\n  position: absolute;\r\n}\r\n\r\n.fb-browser {\r\n  margin-left: 330px;\r\n}\r\n\r\n.fb-loader {\r\n  text-align: center;\r\n}\r\n.fb-loader span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 50px auto;\r\n  background: black;\r\n  border-radius: 50px;\r\n  -webkit-animation: feedback-loader 0.9s infinite alternate;\r\n  -moz-animation: feedback-loader 0.9s infinite alternate;\r\n}\r\n.fb-loader span:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.3s;\r\n  -moz-animation-delay: 0.3s;\r\n}\r\n.fb-loader span:nth-of-type(3) {\r\n  -webkit-animation-delay: 0.6s;\r\n  -moz-animation-delay: 0.6s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

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
/***/ (function(module) {

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
/***/ (function(module) {

// Module
var code = "<div class=\"aa_surveys\">\r\n  <div id=\"aa_nps_surveyContainer\"></div>\r\n</div>\r\n<h4 class=\"feedback-info\">\r\n  Using the toolbar on the rightside, highlight the problem area or erase\r\n  sensitive information.\r\n</h4>\r\n<div class=\"feedback-canvas\" style=\"display: none\"></div>\r\n<div class=\"feedback-glass\" style=\"pointer-events: none; display: none\"></div>\r\n<div class=\"feedback-modal\" style=\"display: none\">\r\n  <div class=\"feedback-header\">\r\n    <a class=\"feedback-close\" href=\"#\">&times;</a>\r\n    <h3>Send Feedback</h3>\r\n  </div>\r\n  <div class=\"feedback-body\">\r\n    <div>\r\n      <label>Please describe the issue you are experiencing:*</label\r\n      ><textarea class=\"feedback-comments\"></textarea> <label>Your Name:</label\r\n      ><input class=\"feedback-name\" /><label>Your EMail:</label\r\n      ><input class=\"feedback-email\" />\r\n      <!--<input type=\"checkbox\" class=\"feedback-include-screen\" />-->\r\n      <label>Click below to include a screenshot</label>\r\n      <div class=\"feedback-screenshot\" style=\"cursor: pointer\">\r\n        <canvas></canvas>\r\n      </div>\r\n      <h3 class=\"feedback-message\">\r\n        Thank you for your feedback.we will contact you if we need more\r\n        information\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"feedback-footer\">\r\n    <button class=\"feedback-btn continue-btn\">Continue</button>\r\n    <button class=\"feedback-btn close-btn\" style=\"display: none\">Close</button>\r\n  </div>\r\n</div>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./survey.css":
/*!********************!*\
  !*** ./survey.css ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_survey_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./survey.css */ "./node_modules/css-loader/dist/cjs.js!./survey.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_survey_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_survey_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSMSession": function() { return /* binding */ getSMSession; }
/* harmony export */ });
function getSMSession() {
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
}


/***/ }),

/***/ "./feedback.js/Core.ts":
/*!*****************************!*\
  !*** ./feedback.js/Core.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": function() { return /* binding */ log; },
/* harmony export */   "removeElements": function() { return /* binding */ removeElements; },
/* harmony export */   "loader": function() { return /* binding */ loader; },
/* harmony export */   "getBounds": function() { return /* binding */ getBounds; },
/* harmony export */   "emptyElements": function() { return /* binding */ emptyElements; },
/* harmony export */   "element": function() { return /* binding */ element; },
/* harmony export */   "scriptLoader": function() { return /* binding */ scriptLoader; },
/* harmony export */   "H2C_IGNORE": function() { return /* binding */ H2C_IGNORE; },
/* harmony export */   "modalBody": function() { return /* binding */ modalBody; },
/* harmony export */   "Feedback": function() { return /* binding */ Feedback; }
/* harmony export */ });
/* harmony import */ var _pages_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Form */ "./feedback.js/pages/Form.ts");
/* harmony import */ var _pages_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Review */ "./feedback.js/pages/Review.ts");
/* harmony import */ var _pages_Screenshot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Screenshot */ "./feedback.js/pages/Screenshot.ts");
/* harmony import */ var _Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Send */ "./feedback.js/Send.ts");
/* harmony import */ var _send_xhr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./send/xhr */ "./feedback.js/send/xhr.ts");





// log proxy function
var log = function (msg) {
    window.console.log(msg);
};
// function to remove elements, input as arrays
var removeElements = function (remove) {
    //HTMLElement[]
    for (var i = remove.length - 1; i >= 0; i--) {
        //remove[i].remove();
        var item = remove[i];
        if (item !== undefined) {
            if (item.parentNode !== null) {
                // check that the item was actually added to DOM
                item.parentNode.removeChild(item);
            }
        }
    }
};
var loader = function () {
    var div = document.createElement('div'), i = 3;
    div.className = 'fb-loader';
    while (i--) {
        div.appendChild(document.createElement('span'));
    }
    return div;
};
var getBounds = function (el) {
    return el.getBoundingClientRect();
};
var emptyElements = function (el) {
    var item;
    while ((item = el.firstChild) !== null ? el.removeChild(item) : false) { }
};
var element = function (name, text) {
    var el = document.createElement(name);
    el.appendChild(document.createTextNode(text));
    return el;
};
// script onload function to provide support for IE as well
var scriptLoader = function (script, func) {
    if (script.onload === undefined) {
        // IE lack of support for script onload
        if (script.onreadystatechange !== undefined) {
            var intervalFunc = function () {
                if (script.readyState !== 'loaded' &&
                    script.readyState !== 'complete') {
                    window.setTimeout(intervalFunc, 250);
                }
                else {
                    // it is loaded
                    func();
                }
            };
            window.setTimeout(intervalFunc, 250);
        }
        else {
            log("ERROR: We can't track when script is loaded");
        }
    }
    else {
        return func;
    }
};
var H2C_IGNORE = 'data-html2canvas-ignore';
var modalBody = document.createElement('div');
var Feedback = /** @class */ (function () {
    function Feedback(options) {
        this.nextButton = null;
        this.glass = document.createElement('div');
        this.options = options || {};
        // default properties
        this.options.label = this.options.label || 'Send Feedback';
        this.options.header = this.options.header || 'Send Feedback';
        this.options.url = this.options.url || '/';
        this.options.adapter = this.options.adapter || new _send_xhr__WEBPACK_IMPORTED_MODULE_4__.XHR(options.url);
        this.options.nextLabel = this.options.nextLabel || 'Continue';
        this.options.reviewLabel = this.options.reviewLabel || 'Review';
        this.options.sendLabel = this.options.sendLabel || 'Send';
        this.options.closeLabel = this.options.closeLabel || 'Close';
        this.options.messageSuccess =
            this.options.messageSuccess || 'Your feedback was sent successfully.';
        this.options.messageError =
            this.options.messageError ||
                'There was an error sending your feedback to the server.';
        if (this.options.pages === undefined) {
            this.options.pages = [
                new _pages_Form__WEBPACK_IMPORTED_MODULE_0__.Form(undefined),
                new _pages_Screenshot__WEBPACK_IMPORTED_MODULE_2__.Screenshot(this.options),
                new _pages_Review__WEBPACK_IMPORTED_MODULE_1__.Review()
            ];
        }
        this.glass.className = 'fb-glass';
        this.glass.style.pointerEvents = 'none';
        this.glass.setAttribute(H2C_IGNORE, 'true');
        this.button = element('button', this.options.label);
        this.button.className = 'fb-btn fb-bottom-right';
        this.button.setAttribute(H2C_IGNORE, true);
        this.button.onclick = this.open;
        if (options.appendTo !== null) {
            (options.appendTo !== undefined
                ? options.appendTo
                : document.body).appendChild(this.button);
        }
    }
    Feedback.prototype.open = function () {
        var _this = this;
        var len = this.options.pages.length;
        this.currentPage = 0;
        for (; this.currentPage < len; this.currentPage++) {
            // create DOM for each page in the wizard
            if (!(this.options.pages[this.currentPage] instanceof _pages_Review__WEBPACK_IMPORTED_MODULE_1__.Review)) {
                this.options.pages[this.currentPage].render();
            }
        }
        var a = element('a', 'X'), modalHeader = document.createElement('div'), 
        // modal container
        modalFooter = document.createElement('div');
        this.modal = document.createElement('div');
        document.body.appendChild(this.glass);
        // modal close button
        a.className = 'fb-close';
        a.onclick = this.close.bind(this);
        a.href = '#';
        this.button.disabled = true;
        // build header element
        modalHeader.appendChild(a);
        modalHeader.appendChild(element('h3', this.options.header));
        modalHeader.className = 'fb-header';
        modalBody.className = 'fb-body';
        emptyElements(modalBody);
        this.currentPage = 0;
        modalBody.appendChild(this.options.pages[this.currentPage++].dom);
        // Next button
        this.nextButton = element('button', this.options.nextLabel);
        this.nextButton.className = 'fb-btn';
        this.nextButton.onclick = function () {
            if (_this.currentPage > 0) {
                if (_this.options.pages[_this.currentPage - 1].end(_this.modal) === false) {
                    // page failed validation, cancel onclick
                    return;
                }
            }
            emptyElements(modalBody);
            if (_this.currentPage === len) {
                _this.send(_this.options.adapter);
            }
            else {
                _this.options.pages[_this.currentPage].start(_this.modal, modalHeader, modalFooter, _this.nextButton);
                if (_this.options.pages[_this.currentPage] instanceof _pages_Review__WEBPACK_IMPORTED_MODULE_1__.Review) {
                    // create DOM for review page, based on collected data
                    _this.options.pages[_this.currentPage].render(_this.options.pages);
                }
                // add page DOM to modal
                modalBody.appendChild(_this.options.pages[_this.currentPage++].dom);
                // if last page, change button label to send
                if (_this.currentPage === len) {
                    _this.nextButton.firstChild.nodeValue = _this.options.sendLabel;
                }
                // if next page is review page, change button label
                if (_this.options.pages[_this.currentPage] instanceof _pages_Review__WEBPACK_IMPORTED_MODULE_1__.Review) {
                    _this.nextButton.firstChild.nodeValue = _this.options.reviewLabel;
                }
            }
        };
        modalFooter.className = 'fb-footer';
        modalFooter.appendChild(this.nextButton);
        this.modal.className = 'fb-modal';
        this.modal.setAttribute(H2C_IGNORE, 'true'); // don't render in html2canvas
        this.modal.appendChild(modalHeader);
        this.modal.appendChild(modalBody);
        this.modal.appendChild(modalFooter);
        document.body.appendChild(this.modal);
    };
    Feedback.prototype.close = function () {
        this.button.disabled = false;
        // remove feedback elements
        removeElements([this.modal, this.glass]);
        // call end event for current page
        if (this.currentPage > 0) {
            this.options.pages[this.currentPage - 1].end(this.modal);
        }
        // call close events for all pages
        for (var i = 0, len = this.options.pages.length; i < len; i++) {
            this.options.pages[i].close();
        }
        return false;
    };
    Feedback.prototype.send = function (adapter) {
        var _this = this;
        // make sure send adapter is of right prototype
        if (!(adapter instanceof _Send__WEBPACK_IMPORTED_MODULE_3__.Send)) {
            throw new Error('Adapter is not an instance of Feedback.Send');
        }
        // fetch data from all pages
        for (var i = 0, len = this.options.pages.length, data = [], p = 0, tmp; i < len; i++) {
            if ((tmp = this.options.pages[i].data()) !== false) {
                data[p++] = tmp;
            }
        }
        this.nextButton.disabled = true;
        emptyElements(modalBody);
        modalBody.appendChild(loader());
        // send data to adapter for processing
        adapter.send(data, function (success) {
            emptyElements(modalBody);
            _this.nextButton.disabled = false;
            _this.nextButton.firstChild.nodeValue = _this.options.closeLabel;
            _this.nextButton.onclick = function () {
                _this.close();
                return false;
            };
            if (success === true) {
                modalBody.appendChild(document.createTextNode(_this.options.messageSuccess));
            }
            else {
                modalBody.appendChild(document.createTextNode(_this.options.messageError));
            }
        });
    };
    return Feedback;
}());



/***/ }),

/***/ "./feedback.js/Page.ts":
/*!*****************************!*\
  !*** ./feedback.js/Page.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": function() { return /* binding */ Page; }
/* harmony export */ });
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.render = function (dom) {
        this.dom = dom;
    };
    Page.prototype.start = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Page.prototype.close = function () { };
    Page.prototype.data = function () {
        return false;
    };
    Page.prototype.review = function (dom) {
        return null;
    };
    Page.prototype.end = function (modal) {
        return true;
    };
    return Page;
}());



/***/ }),

/***/ "./feedback.js/SaveResultsAdaptor.ts":
/*!*******************************************!*\
  !*** ./feedback.js/SaveResultsAdaptor.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveResultsAdapter": function() { return /* binding */ SaveResultsAdapter; }
/* harmony export */ });
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../cookie.service */ "./cookie.service.ts");
/* harmony import */ var _Send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Send */ "./feedback.js/Send.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var SaveResultsAdapter = /** @class */ (function (_super) {
    __extends(SaveResultsAdapter, _super);
    function SaveResultsAdapter(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    SaveResultsAdapter.prototype.send = function (data, callback) {
        var smsession = (0,_cookie_service__WEBPACK_IMPORTED_MODULE_0__.getSMSession)();
        data = __assign(__assign({}, data[0]), { screen_shot: data[1] });
        $.ajax({
            url: this.config.url,
            contentType: 'application/json',
            headers: { SMSESSION: smsession },
            type: 'POST',
            data: JSON.stringify({
                query: "mutation CreateSurveyResultMutation($surveyId: String!,$archerId: String!, $input: SurveyResultInput!) \n                  {  createSurveyResult(\n                      surveyId: $surveyId, \n                      archerId: $archerId,\n                      input: $input\n                      )\n                  }\n              ",
                variables: {
                    surveyId: '60015dbce08d4f006815c1d3',
                    archerId: this.config.archer_id,
                    input: {
                        result: data
                    }
                }
            }),
            error: function () {
                callback(false);
            },
            success: function (response) {
                callback(true);
            }
        });
    };
    return SaveResultsAdapter;
}(_Send__WEBPACK_IMPORTED_MODULE_1__.Send));



/***/ }),

/***/ "./feedback.js/Send.ts":
/*!*****************************!*\
  !*** ./feedback.js/Send.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Send": function() { return /* binding */ Send; }
/* harmony export */ });
var Send = /** @class */ (function () {
    function Send() {
    }
    Send.prototype.send = function (data, callback) { };
    return Send;
}());



/***/ }),

/***/ "./feedback.js/pages/Form.ts":
/*!***********************************!*\
  !*** ./feedback.js/pages/Form.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": function() { return /* binding */ Form; }
/* harmony export */ });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core */ "./feedback.js/Core.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./feedback.js/Page.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(elements) {
        var _this = _super.call(this) || this;
        _this.elements = elements || [
            {
                type: 'textarea',
                name: 'comments',
                label: 'Please describe the issue you are experiencing',
                required: false
            },
            {
                type: 'text',
                name: 'employee_name',
                label: 'Your Name',
                required: false
            },
            {
                type: 'text',
                name: 'employee_email',
                label: 'Your EMail',
                required: false
            }
        ];
        _this.dom = document.createElement('div');
        return _this;
    }
    Form.prototype.render = function () {
        var i = 0, len = this.elements.length, item;
        (0,_Core__WEBPACK_IMPORTED_MODULE_0__.emptyElements)(this.dom);
        for (; i < len; i++) {
            item = this.elements[i];
            switch (item.type) {
                case 'textarea':
                    this.dom.appendChild((0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('label', item.label + ':' + (item.required === true ? ' *' : '')));
                    this.dom.appendChild((item.element = document.createElement('textarea')));
                    break;
                case 'text':
                    this.dom.appendChild((0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('label', item.label + ':' + (item.required === true ? ' *' : '')));
                    this.dom.appendChild((item.element = document.createElement('input')));
                    break;
            }
        }
        return this;
    };
    Form.prototype.end = function () {
        // form validation
        var i = 0, len = this.elements.length, item;
        for (; i < len; i++) {
            item = this.elements[i];
            // check that all required fields are entered
            if (item.required === true && item.element.value.length === 0) {
                item.element.className = 'fb-error';
                return false;
            }
            else {
                item.element.className = '';
            }
        }
        return true;
    };
    Form.prototype.data = function () {
        //if (this._data !== undefined) {
        // return cached value
        //  return this._data;
        //}
        var i = 0, len = this.elements.length, item, data = {};
        for (; i < len; i++) {
            item = this.elements[i];
            data[item.name] = item.element.value;
        }
        // cache and return data
        return data;
    };
    Form.prototype.review = function (dom) {
        var i = 0, item, len = this.elements.length;
        for (; i < len; i++) {
            item = this.elements[i];
            if (item.element.value.length > 0) {
                dom.appendChild((0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('label', item.label + ':'));
                var el = document.createElement('div');
                el.innerText = item.element.value;
                dom.appendChild(el);
                dom.appendChild(document.createElement('hr'));
            }
        }
        return dom;
    };
    return Form;
}(_Page__WEBPACK_IMPORTED_MODULE_1__.Page));



/***/ }),

/***/ "./feedback.js/pages/Review.ts":
/*!*************************************!*\
  !*** ./feedback.js/pages/Review.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Review": function() { return /* binding */ Review; }
/* harmony export */ });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core */ "./feedback.js/Core.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./feedback.js/Page.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Review = /** @class */ (function (_super) {
    __extends(Review, _super);
    function Review() {
        var _this = _super.call(this) || this;
        _this.dom = document.createElement('div');
        _this.dom.className = 'fb-review';
        return _this;
    }
    Review.prototype.render = function (pages) {
        var i = 0, len = pages.length, item;
        (0,_Core__WEBPACK_IMPORTED_MODULE_0__.emptyElements)(this.dom);
        for (; i < len; i++) {
            // get preview DOM items
            pages[i].review(this.dom);
        }
        return this;
    };
    return Review;
}(_Page__WEBPACK_IMPORTED_MODULE_1__.Page));



/***/ }),

/***/ "./feedback.js/pages/Screenshot.ts":
/*!*****************************************!*\
  !*** ./feedback.js/pages/Screenshot.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screenshot": function() { return /* binding */ Screenshot; }
/* harmony export */ });
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core */ "./feedback.js/Core.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./feedback.js/Page.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Screenshot = /** @class */ (function (_super) {
    __extends(Screenshot, _super);
    function Screenshot(options) {
        var _this = _super.call(this) || this;
        _this.options = options || {};
        _this.options.blackoutClass = _this.options.blackoutClass || 'fb-blackedout';
        _this.options.highlightClass =
            _this.options.highlightClass || 'fb-highlighted';
        _this.h2cDone = false;
        return _this;
    }
    Screenshot.prototype.close = function () {
        (0,_Core__WEBPACK_IMPORTED_MODULE_0__.removeElements)([
            this.blackoutBox,
            this.highlightContainer,
            this.highlightBox,
            this.highlightClose
        ]);
        (0,_Core__WEBPACK_IMPORTED_MODULE_0__.removeElements)(document.getElementsByClassName(this.options.blackoutClass));
        (0,_Core__WEBPACK_IMPORTED_MODULE_0__.removeElements)(document.getElementsByClassName(this.options.highlightClass));
    };
    Screenshot.prototype.end = function (modal) {
        modal.className = modal.className.replace(/fb\-animate\-toside/, '');
        // remove event listeners
        document.body.removeEventListener('mousemove', this.mouseMoveEvent, false);
        document.body.removeEventListener('click', this.mouseClickEvent, false);
        (0,_Core__WEBPACK_IMPORTED_MODULE_0__.removeElements)([this.h2cCanvas]);
        this.h2cDone = false;
        return true;
    };
    Screenshot.prototype.start = function (modal, modalHeader, modalFooter, nextButton) {
        var _this = this;
        if (this.h2cDone) {
            (0,_Core__WEBPACK_IMPORTED_MODULE_0__.emptyElements)(this.dom);
            nextButton.disabled = false;
            var $this = this, feedbackHighlightElement = 'fb-highlight-element', dataExclude = 'data-exclude';
            var action = true;
            // delegate mouse move event for body
            this.mouseMoveEvent = function (e) {
                // set close button
                if (e.target !== _this.previousElement &&
                    (e.target.className.indexOf($this.options.blackoutClass) !== -1 ||
                        e.target.className.indexOf($this.options.highlightClass) !== -1)) {
                    var left = parseInt(e.target.style.left, 10) +
                        parseInt(e.target.style.width, 10);
                    left = Math.max(left, 10);
                    left = Math.min(left, window.innerWidth - 15);
                    var top = parseInt(e.target.style.top, 10);
                    top = Math.max(top, 10);
                    highlightClose.style.left = left + 'px';
                    highlightClose.style.top = top + 'px';
                    removeElement = e.target;
                    clearBox();
                    previousElement = undefined;
                    return;
                }
                // don't do anything if we are highlighting a close button or body tag
                if (e.target.nodeName === 'BODY' ||
                    e.target === highlightClose ||
                    e.target === modal ||
                    e.target === nextButton ||
                    e.target.parentNode === modal ||
                    e.target.parentNode === modalHeader) {
                    // we are not gonna blackout the whole page or the close item
                    clearBox();
                    previousElement = e.target;
                    return;
                }
                hideClose();
                if (e.target !== previousElement) {
                    previousElement = e.target;
                    window.clearTimeout(timer);
                    timer = window.setTimeout(function () {
                        var bounds = (0,_Core__WEBPACK_IMPORTED_MODULE_0__.getBounds)(previousElement), item;
                        if (action === false) {
                            item = blackoutBox;
                        }
                        else {
                            item = highlightBox;
                            item.width = bounds.width;
                            item.height = bounds.height;
                            ctx.drawImage($this.h2cCanvas, window.pageXOffset + bounds.left, window.pageYOffset + bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
                        }
                        // we are only targetting IE>=9, so window.pageYOffset works fine
                        item.setAttribute(dataExclude, false);
                        item.style.left = window.pageXOffset + bounds.left + 'px';
                        item.style.top = window.pageYOffset + bounds.top + 'px';
                        item.style.width = bounds.width + 'px';
                        item.style.height = bounds.height + 'px';
                    }, 100);
                }
            };
            // delegate event for body click
            this.mouseClickEvent = function (e) {
                e.preventDefault();
                if (action === false) {
                    if (blackoutBox.getAttribute(dataExclude) === 'false') {
                        var blackout = document.createElement('div');
                        blackout.className = $this.options.blackoutClass;
                        blackout.style.left = blackoutBox.style.left;
                        blackout.style.top = blackoutBox.style.top;
                        blackout.style.width = blackoutBox.style.width;
                        blackout.style.height = blackoutBox.style.height;
                        document.body.appendChild(blackout);
                        previousElement = undefined;
                    }
                }
                else {
                    if (highlightBox.getAttribute(dataExclude) === 'false') {
                        highlightBox.className += ' ' + $this.options.highlightClass;
                        highlightBox.className = highlightBox.className.replace(/fb\-highlight\-element/g, '');
                        $this.highlightBox = highlightBox = document.createElement('canvas');
                        ctx = highlightBox.getContext('2d');
                        highlightBox.className += ' ' + feedbackHighlightElement;
                        document.body.appendChild(highlightBox);
                        clearBox();
                        previousElement = undefined;
                    }
                }
            };
            this.highlightClose = (0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('div', 'X');
            this.blackoutBox = document.createElement('div');
            this.highlightBox = document.createElement('canvas');
            this.highlightContainer = document.createElement('div');
            var timer, highlightClose = this.highlightClose, highlightBox = this.highlightBox, blackoutBox = this.blackoutBox, highlightContainer = this.highlightContainer, removeElement, ctx = highlightBox.getContext('2d'), buttonClickFunction = function (e) {
                e.preventDefault();
                if (blackoutButton.className.indexOf('active') === -1) {
                    blackoutButton.className += ' active';
                    highlightButton.className = highlightButton.className.replace(/active/g, '');
                }
                else {
                    highlightButton.className += ' active';
                    blackoutButton.className = blackoutButton.className.replace(/active/g, '');
                }
                action = !action;
            }, clearBox = function () {
                clearBoxEl(blackoutBox);
                clearBoxEl(highlightBox);
                window.clearTimeout(timer);
            }, clearBoxEl = function (el) {
                el.style.left = '-5px';
                el.style.top = '-5px';
                el.style.width = '0px';
                el.style.height = '0px';
                el.setAttribute(dataExclude, 'true');
            }, hideClose = function () {
                highlightClose.style.left = '-50px';
                highlightClose.style.top = '-50px';
            }, blackoutButton = (0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('a', 'Blackout'), highlightButton = (0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('a', 'Highlight'), previousElement;
            modal.className += ' fb-animate-toside';
            highlightClose.id = 'fb-highlight-close';
            highlightClose.addEventListener('click', function () {
                removeElement.parentNode.removeChild(removeElement);
                hideClose();
            }, false);
            document.body.appendChild(highlightClose);
            this.h2cCanvas.className = 'fb-canvas';
            document.body.appendChild(this.h2cCanvas);
            var buttonItem = [highlightButton, blackoutButton];
            this.dom.appendChild((0,_Core__WEBPACK_IMPORTED_MODULE_0__.element)('p', 'Highlight or blackout important information'));
            // add highlight and blackout buttons
            for (var i = 0; i < 2; i++) {
                buttonItem[i].className =
                    'fb-btn fb-btn-small ' + (i === 0 ? 'active' : 'fb-btn-inverse');
                buttonItem[i].href = '#';
                buttonItem[i].onclick = buttonClickFunction;
                this.dom.appendChild(buttonItem[i]);
                this.dom.appendChild(document.createTextNode(' '));
            }
            highlightContainer.id = 'fb-highlight-container';
            highlightContainer.style.width = this.h2cCanvas.width + 'px';
            highlightContainer.style.height = this.h2cCanvas.height + 'px';
            this.highlightBox.className += ' ' + feedbackHighlightElement;
            this.blackoutBox.id = 'fb-blackout-element';
            document.body.appendChild(this.highlightBox);
            highlightContainer.appendChild(this.blackoutBox);
            document.body.appendChild(highlightContainer);
            // bind mouse delegate events
            document.body.addEventListener('mousemove', this.mouseMoveEvent, false);
            document.body.addEventListener('click', this.mouseClickEvent, false);
        }
        else {
            // still loading html2canvas
            var args = arguments, $this = this;
            if (nextButton.disabled !== true) {
                this.dom.appendChild((0,_Core__WEBPACK_IMPORTED_MODULE_0__.loader)());
            }
            nextButton.disabled = true;
            window.setTimeout(function () {
                $this.start.apply($this, args);
            }, 500);
        }
    };
    Screenshot.prototype.render = function () {
        this.dom = document.createElement('div');
        // execute the html2canvas script
        var script, $this = this, options = this.options, runH2c = function () {
            try {
                options.onrendered =
                    options.onrendered ||
                        function (canvas) {
                            $this.h2cCanvas = canvas;
                            $this.h2cDone = true;
                        };
                window.html2canvas([document.body], options);
            }
            catch (e) {
                $this.h2cDone = true;
                (0,_Core__WEBPACK_IMPORTED_MODULE_0__.log)('Error in html2canvas: ' + e.message);
            }
        };
        if (window.html2canvas === undefined && script === undefined) {
            // let's load html2canvas library while user is writing message
            script = document.createElement('script');
            script.src = options.h2cPath || 'libs/html2canvas.js';
            script.onerror = function () {
                (0,_Core__WEBPACK_IMPORTED_MODULE_0__.log)('Failed to load html2canvas library, check that the path is correctly defined');
            };
            script.onload = (0,_Core__WEBPACK_IMPORTED_MODULE_0__.scriptLoader)(script, function () {
                if (window.html2canvas === undefined) {
                    (0,_Core__WEBPACK_IMPORTED_MODULE_0__.log)('Loaded html2canvas, but library not found');
                    return;
                }
                //(window as any).html2canvas.logging = window.Feedback.debug;
                runH2c();
            });
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        }
        else {
            // html2canvas already loaded, just run it then
            runH2c();
        }
        return this;
    };
    Screenshot.prototype.data = function () {
        //if (this._data !== undefined) {
        //  return this._data;
        //}
        if (this.h2cCanvas !== undefined) {
            var ctx = this.h2cCanvas.getContext('2d'), canvasCopy, copyCtx, radius = 5;
            ctx.fillStyle = '#000';
            // draw blackouts
            Array.prototype.slice
                .call(document.getElementsByClassName('fb-blackedout'), 0)
                .forEach(function (item) {
                var bounds = (0,_Core__WEBPACK_IMPORTED_MODULE_0__.getBounds)(item);
                ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            });
            // draw highlights
            var items = Array.prototype.slice.call(document.getElementsByClassName('fb-highlighted'), 0);
            if (items.length > 0) {
                // copy canvas
                canvasCopy = document.createElement('canvas');
                copyCtx = canvasCopy.getContext('2d');
                canvasCopy.width = this.h2cCanvas.width;
                canvasCopy.height = this.h2cCanvas.height;
                copyCtx.drawImage(this.h2cCanvas, 0, 0);
                ctx.fillStyle = '#777';
                ctx.globalAlpha = 0.5;
                ctx.fillRect(0, 0, this.h2cCanvas.width, this.h2cCanvas.height);
                ctx.beginPath();
                items.forEach(function (item) {
                    var x = parseInt(item.style.left, 10), y = parseInt(item.style.top, 10), width = parseInt(item.style.width, 10), height = parseInt(item.style.height, 10);
                    ctx.moveTo(x + radius, y);
                    ctx.lineTo(x + width - radius, y);
                    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                    ctx.lineTo(x + width, y + height - radius);
                    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                    ctx.lineTo(x + radius, y + height);
                    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                    ctx.lineTo(x, y + radius);
                    ctx.quadraticCurveTo(x, y, x + radius, y);
                });
                ctx.closePath();
                ctx.clip();
                ctx.globalAlpha = 1;
                ctx.drawImage(canvasCopy, 0, 0);
            }
            // to avoid security error break for tainted canvas
            try {
                // cache and return data
                return this.h2cCanvas.toDataURL();
            }
            catch (e) { }
        }
    };
    Screenshot.prototype.review = function (dom) {
        var data = this.data();
        if (data !== undefined) {
            var img = new Image();
            img.src = data;
            img.style.width = '300px';
            img.style.height = 'auto';
            dom.appendChild(img);
        }
    };
    return Screenshot;
}(_Page__WEBPACK_IMPORTED_MODULE_1__.Page));



/***/ }),

/***/ "./feedback.js/send/xhr.ts":
/*!*********************************!*\
  !*** ./feedback.js/send/xhr.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XHR": function() { return /* binding */ XHR; }
/* harmony export */ });
/* harmony import */ var _Send__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Send */ "./feedback.js/Send.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var XHR = /** @class */ (function (_super) {
    __extends(XHR, _super);
    function XHR(url) {
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.xhr = new XMLHttpRequest();
        return _this;
    }
    XHR.prototype.send = function (data, callback) {
        var _this = this;
        this.xhr.onreadystatechange = function () {
            if (_this.xhr.readyState == 4) {
                callback(_this.xhr.status === 200);
            }
        };
        this.xhr.open('POST', this.url, true);
        this.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        this.xhr.send('data=' + encodeURIComponent(window.JSON.stringify(data)));
    };
    return XHR;
}(_Send__WEBPACK_IMPORTED_MODULE_0__.Send));



/***/ }),

/***/ "./jquery-drawpad.ts":
/*!***************************!*\
  !*** ./jquery-drawpad.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
            defaultColor: '#f1c40f',
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
            color: defaults.defaultColor,
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
                var $colorbox = $("<div class=\"" + pluginSuffix + "-colorbox\" style=\"background-color:" + color + ";\">&nbsp;</div>");
                if (color === plugin.settings.defaultColor) {
                    $colorbox.addClass(activeClass);
                }
                $colorbox.on('click', function () {
                    $element.removeClass(pluginSuffix + "-erase-mode");
                    lineStyle.color = color;
                    // drawingType = 'pen';
                    $colorbox.addClass(activeClass).siblings().removeClass(activeClass);
                    logDrawingParams();
                });
                return $colorbox;
            };
            var createEraser = function () {
                var activeClass = pluginSuffix + "-colorbox-active";
                var $eraser = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-eraser\">&nbsp;</div>");
                $eraser.on('click', function () {
                    drawingType = 'eraser';
                    $element.addClass(pluginSuffix + "-erase-mode");
                    $eraser.addClass(activeClass).siblings().removeClass(activeClass);
                });
                return $eraser;
            };
            var createDrawingTool = function (tool) {
                var activeClass = pluginSuffix + "-drawing-type-active";
                var text = tool == 'pen' ? '&#x3030;' : '&#x25AD;';
                var title = tool == 'pen' ? 'Freehand' : 'Rectangle';
                var $drawingTool = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-drawing-tool\" title=\"" + title + "\">" + text + "</div>");
                if (drawingType === tool) {
                    $drawingTool.addClass(activeClass);
                }
                $drawingTool.on('click', function () {
                    drawingType = tool;
                    logDrawingParams();
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
                var $doneButton = $("<div class=\"" + pluginSuffix + "-colorbox " + pluginSuffix + "-done\" style=\"border-radius:0 2px 2px 0;\" title=\"Click here after done editing.\">&#x2714;</div>");
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
            var createHandleTool = function () {
                var activeClass = pluginSuffix + "-colorbox-active";
                var $dragHandle = $("<div class=\"" + pluginSuffix + "-colorbox\" title=\"Drag to move the toolbar\" style=\"cursor:move;border-radius:2px 0 0 2px;\">&#x2630;</div>");
                var active = false;
                var currentX;
                var currentY;
                var initialX;
                var initialY;
                var xOffset = 0;
                var yOffset = 0;
                $dragHandle.on('mousedown', function (e) {
                    initialX = e.clientX - xOffset;
                    initialY = e.clientY - yOffset;
                    active = true;
                    e.stopPropagation();
                    e.preventDefault();
                });
                $dragHandle.on('mouseup', function (e) {
                    initialX = currentX;
                    initialY = currentY;
                    active = false;
                    e.stopPropagation();
                    e.preventDefault();
                });
                $dragHandle.on('mousemove', function (e) {
                    if (active) {
                        e.preventDefault();
                        e.stopPropagation();
                        currentX = e.clientX - initialX;
                        currentY = e.clientY - initialY;
                        xOffset = currentX;
                        yOffset = currentY;
                        $dragHandle.get(0).parentElement.parentElement.style.transform =
                            'translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
                    }
                });
                return $dragHandle;
            };
            var $colors = $("<div class=\"" + pluginSuffix + "-colors\"></div>");
            $colors.append(createHandleTool());
            plugin.settings.colors.forEach(function (color) {
                $colors.append(createColorbox(color));
            });
            // $colors.append(createEraser()); //dont really need it
            // $colors.append(createScreenCapture());
            $colors.append(createDrawingTool('pen'));
            $colors.append(createDrawingTool('rectangle'));
            $colors.append(createDoneButton());
            $toolbox.append($colors);
            return $toolbox;
        };
        var logDrawingParams = function () {
            console.log(drawingType, lineStyle, drawing);
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
            if (drawingType == 'rectangle' && prevWidth != 0) {
                plugin.context.lineWidth = lineStyle.width;
                plugin.context.strokeStyle = lineStyle.color;
                plugin.context.strokeRect(prevStartX, prevStartY, prevWidth, prevHeight);
                //reset
                prevWidth = 0;
                prevHeight = 0;
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
                // octx.globalCompositeOperation = 'source-over';
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
                            plugin.overlayCanvas.width = plugin.canvas.width;
                            plugin.overlayCanvas.height = plugin.canvas.height;
                            plugin.overlayCanvas.setAttribute('style', "width:" + plugin.canvas.width + "px;height:" + plugin.canvas.height + "px");
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedback_js_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.js/Core */ "./feedback.js/Core.ts");
/* harmony import */ var _feedback_js_SaveResultsAdaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.js/SaveResultsAdaptor */ "./feedback.js/SaveResultsAdaptor.ts");
/* harmony import */ var _media_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-utilities */ "./media-utilities.ts");
/* harmony import */ var _surveys_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./surveys.service */ "./surveys.service.ts");
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
    var feedbackDialog;
    $.feedback = function (element, options) {
        var _this = this;
        var plugin = this;
        var $element = $(element);
        var defaults = {
            url: 'https://aa-nps-admin-gw-apim.azure-api.net/graphql',
            assetsUrl: 'https://aanpsadminui.z13.web.core.windows.net'
        };
        plugin.settings = {};
        /* private methods */
        var initialize = function () {
            surveyservice = new _surveys_service__WEBPACK_IMPORTED_MODULE_3__.SurveysService({
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
                var comments, data, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            comments = jQuery('.feedback-comments').eq(0).val();
                            if (comments.length == 0) {
                                jQuery('.feedback-comments').addClass('feedback-error');
                                return [2 /*return*/];
                            }
                            data = {
                                comments: jQuery('.feedback-comments').eq(0).val(),
                                employee_name: jQuery('.feedback-name').eq(0).val(),
                                employee_email: jQuery('.feedback-email').eq(0).val(),
                                screen_shot: plugin.getBytes()
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, surveyservice.postUserFeedback(data)];
                        case 2:
                            _a.sent();
                            jQuery('.feedback-modal').removeClass('large');
                            /*jQuery('.feedback-body')
                            .eq(0)
                            .html(
                              '<h3>Thank you for your feedback.we will contact you if we need more information</h3>'
                            );*/
                            jQuery('.feedback-body > div > h3').show().siblings().hide();
                            jQuery('.feedback-btn').hide();
                            jQuery('.feedback-btn.close-btn').show();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            console.log(err_1);
                            alert('There was an error sending your feedback to the server.');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
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
                            return [4 /*yield*/, (0,_media_utilities__WEBPACK_IMPORTED_MODULE_2__.takeScreenshotJpegBlob)()];
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
        var initializeClassicVersion = function () {
            feedbackDialog = new _feedback_js_Core__WEBPACK_IMPORTED_MODULE_0__.Feedback({
                h2cPath: plugin.settings.assetsUrl + "/assets/html2canvas.js",
                appendTo: null,
                adapter: new _feedback_js_SaveResultsAdaptor__WEBPACK_IMPORTED_MODULE_1__.SaveResultsAdapter(plugin.settings)
            });
        };
        /* public methods */
        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);
            plugin.displayMediaSupported = (0,_media_utilities__WEBPACK_IMPORTED_MODULE_2__.IsDisplayMediaSupported)();
            plugin.displayMediaSupported = false; //to test in chrome
            if (plugin.displayMediaSupported) {
                initialize();
            }
            else {
                initializeClassicVersion();
            }
            return plugin;
        };
        plugin.show = function () {
            if (plugin.displayMediaSupported) {
                jQuery('.feedback-glass').show();
                jQuery('.feedback-modal').show();
                jQuery('.feedback-btn.close-btn').hide();
                jQuery('.feedback-btn.continue-btn').show();
                jQuery('.feedback-comments').eq(0).val('');
                jQuery('.feedback-screenshot').eq(0).html('<canvas></canvas>');
                jQuery('.feedback-body > div > h3').hide().siblings().show();
            }
            else {
                feedbackDialog.open();
            }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsDisplayMediaSupported": function() { return /* binding */ IsDisplayMediaSupported; },
/* harmony export */   "getDisplayMedia": function() { return /* binding */ getDisplayMedia; },
/* harmony export */   "getUserMedia": function() { return /* binding */ getUserMedia; },
/* harmony export */   "takeScreenshotStream": function() { return /* binding */ takeScreenshotStream; },
/* harmony export */   "takeScreenshotCanvas": function() { return /* binding */ takeScreenshotCanvas; },
/* harmony export */   "getJpegBlob": function() { return /* binding */ getJpegBlob; },
/* harmony export */   "getJpegBytes": function() { return /* binding */ getJpegBytes; },
/* harmony export */   "takeScreenshotJpegBlob": function() { return /* binding */ takeScreenshotJpegBlob; },
/* harmony export */   "takeScreenshotJpegBytes": function() { return /* binding */ takeScreenshotJpegBytes; },
/* harmony export */   "blobToCanvas": function() { return /* binding */ blobToCanvas; }
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
var IsDisplayMediaSupported = function () {
    var nav = navigator;
    if (nav.mediaDevices && nav.mediaDevices.getDisplayMedia) {
        return true;
    }
    if (nav.getDisplayMedia) {
        return true;
    }
    if (nav.webkitGetDisplayMedia) {
        return true;
    }
    if (nav.mozGetDisplayMedia) {
        return true;
    }
    return false;
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
        if (canvas.toBlob) {
            canvas.toBlob(function (blob) { return resolve(blob); }, 'image/jpeg', 0.95);
        }
        else {
            //canvas[''].msToBlob((blob) => resolve(blob), 'image/jpeg', 0.95);
            var blob = canvas.msToBlob(); //IE Fix
            resolve(blob);
        }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveysService": function() { return /* binding */ SurveysService; }
/* harmony export */ });
/* harmony import */ var _survey_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey.html */ "./survey.html");
/* harmony import */ var _survey_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_survey_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _survey_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey.css */ "./survey.css");
/* harmony import */ var survey_jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-jquery */ "survey-jquery");
/* harmony import */ var survey_jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie.service */ "./cookie.service.ts");
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
            var smsession = (0,_cookie_service__WEBPACK_IMPORTED_MODULE_3__.getSMSession)();
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
            var smsession = (0,_cookie_service__WEBPACK_IMPORTED_MODULE_3__.getSMSession)();
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
            temporary.innerHTML = (_survey_html__WEBPACK_IMPORTED_MODULE_0___default());
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
            survey_jquery__WEBPACK_IMPORTED_MODULE_2__.StylesManager.applyTheme('bootstrap');
            survey_jquery__WEBPACK_IMPORTED_MODULE_2__.defaultBootstrapCss.navigationButton = 'btn btn-success';
            survey_jquery__WEBPACK_IMPORTED_MODULE_2__.surveyStrings.emptySurvey =
                'There is no survey active at the moment.';
            //config.title || surveyDefinition.title || 'Feedback?';
            surveyDefinition.title = 'Feedback?';
            _this.aa_survey = new survey_jquery__WEBPACK_IMPORTED_MODULE_2__.Model(surveyDefinition);
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
/***/ (function(module) {

"use strict";
module.exports = jQuery;

/***/ }),

/***/ "survey-jquery":
/*!*************************************!*\
  !*** external "window[\"Survey\"]" ***!
  \*************************************/
/***/ (function(module) {

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL3N1cnZleS5jc3MiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9zdXJ2ZXkuaHRtbCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL3N1cnZleS5jc3M/OWY5OCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL2Nvb2tpZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vZmVlZGJhY2suanMvQ29yZS50cyIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL2ZlZWRiYWNrLmpzL1BhZ2UudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9mZWVkYmFjay5qcy9TYXZlUmVzdWx0c0FkYXB0b3IudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9mZWVkYmFjay5qcy9TZW5kLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vZmVlZGJhY2suanMvcGFnZXMvRm9ybS50cyIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL2ZlZWRiYWNrLmpzL3BhZ2VzL1Jldmlldy50cyIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL2ZlZWRiYWNrLmpzL3BhZ2VzL1NjcmVlbnNob3QudHMiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvLi9mZWVkYmFjay5qcy9zZW5kL3hoci50cyIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC8uL2pxdWVyeS1kcmF3cGFkLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vanF1ZXJ5LWZlZWRiYWNrLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vanF1ZXJ5LXN1cnZleXMtcGx1Z2luLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vbWVkaWEtdXRpbGl0aWVzLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkLy4vc3VydmV5cy5zZXJ2aWNlLnRzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvZXh0ZXJuYWwgXCJ3aW5kb3dbXFxcIlN1cnZleVxcXCJdXCIiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pxdWVyeS1kcmF3cGFkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanF1ZXJ5LWRyYXdwYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcXVlcnktZHJhd3BhZC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDcUg7QUFDN0I7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9EQUFvRCxrQkFBa0IsS0FBSywyR0FBMkcsNkJBQTZCLEtBQUssY0FBYyw2QkFBNkIseUJBQXlCLEtBQUssNkJBQTZCLCtCQUErQixpREFBaUQsS0FBSywyQkFBMkIs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QUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsTUFBTSxTQUFTLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFNBQVMsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLE9BQU8sTUFBTSxPQUFPLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsWUFBWSxZQUFZLGNBQWMsYUFBYSxjQUFjLGFBQWEsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxPQUFPLE1BQU0sT0FBTyxXQUFXLFlBQVksYUFBYSxNQUFNLFNBQVMsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sU0FBUyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxPQUFPLE1BQU0sT0FBTyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxZQUFZLFlBQVksY0FBYyxhQUFhLGNBQWMsYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxL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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hYV9pdGVtIHtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4vKiBcXHJcXG5cXHRjbmJpbGdpbiBcXHJcXG5cXHRodHRwczovL2dpdGh1Yi5jb20vY25iaWxnaW4vanF1ZXJ5LWRyYXdwYWRcXHJcXG5cXHR2IDAuMVxcclxcbiovXFxyXFxuXFxyXFxuLmRyYXdwYWQgKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uZHJhd3BhZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZHJhd3BhZC5kcmF3cGFkLWRhc2hlZCB7XFxyXFxuICBib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxufVxcclxcblxcclxcbi5kcmF3cGFkID4gY2FudmFzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC10b29sYm94IHtcXHJcXG4gIHdpZHRoOiAyNzdweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAyN3B4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG9wYWNpdHk6IDAuMztcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC10b29sYm94OmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLWNvbG9ycyB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveCB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQuZHJhd3BhZC1kcmF3aW5nIC5kcmF3cGFkLWNvbG9ycyB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveDpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6YWN0aXZlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1lcmFzZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveC5kcmF3cGFkLWNvbG9yYm94LWFjdGl2ZSxcXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcmJveC5kcmF3cGFkLWRyYXdpbmctdHlwZS1hY3RpdmUge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkZlZWRiYWNrIFN5bGVzKi9cXHJcXG4vKlxcclxcbiAqIEJvb3RzdHJhcCB2Mi4wLjRcXHJcXG4gKlxcclxcbiAqIENvcHlyaWdodCAyMDEyIFR3aXR0ZXIsIEluY1xcclxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wXFxyXFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxyXFxuICpcXHJcXG4gKiBEZXNpZ25lZCBhbmQgYnVpbHQgd2l0aCBhbGwgdGhlIGxvdmUgaW4gdGhlIHdvcmxkIEB0d2l0dGVyIGJ5IEBtZG8gYW5kIEBmYXQuXFxyXFxuKi9cXHJcXG5cXHJcXG4uZmVlZGJhY2stcmV2aWV3IGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWluZm8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICBsZWZ0OiAzMCU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSAuZmVlZGJhY2stZXJyb3Ige1xcclxcbiAgY29sb3I6ICNiOTRhNDg7XFxyXFxuICBib3JkZXItY29sb3I6ICNiOTRhNDg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYm9keSAuZmVlZGJhY2stZXJyb3I6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjOTUzYjM5O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkNTkzOTI7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvZHkgcCBhIHtcXHJcXG4gIGNvbG9yOiAjMDA4OGNjO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYm9keSBwIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDU1ODA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLW1vZGFsIGgzIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1tb2RhbCB7XFxyXFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDIwNTA7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgd2lkdGg6IDU2MHB4O1xcclxcbiAgbWFyZ2luOiAtMjUwcHggMCAwIC0yODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgKmJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICAvKiBJRTYtNyAqL1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG59XFxyXFxuLmZlZWRiYWNrLW1vZGFsLmxhcmdlIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICB6LWluZGV4OiAyMDUwO1xcclxcbiAgbWF4LWhlaWdodDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbW9kYWwubGFyZ2UgLmZlZWRiYWNrLWJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBoZWlnaHQ6IDcwMHB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbW9kYWwgLmZlZWRiYWNrLWJvZHkgLmZlZWRiYWNrLXNjcmVlbnNob3Qge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRibHVlO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stc2NyZWVuc2hvdCBjYW52YXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stbW9kYWwgLmZlZWRiYWNrLWNsb3NlIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIHRvcDogMTAlO1xcclxcbiAgbGVmdDogMTAlO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxyXFxufVxcclxcbi5mZWVkYmFjay1tb2RhbCAuZmVlZGJhY2stY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDRweCAxMHB4IDRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcXHJcXG4gICAgbGluZWFyLFxcclxcbiAgICAwIDAsXFxyXFxuICAgIDAgMTAwJSxcXHJcXG4gICAgZnJvbSgjZmZmZmZmKSxcXHJcXG4gICAgdG8oI2U2ZTZlNilcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXHJcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2U2ZTZlNicsIEdyYWRpZW50VHlwZT0wKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2U2ZTZlNiAjZTZlNmU2ICNiZmJmYmY7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JiYjtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG4gICptYXJnaW4tbGVmdDogMC4zZW07XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46aG92ZXIsXFxyXFxuLmZlZWRiYWNrLWJ0bjphY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi5hY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi5kaXNhYmxlZCxcXHJcXG4uZmVlZGJhY2stYnRuW2Rpc2FibGVkXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjIFxcXFw5O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmZpcnN0LWNoaWxkIHtcXHJcXG4gICptYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNXB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCAjMzMzO1xcclxcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4uYWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDkgXFxcXDk7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLmRpc2FibGVkLFxcclxcbi5mZWVkYmFjay1idG5bZGlzYWJsZWRdIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbiAgb3BhY2l0eTogMC42NTtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT02NSk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuLXNtYWxsIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA5cHg7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi1zbWFsbCBbY2xhc3NePSdpY29uLSddIHtcXHJcXG4gIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZSxcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2U6aG92ZXIge1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcXHJcXG4gICAgbGluZWFyLFxcclxcbiAgICAwIDAsXFxyXFxuICAgIDAgMTAwJSxcXHJcXG4gICAgZnJvbSgjNDU0NTQ1KSxcXHJcXG4gICAgdG8oIzI2MjYyNilcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXHJcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyM0NTQ1NDUnLCBlbmRDb2xvcnN0cj0nIzI2MjYyNicsIEdyYWRpZW50VHlwZT0wKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzI2MjYyNiAjMjYyNjI2ICMwMDAwMDA7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZTpob3ZlcixcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2U6YWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZS5hY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlLmRpc2FibGVkLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZVtkaXNhYmxlZF0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlOmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzBjMGMgXFxcXDk7XFxyXFxufVxcclxcbmJ1dHRvbi5mZWVkYmFjay1idG4sXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10uZmVlZGJhY2stYnRuIHtcXHJcXG4gICpwYWRkaW5nLXRvcDogMnB4O1xcclxcbiAgKnBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxufVxcclxcbmJ1dHRvbi5mZWVkYmFjay1idG46Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10uZmVlZGJhY2stYnRuOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcbmJ1dHRvbi5mZWVkYmFjay1idG4ubGFyZ2UsXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10uZmVlZGJhY2stYnRuLmxhcmdlIHtcXHJcXG4gICpwYWRkaW5nLXRvcDogN3B4O1xcclxcbiAgKnBhZGRpbmctYm90dG9tOiA3cHg7XFxyXFxufVxcclxcbmJ1dHRvbi5mZWVkYmFjay1idG4uc21hbGwsXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10uZmVlZGJhY2stYnRuLnNtYWxsIHtcXHJcXG4gICpwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgKnBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4gLmNhcmV0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDdweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmhvdmVyIC5jYXJldCxcXHJcXG4ub3Blbi5idG4tZ3JvdXAgLmNhcmV0IHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlIC5jYXJldCB7XFxyXFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03NSk7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4tc21hbGwgLmNhcmV0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvdHRvbS1yaWdodCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogOXB4IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWhlYWRlciAuZmVlZGJhY2stY2xvc2Uge1xcclxcbiAgbWFyZ2luLXRvcDogMnB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYm9keSB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAzODBweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJvZHkgLm1vZGFsLWZvcm0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvZHkgdGV4dGFyZWEge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDUyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICM1NTU1NTU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW1zLXRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcXHJcXG4gIC1vLXRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvZHkgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDgyLCAxNjgsIDIzNiwgMC44KTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLFxcclxcbiAgICAwIDAgOHB4IHJnYmEoODIsIDE2OCwgMjM2LCAwLjYpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXFxyXFxuICAgIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXFxyXFxuICAgIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQgXFxcXDk7XFxyXFxuICAvKiBJRTYtOSAqL1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNHB4IDE1cHggMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgI2ZmZmZmZjtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgKnpvb206IDE7XFxyXFxufVxcclxcbi5mZWVkYmFjay1mb290ZXI6YmVmb3JlLFxcclxcbi5mZWVkYmFjay1mb290ZXI6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogdGFibGU7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWZvb3RlcjphZnRlciB7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWZvb3RlciAuZmVlZGJhY2stYnRuIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stZ2xhc3Mge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICM3Nzc7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICAtbXMtZmlsdGVyOiAncHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NTApJztcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1jYW52YXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDM5OTk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWNhbnZhcyBjYW52YXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlZGJhY2stYmxhY2tvdXQtZWxlbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2staGlnaGxpZ2h0LWVsZW1lbnQsXFxyXFxuLmZlZWRiYWNrLWhpZ2hsaWdodGVkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHllbGxvdztcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1oaWdobGlnaHQtZWxlbWVudCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWRiYWNrLWhpZ2hsaWdodC1jbG9zZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDIwMDE7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggIzYxNWU1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNjE1ZTVlO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgbGVmdCB0b3AsXFxyXFxuICAgIGxlZnQgYm90dG9tLFxcclxcbiAgICBmcm9tKCNjNWM1YzUpLFxcclxcbiAgICB0bygjOTk5OTk5KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJsYWNrZWRvdXQge1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxufVxcclxcblxcclxcbiNmZWVkYmFjay1oaWdobGlnaHQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDIwMTA7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1hbmltYXRlLXRvc2lkZSB7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBsZWZ0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWFuaW1hdGUtcmV2aWV3IHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuXFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG5cXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1jYW52YXMtY29tcGxldGUge1xcclxcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvZHkgY2FudmFzIHtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzYzNjM2MztcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCAjNjE1ZTVlO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCAjNjE1ZTVlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnJvd3NlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1sb2FkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbG9hZGVyIHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmVlZGJhY2stbG9hZGVyIDAuOXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgLW1vei1hbmltYXRpb246IGZlZWRiYWNrLWxvYWRlciAwLjlzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWxvYWRlciBzcGFuOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuM3M7XFxyXFxufVxcclxcbi5mZWVkYmFjay1sb2FkZXIgc3BhbjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcXHJcXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmVlZGJhY2stbG9hZGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMXB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQC1tb3ota2V5ZnJhbWVzIGZlZWRiYWNrLWxvYWRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjFweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qRmVlZGJhY2sgTGVnYWN5IFN0eWxlcyovXFxyXFxuLmZiLXJldmlldyBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5mYi1ib2R5IC5mYi1lcnJvciB7XFxyXFxuICBjb2xvcjogI2I5NGE0ODtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2I5NGE0ODtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxufVxcclxcblxcclxcbi5mYi1ib2R5IC5mYi1lcnJvcjpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6ICM5NTNiMzk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm9keSBwIGEge1xcclxcbiAgY29sb3I6ICMwMDg4Y2M7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbi5mYi1ib2R5IHAgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwNTU4MDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItbW9kYWwgaDMge1xcclxcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLW1vZGFsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgei1pbmRleDogMjA1MDtcXHJcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB3aWR0aDogNTYwcHg7XFxyXFxuICBtYXJnaW46IC0yNTBweCAwIDAgLTI4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAqYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG4gIC8qIElFNi03ICovXFxyXFxuXFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuXFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItbW9kYWwgLmZiLWNsb3NlIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xcclxcbn1cXHJcXG4uZmItbW9kYWwgLmZiLWNsb3NlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA0cHggMTBweCA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgMCAwLFxcclxcbiAgICAwIDEwMCUsXFxyXFxuICAgIGZyb20oI2ZmZmZmZiksXFxyXFxuICAgIHRvKCNlNmU2ZTYpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlNmU2ZTYnLCBHcmFkaWVudFR5cGU9MCk7XFxyXFxuICBib3JkZXItY29sb3I6ICNlNmU2ZTYgI2U2ZTZlNiAjYmZiZmJmO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiYmI7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XFxyXFxuICAqbWFyZ2luLWxlZnQ6IDAuM2VtO1xcclxcbn1cXHJcXG4uZmItYnRuOmhvdmVyLFxcclxcbi5mYi1idG46YWN0aXZlLFxcclxcbi5mYi1idG4uYWN0aXZlLFxcclxcbi5mYi1idG4uZGlzYWJsZWQsXFxyXFxuLmZiLWJ0bltkaXNhYmxlZF0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG59XFxyXFxuLmZiLWJ0bjphY3RpdmUsXFxyXFxuLmZiLWJ0bi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYyBcXFxcOTtcXHJcXG59XFxyXFxuLmZiLWJ0bjpmaXJzdC1jaGlsZCB7XFxyXFxuICAqbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcbi5mYi1idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTVweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxufVxcclxcbi5mYi1idG46Zm9jdXMge1xcclxcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQgIzMzMztcXHJcXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbn1cXHJcXG4uZmItYnRuLmFjdGl2ZSxcXHJcXG4uZmItYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5IFxcXFw5O1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuLmZiLWJ0bi5kaXNhYmxlZCxcXHJcXG4uZmItYnRuW2Rpc2FibGVkXSB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gIG9wYWNpdHk6IDAuNjU7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJ0bi1zbWFsbCB7XFxyXFxuICBwYWRkaW5nOiA1cHggOXB4O1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcbi5mYi1idG4tc21hbGwgW2NsYXNzXj0naWNvbi0nXSB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYnRuLWludmVyc2UsXFxyXFxuLmZiLWJ0bi1pbnZlcnNlOmhvdmVyIHtcXHJcXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5mYi1idG4taW52ZXJzZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgMCAwLFxcclxcbiAgICAwIDEwMCUsXFxyXFxuICAgIGZyb20oIzQ1NDU0NSksXFxyXFxuICAgIHRvKCMyNjI2MjYpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjNDU0NTQ1JywgZW5kQ29sb3JzdHI9JyMyNjI2MjYnLCBHcmFkaWVudFR5cGU9MCk7XFxyXFxuICBib3JkZXItY29sb3I6ICMyNjI2MjYgIzI2MjYyNiAjMDAwMDAwO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbn1cXHJcXG4uZmItYnRuLWludmVyc2U6aG92ZXIsXFxyXFxuLmZiLWJ0bi1pbnZlcnNlOmFjdGl2ZSxcXHJcXG4uZmItYnRuLWludmVyc2UuYWN0aXZlLFxcclxcbi5mYi1idG4taW52ZXJzZS5kaXNhYmxlZCxcXHJcXG4uZmItYnRuLWludmVyc2VbZGlzYWJsZWRdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxyXFxufVxcclxcbi5mYi1idG4taW52ZXJzZTphY3RpdmUsXFxyXFxuLmZiLWJ0bi1pbnZlcnNlLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwYzBjIFxcXFw5O1xcclxcbn1cXHJcXG5idXR0b24uZmItYnRuLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZiLWJ0biB7XFxyXFxuICAqcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICpwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5idXR0b24uZmItYnRuOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZiLWJ0bjo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5idXR0b24uZmItYnRuLmxhcmdlLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZiLWJ0bi5sYXJnZSB7XFxyXFxuICAqcGFkZGluZy10b3A6IDdweDtcXHJcXG4gICpwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5idXR0b24uZmItYnRuLnNtYWxsLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZiLWJ0bi5zbWFsbCB7XFxyXFxuICAqcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICpwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYnRuIC5jYXJldCB7XFxyXFxuICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuLmZiLWJ0bjpob3ZlciAuY2FyZXQsXFxyXFxuLm9wZW4uYnRuLWdyb3VwIC5jYXJldCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XFxyXFxufVxcclxcblxcclxcbi5mYi1idG4taW52ZXJzZSAuY2FyZXQge1xcclxcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzUpO1xcclxcbn1cXHJcXG4uZmItYnRuLXNtYWxsIC5jYXJldCB7XFxyXFxuICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mYi1ib3R0b20tcmlnaHQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDlweCAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxyXFxufVxcclxcbi5mYi1oZWFkZXIgLmZiLWNsb3NlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuLmZiLWJvZHkge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcbi5mYi1ib2R5IC5tb2RhbC1mb3JtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mYi1ib2R5IHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA1MjBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGNvbG9yOiAjNTU1NTU1O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5mYi1ib2R5IHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSg4MiwgMTY4LCAyMzYsIDAuOCk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLFxcclxcbiAgICAwIDAgOHB4IHJnYmEoODIsIDE2OCwgMjM2LCAwLjYpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLFxcclxcbiAgICAwIDAgOHB4IHJnYmEoODIsIDE2OCwgMjM2LCAwLjYpO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkIFxcXFw5O1xcclxcbiAgLyogSUU2LTkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmZiLWZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTRweCAxNXB4IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgI2ZmZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgI2ZmZmZmZjtcXHJcXG4gICp6b29tOiAxO1xcclxcbn1cXHJcXG4uZmItZm9vdGVyOmJlZm9yZSxcXHJcXG4uZmItZm9vdGVyOmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxufVxcclxcbi5mYi1mb290ZXI6YWZ0ZXIge1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcbi5mYi1mb290ZXIgLmZiLWJ0biB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWdsYXNzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzc3O1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgLW1zLWZpbHRlcjogJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTUwKSc7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItY2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDE5OTk7XFxyXFxufVxcclxcblxcclxcbiNmYi1ibGFja291dC1lbGVtZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5mYi1oaWdobGlnaHQtZWxlbWVudCxcXHJcXG4uZmItaGlnaGxpZ2h0ZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggeWVsbG93O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWhpZ2hsaWdodC1lbGVtZW50IHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZmItaGlnaGxpZ2h0LWNsb3NlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcclxcblxcclxcbiAgei1pbmRleDogMjAwMTtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNjE1ZTVlO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICM2MTVlNWU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChcXHJcXG4gICAgbGluZWFyLFxcclxcbiAgICBsZWZ0IHRvcCxcXHJcXG4gICAgbGVmdCBib3R0b20sXFxyXFxuICAgIGZyb20oI2M1YzVjNSksXFxyXFxuICAgIHRvKCM5OTk5OTkpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYmxhY2tlZG91dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZiLWhpZ2hsaWdodC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgei1pbmRleDogMjAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWFuaW1hdGUtdG9zaWRlIHtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYW5pbWF0ZS1yZXZpZXcge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG5cXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcblxcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWNhbnZhcy1jb21wbGV0ZSB7XFxyXFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm9keSBjYW52YXMge1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjM2MzYzO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4ICM2MTVlNWU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4ICM2MTVlNWU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5mYi1icm93c2VyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWxvYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mYi1sb2FkZXIgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmZWVkYmFjay1sb2FkZXIgMC45cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogZmVlZGJhY2stbG9hZGVyIDAuOXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG4uZmItbG9hZGVyIHNwYW46bnRoLW9mLXR5cGUoMikge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XFxyXFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4zcztcXHJcXG59XFxyXFxuLmZiLWxvYWRlciBzcGFuOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N1cnZleS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7OztDQUlDOztBQUVEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVB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O0VBQzFELHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWFfaXRlbSB7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLyogXFxyXFxuXFx0Y25iaWxnaW4gXFxyXFxuXFx0aHR0cHM6Ly9naXRodWIuY29tL2NuYmlsZ2luL2pxdWVyeS1kcmF3cGFkXFxyXFxuXFx0diAwLjFcXHJcXG4qL1xcclxcblxcclxcbi5kcmF3cGFkICoge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmRyYXdwYWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmRyYXdwYWQuZHJhd3BhZC1kYXNoZWQge1xcclxcbiAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhd3BhZCA+IGNhbnZhcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtdG9vbGJveCB7XFxyXFxuICB3aWR0aDogMjc3cHg7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMjdweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtdG9vbGJveDpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhd3BhZCAuZHJhd3BhZC1jb2xvcnMge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3gge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5kcmF3cGFkLmRyYXdwYWQtZHJhd2luZyAuZHJhd3BhZC1jb2xvcnMge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLWNvbG9yYm94Omxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3g6aG92ZXIge1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XFxyXFxufVxcclxcbi5kcmF3cGFkIC5kcmF3cGFkLWNvbG9yYm94OmFjdGl2ZSB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtZXJhc2VyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3guZHJhd3BhZC1jb2xvcmJveC1hY3RpdmUsXFxyXFxuLmRyYXdwYWQgLmRyYXdwYWQtY29sb3Jib3guZHJhd3BhZC1kcmF3aW5nLXR5cGUtYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLypGZWVkYmFjayBTeWxlcyovXFxyXFxuLypcXHJcXG4gKiBCb290c3RyYXAgdjIuMC40XFxyXFxuICpcXHJcXG4gKiBDb3B5cmlnaHQgMjAxMiBUd2l0dGVyLCBJbmNcXHJcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UgdjIuMFxcclxcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcclxcbiAqXFxyXFxuICogRGVzaWduZWQgYW5kIGJ1aWx0IHdpdGggYWxsIHRoZSBsb3ZlIGluIHRoZSB3b3JsZCBAdHdpdHRlciBieSBAbWRvIGFuZCBAZmF0LlxcclxcbiovXFxyXFxuXFxyXFxuLmZlZWRiYWNrLXJldmlldyBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1pbmZvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgbGVmdDogMzAlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvZHkgLmZlZWRiYWNrLWVycm9yIHtcXHJcXG4gIGNvbG9yOiAjYjk0YTQ4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjYjk0YTQ4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJvZHkgLmZlZWRiYWNrLWVycm9yOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzk1M2IzOTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkNTkzOTI7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDZweCAjZDU5MzkyO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkNTkzOTI7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IHAgYSB7XFxyXFxuICBjb2xvcjogIzAwODhjYztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJvZHkgcCBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDA1NTgwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1tb2RhbCBoMyB7XFxyXFxuICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stbW9kYWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB6LWluZGV4OiAyMDUwO1xcclxcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHdpZHRoOiA1NjBweDtcXHJcXG4gIG1hcmdpbjogLTI1MHB4IDAgMCAtMjgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICpib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcbiAgLyogSUU2LTcgKi9cXHJcXG5cXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG5cXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxufVxcclxcbi5mZWVkYmFjay1tb2RhbC5sYXJnZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgei1pbmRleDogMjA1MDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEyMDBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLW1vZGFsLmxhcmdlIC5mZWVkYmFjay1ib2R5IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiA3MDBweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLW1vZGFsIC5mZWVkYmFjay1ib2R5IC5mZWVkYmFjay1zY3JlZW5zaG90IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLXNjcmVlbnNob3QgY2FudmFzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0OCwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLW1vZGFsIC5mZWVkYmFjay1jbG9zZSB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIGxlZnQ6IDEwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjI7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbW9kYWwgLmZlZWRiYWNrLWNsb3NlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA0cHggMTBweCA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgMCAwLFxcclxcbiAgICAwIDEwMCUsXFxyXFxuICAgIGZyb20oI2ZmZmZmZiksXFxyXFxuICAgIHRvKCNlNmU2ZTYpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlNmU2ZTYnLCBHcmFkaWVudFR5cGU9MCk7XFxyXFxuICBib3JkZXItY29sb3I6ICNlNmU2ZTYgI2U2ZTZlNiAjYmZiZmJmO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiYmI7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSk7XFxyXFxuICAqbWFyZ2luLWxlZnQ6IDAuM2VtO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuOmhvdmVyLFxcclxcbi5mZWVkYmFjay1idG46YWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4uYWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4uZGlzYWJsZWQsXFxyXFxuLmZlZWRiYWNrLWJ0bltkaXNhYmxlZF0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjphY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYyBcXFxcOTtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjpmaXJzdC1jaGlsZCB7XFxyXFxuICAqbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTVweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG46Zm9jdXMge1xcclxcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQgIzMzMztcXHJcXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxcclxcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5IFxcXFw5O1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bi5kaXNhYmxlZCxcXHJcXG4uZmVlZGJhY2stYnRuW2Rpc2FibGVkXSB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gIG9wYWNpdHk6IDAuNjU7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJ0bi1zbWFsbCB7XFxyXFxuICBwYWRkaW5nOiA1cHggOXB4O1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4tc21hbGwgW2NsYXNzXj0naWNvbi0nXSB7XFxyXFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlOmhvdmVyIHtcXHJcXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgMCAwLFxcclxcbiAgICAwIDEwMCUsXFxyXFxuICAgIGZyb20oIzQ1NDU0NSksXFxyXFxuICAgIHRvKCMyNjI2MjYpXFxyXFxuICApO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjNDU0NTQ1JywgZW5kQ29sb3JzdHI9JyMyNjI2MjYnLCBHcmFkaWVudFR5cGU9MCk7XFxyXFxuICBib3JkZXItY29sb3I6ICMyNjI2MjYgIzI2MjYyNiAjMDAwMDAwO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2U6aG92ZXIsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlOmFjdGl2ZSxcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2UuYWN0aXZlLFxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZS5kaXNhYmxlZCxcXHJcXG4uZmVlZGJhY2stYnRuLWludmVyc2VbZGlzYWJsZWRdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxyXFxufVxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZTphY3RpdmUsXFxyXFxuLmZlZWRiYWNrLWJ0bi1pbnZlcnNlLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwYzBjIFxcXFw5O1xcclxcbn1cXHJcXG5idXR0b24uZmVlZGJhY2stYnRuLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZlZWRiYWNrLWJ0biB7XFxyXFxuICAqcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICpwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5idXR0b24uZmVlZGJhY2stYnRuOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZlZWRiYWNrLWJ0bjo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5idXR0b24uZmVlZGJhY2stYnRuLmxhcmdlLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZlZWRiYWNrLWJ0bi5sYXJnZSB7XFxyXFxuICAqcGFkZGluZy10b3A6IDdweDtcXHJcXG4gICpwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5idXR0b24uZmVlZGJhY2stYnRuLnNtYWxsLFxcclxcbmlucHV0W3R5cGU9J3N1Ym1pdCddLmZlZWRiYWNrLWJ0bi5zbWFsbCB7XFxyXFxuICAqcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICpwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYnRuIC5jYXJldCB7XFxyXFxuICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJ0bjpob3ZlciAuY2FyZXQsXFxyXFxuLm9wZW4uYnRuLWdyb3VwIC5jYXJldCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1idG4taW52ZXJzZSAuY2FyZXQge1xcclxcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzUpO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stYnRuLXNtYWxsIC5jYXJldCB7XFxyXFxuICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib3R0b20tcmlnaHQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2staGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDlweCAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1oZWFkZXIgLmZlZWRiYWNrLWNsb3NlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWJvZHkge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGhlaWdodDogMzgwcHg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1ib2R5IC5tb2RhbC1mb3JtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA1MjBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIGNvbG9yOiAjNTU1NTU1O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlciBsaW5lYXIgMC4ycywgYm94LXNoYWRvdyBsaW5lYXIgMC4ycztcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSg4MiwgMTY4LCAyMzYsIDAuOCk7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLFxcclxcbiAgICAwIDAgOHB4IHJnYmEoODIsIDE2OCwgMjM2LCAwLjYpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLFxcclxcbiAgICAwIDAgOHB4IHJnYmEoODIsIDE2OCwgMjM2LCAwLjYpO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkIFxcXFw5O1xcclxcbiAgLyogSUU2LTkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiA1cHggMTRweCAxNXB4IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgI2ZmZmZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgI2ZmZmZmZjtcXHJcXG4gICp6b29tOiAxO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stZm9vdGVyOmJlZm9yZSxcXHJcXG4uZmVlZGJhY2stZm9vdGVyOmFmdGVyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxufVxcclxcbi5mZWVkYmFjay1mb290ZXI6YWZ0ZXIge1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcbi5mZWVkYmFjay1mb290ZXIgLmZlZWRiYWNrLWJ0biB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWdsYXNzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzc3O1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgLW1zLWZpbHRlcjogJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTUwKSc7XFxyXFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stY2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAzOTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1jYW52YXMgY2FudmFzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZlZWRiYWNrLWJsYWNrb3V0LWVsZW1lbnQge1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWhpZ2hsaWdodC1lbGVtZW50LFxcclxcbi5mZWVkYmFjay1oaWdobGlnaHRlZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCB5ZWxsb3c7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2staGlnaGxpZ2h0LWVsZW1lbnQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNmZWVkYmFjay1oaWdobGlnaHQtY2xvc2Uge1xcclxcbiAgYmFja2dyb3VuZDogI2NjYztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxyXFxuXFxyXFxuICB6LWluZGV4OiAyMDAxO1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICM2MTVlNWU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggIzYxNWU1ZTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIGxlZnQgdG9wLFxcclxcbiAgICBsZWZ0IGJvdHRvbSxcXHJcXG4gICAgZnJvbSgjYzVjNWM1KSxcXHJcXG4gICAgdG8oIzk5OTk5OSlcXHJcXG4gICk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ibGFja2Vkb3V0IHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZmVlZGJhY2staGlnaGxpZ2h0LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB6LWluZGV4OiAyMDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stYW5pbWF0ZS10b3NpZGUge1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogMTAwJTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMzIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1hbmltYXRlLXJldmlldyB7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcblxcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuXFxyXFxuICBtYXJnaW4tbGVmdDogLTMwMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stY2FudmFzLWNvbXBsZXRlIHtcXHJcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1ib2R5IGNhbnZhcyB7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MzYzNjM7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggIzYxNWU1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggIzYxNWU1ZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLWJyb3dzZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stbG9hZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZlZWRiYWNrLWxvYWRlciBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGZlZWRiYWNrLWxvYWRlciAwLjlzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gIC1tb3otYW5pbWF0aW9uOiBmZWVkYmFjay1sb2FkZXIgMC45cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcbi5mZWVkYmFjay1sb2FkZXIgc3BhbjpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcXHJcXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcclxcbn1cXHJcXG4uZmVlZGJhY2stbG9hZGVyIHNwYW46bnRoLW9mLXR5cGUoMykge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XFxyXFxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZlZWRiYWNrLWxvYWRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjFweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkAtbW96LWtleWZyYW1lcyBmZWVkYmFjay1sb2FkZXIge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKkZlZWRiYWNrIExlZ2FjeSBTdHlsZXMqL1xcclxcbi5mYi1yZXZpZXcgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm9keSAuZmItZXJyb3Ige1xcclxcbiAgY29sb3I6ICNiOTRhNDg7XFxyXFxuICBib3JkZXItY29sb3I6ICNiOTRhNDg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm9keSAuZmItZXJyb3I6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjOTUzYjM5O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNnB4ICNkNTkzOTI7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA2cHggI2Q1OTM5MjtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJvZHkgcCBhIHtcXHJcXG4gIGNvbG9yOiAjMDA4OGNjO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4uZmItYm9keSBwIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDU1ODA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLW1vZGFsIGgzIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZWxlZ2liaWxpdHk7XFxyXFxufVxcclxcblxcclxcbi5mYi1tb2RhbCB7XFxyXFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDIwNTA7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgd2lkdGg6IDU2MHB4O1xcclxcbiAgbWFyZ2luOiAtMjUwcHggMCAwIC0yODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgKmJvcmRlcjogMXB4IHNvbGlkICM5OTk7XFxyXFxuICAvKiBJRTYtNyAqL1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcblxcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMnMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuLmZiLW1vZGFsIC5mYi1jbG9zZSB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcXHJcXG59XFxyXFxuLmZiLW1vZGFsIC5mYi1jbG9zZTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYi1idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogNHB4IDEwcHggNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBmcm9tKCNmZmZmZmYpLFxcclxcbiAgICB0bygjZTZlNmU2KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2U2ZTZlNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmLCAjZTZlNmU2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYsICNlNmU2ZTYpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZTZlNmU2JywgR3JhZGllbnRUeXBlPTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2ICNlNmU2ZTYgI2JmYmZiZjtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmJiO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xcclxcbiAgKm1hcmdpbi1sZWZ0OiAwLjNlbTtcXHJcXG59XFxyXFxuLmZiLWJ0bjpob3ZlcixcXHJcXG4uZmItYnRuOmFjdGl2ZSxcXHJcXG4uZmItYnRuLmFjdGl2ZSxcXHJcXG4uZmItYnRuLmRpc2FibGVkLFxcclxcbi5mYi1idG5bZGlzYWJsZWRdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxufVxcclxcbi5mYi1idG46YWN0aXZlLFxcclxcbi5mYi1idG4uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2MgXFxcXDk7XFxyXFxufVxcclxcbi5mYi1idG46Zmlyc3QtY2hpbGQge1xcclxcbiAgKm1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG4uZmItYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1cHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjFzIGxpbmVhcjtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xcyBsaW5lYXI7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMXMgbGluZWFyO1xcclxcbn1cXHJcXG4uZmItYnRuOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkICMzMzM7XFxyXFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxyXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG59XFxyXFxuLmZiLWJ0bi5hY3RpdmUsXFxyXFxuLmZiLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXFxyXFxuICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcXHJcXG4gICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOSBcXFxcOTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcbi5mYi1idG4uZGlzYWJsZWQsXFxyXFxuLmZiLWJ0bltkaXNhYmxlZF0ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxyXFxuICBvcGFjaXR5OiAwLjY1O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTY1KTtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYi1idG4tc21hbGwge1xcclxcbiAgcGFkZGluZzogNXB4IDlweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uZmItYnRuLXNtYWxsIFtjbGFzc149J2ljb24tJ10ge1xcclxcbiAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJ0bi1pbnZlcnNlLFxcclxcbi5mYi1idG4taW52ZXJzZTpob3ZlciB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYnRuLWludmVyc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KFxcclxcbiAgICBsaW5lYXIsXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBmcm9tKCM0NTQ1NDUpLFxcclxcbiAgICB0bygjMjYyNjI2KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzQ1NDU0NSwgIzI2MjYyNik7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNDU0NTQ1LCAjMjYyNjI2KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsICM0NTQ1NDUsICMyNjI2MjYpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzQ1NDU0NScsIGVuZENvbG9yc3RyPScjMjYyNjI2JywgR3JhZGllbnRUeXBlPTApO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjYyNjI2ICMyNjI2MjYgIzAwMDAwMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpIHJnYmEoMCwgMCwgMCwgMC4xKSByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZCA9IGZhbHNlKTtcXHJcXG59XFxyXFxuLmZiLWJ0bi1pbnZlcnNlOmhvdmVyLFxcclxcbi5mYi1idG4taW52ZXJzZTphY3RpdmUsXFxyXFxuLmZiLWJ0bi1pbnZlcnNlLmFjdGl2ZSxcXHJcXG4uZmItYnRuLWludmVyc2UuZGlzYWJsZWQsXFxyXFxuLmZiLWJ0bi1pbnZlcnNlW2Rpc2FibGVkXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcclxcbn1cXHJcXG4uZmItYnRuLWludmVyc2U6YWN0aXZlLFxcclxcbi5mYi1idG4taW52ZXJzZS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYyBcXFxcOTtcXHJcXG59XFxyXFxuYnV0dG9uLmZiLWJ0bixcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mYi1idG4ge1xcclxcbiAgKnBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuYnV0dG9uLmZiLWJ0bjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mYi1idG46Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuYnV0dG9uLmZiLWJ0bi5sYXJnZSxcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mYi1idG4ubGFyZ2Uge1xcclxcbiAgKnBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDdweDtcXHJcXG59XFxyXFxuYnV0dG9uLmZiLWJ0bi5zbWFsbCxcXHJcXG5pbnB1dFt0eXBlPSdzdWJtaXQnXS5mYi1idG4uc21hbGwge1xcclxcbiAgKnBhZGRpbmctdG9wOiAzcHg7XFxyXFxuICAqcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJ0biAuY2FyZXQge1xcclxcbiAgbWFyZ2luLXRvcDogN3B4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcbi5mYi1idG46aG92ZXIgLmNhcmV0LFxcclxcbi5vcGVuLmJ0bi1ncm91cCAuY2FyZXQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYnRuLWludmVyc2UgLmNhcmV0IHtcXHJcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTc1KTtcXHJcXG59XFxyXFxuLmZiLWJ0bi1zbWFsbCAuY2FyZXQge1xcclxcbiAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm90dG9tLXJpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiA5cHggMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcclxcbn1cXHJcXG4uZmItaGVhZGVyIC5mYi1jbG9zZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcbi5mYi1ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG4uZmItYm9keSAubW9kYWwtZm9ybSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm9keSB0ZXh0YXJlYSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNTIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICBjb2xvcjogIzU1NTU1NTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAwLjJzLCBib3gtc2hhZG93IGxpbmVhciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYm9keSB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYmEoODIsIDE2OCwgMjM2LCAwLjgpO1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksXFxyXFxuICAgIDAgMCA4cHggcmdiYSg4MiwgMTY4LCAyMzYsIDAuNik7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcXHJcXG4gICAgMCAwIDhweCByZ2JhKDgyLCAxNjgsIDIzNiwgMC42KTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZCBcXFxcOTtcXHJcXG4gIC8qIElFNi05ICovXFxyXFxufVxcclxcblxcclxcbi5mYi1mb290ZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDE0cHggMTVweCAxNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAjZmZmZmZmO1xcclxcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwICNmZmZmZmY7XFxyXFxuICAqem9vbTogMTtcXHJcXG59XFxyXFxuLmZiLWZvb3RlcjpiZWZvcmUsXFxyXFxuLmZiLWZvb3RlcjphZnRlciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG4uZmItZm9vdGVyOmFmdGVyIHtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG4uZmItZm9vdGVyIC5mYi1idG4ge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mYi1nbGFzcyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzc3NztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIC1tcy1maWx0ZXI6ICdwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MCknO1xcclxcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWNhbnZhcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB6LWluZGV4OiAxOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4jZmItYmxhY2tvdXQtZWxlbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItaGlnaGxpZ2h0LWVsZW1lbnQsXFxyXFxuLmZiLWhpZ2hsaWdodGVkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgei1pbmRleDogMjAwMDtcXHJcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG5cXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHllbGxvdztcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5mYi1oaWdobGlnaHQtZWxlbWVudCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2ZiLWhpZ2hsaWdodC1jbG9zZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTJweDtcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDIwMDE7XFxyXFxuXFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggIzYxNWU1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjNjE1ZTVlO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoXFxyXFxuICAgIGxpbmVhcixcXHJcXG4gICAgbGVmdCB0b3AsXFxyXFxuICAgIGxlZnQgYm90dG9tLFxcclxcbiAgICBmcm9tKCNjNWM1YzUpLFxcclxcbiAgICB0bygjOTk5OTk5KVxcclxcbiAgKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNjNWM1YzUsICM5OTk5OTkpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2M1YzVjNSwgIzk5OTk5OSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzVjNWM1LCAjOTk5OTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJsYWNrZWRvdXQge1xcclxcbiAgYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDIwMDA7XFxyXFxufVxcclxcblxcclxcbiNmYi1oaWdobGlnaHQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDIwMTA7XFxyXFxufVxcclxcblxcclxcbi5mYi1hbmltYXRlLXRvc2lkZSB7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBsZWZ0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWFuaW1hdGUtcmV2aWV3IHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAycyBlYXNlIDBzO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UgMHM7XFxyXFxuXFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG5cXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYi1jYW52YXMtY29tcGxldGUge1xcclxcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZiLWJvZHkgY2FudmFzIHtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzYzNjM2MztcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCAjNjE1ZTVlO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCAjNjE1ZTVlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmItYnJvd3NlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYi1sb2FkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZmItbG9hZGVyIHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmVlZGJhY2stbG9hZGVyIDAuOXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgLW1vei1hbmltYXRpb246IGZlZWRiYWNrLWxvYWRlciAwLjlzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuLmZiLWxvYWRlciBzcGFuOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcclxcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuM3M7XFxyXFxufVxcclxcbi5mYi1sb2FkZXIgc3BhbjpudGgtb2YtdHlwZSgzKSB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcXHJcXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImFhX3N1cnZleXNcXFwiPlxcclxcbiAgPGRpdiBpZD1cXFwiYWFfbnBzX3N1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGg0IGNsYXNzPVxcXCJmZWVkYmFjay1pbmZvXFxcIj5cXHJcXG4gIFVzaW5nIHRoZSB0b29sYmFyIG9uIHRoZSByaWdodHNpZGUsIGhpZ2hsaWdodCB0aGUgcHJvYmxlbSBhcmVhIG9yIGVyYXNlXFxyXFxuICBzZW5zaXRpdmUgaW5mb3JtYXRpb24uXFxyXFxuPC9oND5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmZWVkYmFjay1jYW52YXNcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBub25lXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmZWVkYmFjay1nbGFzc1xcXCIgc3R5bGU9XFxcInBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBub25lXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmZWVkYmFjay1tb2RhbFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmVcXFwiPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZmVlZGJhY2staGVhZGVyXFxcIj5cXHJcXG4gICAgPGEgY2xhc3M9XFxcImZlZWRiYWNrLWNsb3NlXFxcIiBocmVmPVxcXCIjXFxcIj4mdGltZXM7PC9hPlxcclxcbiAgICA8aDM+U2VuZCBGZWVkYmFjazwvaDM+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImZlZWRiYWNrLWJvZHlcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgIDxsYWJlbD5QbGVhc2UgZGVzY3JpYmUgdGhlIGlzc3VlIHlvdSBhcmUgZXhwZXJpZW5jaW5nOio8L2xhYmVsXFxyXFxuICAgICAgPjx0ZXh0YXJlYSBjbGFzcz1cXFwiZmVlZGJhY2stY29tbWVudHNcXFwiPjwvdGV4dGFyZWE+IDxsYWJlbD5Zb3VyIE5hbWU6PC9sYWJlbFxcclxcbiAgICAgID48aW5wdXQgY2xhc3M9XFxcImZlZWRiYWNrLW5hbWVcXFwiIC8+PGxhYmVsPllvdXIgRU1haWw6PC9sYWJlbFxcclxcbiAgICAgID48aW5wdXQgY2xhc3M9XFxcImZlZWRiYWNrLWVtYWlsXFxcIiAvPlxcclxcbiAgICAgIDwhLS08aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJmZWVkYmFjay1pbmNsdWRlLXNjcmVlblxcXCIgLz4tLT5cXHJcXG4gICAgICA8bGFiZWw+Q2xpY2sgYmVsb3cgdG8gaW5jbHVkZSBhIHNjcmVlbnNob3Q8L2xhYmVsPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZlZWRiYWNrLXNjcmVlbnNob3RcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGNhbnZhcz48L2NhbnZhcz5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8aDMgY2xhc3M9XFxcImZlZWRiYWNrLW1lc3NhZ2VcXFwiPlxcclxcbiAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrLndlIHdpbGwgY29udGFjdCB5b3UgaWYgd2UgbmVlZCBtb3JlXFxyXFxuICAgICAgICBpbmZvcm1hdGlvblxcclxcbiAgICAgIDwvaDM+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJmZWVkYmFjay1mb290ZXJcXFwiPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJmZWVkYmFjay1idG4gY29udGludWUtYnRuXFxcIj5Db250aW51ZTwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJmZWVkYmFjay1idG4gY2xvc2UtYnRuXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZVxcXCI+Q2xvc2U8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N1cnZleS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBmdW5jdGlvbiBnZXRTTVNlc3Npb24oKTogc3RyaW5nIHtcclxuICBjb25zdCBjbmFtZSA9ICdTTVNFU1NJT04nO1xyXG4gIHZhciBuYW1lID0gY25hbWUgKyAnPSc7XHJcbiAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICB2YXIgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMgPSBjYVtpXTtcclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vcGFnZXMvRm9ybSc7XHJcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4vcGFnZXMvUmV2aWV3JztcclxuaW1wb3J0IHsgU2NyZWVuc2hvdCB9IGZyb20gJy4vcGFnZXMvU2NyZWVuc2hvdCc7XHJcbmltcG9ydCB7IFNlbmQgfSBmcm9tICcuL1NlbmQnO1xyXG5pbXBvcnQgeyBYSFIgfSBmcm9tICcuL3NlbmQveGhyJztcclxuXHJcbi8vIGxvZyBwcm94eSBmdW5jdGlvblxyXG5leHBvcnQgY29uc3QgbG9nID0gZnVuY3Rpb24gKG1zZzogYW55KSB7XHJcbiAgd2luZG93LmNvbnNvbGUubG9nKG1zZyk7XHJcbn07XHJcbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSBlbGVtZW50cywgaW5wdXQgYXMgYXJyYXlzXHJcbmV4cG9ydCBjb25zdCByZW1vdmVFbGVtZW50cyA9IGZ1bmN0aW9uIChyZW1vdmU6IGFueSkge1xyXG4gIC8vSFRNTEVsZW1lbnRbXVxyXG4gIGZvciAodmFyIGkgPSByZW1vdmUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIC8vcmVtb3ZlW2ldLnJlbW92ZSgpO1xyXG4gICAgdmFyIGl0ZW0gPSByZW1vdmVbaV07XHJcbiAgICBpZiAoaXRlbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChpdGVtLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBpdGVtIHdhcyBhY3R1YWxseSBhZGRlZCB0byBET01cclxuICAgICAgICBpdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgaSA9IDM7XHJcbiAgZGl2LmNsYXNzTmFtZSA9ICdmYi1sb2FkZXInO1xyXG5cclxuICB3aGlsZSAoaS0tKSB7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICB9XHJcbiAgcmV0dXJuIGRpdjtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldEJvdW5kcyA9IGZ1bmN0aW9uIChlbDogSFRNTEVsZW1lbnQpIHtcclxuICByZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBlbXB0eUVsZW1lbnRzID0gZnVuY3Rpb24gKGVsOiBIVE1MRWxlbWVudCkge1xyXG4gIHZhciBpdGVtO1xyXG4gIHdoaWxlICgoaXRlbSA9IGVsLmZpcnN0Q2hpbGQpICE9PSBudWxsID8gZWwucmVtb3ZlQ2hpbGQoaXRlbSkgOiBmYWxzZSkge31cclxufTtcclxuZXhwb3J0IGNvbnN0IGVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpIHtcclxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xyXG4gIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuICByZXR1cm4gZWw7XHJcbn07XHJcbi8vIHNjcmlwdCBvbmxvYWQgZnVuY3Rpb24gdG8gcHJvdmlkZSBzdXBwb3J0IGZvciBJRSBhcyB3ZWxsXHJcbmV4cG9ydCBjb25zdCBzY3JpcHRMb2FkZXIgPSBmdW5jdGlvbiAoc2NyaXB0OiBhbnksIGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgaWYgKHNjcmlwdC5vbmxvYWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gSUUgbGFjayBvZiBzdXBwb3J0IGZvciBzY3JpcHQgb25sb2FkXHJcblxyXG4gICAgaWYgKHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YXIgaW50ZXJ2YWxGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlICE9PSAnbG9hZGVkJyAmJlxyXG4gICAgICAgICAgc2NyaXB0LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZSdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGludGVydmFsRnVuYywgMjUwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gaXQgaXMgbG9hZGVkXHJcbiAgICAgICAgICBmdW5jKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoaW50ZXJ2YWxGdW5jLCAyNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nKFwiRVJST1I6IFdlIGNhbid0IHRyYWNrIHdoZW4gc2NyaXB0IGlzIGxvYWRlZFwiKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZ1bmM7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgSDJDX0lHTk9SRSA9ICdkYXRhLWh0bWwyY2FudmFzLWlnbm9yZSc7XHJcbmV4cG9ydCBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFjayB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XHJcbiAgcHJpdmF0ZSBtb2RhbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgYnV0dG9uOiBhbnk7XHJcbiAgcHJpdmF0ZSBuZXh0QnV0dG9uOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgZ2xhc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgIC8vIGRlZmF1bHQgcHJvcGVydGllc1xyXG4gICAgdGhpcy5vcHRpb25zLmxhYmVsID0gdGhpcy5vcHRpb25zLmxhYmVsIHx8ICdTZW5kIEZlZWRiYWNrJztcclxuICAgIHRoaXMub3B0aW9ucy5oZWFkZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVyIHx8ICdTZW5kIEZlZWRiYWNrJztcclxuICAgIHRoaXMub3B0aW9ucy51cmwgPSB0aGlzLm9wdGlvbnMudXJsIHx8ICcvJztcclxuICAgIHRoaXMub3B0aW9ucy5hZGFwdGVyID0gdGhpcy5vcHRpb25zLmFkYXB0ZXIgfHwgbmV3IFhIUihvcHRpb25zLnVybCk7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zLm5leHRMYWJlbCA9IHRoaXMub3B0aW9ucy5uZXh0TGFiZWwgfHwgJ0NvbnRpbnVlJztcclxuICAgIHRoaXMub3B0aW9ucy5yZXZpZXdMYWJlbCA9IHRoaXMub3B0aW9ucy5yZXZpZXdMYWJlbCB8fCAnUmV2aWV3JztcclxuICAgIHRoaXMub3B0aW9ucy5zZW5kTGFiZWwgPSB0aGlzLm9wdGlvbnMuc2VuZExhYmVsIHx8ICdTZW5kJztcclxuICAgIHRoaXMub3B0aW9ucy5jbG9zZUxhYmVsID0gdGhpcy5vcHRpb25zLmNsb3NlTGFiZWwgfHwgJ0Nsb3NlJztcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMubWVzc2FnZVN1Y2Nlc3MgPVxyXG4gICAgICB0aGlzLm9wdGlvbnMubWVzc2FnZVN1Y2Nlc3MgfHwgJ1lvdXIgZmVlZGJhY2sgd2FzIHNlbnQgc3VjY2Vzc2Z1bGx5Lic7XHJcbiAgICB0aGlzLm9wdGlvbnMubWVzc2FnZUVycm9yID1cclxuICAgICAgdGhpcy5vcHRpb25zLm1lc3NhZ2VFcnJvciB8fFxyXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcgeW91ciBmZWVkYmFjayB0byB0aGUgc2VydmVyLic7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYWdlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5wYWdlcyA9IFtcclxuICAgICAgICBuZXcgRm9ybSh1bmRlZmluZWQpLFxyXG4gICAgICAgIG5ldyBTY3JlZW5zaG90KHRoaXMub3B0aW9ucyksXHJcbiAgICAgICAgbmV3IFJldmlldygpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLmdsYXNzLmNsYXNzTmFtZSA9ICdmYi1nbGFzcyc7XHJcbiAgICB0aGlzLmdsYXNzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmdsYXNzLnNldEF0dHJpYnV0ZShIMkNfSUdOT1JFLCAndHJ1ZScpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9uID0gZWxlbWVudCgnYnV0dG9uJywgdGhpcy5vcHRpb25zLmxhYmVsKTtcclxuICAgIHRoaXMuYnV0dG9uLmNsYXNzTmFtZSA9ICdmYi1idG4gZmItYm90dG9tLXJpZ2h0JztcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoSDJDX0lHTk9SRSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5idXR0b24ub25jbGljayA9IHRoaXMub3BlbjtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5hcHBlbmRUbyAhPT0gbnVsbCkge1xyXG4gICAgICAob3B0aW9ucy5hcHBlbmRUbyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBvcHRpb25zLmFwcGVuZFRvXHJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5XHJcbiAgICAgICkuYXBwZW5kQ2hpbGQodGhpcy5idXR0b24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwdWJsaWMgb3BlbigpIHtcclxuICAgIHZhciBsZW4gPSB0aGlzLm9wdGlvbnMucGFnZXMubGVuZ3RoO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICBmb3IgKDsgdGhpcy5jdXJyZW50UGFnZSA8IGxlbjsgdGhpcy5jdXJyZW50UGFnZSsrKSB7XHJcbiAgICAgIC8vIGNyZWF0ZSBET00gZm9yIGVhY2ggcGFnZSBpbiB0aGUgd2l6YXJkXHJcbiAgICAgIGlmICghKHRoaXMub3B0aW9ucy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlXSBpbnN0YW5jZW9mIFJldmlldykpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0ucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgYTogSFRNTEFuY2hvckVsZW1lbnQgPSBlbGVtZW50KCdhJywgJ1gnKSBhcyBIVE1MQW5jaG9yRWxlbWVudCxcclxuICAgICAgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgLy8gbW9kYWwgY29udGFpbmVyXHJcbiAgICAgIG1vZGFsRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsYXNzKTtcclxuXHJcbiAgICAvLyBtb2RhbCBjbG9zZSBidXR0b25cclxuICAgIGEuY2xhc3NOYW1lID0gJ2ZiLWNsb3NlJztcclxuICAgIGEub25jbGljayA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgIGEuaHJlZiA9ICcjJztcclxuXHJcbiAgICB0aGlzLmJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gYnVpbGQgaGVhZGVyIGVsZW1lbnRcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCgnaDMnLCB0aGlzLm9wdGlvbnMuaGVhZGVyKSk7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc05hbWUgPSAnZmItaGVhZGVyJztcclxuXHJcbiAgICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ2ZiLWJvZHknO1xyXG5cclxuICAgIGVtcHR5RWxlbWVudHMobW9kYWxCb2R5KTtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHRoaXMub3B0aW9ucy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlKytdLmRvbSk7XHJcblxyXG4gICAgLy8gTmV4dCBidXR0b25cclxuICAgIHRoaXMubmV4dEJ1dHRvbiA9IGVsZW1lbnQoJ2J1dHRvbicsIHRoaXMub3B0aW9ucy5uZXh0TGFiZWwpO1xyXG5cclxuICAgIHRoaXMubmV4dEJ1dHRvbi5jbGFzc05hbWUgPSAnZmItYnRuJztcclxuICAgIHRoaXMubmV4dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMucGFnZXNbdGhpcy5jdXJyZW50UGFnZSAtIDFdLmVuZCh0aGlzLm1vZGFsKSA9PT0gZmFsc2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIHBhZ2UgZmFpbGVkIHZhbGlkYXRpb24sIGNhbmNlbCBvbmNsaWNrXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbXB0eUVsZW1lbnRzKG1vZGFsQm9keSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gbGVuKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kKHRoaXMub3B0aW9ucy5hZGFwdGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0uc3RhcnQoXHJcbiAgICAgICAgICB0aGlzLm1vZGFsLFxyXG4gICAgICAgICAgbW9kYWxIZWFkZXIsXHJcbiAgICAgICAgICBtb2RhbEZvb3RlcixcclxuICAgICAgICAgIHRoaXMubmV4dEJ1dHRvblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0gaW5zdGFuY2VvZiBSZXZpZXcpIHtcclxuICAgICAgICAgIC8vIGNyZWF0ZSBET00gZm9yIHJldmlldyBwYWdlLCBiYXNlZCBvbiBjb2xsZWN0ZWQgZGF0YVxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VdLnJlbmRlcih0aGlzLm9wdGlvbnMucGFnZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkIHBhZ2UgRE9NIHRvIG1vZGFsXHJcbiAgICAgICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHRoaXMub3B0aW9ucy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlKytdLmRvbSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGxhc3QgcGFnZSwgY2hhbmdlIGJ1dHRvbiBsYWJlbCB0byBzZW5kXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPT09IGxlbikge1xyXG4gICAgICAgICAgdGhpcy5uZXh0QnV0dG9uLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdGhpcy5vcHRpb25zLnNlbmRMYWJlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIG5leHQgcGFnZSBpcyByZXZpZXcgcGFnZSwgY2hhbmdlIGJ1dHRvbiBsYWJlbFxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFnZXNbdGhpcy5jdXJyZW50UGFnZV0gaW5zdGFuY2VvZiBSZXZpZXcpIHtcclxuICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbi5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHRoaXMub3B0aW9ucy5yZXZpZXdMYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbW9kYWxGb290ZXIuY2xhc3NOYW1lID0gJ2ZiLWZvb3Rlcic7XHJcbiAgICBtb2RhbEZvb3Rlci5hcHBlbmRDaGlsZCh0aGlzLm5leHRCdXR0b24pO1xyXG5cclxuICAgIHRoaXMubW9kYWwuY2xhc3NOYW1lID0gJ2ZiLW1vZGFsJztcclxuICAgIHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKEgyQ19JR05PUkUsICd0cnVlJyk7IC8vIGRvbid0IHJlbmRlciBpbiBodG1sMmNhbnZhc1xyXG5cclxuICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG4gICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZChtb2RhbEJvZHkpO1xyXG4gICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZChtb2RhbEZvb3Rlcik7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcclxuICB9XHJcbiAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgdGhpcy5idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyByZW1vdmUgZmVlZGJhY2sgZWxlbWVudHNcclxuICAgIHJlbW92ZUVsZW1lbnRzKFt0aGlzLm1vZGFsLCB0aGlzLmdsYXNzXSk7XHJcblxyXG4gICAgLy8gY2FsbCBlbmQgZXZlbnQgZm9yIGN1cnJlbnQgcGFnZVxyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAwKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlIC0gMV0uZW5kKHRoaXMubW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGwgY2xvc2UgZXZlbnRzIGZvciBhbGwgcGFnZXNcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLm9wdGlvbnMucGFnZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnBhZ2VzW2ldLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBwdWJsaWMgc2VuZChhZGFwdGVyOiBhbnkpOiBhbnkge1xyXG4gICAgLy8gbWFrZSBzdXJlIHNlbmQgYWRhcHRlciBpcyBvZiByaWdodCBwcm90b3R5cGVcclxuICAgIGlmICghKGFkYXB0ZXIgaW5zdGFuY2VvZiBTZW5kKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkYXB0ZXIgaXMgbm90IGFuIGluc3RhbmNlIG9mIEZlZWRiYWNrLlNlbmQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmZXRjaCBkYXRhIGZyb20gYWxsIHBhZ2VzXHJcbiAgICBmb3IgKFxyXG4gICAgICB2YXIgaSA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5wYWdlcy5sZW5ndGgsIGRhdGEgPSBbXSwgcCA9IDAsIHRtcDtcclxuICAgICAgaSA8IGxlbjtcclxuICAgICAgaSsrXHJcbiAgICApIHtcclxuICAgICAgaWYgKCh0bXAgPSB0aGlzLm9wdGlvbnMucGFnZXNbaV0uZGF0YSgpKSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBkYXRhW3ArK10gPSB0bXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5leHRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIGVtcHR5RWxlbWVudHMobW9kYWxCb2R5KTtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChsb2FkZXIoKSk7XHJcblxyXG4gICAgLy8gc2VuZCBkYXRhIHRvIGFkYXB0ZXIgZm9yIHByb2Nlc3NpbmdcclxuICAgIGFkYXB0ZXIuc2VuZChkYXRhLCAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgIGVtcHR5RWxlbWVudHMobW9kYWxCb2R5KTtcclxuICAgICAgdGhpcy5uZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLm5leHRCdXR0b24uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB0aGlzLm9wdGlvbnMuY2xvc2VMYWJlbDtcclxuXHJcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub3B0aW9ucy5tZXNzYWdlU3VjY2VzcylcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub3B0aW9ucy5tZXNzYWdlRXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQYWdlIHtcclxuICBwcm90ZWN0ZWQgZG9tOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIHJlbmRlcihkb206IGFueSkge1xyXG4gICAgdGhpcy5kb20gPSBkb207XHJcbiAgfVxyXG4gIHN0YXJ0KC4uLmFyZ3M6IGFueVtdKSB7fVxyXG4gIGNsb3NlKCkge31cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXZpZXcoZG9tOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGVuZChtb2RhbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRTTVNlc3Npb24gfSBmcm9tICcuLy4uL2Nvb2tpZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VuZCB9IGZyb20gJy4vU2VuZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZVJlc3VsdHNBZGFwdGVyIGV4dGVuZHMgU2VuZCB7XHJcbiAgcHJpdmF0ZSBjb25maWc6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IGFueSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuICBzZW5kKGRhdGE6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBzbXNlc3Npb24gPSBnZXRTTVNlc3Npb24oKTtcclxuICAgIGRhdGEgPSB7IC4uLmRhdGFbMF0sIHNjcmVlbl9zaG90OiBkYXRhWzFdIH07XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IHRoaXMuY29uZmlnLnVybCxcclxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgaGVhZGVyczogeyBTTVNFU1NJT046IHNtc2Vzc2lvbiB9LFxyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBxdWVyeTogYG11dGF0aW9uIENyZWF0ZVN1cnZleVJlc3VsdE11dGF0aW9uKCRzdXJ2ZXlJZDogU3RyaW5nISwkYXJjaGVySWQ6IFN0cmluZyEsICRpbnB1dDogU3VydmV5UmVzdWx0SW5wdXQhKSBcclxuICAgICAgICAgICAgICAgICAgeyAgY3JlYXRlU3VydmV5UmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VydmV5SWQ6ICRzdXJ2ZXlJZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmNoZXJJZDogJGFyY2hlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICRpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHN1cnZleUlkOiAnNjAwMTVkYmNlMDhkNGYwMDY4MTVjMWQzJyxcclxuICAgICAgICAgIGFyY2hlcklkOiB0aGlzLmNvbmZpZy5hcmNoZXJfaWQsXHJcbiAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICByZXN1bHQ6IGRhdGFcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICBlcnJvcjogKCkgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIHNlbmQoZGF0YTogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgZWxlbWVudCwgZW1wdHlFbGVtZW50cyB9IGZyb20gJy4uL0NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vUGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIFBhZ2Uge1xyXG4gIHByaXZhdGUgZWxlbWVudHM6IGFueVtdO1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzOiBhbnlbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cyB8fCBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxyXG4gICAgICAgIG5hbWU6ICdjb21tZW50cycsXHJcbiAgICAgICAgbGFiZWw6ICdQbGVhc2UgZGVzY3JpYmUgdGhlIGlzc3VlIHlvdSBhcmUgZXhwZXJpZW5jaW5nJyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBuYW1lOiAnZW1wbG95ZWVfbmFtZScsXHJcbiAgICAgICAgbGFiZWw6ICdZb3VyIE5hbWUnLFxyXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIG5hbWU6ICdlbXBsb3llZV9lbWFpbCcsXHJcbiAgICAgICAgbGFiZWw6ICdZb3VyIEVNYWlsJyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgaSA9IDAsXHJcbiAgICAgIGxlbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxyXG4gICAgICBpdGVtO1xyXG4gICAgZW1wdHlFbGVtZW50cyh0aGlzLmRvbSk7XHJcbiAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGl0ZW0gPSB0aGlzLmVsZW1lbnRzW2ldO1xyXG5cclxuICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcclxuICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XHJcbiAgICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgZWxlbWVudChcclxuICAgICAgICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICAgICAgIGl0ZW0ubGFiZWwgKyAnOicgKyAoaXRlbS5yZXF1aXJlZCA9PT0gdHJ1ZSA/ICcgKicgOiAnJylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAoaXRlbS5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBlbGVtZW50KFxyXG4gICAgICAgICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgICAgICAgaXRlbS5sYWJlbCArICc6JyArIChpdGVtLnJlcXVpcmVkID09PSB0cnVlID8gJyAqJyA6ICcnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIChpdGVtLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG4gIGVuZCgpIHtcclxuICAgIC8vIGZvcm0gdmFsaWRhdGlvblxyXG4gICAgdmFyIGkgPSAwLFxyXG4gICAgICBsZW4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcclxuICAgICAgaXRlbTtcclxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaXRlbSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblxyXG4gICAgICAvLyBjaGVjayB0aGF0IGFsbCByZXF1aXJlZCBmaWVsZHMgYXJlIGVudGVyZWRcclxuICAgICAgaWYgKGl0ZW0ucmVxdWlyZWQgPT09IHRydWUgJiYgaXRlbS5lbGVtZW50LnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGl0ZW0uZWxlbWVudC5jbGFzc05hbWUgPSAnZmItZXJyb3InO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLmVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgZGF0YSgpIHtcclxuICAgIC8vaWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gcmV0dXJuIGNhY2hlZCB2YWx1ZVxyXG4gICAgLy8gIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgLy99XHJcblxyXG4gICAgdmFyIGkgPSAwLFxyXG4gICAgICBsZW4gPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcclxuICAgICAgaXRlbSxcclxuICAgICAgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpdGVtID0gdGhpcy5lbGVtZW50c1tpXTtcclxuICAgICAgZGF0YVtpdGVtLm5hbWVdID0gaXRlbS5lbGVtZW50LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhY2hlIGFuZCByZXR1cm4gZGF0YVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIHJldmlldyhkb206IGFueSk6IGFueSB7XHJcbiAgICB2YXIgaSA9IDAsXHJcbiAgICAgIGl0ZW0sXHJcbiAgICAgIGxlbiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgaXRlbSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblxyXG4gICAgICBpZiAoaXRlbS5lbGVtZW50LnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBkb20uYXBwZW5kQ2hpbGQoZWxlbWVudCgnbGFiZWwnLCBpdGVtLmxhYmVsICsgJzonKSk7XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gaXRlbS5lbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZW1wdHlFbGVtZW50cyB9IGZyb20gJy4uL0NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vUGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV2aWV3IGV4dGVuZHMgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9ICdmYi1yZXZpZXcnO1xyXG4gIH1cclxuICByZW5kZXIocGFnZXM6IGFueVtdKSB7XHJcbiAgICB2YXIgaSA9IDAsXHJcbiAgICAgIGxlbiA9IHBhZ2VzLmxlbmd0aCxcclxuICAgICAgaXRlbTtcclxuICAgIGVtcHR5RWxlbWVudHModGhpcy5kb20pO1xyXG5cclxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgLy8gZ2V0IHByZXZpZXcgRE9NIGl0ZW1zXHJcbiAgICAgIHBhZ2VzW2ldLnJldmlldyh0aGlzLmRvbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGxvYWRlciwgbG9nLCBzY3JpcHRMb2FkZXIgfSBmcm9tICcuLy4uL0NvcmUnO1xyXG5pbXBvcnQgeyBlbGVtZW50LCBlbXB0eUVsZW1lbnRzLCBnZXRCb3VuZHMsIHJlbW92ZUVsZW1lbnRzIH0gZnJvbSAnLi4vQ29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9QYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90IGV4dGVuZHMgUGFnZSB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XHJcbiAgcHJpdmF0ZSBoMmNEb25lOiBib29sZWFuO1xyXG4gIHByaXZhdGUgbW91c2VNb3ZlRXZlbnQ6IGFueTtcclxuICBwcml2YXRlIG1vdXNlQ2xpY2tFdmVudDogYW55O1xyXG4gIHByaXZhdGUgYmxhY2tvdXRCb3g6IGFueTtcclxuICBwcml2YXRlIGhpZ2hsaWdodENvbnRhaW5lcjogYW55O1xyXG4gIHByaXZhdGUgaGlnaGxpZ2h0Qm94OiBhbnk7XHJcbiAgcHJpdmF0ZSBoaWdobGlnaHRDbG9zZTogYW55O1xyXG4gIHByaXZhdGUgaDJjQ2FudmFzOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0VsZW1lbnQ6IGFueTtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdGhpcy5vcHRpb25zLmJsYWNrb3V0Q2xhc3MgPSB0aGlzLm9wdGlvbnMuYmxhY2tvdXRDbGFzcyB8fCAnZmItYmxhY2tlZG91dCc7XHJcbiAgICB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MgPVxyXG4gICAgICB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MgfHwgJ2ZiLWhpZ2hsaWdodGVkJztcclxuXHJcbiAgICB0aGlzLmgyY0RvbmUgPSBmYWxzZTtcclxuICB9XHJcbiAgY2xvc2UoKSB7XHJcbiAgICByZW1vdmVFbGVtZW50cyhbXHJcbiAgICAgIHRoaXMuYmxhY2tvdXRCb3gsXHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0Q29udGFpbmVyLFxyXG4gICAgICB0aGlzLmhpZ2hsaWdodEJveCxcclxuICAgICAgdGhpcy5oaWdobGlnaHRDbG9zZVxyXG4gICAgXSk7XHJcblxyXG4gICAgcmVtb3ZlRWxlbWVudHMoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLm9wdGlvbnMuYmxhY2tvdXRDbGFzcykpO1xyXG4gICAgcmVtb3ZlRWxlbWVudHMoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzKVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIGVuZChtb2RhbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgIG1vZGFsLmNsYXNzTmFtZSA9IG1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKC9mYlxcLWFuaW1hdGVcXC10b3NpZGUvLCAnJyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZUV2ZW50LCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3VzZUNsaWNrRXZlbnQsIGZhbHNlKTtcclxuXHJcbiAgICByZW1vdmVFbGVtZW50cyhbdGhpcy5oMmNDYW52YXNdKTtcclxuXHJcbiAgICB0aGlzLmgyY0RvbmUgPSBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBwdWJsaWMgc3RhcnQoXHJcbiAgICBtb2RhbDogSFRNTEVsZW1lbnQsXHJcbiAgICBtb2RhbEhlYWRlcjogSFRNTEVsZW1lbnQsXHJcbiAgICBtb2RhbEZvb3RlcjogSFRNTEVsZW1lbnQsXHJcbiAgICBuZXh0QnV0dG9uOiBhbnlcclxuICApIHtcclxuICAgIGlmICh0aGlzLmgyY0RvbmUpIHtcclxuICAgICAgZW1wdHlFbGVtZW50cyh0aGlzLmRvbSk7XHJcbiAgICAgIG5leHRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHZhciAkdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgZmVlZGJhY2tIaWdobGlnaHRFbGVtZW50ID0gJ2ZiLWhpZ2hsaWdodC1lbGVtZW50JyxcclxuICAgICAgICBkYXRhRXhjbHVkZSA9ICdkYXRhLWV4Y2x1ZGUnO1xyXG5cclxuICAgICAgdmFyIGFjdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAvLyBkZWxlZ2F0ZSBtb3VzZSBtb3ZlIGV2ZW50IGZvciBib2R5XHJcbiAgICAgIHRoaXMubW91c2VNb3ZlRXZlbnQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gc2V0IGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLnByZXZpb3VzRWxlbWVudCAmJlxyXG4gICAgICAgICAgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCR0aGlzLm9wdGlvbnMuYmxhY2tvdXRDbGFzcykgIT09IC0xIHx8XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCR0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MpICE9PSAtMSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHZhciBsZWZ0ID1cclxuICAgICAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuc3R5bGUubGVmdCwgMTApICtcclxuICAgICAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuc3R5bGUud2lkdGgsIDEwKTtcclxuICAgICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0LCAxMCk7XHJcblxyXG4gICAgICAgICAgbGVmdCA9IE1hdGgubWluKGxlZnQsIHdpbmRvdy5pbm5lcldpZHRoIC0gMTUpO1xyXG5cclxuICAgICAgICAgIHZhciB0b3AgPSBwYXJzZUludChlLnRhcmdldC5zdHlsZS50b3AsIDEwKTtcclxuICAgICAgICAgIHRvcCA9IE1hdGgubWF4KHRvcCwgMTApO1xyXG5cclxuICAgICAgICAgIGhpZ2hsaWdodENsb3NlLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgICAgICAgIGhpZ2hsaWdodENsb3NlLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XHJcbiAgICAgICAgICByZW1vdmVFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICBjbGVhckJveCgpO1xyXG4gICAgICAgICAgcHJldmlvdXNFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgd2UgYXJlIGhpZ2hsaWdodGluZyBhIGNsb3NlIGJ1dHRvbiBvciBib2R5IHRhZ1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQk9EWScgfHxcclxuICAgICAgICAgIGUudGFyZ2V0ID09PSBoaWdobGlnaHRDbG9zZSB8fFxyXG4gICAgICAgICAgZS50YXJnZXQgPT09IG1vZGFsIHx8XHJcbiAgICAgICAgICBlLnRhcmdldCA9PT0gbmV4dEJ1dHRvbiB8fFxyXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZSA9PT0gbW9kYWwgfHxcclxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUgPT09IG1vZGFsSGVhZGVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAvLyB3ZSBhcmUgbm90IGdvbm5hIGJsYWNrb3V0IHRoZSB3aG9sZSBwYWdlIG9yIHRoZSBjbG9zZSBpdGVtXHJcbiAgICAgICAgICBjbGVhckJveCgpO1xyXG4gICAgICAgICAgcHJldmlvdXNFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaWRlQ2xvc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBwcmV2aW91c0VsZW1lbnQpIHtcclxuICAgICAgICAgIHByZXZpb3VzRWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xyXG5cclxuICAgICAgICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYm91bmRzID0gZ2V0Qm91bmRzKHByZXZpb3VzRWxlbWVudCksXHJcbiAgICAgICAgICAgICAgaXRlbTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgaXRlbSA9IGJsYWNrb3V0Qm94O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGl0ZW0gPSBoaWdobGlnaHRCb3g7XHJcbiAgICAgICAgICAgICAgaXRlbS53aWR0aCA9IGJvdW5kcy53aWR0aDtcclxuICAgICAgICAgICAgICBpdGVtLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICR0aGlzLmgyY0NhbnZhcyxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCArIGJvdW5kcy5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0ICsgYm91bmRzLnRvcCxcclxuICAgICAgICAgICAgICAgIGJvdW5kcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGJvdW5kcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGJvdW5kcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGJvdW5kcy5oZWlnaHRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB3ZSBhcmUgb25seSB0YXJnZXR0aW5nIElFPj05LCBzbyB3aW5kb3cucGFnZVlPZmZzZXQgd29ya3MgZmluZVxyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShkYXRhRXhjbHVkZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBib3VuZHMubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgYm91bmRzLnRvcCArICdweCc7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSBib3VuZHMud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBkZWxlZ2F0ZSBldmVudCBmb3IgYm9keSBjbGlja1xyXG4gICAgICB0aGlzLm1vdXNlQ2xpY2tFdmVudCA9IGZ1bmN0aW9uIChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgaWYgKGJsYWNrb3V0Qm94LmdldEF0dHJpYnV0ZShkYXRhRXhjbHVkZSkgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgdmFyIGJsYWNrb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJsYWNrb3V0LmNsYXNzTmFtZSA9ICR0aGlzLm9wdGlvbnMuYmxhY2tvdXRDbGFzcztcclxuICAgICAgICAgICAgYmxhY2tvdXQuc3R5bGUubGVmdCA9IGJsYWNrb3V0Qm94LnN0eWxlLmxlZnQ7XHJcbiAgICAgICAgICAgIGJsYWNrb3V0LnN0eWxlLnRvcCA9IGJsYWNrb3V0Qm94LnN0eWxlLnRvcDtcclxuICAgICAgICAgICAgYmxhY2tvdXQuc3R5bGUud2lkdGggPSBibGFja291dEJveC5zdHlsZS53aWR0aDtcclxuICAgICAgICAgICAgYmxhY2tvdXQuc3R5bGUuaGVpZ2h0ID0gYmxhY2tvdXRCb3guc3R5bGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibGFja291dCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodEJveC5nZXRBdHRyaWJ1dGUoZGF0YUV4Y2x1ZGUpID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEJveC5jbGFzc05hbWUgKz0gJyAnICsgJHRoaXMub3B0aW9ucy5oaWdobGlnaHRDbGFzcztcclxuICAgICAgICAgICAgaGlnaGxpZ2h0Qm94LmNsYXNzTmFtZSA9IGhpZ2hsaWdodEJveC5jbGFzc05hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAvZmJcXC1oaWdobGlnaHRcXC1lbGVtZW50L2csXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJHRoaXMuaGlnaGxpZ2h0Qm94ID0gaGlnaGxpZ2h0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAnY2FudmFzJ1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY3R4ID0gaGlnaGxpZ2h0Qm94LmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICBoaWdobGlnaHRCb3guY2xhc3NOYW1lICs9ICcgJyArIGZlZWRiYWNrSGlnaGxpZ2h0RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0Qm94KTtcclxuICAgICAgICAgICAgY2xlYXJCb3goKTtcclxuICAgICAgICAgICAgcHJldmlvdXNFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0Q2xvc2UgPSBlbGVtZW50KCdkaXYnLCAnWCcpO1xyXG4gICAgICB0aGlzLmJsYWNrb3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHZhciB0aW1lcjogYW55LFxyXG4gICAgICAgIGhpZ2hsaWdodENsb3NlID0gdGhpcy5oaWdobGlnaHRDbG9zZSxcclxuICAgICAgICBoaWdobGlnaHRCb3ggPSB0aGlzLmhpZ2hsaWdodEJveCxcclxuICAgICAgICBibGFja291dEJveCA9IHRoaXMuYmxhY2tvdXRCb3gsXHJcbiAgICAgICAgaGlnaGxpZ2h0Q29udGFpbmVyID0gdGhpcy5oaWdobGlnaHRDb250YWluZXIsXHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudDogYW55LFxyXG4gICAgICAgIGN0eCA9IGhpZ2hsaWdodEJveC5nZXRDb250ZXh0KCcyZCcpLFxyXG4gICAgICAgIGJ1dHRvbkNsaWNrRnVuY3Rpb24gPSBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgaWYgKGJsYWNrb3V0QnV0dG9uLmNsYXNzTmFtZS5pbmRleE9mKCdhY3RpdmUnKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYmxhY2tvdXRCdXR0b24uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuICAgICAgICAgICAgaGlnaGxpZ2h0QnV0dG9uLmNsYXNzTmFtZSA9IGhpZ2hsaWdodEJ1dHRvbi5jbGFzc05hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAvYWN0aXZlL2csXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEJ1dHRvbi5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG4gICAgICAgICAgICBibGFja291dEJ1dHRvbi5jbGFzc05hbWUgPSBibGFja291dEJ1dHRvbi5jbGFzc05hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAvYWN0aXZlL2csXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhY3Rpb24gPSAhYWN0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJCb3ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjbGVhckJveEVsKGJsYWNrb3V0Qm94KTtcclxuICAgICAgICAgIGNsZWFyQm94RWwoaGlnaGxpZ2h0Qm94KTtcclxuXHJcbiAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFyQm94RWwgPSBmdW5jdGlvbiAoZWw6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gJy01cHgnO1xyXG4gICAgICAgICAgZWwuc3R5bGUudG9wID0gJy01cHgnO1xyXG4gICAgICAgICAgZWwuc3R5bGUud2lkdGggPSAnMHB4JztcclxuICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGRhdGFFeGNsdWRlLCAndHJ1ZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZUNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaGlnaGxpZ2h0Q2xvc2Uuc3R5bGUubGVmdCA9ICctNTBweCc7XHJcbiAgICAgICAgICBoaWdobGlnaHRDbG9zZS5zdHlsZS50b3AgPSAnLTUwcHgnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmxhY2tvdXRCdXR0b24gPSBlbGVtZW50KCdhJywgJ0JsYWNrb3V0JyksXHJcbiAgICAgICAgaGlnaGxpZ2h0QnV0dG9uID0gZWxlbWVudCgnYScsICdIaWdobGlnaHQnKSxcclxuICAgICAgICBwcmV2aW91c0VsZW1lbnQ6IGFueTtcclxuXHJcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSArPSAnIGZiLWFuaW1hdGUtdG9zaWRlJztcclxuXHJcbiAgICAgIGhpZ2hsaWdodENsb3NlLmlkID0gJ2ZiLWhpZ2hsaWdodC1jbG9zZSc7XHJcblxyXG4gICAgICBoaWdobGlnaHRDbG9zZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICdjbGljaycsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmVtb3ZlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlbW92ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgaGlkZUNsb3NlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWdobGlnaHRDbG9zZSk7XHJcblxyXG4gICAgICB0aGlzLmgyY0NhbnZhcy5jbGFzc05hbWUgPSAnZmItY2FudmFzJztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmgyY0NhbnZhcyk7XHJcblxyXG4gICAgICB2YXIgYnV0dG9uSXRlbTogYW55W10gPSBbaGlnaGxpZ2h0QnV0dG9uLCBibGFja291dEJ1dHRvbl07XHJcblxyXG4gICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChcclxuICAgICAgICBlbGVtZW50KCdwJywgJ0hpZ2hsaWdodCBvciBibGFja291dCBpbXBvcnRhbnQgaW5mb3JtYXRpb24nKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gYWRkIGhpZ2hsaWdodCBhbmQgYmxhY2tvdXQgYnV0dG9uc1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGJ1dHRvbkl0ZW1baV0uY2xhc3NOYW1lID1cclxuICAgICAgICAgICdmYi1idG4gZmItYnRuLXNtYWxsICcgKyAoaSA9PT0gMCA/ICdhY3RpdmUnIDogJ2ZiLWJ0bi1pbnZlcnNlJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbkl0ZW1baV0uaHJlZiA9ICcjJztcclxuICAgICAgICBidXR0b25JdGVtW2ldLm9uY2xpY2sgPSBidXR0b25DbGlja0Z1bmN0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChidXR0b25JdGVtW2ldKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpZ2hsaWdodENvbnRhaW5lci5pZCA9ICdmYi1oaWdobGlnaHQtY29udGFpbmVyJztcclxuICAgICAgaGlnaGxpZ2h0Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy5oMmNDYW52YXMud2lkdGggKyAncHgnO1xyXG4gICAgICBoaWdobGlnaHRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oMmNDYW52YXMuaGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0Qm94LmNsYXNzTmFtZSArPSAnICcgKyBmZWVkYmFja0hpZ2hsaWdodEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuYmxhY2tvdXRCb3guaWQgPSAnZmItYmxhY2tvdXQtZWxlbWVudCc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5oaWdobGlnaHRCb3gpO1xyXG4gICAgICBoaWdobGlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ibGFja291dEJveCk7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZ2hsaWdodENvbnRhaW5lcik7XHJcblxyXG4gICAgICAvLyBiaW5kIG1vdXNlIGRlbGVnYXRlIGV2ZW50c1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubW91c2VDbGlja0V2ZW50LCBmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzdGlsbCBsb2FkaW5nIGh0bWwyY2FudmFzXHJcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxyXG4gICAgICAgICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChuZXh0QnV0dG9uLmRpc2FibGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQobG9hZGVyKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkdGhpcy5zdGFydC5hcHBseSgkdGhpcywgYXJncyk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIC8vIGV4ZWN1dGUgdGhlIGh0bWwyY2FudmFzIHNjcmlwdFxyXG4gICAgdmFyIHNjcmlwdCxcclxuICAgICAgJHRoaXMgPSB0aGlzLFxyXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG4gICAgICBydW5IMmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIG9wdGlvbnMub25yZW5kZXJlZCA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25yZW5kZXJlZCB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoY2FudmFzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAkdGhpcy5oMmNDYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgICAgICAgJHRoaXMuaDJjRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmh0bWwyY2FudmFzKFtkb2N1bWVudC5ib2R5XSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgJHRoaXMuaDJjRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICBsb2coJ0Vycm9yIGluIGh0bWwyY2FudmFzOiAnICsgZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5odG1sMmNhbnZhcyA9PT0gdW5kZWZpbmVkICYmIHNjcmlwdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIGxldCdzIGxvYWQgaHRtbDJjYW52YXMgbGlicmFyeSB3aGlsZSB1c2VyIGlzIHdyaXRpbmcgbWVzc2FnZVxyXG5cclxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBvcHRpb25zLmgyY1BhdGggfHwgJ2xpYnMvaHRtbDJjYW52YXMuanMnO1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsb2coXHJcbiAgICAgICAgICAnRmFpbGVkIHRvIGxvYWQgaHRtbDJjYW52YXMgbGlicmFyeSwgY2hlY2sgdGhhdCB0aGUgcGF0aCBpcyBjb3JyZWN0bHkgZGVmaW5lZCdcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgKHNjcmlwdCBhcyBhbnkpLm9ubG9hZCA9IHNjcmlwdExvYWRlcihzY3JpcHQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLmh0bWwyY2FudmFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGxvZygnTG9hZGVkIGh0bWwyY2FudmFzLCBidXQgbGlicmFyeSBub3QgZm91bmQnKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vKHdpbmRvdyBhcyBhbnkpLmh0bWwyY2FudmFzLmxvZ2dpbmcgPSB3aW5kb3cuRmVlZGJhY2suZGVidWc7XHJcbiAgICAgICAgcnVuSDJjKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XHJcbiAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0LCBzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGh0bWwyY2FudmFzIGFscmVhZHkgbG9hZGVkLCBqdXN0IHJ1biBpdCB0aGVuXHJcbiAgICAgIHJ1bkgyYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuICBwdWJsaWMgZGF0YSgpIHtcclxuICAgIC8vaWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgLy99XHJcblxyXG4gICAgaWYgKHRoaXMuaDJjQ2FudmFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIGN0eCA9IHRoaXMuaDJjQ2FudmFzLmdldENvbnRleHQoJzJkJyksXHJcbiAgICAgICAgY2FudmFzQ29weSxcclxuICAgICAgICBjb3B5Q3R4LFxyXG4gICAgICAgIHJhZGl1cyA9IDU7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XHJcblxyXG4gICAgICAvLyBkcmF3IGJsYWNrb3V0c1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2VcclxuICAgICAgICAuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYi1ibGFja2Vkb3V0JyksIDApXHJcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW06IGFueSkge1xyXG4gICAgICAgICAgdmFyIGJvdW5kcyA9IGdldEJvdW5kcyhpdGVtKTtcclxuICAgICAgICAgIGN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGRyYXcgaGlnaGxpZ2h0c1xyXG4gICAgICB2YXIgaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmYi1oaWdobGlnaHRlZCcpLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gY29weSBjYW52YXNcclxuICAgICAgICBjYW52YXNDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY29weUN0eCA9IGNhbnZhc0NvcHkuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjYW52YXNDb3B5LndpZHRoID0gdGhpcy5oMmNDYW52YXMud2lkdGg7XHJcbiAgICAgICAgY2FudmFzQ29weS5oZWlnaHQgPSB0aGlzLmgyY0NhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvcHlDdHguZHJhd0ltYWdlKHRoaXMuaDJjQ2FudmFzLCAwLCAwKTtcclxuXHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjNzc3JztcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjU7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuaDJjQ2FudmFzLndpZHRoLCB0aGlzLmgyY0NhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW06IGFueSkge1xyXG4gICAgICAgICAgdmFyIHggPSBwYXJzZUludChpdGVtLnN0eWxlLmxlZnQsIDEwKSxcclxuICAgICAgICAgICAgeSA9IHBhcnNlSW50KGl0ZW0uc3R5bGUudG9wLCAxMCksXHJcbiAgICAgICAgICAgIHdpZHRoID0gcGFyc2VJbnQoaXRlbS5zdHlsZS53aWR0aCwgMTApLFxyXG4gICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUludChpdGVtLnN0eWxlLmhlaWdodCwgMTApO1xyXG5cclxuICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XHJcbiAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XHJcbiAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhcclxuICAgICAgICAgICAgeCArIHdpZHRoLFxyXG4gICAgICAgICAgICB5ICsgaGVpZ2h0LFxyXG4gICAgICAgICAgICB4ICsgd2lkdGggLSByYWRpdXMsXHJcbiAgICAgICAgICAgIHkgKyBoZWlnaHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKHggKyByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XHJcbiAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xyXG4gICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGN0eC5jbGlwKCk7XHJcblxyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcblxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzQ29weSwgMCwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRvIGF2b2lkIHNlY3VyaXR5IGVycm9yIGJyZWFrIGZvciB0YWludGVkIGNhbnZhc1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIGNhY2hlIGFuZCByZXR1cm4gZGF0YVxyXG4gICAgICAgIHJldHVybiB0aGlzLmgyY0NhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICB9XHJcbiAgcmV2aWV3KGRvbTogYW55KSB7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgpO1xyXG4gICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltZy5zcmMgPSBkYXRhO1xyXG4gICAgICBpbWcuc3R5bGUud2lkdGggPSAnMzAwcHgnO1xyXG4gICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICBkb20uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2VuZCB9IGZyb20gJy4uL1NlbmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFhIUiBleHRlbmRzIFNlbmQge1xyXG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB4aHI6IFhNTEh0dHBSZXF1ZXN0O1xyXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIH1cclxuICBzZW5kKGRhdGE6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLnhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICBjYWxsYmFjayh0aGlzLnhoci5zdGF0dXMgPT09IDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy54aHIub3BlbignUE9TVCcsIHRoaXMudXJsLCB0cnVlKTtcclxuICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoXHJcbiAgICAgICdDb250ZW50LXR5cGUnLFxyXG4gICAgICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgKTtcclxuICAgIHRoaXMueGhyLnNlbmQoJ2RhdGE9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcclxuICB9XHJcbn1cclxuIiwiLyogXHJcblx0Y25iaWxnaW4gXHJcblx0aHR0cHM6Ly9naXRodWIuY29tL2NuYmlsZ2luL2pxdWVyeS1kcmF3cGFkXHJcblx0diAwLjFcclxuKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgYmxvYlRvQ2FudmFzLFxyXG4gIGdldEpwZWdCbG9iLFxyXG4gIHRha2VTY3JlZW5zaG90SnBlZ0Jsb2JcclxufSBmcm9tICcuL21lZGlhLXV0aWxpdGllcyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBjb25zdCBwbHVnaW5TdWZmaXggPSAnZHJhd3BhZCc7XHJcbiAgJC5kcmF3cGFkID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBEcmF3cGFkUGx1Z2luT3B0aW9ucykge1xyXG4gICAgbGV0IGRlZmF1bHRzID0ge1xyXG4gICAgICBkZWZhdWx0Q29sb3I6ICcjZjFjNDBmJyxcclxuICAgICAgY29sb3JzOiBbXHJcbiAgICAgICAgJyMwMDAwMDAnLCAvL2JsYWNrXHJcbiAgICAgICAgJyMyZWNjNzEnLCAvL2dyZWVuXHJcbiAgICAgICAgJyMzNDk4ZGInLCAvL2JsdWVcclxuICAgICAgICAnI2U3NGMzYycsIC8vcmVkXHJcbiAgICAgICAgJyNmMWM0MGYnLCAvL3llbGxvd1xyXG4gICAgICAgICcjOWI1OWI2JywgLy9wdXJwbGVcclxuICAgICAgICAnI2U2N2UyMicgLy9vcmFuZ2VcclxuICAgICAgXSxcclxuICAgICAgZXJhc2VyU2l6ZTogMTBcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHBsdWdpbiA9IHRoaXM7XHJcbiAgICBsZXQgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuICAgIHBsdWdpbi5zZXR0aW5ncyA9IHt9O1xyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgIGxldCBkcmF3aW5nID0gZmFsc2U7XHJcbiAgICBsZXQgZHJhd2luZ1R5cGUgPSAncGVuJztcclxuICAgIGNvbnN0IGxpbmVTdHlsZSA9IHtcclxuICAgICAgd2lkdGg6IDUsXHJcbiAgICAgIGNvbG9yOiBkZWZhdWx0cy5kZWZhdWx0Q29sb3IsXHJcbiAgICAgIHR5cGU6ICdyb3VuZCdcclxuICAgIH07XHJcbiAgICBsZXQgYnl0ZXMgPSAnJztcclxuICAgIC8vUmVjdGFuZ2xlIFN0dWZmXHJcbiAgICBsZXQgcG9zaXRpb25BOiBhbnk7XHJcbiAgICBsZXQgcG9zaXRpb25COiBhbnk7XHJcbiAgICBsZXQgY2FudmFzT2Zmc2V0OyAvLyA9ICRjYW52YXMub2Zmc2V0KCk7XHJcbiAgICBsZXQgb2Zmc2V0WDogbnVtYmVyOyAvLz0gY2FudmFzT2Zmc2V0LmxlZnQ7XHJcbiAgICBsZXQgb2Zmc2V0WTogbnVtYmVyOyAvLz0gY2FudmFzT2Zmc2V0LnRvcDtcclxuICAgIGxldCBzY3JvbGxYOiBudW1iZXI7IC8vPSAkY2FudmFzLnNjcm9sbExlZnQoKTtcclxuICAgIGxldCBzY3JvbGxZOiBudW1iZXI7IC8vPSAkY2FudmFzLnNjcm9sbFRvcCgpO1xyXG4gICAgbGV0IHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgbGV0IHN0YXJ0WTogbnVtYmVyO1xyXG5cclxuICAgIGxldCBwcmV2U3RhcnRYID0gMDtcclxuICAgIGxldCBwcmV2U3RhcnRZID0gMDtcclxuXHJcbiAgICBsZXQgcHJldldpZHRoID0gMDtcclxuICAgIGxldCBwcmV2SGVpZ2h0ID0gMDtcclxuICAgIC8vRW5kIFJlY3RhbmdsZSBTdHVmZlxyXG4gICAgLyogcHJpdmF0ZSBtZXRob2RzICovXHJcbiAgICBjb25zdCBjcmVhdGVDYW52YXMgPSAoKSA9PiB7XHJcbiAgICAgIHBsdWdpbi4kY2FudmFzID0gJCgnPGNhbnZhcz48L2NhbnZhcz4nKTtcclxuICAgICAgcGx1Z2luLmNhbnZhcyA9IHBsdWdpbi4kY2FudmFzLmdldCgwKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgcGx1Z2luLmNvbnRleHQgPSBwbHVnaW4uY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICByZXR1cm4gcGx1Z2luLiRjYW52YXM7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlT3ZlcmxheUNhbnZhcyA9ICgpID0+IHtcclxuICAgICAgcGx1Z2luLiRvdmVybGF5Q2FudmFzID0gJCgnPGNhbnZhcz48L2NhbnZhcz4nKTtcclxuICAgICAgcGx1Z2luLm92ZXJsYXlDYW52YXMgPSBwbHVnaW4uJG92ZXJsYXlDYW52YXMuZ2V0KDApIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICBwbHVnaW4ub3ZlcmxheUNvbnRleHQgPSBwbHVnaW4ub3ZlcmxheUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgcmV0dXJuIHBsdWdpbi4kb3ZlcmxheUNhbnZhcztcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNpemVDYW52YXMgPSAoKSA9PiB7XHJcbiAgICAgIHBsdWdpbi5jYW52YXMud2lkdGggPSAkZWxlbWVudC53aWR0aCgpO1xyXG4gICAgICBwbHVnaW4uY2FudmFzLmhlaWdodCA9ICRlbGVtZW50LmhlaWdodCgpO1xyXG4gICAgICBwbHVnaW4ub3ZlcmxheUNhbnZhcy53aWR0aCA9ICRlbGVtZW50LndpZHRoKCk7XHJcbiAgICAgIHBsdWdpbi5vdmVybGF5Q2FudmFzLmhlaWdodCA9ICRlbGVtZW50LmhlaWdodCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldE1vdXNlUG9zID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBldnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICB5OiBldnQuY2xpZW50WSAtIHJlY3QudG9wXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlVG9vbGJveCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgJHRvb2xib3ggPSAkKGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LXRvb2xib3hcIj48L2Rpdj5gKTtcclxuICAgICAgY29uc3QgY3JlYXRlQ29sb3Jib3ggPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYCR7cGx1Z2luU3VmZml4fS1jb2xvcmJveC1hY3RpdmVgO1xyXG4gICAgICAgIGxldCAkY29sb3Jib3ggPSAkKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3Jib3hcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHtjb2xvcn07XCI+Jm5ic3A7PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSBwbHVnaW4uc2V0dGluZ3MuZGVmYXVsdENvbG9yKSB7XHJcbiAgICAgICAgICAkY29sb3Jib3guYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNvbG9yYm94Lm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGAke3BsdWdpblN1ZmZpeH0tZXJhc2UtbW9kZWApO1xyXG4gICAgICAgICAgbGluZVN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAvLyBkcmF3aW5nVHlwZSA9ICdwZW4nO1xyXG4gICAgICAgICAgJGNvbG9yYm94LmFkZENsYXNzKGFjdGl2ZUNsYXNzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgIGxvZ0RyYXdpbmdQYXJhbXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRjb2xvcmJveDtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgY3JlYXRlRXJhc2VyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gYCR7cGx1Z2luU3VmZml4fS1jb2xvcmJveC1hY3RpdmVgO1xyXG4gICAgICAgIGNvbnN0ICRlcmFzZXIgPSAkKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCIke3BsdWdpblN1ZmZpeH0tY29sb3Jib3ggJHtwbHVnaW5TdWZmaXh9LWVyYXNlclwiPiZuYnNwOzwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAkZXJhc2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRyYXdpbmdUeXBlID0gJ2VyYXNlcic7XHJcbiAgICAgICAgICAkZWxlbWVudC5hZGRDbGFzcyhgJHtwbHVnaW5TdWZmaXh9LWVyYXNlLW1vZGVgKTtcclxuICAgICAgICAgICRlcmFzZXIuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gJGVyYXNlcjtcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgY3JlYXRlRHJhd2luZ1Rvb2wgPSAodG9vbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBgJHtwbHVnaW5TdWZmaXh9LWRyYXdpbmctdHlwZS1hY3RpdmVgO1xyXG4gICAgICAgIHZhciB0ZXh0ID0gdG9vbCA9PSAncGVuJyA/ICcmI3gzMDMwOycgOiAnJiN4MjVBRDsnO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IHRvb2wgPT0gJ3BlbicgPyAnRnJlZWhhbmQnIDogJ1JlY3RhbmdsZSc7XHJcbiAgICAgICAgY29uc3QgJGRyYXdpbmdUb29sID0gJChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94ICR7cGx1Z2luU3VmZml4fS1kcmF3aW5nLXRvb2xcIiB0aXRsZT1cIiR7dGl0bGV9XCI+JHt0ZXh0fTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkcmF3aW5nVHlwZSA9PT0gdG9vbCkge1xyXG4gICAgICAgICAgJGRyYXdpbmdUb29sLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGRyYXdpbmdUb29sLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRyYXdpbmdUeXBlID0gdG9vbDtcclxuICAgICAgICAgIGxvZ0RyYXdpbmdQYXJhbXMoKTtcclxuICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKGAke3BsdWdpblN1ZmZpeH0tZHJhd2luZy10b29sYCk7XHJcbiAgICAgICAgICAkZHJhd2luZ1Rvb2xcclxuICAgICAgICAgICAgLmFkZENsYXNzKGFjdGl2ZUNsYXNzKVxyXG4gICAgICAgICAgICAuc2libGluZ3MoKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gJGRyYXdpbmdUb29sO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBjcmVhdGVTY3JlZW5DYXB0dXJlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRzY3JlZW5DYXB0dXJlID0gJChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94ICR7cGx1Z2luU3VmZml4fS1zY3JlZW5cIj4mI3gxRjNBQzs8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJHNjcmVlbkNhcHR1cmUub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgLy9qUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLmhpZGUoKTtcclxuICAgICAgICAgIC8valF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1jYW52YXMnKS5oaWRlKCk7XHJcbiAgICAgICAgICB2YXIgc2NyZWVuc2hvdEpwZWdCbG9iID0gYXdhaXQgdGFrZVNjcmVlbnNob3RKcGVnQmxvYigpO1xyXG4gICAgICAgICAgYXdhaXQgYmxvYlRvQ2FudmFzKHNjcmVlbnNob3RKcGVnQmxvYiwgbnVsbCwgbnVsbCwgcGx1Z2luLmNhbnZhcyk7XHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1jYW52YXMnKS5zaG93KCk7XHJcbiAgICAgICAgICAvL2pRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gJHNjcmVlbkNhcHR1cmU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjcmVhdGVEb25lQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRkb25lQnV0dG9uID0gJChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94ICR7cGx1Z2luU3VmZml4fS1kb25lXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOjAgMnB4IDJweCAwO1wiIHRpdGxlPVwiQ2xpY2sgaGVyZSBhZnRlciBkb25lIGVkaXRpbmcuXCI+JiN4MjcxNDs8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgJGRvbmVCdXR0b24ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGdldEpwZWdCbG9iKHBsdWdpbi5jYW52YXMpO1xyXG4gICAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5zaG93KCk7XHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLnNob3coKTtcclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWNhbnZhcycpLmhpZGUoKTtcclxuICAgICAgICAgIHZhciBjYW52YXMgPSBqUXVlcnkoXHJcbiAgICAgICAgICAgICcuZmVlZGJhY2stc2NyZWVuc2hvdCBjYW52YXMnXHJcbiAgICAgICAgICApWzBdIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgICAgYnl0ZXMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICBhd2FpdCBibG9iVG9DYW52YXMoYmxvYiwgMzAwLCAzMDAsIGNhbnZhcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkZG9uZUJ1dHRvbjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZUhhbmRsZVRvb2wgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBgJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94LWFjdGl2ZWA7XHJcbiAgICAgICAgbGV0ICRkcmFnSGFuZGxlID0gJChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LWNvbG9yYm94XCIgdGl0bGU9XCJEcmFnIHRvIG1vdmUgdGhlIHRvb2xiYXJcIiBzdHlsZT1cImN1cnNvcjptb3ZlO2JvcmRlci1yYWRpdXM6MnB4IDAgMCAycHg7XCI+JiN4MjYzMDs8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRZOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGluaXRpYWxYOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGluaXRpYWxZOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IHhPZmZzZXQgPSAwO1xyXG4gICAgICAgIGxldCB5T2Zmc2V0ID0gMDtcclxuICAgICAgICAkZHJhZ0hhbmRsZS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGluaXRpYWxYID0gZS5jbGllbnRYIC0geE9mZnNldDtcclxuICAgICAgICAgIGluaXRpYWxZID0gZS5jbGllbnRZIC0geU9mZnNldDtcclxuICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRkcmFnSGFuZGxlLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGluaXRpYWxYID0gY3VycmVudFg7XHJcbiAgICAgICAgICBpbml0aWFsWSA9IGN1cnJlbnRZO1xyXG5cclxuICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkZHJhZ0hhbmRsZS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjdXJyZW50WCA9IGUuY2xpZW50WCAtIGluaXRpYWxYO1xyXG4gICAgICAgICAgICBjdXJyZW50WSA9IGUuY2xpZW50WSAtIGluaXRpYWxZO1xyXG5cclxuICAgICAgICAgICAgeE9mZnNldCA9IGN1cnJlbnRYO1xyXG4gICAgICAgICAgICB5T2Zmc2V0ID0gY3VycmVudFk7XHJcbiAgICAgICAgICAgICRkcmFnSGFuZGxlLmdldCgwKS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAndHJhbnNsYXRlM2QoJyArIGN1cnJlbnRYICsgJ3B4LCAnICsgY3VycmVudFkgKyAncHgsIDApJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gJGRyYWdIYW5kbGU7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0ICRjb2xvcnMgPSAkKGA8ZGl2IGNsYXNzPVwiJHtwbHVnaW5TdWZmaXh9LWNvbG9yc1wiPjwvZGl2PmApO1xyXG4gICAgICAkY29sb3JzLmFwcGVuZChjcmVhdGVIYW5kbGVUb29sKCkpO1xyXG4gICAgICBwbHVnaW4uc2V0dGluZ3MuY29sb3JzLmZvckVhY2goKGNvbG9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAkY29sb3JzLmFwcGVuZChjcmVhdGVDb2xvcmJveChjb2xvcikpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vICRjb2xvcnMuYXBwZW5kKGNyZWF0ZUVyYXNlcigpKTsgLy9kb250IHJlYWxseSBuZWVkIGl0XHJcbiAgICAgIC8vICRjb2xvcnMuYXBwZW5kKGNyZWF0ZVNjcmVlbkNhcHR1cmUoKSk7XHJcbiAgICAgICRjb2xvcnMuYXBwZW5kKGNyZWF0ZURyYXdpbmdUb29sKCdwZW4nKSk7XHJcbiAgICAgICRjb2xvcnMuYXBwZW5kKGNyZWF0ZURyYXdpbmdUb29sKCdyZWN0YW5nbGUnKSk7XHJcbiAgICAgICRjb2xvcnMuYXBwZW5kKGNyZWF0ZURvbmVCdXR0b24oKSk7XHJcbiAgICAgICR0b29sYm94LmFwcGVuZCgkY29sb3JzKTtcclxuXHJcbiAgICAgIHJldHVybiAkdG9vbGJveDtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dEcmF3aW5nUGFyYW1zID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkcmF3aW5nVHlwZSwgbGluZVN0eWxlLCBkcmF3aW5nKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cGRhdGVDb29yZGluYXRlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgY29vcmRpbmF0ZS54ID0gZXZlbnQub2Zmc2V0WDtcclxuICAgICAgY29vcmRpbmF0ZS55ID0gZXZlbnQub2Zmc2V0WTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RhcnREcmF3ID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGRyYXdpbmcgPSB0cnVlO1xyXG4gICAgICAkZWxlbWVudC5hZGRDbGFzcyhgJHtwbHVnaW5TdWZmaXh9LWRyYXdpbmdgKTtcclxuICAgICAgdXBkYXRlQ29vcmRpbmF0ZShldmVudCk7XHJcbiAgICAgIHBvc2l0aW9uQSA9IGdldE1vdXNlUG9zKHBsdWdpbi5jYW52YXMsIGV2ZW50KTtcclxuICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WCAtIG9mZnNldFg7XHJcbiAgICAgIHN0YXJ0WSA9IGV2ZW50LmNsaWVudFkgLSBvZmZzZXRZO1xyXG4gICAgICBoYW5kbGVEcmF3KGV2ZW50KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVTdG9wRHJhdyA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBkcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGAke3BsdWdpblN1ZmZpeH0tZHJhd2luZ2ApO1xyXG4gICAgICBwb3NpdGlvbkIgPSBnZXRNb3VzZVBvcyhwbHVnaW4uY2FudmFzLCBldmVudCk7XHJcbiAgICAgIGlmIChkcmF3aW5nVHlwZSA9PSAncmVjdGFuZ2xlJyAmJiBwcmV2V2lkdGggIT0gMCkge1xyXG4gICAgICAgIHBsdWdpbi5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVTdHlsZS53aWR0aDtcclxuICAgICAgICBwbHVnaW4uY29udGV4dC5zdHJva2VTdHlsZSA9IGxpbmVTdHlsZS5jb2xvcjtcclxuICAgICAgICBwbHVnaW4uY29udGV4dC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgcHJldlN0YXJ0WCxcclxuICAgICAgICAgIHByZXZTdGFydFksXHJcbiAgICAgICAgICBwcmV2V2lkdGgsXHJcbiAgICAgICAgICBwcmV2SGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICAvL3Jlc2V0XHJcbiAgICAgICAgcHJldldpZHRoID0gMDtcclxuICAgICAgICBwcmV2SGVpZ2h0ID0gMDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZURyYXcgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKCFkcmF3aW5nKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGN0eCA9IHBsdWdpbi5jb250ZXh0O1xyXG4gICAgICBpZiAoZHJhd2luZ1R5cGUgIT0gJ3JlY3RhbmdsZScpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgc3dpdGNoIChkcmF3aW5nVHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAncGVuJzpcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lU3R5bGUud2lkdGg7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVTdHlsZS5jb2xvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdlcmFzZXInOlxyXG4gICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBwbHVnaW4uc2V0dGluZ3MuZXJhc2VyU2l6ZTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5saW5lQ2FwID0gbGluZVN0eWxlLnR5cGU7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyhjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XHJcbiAgICAgICAgdXBkYXRlQ29vcmRpbmF0ZShldmVudCk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhjb29yZGluYXRlLngsIGNvb3JkaW5hdGUueSk7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvY3R4ID0gcGx1Z2luLm92ZXJsYXlDb250ZXh0O1xyXG4gICAgICAgIC8vIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcclxuICAgICAgICBvY3R4LmxpbmVXaWR0aCA9IGxpbmVTdHlsZS53aWR0aDtcclxuICAgICAgICBvY3R4LnN0cm9rZVN0eWxlID0gbGluZVN0eWxlLmNvbG9yO1xyXG4gICAgICAgIGxldCBtb3VzZVggPSBldmVudC5jbGllbnRYIC0gb2Zmc2V0WDtcclxuICAgICAgICBsZXQgbW91c2VZID0gZXZlbnQuY2xpZW50WSAtIG9mZnNldFk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gbW91c2VYIC0gc3RhcnRYO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBtb3VzZVkgLSBzdGFydFk7XHJcbiAgICAgICAgLy8gY2xlYXIgdGhlIGNhbnZhc1xyXG4gICAgICAgIG9jdHguY2xlYXJSZWN0KDAsIDAsIHBsdWdpbi5jYW52YXMud2lkdGgsIHBsdWdpbi5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgb2N0eC5zdHJva2VSZWN0KHN0YXJ0WCwgc3RhcnRZLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBwcmV2U3RhcnRYID0gc3RhcnRYO1xyXG4gICAgICAgIHByZXZTdGFydFkgPSBzdGFydFk7XHJcblxyXG4gICAgICAgIHByZXZXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHByZXZIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MocGx1Z2luU3VmZml4KTtcclxuICAgICAgJGVsZW1lbnQuYXBwZW5kKGNyZWF0ZUNhbnZhcygpKTtcclxuICAgICAgJGVsZW1lbnQuYXBwZW5kKGNyZWF0ZU92ZXJsYXlDYW52YXMoKSk7IC8vVE9ETzogU3VwcG9ydCBkcmF3aW5nIHJlY3RhbmdsZXNcclxuICAgICAgJGVsZW1lbnQuYXBwZW5kKGNyZWF0ZVRvb2xib3goKSk7XHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG5cclxuICAgICAgcGx1Z2luLiRvdmVybGF5Q2FudmFzLm9uKCdtb3VzZWRvd24nLCBoYW5kbGVTdGFydERyYXcpO1xyXG4gICAgICBwbHVnaW4uJG92ZXJsYXlDYW52YXMub24oJ21vdXNldXAgbW91c2VsZWF2ZSBtb3VzZW91dCcsIGhhbmRsZVN0b3BEcmF3KTtcclxuICAgICAgcGx1Z2luLiRvdmVybGF5Q2FudmFzLm9uKCdtb3VzZW1vdmUnLCBoYW5kbGVEcmF3KTtcclxuICAgIH07XHJcblxyXG4gICAgLyogcHVibGljIG1ldGhvZHMgKi9cclxuICAgIHBsdWdpbi5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwbHVnaW4uc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICBpbml0aWFsaXplKCk7XHJcbiAgICAgIHJldHVybiBwbHVnaW47XHJcbiAgICB9O1xyXG5cclxuICAgIHBsdWdpbi5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGx1Z2luLmNvbnRleHQuY2xlYXJSZWN0KFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBwbHVnaW4uY29udGV4dC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgcGx1Z2luLmNvbnRleHQuY2FudmFzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICBwbHVnaW4ub3ZlcmxheUNvbnRleHQuY2xlYXJSZWN0KFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBwbHVnaW4ub3ZlcmxheUNvbnRleHQuY2FudmFzLndpZHRoLFxyXG4gICAgICAgIHBsdWdpbi5vdmVybGF5Q29udGV4dC5jYW52YXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHBsdWdpbi5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwbHVnaW4uZ2V0Qnl0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBwbHVnaW4uY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfTtcclxuICAgIHBsdWdpbi5zZXRDYXB0dXJlU2NyZWVuID0gYXN5bmMgZnVuY3Rpb24gKGJsb2I6IEJsb2IpIHtcclxuICAgICAgcGx1Z2luLmNsZWFyKCk7XHJcbiAgICAgIGF3YWl0IGJsb2JUb0NhbnZhcyhibG9iLCBudWxsLCBudWxsLCBwbHVnaW4uY2FudmFzKTtcclxuICAgICAgY2FudmFzT2Zmc2V0ID0gcGx1Z2luLiRjYW52YXMub2Zmc2V0KCk7XHJcbiAgICAgIG9mZnNldFggPSBjYW52YXNPZmZzZXQubGVmdDtcclxuICAgICAgb2Zmc2V0WSA9IGNhbnZhc09mZnNldC50b3A7XHJcbiAgICAgIHNjcm9sbFggPSBwbHVnaW4uJGNhbnZhcy5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgIHNjcm9sbFkgPSBwbHVnaW4uJGNhbnZhcy5zY3JvbGxUb3AoKTtcclxuICAgICAgcGx1Z2luLm92ZXJsYXlDYW52YXMud2lkdGggPSBwbHVnaW4uY2FudmFzLndpZHRoO1xyXG4gICAgICBwbHVnaW4ub3ZlcmxheUNhbnZhcy5oZWlnaHQgPSBwbHVnaW4uY2FudmFzLmhlaWdodDtcclxuICAgICAgcGx1Z2luLm92ZXJsYXlDYW52YXMuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICdzdHlsZScsXHJcbiAgICAgICAgYHdpZHRoOiR7cGx1Z2luLmNhbnZhcy53aWR0aH1weDtoZWlnaHQ6JHtwbHVnaW4uY2FudmFzLmhlaWdodH1weGBcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHBsdWdpbjtcclxuICAgIH07XHJcblxyXG4gICAgcGx1Z2luLmluaXQoKTtcclxuICB9O1xyXG5cclxuICAkLmZuLmRyYXdwYWQgPSBmdW5jdGlvbiAob3B0aW9uczogRHJhd3BhZFBsdWdpbk9wdGlvbnMpIHtcclxuICAgIGlmICgkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4KSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciBwbHVnaW4gPSBuZXcgJC5kcmF3cGFkKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4LCBwbHVnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4KTtcclxuICB9O1xyXG59KShqUXVlcnkpO1xyXG4iLCJpbXBvcnQgeyBGZWVkYmFjayB9IGZyb20gJy4vZmVlZGJhY2suanMvQ29yZSc7XHJcbmltcG9ydCB7IFNhdmVSZXN1bHRzQWRhcHRlciB9IGZyb20gJy4vZmVlZGJhY2suanMvU2F2ZVJlc3VsdHNBZGFwdG9yJztcclxuaW1wb3J0IHtcclxuICBJc0Rpc3BsYXlNZWRpYVN1cHBvcnRlZCxcclxuICB0YWtlU2NyZWVuc2hvdEpwZWdCbG9iXHJcbn0gZnJvbSAnLi9tZWRpYS11dGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBTdXJ2ZXlzU2VydmljZSB9IGZyb20gJy4vc3VydmV5cy5zZXJ2aWNlJztcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIGNvbnN0IHBsdWdpblN1ZmZpeCA9ICdmZWVkYmFjayc7XHJcbiAgbGV0IHN1cnZleXNlcnZpY2U6IFN1cnZleXNTZXJ2aWNlO1xyXG4gIGxldCBmZWVkYmFja0RpYWxvZzogRmVlZGJhY2s7XHJcbiAgJC5mZWVkYmFjayA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogRmVlZGJhY2tQbHVnaW5PcHRpb25zKSB7XHJcbiAgICBsZXQgcGx1Z2luID0gdGhpcztcclxuICAgIGxldCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICBsZXQgZGVmYXVsdHMgPSB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYWEtbnBzLWFkbWluLWd3LWFwaW0uYXp1cmUtYXBpLm5ldC9ncmFwaHFsJyxcclxuICAgICAgYXNzZXRzVXJsOiAnaHR0cHM6Ly9hYW5wc2FkbWludWkuejEzLndlYi5jb3JlLndpbmRvd3MubmV0J1xyXG4gICAgfTtcclxuICAgIHBsdWdpbi5zZXR0aW5ncyA9IHt9O1xyXG5cclxuICAgIC8qIHByaXZhdGUgbWV0aG9kcyAqL1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgIHN1cnZleXNlcnZpY2UgPSBuZXcgU3VydmV5c1NlcnZpY2Uoe1xyXG4gICAgICAgIGFsbG93X211bHRpcGxlOiBmYWxzZSxcclxuICAgICAgICBhcmNoZXJfaWQ6IHBsdWdpbi5zZXR0aW5ncy5hcmNoZXJfaWQsXHJcbiAgICAgICAgdXJsOiBwbHVnaW4uc2V0dGluZ3MudXJsLFxyXG4gICAgICAgIGFzc2V0c1VybDogbnVsbCxcclxuICAgICAgICBmZWVkYmFja1NvdXJjZTogbnVsbCxcclxuICAgICAgICBtb2RlOiAnJyxcclxuICAgICAgICBvdXRwdXRTZWxlY3RvcjogJycsXHJcbiAgICAgICAgc3VydmV5X2lkOiAnJ1xyXG4gICAgICB9KTtcclxuICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MocGx1Z2luU3VmZml4KTtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY2xvc2UtYnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWdsYXNzJykuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuaGlkZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJ0bi5jb250aW51ZS1idG4nKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tbWVudHMgPSBqUXVlcnkoJy5mZWVkYmFjay1jb21tZW50cycpLmVxKDApLnZhbCgpIGFzIHN0cmluZztcclxuICAgICAgICBpZiAoY29tbWVudHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWNvbW1lbnRzJykuYWRkQ2xhc3MoJ2ZlZWRiYWNrLWVycm9yJyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgY29tbWVudHM6IGpRdWVyeSgnLmZlZWRiYWNrLWNvbW1lbnRzJykuZXEoMCkudmFsKCksXHJcbiAgICAgICAgICBlbXBsb3llZV9uYW1lOiBqUXVlcnkoJy5mZWVkYmFjay1uYW1lJykuZXEoMCkudmFsKCksXHJcbiAgICAgICAgICBlbXBsb3llZV9lbWFpbDogalF1ZXJ5KCcuZmVlZGJhY2stZW1haWwnKS5lcSgwKS52YWwoKSxcclxuICAgICAgICAgIHNjcmVlbl9zaG90OiBwbHVnaW4uZ2V0Qnl0ZXMoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IHN1cnZleXNlcnZpY2UucG9zdFVzZXJGZWVkYmFjayhkYXRhKTtcclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2xhcmdlJyk7XHJcbiAgICAgICAgICAvKmpRdWVyeSgnLmZlZWRiYWNrLWJvZHknKVxyXG4gICAgICAgICAgLmVxKDApXHJcbiAgICAgICAgICAuaHRtbChcclxuICAgICAgICAgICAgJzxoMz5UaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2sud2Ugd2lsbCBjb250YWN0IHlvdSBpZiB3ZSBuZWVkIG1vcmUgaW5mb3JtYXRpb248L2gzPidcclxuICAgICAgICAgICk7Ki9cclxuICAgICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJvZHkgPiBkaXYgPiBoMycpLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4nKS5oaWRlKCk7XHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY2xvc2UtYnRuJykuc2hvdygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3Igc2VuZGluZyB5b3VyIGZlZWRiYWNrIHRvIHRoZSBzZXJ2ZXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stc2NyZWVuc2hvdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgICB2YXIgc2NyZWVuc2hvdEpwZWdCbG9iID0gYXdhaXQgdGFrZVNjcmVlbnNob3RKcGVnQmxvYigpO1xyXG4gICAgICAgIHBsdWdpbiA9IGpRdWVyeSgnLmZlZWRiYWNrLWNhbnZhcycpLnNob3coKS5kcmF3cGFkKCk7XHJcbiAgICAgICAgcGx1Z2luLnNldENhcHR1cmVTY3JlZW4oc2NyZWVuc2hvdEpwZWdCbG9iKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1pbmZvJykuc2hvdygpLmRlbGF5KDUwMDApLmZhZGVPdXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVDbGFzc2ljVmVyc2lvbiA9ICgpID0+IHtcclxuICAgICAgZmVlZGJhY2tEaWFsb2cgPSBuZXcgRmVlZGJhY2soe1xyXG4gICAgICAgIGgyY1BhdGg6IGAke3BsdWdpbi5zZXR0aW5ncy5hc3NldHNVcmx9L2Fzc2V0cy9odG1sMmNhbnZhcy5qc2AsXHJcbiAgICAgICAgYXBwZW5kVG86IG51bGwsIC8vIGRvbid0IGFkZCBmZWVkYmFjayBidXR0b24gdG8gcGFnZVxyXG4gICAgICAgIGFkYXB0ZXI6IG5ldyBTYXZlUmVzdWx0c0FkYXB0ZXIocGx1Z2luLnNldHRpbmdzKVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyogcHVibGljIG1ldGhvZHMgKi9cclxuICAgIHBsdWdpbi5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwbHVnaW4uc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICBwbHVnaW4uZGlzcGxheU1lZGlhU3VwcG9ydGVkID0gSXNEaXNwbGF5TWVkaWFTdXBwb3J0ZWQoKTtcclxuICAgICAgcGx1Z2luLmRpc3BsYXlNZWRpYVN1cHBvcnRlZCA9IGZhbHNlOyAvL3RvIHRlc3QgaW4gY2hyb21lXHJcbiAgICAgIGlmIChwbHVnaW4uZGlzcGxheU1lZGlhU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRpYWxpemVDbGFzc2ljVmVyc2lvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwbHVnaW47XHJcbiAgICB9O1xyXG5cclxuICAgIHBsdWdpbi5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAocGx1Z2luLmRpc3BsYXlNZWRpYVN1cHBvcnRlZCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWdsYXNzJykuc2hvdygpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuc2hvdygpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJ0bi5jbG9zZS1idG4nKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYnRuLmNvbnRpbnVlLWJ0bicpLnNob3coKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1jb21tZW50cycpLmVxKDApLnZhbCgnJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stc2NyZWVuc2hvdCcpLmVxKDApLmh0bWwoJzxjYW52YXM+PC9jYW52YXM+Jyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYm9keSA+IGRpdiA+IGgzJykuaGlkZSgpLnNpYmxpbmdzKCkuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZlZWRiYWNrRGlhbG9nLm9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBsdWdpbi5pbml0KCk7XHJcbiAgfTtcclxuXHJcbiAgJC5mbi5mZWVkYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zOiBGZWVkYmFja1BsdWdpbk9wdGlvbnMpIHtcclxuICAgIGlmICgkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4KSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciBwbHVnaW4gPSBuZXcgJC5mZWVkYmFjayh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHBsdWdpblN1ZmZpeCwgcGx1Z2luKTtcclxuICAgIH1cclxuICAgIHJldHVybiAkKHRoaXMpLmRhdGEocGx1Z2luU3VmZml4KTtcclxuICB9O1xyXG59KShqUXVlcnkpO1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyB0YWtlU2NyZWVuc2hvdEpwZWdCbG9iIH0gZnJvbSAnLi9tZWRpYS11dGlsaXRpZXMnO1xyXG5cclxuaW1wb3J0IHsgU3VydmV5c1NlcnZpY2UgfSBmcm9tICcuL3N1cnZleXMuc2VydmljZSc7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHBsdWdpbiBmdW5jdGlvbiBvbiB0aGUgalF1ZXJ5IGV4dGVuc2lvbiBwb2ludC5cclxuLy8gTm90ZTogRnVuY3Rpb24gYW5kIGdsb2JhbCBkZWZhdWx0IG9wdGlvbnMgbXVzdCBiZSBjb21iaW5lZCBhcyBsb25nIGFzIHRoZSBvcHRpb25zIGFyZSBtYW5kYXRvcnkuXHJcbiQuZm4uc3VydmV5c1BsdWdpbiA9IE9iamVjdC5hc3NpZ248XHJcbiAgU3VydmV5c1BsdWdpbkZ1bmN0aW9uLFxyXG4gIFN1cnZleXNQbHVnaW5HbG9iYWxPcHRpb25zXHJcbj4oXHJcbiAgZnVuY3Rpb24gKHRoaXM6IEpRdWVyeSwgb3B0aW9uczogU3VydmV5c1BsdWdpbk9wdGlvbnMpOiBKUXVlcnkge1xyXG4gICAgLy8gTWVyZ2UgdGhlIGdsb2JhbCBvcHRpb25zIHdpdGggdGhlIG9wdGlvbnMgZ2l2ZW4gYXMgYXJndW1lbnQuXHJcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe30sICQuZm4uc3VydmV5c1BsdWdpbi5vcHRpb25zLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiByZXF1aXJlZCBvcHRpb25zIGFyZSBtaXNzaW5nLlxyXG4gICAgaWYgKCFvcHRpb25zLmFyY2hlcl9pZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICdQbHVnaW4gb3B0aW9ucyBhcmUgbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJhcmNoZXJfaWRcIjogJyxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyB3aGF0IHRoZSBwbHVnaW4gc2hvdWxkIGRvLiBIZXJlIHdlIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgc2VwYXJhdGUgc2VydmljZSB3aGljaCBpcyB0aGVuIHVzZWQgd2hlbiB0aGVcclxuICAgIC8vIHVzZXIgY2xpY2tzIHRoZSBlbGVtZW50IHRoYXQgdGhlIHBsdWdpbiBpcyBhdHRhY2hlZCB0by4gSXQgcHJvZHVjZXMgYSBncmVldGluZyBtZXNzYWdlIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBvdXRwdXQuXHJcbiAgICBsZXQgc3VydmV5c2VydmljZSA9IG5ldyBTdXJ2ZXlzU2VydmljZShvcHRpb25zKTtcclxuICAgIHN1cnZleXNlcnZpY2UuaW5pdGlhbGl6ZVN1cnZleSgpO1xyXG4gICAgbGV0IHBsdWdpbjogYW55O1xyXG4gICAgalF1ZXJ5KGAjJHtvcHRpb25zLmZlZWRiYWNrU291cmNlfWApLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5zaG93KCk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuc2hvdygpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY2xvc2UtYnRuJykuaGlkZSgpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY29udGludWUtYnRuJykuc2hvdygpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1jbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1nbGFzcycpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLWJ0bi5jbG9zZS1idG4nKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4uY29udGludWUtYnRuJykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgY29tbWVudHM6IGpRdWVyeSgnLmZlZWRiYWNrLWNvbW1lbnRzJykuZXEoMCkudmFsKCksXHJcbiAgICAgICAgICBlbXBsb3llZV9uYW1lOiBqUXVlcnkoJy5mZWVkYmFjay1uYW1lJykuZXEoMCkudmFsKCksXHJcbiAgICAgICAgICBlbXBsb3llZV9lbWFpbDogalF1ZXJ5KCcuZmVlZGJhY2stZW1haWwnKS5lcSgwKS52YWwoKSxcclxuICAgICAgICAgIHNjcmVlbl9zaG90OiBwbHVnaW4uZ2V0Qnl0ZXMoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgc3VydmV5c2VydmljZS5wb3N0VXNlckZlZWRiYWNrKGRhdGEpO1xyXG4gICAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2xhcmdlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYm9keScpXHJcbiAgICAgICAgICAuZXEoMClcclxuICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAnPGgzPlRoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjay53ZSB3aWxsIGNvbnRhY3QgeW91IGlmIHdlIG5lZWQgbW9yZSBpbmZvcm1hdGlvbjwvaDM+J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1idG4nKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stYnRuLmNsb3NlLWJ0bicpLnNob3coKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICBqUXVlcnkoJy5mZWVkYmFjay1pbmNsdWRlLXNjcmVlbicpLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGpRdWVyeSgnLmZlZWRiYWNrLWluY2x1ZGUtc2NyZWVuJykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAvLzEuSGlkZSB0aGUgbW9kYWxcclxuICAgICAgICAgIC8valF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgICAvL2pRdWVyeSgnLmZlZWRiYWNrLW1vZGFsJykuaGlkZSgpO1xyXG4gICAgICAgICAgLy8yLkdyYWIgdGhlIHNjcmVlbnNob3RcclxuICAgICAgICAgIC8vMy5TaG93IHRoZSBkcmF3cGFkXHJcbiAgICAgICAgICBqUXVlcnkoJy5mZWVkYmFjay1zY3JlZW5zaG90JykuZHJhd3BhZCgpO1xyXG4gICAgICAgICAgLy80LkVubGFyZ2UgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgLy9qUXVlcnkoJy5mZWVkYmFjay1tb2RhbCcpLmFkZENsYXNzKCdsYXJnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGpRdWVyeSgnLmZlZWRiYWNrLXNjcmVlbnNob3QnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stZ2xhc3MnKS5oaWRlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2stbW9kYWwnKS5oaWRlKCk7XHJcbiAgICAgICAgdmFyIHNjcmVlbnNob3RKcGVnQmxvYiA9IGF3YWl0IHRha2VTY3JlZW5zaG90SnBlZ0Jsb2IoKTtcclxuICAgICAgICBwbHVnaW4gPSBqUXVlcnkoJy5mZWVkYmFjay1jYW52YXMnKS5zaG93KCkuZHJhd3BhZCgpO1xyXG4gICAgICAgIHBsdWdpbi5zZXRDYXB0dXJlU2NyZWVuKHNjcmVlbnNob3RKcGVnQmxvYik7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmVlZGJhY2staW5mbycpLnNob3coKS5kZWxheSg1MDAwKS5mYWRlT3V0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGpRdWVyeSBvYmplY3QgZm9yIGNoYWluaW5nLlxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICAvLyBEZWZpbmUgdGhlIGdsb2JhbCBkZWZhdWx0IG9wdGlvbnMuXHJcbiAge1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBvdXRwdXRTZWxlY3RvcjogbnVsbCxcclxuICAgICAgYWxsb3dfbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICBhcmNoZXJfaWQ6ICcyMzQwNzIwJyxcclxuICAgICAgYXNzZXRzVXJsOiAnaHR0cHM6Ly9hYW5wc2FkbWludWkuejEzLndlYi5jb3JlLndpbmRvd3MubmV0JyxcclxuICAgICAgbW9kZTogJ3dpZGdldCcsXHJcbiAgICAgIHN1cnZleV9pZDogbnVsbCxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hYS1ucHMtYWRtaW4tZ3ctYXBpbS5henVyZS1hcGkubmV0L2dyYXBocWwnLFxyXG4gICAgICBmZWVkYmFja1NvdXJjZTogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuIiwiLy8gZG9jczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhRGV2aWNlcy9nZXREaXNwbGF5TWVkaWFcclxuLy8gc2VlOiBodHRwczovL3d3dy53ZWJydGMtZXhwZXJpbWVudC5jb20vUGx1Z2luZnJlZS1TY3JlZW4tU2hhcmluZy8jMjA4OTM1MjEzNjgxODY0NzNcclxuLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1dlYlJUQy1FeHBlcmltZW50L2Jsb2IvbWFzdGVyL1BsdWdpbmZyZWUtU2NyZWVuLVNoYXJpbmcvY29uZmVyZW5jZS5qc1xyXG5cclxuZXhwb3J0IGNvbnN0IElzRGlzcGxheU1lZGlhU3VwcG9ydGVkID0gKCkgPT4ge1xyXG4gIHZhciBuYXYgPSBuYXZpZ2F0b3IgYXMgYW55O1xyXG4gIGlmIChuYXYubWVkaWFEZXZpY2VzICYmIG5hdi5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKG5hdi5nZXREaXNwbGF5TWVkaWEpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBpZiAobmF2LndlYmtpdEdldERpc3BsYXlNZWRpYSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIGlmIChuYXYubW96R2V0RGlzcGxheU1lZGlhKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERpc3BsYXlNZWRpYSA9IChvcHRpb25zOiBhbnkpID0+IHtcclxuICB2YXIgbmF2ID0gbmF2aWdhdG9yIGFzIGFueTtcclxuICBpZiAobmF2Lm1lZGlhRGV2aWNlcyAmJiBuYXYubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdi5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKG9wdGlvbnMpO1xyXG4gIH1cclxuICBpZiAobmF2LmdldERpc3BsYXlNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdi5nZXREaXNwbGF5TWVkaWEob3B0aW9ucyk7XHJcbiAgfVxyXG4gIGlmIChuYXYud2Via2l0R2V0RGlzcGxheU1lZGlhKSB7XHJcbiAgICByZXR1cm4gbmF2LndlYmtpdEdldERpc3BsYXlNZWRpYShvcHRpb25zKTtcclxuICB9XHJcbiAgaWYgKG5hdi5tb3pHZXREaXNwbGF5TWVkaWEpIHtcclxuICAgIHJldHVybiBuYXYubW96R2V0RGlzcGxheU1lZGlhKG9wdGlvbnMpO1xyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ2dldERpc3BsYXlNZWRpYSBpcyBub3QgZGVmaW5lZCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJNZWRpYSA9IChvcHRpb25zOiBhbnkpID0+IHtcclxuICB2YXIgbmF2ID0gbmF2aWdhdG9yIGFzIGFueTtcclxuICBpZiAobmF2Lm1lZGlhRGV2aWNlcyAmJiBuYXYubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKG9wdGlvbnMpO1xyXG4gIH1cclxuICBpZiAobmF2LmdldFVzZXJNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEob3B0aW9ucywgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gIH1cclxuICBpZiAobmF2LndlYmtpdEdldFVzZXJNZWRpYSkge1xyXG4gICAgcmV0dXJuIG5hdi53ZWJraXRHZXRVc2VyTWVkaWEob3B0aW9ucyk7XHJcbiAgfVxyXG4gIGlmIChuYXYubW96R2V0VXNlck1lZGlhKSB7XHJcbiAgICByZXR1cm4gbmF2Lm1vekdldFVzZXJNZWRpYShvcHRpb25zKTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdnZXRVc2VyTWVkaWEgaXMgbm90IGRlZmluZWQnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0YWtlU2NyZWVuc2hvdFN0cmVhbSA9IGFzeW5jICgpID0+IHtcclxuICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvc2NyZWVuXHJcbiAgY29uc3Qgd2lkdGggPSBzY3JlZW4ud2lkdGggKiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gc2NyZWVuLmhlaWdodCAqICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcclxuXHJcbiAgY29uc3QgZXJyb3JzID0gW107XHJcbiAgbGV0IHN0cmVhbTtcclxuICB0cnkge1xyXG4gICAgc3RyZWFtID0gYXdhaXQgZ2V0RGlzcGxheU1lZGlhKHtcclxuICAgICAgYXVkaW86IGZhbHNlLFxyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYVN0cmVhbUNvbnN0cmFpbnRzL3ZpZGVvXHJcbiAgICAgIHZpZGVvOiB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChleCkge1xyXG4gICAgZXJyb3JzLnB1c2goZXgpO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGVsZWN0cm9uIGpzXHJcbiAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWxlY3Ryb24nKSA+PSAwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzdHJlYW0gPSBhd2FpdCBnZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgIGF1ZGlvOiBmYWxzZSxcclxuICAgICAgICB2aWRlbzoge1xyXG4gICAgICAgICAgbWFuZGF0b3J5OiB7XHJcbiAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAnZGVza3RvcCcsXHJcbiAgICAgICAgICAgIC8vIGNocm9tZU1lZGlhU291cmNlSWQ6IHNvdXJjZS5pZCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IGhlaWdodFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBlcnJvcnMucHVzaChleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZyguLi5lcnJvcnMpO1xyXG4gICAgaWYgKCFzdHJlYW0pIHtcclxuICAgICAgdGhyb3cgZXJyb3JzW2Vycm9ycy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHJlYW07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGFrZVNjcmVlbnNob3RDYW52YXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc3RyZWFtID0gYXdhaXQgdGFrZVNjcmVlbnNob3RTdHJlYW0oKTtcclxuXHJcbiAgLy8gZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU3NjY1MzA5LzUyMjE3NjJcclxuICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2U8SFRNTENhbnZhc0VsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgdmlkZW8ucGF1c2UoKTtcclxuXHJcbiAgICAgIC8vIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXNwcm93bmlrL2VsZWN0cm9uLXNjcmVlbmNhcHR1cmUvYmxvYi9tYXN0ZXIvaW5kZXguanNcclxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MVmlkZW9FbGVtZW50XHJcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB2aWRlby52aWRlb1dpZHRoLCB2aWRlby52aWRlb0hlaWdodCk7XHJcbiAgICAgIHJlc29sdmUoY2FudmFzKTtcclxuICAgIH07XHJcbiAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgfSk7XHJcblxyXG4gIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjazogYW55KSB7XHJcbiAgICB0cmFjay5zdG9wKCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdGFrZSBjYW52YXMgc2NyZWVuc2hvdCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8vIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjE4MjA0NC81MjIxNzYyXHJcbmV4cG9ydCBjb25zdCBnZXRKcGVnQmxvYiA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlPEJsb2I+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIGRvY3M6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQ2FudmFzRWxlbWVudC90b0Jsb2JcclxuICAgIGlmIChjYW52YXMudG9CbG9iKSB7XHJcbiAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHJlc29sdmUoYmxvYiksICdpbWFnZS9qcGVnJywgMC45NSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL2NhbnZhc1snJ10ubXNUb0Jsb2IoKGJsb2IpID0+IHJlc29sdmUoYmxvYiksICdpbWFnZS9qcGVnJywgMC45NSk7XHJcbiAgICAgIHZhciBibG9iID0gKGNhbnZhcyBhcyBhbnkpLm1zVG9CbG9iKCk7IC8vSUUgRml4XHJcbiAgICAgIHJlc29sdmUoYmxvYik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SnBlZ0J5dGVzID0gYXN5bmMgKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcclxuICBjb25zdCBibG9iID0gYXdhaXQgZ2V0SnBlZ0Jsb2IoY2FudmFzKTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5lcnJvcikge1xyXG4gICAgICAgIHJlamVjdCh0aGlzLmVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZSh0aGlzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRha2VTY3JlZW5zaG90SnBlZ0Jsb2IgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzID0gYXdhaXQgdGFrZVNjcmVlbnNob3RDYW52YXMoKTtcclxuICByZXR1cm4gZ2V0SnBlZ0Jsb2IoY2FudmFzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0YWtlU2NyZWVuc2hvdEpwZWdCeXRlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjYW52YXMgPSBhd2FpdCB0YWtlU2NyZWVuc2hvdENhbnZhcygpO1xyXG4gIHJldHVybiBnZXRKcGVnQnl0ZXMoY2FudmFzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBibG9iVG9DYW52YXMgPSAoXHJcbiAgYmxvYjogQmxvYixcclxuICBtYXhXaWR0aDogbnVtYmVyLFxyXG4gIG1heEhlaWdodDogbnVtYmVyLFxyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcclxuKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbihcclxuICAgICAgICAxLFxyXG4gICAgICAgIG1heFdpZHRoID8gbWF4V2lkdGggLyBpbWcud2lkdGggOiAxLFxyXG4gICAgICAgIG1heEhlaWdodCA/IG1heEhlaWdodCAvIGltZy5oZWlnaHQgOiAxXHJcbiAgICAgICk7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIHNjYWxlO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgICBjYW52YXMuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICdzdHlsZScsXHJcbiAgICAgICAgYHdpZHRoOiR7Y2FudmFzLndpZHRofXB4O2hlaWdodDoke2NhbnZhcy5oZWlnaHR9cHhgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIGltZyxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgaW1nLndpZHRoLFxyXG4gICAgICAgIGltZy5oZWlnaHQsXHJcbiAgICAgICAgMCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICBjYW52YXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICAgIHJlc29sdmUoY2FudmFzKTtcclxuICAgIH07XHJcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignRXJyb3IgbG9hZCBibG9iIHRvIEltYWdlJykpO1xyXG4gICAgfTtcclxuICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL3N1cnZleS5odG1sJztcclxuXHJcbmltcG9ydCAnLi9zdXJ2ZXkuY3NzJztcclxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gJ3N1cnZleS1qcXVlcnknO1xyXG5pbXBvcnQgeyBnZXRTTVNlc3Npb24gfSBmcm9tICcuL2Nvb2tpZS5zZXJ2aWNlJztcclxuZXhwb3J0IGNsYXNzIFN1cnZleXNTZXJ2aWNlIHtcclxuICBwcml2YXRlIEZFRURCQUNLX1NVUlZFWV9JRCA9ICc2MDAxNWRiY2UwOGQ0ZjAwNjgxNWMxZDMnO1xyXG4gIHByaXZhdGUgb3B0aW9uczogU3VydmV5c1BsdWdpbk9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBhYV9zdXJ2ZXk6IFN1cnZleS5TdXJ2ZXk7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogU3VydmV5c1BsdWdpbk9wdGlvbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfVxyXG4gIGFzeW5jIGluaXRpYWxpemVTdXJ2ZXkoKSB7XHJcbiAgICB2YXIgc3VydmV5ID0gYXdhaXQgdGhpcy5nZXRBY3RpdmVTdXJ2ZXkoKTtcclxuICAgIGlmICghc3VydmV5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB7IHJlc3VsdHMsIHN1cnZleUpzT3B0aW9ucyB9ID0gYXdhaXQgdGhpcy5yZW5kZXJTdXJ2ZXkoc3VydmV5KTtcclxuICAgIGF3YWl0IHRoaXMucG9zdFN1cnZleVJlc3VsdHMocmVzdWx0cywgc3VydmV5SnNPcHRpb25zKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRBY3RpdmVTdXJ2ZXkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHRoaXMub3B0aW9ucy51cmwsXHJcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcXVlcnk6IHRoaXMub3B0aW9ucy5zdXJ2ZXlfaWRcclxuICAgICAgICAgICAgPyBgcXVlcnkgUXVlcnkoJHN1cnZleUlkOiBTdHJpbmcpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhY3RpdmVTdXJ2ZXkoc3VydmV5SWQ6ICRzdXJ2ZXlJZCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cnZleUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmF0aW9uV2luZG93SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICA6IGBxdWVyeSBRdWVyeSgkYXJjaGVySWQ6IFN0cmluZykgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYWN0aXZlU3VydmV5KGFyY2hlcklkOiAkYXJjaGVySWQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VydmV5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbldpbmRvd0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgIHZhcmlhYmxlczogdGhpcy5vcHRpb25zLnN1cnZleV9pZFxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHN1cnZleUlkOiB0aGlzLm9wdGlvbnMuc3VydmV5X2lkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIGFyY2hlcklkOiB0aGlzLm9wdGlvbnMuYXJjaGVyX2lkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChqc29uKSA9PiB7XHJcbiAgICAgICAgICB2YXIgc3VydmV5SlNPTiA9IGpzb24uZGF0YS5hY3RpdmVTdXJ2ZXkgfHwge307XHJcbiAgICAgICAgICByZXNvbHZlKHN1cnZleUpTT04pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcG9zdFVzZXJGZWVkYmFjayhkYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNtc2Vzc2lvbiA9IGdldFNNU2Vzc2lvbigpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogdGhpcy5vcHRpb25zLnVybCxcclxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgU01TRVNTSU9OOiBzbXNlc3Npb24gfSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcXVlcnk6IGBtdXRhdGlvbiBDcmVhdGVTdXJ2ZXlSZXN1bHRNdXRhdGlvbigkc3VydmV5SWQ6IFN0cmluZyEsJGFyY2hlcklkOiBTdHJpbmchLCAkaW5wdXQ6IFN1cnZleVJlc3VsdElucHV0ISkgXHJcbiAgICAgICAgICAgICAgICAgIHsgIGNyZWF0ZVN1cnZleVJlc3VsdChcclxuICAgICAgICAgICAgICAgICAgICAgIHN1cnZleUlkOiAkc3VydmV5SWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJjaGVySWQ6ICRhcmNoZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiAkaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgc3VydmV5SWQ6IHRoaXMuRkVFREJBQ0tfU1VSVkVZX0lELFxyXG4gICAgICAgICAgICBhcmNoZXJJZDogdGhpcy5vcHRpb25zLmFyY2hlcl9pZCxcclxuICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICByZXN1bHQ6IGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGVycm9yOiAoKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBwb3N0U3VydmV5UmVzdWx0cyhcclxuICAgIHN1cnZleTogYW55LFxyXG4gICAgc3VydmV5SnNPcHRpb25zOiBhbnlcclxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNtc2Vzc2lvbiA9IGdldFNNU2Vzc2lvbigpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogdGhpcy5vcHRpb25zLnVybCxcclxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgU01TRVNTSU9OOiBzbXNlc3Npb24gfSxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcXVlcnk6IGBtdXRhdGlvbiBDcmVhdGVTdXJ2ZXlSZXN1bHRNdXRhdGlvbigkc3VydmV5SWQ6IFN0cmluZyEsJGFyY2hlcklkOiBTdHJpbmchLCAkaW5wdXQ6IFN1cnZleVJlc3VsdElucHV0ISkgXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgY3JlYXRlU3VydmV5UmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXJ2ZXlJZDogJHN1cnZleUlkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjaGVySWQ6ICRhcmNoZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6ICRpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBzdXJ2ZXlJZDogdGhpcy5vcHRpb25zLnN1cnZleV9pZCxcclxuICAgICAgICAgICAgYXJjaGVySWQ6IHRoaXMub3B0aW9ucy5hcmNoZXJfaWQsXHJcbiAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0OiBzdXJ2ZXkuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcclxuICAgICAgICAgIHN1cnZleS5kZWxldGVDb29raWUoKTtcclxuICAgICAgICAgIHN1cnZleUpzT3B0aW9ucy5zaG93RGF0YVNhdmluZ0Vycm9yKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2UuZGF0YT8uY3JlYXRlU3VydmV5UmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHN1cnZleS5kZWxldGVDb29raWUoKTtcclxuICAgICAgICAgICAgc3VydmV5SnNPcHRpb25zLnNob3dEYXRhU2F2aW5nRXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YS5jcmVhdGVTdXJ2ZXlSZXN1bHQgYXMgYm9vbGVhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIHJlbmRlclN1cnZleShzdXJ2ZXlKU09OOiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IHJlc3VsdHM6IGFueTsgc3VydmV5SnNPcHRpb25zOiBhbnkgfT4oXHJcbiAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgdGVtcG9yYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGVtcG9yYXJ5LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRlbXBvcmFyeSk7XHJcbiAgICAgICAgdmFyIHN1cnZleURlZmluaXRpb24gPSBzdXJ2ZXlKU09OLmRlZmluaXRpb24gfHwge307XHJcbiAgICAgICAgaWYgKCFzdXJ2ZXlKU09OLnN1cnZleUlkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm8gQWN0aXZlIHN1cnZleSBhdCB0aGUgbW9tZW50Jyk7XHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMuc3VydmV5X2lkID0gc3VydmV5SlNPTi5zdXJ2ZXlJZDtcclxuICAgICAgICAvL1RPRE86RmluZCBhIGJldHRlciB3YXlcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93X211bHRpcGxlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICBzdXJ2ZXlEZWZpbml0aW9uLmNvb2tpZU5hbWUgPSBzdXJ2ZXlKU09OLmFjdGl2YXRpb25XaW5kb3dJZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3VydmV5LlN0eWxlc01hbmFnZXIuYXBwbHlUaGVtZSgnYm9vdHN0cmFwJyk7XHJcbiAgICAgICAgU3VydmV5LmRlZmF1bHRCb290c3RyYXBDc3MubmF2aWdhdGlvbkJ1dHRvbiA9ICdidG4gYnRuLXN1Y2Nlc3MnO1xyXG4gICAgICAgIFN1cnZleS5zdXJ2ZXlTdHJpbmdzLmVtcHR5U3VydmV5ID1cclxuICAgICAgICAgICdUaGVyZSBpcyBubyBzdXJ2ZXkgYWN0aXZlIGF0IHRoZSBtb21lbnQuJztcclxuICAgICAgICAvL2NvbmZpZy50aXRsZSB8fCBzdXJ2ZXlEZWZpbml0aW9uLnRpdGxlIHx8ICdGZWVkYmFjaz8nO1xyXG4gICAgICAgIHN1cnZleURlZmluaXRpb24udGl0bGUgPSAnRmVlZGJhY2s/JztcclxuICAgICAgICB0aGlzLmFhX3N1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5RGVmaW5pdGlvbik7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuYWFfc3VydmV5LnN0YXRlID09ICdjb21wbGV0ZWQnICYmXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuYWxsb3dfbXVsdGlwbGUgIT09IHRydWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VydmV5LmNzcyA9IG15Q3NzO1xyXG4gICAgICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byBib2R5XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgICAgICQoJyNhYV9ucHNfc3VydmV5Q29udGFpbmVyJykuU3VydmV5KHtcclxuICAgICAgICAgICAgbW9kZWw6IHRoaXMuYWFfc3VydmV5LFxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAocmVzdWx0czogYW55LCBzdXJ2ZXlKc09wdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoeyByZXN1bHRzLCBzdXJ2ZXlKc09wdGlvbnMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkKCcjYWFfbnBzX3N1cnZleUNvbnRhaW5lcicpLlN1cnZleVdpbmRvdyh7XHJcbiAgICAgICAgICAgIG1vZGVsOiB0aGlzLmFhX3N1cnZleSxcclxuICAgICAgICAgICAgaXNFeHBhbmRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNvbXBsZXRlVGltZW91dDogMixcclxuICAgICAgICAgICAgb25Db21wbGV0ZTogKHJlc3VsdHM6IGFueSwgc3VydmV5SnNPcHRpb25zOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHsgcmVzdWx0cywgc3VydmV5SnNPcHRpb25zIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiU3VydmV5XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pxdWVyeS1zdXJ2ZXlzLXBsdWdpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pxdWVyeS1kcmF3cGFkLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanF1ZXJ5LWZlZWRiYWNrLnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==