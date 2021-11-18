/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/scripts/scriptForPage1.js ***!
  \***************************************/
document.addEventListener("DOMContentLoaded", function () {
  AddProduct();

  document.querySelectorAll(".addButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      let buttonId = event.target.parentNode.getAttribute("id");
      console.log(buttonId);

      let products = JSON.parse(localStorage.getItem("products"));

      products.forEach((element) => {
        if (element.id == buttonId) {
          let text = "Added";

          if (sessionStorage.getItem(element.id)) {
            sessionStorage.removeItem(element.id);
            text = "Add";
          } else {
            sessionStorage.setItem(element.id, element.id);
          }

          event.target.innerHTML = text;
        }
      });
    });
  });
});

//Add new product
function AddProduct() {
  let products = JSON.parse(localStorage.getItem("products"));
  products.forEach((item) => {
    let name = item.Name;
    let options = item.Options;
    let description = item.Description;

    let div = `<div class='div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject' id='${item.id}'>`;
    let h2img =
      "<h2>" +
      name +
      "</h2> <img src='./images/cactus.svg' class='' alt='' /> <p>Options:" +
      options +
      "</p><p>Description:" +
      description +
      "</p>";

    let buttonText = "Add";

    if (sessionStorage.getItem(item.id)) {
      buttonText = "Added";
    }

    let buttons = `<button type='button' class='addButton'>${buttonText}</button> <custom-button></custom-button></div>`;
    let list = div + h2img + buttons;
    let currentEl = document.querySelector(
      ".div_navbarAndObjects_maimDivObjects_allObjectsDiv"
    );
    // console.log(currentEl);
    currentEl.innerHTML += list;
  });
}

/******/ })()
;
//# sourceMappingURL=page1.js.map