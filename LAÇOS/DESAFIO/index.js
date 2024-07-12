// Desafio
let numInformado = Number(prompt('Informe um número:\n||Outro jogador deve adivinhá-lo||:'))
let contador = 0;

console.log('Vamos jogar!')

let numPart
while (numInformado != numPart) {
    numPart = Number(prompt('Adivinhe o número:'))
    if (numInformado === numPart) {
        contador++
        console.log(`O número chutado foi: ${numPart}`)
        console.log('Acertou!')

    } else if (numPart > numInformado) {
        console.log(`O número chutado foi: ${numPart}`)
        console.log('O número é menor')
        contador++

    } else if (numPart < numInformado) {
        console.log(`O número chutado foi: ${numPart}`)
        console.log('O número é maior')
        contador++
    }

}
console.log(`Número de tentativas: ${contador}`)