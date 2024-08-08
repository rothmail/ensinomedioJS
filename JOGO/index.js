const rl = require('readline-sync');

// VARIÁVEIS GLOBAIS
let vida

// MENU
function menu() {
    console.log('|| Seja-bem vindo/a!\n|| Ajude Farida abaroge, atleta de atletismo a chegar nas olimpíadas de Paris 2024!')
    console.log('_________||Ações||_________')
    console.log('|| 1. Explorar           ||')
    console.log('|| 2. Coletar Itens      ||')
    console.log('|| 3. Interagir          ||')
    console.log('|| 4. Desafio            ||')
    console.log('|| 5. Abrir inventário   ||')
    console.log('|| 6. Visualizar dados   ||')
    console.log('|| 7. Saber mais         ||')
    console.log('|| 0. Sair do jogo       ||')
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
let opcao = rl.question('Escolha uma das ações!')

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
// função para explorar
function explorar() {
    console.log('oi')
}

// função para coletar itens
function coletarItem() {
    console.log('oi')
}

// função para interagir com NPCs
function interagir() {
    console.log('oi')
}

// função para enfrentar desafios
function enfrentarDesafio() {
    console.log('oi')
}

// função para abrir o inventário
function abrirInventario() {
    console.log('oi')
}

// função para abrir o inventário
function visualizarDados() {
    console.log('oi')
}

// função para abrir o inventário
function abrirInventario() {
    console.log('oi')
}

// função para saber mais sobre o jogo
function saberMais() {
    console.log('oi')
}