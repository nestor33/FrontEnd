document.addEventListener('DOMContentLoaded', function () {
  AddProduct();

  document.querySelectorAll('.addButton').forEach((button) => {
    button.addEventListener('click', (event) => {
      let buttonId = event.target.parentNode.getAttribute('id');
      console.log(buttonId);

      let products = JSON.parse(localStorage.getItem('products'));

      products.forEach((element) => {
        if (element.id == buttonId) {
          let text = 'Added';

          if (sessionStorage.getItem(element.id)) {
            sessionStorage.removeItem(element.id);
            text = 'Add';
          } else {
            sessionStorage.setItem(element.id, element.id);
          }

          event.target.innerHTML = text;
        }
      });
    });
  });
});

//Add to storage

//Add new product
function AddProduct() {
  let products = JSON.parse(localStorage.getItem('products'));
  products.forEach((item) => {
    let name = item.Name;
    let options = item.Options;
    let description = item.Description;

    let div = `<div class='div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject' id='${item.id}'>`;
    let h2img =
      '<h2>' +
      name +
      "</h2> <img src='./images/cactus.svg' class='' alt='' /> <p>Options:" +
      options +
      '</p><p>Description:' +
      description +
      '</p>';

    let buttonText = 'Add';

    if (sessionStorage.getItem(item.id)) {
      buttonText = 'Added';
    }

    let buttons = `<button type='button' class='addButton'>${buttonText}</button> <custom-button></custom-button></div>`;
    let list = div + h2img + buttons;
    let currentEl = document.querySelector(
      '.div_navbarAndObjects_maimDivObjects_allObjectsDiv'
    );
    console.log(currentEl);
    currentEl.innerHTML += list;
  });
}

let filterButtonName1 = document.querySelector('.Name1');
let filterButtonName2 = document.querySelector('.Name2');
let allProducts = document.querySelectorAll(
  '.div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject'
);

//Filter Name1 Doesn't work
filterButtonName1.addEventListener('click', FilterName1);

function FilterName1() {
  allProducts.forEach((product) => {
    product.hidden = false;
    if (product.id != 1) {
      product.hidden = true;
    }
  });
}

//Filter Name2 Doesn't work
filterButtonName2.addEventListener('click', FilterName2);

function FilterName2() {
  allProducts.forEach((product) => {
    product.hidden = false;
    if (product.id != 2) {
      product.hidden = true;
    }
  });
}

//Counter Doesn't work
let i = 0;
let counter = document.querySelector('.counter');
let addButtons = document.querySelectorAll('.addButton');
addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == 'Added') {
      i++;
      counter.textContent = `Counter: ${i.toString()}`;
    } else counter.textContent = `Counter: 0`;
  });
});

module.exports = { FilterName2 };
