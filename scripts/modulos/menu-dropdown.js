import outClick from "./outSideClick.js";

export default class MenuDropdown {
  constructor(menu) {
    this.menu = document.querySelectorAll(menu);
  }

  handleClick(evento) {
    console.log(evento);
    evento.preventDefault();
    console.log(this);
  }

  eventoClickMenu() {
    this.menu.forEach((item) =>
      item.addEventListener(["click", "touchstart"], this.handleClick)
    );
  }

  init() {
    this.eventoClickMenu();
  }
}
// const getMenu = document.querySelectorAll("[data-show-menu]");
// function handleClick(event) {
//   event.preventDefault();
//   this.classList.add("ativo");
//   outClick(this, ["click", "touchstart"], () => {
//     this.classList.remove("ativo");
//   });
// }

// getMenu.forEach((item) => {
//   ["click", "touchstart"].forEach((menuClick) => {
//     item.addEventListener(menuClick, handleClick);
//   });
// });
