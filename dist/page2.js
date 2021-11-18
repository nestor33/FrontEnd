/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/scripts/scriptForPage2.ts ***!
  \***************************************/

var form = document.getElementById("add-form");
//get values from form
document.addEventListener("DOMContentLoaded", function () {
    console.log("form");
    console.log(form);
    if (form) {
        form.addEventListener("submit", submitForm(form));
    }
});
function submitForm(form) {
    return function (e) {
        e.preventDefault();
        var newObject = {
            id: form.formName.value,
            Name: form.formName.value,
            Description: form.formDescription.value,
            imgSrc: "./../../images/cactus.svg",
        };
        console.log(form.formName.value);
        console.log(form.formOptions.value);
        console.log(form.formDescription.value);
        var itemsProducts = localStorage.getItem("products");
        if (itemsProducts) {
            var products_1 = JSON.parse(itemsProducts);
            products_1.push(newObject);
            localStorage.setItem("products", JSON.stringify(products_1));
        }
        //put to session storage
    };
}

/******/ })()
;
//# sourceMappingURL=page2.js.map