import { Item } from "./interfaces";

document.addEventListener("DOMContentLoaded", function () {
  AddProduct();

  let filterButtonName1 = document.querySelector(".Name1");
  let filterButtonName2 = document.querySelector(".Name2");
  let allProducts = document.querySelectorAll(
    ".div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject"
  ) as NodeListOf<HTMLElement>;

  //Filter Name1
  if (filterButtonName1) {
    filterButtonName1.addEventListener("click", FilterName1);
  }

  function FilterName1() {
    allProducts.forEach((product) => {
      product.hidden = false;
      if (parseInt(product.id) !== 1) {
        product.hidden = true;
      }
    });
  }

  //Filter Name2
  if (filterButtonName2) {
    filterButtonName2.addEventListener("click", FilterName2);
  }

  function FilterName2() {
    allProducts.forEach((product) => {
      product.hidden = false;
      if (parseInt(product.id) !== 2) {
        product.hidden = true;
      }
    });
  }

  document.querySelectorAll(".addButton").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.parentElement) {
        let buttonId = event.target.parentElement.getAttribute("id");
        console.log(buttonId);

        let itemsProducts = localStorage.getItem("products");
        if (itemsProducts != null) {
          let products: Item[] = JSON.parse(itemsProducts);

          products.forEach((element) => {
            if (element.id.toString() == buttonId) {
              let text = "Added";

              if (sessionStorage.getItem(element.id.toString())) {
                sessionStorage.removeItem(element.id.toString());
                text = "Add";
              } else {
                sessionStorage.setItem(
                  element.id.toString(),
                  element.id.toString()
                );
              }
              if (event.target) {
                (event.target as HTMLElement).innerHTML = text;
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
  let itemsProducts = localStorage.getItem("products");
  if (itemsProducts) {
    let products = JSON.parse(itemsProducts);

    products.forEach((item: Item) => {
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
      if (currentEl) {
        currentEl.innerHTML += list;
      }
    });
  }
}
