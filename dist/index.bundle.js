"use strict";
(self["webpackChunkodin_javascript_dynamic_user_interface_interactions"] = self["webpackChunkodin_javascript_dynamic_user_interface_interactions"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/drop-down-menu/drop-down-menu.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/drop-down-menu/drop-down-menu.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

.drop-down-menu-container {
  width: fit-content;
}

.drop-down-menu-container div {
  border: 1px solid black;
  text-align: left;
}

.drop-down-menu-container div:hover {
  background-color: skyblue;
}

.drop-down-menu-name {
  width: fit-content;
}

.drop-down-menu-option{
  width: 100%;
}

.invisible {
  display: none;
}

a {
  display: block;
  text-decoration: none;
  color: black;
  margin-left: 0;
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/drop-down-menu/drop-down-menu.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,WAAW;AACb","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n.drop-down-menu-container {\n  width: fit-content;\n}\n\n.drop-down-menu-container div {\n  border: 1px solid black;\n  text-align: left;\n}\n\n.drop-down-menu-container div:hover {\n  background-color: skyblue;\n}\n\n.drop-down-menu-name {\n  width: fit-content;\n}\n\n.drop-down-menu-option{\n  width: 100%;\n}\n\n.invisible {\n  display: none;\n}\n\na {\n  display: block;\n  text-decoration: none;\n  color: black;\n  margin-left: 0;\n  width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/image-slider/image-slider.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/image-slider/image-slider.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.image-slider-container {
  width: 100%;
  padding: 12px;
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  grid-template-rows: 1fr 36px;
  align-items: center;
  justify-items: center;
}

.image-slider-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image-slider-frame {
  width: 100%;
  margin: auto;
  text-align: center;
  
  line-height: 0px;
  overflow: hidden;

  display: flex;
  align-content: center;
  border-radius: 6px;
}

.image-slider-images {
  display: flex;
  position: relative;
  /*transform: translate(0%);*/
  transition: transform 300ms ease-in-out 250ms;
}

.image-slider-arrow-invisible {
  visibility: hidden;
}

.image-slider-left-arrow:hover, .image-slider-right-arrow:hover {
  filter: invert(54%) sepia(24%) saturate(6791%) hue-rotate(161deg) brightness(94%) contrast(101%);
  height: 36px;
}

.image-slider-nav-dot-container {
  height: 100%;
  width: 100%;
  grid-column: 2/3;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.image-slider-nav-dot {
  border: 1.5px solid black;
  border-radius: 100%;
  width: 12px;
  height: 12px;
}

.image-slider-nav-dot:hover {
  background-color: #00a4d6;
}

.image-slider-nav-dot-selected {
  background-color: #00a4d6;
}`, "",{"version":3,"sources":["webpack://./src/components/image-slider/image-slider.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,oCAAoC;EACpC,4BAA4B;EAC5B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;;EAElB,gBAAgB;EAChB,gBAAgB;;EAEhB,aAAa;EACb,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,4BAA4B;EAC5B,6CAA6C;AAC/C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gGAAgG;EAChG,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".image-slider-container {\n  width: 100%;\n  padding: 12px;\n  display: grid;\n  grid-template-columns: 36px 1fr 36px;\n  grid-template-rows: 1fr 36px;\n  align-items: center;\n  justify-items: center;\n}\n\n.image-slider-img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.image-slider-frame {\n  width: 100%;\n  margin: auto;\n  text-align: center;\n  \n  line-height: 0px;\n  overflow: hidden;\n\n  display: flex;\n  align-content: center;\n  border-radius: 6px;\n}\n\n.image-slider-images {\n  display: flex;\n  position: relative;\n  /*transform: translate(0%);*/\n  transition: transform 300ms ease-in-out 250ms;\n}\n\n.image-slider-arrow-invisible {\n  visibility: hidden;\n}\n\n.image-slider-left-arrow:hover, .image-slider-right-arrow:hover {\n  filter: invert(54%) sepia(24%) saturate(6791%) hue-rotate(161deg) brightness(94%) contrast(101%);\n  height: 36px;\n}\n\n.image-slider-nav-dot-container {\n  height: 100%;\n  width: 100%;\n  grid-column: 2/3;\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.image-slider-nav-dot {\n  border: 1.5px solid black;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n}\n\n.image-slider-nav-dot:hover {\n  background-color: #00a4d6;\n}\n\n.image-slider-nav-dot-selected {\n  background-color: #00a4d6;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/mobile-menu/mobile-menu.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/mobile-menu/mobile-menu.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.mobile-menu-container {
  height: 100%;
  width: 100%;
  display: flex; 
  flex-direction: column;
}

.mobile-menu-header {
  width: 100%;
  height: 48px;
  display: grid;
  grid-template-columns: 48px 1fr 48px; 
  align-items: center;
  justify-items: center;
}

.mobile-menu-name {
  grid-column: 2/3;
}

.mobile-menu-close {
  grid-column: 3/4;
  height: 65%;
}

.mobile-menu-close:hover{
  height: 85%;
}

.mobile-menu-option {
  text-align: center;
}

.mobile-menu-option:hover {
  background-color: skyblue;
}
`, "",{"version":3,"sources":["webpack://./src/components/mobile-menu/mobile-menu.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".mobile-menu-container {\n  height: 100%;\n  width: 100%;\n  display: flex; \n  flex-direction: column;\n}\n\n.mobile-menu-header {\n  width: 100%;\n  height: 48px;\n  display: grid;\n  grid-template-columns: 48px 1fr 48px; \n  align-items: center;\n  justify-items: center;\n}\n\n.mobile-menu-name {\n  grid-column: 2/3;\n}\n\n.mobile-menu-close {\n  grid-column: 3/4;\n  height: 65%;\n}\n\n.mobile-menu-close:hover{\n  height: 85%;\n}\n\n.mobile-menu-option {\n  text-align: center;\n}\n\n.mobile-menu-option:hover {\n  background-color: skyblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0px;
  padding: 0px;
}

body {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr)) 3fr;
  height: 100vh;
}

body > div {
  border: 1px solid black;
}

.image-slider {
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,wDAAwD;EACxD,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(250px, 1fr)) 3fr;\n  height: 100vh;\n}\n\nbody > div {\n  border: 1px solid black;\n}\n\n.image-slider {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/drop-down-menu/drop-down-menu.css":
/*!**********************************************************!*\
  !*** ./src/components/drop-down-menu/drop-down-menu.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_drop_down_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./drop-down-menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/drop-down-menu/drop-down-menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_drop_down_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_drop_down_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_drop_down_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_drop_down_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/image-slider/image-slider.css":
/*!******************************************************!*\
  !*** ./src/components/image-slider/image-slider.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_image_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./image-slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/image-slider/image-slider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_image_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_image_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_image_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_image_slider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/mobile-menu/mobile-menu.css":
/*!****************************************************!*\
  !*** ./src/components/mobile-menu/mobile-menu.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mobile_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./mobile-menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/mobile-menu/mobile-menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mobile_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mobile_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mobile_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mobile_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/drop-down-menu/drop-down-menu.js":
/*!*********************************************************!*\
  !*** ./src/components/drop-down-menu/drop-down-menu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drop_down_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop-down-menu.css */ "./src/components/drop-down-menu/drop-down-menu.css");


// takes three parameters
// menuName - name to be displayed for the menu
// options - String array of option names
// links - String array of links, mapped to option names
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((menuName, options, links) => {
  // create the container for the entire drop down
  const dropDownMenu = document.createElement('div');
  dropDownMenu.classList.add('drop-down-menu-container');

  // create the first menu element - will be visible at all times
  const menu = document.createElement('div');
  menu.classList.add('drop-down-menu-name');
  menu.textContent = menuName;

  dropDownMenu.appendChild(menu);

  // create an empty array to hold the option divs
  const optionsArray = [];

  // make an option div for every option in the option array
  options.forEach((option, index) => {
    // create div to hold the option
    const optionDiv = document.createElement('div');
    // create a link
    const link = document.createElement('a');
    // set the text to the option in the option array
    link.textContent = option;
    // set the link href attribute to the corresponding link in the link array
    link.href = links[index];
    // append link to the option div
    optionDiv.appendChild(link);

    // add necessary classes
    optionDiv.classList.add('drop-down-menu-option');
    optionDiv.classList.add('invisible');
    // add option div to the options Array, which will be used for adding event listeners

    optionsArray.push(optionDiv);
    // append the option to the dropdown menu
    dropDownMenu.appendChild(optionDiv);
  });

  // add event listener to trigger displaying/hiding the dropdown menu options
  menu.addEventListener('click', () => {
    console.log('clicked');
    optionsArray.forEach((option) => option.classList.toggle('invisible'));
  });

  return dropDownMenu;
});


/***/ }),

/***/ "./src/components/image-slider/image-slider.js":
/*!*****************************************************!*\
  !*** ./src/components/image-slider/image-slider.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeImageSlider)
/* harmony export */ });
/* harmony import */ var _image_slider_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-slider.css */ "./src/components/image-slider/image-slider.css");
/* harmony import */ var _chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chevron-left.svg */ "./src/components/image-slider/chevron-left.svg");
/* harmony import */ var _chevron_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chevron-right.svg */ "./src/components/image-slider/chevron-right.svg");




