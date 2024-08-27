/*
### **1. Cadastro de Aluno**

- **Descrição:** Crie um objeto `aluno` com as propriedades `nome`, `idade`, e `notas` (um array de números). Em seguida, crie uma função `calcularMedia` que recebe o objeto `aluno` e retorna a média das notas.
*/

const aluno = {
    nome: 'amanda',
    idade: 15,
    notas: [9, 8, 7]
}

function calcularMedia() {
    soma = aluno.notas[0] + aluno.notas[1] + aluno.notas[2];
    media = soma / 3;
    return media;
}

console.log(calcularMedia(aluno));

/*
### **2. Gestão de Compras**

- **Descrição:** Crie um objeto `carrinho` com as propriedades `itens` (um array de objetos, cada um representando um produto com `nome` e `preco`), e `total`.
- Crie uma função `addItens`, que pergunta ao usuario nome e preço do objeto e inclui no array. Se ja tiver algum com o mesmo nome, atualize o preço.
- Depois, crie uma função `calcularTotal` que recebe o objeto `carrinho` e calcula o valor total dos itens.
*/

const rl = require('readline-sync')

let carrinho = {
    itens: [
        { nome: 'morango', preco: 5 },
        { nome: 'merengue', preco: 6 },
        { nome: 'chocolate', preco: 7 }
    ],
    total: 0
};

function addItens(carrinho) {
    let continuar = true;

    while (continuar) {
        let nome = rl.question('Nome item (ou "sair" para encerrar):');

        if (nome.toUpperCase() === 'SAIR') {
            continuar = false;
            break;
        }

        let preco = rl.questionInt('Preço do item');

        let itemExistente = carrinho.itens.find(item => item.nome === nome);

        if (itemExistente) {
            itemExistente.preco = preco;
        } else {
            carrinho.itens.push({ nome: nome, preco: preco });
        }
        calcularTotal(carrinho);
    }
}

function calcularTotal(carrinho) {
    carrinho.total = carrinho.itens.reduce((acc, item) => acc + item.preco, 0);
    console.log(`Total do carrinho: R$ ${carrinho.total}`);
}
addItens(carrinho);
console.log(carrinho);

/*
### **3. Biblioteca Digital**

- **Descrição:** Crie um objeto `livroDigital` com as propriedades `titulo`, `autor`, e `paginasLidas`. Crie uma função `lerMaisPaginas` que recebe o objeto `livroDigital` e um número de páginas a serem lidas, e **incrementa** a propriedade `paginasLidas`.
*/

const livroDigital = {
    titulo: 'pequeno príncipe',
    autor: 'amanda',
    pagLidas: 120
};

function lerMaisPag() {
    let qntdLidas = rl.questionInt('Quantas páginas foram lidas a mais?');

    if (qntdLidas > 0) {
        livroDigital.pagLidas += qntdLidas;
    }
    console.log(livroDigital.pagLidas);
};
lerMaisPag()

/*
### **4. Biblioteca Digital**

- **Descrição:** Crie um algoritmo que contenha os dados cadastrais de um usuário, considerando `nome`, `email`, `senha`e `CPF`. Vamos simular que ele esqueceu a senha. Crie uma cópia dos dados, alterando apenas a sua senha.
- Agora refaça o exercício utilizando prompt para receber os dados do usuário e a nova senha.
*/
const cadastroUsuario = {
    nome: rl.question('Nome:'),
    email: rl.question('Email:'),
    senha: rl.question('Senha:'),
    cpf: rl.question('CPF:')
}
console.log(cadastroUsuario)

let esqueciMinhaSenha = rl.question('Esqueceu sua senha? (S|N)')

if (esqueciMinhaSenha.toUpperCase() == 'S') {
    let senhaAlterada = rl.question('Altere sua senha:')
    const cadastroSenhaAlterada = {
        ...cadastroUsuario,
    senha: senhaAlterada
    }
    console.log(cadastroSenhaAlterada)
} else if (esqueciMinhaSenha.toUpperCase() == 'N') {
    console.log(cadastroUsuario)
} else {
    console.log('Comando inválido.')
}
