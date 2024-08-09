const rl = require('readline-sync');

// VARIÁVEIS GLOBAIS
let vida
let inventario = []

// MENU
function menu() {
    console.log('|| Seja-bem vindo/a!\n|| Ajude Farida Abaroge,\natleta de atletismo a chegar\nnas olimpíadas de Paris 2024!')
    console.log('_________||Ações||_________')
    console.log('|| 1. Explorar           ||')
    console.log('|| 2. Coletar Itens      ||')
    console.log('|| 3. Interagir          ||')
    console.log('|| 4. Desafio            ||')
    console.log('|| 5. Abrir inventário   ||')
    console.log('|| 6. Visualizar dados   ||')
    console.log('|| 7. Saber mais         ||')
    console.log('|| 0. Sair do jogo       ||')
    console.log('**Algumas ações devem ser\nexecutadas para o jogo ter\ncontinuidade**')
}
menu()
/*
// Função com loop para repetir o menu
function main () {
    let encerrar = false;
    while (!encerrar) {
        menu()
        let opcao = rl.question('Digite a opção desejada:');
        encerrar = escolhaMenu(opcao)
    }
}
*/
let opcao = rl.question('Escolha uma das acoes!')

// Escolha da ação da personasgem
function escolhaMenu(opcao) {
    switch(opcao) {
        case 1:
            explorar()
            break
        case 2:
            coletarItem()
            break
        case 3:
            interagir()
            break
        case 4:
            enfrentarDesafio()
            break
        case 5:
            abrirInventario()
        case 6:
            visualizarDados()
            break
        case 7:
            saberMais()
            break
        case 0:
            encerrarJogo()
    }
}


// FUNÇÕES
// OPÇÃO 1 - função para explorar
function explorar() {
    // etiópia (jimma), egito, sudão, frança
    console.log('Vamos explorar alguns locais!')
    let explorarJimma = rl.question('Farida nasceu em Jimma, Etiopia, deseja visitar a cidade (Este e o ponto de partida, caso escolha "nao", nao sera possivel avançar o nivel)? (S|N)')

    if (explorarJimma === 'S') {
        console.log('Explorando Jimma voce conquistou:\n|| +Nostalgia\n|| 10+Vida')
        console.log(inventario.push('Nostalgia'))

        coletarItem()
    } else {
        console.log('Não e possível avançar o nível. Tente novamente!')
    }
}

// OPÇÃO 2 - função para coletar itens
function coletarItem() {
    console.log('oi')
}

// OPÇÃO 3 - função para interagir com NPCs
function interagir() {
    console.log('oi')
}

// OPÇÃO 4 - função para enfrentar desafios
function enfrentarDesafio() {
    console.log('oi')
}

// OPÇÃO 5 - função para abrir o inventário
function abrirInventario() {
    console.log(inventario)
}

// OPÇÃO 6 - função para abrir o inventário
function visualizarDados() {
    console.log('oi')
}

// OPÇÃO 7 - função para saber mais sobre o jogo
function saberMais() {
    console.log('________| O JOGO |________')
    console.log('O jogo acompanha a trajetória de Farida Abaroge até as Olimpíadas de Paris 2024')

    console.log('____| FARIDA ABAROGE |____')
    console.log('|| Farida Abaroge de 30 anos e atleta olimpica de atletismo, participando da corrida de 100 metros.\n A atleta fugiu de seu pais por questoes de conflitos e viajou por paises como: Sudao, Egito e por fim Franca.')

    console.log('_________| ACOES |_________')
    console.log('|| Explorar - viaje para os países, Coletar Itens, Interagir, Desafio, Abrir inventário,Visualizar dados, Saber mais, Sair do jogo')
}
