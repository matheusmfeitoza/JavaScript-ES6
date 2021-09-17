## Regex

Toda expressão se inicia com o `//`;

Tenho como referencia a tabela unicode.

Exemplo:

```javascript
const regexp = /a/;
const frase = "Javascript";
console.log(frase.replace(regexp, "B")); // Ali substituirá o primeiro a por B
```

### Temos as Flags

Uma flag muda a forma como a expressão acontece;

Para usar a flag, usa-se `/expression/flag`

As flags são:

`g` - global, realiza a pesquisa em todo local disponivel, ou seja, na frase ou onde for inserido para busca.

`i` - Ignora o case sensitive, A , a serão a mesma coisa.

`m` - Funciona para todas as linhas, _multilinhas_

### Métodos de busca

Maneiras de busca:

`[]` - Passando o cochetes ele buscara ambos os termos dentro dele; Como por exemplo passando `[ab]` ele procurará pelas letras `a` e `b` na frase. Posso usar também para buscar caracteres especiais

`\` - Escapa um caractere, como por exemplo se eu quiser buscar `.` na frase, posso usar `[\.]`

`.` - Busca todo o conteúdo, menos quebra de linha

`[a-z]` - Vai selecionar tudo de a à z.

`[^]` - Nega a busca, por exemplo se eu quiser retirar todas as letras a da busca é so usar `[^a]`.

`\w` - Seleciona tudo o que é Alfa numerico, ou seja, mesma coisa de `[A-Za-z0-9_]`.

`\W` - Seleciona tudo o que não é Alfa numerico.

`\d` - Seleciona tudo que é digito.

`\D` - Seleciona tudo que não é digito.

`\s` - Seleciona tudo que é espaço, quebra de linha ou tab;

`\S` - Nega tudo que não for espaço.

`{3}` - Quantificador, posso usar para selecionar determinada quantidades, como por exemplo a palavra vaiiii, posso selecionar os 4 i de forma rápida usando, `i{4}` e também posso delimitar ou deixar a busca apartir de uma quantidade: `i{2,3} ou i{2,}`

`+` - Seleciona quando achar 1 ou mais ocorrencia, usando o exemplo acima selecionaria todos os "i"

`*` - Seleciona 0 ou mais ocorrencias

`?` - Busca opcional ligado a ultima letra

`|` - Busca 1 ou outro, como exemplo, `Brasil | Lobo`

`^` - Pegar somente no inicio como exemplo `^\w+` em matheus@gmail.com vai me retornar apenas matheus

`$` - Pega o item final.

`\n` - Pega as quebras de linhas

`\u` - Seleciona um unicode

## Substituições

`$&` - Mantém a palavra selecionada e adicionada o desejado.

`()` - Grupos de captura

`(?:)` - Ignora o grupo de captura

`(?=)` - Vai selecionar o que tiver antes do solicitado, como exemplo `\d(?=px)`
vai trazer os resultados do \d que tiverem antes de um px.

`(?!)` - Vai negar a busca, ou seja o contrário do `(?=)`
