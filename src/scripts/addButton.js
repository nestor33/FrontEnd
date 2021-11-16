const products = [
  {
    id: "1",
    Name: "Name1",
    imgSrc: "./../../images/cactus.svg",
  },

  {
    id: "2",
    Name: "Name2",
    imgSrc: "./../../images/cactus.svg",
  },

  {
    id: "3",
    Name: "Name3",
    imgSrc: "./../../images/cactus.svg",
  },

  {
    id: "4",
    Name: "Name4",
    imgSrc: "./../../images/cactus.svg",
  },

  {
    id: "5",
    Name: "Name5",
    imgSrc: "./../../images/cactus.svg",
  },
];

let localStorage = window.localStorage;
localStorage.setItem("products", JSON.stringify(products));

let sessionStorage = window.sessionStorage;
