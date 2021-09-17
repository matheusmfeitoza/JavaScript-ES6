import outClick from "./outSideClick.js";

export default function menuDropdown() {
  const getMenu = document.querySelectorAll("[data-show-menu]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  getMenu.forEach((item) => {
    ["click", "touchstart"].forEach((menuClick) => {
      item.addEventListener(menuClick, handleClick);
    });
  });
}
