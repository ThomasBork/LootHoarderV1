/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rendering/react/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/combat/combat.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/combat/combat.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#combat-body-container {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n  #combat-body-container .arenas-container {\n    width: 300px;\n    background-color: #87583A;\n    border-right: 1px solid black; }\n  #combat-body-container .selected-arena-container {\n    flex: 1 1 auto; }\n    #combat-body-container .selected-arena-container .arena {\n      height: 100%;\n      width: 100%;\n      background-size: 100% 100%;\n      display: flex;\n      flex-direction: column;\n      position: relative; }\n      #combat-body-container .selected-arena-container .arena .header {\n        flex: 0 0 auto;\n        display: flex;\n        justify-content: space-between; }\n        #combat-body-container .selected-arena-container .arena .header .room-info {\n          display: flex;\n          flex-direction: column; }\n        #combat-body-container .selected-arena-container .arena .header .arena-info {\n          display: flex;\n          flex-direction: column; }\n      #combat-body-container .selected-arena-container .arena .body {\n        flex: 1 1 auto;\n        position: relative; }\n        #combat-body-container .selected-arena-container .arena .body .character-container {\n          position: absolute;\n          width: 200px;\n          border: 2px solid transparent; }\n          #combat-body-container .selected-arena-container .arena .body .character-container.selectable {\n            cursor: pointer; }\n          #combat-body-container .selected-arena-container .arena .body .character-container.selected:not(.legal-target) {\n            border-color: green; }\n          #combat-body-container .selected-arena-container .arena .body .character-container.legal-target {\n            cursor: pointer;\n            border-color: white;\n            border-style: dashed; }\n            #combat-body-container .selected-arena-container .arena .body .character-container.legal-target:hover {\n              border-style: solid; }\n          #combat-body-container .selected-arena-container .arena .body .character-container .character .character-image {\n            height: 200px;\n            width: 100%;\n            background-size: 100% 100%; }\n      #combat-body-container .selected-arena-container .arena .footer {\n        flex: 0 0 auto;\n        padding: 20px; }\n        #combat-body-container .selected-arena-container .arena .footer .skills-container {\n          display: flex;\n          padding: 15px;\n          background-color: #87583A; }\n          #combat-body-container .selected-arena-container .arena .footer .skills-container .skill-container {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding: 10px;\n            margin-right: 15px;\n            background-color: #B77C57;\n            cursor: pointer; }\n            #combat-body-container .selected-arena-container .arena .footer .skills-container .skill-container .skill-image {\n              height: 64px;\n              width: 64px;\n              background-size: 100% 100%; }\n      #combat-body-container .selected-arena-container .arena .overlay {\n        position: absolute;\n        left: 5%;\n        top: 5%;\n        width: 90%;\n        height: 90%;\n        opacity: 0.7;\n        background-color: black;\n        z-index: 1000;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/general.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/general.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flexbox {\n  display: flex; }\n\n.flexbox-between {\n  display: flex;\n  justify-content: space-between; }\n\n.flexbox-column {\n  display: flex;\n  flex-direction: column; }\n\n.flexbox-column-between {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.button {\n  background-color: #9999BB;\n  border: 2px solid grey;\n  display: inline-block;\n  padding-left: 15px;\n  padding-right: 15px;\n  cursor: pointer; }\n\nbutton {\n  padding: 10px;\n  background-color: #3333FF;\n  border: 1px solid black;\n  cursor: pointer;\n  color: white; }\n  button:hover {\n    background-color: #6666FF; }\n  button:active {\n    margin-top: 1px;\n    margin-left: 1px; }\n\n.large-list-card {\n  background-color: #BB9955;\n  border: 2px solid grey;\n  min-height: 150px;\n  width: 600px;\n  margin-bottom: 5px; }\n\n.progress-bar {\n  width: 100%;\n  height: 10px;\n  background-color: #141414;\n  border: 1px solid grey; }\n\n.progress-bar .bar {\n  height: 100%;\n  background-color: #9999BB; }\n\n.draggable-container {\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/heroes/heroes.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/heroes/heroes.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/map/map.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/map/map.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#map-body-container {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n  #map-body-container .info-panel {\n    width: 300px;\n    background-color: #87583A;\n    border-right: 1px solid black; }\n    #map-body-container .info-panel .heroes {\n      display: flex; }\n      #map-body-container .info-panel .heroes .hero {\n        position: relative; }\n        #map-body-container .info-panel .heroes .hero .checkmark {\n          position: absolute;\n          height: 64px;\n          width: 64px;\n          bottom: 0;\n          right: 0; }\n  #map-body-container .map-container {\n    flex: 1 1 auto;\n    background-color: #B77C57; }\n    #map-body-container .map-container .map {\n      position: relative; }\n      #map-body-container .map-container .map .arena-type {\n        position: absolute;\n        background-size: 100% 100%;\n        border: 1px solid black;\n        cursor: pointer;\n        opacity: 0.7; }\n        #map-body-container .map-container .map .arena-type:hover {\n          opacity: 1; }\n        #map-body-container .map-container .map .arena-type .header {\n          display: flex;\n          justify-content: space-between; }\n          #map-body-container .map-container .map .arena-type .header .name, #map-body-container .map-container .map .arena-type .header .level {\n            padding: 5px;\n            border-bottom: 1px solid black;\n            background-color: #CEA68D;\n            color: black; }\n          #map-body-container .map-container .map .arena-type .header .name {\n            border-right: 1px solid black; }\n          #map-body-container .map-container .map .arena-type .header .level {\n            border-left: 1px solid black; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/structure.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/structure.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background-color: #141414;\n  color: #f2f2f2;\n  user-select: none; }\n\n/* Header */\n#header {\n  width: 100%;\n  height: 50px;\n  background-color: #303030;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px; }\n  #header .title-container {\n    display: flex;\n    flex-direction: column; }\n    #header .title-container .title {\n      font-size: 25px; }\n    #header .title-container .version-number {\n      font-size: 10px; }\n  #header .btn-new-game {\n    padding-top: 8px; }\n\n/* Body */\n#body {\n  padding: 10px; }\n\n.tabs {\n  display: flex;\n  margin-bottom: 1px; }\n  .tabs .tab {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 15px;\n    cursor: pointer;\n    user-select: none;\n    background-color: #B77C57; }\n    .tabs .tab.active {\n      background-color: #87583A; }\n    .tabs .tab:hover:not(.active) {\n      background-color: #996342; }\n\n.tab-body {\n  width: 1400px;\n  height: 800px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ "./src/common/number-formatting-service.ts":
/*!*************************************************!*\
  !*** ./src/common/number-formatting-service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NumberFormattingService {
    constructor() {
        this.postfixes = ['', 'k', 'm', 'b'];
    }
    formatInteger(n) {
        return this.format(n, 0);
    }
    formatDecimal(n) {
        return this.format(n, 2);
    }
    format(number, maxDecimals, minDecimals, ceil) {
        if (maxDecimals === undefined) {
            maxDecimals = 2;
        }
        if (minDecimals === undefined) {
            minDecimals = maxDecimals;
        }
        if (ceil === undefined) {
            ceil = false;
        }
        let amountOfTimesTheNumberCanBeDividedBy1000 = 0;
        while (number > 10000) {
            number /= 1000;
            amountOfTimesTheNumberCanBeDividedBy1000++;
        }
        const multiplier = Math.pow(10, maxDecimals);
        let roundedNumber;
        if (ceil) {
            number -= 0.0001; // Floating point fix.
            roundedNumber = Math.ceil(number * multiplier) / multiplier;
        }
        else {
            number += 0.0001; // Floating point fix.
            roundedNumber = Math.floor(number * multiplier) / multiplier;
        }
        let numberString;
        if (minDecimals) {
            numberString = roundedNumber.toFixed(minDecimals);
        }
        else {
            numberString = roundedNumber.toString();
        }
        const postfix = this.postfixes[amountOfTimesTheNumberCanBeDividedBy1000];
        if (postfix) {
            numberString += postfix;
        }
        return numberString;
    }
}
exports.NumberFormattingService = NumberFormattingService;


/***/ }),

/***/ "./src/common/observable-subscription.ts":
/*!***********************************************!*\
  !*** ./src/common/observable-subscription.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ObservableSubscription {
    constructor(observer, callback) {
        this.observer = observer;
        this.callback = callback;
    }
}
exports.ObservableSubscription = ObservableSubscription;


/***/ }),

/***/ "./src/common/observable.ts":
/*!**********************************!*\
  !*** ./src/common/observable.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const observable_subscription_1 = __webpack_require__(/*! ./observable-subscription */ "./src/common/observable-subscription.ts");
class ObservableFactory {
    constructor() {
        this.subscriptions = [];
    }
    static create() {
        return new ObservableFactory();
    }
    static createWith1Argument() {
        return new ObservableFactory();
    }
    static createWith2Arguments() {
        return new ObservableFactory();
    }
    addSubscription(observer, callback) {
        const subscription = new observable_subscription_1.ObservableSubscription(observer, callback);
        this.subscriptions.push(subscription);
    }
    removeSubscription(observer) {
        this.subscriptions = this.subscriptions.filter(s => s.observer !== observer);
    }
    notify(...args) {
        this.subscriptions.forEach(subscription => subscription.callback.apply(subscription.observer, args));
    }
}
exports.ObservableFactory = ObservableFactory;


/***/ }),

/***/ "./src/game/Game.ts":
/*!**************************!*\
  !*** ./src/game/Game.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = __webpack_require__(/*! ./heroes/hero */ "./src/game/heroes/hero.ts");
const arena_1 = __webpack_require__(/*! ./arenas/arena */ "./src/game/arenas/arena.ts");
class Game {
    static load(dbGame) {
        const game = new Game();
        game.dbModel = dbGame;
        game.heroes = dbGame.heroes.map(hero_1.Hero.load);
        game.arenas = dbGame.arenas.map(arena_1.Arena.load);
        return game;
    }
    update(dTime) {
        this.arenas.forEach(arena => arena.update(dTime));
    }
    addHero(hero) {
        this.dbModel.heroes.push(hero.dbModel);
        this.heroes.push(hero);
    }
    spawnArena(type, level, heroes) {
        const dbRooms = type.createDbRooms(level);
        const dbArena = {
            typeKey: type.key,
            startTime: new Date(),
            level: level,
            rooms: dbRooms,
            currentRoomIndex: 0
        };
        const arena = arena_1.Arena.load(dbArena);
        this.dbModel.arenas.push(arena.dbModel);
        this.arenas.push(arena);
        arena.rooms[0].setHeroes(heroes);
        return arena;
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/game/arenas/arena-room-encounter.ts":
/*!*************************************************!*\
  !*** ./src/game/arenas/arena-room-encounter.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monster_1 = __webpack_require__(/*! ../monsters/monster */ "./src/game/monsters/monster.ts");
class ArenaRoomEncounter {
    static load(dbArenaRoomEncounter) {
        const arenaRoomEncounter = new ArenaRoomEncounter();
        arenaRoomEncounter.dbModel = dbArenaRoomEncounter;
        arenaRoomEncounter.monsters = arenaRoomEncounter.dbModel.monsters.map(monster_1.Monster.load);
        return arenaRoomEncounter;
    }
}
exports.ArenaRoomEncounter = ArenaRoomEncounter;


/***/ }),

/***/ "./src/game/arenas/arena-room.ts":
/*!***************************************!*\
  !*** ./src/game/arenas/arena-room.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const arena_room_encounter_1 = __webpack_require__(/*! ./arena-room-encounter */ "./src/game/arenas/arena-room-encounter.ts");
