const rl = require('readline-sync')

let energia = 100 // Energia da personagem
const atleta = 'Farida Abaroge' // Nome da atleta

let checkpoint = null // Último momento salvo do jogo
let itens = [] // Array para guardar os itens
const sentimentos = [] // Array para guardar os sentimentos adquiridos

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
    } else {
        console.log("Você não possui todos os itens necessários para competir nas Olimpíadas.")
        console.log("Sua jornada terminou aqui.")
        jogoAtivo = false // Encerrar o jogo
    }
}

// Função para treinar na Nigéria
function treinarNigeria() {
    if (!jogoAtivo) return

    console.log(`Vamos explorar a vida de ${atleta}!
    Primeiro, vamos à Nigéria, onde Farida começou sua jornada!'
    CHEGAMOS À NIGÉRIA!
    Farida tem um sonho de se tornar uma atleta olímpica, mas sabe que a jornada será difícil.
    Com a ajuda de seus treinadores e amigos, ela acredita que pode alcançar seu objetivo.
    Porém, o caminho para o sucesso está cheio de desafios e obstáculos
    `)

    interagirComNPCnigeria()
    verificarCansaco() // Verifica se o jogador "cansou" após interagir com NPCs
}

// Função para interagir com NPCs na Nigéria
function interagirComNPCnigeria() {
    console.log('Na Nigéria, Farida encontra seus primeiros treinadores.')
    let visitaNigeria = rl.question('Eles querem ajudá-la a melhorar suas habilidades. Deseja conversar com eles? SIM/NAO \n').toUpperCase()
    if (visitaNigeria === 'SIM') {
        console.log('Vamos lá!')

        let interagir = rl.question('Um treinador está oferecendo um plano de treinamento especializado. Deseja aceitar? SIM/NAO \n').toUpperCase()
        if (interagir === 'SIM') {
            console.log('Ótimo! Você ganhou um par de tênis de corrida.')
            itens.push('Tênis de corrida')
        } else {
            console.log('Você perdeu a chance de melhorar suas habilidades.')
            energia -= 10
        }

        let outroNPC = rl.question('Outro treinador oferece uma dieta especial. Aceitar? SIM/NAO \n').toUpperCase()
        if (outroNPC === 'SIM') {
            console.log('Ótimo! Você ganhou uma dieta nutritiva.')
            itens.push('Dieta nutritiva')
        } else {
            console.log('Você perdeu a chance de ganhar energia extra.')
            energia -= 10
        }

        let terceiroNPC = rl.question('Um fisioterapeuta oferece sessões de recuperação. Aceitar? SIM/NAO \n').toUpperCase()
        if (terceiroNPC === 'SIM') {
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

    console.log('Agora vamos treinar no Quênia!')
    console.log('CHEGAMOS AO QUÊNIA!')
    console.log('No Quênia, Farida encontra novos desafios e treinadores que podem ajudá-la a melhorar ainda mais.')
    console.log('A altitude elevada é um grande desafio, mas Farida está determinada a se adaptar.')

    interagirComNPCquenia()
    verificarCansaco() // Verifica se o jogador "cansou" após interagir com NPCs
}

// Função para interagir com NPCs no Quênia
function interagirComNPCquenia() {
    console.log('No Quênia, Farida conhece treinadores especializados em corrida de longa distância.')
    let visitaQuenia = rl.question('Eles querem ajudá-la a se preparar para as Olimpíadas. Deseja aceitar? SIM/NAO \n').toUpperCase()
    if (visitaQuenia === 'SIM') {
        console.log('Vamos lá!')

        let interagir = rl.question('Um treinador oferece um programa de altitude. Deseja participar? SIM/NAO \n').toUpperCase()
        if (interagir === 'SIM') {
            console.log('Ótimo! Você ganhou resistência adicional.')
            itens.push('Resistência adicional')
        } else {
            console.log('Você perdeu a chance de ganhar mais resistência.')
            energia -= 10
        }

        let outroNPC = rl.question('Outro treinador sugere um plano de treinamento intensivo. Aceitar? SIM/NAO \n').toUpperCase()
        if (outroNPC === 'SIM') {
            console.log('Ótimo! Você ganhou um aumento de velocidade.')
            itens.push('Aumento de velocidade')
        } else {
            console.log('Você perdeu a chance de melhorar sua velocidade.')
            energia -= 10
        }

        let terceiroNPC = rl.question('Um nutricionista oferece uma nova suplementação. Aceitar? SIM/NAO \n').toUpperCase()
        if (terceiroNPC === 'SIM') {
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

    console.log('Agora vamos treinar na França!')
    console.log('CHEGAMOS À FRANÇA!')
    console.log('Na França, Farida está muito perto de realizar seu sonho de competir nas Olimpíadas de Paris 2024.')
    console.log('Aqui, ela encontrará os últimos desafios e treinadores que podem ajudá-la a alcançar a vitória.')

    interagirComNPCfranca()
    verificarCansaco() // Verifica se o jogador "cansou" após interagir com NPCs

    if (jogoAtivo) { // Verifica se o jogador está ativo
        verificarCompeticao() // Verifica se todos os itens foram coletados para competir
    }
}

// Função para interagir com NPCs na França
function interagirComNPCfranca() {
    console.log('Na França, Farida conhece treinadores olímpicos que podem levá-la ao próximo nível.')
    let visitaFranca = rl.question('Eles querem ajudá-la a se preparar para as Olimpíadas. Deseja aceitar? SIM/NAO \n').toUpperCase()
    if (visitaFranca === 'SIM') {
        console.log('Vamos lá!')

        let interagir = rl.question('Um treinador olímpico oferece sessões de treinamento final. Aceitar? SIM/NAO \n').toUpperCase()
        if (interagir === 'SIM') {
            console.log('Ótimo! Você ganhou uma estratégia de corrida.')
            itens.push('Estratégia')
        }
    }
}