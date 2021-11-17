var filterButtonName1 = document.querySelector(".Name1");
var filterButtonName2 = document.querySelector(".Name2");
var allProducts = document.querySelectorAll(
  ".div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject"
);

//Filter Name1
filterButtonName1.addEventListener("click", FilterName1);

function FilterName1() {
  allProducts.forEach((product) => {
    product.hidden = false;
    if (product.id != 1) {
      product.hidden = true;
    }
  });
}

//Filter Name2
filterButtonName2.addEventListener("click", FilterName2);

function FilterName2() {
  allProducts.forEach((product) => {
    product.hidden = false;
    if (product.id != 2) {
      product.hidden = true;
    }
  });
}

//Add to storage
document.querySelectorAll(".addButton").forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonId = event.target.parentNode.getAttribute("id");
    console.log(buttonId);
    products.forEach((element) => {
      if (element.id == buttonId) {
        event.target.innerHTML = "Added";
        sessionStorage.setItem("id", element.id);
      }
    });
  });
});

//Add new product
function AddProduct() {
  let array = JSON.parse(sessionStorage.newObject);
  console.log(array);

  let div =
    "<div class='div_navbarAndObjects_maimDivObjects_allObjectsDiv_oneObject' id='7'>";
  let h2img =
    "<h2>" +
    array.Name +
    "</h2> <img src='./../../images/cactus.svg' class='' alt='' /> <p>Options:" +
    array.Options +
    "</p><p>Description:" +
    array.Description +
    "</p>";
  let buttons =
    "<button type='button' class='addButton'>Add</button> <custom-button></custom-button></div>";
  let list = div + h2img + buttons;
  let currentEl = document.querySelector(
    ".div_navbarAndObjects_maimDivObjects_allObjectsDiv"
  );
  console.log(currentEl);
  currentEl.innerHTML += list;
}

//Counter
let i = 0;
let counter = document.querySelector(".counter");
let addButtons = document.querySelectorAll(".addButton");
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (sessionStorage.length != null) {
      i = sessionStorage.length;
      counter.textContent = `Counter: ${i.toString()}`;
    } else counter.textContent = `Counter: 0`;
  });
});
