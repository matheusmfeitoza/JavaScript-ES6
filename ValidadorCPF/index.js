import ValidarCpf from "./formatar-cpf.js";

const cpf = document.querySelector("#cpf");

const validarCpf = new ValidarCpf(cpf);

validarCpf.inicio();