class ArenaRoom {
    get currentEncounter() {
        return this.encounters[this.dbModel.currentEncounterIndex];
    }
    get currentEncounterIndex() { return this.dbModel.currentEncounterIndex; }
    get hasPlayerLost() { return this.heroes.every(hero => !hero.isAlive); }
    static load(dbArenaRoom) {
        const arenaRoom = new ArenaRoom();
        arenaRoom.dbModel = dbArenaRoom;
        arenaRoom.encounters = arenaRoom.dbModel.encounters.map(arena_room_encounter_1.ArenaRoomEncounter.load);
        return arenaRoom;
    }
    setHeroes(heroes) {
        this.heroes = heroes;
        this.dbModel.heroIds = this.heroes.map(hero => hero.dbModel.id);
    }
}
exports.ArenaRoom = ArenaRoom;


/***/ }),

/***/ "./src/game/arenas/arena-type-service.ts":
/*!***********************************************!*\
  !*** ./src/game/arenas/arena-type-service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const arena_type_1 = __webpack_require__(/*! ./arena-type */ "./src/game/arenas/arena-type.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class ArenaTypeService {
    initialize() {
        this.allArenaTypes = [
            arena_type_1.ArenaType.create({
                key: 'forest',
                name: 'Forest',
                description: 'Easy monsters!',
                imageName: 'forest.png',
                position: { x: 0, y: 0 },
                level: 1,
                createDbRooms: (level) => {
                    return this.createDbRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfEncountersInEachRoom: 5,
                        amountOfMonstersInEachEncounter: 2,
                        monsterTypes: [
                            {
                                weight: 20,
                                value: game_services_1.GameServices.monsterTypes.wolf
                            },
                            {
                                weight: 10,
                                value: game_services_1.GameServices.monsterTypes.snake
                            }
                        ]
                    });
                }
            }),
            arena_type_1.ArenaType.create({
                key: 'brushlands',
                name: 'Brushlands',
                description: 'Also easy monsters!',
                imageName: 'brushlands.png',
                position: { x: 1, y: 0 },
                level: 5,
                createDbRooms: (level) => {
                    return this.createDbRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfEncountersInEachRoom: 5,
                        amountOfMonstersInEachEncounter: 2,
                        monsterTypes: [
                            {
                                weight: 20,
                                value: game_services_1.GameServices.monsterTypes.wolf
                            },
                            {
                                weight: 10,
                                value: game_services_1.GameServices.monsterTypes.snake
                            }
                        ]
                    });
                }
            })
        ];
    }
    getByKey(key) {
        return this.allArenaTypes.find(type => type.key === key);
    }
    createDbRooms(settings) {
        const dbArenaRooms = [];
        for (let currentRoomIndex = 0; currentRoomIndex < settings.amountOfRooms; currentRoomIndex++) {
            const dbEncounters = [];
            for (let currentEncounterIndex = 0; currentEncounterIndex < settings.amountOfEncountersInEachRoom; currentEncounterIndex++) {
                const dbMonsters = [];
                for (let currentMonsterIndex = 0; currentMonsterIndex < settings.amountOfMonstersInEachEncounter; currentMonsterIndex++) {
                    const monsterType = game_services_1.GameServices.random.getWeightedValue(settings.monsterTypes);
                    const dbMonster = game_services_1.GameServices.monsters.createDBMonster(settings.level, monsterType);
                    dbMonsters.push(dbMonster);
                }
                const dbEncounter = {
                    monsters: dbMonsters
                };
                dbEncounters.push(dbEncounter);
            }
            const dbArenaRoom = {
                currentEncounterIndex: 0,
                heroIds: [],
                encounters: dbEncounters
            };
            dbArenaRooms.push(dbArenaRoom);
        }
        return dbArenaRooms;
    }
}
exports.ArenaTypeService = ArenaTypeService;


/***/ }),

/***/ "./src/game/arenas/arena-type.ts":
/*!***************************************!*\
  !*** ./src/game/arenas/arena-type.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ArenaType {
    static create(options) {
        const arenaType = new ArenaType();
        arenaType.key = options.key;
        arenaType.name = options.name;
        arenaType.description = options.description;
        arenaType.imageName = options.imageName;
        arenaType.position = options.position;
        arenaType.level = options.level;
        arenaType.createDbRooms = options.createDbRooms;
        return arenaType;
    }
}
exports.ArenaType = ArenaType;


/***/ }),

/***/ "./src/game/arenas/arena.ts":
/*!**********************************!*\
  !*** ./src/game/arenas/arena.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const arena_room_1 = __webpack_require__(/*! ./arena-room */ "./src/game/arenas/arena-room.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
const hero_1 = __webpack_require__(/*! ../heroes/hero */ "./src/game/heroes/hero.ts");
const observable_1 = __webpack_require__(/*! ../../common/observable */ "./src/common/observable.ts");
class Arena {
    constructor() {
        this.onPlayerLose = observable_1.ObservableFactory.create();
    }
    get currentRoom() { return this.rooms[this.dbModel.currentRoomIndex]; }
    get currentRoomIndex() { return this.dbModel.currentRoomIndex; }
    get level() { return this.dbModel.level; }
    get hasPlayerLost() { return this.currentRoom.hasPlayerLost; }
    static load(dbArena) {
        const arena = new Arena();
        arena.dbModel = dbArena;
        arena.type = game_services_1.GameServices.arenaTypes.getByKey(dbArena.typeKey);
        arena.rooms = dbArena.rooms.map(arena_room_1.ArenaRoom.load);
        return arena;
    }
    update(dTime) {
        if (!this.hasPlayerLost) {
            this.currentRoom.heroes.forEach(hero => {
                hero.skills.forEach(skill => skill.reduceCooldown(dTime));
            });
            this.currentRoom.currentEncounter.monsters.forEach(monster => {
                if (monster.isAlive && !this.hasPlayerLost) {
                    // Update cooldowns
                    monster.skills.forEach(skill => skill.reduceCooldown(dTime));
                    // Find and use a ready skill if possible
                    const readySkills = monster.skills.filter(skill => skill.isReady);
                    if (readySkills.length > 0) {
                        const weightedReadySkills = readySkills.map(skill => {
                            const weightedSkillType = monster.type.skillTypes.find(wSkillType => wSkillType.value === skill.type);
                            return {
                                weight: weightedSkillType.weight,
                                value: skill
                            };
                        });
                        const skillToUse = game_services_1.GameServices.random.getWeightedValue(weightedReadySkills);
                        const legalTargets = this.getLegalTargets(monster, skillToUse.type);
                        if (skillToUse.type.requiresTarget) {
                            if (legalTargets.length > 0) {
                                const target = game_services_1.GameServices.random.getRandomElement(legalTargets);
                                this.useSkill(monster, target, skillToUse);
                            }
                        }
                        else {
                            this.useSkill(monster, null, skillToUse);
                        }
                    }
                }
            });
        }
    }
    getLegalTargets(user, skillType) {
        const legalTargets = [];
        const isHero = user instanceof hero_1.Hero;
        const heroes = this.currentRoom.heroes.filter(hero => hero.isAlive);
        const monsters = this.currentRoom.currentEncounter.monsters.filter(monster => monster.isAlive);
        const friends = isHero ? heroes : monsters;
        const enemies = isHero ? monsters : heroes;
        if (skillType.canTargetEnemy) {
            legalTargets.push(...enemies);
        }
        if (skillType.canTargetFriend) {
            legalTargets.push(...friends);
        }
        return legalTargets;
    }
    useSkill(user, target, skill) {
        if (skill.remainingCooldown === 0) {
            if (!this.hasPlayerLost) {
                skill.type.effect(user, target, this.currentRoom);
                skill.resetCooldown();
                if (this.hasPlayerLost) {
                    this.onPlayerLose.notify();
                }
            }
        }
        else {
            throw new Error("Can't use " + skill.type.name + " because it is not ready.");
        }
    }
}
exports.Arena = Arena;


/***/ }),

/***/ "./src/game/attributes/attribute-type-service.ts":
/*!*******************************************************!*\
  !*** ./src/game/attributes/attribute-type-service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AttributeTypeService {
    initialize() {
        this.attackSpeed = {
            key: 'attack-speed',
            name: 'Attack speed',
            description: 'More attack speed decreases the time needed to recover after performing an attack.'
        };
        this.attackDamage = {
            key: 'attack-damage',
            name: 'Attack damage',
            description: 'Increases the damage dealt by attacks.'
        };
        this.attackCriticalChance = {
            key: 'attack-critical-chance',
            name: 'Critical chance',
            description: 'The chance to deal a critical strike with attacks.'
        };
        this.attackCriticalMultiplier = {
            key: 'attack-critical-multiplier',
            name: 'Critical multiplier',
            description: 'How much damage a critical hit does'
        };
        this.armor = {
            key: 'armor',
            name: 'Armor',
            description: 'Decreases the physical damage taken.'
        };
        this.magicResistance = {
            key: 'magic-resistance',
            name: 'Magic Resistance',
            description: 'Decreases the magic damage taken.'
        };
        this.maximumHealth = {
            key: 'maximum-health',
            name: 'Maximum Health',
            description: 'The character loses health whenever it takes any damage.'
        };
        this.maximumEnergy = {
            key: 'maximum-energy',
            name: 'Maximum Energy',
            description: 'Some skills cost energy.'
        };
    }
}
exports.AttributeTypeService = AttributeTypeService;


/***/ }),

/***/ "./src/game/attributes/attributes.ts":
/*!*******************************************!*\
  !*** ./src/game/attributes/attributes.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const value_container_1 = __webpack_require__(/*! ../shared/value-container */ "./src/game/shared/value-container.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class Attributes {
    get(type) {
        return this.all.find(attr => attr.type === type);
    }
    static create(attributes) {
        const attributeTypesService = game_services_1.GameServices.attributeTypes;
        const newAttributes = new Attributes();
        if (!attributes) {
            attributes = {};
        }
        newAttributes.attackSpeed = new value_container_1.ValueContainer(attributes.attackSpeed);
        newAttributes.attackDamage = new value_container_1.ValueContainer(attributes.attackDamage);
        newAttributes.attackCriticalChance = new value_container_1.ValueContainer(attributes.attackCriticalChance);
        newAttributes.attackCriticalMultiplier = new value_container_1.ValueContainer(attributes.attackCriticalMultiplier);
        newAttributes.armor = new value_container_1.ValueContainer(attributes.armor);
        newAttributes.magicResistance = new value_container_1.ValueContainer(attributes.magicResistance);
        newAttributes.maximumHealth = new value_container_1.ValueContainer(attributes.maximumHealth);
        newAttributes.maximumEnergy = new value_container_1.ValueContainer(attributes.maximumEnergy);
        newAttributes.all = [
            {
                amount: newAttributes.attackSpeed,
                type: attributeTypesService.attackSpeed
            },
            {
                amount: newAttributes.attackDamage,
                type: attributeTypesService.attackDamage
            },
            {
                amount: newAttributes.attackCriticalChance,
                type: attributeTypesService.attackCriticalChance
            },
            {
                amount: newAttributes.attackCriticalMultiplier,
                type: attributeTypesService.attackCriticalMultiplier
            },
            {
                amount: newAttributes.armor,
                type: attributeTypesService.armor
            },
            {
                amount: newAttributes.magicResistance,
                type: attributeTypesService.magicResistance
            },
            {
                amount: newAttributes.maximumHealth,
                type: attributeTypesService.maximumHealth
            },
            {
                amount: newAttributes.maximumEnergy,
                type: attributeTypesService.maximumEnergy
            }
        ];
        return newAttributes;
    }
}
exports.Attributes = Attributes;


