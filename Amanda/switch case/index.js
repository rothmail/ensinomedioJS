let paisDeOrigem = prompt('Qual seu país de origem?')

switch (paisDeOrigem) {
    case 'Brasil':
        console.log('Brasileiro')
        break
    case 'EUA':
        console.log('Norte Americano')
        break
    case 'Inglaterra':
        console.log('Inglês')
        break
    default:
        console.log('Nacionalidade não encontrada.')
}