const updateVisibility = function updateArrowVisbility(
  newPictureIndex,
  numPictures,
  leftArrow,
  rightArrow
) {
  if (
    newPictureIndex === 0 &&
    !leftArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    leftArrow.classList.add('image-slider-arrow-invisible');
  } else if (
    newPictureIndex > 0 &&
    leftArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    leftArrow.classList.remove('image-slider-arrow-invisible');
  }

  if (
    newPictureIndex === numPictures - 1 &&
    !rightArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    rightArrow.classList.add('image-slider-arrow-invisible');
  } else if (
    newPictureIndex < numPictures &&
    rightArrow.classList.contains('image-slider-arrow-invisible')
  ) {
    rightArrow.classList.remove('image-slider-arrow-invisible');
  }
};

const updateNavDots = function updateNavigationDots(newPictureIndex) {
  const navDots = document.querySelectorAll('.image-slider-nav-dot');
  const navDotsArray = [...navDots];
  navDotsArray.forEach((navDot, index) => {
    if (index === newPictureIndex) {
      navDot.classList.add('image-slider-nav-dot-selected');
    } else if (navDot.classList.contains('image-slider-nav-dot-selected')) {
      navDot.classList.remove('image-slider-nav-dot-selected');
    }
  });
};

const changeFrame = function changeFrameImage(
  allImagesDiv,
  newPictureIndex,
  numPictures
) {
  if (newPictureIndex >= 0 && newPictureIndex < numPictures) {
    // change transform property
    allImagesDiv.setAttribute(
      'style',
      `transform: translate(-${newPictureIndex * 100}%)`
    );

    const leftArrow = document.querySelector('.image-slider-left-arrow');
    const rightArrow = document.querySelector('.image-slider-right-arrow');

    // update arrows image-slider-index attribute
    leftArrow.setAttribute('image-slider-index', newPictureIndex - 1);
    rightArrow.setAttribute('image-slider-index', newPictureIndex + 1);

    // update nav dots
    updateNavDots(newPictureIndex);

    // also update visibility class if no other image in range
    setTimeout(
      () =>
        updateVisibility(newPictureIndex, numPictures, leftArrow, rightArrow),
      250
    );
  }

  console.log('clicked!');
};

