// 1.
let nome = Number(prompt('Informe sua idade: '));

if (idade >= 18) {
    console.log('Pode dirigir.')   
} else {
    console.log('Não pode dirigir.')
}

// 2.
let turno1 = prompt('Informe seu turno de estudo\n|| M/T/N ||')

if (turno === 'M') {
    console.log('Manhã. Bom dia')
} else if (turno === 'T') {
    console.log('Tarde. Boa tarde')
} else if (turno === 'N') {
    console.log('Noite. Boa noite')
} else {
    console.log('Turno não encontrado. Tente novamente.')
}
// 3.
let turno2 = prompt('Informe seu turno de estudo\n|| M/T/N ||')

switch (turno2) {
    case 'M':
        console.log('Manhã. Bom dia!')
        break
    case 'T':
        console.log('Tarde. Boa tarde!')
        break
    case 'N':
        console.log('Noite. Boa noite!')
        break
    default:
        console.log('Turno não encontrado. Tente novamente')
}

// 4.
let generoFilme = prompt("Informe o gênero do filme: ");

let valorIngresso = Number(prompt("Informe o valor do ingresso: "));

if (generoFilme === "Fantasia") {
  if (valorIngresso <= 15) {
    console.log("Boa sessão!");
  } else {
    console.log("Não há dinheiro suficiente.");
  }
} else {
  console.log("Não há este gênero de filme no catálogo.");
}