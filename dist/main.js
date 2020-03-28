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
exports.push([module.i, ".flexbox {\n  display: flex; }\n\n.flexbox-between {\n  display: flex;\n  justify-content: space-between; }\n\n.flexbox-column {\n  display: flex;\n  flex-direction: column; }\n\n.flexbox-column-between {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.button {\n  background-color: #9999BB;\n  border: 2px solid grey;\n  display: inline-block;\n  padding-left: 15px;\n  padding-right: 15px;\n  cursor: pointer; }\n\n.large-list-card {\n  background-color: #BB9955;\n  border: 2px solid grey;\n  min-height: 150px;\n  width: 600px;\n  margin-bottom: 5px; }\n\n.progress-bar {\n  width: 100%;\n  height: 10px;\n  background-color: #141414;\n  border: 1px solid grey; }\n\n.progress-bar .bar {\n  height: 100%;\n  background-color: #9999BB;\n  display: block; }\n\n.draggable-container {\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n", ""]);
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
exports.push([module.i, "#map-container {\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n\n.map {\n  position: relative; }\n  .map .arena-type {\n    position: absolute;\n    background-color: grey; }\n", ""]);
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
exports.push([module.i, "body {\n  background-color: #141414;\n  color: #f2f2f2;\n  user-select: none; }\n\n/* Header */\n#header {\n  width: 100%;\n  height: 50px;\n  background-color: #303030;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px; }\n  #header .title-container {\n    display: flex;\n    flex-direction: column; }\n    #header .title-container .title {\n      font-size: 25px; }\n    #header .title-container .version-number {\n      font-size: 10px; }\n  #header .btn-new-game {\n    padding-top: 8px; }\n\n/* Body */\n#body {\n  padding: 10px; }\n\n.tabs {\n  display: flex; }\n  .tabs .tab {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid grey;\n    padding: 15px;\n    cursor: pointer;\n    user-select: none; }\n    .tabs .tab.active {\n      border-color: white; }\n\n.tab-body {\n  width: 1400px;\n  height: 800px;\n  border: 1px solid white; }\n", ""]);
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

/***/ "./src/common/Observable.ts":
/*!**********************************!*\
  !*** ./src/common/Observable.ts ***!
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
    load(dbGame) {
        this.dbModel = dbGame;
        this.heroes = this.dbModel.heroes.map(dbHero => {
            const hero = new hero_1.Hero();
            hero.load(dbHero);
            return hero;
        });
        this.arenas = this.dbModel.arenas.map(dbArena => {
            const arena = new arena_1.Arena();
            arena.load(dbArena);
            return arena;
        });
    }
    update(dTime) {
        //console.log("Game", this.dbModel);
    }
    addHero(hero) {
        this.dbModel.heroes.push(hero.dbModel);
        this.heroes.push(hero);
    }
    spawnArena(type, level, heroes) {
        const rooms = type.spawnRooms(level);
        const dbArena = {
            typeKey: type.key,
            startTime: new Date(),
            level: level,
            rooms: [],
            currentRoomIndex: 0
        };
        const arena = new arena_1.Arena();
        arena.load(dbArena);
        arena.dbModel.rooms = rooms.map(room => room.dbModel);
        arena.rooms = rooms;
        this.dbModel.arenas.push(arena.dbModel);
        this.arenas.push(arena);
        arena.rooms[0].setHeroes(heroes);
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/game/arenas/arena-room.ts":
/*!***************************************!*\
  !*** ./src/game/arenas/arena-room.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monster_1 = __webpack_require__(/*! ../monsters/monster */ "./src/game/monsters/monster.ts");
