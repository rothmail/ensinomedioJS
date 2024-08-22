/*
1.  Leia o código abaixo
    
    ```jsx
    const serie = {
      nome: "Stranger Things", 
      ano: 2016, 
      elenco: [
        "Millie Bobby Brown", "Finn Wolfhard", "Gaten Matarazzo", 
        "Caleb McLaughlin", "Sadie Sink"
        ], 
      episodiosHoje: [
        {canal: "Netflix", horario: "16h"}, 
        {canal: "HBO Max", horario: "18h"}, 
        {canal: "Prime Video", horario: "20h"}
        ]
    }
    
    console.log(serie.elenco[1])
    console.log(serie.elenco[serie.elenco.length - 1])
    console.log(serie.episodiosHoje[1])
    ```
    
    a) O que vai ser impresso no console? Finn Wolfhard, Caleb McLaughlin, HBO Max e 18h
    
2. Leia o código abaixo
    
    ```jsx
    const carro = {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2022,
      proprietario: {
        nome: "Carlos",
        idade: 45,
        habilitado: true
      }
    };
    
    console.log(carro.proprietario.nome);
    console.log(carro.proprietario.habilitado);
    ```
    
    a) O que vai ser impresso no console? Carlos, true
    
    b) Como você acessaria o modelo do carro? console.log(carro.modelo)
    
3. Leia o código abaixo
    
    ```jsx
    const calculadora = {
      somar: function(a, b) {
        return a + b;
      },
      subtrair: function(a, b) {
        return a - b;
      }
    };
    
    console.log(calculadora.somar(5, 3));
    console.log(calculadora.subtrair(10, 4));
    ```
    
    a) O que vai ser impresso no console? 8 e 14
    
    b) Como você chamaria a função `somar` para adicionar os números 7 e 2? console.log(calculadora.somar(7, 2));
    
    c) Como seria as funções de multiplicar e dividir?

    Com as funçãos adicionadas:
    const calculadora = {
      somar: function(a, b) {
        return a + b;
      },
      subtrair: function(a, b) {
        return a - b;
      }
      multipliicar: function(a, b) {
        return a * b;
      }
      divisao: function(a, b) {
        return a / b;
      }
    };
    
    d) Para o que serve a palavra `return`? Serve para retornar um certo valor
*/