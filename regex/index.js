// // Validando CEP
// const regexCep = /\d{5}[\s-]?\d{3}/g;
// const ceps = ["00000-000", "00000 000", "00000000"];

// for (cep of ceps) {
//   console.log(cep.match(regexCep));
// }

// console.log("---------------------");
// // Validando CPF
// const regexCpf = /(?:\d{3}[.-]?){3}\d{2}/g;

// const cpfs = [
//   "000.000.000-00",
//   "000.000.000.00",
//   "000-000-000-00",
//   "000000000-00",
//   "00000000000",
// ];

// for (const cpf of cpfs) {
//   console.log(cpf.match(regexCpf));
// }

// console.log("-----------------------");

// // Validador de CNPJ
// const regexCnpj = /\d{2}[.-]?(?:\d{3}[.-]?){2}[/]?\d{4}[.-]?\d{2}/g;

// const cnpjs = [
//   "00.000.000/0000-00",
//   "00000000000000",
//   "00-000-000-0000-00",
//   "00.000.000/000000",
//   "00.000.000.000000",
//   "00.000.000.0000.00",
// ];

// for (const cnpj of cnpjs) {
//   console.log(cnpj.match(regexCnpj));
// }

// console.log("---------------------------");

// // Validando Telefone

// const regexTel = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g;

// const telefones = [
//   "+55 11 98888-8888",
//   "55 11 98888 8888",
//   "55 11 988888888",
//   "55 11988888888",
//   "5511988888888",
//   "5511988888888",
//   "11 98888-8888",
//   "11 98888 8888",
//   "(11) 98888 8888",
//   "(11) 98888-8888",
//   "11-98888-8888",
//   "11 98888 8888",
//   "11988888888",
//   "11988888888",
//   "988888888",
//   "(11)988888888",
//   "98888 8888",
//   "8888 8888",
// ];

// for (const tel of telefones) {
//   console.log(tel.match(regexTel));
// }

const getList = document.querySelectorAll("li");

const transforListInArray = ([...list]) => {
  return list.map((item) => item.innerText);
};

const limpaArrayCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const formatarCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1-$2-$3.$4");
};

const fomartarListaCpf = (ListaCpf) => {
  return ListaCpf.map(limpaArrayCPF).map(formatarCPF);
};

const substituirCpf = (cpfsElements) => {
  const cpfs = transforListInArray(cpfsElements);
  const cpf = fomartarListaCpf(cpfs);

  cpfsElements.forEach((item, index) => {
    item.innerText = cpf[index];
  });
};

substituirCpf(getList);
