export default class Accordion {
  constructor(dtList) {
    this.dtList = document.querySelectorAll(dtList);
    this.activeClass = "ativo";
  }

  tabDtEvent(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  eventAccordion() {
    this.dtList.forEach((item) => {
      item.addEventListener("click", () => this.tabDtEvent(item));
    });
  }

  // Iniciar a função
  init() {
    if (this.dtList.length) {
      // Inicia o primeiro elemento com a classe ativar
      this.tabDtEvent(this.dtList[0]);
      this.eventAccordion();
    }
    return this;
  }
}