function initializeImageSlider(...pictures) {
  // create a container to hold the image slider elements
  const imageSlider = document.createElement('div');
  imageSlider.classList.add('image-slider-container');

  // create the left arrow
  const leftArrow = new Image();
  leftArrow.src = _chevron_left_svg__WEBPACK_IMPORTED_MODULE_1__;
  leftArrow.classList.add('image-slider-left-arrow');
  leftArrow.setAttribute('image-slider-index', -1);
  // initially, there is no image to the left so add the invisible class
  leftArrow.classList.add('image-slider-arrow-invisible');

  imageSlider.appendChild(leftArrow);

  // create the frame to hold the images
  const frame = document.createElement('div');
  frame.classList.add('image-slider-frame');

  imageSlider.appendChild(frame);

  // create a div to hold all of the images in a long grid
  const allImagesDiv = document.createElement('div');
  allImagesDiv.classList.add('image-slider-images');

  // add every picture to the div
  pictures.forEach((picture) => {
    const img = new Image();
    img.src = picture;
    img.classList.add('image-slider-img');
    allImagesDiv.appendChild(img);
  });

  // add to the frame
  // the CSS formats the image div width to cover exactly one image within the frame
  frame.appendChild(allImagesDiv);

  // create the right arrow
  const rightArrow = new Image();
  rightArrow.src = _chevron_right_svg__WEBPACK_IMPORTED_MODULE_2__;
  rightArrow.classList.add('image-slider-right-arrow');
  rightArrow.setAttribute('image-slider-index', 1);

  // add event listeners for user interactivity

  leftArrow.addEventListener('click', (e) =>
    changeFrame(
      allImagesDiv,
      +e.target.getAttribute('image-slider-index'),
      pictures.length
    )
  );

  rightArrow.addEventListener('click', (e) =>
    changeFrame(
      allImagesDiv,
      +e.target.getAttribute('image-slider-index'),
      pictures.length
    )
  );

  imageSlider.appendChild(rightArrow);

  // next, create the navigation dots at the bottom
  const navDotContainer = document.createElement('div');
  navDotContainer.classList.add('image-slider-nav-dot-container');

  pictures.forEach((picture, index) => {
    console.log(index);
    const navDot = document.createElement('div');
    navDot.classList.add('image-slider-nav-dot');
    navDot.setAttribute('image-slider-index', index);
    navDot.addEventListener('click', () =>
      changeFrame(allImagesDiv, index, pictures.length)
    );

    if (index === 0) {
      navDot.classList.add('image-slider-nav-dot-selected');
    }
    navDotContainer.appendChild(navDot);
  });

  imageSlider.appendChild(navDotContainer);

  return imageSlider;
}


/***/ }),

/***/ "./src/components/mobile-menu/mobile-menu.js":
/*!***************************************************!*\
  !*** ./src/components/mobile-menu/mobile-menu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mobile_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu.css */ "./src/components/mobile-menu/mobile-menu.css");
/* harmony import */ var _x_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x.svg */ "./src/components/mobile-menu/x.svg");



// takes three parameters
// menuName - name to be displayed for the menu
// options - String array of option names
// links - String array of links, mapped to option names
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((menuName, options, links) => {
  // create container to hold the menu
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('mobile-menu-container');

  // create header container to hold menu name and close menu icon
  const header = document.createElement('div');
  header.classList.add('mobile-menu-header');

  // create a div to hold the menu name
  const mobileMenuName = document.createElement('div');
  mobileMenuName.textContent = menuName;
  mobileMenuName.classList.add('mobile-menu-name');
  // add the menu name to the header
  header.appendChild(mobileMenuName);

  // create an image for the close icon
  const iconClose = new Image();
  iconClose.src = _x_svg__WEBPACK_IMPORTED_MODULE_1__;
  iconClose.classList.add('mobile-menu-close');
  // add the close icon to the header
  header.appendChild(iconClose);

  // add the header to the mobile menu container
  mobileMenu.appendChild(header);

  // now we can add each option below
  options.forEach((option, index) => {
    // create div to hold the option
    const optionDiv = document.createElement('div');
    // create a link
    const link = document.createElement('a');
    // set the text to the option in the option array
    link.textContent = option;
    // set the link href attribute to the corresponding link in the link array
    link.href = links[index];
    // append link to the option div
    optionDiv.appendChild(link);

    // add necessary classes
    optionDiv.classList.add('mobile-menu-option');

    // append the option to the dropdown menu
    mobileMenu.appendChild(optionDiv);
  });

  return mobileMenu;
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_drop_down_menu_drop_down_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/drop-down-menu/drop-down-menu.js */ "./src/components/drop-down-menu/drop-down-menu.js");
/* harmony import */ var _components_mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.js */ "./src/components/mobile-menu/mobile-menu.js");
/* harmony import */ var _components_image_slider_image_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/image-slider/image-slider.js */ "./src/components/image-slider/image-slider.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _img_bear_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bear.jpeg */ "./src/img/bear.jpeg");
/* harmony import */ var _img_elephant_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/elephant.jpeg */ "./src/img/elephant.jpeg");
/* harmony import */ var _img_wolf_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/wolf.jpeg */ "./src/img/wolf.jpeg");