class ArenaRoom {
    get currentMonster() {
        return this.monsters[this.dbModel.currentMonsterIndex];
    }
    load(dbArenaRoom) {
        this.dbModel = dbArenaRoom;
        this.monsters = this.dbModel.monsters.map(dbMonster => {
            const monster = new monster_1.Monster();
            monster.load(dbMonster);
            return monster;
        });
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
const arena_room_1 = __webpack_require__(/*! ./arena-room */ "./src/game/arenas/arena-room.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class ArenaTypeService {
    initialize() {
        this.allArenaTypes = [
            {
                key: 'forest',
                name: 'Forest',
                description: 'Easy monsters!',
                imageName: 'forest.png',
                position: { x: 0, y: 0 },
                spawnRooms: (level) => {
                    return this.spawnRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfMonstersInEachRoom: 5,
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
            },
            {
                ke: 'brushlands',
                name: 'Brushlands',
                description: 'Also easy monsters!',
                imageName: 'brushlands.png',
                position: { x: 1, y: 0 },
                spawnRooms: (level) => {
                    return this.spawnRooms({
                        level: level,
                        amountOfRooms: 10,
                        amountOfMonstersInEachRoom: 5,
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
            }
        ];
    }
    getByKey(key) {
        return this.allArenaTypes.find(type => type.key === key);
    }
    spawnRooms(settings) {
        const arenaRooms = [];
        for (let currentRoomIndex = 0; currentRoomIndex < settings.amountOfRooms; currentRoomIndex++) {
            const dbMonsters = [];
            for (let currentMonsterIndex = 0; currentMonsterIndex < settings.amountOfMonstersInEachRoom; currentMonsterIndex++) {
                const monsterType = game_services_1.GameServices.random.getWeightedValue(settings.monsterTypes);
                const dbMonster = game_services_1.GameServices.monsters.createDBMonster(settings.level, monsterType);
                dbMonsters.push(dbMonster);
            }
            const dbArenaRoom = {
                currentMonsterIndex: 0,
                heroIds: [],
                monsters: dbMonsters
            };
            const arenaRoom = new arena_room_1.ArenaRoom();
            arenaRoom.load(dbArenaRoom);
            arenaRooms.push(arenaRoom);
        }
        return arenaRooms;
    }
}
exports.ArenaTypeService = ArenaTypeService;


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
class Arena {
    load(dbArena) {
        this.dbModel = dbArena;
        this.type = game_services_1.GameServices.arenaTypes.getByKey(dbArena.typeKey);
        this.rooms = dbArena.rooms.map(dbRoom => {
            const room = new arena_room_1.ArenaRoom();
            room.load(dbRoom);
            return room;
        });
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
class GameController {
    initialize() {
        this.gameRunner = new game_runner_1.GameRunner();
    }
    newGame() {
        const dbGame = {
            version: game_services_1.GameServices.version.currentVersion,
            startTime: new Date(),
            heroes: [{
                    id: 0,
                    name: 'Heltefar',
                    level: 1,
                    experience: 0,
                    isAlive: true
                }],
            arenas: []
        };
        this.game = new Game_1.Game();
        this.game.load(dbGame);
        const arenaType = game_services_1.GameServices.arenaTypes.allArenaTypes[0];
        this.game.spawnArena(arenaType, 1, [this.game.heroes[0]]);
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
const Observable_1 = __webpack_require__(/*! ../common/Observable */ "./src/common/Observable.ts");
class GameRunner {
    constructor() {
        this.updateFrequency = 100;
        this.maxTimeToResumePerUpdate = 24 * 60 * 60 * 1000;
        this.lastUpdateAsNumber = Date.now();
        this.onUpdate = Observable_1.ObservableFactory.create();
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
class GameServices {
    constructor() { }
    ;
    static initialize() {
        GameServices.arenaTypes = new arena_type_service_1.ArenaTypeService();
        GameServices.arenaTypes.initialize();
        GameServices.attributeTypes = new attribute_type_service_1.AttributeTypeService();
        GameServices.attributeTypes.initialize();
        GameServices.skillTypes = new skill_type_service_1.SkillTypeService();
        GameServices.skillTypes.initialize();
        GameServices.monsterTypes = new monster_type_service_1.MonsterTypeService();
        GameServices.monsterTypes.initialize();
        GameServices.monsters = new monster_service_1.MonsterService();
        GameServices.random = new random_service_1.RandomService();
        GameServices.version = new version_service_1.VersionService();
    }
}
exports.GameServices = GameServices;


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
const Observable_1 = __webpack_require__(/*! ../../common/Observable */ "./src/common/Observable.ts");
class Hero {
    constructor() {
        this.onDeath = Observable_1.ObservableFactory.create();
    }
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
    load(dbHero) {
        this.dbModel = dbHero;
        this.attributes = attributes_1.Attributes.create();
        if (this.dbModel.currentHealth === undefined) {
            this.dbModel.currentHealth = this.attributes.maximumHealth.value;
        }
    }
}
exports.Hero = Hero;


/***/ }),

/***/ "./src/game/monsters/monster-service.ts":
/*!**********************************************!*\
  !*** ./src/game/monsters/monster-service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monster_1 = __webpack_require__(/*! ./monster */ "./src/game/monsters/monster.ts");
class MonsterService {
    createMonster(level, type) {
        const dbMonster = this.createDBMonster(level, type);
        const monster = new monster_1.Monster();
        monster.load(dbMonster);
        return monster;
    }
    createDBMonster(level, type) {
        const dbMonster = {
            typeKey: type.key,
            level: level,
            isAlive: true,
            skills: type.skillTypes.map(skillType => {
                return {
                    remainingCooldown: 0,
                    typeKey: skillType.key
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
const attributes_1 = __webpack_require__(/*! ../attributes/attributes */ "./src/game/attributes/attributes.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class MonsterTypeService {
    initialize() {
        this.wolf = {
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
            skillTypes: [game_services_1.GameServices.skillTypes.basicAttack]
        };
        this.snake = {
            key: 'snake',
            name: 'Snake',
            description: 'A cunning snake',
            imageName: 'snake.png',
            attributesBase: attributes_1.Attributes.create({
                attackDamage: 15,
                attackSpeed: 2.0,
                maximumHealth: 200
            }),
            attributesPerLevel: attributes_1.Attributes.create({
                attackDamage: 2,
                maximumHealth: 12
            }),
            skillTypes: [game_services_1.GameServices.skillTypes.basicAttack]
        };
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

/***/ "./src/game/monsters/monster.ts":
/*!**************************************!*\
  !*** ./src/game/monsters/monster.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const attributes_1 = __webpack_require__(/*! ../attributes/attributes */ "./src/game/attributes/attributes.ts");
const Observable_1 = __webpack_require__(/*! ../../common/Observable */ "./src/common/Observable.ts");
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class Monster {
    constructor() {
        this.onDeath = Observable_1.ObservableFactory.create();
    }
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
    load(dbMonster) {
        this.dbModel = dbMonster;
        this.attributes = attributes_1.Attributes.create();
        this.type = game_services_1.GameServices.monsterTypes.getByKey(this.dbModel.typeKey);
    }
    recalculateAttributes() {
        this.type.attributesBase.all.forEach(attr => this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value));
        this.type.attributesPerLevel.all.forEach(attr => this.attributes.get(attr.type).amount.setAdditiveModifier(attr, attr.amount.value * this.dbModel.level));
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
    rollSuccess(successChance) {
        return Math.random() < successChance;
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
const Observable_1 = __webpack_require__(/*! ../../common/Observable */ "./src/common/Observable.ts");
class ValueModifier {
    constructor(key, amount) {
        this.amount = amount;
        this.key = key;
    }
}
class ValueContainer {
    constructor(baseValue) {
        this.additiveModifiers = [];
        this.multiplicativeModifiers = [];
        this.value = 0;
        this.onValueChange = Observable_1.ObservableFactory.createWith1Argument();
        if (baseValue !== undefined) {
            this.setAdditiveModifier(this, baseValue);
        }
    }
    recalculateValue() {
        let newValue = 0;
        this.additiveModifiers.forEach(mod => newValue += mod.amount);
        this.multiplicativeModifiers.forEach(mod => newValue *= mod.amount);
        if (this.value !== newValue) {
            this.value = newValue;
            this.onValueChange.notify(newValue);
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
    removeAllModifiers(key) {
        this.additiveModifiers = this.additiveModifiers.filter(mod => mod.key !== key);
        this.multiplicativeModifiers = this.multiplicativeModifiers.filter(mod => mod.key !== key);
    }
}
exports.ValueContainer = ValueContainer;


/***/ }),

/***/ "./src/game/skills/skill-type-service.ts":
/*!***********************************************!*\
  !*** ./src/game/skills/skill-type-service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const game_services_1 = __webpack_require__(/*! ../game-services */ "./src/game/game-services.ts");
class SkillTypeService {
    initialize() {
        this.basicAttack = {
            key: "basic-attack",
            cooldown: 1000,
            energyCost: 0,
            effect: (user, arenaRoom) => {
                let damage = user.attributes.attackDamage.value;
                const isCriticalStrike = game_services_1.GameServices.random.rollSuccess(user.attributes.attackCriticalMultiplier.value);
                if (isCriticalStrike) {
                    damage *= user.attributes.attackCriticalMultiplier.value;
                }
                this.dealDamage(arenaRoom.currentMonster, damage);
            }
        };
    }
    dealDamage(damageReceiver, damage) {
        const damageReceived = this.reduceDamageBasedOnArmor(damage, damageReceiver.attributes.armor.value);
        damageReceiver.currentHealth -= damageReceived;
    }
    reduceDamageBasedOnArmor(damage, armor) {
        return damage * 100 / (100 + armor);
    }
}
exports.SkillTypeService = SkillTypeService;


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
__webpack_require__(/*! ./map/map.scss */ "./src/rendering/react/map/map.scss");
const ui_game_1 = __webpack_require__(/*! ./ui-game */ "./src/rendering/react/ui-game.tsx");
const game_services_1 = __webpack_require__(/*! ../../game/game-services */ "./src/game/game-services.ts");
game_services_1.GameServices.initialize();
var game = "hej";
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
// export class UIMapBody extends React.Component<{}, {drawOffset: Vector2, zoom: number}> {
class UIMapBody extends React.Component {
    constructor() {
        super(...arguments);
        this.arenaTypeWidth = 200;
        this.arenaTypeHeight = 200;
        this.arenaTypeMargin = 10;
    }
    // private minZoom = 0.2;
    // private maxZoom = 2;
    // private wheelZoomEffect = 0.001;
    // private keyboardScrollEffect = 40;
    // private documentKeyDownHandler: (event: KeyboardEvent) => void;
    // constructor(props: {}) {
    //     super(props);
    //     this.state = {
    //         drawOffset: {x: 0, y: 0}, 
    //         zoom: 1
    //     };
    // }
    getLeftInPixels(position) {
        //const value = this.state.drawOffset.x + (position.x * (this.arenaTypeWidth + this.arenaTypeMargin) * this.state.zoom);
        const value = position.x * (this.arenaTypeWidth + this.arenaTypeMargin);
        return value + 'px';
    }
    getTopInPixels(position) {
        //const value = this.state.drawOffset.y + (position.y * (this.arenaTypeHeight + this.arenaTypeMargin) * this.state.zoom);
        const value = position.y * (this.arenaTypeHeight + this.arenaTypeMargin);
        return value + 'px';
    }
    getWidthtInPixels(width) {
        //const value = width * this.state.zoom;
        const value = width;
        return value + 'px';
    }
    getHeightInPixels(height) {
        //const value = height * this.state.zoom;
        const value = height;
        return value + 'px';
    }
    getArenaTypeStyles(arenaType) {
        return {
            left: this.getLeftInPixels(arenaType.position),
            top: this.getTopInPixels(arenaType.position),
            width: this.getWidthtInPixels(this.arenaTypeWidth),
            height: this.getHeightInPixels(this.arenaTypeHeight)
        };
    }
    // private setZoom(value: number) {
    //     if (value < this.minZoom) {
    //         this.setState({zoom: this.minZoom});
    //     } else if (value > this.maxZoom) {
    //         this.setState({zoom: this.maxZoom});
    //     } else {
    //         this.setState({zoom: value});
    //     }
    // }
    // private onWheel(wheelEvent: React.WheelEvent<HTMLDivElement>): void {
    //     let zoom = this.state.zoom - this.wheelZoomEffect * wheelEvent.deltaY;
    //     this.setZoom(zoom);
    // }
    // private getMapStyles(): React.CSSProperties {
    //     return {
    //         zoom: this.state.zoom * 100 + '%',
    //         transform: `translate(${this.state.drawOffset.x}px, ${this.state.drawOffset.y}px)`
    //     };
    // }
    // private handleKeyDown(keyCode: number): void {
    //     let deltaX: number = 0;
    //     let deltaY: number = 0;
    //     switch(keyCode) {
    //         case 37: 
    //             deltaX = -this.keyboardScrollEffect;
    //         break;
    //         case 39: 
    //             deltaX = this.keyboardScrollEffect;
    //         break;
    //         case 38: 
    //             deltaY = -this.keyboardScrollEffect;
    //         break;
    //         case 40: 
    //             deltaY = this.keyboardScrollEffect;
    //         break;
    //     }
    //     this.setState({
    //         drawOffset: {
    //             x: this.state.drawOffset.x + deltaX, 
    //             y: this.state.drawOffset.y + deltaY
    //         }
    //     });
    // }
    // public componentWillMount(): void {
    //     this.documentKeyDownHandler = (event: KeyboardEvent) => {this.handleKeyDown(event.keyCode)}
    //     document.addEventListener("keydown", this.documentKeyDownHandler, false);
    // }
    // public componentWillUnmount(): void {
    //     document.removeEventListener("keydown", this.documentKeyDownHandler, false);
    // }
    render() {
        return (React.createElement(ui_draggable_container_1.UIDraggableContainer, null,
            React.createElement("div", { className: "map" }, game_services_1.GameServices.arenaTypes.allArenaTypes.map(arenaType => React.createElement("div", { key: arenaType.key, className: "arena-type", style: this.getArenaTypeStyles(arenaType) }, arenaType.name))))
        // <div 
        //     id="map-container"
        //     onWheel={(event: React.WheelEvent<HTMLDivElement>) => this.onWheel(event)}
        // >
        //     <div id="map" style={this.getMapStyles()}>
        //         {GameServices.arenaTypes.allArenaTypes.map(arenaType => 
        //             <div 
        //                 key={arenaType.key} 
        //                 className="arena-type" 
        //                 style={this.getArenaTypeStyles(arenaType)}
        //             >{arenaType.name}</div>
        //         )}
        //     </div>
        // </div>
        );
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
    componentWillMount() {
        this.documentKeyDownHandler = (event) => { this.handleKeyDown(event.keyCode); };
        this.documentKeyUpHandler = (event) => { this.handleKeyUp(event.keyCode); };
        this.updateIntervalID = setInterval(() => this.update(50), 50);
        document.addEventListener("keydown", this.documentKeyDownHandler, false);
        document.addEventListener("keyup", this.documentKeyUpHandler, false);
    }
    componentWillUnmount() {
        clearInterval(this.updateIntervalID);
        document.removeEventListener("keydown", this.documentKeyDownHandler, false);
        document.removeEventListener("keyup", this.documentKeyUpHandler, false);
    }
    render() {
        return (React.createElement("div", { className: "draggable-container", onWheel: (event) => this.onWheel(event), onMouseDown: (event) => this.onMouseDown(event), onMouseUp: (event) => this.onMouseUp(event), onMouseMove: (event) => this.onMouseMove(event) },
            React.createElement("div", { className: "draggable", style: this.getDraggableStyles() }, this.props.children)));
    }
}
exports.UIDraggableContainer = UIDraggableContainer;


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
class UIBody extends React.Component {
    constructor(props) {
        super(props);
        this.tabs = [
            {
                key: 'hero',
                text: 'Hero',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'combat',
                text: 'Combat',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'map',
                text: 'Map',
                imageUrl: 'img/tabs/heroes.png'
            },
            {
                key: 'quests',
                text: 'Quests',
                imageUrl: 'img/tabs/heroes.png'
            },
        ];
        this.state = { activeTabKey: "hero" };
    }
    selectTab(tabKey) {
        this.setState({ activeTabKey: tabKey });
    }
    renderCurrentTabBody() {
        switch (this.state.activeTabKey) {
            case 'hero':
                return null;
            case 'combat':
                return null;
            case 'map':
                return React.createElement(ui_map_body_1.UIMapBody, null);
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
        gameController.initialize();
        gameController.newGame();
        this.setState({ game: gameController.game });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(ui_header_1.UIHeader, { versionNumber: game_services_1.GameServices.version.currentVersion, onNewGameClick: () => this.newGame() }),
            this.state.game
                ?
                    React.createElement(ui_game_context_1.GameContext.Provider, { value: this.state.game },
                        React.createElement(ui_body_1.UIBody, { game: this.state.game }))
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