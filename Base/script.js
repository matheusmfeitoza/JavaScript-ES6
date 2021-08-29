const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(`Primeiro valor do array: ${primeiroValor}`);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(`Último valor do array: ${ultimoValor}`)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe","Batata")
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
console.log(`Joana faz parte de estudantes? ${estudantes.includes('Joana') ? "Sim": "Não"}`)
// Verifique se Juliana faz parte dos estudantes
console.log(`Juliana faz parte de estudantes? ${estudantes.includes('Juliana')?'sim':'Não'}`)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
let removeSection = html.split('section');
console.log(removeSection)
let insereUL = removeSection.join('ul')
console.log(insereUL)
let removeDiv = insereUL.split('div')
console.log(removeDiv)
let insereLi = removeDiv.join('li')
console.log(insereLi)
//
//
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const arrayOriginal = carros.slice(0);
carros.pop();
console.log(arrayOriginal);
console.log(carros);