/***/ }),

/***/ "./src/game/game-controller.ts":
/*!*************************************!*\
  !*** ./src/game/game-controller.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __webpack_require__(/*! ./Game */ "./src/game/Game.ts");
const game_runner_1 = __webpack_require__(/*! ./game-runner */ "./src/game/game-runner.ts");
const game_services_1 = __webpack_require__(/*! ./game-services */ "./src/game/game-services.ts");
const item_body_location_1 = __webpack_require__(/*! ./items/item-body-location */ "./src/game/items/item-body-location.ts");
class GameController {
    initialize() {
        this.gameRunner = new game_runner_1.GameRunner();
    }
    newGame() {
        const dbGame = {
            version: game_services_1.GameServices.version.currentVersion,
            startTime: new Date(),
            heroes: [{
                    id: 1,
                    typeKey: 'warrior',
                    name: 'Heltefar',
                    level: 1,
                    experience: 0,
                    currentHealth: undefined,
                    isAlive: true,
                    skills: [{
                            typeKey: 'basic-attack',
                            remainingCooldown: 0
                        }],
                    items: [{
                            key: item_body_location_1.ItemBodyLocation.mainHand,
                            value: {
                                id: 0,
                                typeKey: 'broad-sword',
                                level: 1,
                                implicitPassiveAbilities: [{
                                        typeKey: 'increased-attack-damage',
                                        args: {
                                            'attack-damage': 4
                                        }
                                    }],
                                explicitPassiveAbilities: []
                            }
                        }]
                }],
            arenas: [],
            items: []
        };
        this.game = Game_1.Game.load(dbGame);
        this.gameRunner.beginUpdating(this.game);
    }
}
exports.GameController = GameController;


/***/ }),

/***/ "./src/game/game-runner.ts":
/*!*********************************!*\
  !*** ./src/game/game-runner.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = __webpack_require__(/*! ../common/observable */ "./src/common/observable.ts");
class GameRunner {
    constructor() {
        this.updateFrequency = 100;
        this.maxTimeToResumePerUpdate = 24 * 60 * 60 * 1000;
        this.lastUpdateAsNumber = Date.now();
        this.onUpdate = observable_1.ObservableFactory.create();
    }
    beginUpdating(game) {
        this.game = game;
        if (this.updateIntervalID) {
            clearInterval(this.updateIntervalID);
        }
        this.updateIntervalID = setInterval(() => {
            this.update();
        }, this.updateFrequency);
    }
    update() {
        let timeSinceLastUpdate = Date.now() - this.lastUpdateAsNumber;
        // Cap catch up duration
        if (timeSinceLastUpdate > this.maxTimeToResumePerUpdate) {
            timeSinceLastUpdate = this.maxTimeToResumePerUpdate;
            this.lastUpdateAsNumber = Date.now() - this.maxTimeToResumePerUpdate;
        }
        // Update until caught up
        while (timeSinceLastUpdate > this.updateFrequency) {
            timeSinceLastUpdate -= this.updateFrequency;
            this.lastUpdateAsNumber = this.lastUpdateAsNumber + this.updateFrequency;
            this.game.update(this.updateFrequency);
        }
        this.onUpdate.notify();
    }
}
exports.GameRunner = GameRunner;


/***/ }),

/***/ "./src/game/game-services.ts":
/*!***********************************!*\
  !*** ./src/game/game-services.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const attribute_type_service_1 = __webpack_require__(/*! ./attributes/attribute-type-service */ "./src/game/attributes/attribute-type-service.ts");
const version_service_1 = __webpack_require__(/*! ./version-service */ "./src/game/version-service.ts");
const random_service_1 = __webpack_require__(/*! ./shared/random-service */ "./src/game/shared/random-service.ts");
const skill_type_service_1 = __webpack_require__(/*! ./skills/skill-type-service */ "./src/game/skills/skill-type-service.ts");
const monster_type_service_1 = __webpack_require__(/*! ./monsters/monster-type-service */ "./src/game/monsters/monster-type-service.ts");
const monster_service_1 = __webpack_require__(/*! ./monsters/monster-service */ "./src/game/monsters/monster-service.ts");
const arena_type_service_1 = __webpack_require__(/*! ./arenas/arena-type-service */ "./src/game/arenas/arena-type-service.ts");
const hero_type_service_1 = __webpack_require__(/*! ./heroes/hero-type-service */ "./src/game/heroes/hero-type-service.ts");
const number_formatting_service_1 = __webpack_require__(/*! ../common/number-formatting-service */ "./src/common/number-formatting-service.ts");
const passive_ability_type_service_1 = __webpack_require__(/*! ./items/passive-ability-type-service */ "./src/game/items/passive-ability-type-service.ts");
const passive_ability_generator_service_1 = __webpack_require__(/*! ./items/passive-ability-generator-service */ "./src/game/items/passive-ability-generator-service.ts");
const item_type_service_1 = __webpack_require__(/*! ./items/item-type-service */ "./src/game/items/item-type-service.ts");
class GameServices {
    constructor() { }
    ;
    static initialize() {
        GameServices.random = new random_service_1.RandomService();
        GameServices.numberFormatting = new number_formatting_service_1.NumberFormattingService();
        GameServices.arenaTypes = new arena_type_service_1.ArenaTypeService();
        GameServices.arenaTypes.initialize();
        GameServices.attributeTypes = new attribute_type_service_1.AttributeTypeService();
        GameServices.attributeTypes.initialize();
        GameServices.skillTypes = new skill_type_service_1.SkillTypeService();
        GameServices.skillTypes.initialize();
        GameServices.heroTypes = new hero_type_service_1.HeroTypeService();
        GameServices.heroTypes.initialize();
        GameServices.monsterTypes = new monster_type_service_1.MonsterTypeService();
        GameServices.monsterTypes.initialize();
        GameServices.monsters = new monster_service_1.MonsterService();
        GameServices.passiveAbilityTypes = new passive_ability_type_service_1.PassiveAbilityTypeService();
        GameServices.passiveAbilityTypes.initialize();
        GameServices.passiveAbilityGenerators = new passive_ability_generator_service_1.PassiveAbilityGeneratorService();
        GameServices.passiveAbilityGenerators.initialize();
        GameServices.itemTypes = new item_type_service_1.ItemTypeService();
        GameServices.itemTypes.initialize();
        GameServices.version = new version_service_1.VersionService();
    }
}
exports.GameServices = GameServices;


/***/ }),

/***/ "./src/game/heroes/hero-type-service.ts":
/*!**********************************************!*\
  !*** ./src/game/heroes/hero-type-service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hero_type_1 = __webpack_require__(/*! ./hero-type */ "./src/game/heroes/hero-type.ts");
const attributes_1 = __webpack_require__(/*! ../attributes/attributes */ "./src/game/attributes/attributes.ts");
class HeroTypeService {
    initialize() {
        this.warrior = hero_type_1.HeroType.create({
            key: 'warrior',
            name: 'Warrior',
            description: 'Fights with brute force and no hesitation',
            imageName: 'warrior.png',
            attributesBase: attributes_1.Attributes.create({
                attackDamage: 16,
                attackSpeed: 0.8,
                maximumHealth: 50
            }),
            attributesPerLevel: attributes_1.Attributes.create({
                attackDamage: 2,
                maximumHealth: 50
            })
        });
        this.allHeroTypes = [
            this.warrior
        ];
    }
    getByKey(key) {
        return this.allHeroTypes.find(type => type.key === key);
    }
}
exports.HeroTypeService = HeroTypeService;


/***/ }),

/***/ "./src/game/heroes/hero-type.ts":
/*!**************************************!*\
  !*** ./src/game/heroes/hero-type.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HeroType {
    static create(options) {
        const heroType = new HeroType();
        heroType.key = options.key;
        heroType.name = options.name;
        heroType.description = options.description;
        heroType.imageName = options.imageName;
        heroType.attributesBase = options.attributesBase;
        heroType.attributesPerLevel = options.attributesPerLevel;
        return heroType;
    }
}
exports.HeroType = HeroType;


/***/ }),

/***/ "./src/game/heroes/hero.ts":
/*!*********************************!*\
  !*** ./src/game/heroes/hero.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const attributes_1 = __webpack_require__(/*! ../attributes/attributes */ "./src/game/attributes/attributes.ts");
const observable_1 = __webpack_require__(/*! ../../common/observable */ "./src/common/observable.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
const skill_1 = __webpack_require__(/*! ../skills/skill */ "./src/game/skills/skill.ts");
const item_1 = __webpack_require__(/*! ../items/item */ "./src/game/items/item.ts");
class Hero {
    constructor() {
        this.onDeath = observable_1.ObservableFactory.create();
        this.onDamageTaken = observable_1.ObservableFactory.createWith1Argument();
        this.onLevelUp = observable_1.ObservableFactory.createWith1Argument();
    }
    get id() { return this.dbModel.id; }
    get name() { return this.dbModel.name; }
    get level() { return this.dbModel.level; }
    get isAlive() { return this.dbModel.isAlive; }
    get currentHealth() {
        return this.dbModel.currentHealth;
    }
    set currentHealth(value) {
        this.dbModel.currentHealth = value;
        if (this.dbModel.currentHealth <= 0 && !this.dbModel.isAlive) {
            this.dbModel.isAlive = false;
            this.onDeath.notify();
        }
    }
    static load(dbHero) {
        const hero = new Hero();
        hero.dbModel = dbHero;
        hero.type = game_services_1.GameServices.heroTypes.getByKey(hero.dbModel.typeKey);
        hero.attributes = attributes_1.Attributes.create();
        hero.type.attributesBase.all.forEach(baseAttribute => hero.attributes.get(baseAttribute.type).amount.setAdditiveValueContainer(baseAttribute.amount));
        hero.attributesFromLevel = attributes_1.Attributes.create();
        hero.type.attributesPerLevel.all.forEach(perLevelAttribute => {
            const attributeFromLevelValueContainer = hero.attributesFromLevel.get(perLevelAttribute.type).amount;
            attributeFromLevelValueContainer.setAdditiveValueContainer(perLevelAttribute.amount);
            attributeFromLevelValueContainer.setMultiplicativeModifier(hero, hero.dbModel.level);
            hero.onLevelUp.addSubscription(hero, level => attributeFromLevelValueContainer.setMultiplicativeModifier(hero, hero.dbModel.level));
            hero.attributes.get(perLevelAttribute.type).amount.setAdditiveValueContainer(attributeFromLevelValueContainer);
        });
        hero.skills = hero.dbModel.skills.map(skill_1.Skill.load);
        hero.skills.forEach(skill => skill.type.setUpValueContainers(hero, skill));
        hero.items = hero.dbModel.items.map(kvp => {
            return {
                key: kvp.key,
                value: item_1.Item.load(kvp.value)
            };
        });
        hero.items.forEach(kvp => kvp.value.implicitPassiveAbilities.forEach(passiveAbility => passiveAbility.type.applyEffect(passiveAbility, hero)));
        if (dbHero.currentHealth === undefined) {
            dbHero.currentHealth = hero.attributes.maximumHealth.value;
        }
        return hero;
    }
    incrementLevel() {
        this.dbModel.level++;
        this.onLevelUp.notify(this.dbModel.level);
    }
    takeDamage(amount, type) {
        this.currentHealth -= amount;
        if (this.currentHealth <= 0) {
            this.currentHealth = 0;
            this.dbModel.isAlive = false;
        }
        this.onDamageTaken.notify({
            amount: amount,
            type: type
        });
    }
}
exports.Hero = Hero;


/***/ }),

