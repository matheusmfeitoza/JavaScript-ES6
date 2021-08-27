// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(aleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const newNumeros = numeros.split(', ');
console.log(Math.max(...newNumeros))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limpaPreco(){
    let total = 0;
    listaPrecos.forEach((item)=>{
        let newPreco = +item.slice(3).trim().replace(',','.');
        return total += newPreco
    })
    console.log(total)
}
limpaPreco()