const body = document.querySelector('body');
const dropDownDiv = document.createElement('div');

dropDownDiv.classList.add('drop-down');

body.appendChild(dropDownDiv);

dropDownDiv.appendChild(
  (0,_components_drop_down_menu_drop_down_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'New Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    ['#', '#', '#', '#']
  )
);

dropDownDiv.appendChild(
  (0,_components_drop_down_menu_drop_down_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'Another Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    ['#', '#', '#', '#']
  )
);

const mobileMenuDiv = document.createElement('div');
mobileMenuDiv.classList.add('mobile-menu');

body.appendChild(mobileMenuDiv);

mobileMenuDiv.appendChild(
  (0,_components_mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
    'Mobile Menu',
    ['Option1', 'Option2', 'Option3', 'areallylongoptionnamegoeshere'],
    ['#', '#', '#', '#']
  )
);

const imageSliderDiv = document.createElement('div');
imageSliderDiv.classList.add('image-slider');

body.appendChild(imageSliderDiv);
imageSliderDiv.appendChild((0,_components_image_slider_image_slider_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_img_bear_jpeg__WEBPACK_IMPORTED_MODULE_4__, _img_elephant_jpeg__WEBPACK_IMPORTED_MODULE_5__, _img_wolf_jpeg__WEBPACK_IMPORTED_MODULE_6__));


/***/ }),

/***/ "./src/components/image-slider/chevron-left.svg":
/*!******************************************************!*\
  !*** ./src/components/image-slider/chevron-left.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "982a40d4f9e3cf9fdaea.svg";

/***/ }),

/***/ "./src/components/image-slider/chevron-right.svg":
/*!*******************************************************!*\
  !*** ./src/components/image-slider/chevron-right.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d45fd2f46e93f5c3aa0a.svg";

/***/ }),

/***/ "./src/components/mobile-menu/x.svg":
/*!******************************************!*\
  !*** ./src/components/mobile-menu/x.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c9a4ba71a333be7b021.svg";

/***/ }),

/***/ "./src/img/bear.jpeg":
/*!***************************!*\
  !*** ./src/img/bear.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98733511a44d4654e6f6.jpeg";

/***/ }),

/***/ "./src/img/elephant.jpeg":
/*!*******************************!*\
  !*** ./src/img/elephant.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5adbf567f85ad5d7df8e.jpeg";

/***/ }),

