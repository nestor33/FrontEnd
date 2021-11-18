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
  !*** ./src/scripts/scriptForPage1.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', function () {
    AddProduct();
    var filterButtonName1 = document.querySelector('.Name1');
    var filterButtonName2 = document.querySelector('.Name2');
    var allProducts = document.querySelectorAll('.div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject');
    //Filter Name1
    if (filterButtonName1) {
        filterButtonName1.addEventListener('click', FilterName1);
    }
    function FilterName1() {
        allProducts.forEach(function (product) {
            product.hidden = false;
            if (parseInt(product.id) !== 1) {
                product.hidden = true;
            }
        });
    }
    //Filter Name2
    if (filterButtonName2) {
        filterButtonName2.addEventListener('click', FilterName2);
    }
    function FilterName2() {
        allProducts.forEach(function (product) {
            product.hidden = false;
            if (parseInt(product.id) !== 2) {
                product.hidden = true;
            }
        });
    }
    document.querySelectorAll('.addButton').forEach(function (button) {
        button.addEventListener('click', function (event) {
            if (event.target instanceof Element && event.target.parentElement) {
                var buttonId_1 = event.target.parentElement.getAttribute('id');
                console.log(buttonId_1);
                var itemsProducts = localStorage.getItem('products');
                if (itemsProducts != null) {
                    var products_1 = JSON.parse(itemsProducts);
                    products_1.forEach(function (element) {
                        if (element.id.toString() == buttonId_1) {
                            var text = 'Added';
                            if (sessionStorage.getItem(element.id.toString())) {
                                sessionStorage.removeItem(element.id.toString());
                                text = 'Add';
                            }
                            else {
                                sessionStorage.setItem(element.id.toString(), element.id.toString());
                            }
                            if (event.target) {
                                event.target.innerHTML = text;
                            }
                        }
                    });
                }
            }
        });
    });
});
//Add new product
function AddProduct() {
    var itemsProducts = localStorage.getItem('products');
    if (itemsProducts) {
        var products_2 = JSON.parse(itemsProducts);
        products_2.forEach(function (item) {
            var name = item.Name;
            var options = item.Options;
            var description = item.Description;
            var div = "<div class='div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject' id='".concat(item.id, "'>");
            var h2img = '<h2>' +
                name +
                "</h2> <img src='./images/cactus.svg' class='' alt='' /> <p>Options:" +
                options +
                '</p><p>Description:' +
                description +
                '</p>';
            var buttonText = 'Add';
            if (sessionStorage.getItem(item.id)) {
                buttonText = 'Added';
            }
            var buttons = "<button type='button' class='addButton'>".concat(buttonText, "</button> <custom-button></custom-button></div>");
            var list = div + h2img + buttons;
            var currentEl = document.querySelector('.div_navbarAndObjects_maimDivObjects_allObjectsDiv');
            // console.log(currentEl);
            if (currentEl) {
                currentEl.innerHTML += list;
            }
        });
    }
}


/******/ })()
;
//# sourceMappingURL=page1.js.map