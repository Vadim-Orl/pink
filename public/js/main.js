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
/***/ (() => {

eval("let navMain = document.querySelector('.main-nav');\nlet navToggle = document.querySelector('.main-nav__toggle');\n\nnavToggle.addEventListener('click', () =>{\n  if (navMain.classList.contains('main-nav--closed')) {\n    navMain.classList.remove('main-nav--closed');\n    navMain.classList.add('main-nav--opened');\n  } else {\n    navMain.classList.add('main-nav--closed');\n    navMain.classList.remove('main-nav--opened');\n  }\n});\n\n//# sourceURL=webpack://pink/./source/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/js/app.js"]();
/******/ 	
/******/ })()
;