/***/ "./src/game/items/item-body-location.ts":
/*!**********************************************!*\
  !*** ./src/game/items/item-body-location.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemBodyLocation;
(function (ItemBodyLocation) {
    ItemBodyLocation["mainHand"] = "main-hand";
    ItemBodyLocation["offHand"] = "off-hand";
    ItemBodyLocation["head"] = "head";
    ItemBodyLocation["chest"] = "chest";
    ItemBodyLocation["legs"] = "legs";
    ItemBodyLocation["leftFoot"] = "left-foot";
    ItemBodyLocation["rightFoot"] = "right-foot";
})(ItemBodyLocation = exports.ItemBodyLocation || (exports.ItemBodyLocation = {}));


/***/ }),

/***/ "./src/game/items/item-category.ts":
/*!*****************************************!*\
  !*** ./src/game/items/item-category.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemCategory;
(function (ItemCategory) {
    ItemCategory[ItemCategory["weapon"] = 0] = "weapon";
    ItemCategory[ItemCategory["shield"] = 1] = "shield";
    ItemCategory[ItemCategory["head"] = 2] = "head";
    ItemCategory[ItemCategory["chest"] = 3] = "chest";
    ItemCategory[ItemCategory["legs"] = 4] = "legs";
    ItemCategory[ItemCategory["foot"] = 5] = "foot";
})(ItemCategory = exports.ItemCategory || (exports.ItemCategory = {}));


/***/ }),

/***/ "./src/game/items/item-type-service.ts":
/*!*********************************************!*\
  !*** ./src/game/items/item-type-service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const item_type_1 = __webpack_require__(/*! ./item-type */ "./src/game/items/item-type.ts");
const item_category_1 = __webpack_require__(/*! ./item-category */ "./src/game/items/item-category.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class ItemTypeService {
    initialize() {
        this.broadSword = item_type_1.ItemType.create({
            key: 'broad-sword',
            imageName: 'broad-sword.png',
            name: 'Broad Sword',
            category: item_category_1.ItemCategory.weapon,
            implicitPassiveAbilityGenerators: [game_services_1.GameServices.passiveAbilityGenerators.increasedAttackDamage],
            possibleExplicitPassiveAbilityGenerators: [
                { weight: 500, value: game_services_1.GameServices.passiveAbilityGenerators.increasedArmor },
                { weight: 500, value: game_services_1.GameServices.passiveAbilityGenerators.increasedAttackDamage }
            ]
        });
        this.towerShield = item_type_1.ItemType.create({
            key: 'tower-shield',
            imageName: 'tower-shield.png',
            name: 'Tower Shield',
            category: item_category_1.ItemCategory.shield,
            implicitPassiveAbilityGenerators: [game_services_1.GameServices.passiveAbilityGenerators.increasedArmor],
            possibleExplicitPassiveAbilityGenerators: [
                { weight: 500, value: game_services_1.GameServices.passiveAbilityGenerators.increasedArmor },
                { weight: 500, value: game_services_1.GameServices.passiveAbilityGenerators.increasedAttackDamage }
            ]
        });
        this.wizardsHat = item_type_1.ItemType.create({
            key: 'wizards-hat',
            imageName: 'wizards-hat.png',
            name: "Wizard's Hat",
            category: item_category_1.ItemCategory.head,
            implicitPassiveAbilityGenerators: [game_services_1.GameServices.passiveAbilityGenerators.increasedAttackDamage],
            possibleExplicitPassiveAbilityGenerators: [
                { weight: 500, value: game_services_1.GameServices.passiveAbilityGenerators.increasedAttackDamage }
            ]
        });
        this.allItemTypes = [
            this.broadSword,
            this.towerShield,
            this.wizardsHat
        ];
    }
    getByKey(key) {
        return this.allItemTypes.find(type => type.key === key);
    }
}
exports.ItemTypeService = ItemTypeService;


/***/ }),

/***/ "./src/game/items/item-type.ts":
/*!*************************************!*\
  !*** ./src/game/items/item-type.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ItemType {
    static create(options) {
        const itemType = new ItemType();
        itemType.key = options.key;
        itemType.name = options.name;
        itemType.imageName = options.imageName;
        itemType.category = options.category;
        itemType.implicitPassiveAbilityGenerators = options.implicitPassiveAbilityGenerators;
        itemType.possibleExplicitPassiveAbilityGenerators = options.possibleExplicitPassiveAbilityGenerators;
        return itemType;
    }
}
exports.ItemType = ItemType;


/***/ }),

/***/ "./src/game/items/item.ts":
/*!********************************!*\
  !*** ./src/game/items/item.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const passive_ability_1 = __webpack_require__(/*! ./passive-ability */ "./src/game/items/passive-ability.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class Item {
    get level() { return this.dbModel.level; }
    static load(dbModel) {
        const newItem = new Item();
        newItem.dbModel = dbModel;
        newItem.type = game_services_1.GameServices.itemTypes.getByKey(dbModel.typeKey);
        newItem.implicitPassiveAbilities = dbModel.implicitPassiveAbilities.map(passive_ability_1.PassiveAbility.load);
        newItem.explicitPassiveAbilities = dbModel.explicitPassiveAbilities.map(passive_ability_1.PassiveAbility.load);
        return newItem;
    }
}
exports.Item = Item;


/***/ }),

/***/ "./src/game/items/passive-ability-argument-type.ts":
/*!*********************************************************!*\
  !*** ./src/game/items/passive-ability-argument-type.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PassiveAbilityArgumentType;
(function (PassiveAbilityArgumentType) {
    PassiveAbilityArgumentType[PassiveAbilityArgumentType["integer"] = 0] = "integer";
    PassiveAbilityArgumentType[PassiveAbilityArgumentType["decimal"] = 1] = "decimal";
    PassiveAbilityArgumentType[PassiveAbilityArgumentType["percentage"] = 2] = "percentage";
})(PassiveAbilityArgumentType = exports.PassiveAbilityArgumentType || (exports.PassiveAbilityArgumentType = {}));


/***/ }),

/***/ "./src/game/items/passive-ability-generator-service.ts":
/*!*************************************************************!*\
  !*** ./src/game/items/passive-ability-generator-service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const passive_ability_generator_1 = __webpack_require__(/*! ./passive-ability-generator */ "./src/game/items/passive-ability-generator.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class PassiveAbilityGeneratorService {
    initialize() {
        this.increasedArmor = this.createGeneratorWithSingleIntegerArgument({
            abilityType: game_services_1.GameServices.passiveAbilityTypes.increasedArmor,
            argumentKey: 'armor',
            min: 2,
            max: 6
        });
        this.increasedAttackDamage = this.createGeneratorWithSingleIntegerArgument({
            abilityType: game_services_1.GameServices.passiveAbilityTypes.increasedAttackDamage,
            argumentKey: 'attack-damage',
            min: 5,
            max: 10
        });
    }
    createGeneratorWithSingleIntegerArgument(options) {
        return passive_ability_generator_1.PassiveAbilityGenerator.create({
            generateDbAbility: (itemLevel) => {
                const actualMin = options.min + itemLevel;
                const actualMax = options.max + itemLevel;
                const actual = game_services_1.GameServices.random.randomInteger(actualMin, actualMax);
                const args = {};
                args[options.argumentKey] = actual;
                return {
                    typeKey: options.abilityType.key,
                    args: args
                };
            }
        });
    }
}
exports.PassiveAbilityGeneratorService = PassiveAbilityGeneratorService;


/***/ }),

/***/ "./src/game/items/passive-ability-generator.ts":
/*!*****************************************************!*\
  !*** ./src/game/items/passive-ability-generator.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PassiveAbilityGenerator {
    static create(options) {
        const generator = new PassiveAbilityGenerator();
        generator.generateDbAbility = options.generateDbAbility;
        return generator;
    }
}
exports.PassiveAbilityGenerator = PassiveAbilityGenerator;


/***/ }),

/***/ "./src/game/items/passive-ability-type-service.ts":
/*!********************************************************!*\
  !*** ./src/game/items/passive-ability-type-service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const passive_ability_type_1 = __webpack_require__(/*! ./passive-ability-type */ "./src/game/items/passive-ability-type.ts");
const passive_ability_argument_type_1 = __webpack_require__(/*! ./passive-ability-argument-type */ "./src/game/items/passive-ability-argument-type.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class PassiveAbilityTypeService {
    initialize() {
        this.increasedAttackDamage = passive_ability_type_1.PassiveAbilityType.create({
            key: 'increased-attack-damage',
            argumentTypes: {
                'attack-damage': passive_ability_argument_type_1.PassiveAbilityArgumentType.integer
            },
            getDescription: (ability) => {
                return `Increases attack damage by ${this.printArgument(ability, 'attack-damage')}`;
            },
            applyEffect: (ability, owner) => {
                const increase = ability.args['attack-damage'];
                owner.attributes.attackDamage.setAdditiveModifier(ability, increase);
            },
            removeEffect: (ability, owner) => {
                owner.attributes.attackDamage.removeAllModifiers(ability);
            }
        });
        this.increasedArmor = passive_ability_type_1.PassiveAbilityType.create({
            key: 'increased-armor',
            argumentTypes: {
                'armor': passive_ability_argument_type_1.PassiveAbilityArgumentType.integer
            },
            getDescription: (ability) => {
                return `Increases armor by ${this.printArgument(ability, 'armor')}`;
            },
            applyEffect: (ability, owner) => {
                const increase = ability.args['armor'];
                owner.attributes.armor.setAdditiveModifier(ability, increase);
            },
            removeEffect: (ability, owner) => {
                owner.attributes.armor.removeAllModifiers(ability);
            }
        });
        this.allPassiveAbilityTypes = [
            this.increasedAttackDamage,
            this.increasedArmor
        ];
    }
    printArgument(ability, argumentKey) {
        const argumentType = ability.type.argumentTypes[argumentKey];
        const argumentValue = ability.args[argumentKey];
        switch (argumentType) {
            case passive_ability_argument_type_1.PassiveAbilityArgumentType.decimal:
                return game_services_1.GameServices.numberFormatting.formatDecimal(argumentValue);
            case passive_ability_argument_type_1.PassiveAbilityArgumentType.integer:
                return game_services_1.GameServices.numberFormatting.formatInteger(argumentValue);
            case passive_ability_argument_type_1.PassiveAbilityArgumentType.percentage:
                const argumentValueAsPercent = argumentValue * 100;
                return game_services_1.GameServices.numberFormatting.formatDecimal(argumentValueAsPercent);
            default:
                throw new Error('Unknown argument type: ' + argumentType);
        }
    }
    getByKey(key) {
        return this.allPassiveAbilityTypes.find(type => type.key === key);
    }
}
exports.PassiveAbilityTypeService = PassiveAbilityTypeService;


/***/ }),

/***/ "./src/game/items/passive-ability-type.ts":
/*!************************************************!*\
  !*** ./src/game/items/passive-ability-type.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PassiveAbilityType {
    static create(options) {
        const abilityType = new PassiveAbilityType();
        abilityType.key = options.key;
        abilityType.argumentTypes = options.argumentTypes;
        abilityType.getDescription = options.getDescription;
        abilityType.applyEffect = options.applyEffect;
        abilityType.removeEffect = options.removeEffect;
        return abilityType;
    }
}
exports.PassiveAbilityType = PassiveAbilityType;


/***/ }),

