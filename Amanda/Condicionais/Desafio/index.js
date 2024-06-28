// 1.
let topaAssistir = prompt('Quer assistir um filme?\n|| S/N ||')

if (topaAssistir === "S") {
    let generoFilme = prompt("Informe o gênero do filme: ");
    if (generoFilme === "Fantasia") {
        let valorIngressoFilme = Number(prompt("Informe o valor do ingresso: "));
        if (valorIngressoFilme <= 15) {
            let lanchinho = prompt("Informe o lanchinho desejado: ");
            console.log(`Bom filme e aproveite seu/sua ${lanchinho}`);
        } else {
            console.log('Dinheiro insuficiente.')
        }
    } else {
      console.log("Não há tal gênero no catálogo.");
    }
}

// Desafio 2.
// informações fornecidas pelo usuário
let nomeCompleto = prompt("Informe seu nome:");
let tipoJogo = prompt(
  "Informe o tipo de jogo:\n|| DO (doméstico) - IN (internacional) ||"
); // IN para internacional, DO para doméstico
let etapaJogo = prompt(
  "Informe a etapa do jogo:\n|| SF - semifinal||\n||DT - decisão de terceiro lugar||\n||FI - final ||"
); // SF para semifinal, DT para decisão de terceiro lugar, FI para final
let categoria = Number(prompt("Informe a catergoria")); // 1, 2, 3 ou 4
let quantidadeIngressos = Number(prompt("Informe a quantidade de ingressos:"));

// etapa de jogo e tipo de jogo variam o valor do ingresso
let valorIngresso;
switch (etapaJogo) {
  case "SF":
    switch (categoria) {
      case 1:
        valorIngresso = 1320;
        break;
      case 2:
        valorIngresso = 880;
        break;
      case 3:
        valorIngresso = 550;
        break;
      case 4:
        valorIngresso = 220;
        break;
      default:
        console.log("Categoria de ingresso inválida.");
        break;
    }
    break;
  case "DT":
    switch (categoria) {
      case 1:
        valorIngresso = 660;
        break;
      case 2:
        valorIngresso = 440;
        break;
      case 3:
        valorIngresso = 330;
        break;
      case 4:
        valorIngresso = 170;
        break;
      default:
        console.log("Categoria de ingresso inválida.");
        break;
    }
    break;
  case "FI":
    switch (categoria) {
      case 1:
        valorIngresso = 1980;
        break;
      case 2:
        valorIngresso = 1320;
        break;
      case 3:
        valorIngresso = 880;
        break;
      case 4:
        valorIngresso = 330;
        break;
      default:
        console.log("Categoria de ingresso inválida.");
        break;
    }
    break;
  default:
    console.log("Etapa do jogo inválida.");
    break;
}

// jogo internacional = ingresso mais caro
// valor do ingresso normal vzs o valor do dolar
if (tipoJogo === "IN") {
  //valorIngresso *= 4.10;
  //let valorInternacional = valorIngresso * 4.10
  valorIngresso = valorIngresso * 4.1;
}

// total a ser pago
let valorTotal = valorIngresso * quantidadeIngressos;

// informações da compra de ingresso
console.log(`|| Nome: ${nomeCompleto} ||`);
console.log(
  "|| Tipo de jogo: " + (tipoJogo === "IN" ? "Internacional" : "Doméstico"),
  " ||"
);
console.log(
  "|| Etapa do jogo: " +
    (etapaJogo === "SF" ? "Semifinal" : etapaJogo === "DT"),
  " ||"
);
console.log(`|| Categoria: categoria ||`);
console.log(`|| Quantidade de ingressos: quantidadeIngressos ||`);
console.log(`||Valor do ingresso: R$ ${valorIngresso.toFixed(2)} ||`);
console.log(`||Valor total a ser pago: R$ ${valorTotal.toFixed(2)} ||`);