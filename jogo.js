const rl = require('readline-sync')

let energia = 100 // Energia da personagem
const atleta = 'Farida Abaroge' // Nome da atleta

let checkpoint = null // Último momento salvo do jogo
let itens = [] // Array para guardar os itens
const sentimentos = ['Tênis de corrida', 'Dieta nutritiva', 'Massagem de recuperação', 'Resistência adicional', 'Aumento de velocidade', 'Energia extra', 'Estratégia'] // Sentimentos necessários

let jogoAtivo = true // Loop para o jogo continuar

// Função de checkpoint
function salvarCheckpoint() {
    checkpoint = {
        energia,
        itens: itens.slice(),
    }
    console.log('Checkpoint salvo com sucesso!')
}

// Função para carregar o estado salvo do jogo
function carregarCheckpoint() {
    if (checkpoint) {
        energia = checkpoint.energia
        itens = checkpoint.itens.slice()
        console.log('Checkpoint carregado com sucesso!')
    } else {
        console.log('Nenhum checkpoint salvo encontrado.')
    }
}

// Função para verificar se o jogador "cansou" (energia acabou)
function verificarCansaco() {
    if (energia <= 0) {
        console.log("Você está exausta. Fim de jogo.")
        jogoAtivo = false // Encerrar o jogo
    }
}

// Função para verificar se todos os itens necessários foram coletados
function verificarCompeticao() {
    let todosItensColetados = true
    for (let item of sentimentos) {
        if (!itens.includes(item)) {
            todosItensColetados = false
            break
        }
    }
    if (todosItensColetados) {
        console.log("Parabéns! Você coletou todos os itens necessários e está pronta para competir nas Olimpíadas de Paris 2024!")
        jogoAtivo = false // Encerrar o jogo
    } else {
        console.log("Você não possui todos os itens necessários para competir nas Olimpíadas.")
        console.log("Sua jornada terminou aqui.")
        jogoAtivo = false // Encerrar o jogo
    }
}

// Função para treinar na Nigéria
function treinarNigeria() {
    if (!jogoAtivo) return

    console.log(
        `Vamos explorar alguns países da história de ${atleta}!
    Aos seis anos Farida decidiu ser atleta olímpica e hoje ela está a caminho da competição.
    Ela deve conseguir alguns itens, ajude-a!
    Farida começou sua jornada na Nigéria, vamos para lá!
    ...
    || NA NIGÉRIA!`)

    interagirComNPCnigeria()
    verificarCansaco() // verifica o nível de energia, se = 0 cansado totalmente então perde
}

// Função para interagir com NPCs na Nigéria
function interagirComNPCnigeria() {
    console.log('Na Nigeria, Farida encontra seus primeiros treinadores.')
    let visitaNigeria = rl.question('Eles querem ajuda-la a melhorar suas habilidades. Deseja conversar com eles? S|N').toUpperCase()
    if (visitaNigeria === 'S') {
        console.log('Vamos lá!')

        let interagir = rl.question('Um treinador esta oferecendo um plano de treinamento especializado. Deseja aceitar? S|N \n').toUpperCase()
        if (interagir === 'S') {
            console.log('Ótimo! Você ganhou um par de tênis de corrida.')
            itens.push('Tênis de corrida')
        } else {
            console.log('Você perdeu a chance de melhorar suas habilidades.')
            energia -= 10
        }

        let outroNPC = rl.question('Outro treinador oferece uma dieta especial. Aceitar? S|N \n').toUpperCase()
        if (outroNPC === 'S') {
            console.log('Ótimo! Você ganhou uma dieta nutritiva.')
            itens.push('Dieta nutritiva')
        } else {
            console.log('Você perdeu a chance de ganhar energia extra.')
            energia -= 10
        }

        let terceiroNPC = rl.question('Um fisioterapeuta oferece sessoes de recuperacao. Aceitar? S|N \n').toUpperCase()
        if (terceiroNPC === 'S') {
            console.log('Ótimo! Você ganhou uma massagem de recuperação.')
            itens.push('Massagem de recuperação')
        } else {
            console.log('Você perdeu a chance de melhorar sua recuperação.')
            energia -= 10
        }
    } else {
        console.log('Você decidiu não falar com os treinadores. Isso resultará na perda de muita energia.')
        energia -= 40
    }
    verificarCansaco() // Verifica se o jogador "cansou" após treinar na Nigéria
    if (!jogoAtivo) return // Se o jogo não estiver ativo, retorna

    console.log('Depois de um tempo, Farida decide que precisa treinar em outro país para se preparar melhor.')
    console.log('Ela e sua equipe decidem que o próximo passo é ir para o Quênia.')
}