/***/ "./src/game/items/passive-ability.ts":
/*!*******************************************!*\
  !*** ./src/game/items/passive-ability.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class PassiveAbility {
    get args() {
        return this.dbModel.args;
    }
    static load(dbModel) {
        const passiveAbility = new PassiveAbility();
        passiveAbility.dbModel = dbModel;
        passiveAbility.type = game_services_1.GameServices.passiveAbilityTypes.getByKey(dbModel.typeKey);
        return passiveAbility;
    }
}
exports.PassiveAbility = PassiveAbility;


/***/ }),

/***/ "./src/game/monsters/monster-service.ts":
/*!**********************************************!*\
  !*** ./src/game/monsters/monster-service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MonsterService {
    constructor() {
        this.nextMonsterId = 1;
    }
    createDBMonster(level, type) {
        const dbMonster = {
            id: this.nextMonsterId++,
            typeKey: type.key,
            level: level,
            isAlive: true,
            skills: type.skillTypes.map(skillType => {
                return {
                    remainingCooldown: 0,
                    typeKey: skillType.value.key
                };
            })
        };
        return dbMonster;
    }
}
exports.MonsterService = MonsterService;


/***/ }),

/***/ "./src/game/monsters/monster-type-service.ts":
/*!***************************************************!*\
  !*** ./src/game/monsters/monster-type-service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monster_type_1 = __webpack_require__(/*! ./monster-type */ "./src/game/monsters/monster-type.ts");
const attributes_1 = __webpack_require__(/*! ../attributes/attributes */ "./src/game/attributes/attributes.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class MonsterTypeService {
    initialize() {
        this.wolf = monster_type_1.MonsterType.create({
            key: 'wolf',
            name: 'Wolf',
            description: 'A mighty wolf',
            imageName: 'wolf.png',
            attributesBase: attributes_1.Attributes.create({
                attackDamage: 10,
                attackSpeed: 1.0,
                armor: 10,
                maximumHealth: 300
            }),
            attributesPerLevel: attributes_1.Attributes.create({
                attackDamage: 1,
                armor: 0.4,
                maximumHealth: 20
            }),
            skillTypes: [{ weight: 500, value: game_services_1.GameServices.skillTypes.basicAttack }]
        });
        this.snake = monster_type_1.MonsterType.create({
            key: 'snake',
            name: 'Snake',
            description: 'A cunning snake',
            imageName: 'snake.png',
            attributesBase: attributes_1.Attributes.create({
                attackDamage: 15,
                attackSpeed: 1.8,
                maximumHealth: 200
            }),
            attributesPerLevel: attributes_1.Attributes.create({
                attackDamage: 2,
                maximumHealth: 12
            }),
            skillTypes: [{ weight: 500, value: game_services_1.GameServices.skillTypes.basicAttack }]
        });
        this.allMonsterTypes = [
            this.wolf,
            this.snake
        ];
    }
    getByKey(key) {
        return this.allMonsterTypes.find(type => type.key === key);
    }
}
exports.MonsterTypeService = MonsterTypeService;


/***/ }),

/***/ "./src/game/monsters/monster-type.ts":
/*!*******************************************!*\
  !*** ./src/game/monsters/monster-type.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MonsterType {
    static create(options) {
        const monsterType = new MonsterType();
        monsterType.key = options.key;
        monsterType.name = options.name;
        monsterType.description = options.description;
        monsterType.imageName = options.imageName;
        monsterType.attributesBase = options.attributesBase;
        monsterType.attributesPerLevel = options.attributesPerLevel;
        monsterType.skillTypes = options.skillTypes;
        return monsterType;
    }
}
exports.MonsterType = MonsterType;


/***/ }),

/***/ "./src/game/monsters/monster.ts":
/*!**************************************!*\
  !*** ./src/game/monsters/monster.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const attributes_1 = __webpack_require__(/*! ../attributes/attributes */ "./src/game/attributes/attributes.ts");
const observable_1 = __webpack_require__(/*! ../../common/observable */ "./src/common/observable.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
const skill_1 = __webpack_require__(/*! ../skills/skill */ "./src/game/skills/skill.ts");
class Monster {
    constructor() {
        this.onDeath = observable_1.ObservableFactory.create();
        this.onDamageTaken = observable_1.ObservableFactory.createWith1Argument();
    }
    get id() { return this.dbModel.id; }
    get name() { return this.type.name; }
    get isAlive() { return this.dbModel.isAlive; }
    get currentHealth() {
        return this.dbModel.currentHealth;
    }
    set currentHealth(value) {
        this.dbModel.currentHealth = value;
        if (this.dbModel.currentHealth <= 0 && !this.dbModel.isAlive) {
            this.dbModel.isAlive = false;
            this.onDeath.notify();
        }
    }
    static load(dbMonster) {
        const monster = new Monster();
        monster.dbModel = dbMonster;
        monster.type = game_services_1.GameServices.monsterTypes.getByKey(monster.dbModel.typeKey);
        monster.attributes = attributes_1.Attributes.create();
        monster.type.attributesBase.all.forEach(baseAttribute => monster.attributes.get(baseAttribute.type).amount.setAdditiveValueContainer(baseAttribute.amount));
        monster.attributesFromLevel = attributes_1.Attributes.create();
        monster.type.attributesPerLevel.all.forEach(perLevelAttribute => {
            const attributeFromLevelValueContainer = monster.attributesFromLevel.get(perLevelAttribute.type).amount;
            attributeFromLevelValueContainer.setAdditiveValueContainer(perLevelAttribute.amount);
            attributeFromLevelValueContainer.setMultiplicativeModifier(monster, monster.dbModel.level);
            monster.attributes.get(perLevelAttribute.type).amount.setAdditiveValueContainer(attributeFromLevelValueContainer);
        });
        monster.skills = monster.dbModel.skills.map(skill_1.Skill.load);
        monster.skills.forEach(skill => skill.type.setUpValueContainers(monster, skill));
        if (dbMonster.currentHealth === undefined) {
            dbMonster.currentHealth = monster.attributes.maximumHealth.value;
        }
        return monster;
    }
    recalculateAttributes() {
        this.type.attributesBase.all.forEach(attr => this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value));
        this.type.attributesPerLevel.all.forEach(attr => this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value * this.dbModel.level));
    }
    takeDamage(amount, type) {
        this.currentHealth -= amount;
        if (this.currentHealth <= 0) {
            this.currentHealth = 0;
            this.dbModel.isAlive = false;
        }
        this.onDamageTaken.notify({
            amount: amount,
            type: type
        });
    }
}
exports.Monster = Monster;


/***/ }),

/***/ "./src/game/shared/random-service.ts":
/*!*******************************************!*\
  !*** ./src/game/shared/random-service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RandomService {
    getWeightedValue(weightedValues) {
        const weightSum = weightedValues.map(wv => wv.weight).reduce((prev, cur) => prev + cur);
        let result = Math.random() * weightSum;
        for (let wv of weightedValues) {
            if (result <= wv.weight) {
                return wv.value;
            }
            else {
                result -= wv.weight;
            }
        }
    }
    getRandomElement(array) {
        const index = this.randomInteger(0, array.length - 1);
        return array[index];
    }
    rollSuccess(successChance) {
        return Math.random() < successChance;
    }
    randomInteger(min, max) {
        const rolledValue = Math.random() * (max - min + 1) + min;
        const roundedRolledValue = Math.floor(rolledValue);
        return roundedRolledValue;
    }
    randomDecimal(min, max) {
        const rolledValue = Math.random() * (max - min) + min;
        return rolledValue;
    }
}
exports.RandomService = RandomService;


/***/ }),

/***/ "./src/game/shared/value-container.ts":
/*!********************************************!*\
  !*** ./src/game/shared/value-container.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = __webpack_require__(/*! ../../common/observable */ "./src/common/observable.ts");
class ValueModifier {
    constructor(key, amount) {
        this.amount = amount;
        this.key = key;
    }
}
class ValueContainer {
    constructor(baseValue) {
        this.additiveModifiers = [];
        this.additiveValueContainers = [];
        this.multiplicativeModifiers = [];
        this.multiplicativeValueContainers = [];
        this.value = 0;
        this.onValueChange = observable_1.ObservableFactory.createWith1Argument();
        if (baseValue !== undefined) {
            this.setAdditiveModifier(this, baseValue);
        }
    }
    recalculateValue() {
        let newValue = 0;
        this.additiveModifiers.forEach(mod => newValue += mod.amount);
        this.multiplicativeModifiers.forEach(mod => newValue *= mod.amount);
        if (this.value !== newValue) {
            const valueChange = {
                previousValue: this.value,
                newValue: newValue
            };
            this.value = newValue;
            this.onValueChange.notify(valueChange);
        }
    }
    setAdditiveModifier(key, amount) {
        const existingModifier = this.additiveModifiers.find(mod => mod.key === key);
        if (existingModifier) {
            existingModifier.amount = amount;
        }
        else {
            const newModifier = new ValueModifier(key, amount);
            this.additiveModifiers.push(newModifier);
        }
        this.recalculateValue();
    }
    setAdditiveValueContainer(valueContainer) {
        const exists = this.additiveValueContainers.includes(valueContainer);
        if (!exists) {
            this.additiveValueContainers.push(valueContainer);
            this.setAdditiveModifier(valueContainer, valueContainer.value);
            this.recalculateValue();
            valueContainer.onValueChange.addSubscription(this, valueChange => {
                this.setAdditiveModifier(valueContainer, valueChange.newValue);
                this.recalculateValue();
            });
        }
    }
    setMultiplicativeModifier(key, amount) {
        const existingModifier = this.multiplicativeModifiers.find(mod => mod.key === key);
        if (existingModifier) {
            existingModifier.amount = amount;
        }
        else {
            const newModifier = new ValueModifier(key, amount);
            this.multiplicativeModifiers.push(newModifier);
        }
        this.recalculateValue();
    }
    setMultiplicativeValueContainer(valueContainer) {
        const exists = this.multiplicativeValueContainers.includes(valueContainer);
        if (!exists) {
            this.multiplicativeValueContainers.push(valueContainer);
            this.setMultiplicativeModifier(valueContainer, valueContainer.value);
            this.recalculateValue();
            valueContainer.onValueChange.addSubscription(this, valueChange => {
                this.setMultiplicativeModifier(valueContainer, valueChange.newValue);
                this.recalculateValue();
            });
        }
    }
    removeAllModifiers(key) {
        this.additiveModifiers = this.additiveModifiers.filter(mod => mod.key !== key);
        this.additiveValueContainers = this.additiveValueContainers.filter(vc => vc !== key);
        this.multiplicativeModifiers = this.multiplicativeModifiers.filter(mod => mod.key !== key);
        this.multiplicativeValueContainers = this.multiplicativeValueContainers.filter(vc => vc !== key);
    }
}
exports.ValueContainer = ValueContainer;


/***/ }),

/***/ "./src/game/skills/damage-type.ts":
/*!****************************************!*\
  !*** ./src/game/skills/damage-type.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DamageType;
(function (DamageType) {
    DamageType[DamageType["physical"] = 0] = "physical";
    DamageType[DamageType["magic"] = 1] = "magic";
})(DamageType = exports.DamageType || (exports.DamageType = {}));


/***/ }),

/***/ "./src/game/skills/skill-tag.ts":
/*!**************************************!*\
  !*** ./src/game/skills/skill-tag.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SkillTag;
(function (SkillTag) {
    SkillTag[SkillTag["attack"] = 0] = "attack";
})(SkillTag = exports.SkillTag || (exports.SkillTag = {}));


/***/ }),

/***/ "./src/game/skills/skill-type-service.ts":
/*!***********************************************!*\
  !*** ./src/game/skills/skill-type-service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skill_type_1 = __webpack_require__(/*! ./skill-type */ "./src/game/skills/skill-type.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
