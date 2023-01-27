/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/app.js":
/*!**************************!*\
  !*** ./source/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let navMain = document.querySelector('.main-nav');\nlet navToggle = document.querySelector('.main-nav__toggle');\n\nnavToggle.addEventListener('click', () =>{\n  if (navMain.classList.contains('main-nav--closed')) {\n    navMain.classList.remove('main-nav--closed');\n    navMain.classList.add('main-nav--opened');\n  } else {\n    navMain.classList.add('main-nav--closed');\n    navMain.classList.remove('main-nav--opened');\n  }\n});\n\n\n\n__webpack_require__(/*! ./module/map.js */ \"./source/js/module/map.js\");\n\n\n//# sourceURL=webpack://pink/./source/js/app.js?");

/***/ }),

/***/ "./source/js/module/map.js":
/*!*********************************!*\
  !*** ./source/js/module/map.js ***!
  \*********************************/
/***/ (() => {

eval("\nfunction init() {\n  let map = new ymaps.Map(\"map\", {\n    center: [59.94255200890565, 30.360984362273697],\n    zoom: 16,\n    controls: ['default', 'routeButtonControl']\n  });\n\n  let placemark = new ymaps.Placemark([59.943360, 30.363489], {}, {\n    iconLayout: 'default#image',\n    iconImageHref: '../../img/icon-map-marker.svg',\n    iconImageSize: [36, 36],\n    iconImageOffset: [0, 0]\n  });\n\n  map.controls.remove('searchControl');\n  map.controls.remove('zoomControl');\n  map.controls.remove('geolocationControl');\n  map.controls.remove('trafficControl');\n  map.controls.remove('rulerControl');\n  map.controls.remove('routeButtonControl');\n  map.controls.remove('typeSelector');\n  map.controls.remove('fullscreenControl');\n\n  map.geoObjects.add(placemark);\n}\n\nymaps.ready(init);\n\n\n//# sourceURL=webpack://pink/./source/js/module/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/app.js");
/******/ 	
/******/ })()
;