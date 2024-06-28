let num1 = Number(prompt('Informe o primeiro número: '))
let num2 = Number(prompt('Informe o segundo número: '))

function comparar() {
    if (num1 === num2) {
        console.log('Estes números são iguais')
    } else if (num1 > num2) {
        console.log(`${num1} é maior que ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num1} é menor que ${num2}`)
    }
}
comparar()