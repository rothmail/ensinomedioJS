const rl = require('readline-sync');

// variavel checkpoint, adiciona 1 a cada fase, se perder. volta para 

let resposta;
let opcao;

let energia = 100; // Energia da personagem
let checkpoint // Último momento salvo do jogo
let itens = []; // Array para guardar os itens

const acessorios = [
    'Tênis de corrida', 'Dieta nutritiva', 'Massagem de recuperação',
    'Resistência adicional', 'Aumento de velocidade', 'Energia extra', 'Estratégia'
]; // Acessórios necessários

let jogoAtivo = true; // Loop para o jogo continuar

function mostrarMenu() {
    console.log(`
    __|| Escolha uma opção: ||__
    ||                        ||
    || 1. Explorar a Etiópia; ||
    || 2. Explorar o Quênia   ||
    || 3. Explorar a França   ||
    || 5. Exibir status       ||
    || 6. Carregar Checkpoint ||
    || 0. Sair                ||
    ||________________________||
    `);
}

// Função para iniciar o jogo
function iniciarJogo() {
    console.log('Bem-vindo ao jogo! Ajude Farida Abaroge a chegar nas Olimpíadas de Paris 2024!!!');

    while (jogoAtivo) {
        mostrarMenu();
        opcao = rl.questionInt('Numero da opcao desejada (Para uma melhor experiencia siga a ordem do menu):');

        switch (opcao) {
            case 1:
                explorarEtiopia();
                break;
            case 2:
                explorarQuenia();
                break;
            case 3:
                treinarFranca();
                break;
            case 4:
                salvarCheckpoint();
                break;
            case 5:
                exibirStatus();
                break;
            case 6:
                salvarCheckpoint();
                break;
            case 0:
                console.log('Encerrando...');
                jogoAtivo = false;
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

// Função de checkpoint

function salvarCheckpoint() {
    checkpoint = {
        energia,
        itens: itens.slice(),
    };
    console.log('Checkpoint salvo com sucesso!');
}

/*
function salvarCheckpoint() {
    if (checkpoint) {
        energia = checkpoint.energia;
        itens = checkpoint.itens.slice();
        console.log('Checkpoint carregado com sucesso!');
    } else {
        console.log('Nenhum checkpoint salvo encontrado.');
    }
}
*/

// Função que verifica quanto há de energia disponível
function verificarCansaco() {
    if (energia <= 0) {
        
        console.log('Você está exausta. Fim de jogo.');
        jogoAtivo = false; // Encerrar o jogo
    }
}

// Função para verificar se todos os itens necessários foram coletados
function verificarCompeticao() {
    let todosItensColetados = true;
    for (let item of acessorios) {
        if (!itens.includes(item)) {
            todosItensColetados = false;
            break;
        }
    }
    if (todosItensColetados) {
        console.log('Parabéns! Farida está pronta para competir nas Olimpíadas de Paris 2024!');
        jogoAtivo = false; // Encerrar o jogo
    } else {
        console.log('Farida não está pronta para competir nas Olimpíadas de Paris 2024.');
        console.log('Você perdeu!');
        jogoAtivo = false; // Encerrar o jogo
    }
}

// Função para explorar a Etiópia
function explorarEtiopia() {
    if (!jogoAtivo) return;

    console.log(`
        Vamos explorar alguns países da história de Farida!
    Aos seis anos Farida decidiu ser atleta olímpica e hoje ela está a caminho da competição.
    Ela deve conseguir alguns itens, ajude-a!
    Farida começou sua jornada na Etiópia, vamos para lá!
    ...
    || NA ETIÓPIA
    `);

    interagirComNPCetiopia();
    verificarCansaco(); // verifica quantidade de energia de farida
}

// Função para interagir com NPCs na Etiópia
function interagirComNPCetiopia() {
    console.log('Na Etiópia, Farida encontra seus primeiros treinadores.');
    let visitaEtiopia = rl.question('Eles querem ajuaá-la a melhorar suas habilidades. Deseja conversar com eles? S|N').toUpperCase();
    if (visitaEtiopia == 'S') {
        console.log('Vamos lá!');

        resposta = rl.question('Um treinador está oferecendo um plano de treinamento especializado. Deseja aceitar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou um par de tênis de corrida.');
            itens.push('Tênis de corrida');
        } else {
            console.log('Você perdeu a chance de melhorar suas habilidades.');
            energia -= 20;
        }

        resposta = rl.question('Outro treinador oferece uma dieta especial. Aceitar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou uma dieta nutritiva.');
            itens.push('Dieta nutritiva');
        } else {
            console.log('Você perdeu a chance de ganhar energia extra.');
            energia -= 20;
        }

        resposta = rl.question('Um fisioterapeuta oferece sessões de recuperação. Aceitar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou uma massagem de recuperação.');
            itens.push('Massagem de recuperação');
        } else {
            console.log('Você perdeu a chance de melhorar sua recuperação.');
            energia -= 20;
        }
    } else {
        console.log('Você decidiu não falar com os treinadores. Isso resultará na perda de muita energia.');
        energia -= 30;
    }
    verificarCansaco(); // Verifica quantidade de energia de Farida

    if (!jogoAtivo) return; // Se o jogo não estiver ativo, retorna

    console.log('Depois de um tempo, Farida decide que precisa treinar em outro país para se preparar melhor.');
    console.log('Ela e sua equipe decidem que o próximo passo é ir para o Quênia.');
}