// Função para treinar no Quênia
function treinarQuenia() {
    if (!jogoAtivo) return

    console.log(`
        Agora vamos treinar no Quênia!
    Quênia conta com ótimos treinadores e serviços para atletas, vamos aproveitar
    ...
        || NO QUÊNIA!
    `)

    interagirComNPCquenia()
    verificarCansaco()
}

// Função para interagir com NPCs no Quênia
function interagirComNPCquenia() {
    console.log('No Quênia, Farida conhece treinadores especializados em corrida de longa distância.')
    let visitaQuenia = rl.question('Eles querem ajudá-la a se preparar para as Olimpíadas. Deseja aceitar? S|N \n').toUpperCase()
    if (visitaQuenia === 'S') {
        console.log('Vamos lá!')

        let interagir = rl.question('Um treinador oferece um programa de altitude. Deseja participar? S|N \n').toUpperCase()
        if (interagir === 'S') {
            console.log('Ótimo! Você ganhou resistência adicional.')
            itens.push('Resistência adicional')
        } else {
            console.log('Você perdeu a chance de ganhar mais resistência.')
            energia -= 10
        }

        let outroNPC = rl.question('Outro treinador sugere um plano de treinamento intensivo. Aceitar? S|N \n').toUpperCase()
        if (outroNPC === 'S') {
            console.log('Ótimo! Você ganhou um aumento de velocidade.')
            itens.push('Aumento de velocidade')
        } else {
            console.log('Você perdeu a chance de melhorar sua velocidade.')
            energia -= 10
        }

        let terceiroNPC = rl.question('Um nutricionista oferece uma nova suplementacao. Aceitar? S|N \n').toUpperCase()
        if (terceiroNPC === 'S') {
            console.log('Ótimo! Você ganhou energia extra.')
            itens.push('Energia extra')
        } else {
            console.log('Você perdeu a chance de melhorar sua energia.')
            energia -= 10
        }
    } else {
        console.log('Você decidiu não falar com os treinadores. Isso resultará na perda de muita energia.')
        energia -= 40
    }
    verificarCansaco() // Verifica se o jogador "cansou" após treinar no Quênia
    if (!jogoAtivo) return // Se o jogo não estiver ativo, retorna

    console.log('Farida percebe que está quase pronta, mas ainda precisa de mais preparação antes de competir.')
    console.log('Ela decide ir para a França para finalizar seu treinamento.')
}

// Função para treinar na França
function treinarFranca() {
    if (!jogoAtivo) return

    console.log(`
        Agora vamos treinar na França!
    A frança conta com programas exclusivos para atletas refugiados, vamos aproveitar
    ...
    || NA FRANÇA
    Na França, Farida está muito perto de realizar seu sonho de competir nas Olimpíadas de Paris 2024`
    )

    interagirComNPCfranca()
    verificarCansaco() // Verifica se o jogador "cansou" após interagir com NPCs

    if (jogoAtivo) { // Verifica se o jogador está ativo
        verificarCompeticao() // Verifica se todos os itens foram coletados para competir
    }
}

// Função para interagir com NPCs na França
function interagirComNPCfranca() {
    console.log('Na França, Farida conhece treinadores olímpicos que podem levá-la ao próximo nível.')
    let visitaFranca = rl.question('Eles querem ajudá-la a se preparar para as Olimpíadas. Deseja aceitar? S|N \n').toUpperCase()
    if (visitaFranca === 'S') {
        console.log('Vamos lá!')

        let interagir = rl.question('Um treinador olímpico oferece sessões de treinamento final. Aceitar? S|N \n').toUpperCase()
        if (interagir === 'S') {
            console.log('Ótimo! Você ganhou uma estratégia de corrida.')
            itens.push('Estratégia')
        }
    }
}

// Loop principal do jogo
while (jogoAtivo) {
    treinarNigeria()
    if (!jogoAtivo) break

    treinarQuenia()
    if (!jogoAtivo) break

    treinarFranca()
    if (!jogo) {
        if (!jogoAtivo) break

    // Verifica novamente se o jogo continua
    verificarCompeticao()
    }
}

// Fim do jogo
function verificarCompeticao() {
    if (energia <= 0) {
        console.log('Infelizmente, Farida ficou sem energia e não conseguiu chegar às Olimpíadas.')
    } else {
        console.log('Parabéns! Farida conseguiu se preparar e está pronta para competir nas Olimpíadas de Paris 2024!')
    }
}