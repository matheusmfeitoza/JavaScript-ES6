export default class ModalLogin {
  constructor(login, modal, closeModal) {
    this.getLogin = document.querySelector(login);
    this.getModal = document.querySelector(modal);
    this.closeModal = document.querySelector(closeModal);
    this.activeEvent = "ativo";
    this.clickModalActive = this.clickModalActive.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  // Adiciona a classe ativo / remove classe ativo
  modalAction() {
    this.getModal.classList.toggle(this.activeEvent);
  }

  // Ativa o evendo de toggle
  clickModalActive(event) {
    event.preventDefault();
    this.modalAction();
  }

  // Remove a classe ativo com click fora
  clickForaModal(event) {
    if (event.target === this.getModal) {
      this.modalAction();
    }
  }

  // Chamada dos eventos
  callEvents() {
    this.getLogin.addEventListener("click", this.clickModalActive);
    this.closeModal.addEventListener("click", this.clickModalActive);
    this.getModal.addEventListener("click", this.clickForaModal);
  }

  init() {
    this.callEvents();
    return this;
  }
}
