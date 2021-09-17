export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }
  formatar(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  cpfPronto(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.formatar(cpfLimpo);
  }

  validarCpf(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[\s.-]?){3}\d{2}/g);
    return matchCpf && matchCpf[0] === cpf;
  }

  createSpanElement() {
    const span = document.createElement("span");
    span.innerText = "CPF INVALIDO";
    span.classList.add("invalid-cpf");
    this.element.parentElement.insertBefore(
      span,
      this.element.nextElementSibling
    );
  }

  validarNoEvento(cpfElement) {
    if (this.validarCpf(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      this.element.classList.add("correto");
      this.element.classList.remove("errado");
      this.element.nextElementSibling.classList.remove("ativo");
    } else {
      this.element.classList.remove("correto");
      this.element.classList.add("errado");
      this.element.nextElementSibling.classList.add("ativo");
    }
  }
  eventCpf() {
    this.element.addEventListener("change", () => {
      this.validarNoEvento(this.element);
    });
  }
  inicio() {
    this.eventCpf();
    this.createSpanElement();
  }
}
