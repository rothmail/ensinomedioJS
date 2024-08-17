let energia = 100; // Energia da personagem
let resposta;
let itens = []; // Array para guardar os itens
const acessorios = ['Tênis de corrida', 'Dieta nutritiva', 'Massagem de recuperação', 'Resistência adicional', 'Aumento de velocidade', 'Energia extra', 'Estratégia']; // Acessórios necessários

let jogoAtivo = true; // Variável para controlar o loop do jogo

function exibirMenu() {
    console.log(`
    _______| Menu de opções |_______
    ||                            ||
    || 1. Explorar Etiópia        ||
    || 2. Explorar Quênia         ||
    || 3. Explorar França         ||
    || 0. Encerrar                ||
    ||____________________________||

        => IMPORTANTE! Siga a ordem do menu para melhor experiência
    `);
}

function main() {
    while (jogoAtivo) {
        exibirMenu();
        let opcao = Number(prompt('Opção desejada: '));
        escolha(opcao);
    }
}

function escolha(opcao) {
    switch (opcao) {
        case 1:
            treinarEtiopia();
            break;
        case 2:
            treinarQuenia();
            break;
        case 3:
            treinarFranca();
            break;
        case 0:
            console.log('Encerrando o jogo...');
            jogoAtivo = false;
            break;
        default:
            console.log('Opção inválida');
    }
}

// Função que verifica a energia
function verificarEnergia() {
    if (energia <= 0) {
        console.log("Farida está exausta. Fim de jogo.");
        console.log('Encerrando o jogo...');
        jogoAtivo = false; // Encerrar o jogo
    }
}

// Função para verificar se todos os itens necessários foram coletados
function verificarCompeticao() {
    let todosItensColetados = acessorios.every(item => itens.includes(item));
    
    if (todosItensColetados) {
        console.log("Parabéns! Você coletou todos os itens necessários e está pronta para competir nas Olimpíadas de Paris 2024!");
    } else {
        console.log("Você não possui todos os itens necessários para competir nas Olimpíadas.");
        console.log("Sua jornada terminou aqui.");
    }
    jogoAtivo = false; // Encerrar o jogo
}

// Função para validar a resposta e atualizar a energia
function validarResposta(pergunta) {
    do {
        resposta = prompt(pergunta).toUpperCase();
        if (resposta === 'N') {
            energia -= 20;
            verificarEnergia(); // Chama a função para verificar se o jogo deve terminar
            if (!jogoAtivo) return null; // Interrompe imediatamente se o jogo acabou
            console.log('Você perdeu 20 de energia. Energia atual:', energia);
        } else if (resposta === 'S') {
            energia = Math.min(energia + 10, 100); // Garante que a energia não passe de 100
            console.log('Você ganhou 10 de energia. Energia atual:', energia);
        }
    } while (resposta !== 'S' && jogoAtivo);

    return resposta;
}

// Função para treinar na Etiópia
function treinarEtiopia() {
    if (!jogoAtivo) return;

    console.log(`
    Vamos explorar alguns países da história de Farida!
    Aos seis anos, Farida decidiu ser atleta olímpica e hoje ela está a caminho da competição.
    Ela deve conseguir alguns itens, ajude-a!
    Farida deve explorar a Etiópia, país onde nasceu. Vamos para lá!
    ...
        || NA ETIÓPIA!`);

    interagirComNPCEtiopia();
    if (jogoAtivo) verificarEnergia(); // Verifica o nível de energia após interações
}

