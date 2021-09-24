import outClick from "./outSideClick.js";

export default class MenuDropdown {
  constructor(menu, events) {
    this.menu = document.querySelectorAll(menu);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evento) {
    evento.preventDefault();
    const element = evento.currentTarget;
    element.classList.add("ativo");
    outClick(element, this.events, () => {
      element.classList.remove("ativo");
    });
  }

  eventoClickMenu() {
    this.menu.forEach((item) => {
      this.events.forEach((menuClick) => {
        item.addEventListener(menuClick, this.handleClick);
      });
    });
  }

  init() {
    this.eventoClickMenu();
  }
}
