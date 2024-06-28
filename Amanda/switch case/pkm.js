let pokemon = prompt('Qual é esse pokemon?')

switch (pokemon) {
    case 'Bulbassauro':
        console.log('Planta e veneno')
        break
    case 'Charmander':
        console.log('Fogo')
        break
    case 'Squirtle':
        console.log('Água')
        break
    default:
        console.log('Pokemon não encontrado.')
}