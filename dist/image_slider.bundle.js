"use strict";
(self["webpackChunkodin_javascript_dynamic_user_interface_interactions"] = self["webpackChunkodin_javascript_dynamic_user_interface_interactions"] || []).push([["image_slider"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/image-slider/image-slider.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBSztBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvY29tcG9uZW50cy9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNzcz8xOTU1Iiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tamF2YXNjcmlwdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWphdmFzY3JpcHQtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1qYXZhc2NyaXB0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmltYWdlLXNsaWRlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNnB4IDFmciAzNnB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1zbGlkZXItaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5pbWFnZS1zbGlkZXItZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBsaW5lLWhlaWdodDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uaW1hZ2Utc2xpZGVyLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSk7Ki9cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG4uaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXNsaWRlci1sZWZ0LWFycm93OmhvdmVyLCAuaW1hZ2Utc2xpZGVyLXJpZ2h0LWFycm93OmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgyNCUpIHNhdHVyYXRlKDY3OTElKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDEwMSUpO1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5pbWFnZS1zbGlkZXItbmF2LWRvdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3Qge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNGQ2O1xufVxuXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3Qtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNGQ2O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2Utc2xpZGVyL2ltYWdlLXNsaWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdHQUFnRztFQUNoRyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmltYWdlLXNsaWRlci1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzZweCAxZnIgMzZweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDM2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLWltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLWZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgXFxuICBsaW5lLWhlaWdodDogMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5pbWFnZS1zbGlkZXItaW1hZ2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTsqL1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZS1zbGlkZXItbGVmdC1hcnJvdzpob3ZlciwgLmltYWdlLXNsaWRlci1yaWdodC1hcnJvdzpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDI0JSkgc2F0dXJhdGUoNjc5MSUpIGh1ZS1yb3RhdGUoMTYxZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoMTAxJSk7XFxuICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5pbWFnZS1zbGlkZXItbmF2LWRvdC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltYWdlLXNsaWRlci1uYXYtZG90IHtcXG4gIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxufVxcblxcbi5pbWFnZS1zbGlkZXItbmF2LWRvdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNGQ2O1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyLW5hdi1kb3Qtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTRkNjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW1hZ2Utc2xpZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW1hZ2Utc2xpZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2ltYWdlLXNsaWRlci5jc3MnO1xuaW1wb3J0IExlZnQgZnJvbSAnLi9jaGV2cm9uLWxlZnQuc3ZnJztcbmltcG9ydCBSaWdodCBmcm9tICcuL2NoZXZyb24tcmlnaHQuc3ZnJztcblxuY29uc3QgdXBkYXRlVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHVwZGF0ZUFycm93VmlzYmlsaXR5KFxuICBuZXdQaWN0dXJlSW5kZXgsXG4gIG51bVBpY3R1cmVzLFxuICBsZWZ0QXJyb3csXG4gIHJpZ2h0QXJyb3dcbikge1xuICBpZiAoXG4gICAgbmV3UGljdHVyZUluZGV4ID09PSAwICYmXG4gICAgIWxlZnRBcnJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKVxuICApIHtcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpO1xuICB9IGVsc2UgaWYgKFxuICAgIG5ld1BpY3R1cmVJbmRleCA+IDAgJiZcbiAgICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS1zbGlkZXItYXJyb3ctaW52aXNpYmxlJylcbiAgKSB7XG4gICAgbGVmdEFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKTtcbiAgfVxuXG4gIGlmIChcbiAgICBuZXdQaWN0dXJlSW5kZXggPT09IG51bVBpY3R1cmVzIC0gMSAmJlxuICAgICFyaWdodEFycm93LmNsYXNzTGlzdC5jb250YWlucygnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpXG4gICkge1xuICAgIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpO1xuICB9IGVsc2UgaWYgKFxuICAgIG5ld1BpY3R1cmVJbmRleCA8IG51bVBpY3R1cmVzICYmXG4gICAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuY29udGFpbnMoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKVxuICApIHtcbiAgICByaWdodEFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlLXNsaWRlci1hcnJvdy1pbnZpc2libGUnKTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlTmF2RG90cyA9IGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25Eb3RzKG5ld1BpY3R1cmVJbmRleCkge1xuICBjb25zdCBuYXZEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlLXNsaWRlci1uYXYtZG90Jyk7XG4gIGNvbnN0IG5hdkRvdHNBcnJheSA9IFsuLi5uYXZEb3RzXTtcbiAgbmF2RG90c0FycmF5LmZvckVhY2goKG5hdkRvdCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IG5ld1BpY3R1cmVJbmRleCkge1xuICAgICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1uYXYtZG90LXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIGlmIChuYXZEb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZS1zbGlkZXItbmF2LWRvdC1zZWxlY3RlZCcpKSB7XG4gICAgICBuYXZEb3QuY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2Utc2xpZGVyLW5hdi1kb3Qtc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY2hhbmdlRnJhbWUgPSBmdW5jdGlvbiBjaGFuZ2VGcmFtZUltYWdlKFxuICBhbGxJbWFnZXNEaXYsXG4gIG5ld1BpY3R1cmVJbmRleCxcbiAgbnVtUGljdHVyZXNcbikge1xuICBpZiAobmV3UGljdHVyZUluZGV4ID49IDAgJiYgbmV3UGljdHVyZUluZGV4IDwgbnVtUGljdHVyZXMpIHtcbiAgICAvLyBjaGFuZ2UgdHJhbnNmb3JtIHByb3BlcnR5XG4gICAgYWxsSW1hZ2VzRGl2LnNldEF0dHJpYnV0ZShcbiAgICAgICdzdHlsZScsXG4gICAgICBgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLSR7bmV3UGljdHVyZUluZGV4ICogMTAwfSUpYFxuICAgICk7XG5cbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2Utc2xpZGVyLWxlZnQtYXJyb3cnKTtcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXNsaWRlci1yaWdodC1hcnJvdycpO1xuXG4gICAgLy8gdXBkYXRlIGFycm93cyBpbWFnZS1zbGlkZXItaW5kZXggYXR0cmlidXRlXG4gICAgbGVmdEFycm93LnNldEF0dHJpYnV0ZSgnaW1hZ2Utc2xpZGVyLWluZGV4JywgbmV3UGljdHVyZUluZGV4IC0gMSk7XG4gICAgcmlnaHRBcnJvdy5zZXRBdHRyaWJ1dGUoJ2ltYWdlLXNsaWRlci1pbmRleCcsIG5ld1BpY3R1cmVJbmRleCArIDEpO1xuXG4gICAgLy8gdXBkYXRlIG5hdiBkb3RzXG4gICAgdXBkYXRlTmF2RG90cyhuZXdQaWN0dXJlSW5kZXgpO1xuXG4gICAgLy8gYWxzbyB1cGRhdGUgdmlzaWJpbGl0eSBjbGFzcyBpZiBubyBvdGhlciBpbWFnZSBpbiByYW5nZVxuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PlxuICAgICAgICB1cGRhdGVWaXNpYmlsaXR5KG5ld1BpY3R1cmVJbmRleCwgbnVtUGljdHVyZXMsIGxlZnRBcnJvdywgcmlnaHRBcnJvdyksXG4gICAgICAyNTBcbiAgICApO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ2NsaWNrZWQhJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplSW1hZ2VTbGlkZXIoLi4ucGljdHVyZXMpIHtcbiAgLy8gY3JlYXRlIGEgY29udGFpbmVyIHRvIGhvbGQgdGhlIGltYWdlIHNsaWRlciBlbGVtZW50c1xuICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZVNsaWRlci5jbGFzc0xpc3QuYWRkKCdpbWFnZS1zbGlkZXItY29udGFpbmVyJyk7XG5cbiAgLy8gY3JlYXRlIHRoZSBsZWZ0IGFycm93XG4gIGNvbnN0IGxlZnRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBsZWZ0QXJyb3cuc3JjID0gTGVmdDtcbiAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1sZWZ0LWFycm93Jyk7XG4gIGxlZnRBcnJvdy5zZXRBdHRyaWJ1dGUoJ2ltYWdlLXNsaWRlci1pbmRleCcsIC0xKTtcbiAgLy8gaW5pdGlhbGx5LCB0aGVyZSBpcyBubyBpbWFnZSB0byB0aGUgbGVmdCBzbyBhZGQgdGhlIGludmlzaWJsZSBjbGFzc1xuICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWFycm93LWludmlzaWJsZScpO1xuXG4gIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGxlZnRBcnJvdyk7XG5cbiAgLy8gY3JlYXRlIHRoZSBmcmFtZSB0byBob2xkIHRoZSBpbWFnZXNcbiAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZnJhbWUuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWZyYW1lJyk7XG5cbiAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuXG4gIC8vIGNyZWF0ZSBhIGRpdiB0byBob2xkIGFsbCBvZiB0aGUgaW1hZ2VzIGluIGEgbG9uZyBncmlkXG4gIGNvbnN0IGFsbEltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbGxJbWFnZXNEaXYuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLWltYWdlcycpO1xuXG4gIC8vIGFkZCBldmVyeSBwaWN0dXJlIHRvIHRoZSBkaXZcbiAgcGljdHVyZXMuZm9yRWFjaCgocGljdHVyZSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBwaWN0dXJlO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZS1zbGlkZXItaW1nJyk7XG4gICAgYWxsSW1hZ2VzRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIH0pO1xuXG4gIC8vIGFkZCB0byB0aGUgZnJhbWVcbiAgLy8gdGhlIENTUyBmb3JtYXRzIHRoZSBpbWFnZSBkaXYgd2lkdGggdG8gY292ZXIgZXhhY3RseSBvbmUgaW1hZ2Ugd2l0aGluIHRoZSBmcmFtZVxuICBmcmFtZS5hcHBlbmRDaGlsZChhbGxJbWFnZXNEaXYpO1xuXG4gIC8vIGNyZWF0ZSB0aGUgcmlnaHQgYXJyb3dcbiAgY29uc3QgcmlnaHRBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICByaWdodEFycm93LnNyYyA9IFJpZ2h0O1xuICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1yaWdodC1hcnJvdycpO1xuICByaWdodEFycm93LnNldEF0dHJpYnV0ZSgnaW1hZ2Utc2xpZGVyLWluZGV4JywgMSk7XG5cbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdXNlciBpbnRlcmFjdGl2aXR5XG5cbiAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XG4gICAgY2hhbmdlRnJhbWUoXG4gICAgICBhbGxJbWFnZXNEaXYsXG4gICAgICArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbWFnZS1zbGlkZXItaW5kZXgnKSxcbiAgICAgIHBpY3R1cmVzLmxlbmd0aFxuICAgIClcbiAgKTtcblxuICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+XG4gICAgY2hhbmdlRnJhbWUoXG4gICAgICBhbGxJbWFnZXNEaXYsXG4gICAgICArZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbWFnZS1zbGlkZXItaW5kZXgnKSxcbiAgICAgIHBpY3R1cmVzLmxlbmd0aFxuICAgIClcbiAgKTtcblxuICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcblxuICAvLyBuZXh0LCBjcmVhdGUgdGhlIG5hdmlnYXRpb24gZG90cyBhdCB0aGUgYm90dG9tXG4gIGNvbnN0IG5hdkRvdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZEb3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2xpZGVyLW5hdi1kb3QtY29udGFpbmVyJyk7XG5cbiAgcGljdHVyZXMuZm9yRWFjaCgocGljdHVyZSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgY29uc3QgbmF2RG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1uYXYtZG90Jyk7XG4gICAgbmF2RG90LnNldEF0dHJpYnV0ZSgnaW1hZ2Utc2xpZGVyLWluZGV4JywgaW5kZXgpO1xuICAgIG5hdkRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBjaGFuZ2VGcmFtZShhbGxJbWFnZXNEaXYsIGluZGV4LCBwaWN0dXJlcy5sZW5ndGgpXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgbmF2RG90LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNsaWRlci1uYXYtZG90LXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIG5hdkRvdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZEb3QpO1xuICB9KTtcblxuICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChuYXZEb3RDb250YWluZXIpO1xuXG4gIHJldHVybiBpbWFnZVNsaWRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==