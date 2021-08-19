# JavaScript ES6

Curso da Origamid sobre JS;

## JavaScript para Iniciantes

### Softwares básicos:

    - VSCode
    - Node
    - Git

## Variáveis

Responsáveis por guardar dados na memória.

Formas de criar uma variável:

```js
var nome = "Matheus";

let idade = 26;

const sexo = "Masculino";
```

Formas de nomear uma variável:

- Usando o CamelCase: Primeiro nome em minusculo e a primeira letra do segundo nome maiúsculo. Exemplo:

```js
var mudarIdade;
```

- Com $ ou \_ antes do nome. Exemplo:

```js
var _novoMes ou var $novoMes;
```

Formas de não se escrever uma variável:

- Usar número antes do nome. Exemplo:

```js
var 1nome;
```

- Usar palavras reservadas, podemos consultar todas as [palavras reservadas aqui](https://www.w3schools.com/js/js_reserved.asp). Exemplo:

```js
var function;
```

Hoisting:

As variáveis são modidas para cima do cógido, porém seus valores atribuídos não. Exemplo:

```js
console.log(idade);
// Saída é undefined;
var idade = 18;
console.log(idade);
// Saída é 18;
```

Mudar valor atribuído:

Podemos mudar os valores atribuídos tanto para let e para var mas para const não, pois seu próprio nome já diz, é uma constante.

Exercício 1:

```js
// Declarar uma variável com o seu nome:

var nome = 'Matheus';

// Declarar uma variável com a sua comida favorita e não atribuír valor:

var comidaFavorita;

// Atribuír valor a sua comida favorita:

comidaFavorita = "Lasanha";

// Declarar 5 variáveis diferentes sem valores;

var cor, tipoDeRegistro;
let nomeDoCarro, numeroDeFilmes;
const anoNascimento;
```

Tipos de dados:

Todos são primitivos, exceto objetos, vejamos abaixo:

```js
var nome = "Matheus"; //String
var idade = 26; // Number
var possuiFaculdade = true; //Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object
```

É possível verificar o tipo de uma variável usando o `typeof`;

Soma de strings:

Somar uma string é o mesmo que concatenar;

```js
var nome = "Matheus",
  sobrenome = "Marinho";
console.log(nome + sobrenome);
// Saída é "MatheusMarinho";
```

Template Strings:

Usa-se a crase para simplificar a forma de juntar váriaveis com texto, usando o `${}`;

Exemplo:

```js
let nome = "Matheus";
console.log(`O nome dele é: ${nome}`);
```

Exercício 2:

```js
// Declare uma variável contendo ua string:

var nome = "Matheus";

// Declare uma variável contenduo um número dentro de uma string:

var numero = "20";

// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as duas:

var nome = "Matheus",
  sobrenome = "Marinho";
console.log(nome + sobrenome);

// Coloque a seguinte frase em uma variável: It's time;

var frase = "It's time";
console.log(frase);
// Saída: It's time;

// Verifique o tipo da variável que contém o seu nome:

console.log(typeof nome);
// Saída: String;
```

Números e operadores:

- Soma = `+`;

- Subtração = `-`;

- Multiplicação = `*`;

- Divisão = `/`;

- Módulo = `%`;

- Igualdade = `=`

Exercício 3:

```js
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
//Saída: total = 35

//Crie duas expressões que retornem NaN

var notNumber1 = "abc22" + 10;

var notNumber2 = "22c" - 20;

//Somar a string '200' com o número 50 e retornar 250;

var total = +"200" + 50;

//Incremente o número 5 e retorne o seu valor incrementado

var incremento = 5;
incremento++;
// Saída: 6;

// Como dividir o peso por 2:
/* var numero = '80';
   var unidade = 'kg';
   var peso = numero + unidade;
   var pesoPorDois = peso / 2;
*/
var numero = +'80" / 2;
```

Boolean e Condicionais:

Boolean são valores verdadeiros ou falsos, representados por `true` ou `false`;

Exemplo:

```js
var estouDoente = false;
```

As codicionais representão as condições, neste caso agora veremos o `if` e `else`

O `if` é equivalente ao `SE`, e usamos eles para condições booleanas.
`if`(`condição booleana`){`saída de código`}.

O `else` é equivalente ao `SENAO`, ou seja, caso o `SE` não atenda a saída será sempre o `SENAO`.
`else`{`saída de código`};

Temos também o `else if` que é o `SENAO SE` usado para atender várias saídas booleanas, ou seja, caso eu tenho mais de uma saída em que minha condição booleana possa atender, usamos o `else if`.
`else if`(`condição lógica`){`saída de código`}.

Exemplo:

```js
let possuiConvenioMedico = true;

if (possuiConvenioMedico) {
  console.log("Possui convênio médico!");
} else if (possuiConvenioMedico === "") {
  console.log("Informação vazia");
} else {
  console.log("Sem convênio médico");
}
```

Exercício 4:

```js
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 26;
let idadeParente = 40;

if (minhaIdade > idadeParente) {
  console.log("É maior!!");
} else if (idadeParente > minhaIdade) {
  console.log("É menor!!");
} else {
  console.log("É igual!!");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;

// Saída: 3;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil maior que china");
} else {
  console.log("China maior que Brasil");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
//Cão
```

Funções

Exercício 5:

```js
// Crie uma função para verificar se um valor é Truthy

function verificaTruthy(valor) {
  if (!!valor === false) {
    return "É Falsy";
  } else {
    return "É Truthy";
  }
}
console.log(verificaTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(valor) {
  let total = valor * 4;
  return total;
}
console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function retornarNomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(retornarNomeCompleto("Matheus", "Marinho"));

// Crie uma função que verifica se um número é par

function validarNumeroPar(numero) {
  if (numero % 2 === 0) {
    return "Número par";
  } else {
    return "Número impar";
  }
}
console.log(validarNumeroPar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retornoTipoDado(dado) {
  return typeof dado;
}
console.log(retornoTipoDado(123));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Matheus Marinho");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
```

## Objetos

Exercício 6:

```js
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
  nome: "Matheus",
  sobrenome: "Marinho",
  idade: 26,
  cidade: "Betim",
  cargo: "Analista de Sistemas",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: "Labrador",
  idade: 10,
  cor: "preto",
  latir(value) {
    if (!!value === true) {
      return "Cachorro latindo";
    } else {
      return "Cachorro sem latir";
    }
  },
};
```

## Arrays e Loops

Exercício 7:

````js
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const anosBrasilCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de $```{ano}`
for (let i = 0; i < anosBrasilCopa.length; i++) {
  console.log(`O Brasil ganhou a copa do ano ${anosBrasilCopa[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.lenght - 1];
````

## Atribuição e ternário

Exercício 8:

```js
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito =
  possuiCarro && possuiCasa
    ? "Crédito concedido"
    : "Sem limite de crédito disponível";
```

## Escopo

ESCOPO DE FUNÇÃO

Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

Exemplo:

```js
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined
```

VARIÁVEL GLOBAL (ERRO)

Declarar variáveis sem a palavra chave `var`, `const` ou `let`, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

Exemplo:

```js
function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
```

ESCOPO DE BLOCO

Variáveis criadas com `var`, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando `const` e `let`, pois estas respeitam o escopo de bloco.

Exemplo:

```js
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro
```

Exercício 9 :

```js
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);

//Por tentar acessar variáveis dentro do escopo estando fora dele e também por estar dando console.log em uma palavra reservada, var.;

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// ALevando o const dois para fora do escopo local, atigindo o escopo global.

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Alterando o primeito var numero para const numero e o segundo, no for para let;
```
