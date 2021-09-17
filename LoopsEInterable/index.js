// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const allLi = document.querySelectorAll("li");

for (const element of allLi) {
  element.classList.add("ativo");
}
// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const props in window) {
  console.log(`${props}: ${window[props]}`);
}
