/*
1.
let array
console.log('a. ', array) // valor não atribuído, undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

2.
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Subi num ônibus em Marrocos = SUBI NUM ÔNIBUS EM MIRROCOS 27
*/