const damage_type_1 = __webpack_require__(/*! ./damage-type */ "./src/game/skills/damage-type.ts");
const skill_tag_1 = __webpack_require__(/*! ./skill-tag */ "./src/game/skills/skill-tag.ts");
const value_container_1 = __webpack_require__(/*! ../shared/value-container */ "./src/game/shared/value-container.ts");
class SkillTypeService {
    initialize() {
        this.basicAttack = skill_type_1.SkillType.create({
            key: "basic-attack",
            name: 'Attack',
            description: 'Deals physical damage to a single enemy',
            imageName: 'basic-attack.png',
            cooldown: 1000,
            energyCost: 0,
            canTargetEnemy: true,
            canTargetFriend: false,
            tags: [skill_tag_1.SkillTag.attack],
            effect: (user, target, arenaRoom) => {
                let damage = user.attributes.attackDamage.value;
                const isCriticalStrike = game_services_1.GameServices.random.rollSuccess(user.attributes.attackCriticalMultiplier.value);
                if (isCriticalStrike) {
                    damage *= user.attributes.attackCriticalMultiplier.value;
                }
                this.dealDamage(target, damage, damage_type_1.DamageType.physical);
            },
            setUpValueContainers: (character, skill) => {
                const attackSpeedMultiplier = new value_container_1.ValueContainer();
                attackSpeedMultiplier.setAdditiveValueContainer(character.attributes.attackSpeed);
                skill.cooldown.setMultiplicativeModifier(attackSpeedMultiplier, 1 / attackSpeedMultiplier.value);
                attackSpeedMultiplier.onValueChange.addSubscription(attackSpeedMultiplier, event => skill.cooldown.setMultiplicativeModifier(attackSpeedMultiplier, 1 / event.newValue));
                skill.cooldown.setMultiplicativeValueContainer(attackSpeedMultiplier);
            }
        });
        this.allSkillTypes = [
            this.basicAttack
        ];
    }
    getByKey(key) {
        return this.allSkillTypes.find(type => type.key === key);
    }
    dealDamage(damageReceiver, damage, damageType) {
        switch (damageType) {
            case damage_type_1.DamageType.physical: {
                const damageReceived = this.reduceDamageBasedOnArmor(damage, damageReceiver.attributes.armor.value);
                damageReceiver.takeDamage(damageReceived, damageType);
                break;
            }
            case damage_type_1.DamageType.magic: {
                const damageReceived = this.reduceDamageBasedOnMagicResistance(damage, damageReceiver.attributes.magicResistance.value);
                damageReceiver.takeDamage(damageReceived, damageType);
                break;
            }
            default:
                throw { message: 'Unknown damage type: ' + damageType };
        }
    }
    reduceDamageBasedOnArmor(damage, armor) {
        return damage * 100 / (100 + armor);
    }
    reduceDamageBasedOnMagicResistance(damage, magicResistance) {
        return damage * 100 / (100 + magicResistance);
    }
}
exports.SkillTypeService = SkillTypeService;


/***/ }),

/***/ "./src/game/skills/skill-type.ts":
/*!***************************************!*\
  !*** ./src/game/skills/skill-type.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SkillType {
    get requiresTarget() { return this.canTargetEnemy || this.canTargetFriend; }
    static create(options) {
        const skillType = new SkillType();
        skillType.key = options.key;
        skillType.name = options.name;
        skillType.description = options.description;
        skillType.imageName = options.imageName;
        skillType.cooldown = options.cooldown;
        skillType.energyCost = options.energyCost;
        skillType.canTargetEnemy = options.canTargetEnemy;
        skillType.canTargetFriend = options.canTargetFriend;
        skillType.tags = options.tags;
        skillType.effect = options.effect;
        skillType.setUpValueContainers = options.setUpValueContainers;
        return skillType;
    }
}
exports.SkillType = SkillType;


/***/ }),

/***/ "./src/game/skills/skill.ts":
/*!**********************************!*\
  !*** ./src/game/skills/skill.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
const observable_1 = __webpack_require__(/*! ../../common/observable */ "./src/common/observable.ts");
const value_container_1 = __webpack_require__(/*! ../shared/value-container */ "./src/game/shared/value-container.ts");
class Skill {
    constructor() {
        this.cooldown = new value_container_1.ValueContainer();
        this.onCooldownChanged = observable_1.ObservableFactory.createWith1Argument();
    }
    get remainingCooldown() { return this.dbModel.remainingCooldown; }
    get isReady() { return this.dbModel.remainingCooldown === 0; }
    static load(dbModel) {
        const skill = new Skill();
        skill.dbModel = dbModel;
        skill.type = game_services_1.GameServices.skillTypes.getByKey(skill.dbModel.typeKey);
        skill.cooldown.setAdditiveModifier(skill.type, skill.type.cooldown);
        return skill;
    }
    resetCooldown() {
        const previousRemainingCooldown = this.dbModel.remainingCooldown;
        const newReminingCooldown = this.cooldown.value;
        this.dbModel.remainingCooldown = newReminingCooldown;
        this.onCooldownChanged.notify({
            previousValue: previousRemainingCooldown,
            newValue: newReminingCooldown
        });
    }
    reduceCooldown(time) {
        const previousRemainingCooldown = this.dbModel.remainingCooldown;
        let newReminingCooldown = previousRemainingCooldown - time;
        if (newReminingCooldown <= 0) {
            newReminingCooldown = 0;
        }
        if (previousRemainingCooldown !== newReminingCooldown) {
            this.dbModel.remainingCooldown = newReminingCooldown;
            this.onCooldownChanged.notify({
                previousValue: previousRemainingCooldown,
                newValue: newReminingCooldown
            });
        }
    }
}
exports.Skill = Skill;


/***/ }),

/***/ "./src/game/version-service.ts":
/*!*************************************!*\
  !*** ./src/game/version-service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class VersionService {
    constructor() {
        this.currentVersion = "0.0.1";
    }
    upgradeSaveGameToCurrentVersion(dbGame) {
        return dbGame;
    }
}
exports.VersionService = VersionService;


/***/ }),

/***/ "./src/rendering/react/combat/combat.scss":
/*!************************************************!*\
  !*** ./src/rendering/react/combat/combat.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./combat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/combat/combat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/rendering/react/combat/ui-combat-arena-character.tsx":
/*!******************************************************************!*\
  !*** ./src/rendering/react/combat/ui-combat-arena-character.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui_progress_bar_1 = __webpack_require__(/*! ../shared/ui-progress-bar */ "./src/rendering/react/shared/ui-progress-bar.tsx");
const hero_1 = __webpack_require__(/*! ../../../game/heroes/hero */ "./src/game/heroes/hero.ts");
class UICombatArenaCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHealth: props.character.currentHealth,
            isAlive: props.character.isAlive
        };
    }
    componentDidMount() {
        this.props.character.onDamageTaken.addSubscription(this, event => this.setState({
            currentHealth: this.props.character.currentHealth,
            isAlive: this.props.character.isAlive
        }));
    }
    componentWillUnmount() {
        this.props.character.onDamageTaken.removeSubscription(this);
    }
    getImageFolderPath() {
        return this.props.character instanceof hero_1.Hero
            ? 'img/heroes/'
            : 'img/monsters/';
    }
    getImageName() {
        return this.state.isAlive ? this.props.character.type.imageName : "tombstone.png";
    }
    render() {
        return (React.createElement("div", { className: "character" },
            React.createElement("div", { className: "character-name" }, this.props.character.name),
            React.createElement(ui_progress_bar_1.UIProgressBar, { min: 0, max: this.props.character.attributes.maximumHealth.value, current: this.state.currentHealth }),
            React.createElement("div", { className: "character-image", style: { backgroundImage: `url(${this.getImageFolderPath()}${this.getImageName()})` } })));
    }
}
exports.UICombatArenaCharacter = UICombatArenaCharacter;


/***/ }),

/***/ "./src/rendering/react/combat/ui-combat-arena-skill.tsx":
/*!**************************************************************!*\
  !*** ./src/rendering/react/combat/ui-combat-arena-skill.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class UICombatArenaSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingCooldown: props.skill.remainingCooldown
        };
    }
    componentDidMount() {
        this.props.skill.onCooldownChanged.addSubscription(this, event => this.setState({
            remainingCooldown: this.props.skill.remainingCooldown
        }));
    }
    componentWillUnmount() {
        this.props.skill.onCooldownChanged.removeSubscription(this);
    }
    render() {
        return (React.createElement("div", { key: this.props.skill.type.key, className: "skill-container", onClick: () => this.props.onSkillSelected(), style: { opacity: 1 - this.state.remainingCooldown / this.props.skill.type.cooldown } },
            React.createElement("div", { className: "skill-name" }, this.props.skill.type.name),
            React.createElement("div", { className: "skill-image", style: { backgroundImage: `url(img/skills/${this.props.skill.type.imageName})` } })));
    }
}
exports.UICombatArenaSkill = UICombatArenaSkill;


/***/ }),

/***/ "./src/rendering/react/combat/ui-combat-arena.tsx":
/*!********************************************************!*\
  !*** ./src/rendering/react/combat/ui-combat-arena.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui_combat_arena_character_1 = __webpack_require__(/*! ./ui-combat-arena-character */ "./src/rendering/react/combat/ui-combat-arena-character.tsx");
