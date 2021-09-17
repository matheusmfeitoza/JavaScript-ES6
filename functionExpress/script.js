// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));
// Só desci o console.log pois com function express o conceito de hoisting não é aplicado.

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const meuNome = "Matheus";
(() => {
  const meuNomeNovo = "Matthew";
  console.log(meuNomeNovo);
})();
console.log(meuNome);

// Como podemos utilizar
// a função abaixo.
// const active = (callback) => callback();
const active = (callback) => callback();
active(() => console.log("ola"));
