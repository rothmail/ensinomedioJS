//ESCRITA
 
// function quemEuSou(){
// const nome = "Amanda"
// const idade = 15
// const cidade = "São Leoplodo"
// const profissao = "Estudante"

// console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
 
// quemEuSou()
 
// function quemEuSou(nome, idade, cidade, profissao) {
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
//   }
 
//   const nome = prompt("Qual é o seu nome?");
//   const idade = Number(prompt("Qual é a sua idade?"));
//   const cidade = prompt("Onde você mora?");
//   const profissao = prompt("Qual é a sua profissão?");
 
//   const mensagem = quemEuSou(nome, idade, cidade, profissao);
//   console.log(mensagem);
 
 
// function soma(a,b){
//     let soma = a + b
//     console.log(`A soma de ${a} + ${b} = ${soma}`)
//     return soma
// } function comparação(a,b){
// if(a > b){
//     console.log(` ${a} é maior que ${b} `)
//     return true
// } else {
//     console.log(` ${a} não é maior que ${b} `)
//     return false
//     }
// }function epar(a,b) {
//     if(a % 2 === 0 || b % 2 === 0){
//         console.log(`Um deles é par`)  
//         return true
//     } else {
//         console.log(`Nenhum deles é par`)
//         return false
// }
 
// soma(1,2)
// comparação(1,2)
// epar(1,2)
// function mensagem() {
//     let frase = "Meu nome é pedro e tenho 16 anos"
//     return frase
 
   
// }
// console.log(mensagem().toUpperCase())
// console.log(mensagem().length)
 
// function soma(a,b) {
//     let soma = a + b
//     console.log(`A soma de ${a} + ${b} = ${soma}`)
//     return soma
// } function subtração(a,b) {
//     let sub = a - b
//     console.log(`A subtração de ${a} - ${b} = ${sub}`)
//     return sub
// } function multiplicação(a,b) {
//     let mult = a * b
//     console.log(`A multiplacação de ${a} * ${b} = ${mult}`)
//     return mult
// } function divisão(a,b) {
//     let div = a / b
//     console.log(`A divisão de ${a} / ${b} = ${div}`)
//     return div
// }
 
// const a = Number(prompt("Digite o primeiro numero:"));
// const b = Number(prompt("Digite o segundo numero:?"));

// soma(a,b)
// subtração(a,b)
// multiplicação(a,b)
// divisão(a,b)

// desafio
// function pitagoras(a, b) {
//   let hipotenusa = Math.sqrt(a**2 + b**2);
//   console.log(`A hipotenusa de ${a} e ${b} = ${hipotenusa}`);
//   return hipotenusa;
// }
// const a = Number(prompt("Digite o primeiro cateto:"));
// const b = Number(prompt("Digite o segundo cateto:"));
// pitagoras(a, b);


// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console? Ele receberá o valor de 2 e multiplicará po 5 e exibira o resultado e depois ele fará a mesma coisa com o 10

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
//e `minhaFuncao(10)`? O que apareceria no console? Não apareceria nada.


// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a.Explique o que essa função faz e qual é sua utilidade? ela irá pedir um texto ao usuário e retornar escrito tudo minusculo se o texto contém a palavra cenoura
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    //  i.   `Eu gosto de cenoura`  Irá deixar tudo minusculo porém não irá dar console.log na frase para exibir-la nenhum valor só falando que o valor boolean é `true`
    //  ii.  `CENOURA é bom pra vista`  Irá deixar tudo minusculo porém não irá dar console.log na frase para exibir-la nenhum valor só falando que o valor boolean é `true`
    //  iii. `Cenouras crescem na terra`  Irá deixar tudo minusculo porém não irá dar console.log na frase para exibir-la nenhum valor só falando que o valor boolean é `true`
