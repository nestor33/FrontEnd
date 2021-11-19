/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/scripts/scriptForPage3.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
//Add products to Page 3
document.addEventListener("DOMContentLoaded", function () {
    console.log("123");
    Do();
});
function Do() {
    var container = document.querySelector(".container");
    var array = JSON.parse(localStorage.products);
    console.log(array);
    var _loop_1 = function (key, value) {
        var chosenObject = array.filter(function (el) { return el.id == JSON.parse(key); });
        console.log(chosenObject);
        imageSrc = chosenObject[0].imgSrc;
        list = "<div class = 'chosenFiles' ><h2>Name: " +
            chosenObject[0].Name +
            "</h2><img src=" +
            imageSrc +
            "> <p>Id: " +
            chosenObject[0].id +
            "</p> </div>";
        if (container) {
            container.innerHTML += list;
        }
    };
    var imageSrc, list;
    for (var _i = 0, _a = Object.entries(sessionStorage); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
}


/******/ })()
;
//# sourceMappingURL=page3.js.map