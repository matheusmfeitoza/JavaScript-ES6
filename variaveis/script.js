function soma(a, b) {
  const total = a + b;
  return total;
}

const resultado = soma(2, 2);
console.log(resultado);

function somaSemParametro() {
  const total = 4 + 4;
  return total;
}
console.log(somaSemParametro());

function retornarArray() {
  const arrayzinho = [1, 2, 3, 4, 5];
  return arrayzinho;
}

const arrayzinho = retornarArray();
console.log(arrayzinho);

arrayzinho.forEach((item) => console.log(`Itens do array: ${item}`));

function returnObject() {
  const objetinho = {
    nome: "Matheus",
    idade: 28,
  };
  return objetinho;
}

const objetinho = returnObject();

console.log(objetinho);

function returnArrayObject() {
  const arrayzinhoObj = [
    {
      nome: "Matheus",
      idade: 28,
    },
    {
      nome: "Thais",
      idade: 28,
    },
  ];
  return arrayzinhoObj;
}

const novoArrayzinho = returnArrayObject();

console.log(novoArrayzinho);

novoArrayzinho.forEach((item) => console.log(item.nome));

async function getUrl(url) {
  const getResponse = await fetch(url);
  const getDados = await getResponse.json();
  return getDados;
}

const main = async () => {
  const teste = await getUrl("./../assets/api/animais.json");
  return teste;
};

main().then((resposta) => {
  resposta.forEach((item) => console.log(item.specie));
});