const ui_combat_arena_skill_1 = __webpack_require__(/*! ./ui-combat-arena-skill */ "./src/rendering/react/combat/ui-combat-arena-skill.tsx");
class UICombatArena extends React.Component {
    constructor(props) {
        super(props);
        this.heroContainerStyles = [{
                left: '10px',
                bottom: '10px',
                zIndex: 12
            }, {
                left: '150px',
                bottom: '100px',
                zIndex: 11
            }, {
                left: '290px',
                bottom: '190px',
                zIndex: 10
            }];
        this.monsterContainerStyles = [{
                right: '10px',
                bottom: '10px',
                zIndex: 12
            }, {
                right: '150px',
                bottom: '100px',
                zIndex: 11
            }, {
                right: '290px',
                bottom: '190px',
                zIndex: 10
            }];
        this.state = {
            selectedHero: props.arena.currentRoom.heroes[0],
            selectedSkill: null,
            isChoosingTarget: false,
            legalTargets: [],
            hasPlayerLost: props.arena.hasPlayerLost,
            hasPlayerWon: false
        };
        this.props.arena.onPlayerLose.addSubscription(this, () => this.onPlayerLose());
    }
    selectSkill(skill) {
        let legalTargets = [];
        const friendTargets = this.props.arena.currentRoom.heroes.filter(hero => hero.isAlive);
        const enemyTargets = this.props.arena.currentRoom.currentEncounter.monsters.filter(monster => monster.isAlive);
        if (skill.type.canTargetFriend) {
            legalTargets = legalTargets.concat(friendTargets);
        }
        if (skill.type.canTargetEnemy) {
            legalTargets = legalTargets.concat(enemyTargets);
        }
        this.setState({
            selectedSkill: skill,
            isChoosingTarget: true,
            legalTargets: legalTargets
        });
    }
    onClickOnCharacter(target) {
        if (this.state.isChoosingTarget && this.state.legalTargets.includes(target)) {
            this.props.arena.useSkill(this.state.selectedHero, target, this.state.selectedSkill);
        }
    }
    onPlayerLose() {
        this.setState({
            hasPlayerLost: true
        });
    }
    render() {
        return (React.createElement("div", { className: "arena", style: { backgroundImage: `url(img/arenas/${this.props.arena.type.imageName})` } },
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "room-info" },
                    React.createElement("div", { className: "room-name" }, "[RoomName]"),
                    React.createElement("div", { className: "room-progress" }, `Room ${this.props.arena.currentRoomIndex + 1}/${this.props.arena.rooms.length}`),
                    React.createElement("div", { className: "encounter-progress" }, `Encounter ${this.props.arena.currentRoom.currentEncounterIndex + 1}/${this.props.arena.currentRoom.encounters.length}`)),
                React.createElement("div", { className: "arena-info" },
                    React.createElement("div", { className: "arena-name" }, this.props.arena.type.name),
                    React.createElement("div", { className: "arena-level" }, `Level ${this.props.arena.level}`))),
            React.createElement("div", { className: "body" },
                this.props.arena.currentRoom.heroes.map((hero, index) => React.createElement("div", { key: hero.id, className: `character-container selectable ${this.state.selectedHero === hero ? 'selected' : ''} ${(this.state.isChoosingTarget && this.state.legalTargets.includes(hero)) ? 'legal-target' : ''}`, style: this.heroContainerStyles[index], onClick: () => this.onClickOnCharacter(hero) },
                    React.createElement(ui_combat_arena_character_1.UICombatArenaCharacter, { character: hero }))),
                this.props.arena.currentRoom.currentEncounter.monsters.map((monster, index) => React.createElement("div", { key: monster.id, className: `character-container ${(this.state.isChoosingTarget && this.state.legalTargets.includes(monster)) ? 'legal-target' : ''}`, style: this.monsterContainerStyles[index], onClick: () => this.onClickOnCharacter(monster) },
                    React.createElement(ui_combat_arena_character_1.UICombatArenaCharacter, { character: monster })))),
            React.createElement("div", { className: "footer" },
                React.createElement("div", { className: "skills-container" }, this.state.selectedHero.skills.map(skill => React.createElement(ui_combat_arena_skill_1.UICombatArenaSkill, { key: skill.type.key, skill: skill, onSkillSelected: () => this.selectSkill(skill) })))),
            this.state.hasPlayerLost
                ?
                    React.createElement("div", { className: "overlay" },
                        React.createElement("div", null,
                            React.createElement("div", null, "You died!"),
                            React.createElement("button", null, "Resurrect")))
                : null));
    }
}
exports.UICombatArena = UICombatArena;


/***/ }),

/***/ "./src/rendering/react/combat/ui-combat-body.tsx":
/*!*******************************************************!*\
  !*** ./src/rendering/react/combat/ui-combat-body.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const game_services_1 = __webpack_require__(/*! ../../../game/game-services */ "./src/game/game-services.ts");
const ui_combat_arena_1 = __webpack_require__(/*! ./ui-combat-arena */ "./src/rendering/react/combat/ui-combat-arena.tsx");
class UICombatBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedArena: game_services_1.GameServices.currentGame.arenas.length > 0
                ? game_services_1.GameServices.currentGame.arenas[0]
                : null
        };
    }
    get arenas() {
        return game_services_1.GameServices.currentGame.arenas;
    }
    setSelectedArena(arena) {
        this.setState({
            selectedArena: arena
        });
    }
    render() {
        return (React.createElement("div", { id: "combat-body-container" },
            React.createElement("div", { className: "arenas-container" },
                React.createElement("ul", { className: "arenas" }, this.arenas.map((arena, index) => React.createElement("li", { key: index, className: "arena", onClick: () => this.setSelectedArena(arena) },
                    React.createElement("div", null, arena.type.name))))),
            this.state.selectedArena
                ?
                    React.createElement("div", { className: "selected-arena-container" },
                        React.createElement(ui_combat_arena_1.UICombatArena, { arena: this.state.selectedArena }))
                : null));
    }
}
exports.UICombatBody = UICombatBody;


/***/ }),

/***/ "./src/rendering/react/general.scss":
/*!******************************************!*\
  !*** ./src/rendering/react/general.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./general.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/general.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/rendering/react/heroes/heroes.scss":
/*!************************************************!*\
  !*** ./src/rendering/react/heroes/heroes.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./heroes.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/heroes/heroes.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/rendering/react/heroes/ui-heroes-body.tsx":
/*!*******************************************************!*\
  !*** ./src/rendering/react/heroes/ui-heroes-body.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const game_services_1 = __webpack_require__(/*! ../../../game/game-services */ "./src/game/game-services.ts");
class UIHeroesBody extends React.Component {
    get heroes() {
        return game_services_1.GameServices.currentGame.heroes;
    }
    render() {
        return (React.createElement("div", { id: "heroes-body-container" },
            React.createElement("ul", { className: "heroes" }, this.heroes.map(hero => React.createElement("li", { key: hero.id },
                React.createElement("div", null, hero.name),
                React.createElement("img", { src: `img/heroes/${hero.type.imageName}` }))))));
    }
}
exports.UIHeroesBody = UIHeroesBody;


/***/ }),

/***/ "./src/rendering/react/index.tsx":
/*!***************************************!*\
  !*** ./src/rendering/react/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./general.scss */ "./src/rendering/react/general.scss");
__webpack_require__(/*! ./structure.scss */ "./src/rendering/react/structure.scss");
__webpack_require__(/*! ./combat/combat.scss */ "./src/rendering/react/combat/combat.scss");
__webpack_require__(/*! ./heroes/heroes.scss */ "./src/rendering/react/heroes/heroes.scss");
__webpack_require__(/*! ./map/map.scss */ "./src/rendering/react/map/map.scss");
const ui_game_1 = __webpack_require__(/*! ./ui-game */ "./src/rendering/react/ui-game.tsx");
const game_services_1 = __webpack_require__(/*! ../../game/game-services */ "./src/game/game-services.ts");
game_services_1.GameServices.initialize();
ReactDOM.render(React.createElement(ui_game_1.UIGame, null), document.getElementById("game-container"));


/***/ }),

/***/ "./src/rendering/react/map/map.scss":
/*!******************************************!*\
  !*** ./src/rendering/react/map/map.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./map.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/map/map.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/rendering/react/map/ui-map-arena-type-information.tsx":
/*!*******************************************************************!*\
  !*** ./src/rendering/react/map/ui-map-arena-type-information.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const game_services_1 = __webpack_require__(/*! ../../../game/game-services */ "./src/game/game-services.ts");
class UIMapArenaTypeInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHeroes: []
        };
    }
    toggleSelectedHero(hero) {
        if (this.state.selectedHeroes.includes(hero)) {
            this.setState({
                selectedHeroes: this.state.selectedHeroes.filter(selectedHero => selectedHero !== hero)
            });
        }
        else {
            this.setState({
                selectedHeroes: [...this.state.selectedHeroes, hero]
            });
        }
    }
    handleStartArenaClicked(arenaType) {
        if (this.state.selectedHeroes.length > 0) {
            const arena = game_services_1.GameServices.currentGame.spawnArena(arenaType, arenaType.level, this.state.selectedHeroes);
            this.props.arenaStarted(arena);
        }
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", null, `${this.props.arenaType.name} (Lv. ${this.props.arenaType.level})`),
            React.createElement("div", null, "Heroes"),
            React.createElement("div", { className: "heroes" }, game_services_1.GameServices.currentGame.heroes.map(hero => React.createElement("div", { key: hero.id, className: "hero", onClick: () => this.toggleSelectedHero(hero) },
                React.createElement("div", null, hero.name),
                React.createElement("img", { src: `img/heroes/${hero.type.imageName}` }),
                this.state.selectedHeroes.includes(hero)
                    ? React.createElement("div", { className: "checkmark", style: { backgroundImage: "url(img/interface/checkmark.png)" } })
                    : null))),
            React.createElement("button", { onClick: () => this.handleStartArenaClicked(this.props.arenaType) }, "Start arena")));
    }
}
exports.UIMapArenaTypeInformation = UIMapArenaTypeInformation;


/***/ }),

/***/ "./src/rendering/react/map/ui-map-body.tsx":
/*!*************************************************!*\
  !*** ./src/rendering/react/map/ui-map-body.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const game_services_1 = __webpack_require__(/*! ../../../game/game-services */ "./src/game/game-services.ts");
const ui_draggable_container_1 = __webpack_require__(/*! ../shared/ui-draggable-container */ "./src/rendering/react/shared/ui-draggable-container.tsx");
const ui_map_arena_type_information_1 = __webpack_require__(/*! ./ui-map-arena-type-information */ "./src/rendering/react/map/ui-map-arena-type-information.tsx");
class UIMapBody extends React.Component {
    constructor(props) {
        super(props);
        this.arenaTypeWidth = 200;
        this.arenaTypeHeight = 200;
        this.arenaTypeMargin = 10;
        this.state = {
            selectedArenaType: undefined
        };
    }
    getLeftInPixels(position) {
        const value = position.x * (this.arenaTypeWidth + this.arenaTypeMargin);
        return value + 'px';
    }
    getTopInPixels(position) {
        const value = position.y * (this.arenaTypeHeight + this.arenaTypeMargin);
        return value + 'px';
    }
    getWidthtInPixels(width) {
        const value = width;
        return value + 'px';
    }
    getHeightInPixels(height) {
        const value = height;
        return value + 'px';
    }
    getArenaTypeStyles(arenaType) {
        return {
            left: this.getLeftInPixels(arenaType.position),
            top: this.getTopInPixels(arenaType.position),
            width: this.getWidthtInPixels(this.arenaTypeWidth),
            height: this.getHeightInPixels(this.arenaTypeHeight),
            backgroundImage: `url(img/arenas/${arenaType.imageName})`
        };
    }
    selectArenaType(arenaType) {
        this.setState({ selectedArenaType: arenaType });
    }
    handleArenaTypeClick(event, arenaType) {
        event.stopPropagation();
        this.selectArenaType(arenaType);
    }
    render() {
        return (React.createElement("div", { id: "map-body-container" },
            React.createElement("div", { className: "info-panel" }, this.state.selectedArenaType
                ?
                    React.createElement(ui_map_arena_type_information_1.UIMapArenaTypeInformation, { arenaType: this.state.selectedArenaType, arenaStarted: (arena) => { this.props.arenaStarted(arena); } })
                : null),
            React.createElement("div", { className: "map-container" },
                React.createElement(ui_draggable_container_1.UIDraggableContainer, null,
                    React.createElement("div", { className: "map" }, game_services_1.GameServices.arenaTypes.allArenaTypes.map(arenaType => React.createElement("div", { key: arenaType.key, className: "arena-type", style: this.getArenaTypeStyles(arenaType), onMouseDown: event => this.handleArenaTypeClick(event, arenaType) },
                        React.createElement("div", { className: "header" },
                            React.createElement("span", { className: "name" }, arenaType.name),
                            React.createElement("span", { className: "level" },
                                "Lv.",
                                arenaType.level)))))))));
    }
}
exports.UIMapBody = UIMapBody;


/***/ }),

