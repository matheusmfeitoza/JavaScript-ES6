// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const getInternalLinks = document.querySelectorAll('a[href^="#"');


function handleInternalLinks(event){
    event.preventDefault();
    this.classList.toggle("ativo")
}
getInternalLinks.forEach((item)=>{
    item.addEventListener('click',handleInternalLinks);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const getElementosAll = document.querySelectorAll('body *');

function exibeElementos(event){
    event.preventDefault()
    console.log(event.target)
}
getElementosAll.forEach((item)=>{
    item.addEventListener('click',exibeElementos)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElementos(event){
    event.preventDefault();
    event.target.remove();
}
// getElementosAll.forEach((elemento)=>{
//     elemento.addEventListener('click',removeElementos)
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function aumentarTexto(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('texto-maior')
    }else{
        console.log("else")
    }
}

window.addEventListener('keypress',aumentarTexto)