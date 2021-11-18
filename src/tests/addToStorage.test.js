/**

 * @jest-environment jsdom

 */

"use strict";

const imports = require("../../dist/scripts/addButton");
let products = [
  {
    id: "1",
    Name: "Name1",
    imgSrc: "./../images/cactus.svg",
  },

  {
    id: "2",
    Name: "Name2",
    imgSrc: "./../images/cactus.svg",
  },
];

let products1 = [
  {
    id: "1",
    Name: "Name1",
    imgSrc: "./../images/cactus.svg",
  },

  {
    id: "2",
    Name: "Name2",
    imgSrc: "./../images/cactus.svg",
  },
];

test("dummy test", () => {
  localStorage.clear();
  imports.addToStorage("xxx", products);
  expect(localStorage.length).toBe(1);
});

test("dummy test", () => {
  localStorage.clear();
  imports.addToStorage("xxx", products);
  imports.addToStorage("yyy", products1);
  expect(localStorage.length).toBe(2);
});