// Função para interagir com NPCs na Etiópia
function interagirComNPCEtiopia() {
    if (!jogoAtivo) return;

    console.log('Na Etiópia, Farida encontra seus primeiros treinadores.');
    let visitaEtiopia = prompt('Eles querem ajudá-la a melhorar suas habilidades. Deseja conversar com eles? S|N').toUpperCase();

    if (visitaEtiopia === 'S') {
        let interagir = validarResposta('Um treinador está oferecendo um plano de treinamento especializado. Deseja aceitar? S|N \n');
        if (interagir === 'S') {
            console.log('Ótimo! Você ganhou um par de tênis de corrida.');
            itens.push('Tênis de corrida');
        }

        if (jogoAtivo) { // Verifica se o jogo está ativo antes de continuar
            let outroNPC = validarResposta('Outro treinador oferece uma dieta especial. Aceitar? S|N \n');
            if (outroNPC === 'S') {
                console.log('Ótimo! Você ganhou uma dieta nutritiva.');
                itens.push('Dieta nutritiva');
            }
        }

        if (jogoAtivo) { // Verifica se o jogo está ativo antes de continuar
            let terceiroNPC = validarResposta('Um fisioterapeuta oferece sessões de recuperação. Aceitar? S|N \n');
            if (terceiroNPC === 'S') {
                console.log('Ótimo! Você ganhou uma massagem de recuperação.');
                itens.push('Massagem de recuperação');
            }
        }
    }
}

// Função para treinar no Quênia
function treinarQuenia() {
    if (!jogoAtivo) return;

    console.log(`
    Farida teve de fugir da Etiópia devido aos conflitos no país. Agora ela precisa encontrar outro local para treinar.
    Vamos treinar no Quênia!
    O Quênia conta com ótimos treinadores e serviços para atletas, vamos aproveitar
    ...
        || NO QUÊNIA!
    `);

    interagirComNPCquenia();
    if (jogoAtivo) verificarEnergia(); // Verifica o nível de energia após interações
}

// Função para interagir com NPCs no Quênia
function interagirComNPCquenia() {
    if (!jogoAtivo) return;

    console.log('No Quênia, Farida conhece treinadores especializados em corrida de longa distância.');
    let visitaQuenia = prompt('Eles querem ajudá-la a se preparar para as Olimpíadas. Deseja aceitar? S|N \n').toUpperCase();
    if (visitaQuenia === 'S') {
        let interagir = validarResposta('Um treinador oferece um programa de altitude. Deseja participar? S|N \n');
        if (interagir === 'S') {
            console.log('Ótimo! Você ganhou resistência adicional.');
            itens.push('Resistência adicional');
        }

        if (jogoAtivo) { // Verifica se o jogo está ativo antes de continuar
            let outroNPC = validarResposta('Outro treinador sugere um plano de treinamento intensivo. Aceitar? S|N \n');
            if (outroNPC === 'S') {
                console.log('Ótimo! Você ganhou um aumento de velocidade.');
                itens.push('Aumento de velocidade');
            }
        }

        if (jogoAtivo) { // Verifica se o jogo está ativo antes de continuar
            let terceiroNPC = validarResposta('Um nutricionista oferece uma nova suplementação. Aceitar? S|N \n');
            if (terceiroNPC === 'S') {
                console.log('Ótimo! Você ganhou energia extra.');
                itens.push('Energia extra');
            }
        }
    }
}

// Função para treinar na França
function treinarFranca() {
    if (!jogoAtivo) return;

    console.log(`
        Agora vamos treinar na França!
    A França conta com programas exclusivos para atletas refugiados, vamos aproveitar.
    Na França, Farida está muito perto de realizar seu sonho de competir nas Olimpíadas de Paris 2024
    ...
        || NA FRANÇA
    `);

    interagirComNPCfranca();
    if (jogoAtivo) verificarEnergia(); // Verifica se o jogador "cansou" após interagir com NPCs

    if (jogoAtivo) { // Verifica se o jogador está ativo
        verificarCompeticao(); // Verifica se todos os itens foram coletados para competir
    }
}

// Função para interagir com NPCs na França
function interagirComNPCfranca() {
    if (!jogoAtivo) return;

    console.log('Na França, Farida conhece treinadores olímpicos que podem levá-la ao próximo nível.');
    let visitaFranca = prompt('Eles querem ajudá-la a se preparar para as Olimpíadas. Deseja aceitar? S|N \n').toUpperCase();
    if (visitaFranca === 'S') {
        let interagir = validarResposta('Um treinador olímpico oferece sessões de treinamento final. Aceitar? S|N \n');
        if (interagir === 'S') {
            console.log('Ótimo! Você ganhou uma estratégia de corrida.');
            itens.push('Estratégia');
        }
    }
}

// Inicia o jogo
main();
