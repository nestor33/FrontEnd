class ImageChanger extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("button");
    wrapper.setAttribute("class", "custom-button");

    var imgActual = document.querySelector("img");
    let button = document
      .querySelector(".custom-button")
      .addEventListener("click", function () {
        var img = document.querySelector(img);
        img.src = "C:Users\nestor.pylatDesktopFrontEndimages";
      });
  }
}
