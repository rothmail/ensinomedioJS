const rl = require('readline-sync')
/*
1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma mensagem no modelo abaixo**:** 
    
    // roubaram meu nome e ideia :(
    
    ```jsx
    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }
    
    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
    ```
    
    - 💡  Dica
        
        <aside>
        ⭐ Lembre-se que você pode usar template strings, com as crases e ${}.
        
        </aside>
        
    
2. Considere o código abaixo:
    
    ```jsx
    const listaDeTarefas = {
      nome: "João",
      tarefas: [
        { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
        { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
      ]
    };
    ```
    
    Copie e cole, escreva seu código a partir dai.
    
    a) Adicione uma nova tarefa à lista
    
    - 💡  Dica
        
        <aside>
        ⭐ Você deverá utilizar push()
        
        </aside>
        
    
    b) Altere o status de uma tarefa existente para `concluida`.
    
3. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
    - Exemplo
        
        ```
        // Exemplo de entrada: "Lais", 26, "Instrutora"
        // O que deve ser impresso no console: 
        { nome: 'Lais', profissao: "Instrutora", idade: 26}
        ```
        
4. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Adicione cada uma das frutas no array `carrinho`
*/

// 1.
const pessoa = {
    nome: 'Amanda Rothmann',
    apelidos: ['rothmann', 'rothmail', 'rothweiler']
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)

// 2.
const listaDeTarefas = {
    nome: "João",
    tarefas: [
        { descricao: "Estudar para a prova", concluida: true, prioridade: "alta" },
        { descricao: "Limpar o quarto", concluida: false, prioridade: "média" },
        {descricao: "ler o livro", concluida: false, prioridade: "baixa"}
    ]
};

// 3.
function info(){
    let nome = prompt('qual seu nome?')
    let idade = prompt('qual sua idade?')
    let profissao = prompt('qual sua profissão?')

 let pessoa = {
    nomePessoa: nome,
    idadePessoa: idade,
    profissaoPessoa: profissao
};
console.log('nome:', (pessoa.nomePessoa), 'idade:', (pessoa.idadePessoa), 'profissão:', (pessoa.profissaoPessoa))
}
info()
// 4.
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//    
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
//
//c) Adicione cada uma das frutas no array `carrinho`

let carrinho = []
let fruta1 = {
    nome: "Maçã",
    disponibilidade: true
}
let fruta2 = {
    nome: "Banana",
    disponibilidade: true
}
let fruta3 = {
    nome: "Laranja",
    disponibilidade: true
}
carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)