/***/ "./src/img/wolf.jpeg":
/*!***************************!*\
  !*** ./src/img/wolf.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec8a5890999cd4b8fdce.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1DQUFDO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQ2RTtBQUNSO0FBQ0c7QUFDckQ7O0FBRWM7QUFDSTtBQUNKOztBQUVuQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsRUFBRSx3RkFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsd0ZBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsa0ZBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixvRkFBaUIsQ0FBQywyQ0FBSSxFQUFFLCtDQUFJLEVBQUUsMkNBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvY29tcG9uZW50cy9kcm9wLWRvd24tbWVudS9kcm9wLWRvd24tbWVudS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY3NzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvY29tcG9uZW50cy9kcm9wLWRvd24tbWVudS9kcm9wLWRvd24tbWVudS5jc3M/ZTFjYSIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvY29tcG9uZW50cy9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNzcz8xOTU1Iiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9jb21wb25lbnRzL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNzcz85MjA2Iiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9jb21wb25lbnRzL2Ryb3AtZG93bi1tZW51L2Ryb3AtZG93bi1tZW51LmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9jb21wb25lbnRzL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZHJvcC1kb3duLW1lbnUtY29udGFpbmVyIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZHJvcC1kb3duLW1lbnUtY29udGFpbmVyIGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcC1kb3duLW1lbnUtY29udGFpbmVyIGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG59XG5cbi5kcm9wLWRvd24tbWVudS1uYW1lIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZHJvcC1kb3duLW1lbnUtb3B0aW9ue1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Ryb3AtZG93bi1tZW51L2Ryb3AtZG93bi1tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kcm9wLWRvd24tbWVudS1jb250YWluZXIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uZHJvcC1kb3duLW1lbnUtY29udGFpbmVyIGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kcm9wLWRvd24tbWVudS1jb250YWluZXIgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxufVxcblxcbi5kcm9wLWRvd24tbWVudS1uYW1lIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmRyb3AtZG93bi1tZW51LW9wdGlvbntcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzZweCAxZnIgMzZweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMzZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2Utc2xpZGVyLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW1hZ2Utc2xpZGVyLWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmltYWdlLXNsaWRlci1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpOyovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcbn1cblxuLmltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1zbGlkZXItbGVmdC1hcnJvdzpob3ZlciwgLmltYWdlLXNsaWRlci1yaWdodC1hcnJvdzpob3ZlciB7XG4gIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMjQlKSBzYXR1cmF0ZSg2NzkxJSkgaHVlLXJvdGF0ZSgxNjFkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCgxMDElKTtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3QtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltYWdlLXNsaWRlci1uYXYtZG90IHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLmltYWdlLXNsaWRlci1uYXYtZG90OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTRkNjtcbn1cblxuLmltYWdlLXNsaWRlci1uYXYtZG90LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTRkNjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnR0FBZ0c7RUFDaEcsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2cHggMWZyIDM2cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltYWdlLXNsaWRlci1pbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmltYWdlLXNsaWRlci1mcmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIFxcbiAgbGluZS1oZWlnaHQ6IDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLWltYWdlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7Ki9cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuLmltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLWxlZnQtYXJyb3c6aG92ZXIsIC5pbWFnZS1zbGlkZXItcmlnaHQtYXJyb3c6aG92ZXIge1xcbiAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgyNCUpIHNhdHVyYXRlKDY3OTElKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3QtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbWFnZS1zbGlkZXItbmF2LWRvdCB7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTRkNjtcXG59XFxuXFxuLmltYWdlLXNsaWRlci1uYXYtZG90LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE0ZDY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vYmlsZS1tZW51LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9iaWxlLW1lbnUtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmciA0OHB4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9iaWxlLW1lbnUtbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG59XG5cbi5tb2JpbGUtbWVudS1jbG9zZSB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGhlaWdodDogNjUlO1xufVxuXG4ubW9iaWxlLW1lbnUtY2xvc2U6aG92ZXJ7XG4gIGhlaWdodDogODUlO1xufVxuXG4ubW9iaWxlLW1lbnUtb3B0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9iaWxlLW1lbnUtb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2JpbGUtbWVudS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tb2JpbGUtbWVudS1oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmciA0OHB4OyBcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2JpbGUtbWVudS1uYW1lIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5tb2JpbGUtbWVudS1jbG9zZSB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbiAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbi5tb2JpbGUtbWVudS1jbG9zZTpob3ZlcntcXG4gIGhlaWdodDogODUlO1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUtb3B0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vYmlsZS1tZW51LW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDI1MHB4LCAxZnIpKSAzZnI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmltYWdlLXNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0RBQXdEO0VBQ3hELGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyNTBweCwgMWZyKSkgM2ZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmltYWdlLXNsaWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kcm9wLWRvd24tbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3AtZG93bi1tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbWFnZS1zbGlkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbWFnZS1zbGlkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vYmlsZS1tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9iaWxlLW1lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vZHJvcC1kb3duLW1lbnUuY3NzJztcblxuLy8gdGFrZXMgdGhyZWUgcGFyYW1ldGVyc1xuLy8gbWVudU5hbWUgLSBuYW1lIHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIG1lbnVcbi8vIG9wdGlvbnMgLSBTdHJpbmcgYXJyYXkgb2Ygb3B0aW9uIG5hbWVzXG4vLyBsaW5rcyAtIFN0cmluZyBhcnJheSBvZiBsaW5rcywgbWFwcGVkIHRvIG9wdGlvbiBuYW1lc1xuZXhwb3J0IGRlZmF1bHQgKG1lbnVOYW1lLCBvcHRpb25zLCBsaW5rcykgPT4ge1xuICAvLyBjcmVhdGUgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGVudGlyZSBkcm9wIGRvd25cbiAgY29uc3QgZHJvcERvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRyb3BEb3duTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24tbWVudS1jb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgdGhlIGZpcnN0IG1lbnUgZWxlbWVudCAtIHdpbGwgYmUgdmlzaWJsZSBhdCBhbGwgdGltZXNcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bi1tZW51LW5hbWUnKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IG1lbnVOYW1lO1xuXG4gIGRyb3BEb3duTWVudS5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvLyBjcmVhdGUgYW4gZW1wdHkgYXJyYXkgdG8gaG9sZCB0aGUgb3B0aW9uIGRpdnNcbiAgY29uc3Qgb3B0aW9uc0FycmF5ID0gW107XG5cbiAgLy8gbWFrZSBhbiBvcHRpb24gZGl2IGZvciBldmVyeSBvcHRpb24gaW4gdGhlIG9wdGlvbiBhcnJheVxuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAvLyBjcmVhdGUgZGl2IHRvIGhvbGQgdGhlIG9wdGlvblxuICAgIGNvbnN0IG9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIGNyZWF0ZSBhIGxpbmtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIC8vIHNldCB0aGUgdGV4dCB0byB0aGUgb3B0aW9uIGluIHRoZSBvcHRpb24gYXJyYXlcbiAgICBsaW5rLnRleHRDb250ZW50ID0gb3B0aW9uO1xuICAgIC8vIHNldCB0aGUgbGluayBocmVmIGF0dHJpYnV0ZSB0byB0aGUgY29ycmVzcG9uZGluZyBsaW5rIGluIHRoZSBsaW5rIGFycmF5XG4gICAgbGluay5ocmVmID0gbGlua3NbaW5kZXhdO1xuICAgIC8vIGFwcGVuZCBsaW5rIHRvIHRoZSBvcHRpb24gZGl2XG4gICAgb3B0aW9uRGl2LmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgLy8gYWRkIG5lY2Vzc2FyeSBjbGFzc2VzXG4gICAgb3B0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bi1tZW51LW9wdGlvbicpO1xuICAgIG9wdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAvLyBhZGQgb3B0aW9uIGRpdiB0byB0aGUgb3B0aW9ucyBBcnJheSwgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBvcHRpb25zQXJyYXkucHVzaChvcHRpb25EaXYpO1xuICAgIC8vIGFwcGVuZCB0aGUgb3B0aW9uIHRvIHRoZSBkcm9wZG93biBtZW51XG4gICAgZHJvcERvd25NZW51LmFwcGVuZENoaWxkKG9wdGlvbkRpdik7XG4gIH0pO1xuXG4gIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0cmlnZ2VyIGRpc3BsYXlpbmcvaGlkaW5nIHRoZSBkcm9wZG93biBtZW51IG9wdGlvbnNcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIG9wdGlvbnNBcnJheS5mb3JFYWNoKChvcHRpb24pID0+IG9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpbnZpc2libGUnKSk7XG4gIH0pO1xuXG4gIHJldHVybiBkcm9wRG93bk1lbnU7XG59O1xuIiwiaW1wb3J0ICcuL2ltYWdlLXNsaWRlci5jc3MnO1xuaW1wb3J0IExlZnQgZnJvbSAnLi9jaGV2cm9uLWxlZnQuc3ZnJztcbmltcG9ydCBSaWdodCBmcm9tICcuL2NoZXZyb24tcmlnaHQuc3ZnJztcblxuY29uc3QgdXBkYXRlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHVwZGF0ZUFycm93VmlzYmlsaXR5KFxuICBuZXdQaWN0dXJlSW5kZXgsXG4gIG51bVBpY3R1cmVzLFxuICBsZWZ0QXJyb3csXG4gIHJpZ2h0QXJyb3dcbikge1xuICBpZiAoXG4gICAgbmV3UGljdHVyZUluZGV4ID09PSAwICYmXG4gICAgIWxlZnRBcnJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKVxuICApIHtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpO1xuICB9IGVsc2UgaWYgKFxuICAgIG5ld1BpY3R1cmVJbmRleCA+IDAgJiZcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS1zbGlkZXItYXJyb3ctaW52aXNpYmxlJylcbiAgKSB7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKTtcbiAgfVxuXG4gIGlmIChcbiAgICBuZXdQaWN0dXJlSW5kZXggPT09IG51bVBpY3R1cmVzIC0gMSAmJlxuICAgICFyaWdodEFycm93LmNsYXNzTGlzdC5jb250YWlucygnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpXG4gICkge1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpO1xuICB9IGVsc2UgaWYgKFxuICAgIG5ld1BpY3R1cmVJbmRleCA8IG51bVBpY3R1cmVzICYmXG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKVxuICApIHtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlTmF2RG90cyA9IGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25Eb3RzKG5ld1BpY3R1cmVJbmRleCkge1xuICBjb25zdCBuYXZEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlLXNsaWRlci1uYXYtZG90Jyk7XG4gIGNvbnN0IG5hdkRvdHNBcnJheSA9IFsuLi5uYXZEb3RzXTtcbiAgbmF2RG90c0FycmF5LmZvckVhY2goKG5hdkRvdCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IG5ld1BpY3R1cmVJbmRleCkge1xuICAgICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1uYXYtZG90LXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIGlmIChuYXZEb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS1zbGlkZXItbmF2LWRvdC1zZWxlY3RlZCcpKSB7XG4gICAgICBuYXZEb3QuY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2Utc2xpZGVyLW5hdi1kb3Qtc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY2hhbmdlRnJhbWUgPSBmdW5jdGlvbiBjaGFuZ2VGcmFtZUltYWdlKFxuICBhbGxJbWFnZXNEaXYsXG4gIG5ld1BpY3R1cmVJbmRleCxcbiAgbnVtUGljdHVyZXNcbikge1xuICBpZiAobmV3UGljdHVyZUluZGV4ID49IDAgJiYgbmV3UGljdHVyZUluZGV4IDwgbnVtUGljdHVyZXMpIHtcbiAgICAvLyBjaGFuZ2UgdHJhbnNmb3JtIHByb3BlcnR5XG4gICAgYWxsSW1hZ2VzRGl2LnNldEF0dHJpYnV0ZShcbiAgICAgICdzdHlsZScsXG4gICAgICBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLSR7bmV3UGljdHVyZUluZGV4ICogMTAwfSUpYFxuICAgICk7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2Utc2xpZGVyLWxlZnQtYXJyb3cnKTtcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXNsaWRlci1yaWdodC1hcnJvdycpO1xuXG4gICAgLy8gdXBkYXRlIGFycm93cyBpbWFnZS1zbGlkZXItaW5kZXggYXR0cmlidXRlXG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZSgnaW1hZ2Utc2xpZGVyLWluZGV4JywgbmV3UGljdHVyZUluZGV4IC0gMSk7XG4gICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoJ2ltYWdlLXNsaWRlci1pbmRleCcsIG5ld1BpY3R1cmVJbmRleCArIDEpO1xuXG4gICAgLy8gdXBkYXRlIG5hdiBkb3RzXG4gICAgdXBkYXRlTmF2RG90cyhuZXdQaWN0dXJlSW5kZXgpO1xuXG4gICAgLy8gYWxzbyB1cGRhdGUgdmlzaWJpbGl0eSBjbGFzcyBpZiBubyBvdGhlciBpbWFnZSBpbiByYW5nZVxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PlxuICAgICAgICB1cGRhdGVWaXNpYmlsaXR5KG5ld1BpY3R1cmVJbmRleCwgbnVtUGljdHVyZXMsIGxlZnRBcnJvdywgcmlnaHRBcnJvdyksXG4gICAgICAyNTBcbiAgICApO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ2NsaWNrZWQhJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplSW1hZ2VTbGlkZXIoLi4ucGljdHVyZXMpIHtcbiAgLy8gY3JlYXRlIGEgY29udGFpbmVyIHRvIGhvbGQgdGhlIGltYWdlIHNsaWRlciBlbGVtZW50c1xuICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNsaWRlci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1zbGlkZXItY29udGFpbmVyJyk7XG5cbiAgLy8gY3JlYXRlIHRoZSBsZWZ0IGFycm93XG4gIGNvbnN0IGxlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBsZWZ0QXJyb3cuc3JjID0gTGVmdDtcbiAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1sZWZ0LWFycm93Jyk7XG4gIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoJ2ltYWdlLXNsaWRlci1pbmRleCcsIC0xKTtcbiAgLy8gaW5pdGlhbGx5LCB0aGVyZSBpcyBubyBpbWFnZSB0byB0aGUgbGVmdCBzbyBhZGQgdGhlIGludmlzaWJsZSBjbGFzc1xuICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpO1xuXG4gIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XG5cbiAgLy8gY3JlYXRlIHRoZSBmcmFtZSB0byBob2xkIHRoZSBpbWFnZXNcbiAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnJhbWUuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWZyYW1lJyk7XG5cbiAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuXG4gIC8vIGNyZWF0ZSBhIGRpdiB0byBob2xkIGFsbCBvZiB0aGUgaW1hZ2VzIGluIGEgbG9uZyBncmlkXG4gIGNvbnN0IGFsbEltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbGxJbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWltYWdlcycpO1xuXG4gIC8vIGFkZCBldmVyeSBwaWN0dXJlIHRvIHRoZSBkaXZcbiAgcGljdHVyZXMuZm9yRWFjaCgocGljdHVyZSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBwaWN0dXJlO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZS1zbGlkZXItaW1nJyk7XG4gICAgYWxsSW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIH0pO1xuXG4gIC8vIGFkZCB0byB0aGUgZnJhbWVcbiAgLy8gdGhlIENTUyBmb3JtYXRzIHRoZSBpbWFnZSBkaXYgd2lkdGggdG8gY292ZXIgZXhhY3RseSBvbmUgaW1hZ2Ugd2l0aGluIHRoZSBmcmFtZVxuICBmcmFtZS5hcHBlbmRDaGlsZChhbGxJbWFnZXNEaXYpO1xuXG4gIC8vIGNyZWF0ZSB0aGUgcmlnaHQgYXJyb3dcbiAgY29uc3QgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICByaWdodEFycm93LnNyYyA9IFJpZ2h0O1xuICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1yaWdodC1hcnJvdycpO1xuICByaWdodEFycm93LnNldEF0dHJpYnV0ZSgnaW1hZ2Utc2xpZGVyLWluZGV4JywgMSk7XG5cbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdXNlciBpbnRlcmFjdGl2aXR5XG5cbiAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XG4gICAgY2hhbmdlRnJhbWUoXG4gICAgICBhbGxJbWFnZXNEaXYsXG4gICAgICArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbWFnZS1zbGlkZXItaW5kZXgnKSxcbiAgICAgIHBpY3R1cmVzLmxlbmd0aFxuICAgIClcbiAgKTtcblxuICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XG4gICAgY2hhbmdlRnJhbWUoXG4gICAgICBhbGxJbWFnZXNEaXYsXG4gICAgICArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbWFnZS1zbGlkZXItaW5kZXgnKSxcbiAgICAgIHBpY3R1cmVzLmxlbmd0aFxuICAgIClcbiAgKTtcblxuICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcblxuICAvLyBuZXh0LCBjcmVhdGUgdGhlIG5hdmlnYXRpb24gZG90cyBhdCB0aGUgYm90dG9tXG4gIGNvbnN0IG5hdkRvdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZEb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLW5hdi1kb3QtY29udGFpbmVyJyk7XG5cbiAgcGljdHVyZXMuZm9yRWFjaCgocGljdHVyZSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgY29uc3QgbmF2RG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1uYXYtZG90Jyk7XG4gICAgbmF2RG90LnNldEF0dHJpYnV0ZSgnaW1hZ2Utc2xpZGVyLWluZGV4JywgaW5kZXgpO1xuICAgIG5hdkRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBjaGFuZ2VGcmFtZShhbGxJbWFnZXNEaXYsIGluZGV4LCBwaWN0dXJlcy5sZW5ndGgpXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1uYXYtZG90LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIG5hdkRvdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZEb3QpO1xuICB9KTtcblxuICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChuYXZEb3RDb250YWluZXIpO1xuXG4gIHJldHVybiBpbWFnZVNsaWRlcjtcbn1cbiIsImltcG9ydCAnLi9tb2JpbGUtbWVudS5jc3MnO1xuaW1wb3J0IFggZnJvbSAnLi94LnN2Zyc7XG5cbi8vIHRha2VzIHRocmVlIHBhcmFtZXRlcnNcbi8vIG1lbnVOYW1lIC0gbmFtZSB0byBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBtZW51XG4vLyBvcHRpb25zIC0gU3RyaW5nIGFycmF5IG9mIG9wdGlvbiBuYW1lc1xuLy8gbGlua3MgLSBTdHJpbmcgYXJyYXkgb2YgbGlua3MsIG1hcHBlZCB0byBvcHRpb24gbmFtZXNcbmV4cG9ydCBkZWZhdWx0IChtZW51TmFtZSwgb3B0aW9ucywgbGlua3MpID0+IHtcbiAgLy8gY3JlYXRlIGNvbnRhaW5lciB0byBob2xkIHRoZSBtZW51XG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbWVudS1jb250YWluZXInKTtcblxuICAvLyBjcmVhdGUgaGVhZGVyIGNvbnRhaW5lciB0byBob2xkIG1lbnUgbmFtZSBhbmQgY2xvc2UgbWVudSBpY29uXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW1lbnUtaGVhZGVyJyk7XG5cbiAgLy8gY3JlYXRlIGEgZGl2IHRvIGhvbGQgdGhlIG1lbnUgbmFtZVxuICBjb25zdCBtb2JpbGVNZW51TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2JpbGVNZW51TmFtZS50ZXh0Q29udGVudCA9IG1lbnVOYW1lO1xuICBtb2JpbGVNZW51TmFtZS5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbWVudS1uYW1lJyk7XG4gIC8vIGFkZCB0aGUgbWVudSBuYW1lIHRvIHRoZSBoZWFkZXJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVOYW1lKTtcblxuICAvLyBjcmVhdGUgYW4gaW1hZ2UgZm9yIHRoZSBjbG9zZSBpY29uXG4gIGNvbnN0IGljb25DbG9zZSA9IG5ldyBJbWFnZSgpO1xuICBpY29uQ2xvc2Uuc3JjID0gWDtcbiAgaWNvbkNsb3NlLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1tZW51LWNsb3NlJyk7XG4gIC8vIGFkZCB0aGUgY2xvc2UgaWNvbiB0byB0aGUgaGVhZGVyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChpY29uQ2xvc2UpO1xuXG4gIC8vIGFkZCB0aGUgaGVhZGVyIHRvIHRoZSBtb2JpbGUgbWVudSBjb250YWluZXJcbiAgbW9iaWxlTWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIG5vdyB3ZSBjYW4gYWRkIGVhY2ggb3B0aW9uIGJlbG93XG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIC8vIGNyZWF0ZSBkaXYgdG8gaG9sZCB0aGUgb3B0aW9uXG4gICAgY29uc3Qgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gY3JlYXRlIGEgbGlua1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgLy8gc2V0IHRoZSB0ZXh0IHRvIHRoZSBvcHRpb24gaW4gdGhlIG9wdGlvbiBhcnJheVxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBvcHRpb247XG4gICAgLy8gc2V0IHRoZSBsaW5rIGhyZWYgYXR0cmlidXRlIHRvIHRoZSBjb3JyZXNwb25kaW5nIGxpbmsgaW4gdGhlIGxpbmsgYXJyYXlcbiAgICBsaW5rLmhyZWYgPSBsaW5rc1tpbmRleF07XG4gICAgLy8gYXBwZW5kIGxpbmsgdG8gdGhlIG9wdGlvbiBkaXZcbiAgICBvcHRpb25EaXYuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICAvLyBhZGQgbmVjZXNzYXJ5IGNsYXNzZXNcbiAgICBvcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW1lbnUtb3B0aW9uJyk7XG5cbiAgICAvLyBhcHBlbmQgdGhlIG9wdGlvbiB0byB0aGUgZHJvcGRvd24gbWVudVxuICAgIG1vYmlsZU1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1vYmlsZU1lbnU7XG59O1xuIiwiaW1wb3J0IGNyZWF0ZURyb3BEb3duTWVudSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcC1kb3duLW1lbnUvZHJvcC1kb3duLW1lbnUuanMnO1xuaW1wb3J0IGNyZWF0ZU1vYmlsZU1lbnUgZnJvbSAnLi9jb21wb25lbnRzL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmpzJztcbmltcG9ydCBjcmVhdGVJbWFnZVNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IGltZzEgZnJvbSAnLi9pbWcvYmVhci5qcGVnJztcbmltcG9ydCBpbWcyIGZyb20gJy4vaW1nL2VsZXBoYW50LmpwZWcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi9pbWcvd29sZi5qcGVnJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGRyb3BEb3duRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmRyb3BEb3duRGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGRyb3BEb3duRGl2KTtcblxuZHJvcERvd25EaXYuYXBwZW5kQ2hpbGQoXG4gIGNyZWF0ZURyb3BEb3duTWVudShcbiAgICAnTmV3IE1lbnUnLFxuICAgIFsnT3B0aW9uMScsICdPcHRpb24yJywgJ09wdGlvbjMnLCAnYXJlYWxseWxvbmdvcHRpb25uYW1lZ29lc2hlcmUnXSxcbiAgICBbJyMnLCAnIycsICcjJywgJyMnXVxuICApXG4pO1xuXG5kcm9wRG93bkRpdi5hcHBlbmRDaGlsZChcbiAgY3JlYXRlRHJvcERvd25NZW51KFxuICAgICdBbm90aGVyIE1lbnUnLFxuICAgIFsnT3B0aW9uMScsICdPcHRpb24yJywgJ09wdGlvbjMnLCAnYXJlYWxseWxvbmdvcHRpb25uYW1lZ29lc2hlcmUnXSxcbiAgICBbJyMnLCAnIycsICcjJywgJyMnXVxuICApXG4pO1xuXG5jb25zdCBtb2JpbGVNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb2JpbGVNZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1tZW51Jyk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQobW9iaWxlTWVudURpdik7XG5cbm1vYmlsZU1lbnVEaXYuYXBwZW5kQ2hpbGQoXG4gIGNyZWF0ZU1vYmlsZU1lbnUoXG4gICAgJ01vYmlsZSBNZW51JyxcbiAgICBbJ09wdGlvbjEnLCAnT3B0aW9uMicsICdPcHRpb24zJywgJ2FyZWFsbHlsb25nb3B0aW9ubmFtZWdvZXNoZXJlJ10sXG4gICAgWycjJywgJyMnLCAnIycsICcjJ11cbiAgKVxuKTtcblxuY29uc3QgaW1hZ2VTbGlkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmltYWdlU2xpZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlcicpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGltYWdlU2xpZGVyRGl2KTtcbmltYWdlU2xpZGVyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlU2xpZGVyKGltZzEsIGltZzIsIGltZzMpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==