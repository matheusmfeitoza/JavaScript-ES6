// function mudaCor(){
//   const getBody = document.body;
//   getBody.classList.toggle('active')
// }

// setInterval(mudaCor,2000)
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const contador = document.querySelector('.tempo')

let incremento = 0;
let aindaNaoSei;

iniciar.addEventListener('click',() =>{
  aindaNaoSei = setInterval(iniciarContador,200)
})

pausar.addEventListener('click',pausarContador);

pausar.addEventListener('dblclick',resetarCronometro);

function iniciarContador(){
  contador.innerText = incremento++;
  iniciar.setAttribute('disabled','');
  
}

function pausarContador(){
  clearInterval(aindaNaoSei);
  iniciar.removeAttribute('disabled')

}
function resetarCronometro(){
  
  contador.innerText = 0;
  incremento = 0;
  
}
