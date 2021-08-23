// Adicione a classe ativo a todos os itens do menu

const getMenus = document.querySelectorAll(".menu a")
getMenus.forEach((item)=> item.classList.add("ativo"));
console.log(getMenus)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
getMenus.forEach((item,index)=>{
    if(index > 0){
        item.classList.remove("ativo")
        console.log(item)
    }else{
        console.log("Index 0 = primeiro item, manterei a classe.")
    }
})

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach( (item) => {
    if(item.hasAttribute('alt') === true && item.getAttribute('alt') !== ""){
        console.log(`Existe ALT e é ${item.getAttribute('alt')}`)
    }else{
        console.log("Não existe alt")
    }
})

// Modifique o href do link externo no menu
const hrefMenu = document.querySelector('a[href^=http]');
console.log(hrefMenu)
hrefMenu.setAttribute('href','https://github.com/matheusmfeitoza')
hrefMenu.setAttribute('target','_blank');