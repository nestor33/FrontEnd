document.addEventListener("DOMContentLoaded", function () {
  AddProduct();

  document.querySelectorAll(".addButton").forEach((button) => {
    button.addEventListener("click", (event: any) => {
      if (event.target instanceof Element && event.target.parentElement) {
        let buttonId = event.target.parentElement.getAttribute("id");
        console.log(buttonId);

        let itemsProducts = localStorage.getItem("products");
        if (itemsProducts != null) {
          let products = JSON.parse(itemsProducts);

          products.forEach((element: any) => {
            if (element.id == buttonId) {
              let text = "Added";

              if (sessionStorage.getItem(element.id)) {
                sessionStorage.removeItem(element.id);
                text = "Add";
              } else {
                sessionStorage.setItem(element.id, element.id);
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
  let itemsProducts = localStorage.getItem("products");
  if (itemsProducts) {
    let products = JSON.parse(itemsProducts);

    products.forEach((item: any) => {
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
