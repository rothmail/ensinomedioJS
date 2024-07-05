// 1.
let nomeDoUsuario = prompt('Informe seu nome:')
let emailDoUsuario = prompt('Informe seu email:')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2.
let comidasFavoritas = ['batata', 'salmão', 'chocolate', 'morango', '7belo :)']

console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas preferidas:\n${comidasFavoritas[0]}\n${comidasFavoritas[1]}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)

let comidaFavoritaUsuario = prompt('Informe sua comida favorita:')

comidasFavoritas[1] = comidaFavoritaUsuario

console.log(comidasFavoritas)

// 3.
let listaDeTarefas = []
listaDeTarefas[0] = prompt('Informe a primeira tarefa a fazer:')
listaDeTarefas[1] = prompt('Informe a segunda tarefa a fazer:')
listaDeTarefas[2] = prompt('Informe a terceira tarefa a fazer:')

console.log(listaDeTarefas)

let realizada = Number(prompt('Informe o índice das tarefas realizadas:'))
console.log(listaDeTarefas.splice(realizada, 1), listaDeTarefas)