/***/ "./src/rendering/react/shared/ui-draggable-container.tsx":
/*!***************************************************************!*\
  !*** ./src/rendering/react/shared/ui-draggable-container.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class UIDraggableContainer extends React.Component {
    constructor(props) {
        super(props);
        // Constants
        this.minZoom = 0.2;
        this.maxZoom = 2;
        this.wheelZoomEffect = 0.001;
        this.keyboardScrollSpeed = 1000;
        // Mouse movement
        this.isDragging = false;
        // Keyboard movement
        this.keysDown = [];
        this.state = {
            translate: { x: 0, y: 0 },
            zoom: 1
        };
    }
    setZoom(value) {
        let newZoom = value;
        if (value < this.minZoom) {
            newZoom = this.minZoom;
        }
        else if (value > this.maxZoom) {
            newZoom = this.maxZoom;
        }
        this.setState({ zoom: newZoom });
        return newZoom;
    }
    getContainerFromEventTarget(eventTarget) {
        const targetElement = eventTarget;
        const isContainer = targetElement.classList.contains('.draggable-container');
        const container = isContainer ? targetElement : targetElement.closest('.draggable-container');
        return container;
    }
    onWheel(wheelEvent) {
        const containerHTMLElement = this.getContainerFromEventTarget(wheelEvent.target);
        const viewPortX = wheelEvent.clientX - containerHTMLElement.offsetLeft;
        const viewPortY = wheelEvent.clientY - containerHTMLElement.offsetTop;
        const previousZoom = this.state.zoom;
        const previousTranslateX = this.state.translate.x;
        const previousTranslateY = this.state.translate.y;
        const previousActualX = viewPortX / previousZoom - previousTranslateX;
        const previousActualY = viewPortY / previousZoom - previousTranslateY;
        const initialNewZoom = this.state.zoom - this.wheelZoomEffect * wheelEvent.deltaY;
        const actualNewZoom = this.setZoom(initialNewZoom);
        const newTranslateX = viewPortX / actualNewZoom - previousActualX;
        const newTranslateY = viewPortY / actualNewZoom - previousActualY;
        this.setState({
            translate: {
                x: newTranslateX,
                y: newTranslateY
            }
        });
    }
    onMouseDown(mouseEvent) {
        const containerHTMLElement = this.getContainerFromEventTarget(mouseEvent.target);
        this.isDragging = true;
        const viewPortX = mouseEvent.clientX - containerHTMLElement.offsetLeft;
        const viewPortY = mouseEvent.clientY - containerHTMLElement.offsetTop;
        const zoom = this.state.zoom;
        const translateX = this.state.translate.x;
        const translateY = this.state.translate.y;
        const actualX = viewPortX / zoom - translateX;
        const actualY = viewPortY / zoom - translateY;
        this.dragTranslateX = translateX;
        this.dragTranslateY = translateY;
        this.dragActualX = actualX;
        this.dragActualY = actualY;
    }
    onMouseUp(mouseEvent) {
        this.isDragging = false;
    }
    onMouseMove(mouseEvent) {
        if (this.isDragging) {
            const containerHTMLElement = this.getContainerFromEventTarget(mouseEvent.target);
            const viewPortX = mouseEvent.clientX - containerHTMLElement.offsetLeft;
            const viewPortY = mouseEvent.clientY - containerHTMLElement.offsetTop;
            const zoom = this.state.zoom;
            const actualX = viewPortX / zoom - this.dragTranslateX;
            const actualY = viewPortY / zoom - this.dragTranslateY;
            const deltaX = actualX - this.dragActualX;
            const deltaY = actualY - this.dragActualY;
            const newTranslateX = this.dragTranslateX + deltaX;
            const newTranslateY = this.dragTranslateY + deltaY;
            this.setState({
                translate: {
                    x: newTranslateX,
                    y: newTranslateY
                }
            });
        }
    }
    handleKeyDown(keyCode) {
        if (!this.keysDown.includes(keyCode)) {
            this.keysDown.push(keyCode);
        }
    }
    handleKeyUp(keyCode) {
        if (this.keysDown.includes(keyCode)) {
            this.keysDown.splice(this.keysDown.indexOf(keyCode), 1);
        }
    }
    getDraggableStyles() {
        return {
            zoom: this.state.zoom * 100 + '%',
            transform: `translate(${this.state.translate.x}px, ${this.state.translate.y}px)`
        };
    }
    update(dTime) {
        let deltaX = 0;
        let deltaY = 0;
        if (this.keysDown.includes(37)) {
            deltaX -= this.keyboardScrollSpeed;
        }
        if (this.keysDown.includes(39)) {
            deltaX += this.keyboardScrollSpeed;
        }
        if (this.keysDown.includes(38)) {
            deltaY -= this.keyboardScrollSpeed;
        }
        if (this.keysDown.includes(40)) {
            deltaY += this.keyboardScrollSpeed;
        }
        this.setState({
            translate: {
                x: this.state.translate.x + deltaX / dTime,
                y: this.state.translate.y + deltaY / dTime
            }
        });
    }
    UNSAFE_componentWillMount() {
        this.documentKeyDownHandler = (event) => { this.handleKeyDown(event.keyCode); };
        this.documentKeyUpHandler = (event) => { this.handleKeyUp(event.keyCode); };
        this.updateIntervalID = setInterval(() => this.update(50), 50);
        document.addEventListener("keydown", this.documentKeyDownHandler, false);
        document.addEventListener("keyup", this.documentKeyUpHandler, false);
    }
    UNSAFE_componentWillUnmount() {
        clearInterval(this.updateIntervalID);
        document.removeEventListener("keydown", this.documentKeyDownHandler, false);
        document.removeEventListener("keyup", this.documentKeyUpHandler, false);
    }
    getClassName() {
        if (this.props.className) {
            return `draggable-container ${this.props.className}`;
        }
        else {
            return `draggable-container`;
        }
    }
    render() {
        return (React.createElement("div", { className: this.getClassName(), onWheel: (event) => this.onWheel(event), onMouseDown: (event) => this.onMouseDown(event), onMouseUp: (event) => this.onMouseUp(event), onMouseMove: (event) => this.onMouseMove(event) },
            React.createElement("div", { className: "draggable", style: this.getDraggableStyles() }, this.props.children)));
    }
}
exports.UIDraggableContainer = UIDraggableContainer;


/***/ }),

/***/ "./src/rendering/react/shared/ui-progress-bar.tsx":
/*!********************************************************!*\
  !*** ./src/rendering/react/shared/ui-progress-bar.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class UIProgressBar extends React.Component {
    getFillPercentage() {
        return 100 * (this.props.max - this.props.current) / (this.props.max - this.props.min);
    }
    render() {
        return (React.createElement("div", { className: "progress-bar" },
            React.createElement("div", { className: "bar", style: { width: this.getFillPercentage() + '%' } })));
    }
}
exports.UIProgressBar = UIProgressBar;


/***/ }),

/***/ "./src/rendering/react/shared/ui-tab-button.tsx":
/*!******************************************************!*\
  !*** ./src/rendering/react/shared/ui-tab-button.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class UITabButton extends React.Component {
    render() {
        let className = 'tab';
        if (this.props.isActive) {
            className += ' active';
        }
        return (React.createElement("li", { className: className, onClick: this.props.onClick },
            React.createElement("span", null, this.props.text),
            React.createElement("img", { src: this.props.imageUrl })));
    }
}
exports.UITabButton = UITabButton;


/***/ }),

/***/ "./src/rendering/react/structure.scss":
/*!********************************************!*\
  !*** ./src/rendering/react/structure.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./structure.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/rendering/react/structure.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/rendering/react/ui-body.tsx":
/*!*****************************************!*\
  !*** ./src/rendering/react/ui-body.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui_tab_button_1 = __webpack_require__(/*! ./shared/ui-tab-button */ "./src/rendering/react/shared/ui-tab-button.tsx");
const ui_map_body_1 = __webpack_require__(/*! ./map/ui-map-body */ "./src/rendering/react/map/ui-map-body.tsx");
const ui_heroes_body_1 = __webpack_require__(/*! ./heroes/ui-heroes-body */ "./src/rendering/react/heroes/ui-heroes-body.tsx");
const ui_combat_body_1 = __webpack_require__(/*! ./combat/ui-combat-body */ "./src/rendering/react/combat/ui-combat-body.tsx");
class UIBody extends React.Component {
    constructor(props) {
        super(props);
        this.tabs = [
            {
                key: 'heroes',
                text: 'Heroes',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'combat',
                text: 'Combat',
                imageUrl: 'img/tabs/combat.png'
            },
            {
                key: 'map',
                text: 'Map',
                imageUrl: 'img/tabs/map.png'
            },
            {
                key: 'quests',
                text: 'Quests',
                imageUrl: 'img/tabs/quests.png'
            },
        ];
        this.state = { activeTabKey: "heroes" };
    }
    selectTab(tabKey) {
        this.setState({ activeTabKey: tabKey });
    }
    renderCurrentTabBody() {
        switch (this.state.activeTabKey) {
            case 'heroes':
                return React.createElement(ui_heroes_body_1.UIHeroesBody, null);
            case 'combat':
                return React.createElement(ui_combat_body_1.UICombatBody, { selectedArena: null });
            case 'map':
                return React.createElement(ui_map_body_1.UIMapBody, { arenaStarted: (arena) => { this.selectTab('combat'); } });
            case 'quests':
                return null;
            default:
                return null;
        }
    }
    render() {
        return (React.createElement("div", { id: "body" },
            React.createElement("ul", { className: "tabs" }, this.tabs.map(tab => React.createElement(ui_tab_button_1.UITabButton, { key: tab.key, text: tab.text, imageUrl: tab.imageUrl, isActive: this.state.activeTabKey === tab.key, onClick: () => this.selectTab(tab.key) }))),
            React.createElement("div", { className: "tab-body" }, this.renderCurrentTabBody())));
    }
}
exports.UIBody = UIBody;


/***/ }),

/***/ "./src/rendering/react/ui-game-context.tsx":
/*!*************************************************!*\
  !*** ./src/rendering/react/ui-game-context.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.GameContext = React.createContext(null);


/***/ }),

/***/ "./src/rendering/react/ui-game.tsx":
/*!*****************************************!*\
  !*** ./src/rendering/react/ui-game.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ui_game_context_1 = __webpack_require__(/*! ./ui-game-context */ "./src/rendering/react/ui-game-context.tsx");
const ui_header_1 = __webpack_require__(/*! ./ui-header */ "./src/rendering/react/ui-header.tsx");
const ui_body_1 = __webpack_require__(/*! ./ui-body */ "./src/rendering/react/ui-body.tsx");
const game_controller_1 = __webpack_require__(/*! ../../game/game-controller */ "./src/game/game-controller.ts");
const game_services_1 = __webpack_require__(/*! ../../game/game-services */ "./src/game/game-services.ts");
class UIGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { game: null };
    }
    newGame() {
        const gameController = new game_controller_1.GameController();
        game_services_1.GameServices.currentGameController = gameController;
        gameController.initialize();
        gameController.newGame();
        game_services_1.GameServices.currentGame = gameController.game;
        this.setState({ game: gameController.game });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(ui_header_1.UIHeader, { versionNumber: game_services_1.GameServices.version.currentVersion, onNewGameClick: () => this.newGame() }),
            this.state.game
                ?
                    React.createElement(ui_game_context_1.GameContext.Provider, { value: this.state.game },
                        React.createElement(ui_body_1.UIBody, null))
                : null));
    }
}
exports.UIGame = UIGame;


/***/ }),

/***/ "./src/rendering/react/ui-header.tsx":
/*!*******************************************!*\
  !*** ./src/rendering/react/ui-header.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class UIHeader extends React.Component {
    render() {
        return (React.createElement("div", { id: "header" },
            React.createElement("span", { className: "title-container" },
                React.createElement("span", { className: "title" }, "Loot Hoarder"),
                React.createElement("span", { className: "version-number" },
                    "v",
                    this.props.versionNumber)),
            React.createElement("span", { className: "button btn-new-game", onClick: this.props.onNewGameClick }, "New game")));
    }
}
exports.UIHeader = UIHeader;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map