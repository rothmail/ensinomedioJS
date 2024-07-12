// 1.
/*
let qntdPets = Number(prompt('Informe a quantidade de pets:'))
let nomePets = []

if (qntdPets === 0) {
    console.log('Que pena! Você pode adotar um pet!')
}

if (qntdPets > 0) {
    for (let i = 0; i < qntdPets; i++) {
        nomePets[i] = prompt('Informe o nome dos seus pets:')
    }
    console.log(`Nomes de seus pets: ${nomePets}`)
}
*/

// 2.
let arrayOriginal = [10, 20, 30, 40, 50];

console.log('Valores do array original:');
for (let valor of arrayOriginal) {
    console.log(valor);
}

console.log('\nValores do array original divididos por 10:');
for (let valor of arrayOriginal) {
    console.log(valor / 10);
}

const arrayPares = [];
for (let valor of arrayOriginal) {
    if (valor % 2 === 0) {
        arrayPares.push(valor);
    }
}
console.log('\nNúmeros pares do array original:');
console.log(arrayPares);


const arrayString = [];
for (let [indice, valor] of arrayOriginal.entries()) {
    arrayString.push(`O elemento do índice ${indice} é: ${valor}`);
}
console.log('\nArray de strings formatadas:');
console.log(arrayString);

let numMaior = arrayOriginal[0];
let numMenor = arrayOriginal[0];

for (let valor of arrayOriginal) {
    if (valor > numMaior) {
        numMaior = valor;
    }
    if (valor < numMenor) {
        numMenor = valor;
    }
}

console.log(`\nO maior número é: ${numMaior}`);
console.log(`O menor número é: ${numMenor}`);