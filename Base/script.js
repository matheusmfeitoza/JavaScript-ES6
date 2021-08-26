// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}
Pessoas.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome;
}
const matheus = new Pessoas("Matheus","Marinho",26);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
// NodeList = entries, forEach, item, keys e values
// HTMLCollection = item, length e namedItem
// Document = Uma lista enorme. Para ver vá no console e digite Documento.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
// HTMLLIElement() { [native code] }
li.click;
// Function() { [native code] }
li.innerText;
//String() { [native code] }
li.value;
// Number() { [native code] }
li.hidden;
// Boolean() { [native code] }
li.offsetLeft;
// Number() { [native code] };
li.click();
// Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//String
