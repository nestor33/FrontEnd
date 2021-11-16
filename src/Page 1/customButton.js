class CustomButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.setAttribute("class", "custom-button");
    button.addEventListener("click", () => {
      confirm("do you want to buy it? ");
    });
    shadow.appendChild(button);

    button.textContent = "Buy";
  }
}

customElements.define("custom-button", CustomButton);