// Função para treinar no Quênia
function explorarQuenia() {
    if (!jogoAtivo) return;

    console.log(`
        Agora vamos treinar no Quênia!
    Quênia conta com ótimos treinadores e serviços para atletas, vamos aproveitar
    ...
        || NO QUÊNIA!
    `);

    interagirComNPCquenia();
    verificarCansaco();
}

// Função para interagir com NPCs no Quênia
function interagirComNPCquenia() {
    console.log('No Quênia, Farida conhece treinadores especializados em corrida de longa distância.');
    resposta = rl.question('Eles querem ajuda-la a se preparar para as Olimpiadas. Deseja aceitar? S|N').toUpperCase();
    if (resposta == 'S') {
        console.log('Vamos lá!');

        resposta = rl.question('Um treinador oferece um programa de altitude. Deseja participar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou resistência adicional.');
            itens.push('Resistência adicional');
        } else {
            console.log('Você perdeu a chance de ganhar mais resistência.');
            energia -= 20;
        }

        resposta = rl.question('Outro treinador sugere um plano de treinamento intensivo. Aceitar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou um aumento de velocidade.');
            itens.push('Aumento de velocidade');
        } else {
            console.log('Você perdeu a chance de melhorar sua velocidade.');
            energia -= 20;
        }

        resposta = rl.question('Um nutricionista oferece uma nova suplementação. Aceitar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou energia extra.');
            itens.push('Energia extra');
        } else {
            console.log('Você perdeu a chance de melhorar sua energia.');
            energia -= 20;
        }
    } else {
        console.log('Você decidiu não falar com os treinadores. Isso resultará na perda de muita energia.');
        energia -= 30;
    }
    verificarCansaco(); // Verifica quantidade de energia de Farida

    if (!jogoAtivo) return; // Se o jogo não estiver ativo, retorna

    console.log('Farida percebe que está quase pronta, mas ainda precisa de mais preparação antes de competir.');
    console.log('Ela decide ir para a França para finalizar seu treinamento.');
}

// Função para treinar na França
function treinarFranca() {
    if (!jogoAtivo) return;

    console.log(`
        Agora vamos treinar na França!
    A França conta com programas exclusivos para atletas refugiados, vamos aproveitar
    ...
    || NA FRANÇA
    Na França, Farida está muito perto de realizar seu sonho de competir nas Olimpíadas de Paris 2024`
    );

    interagirComNPCfranca();
    verificarCansaco(); // Verifica se o jogador "cansou" após interagir com NPCs

    if (jogoAtivo) { // Verifica se o jogador está ativo
        verificarCompeticao(); // Verifica se todos os itens foram coletados para competir
    }
}

// Função para interagir com NPCs na França
function interagirComNPCfranca() {
    console.log('Na França, Farida conhece treinadores olímpicos que podem levá-la ao próximo nível.');
    resposta = rl.question('Eles querem ajuda-la a se preparar para as Olimpiadas. Deseja aceitar? S|N').toUpperCase();
    if (resposta == 'S') {
        console.log('Vamos lá!');

        let resposta = rl.question('Um treinador olímpico oferece sessões de treinamento final. Aceitar? S|N').toUpperCase();
        if (resposta == 'S') {
            console.log('Ótimo! Você ganhou uma estratégia de corrida.');
            itens.push('Estratégia');
        }
        if (energia <= 0) {
            salvarCheckpoint();
        }
    }
    verificarCansaco();
}

iniciarJogo();
