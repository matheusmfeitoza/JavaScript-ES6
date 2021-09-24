import outClick from "./outSideClick.js";

export default class MenuDropdown {
  constructor(menu, events) {
    this.menu = document.querySelectorAll(menu);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
    this.handleClick = this.handleClick.bind(this);
  }

  // Função de CallBack: Previne o padrão e adiciona a classe ativo
  handleClick(evento) {
    evento.preventDefault();
    const element = evento.currentTarget;
    element.classList.add("ativo");
    outClick(element, this.events, () => {
      element.classList.remove("ativo");
    });
  }

  // Função de evento: Percorre primeiramente no item e depois para cada evento de click ou touch add um event listener com cada evento chamando o CallBack
  eventoClickMenu() {
    this.menu.forEach((item) => {
      this.events.forEach((menuClick) => {
        item.addEventListener(menuClick, this.handleClick);
      });
    });
  }

  // Função para iniciar a classe.
  init() {
    this.eventoClickMenu();
  }
}
