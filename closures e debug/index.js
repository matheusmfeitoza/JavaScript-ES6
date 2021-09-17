function contador() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total);
  };
}

const teste = contador();
teste();
teste();
teste();
teste();
teste();
