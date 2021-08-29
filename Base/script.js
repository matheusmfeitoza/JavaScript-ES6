// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);
const retornoCompleto = cursosArray.map((item)=>{
    const titulo = item.querySelector('h1').innerHTML;
    const descricao = item.querySelector('p').innerHTML;
    const aulas = item.querySelector('.aulas').innerHTML;
    const horas = item.querySelector('.horas').innerHTML;
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})
console.log(retornoCompleto)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaior = numeros.filter((item)=>{
    return item > 100;
})
console.log(`Números maior que 100: ${numerosMaior}`)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixoNaLista = instrumentos.some((item)=>{
    return item === 'Baixo';
})
console.log(baixoNaLista)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorFinal = compras.reduce((acumulador,valor)=>{
   const precoLimpo = +valor.preco.replace('R$ ','').replace(',','.');
   return acumulador + precoLimpo; 
},0)
console.log(valorFinal)