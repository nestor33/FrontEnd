const products = [
  {
    id: "1",
    Name: "Name1",
    Description: "123",
    imgSrc: "./../images/cactus.svg",
  },

  {
    id: "2",
    Name: "Name2",
    Description: "123",
    imgSrc: "./../images/cactus.svg",
  },

  {
    id: "3",
    Name: "Name3",
    Description: "123",
    imgSrc: "./../images/cactus.svg",
  },

  {
    id: "4",
    Name: "Name4",
    Description: "123",
    imgSrc: "./../images/cactus.svg",
  },

  {
    id: "5",
    Name: "Name5",
    Description: "123",
    imgSrc: "./../images/cactus.svg",
  },
];

//local storage set items
function addToStorage(key, products) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, products);
  }
}
addToStorage("products", JSON.stringify(products));
