// OBJETOS
let rl = require('readline-sync')

const pessoa = {
    nome: 'Amanda',
    idade: 15,
    genero: 'feminino',
    comidaFavorita: ['morango',' uva', 'batata'],
    falar: function () {
        falar = rl.question('O que falar?')
        console.log(`o que foi falado: ${falar}`)
    },
    melhorAmigo: {
    nome: 'Damis',
    idade: 15,
    corFavorita: ['azul', 'roxo']
    }
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos e suas comidas favoritas são ${pessoa.comidaFavorita[0]}, ${pessoa.comidaFavorita[1]} e ${pessoa.comidaFavorita[2]}. ${pessoa.nome} tem uma melhor amiga, o nome dela é ${pessoa.melhorAmigo.nome}, ela também tem ${pessoa.melhorAmigo.idade} anos e suas cores favoritas são ${pessoa.melhorAmigo.corFavorita[0]} e ${pessoa.melhorAmigo.corFavorita[1]}.`);

pessoa.idade = 16

console.log(`${pessoa.nome} tem ${pessoa.idade} anos e suas comidas favoritas são ${pessoa.comidaFavorita[0]}, ${pessoa.comidaFavorita[1]} e ${pessoa.comidaFavorita[2]}. ${pessoa.nome} tem uma melhor amiga, o nome dela é ${pessoa.melhorAmigo.nome}, ela também tem ${pessoa.melhorAmigo.idade} anos e suas cores favoritas são ${pessoa.melhorAmigo.corFavorita[0]} e ${pessoa.melhorAmigo.corFavorita[1]}.`);

console.log(pessoa);
console.log(pessoa['nome'])
console.log(pessoa.melhorAmigo);
console.log(pessoa.falar());