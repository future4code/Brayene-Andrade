//Exercícios de interpretação de código
/* Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo:

    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```

    a) Explique o que o código faz. Qual o teste que ele realiza? 
    --RESPOSTA: Ele testa se o número que o usuário inserir é par

    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    --RESPOSTA: Todo número par

    c) Para que tipos de números a mensagem é "Não passou no teste"?
    --Tudo que for digitado que não seja número par


    2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```

    a) Para que serve o código acima?
    ---RESPOSTA: Serve para indicar o preço de cada fruta

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    ---RESPOSTA: "O preço da fruta, maçã, é, R$ 2.25"

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
    (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    ---RESPOSTA: "O preço da fruta, pera, é, R$ 5.5" e continuaria procurando informação até acabar a função.


    3. Leia o código abaixo:

    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
    ```

    a) O que a primeira linha está fazendo?
    ---RESPOSTA: A primeira linha está executando uma caixa onde o usuário será solicitado a digitar um número.

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    ---RESPOSTA: "Esse número passou no teste". Se fosse -10 imprime nada

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    ---RESPOSTA: Se a resposta for qualquer número menor que 0 haverá erro no console porque o console.log que imprime a mensagem
    está fora da função. Por esse motivo, ele não consegue acessar a let que foi designada dentro do escopo da função.



    ------Exercícios de escrita de código
    */

    //1
    const maiorIdadeCarteira = Number(prompt("Quantos anos você tem?"))
    
    if(maiorIdadeCarteira >=18){
        console.log("Você pode dirigir!")
    } else if(maiorIdadeCarteira <18){
        console.log("Você não pode dirigir")
    }
    
    //2
    const turnoEstudante = prompt("Digite a letra que corresponde ao turno que você estuda sendo M para matutino, V para vespertino e N para noturno").toUpperCase()
    
    if (turnoEstudante === "M"){
        console.log("Bom dia!")
    } else if(turnoEstudante === "V"){
        console.log("Boa tarde!")
    } else if(turnoEstudante === "N"){
        console.log("Boa noite!")
    }

    //3
    const turnoEstudanteSwitch = prompt("Digite a letra que corresponde ao turno que você estuda sendo M para matutino, V para vespertino e N para noturno") 

        switch(turnoEstudanteSwitch.toUpperCase()){
            case "M":
            console.log("Bom dia!")
            break
            case "V":
            console.log("Boa tarde")
            break
            case "N":
            console.log("Boa noite")
            break
    }

    //4
    const cinemaComAmigo = (filmeFantasia, precoIngresso) => {
        if(filmeFantasia.toUpperCase() === "FANTASIA" && precoIngresso < 15){console.log("Bom filme!")
     } else {
         console.log("Escolha outro filme")
     }
        
    }

    const filmeFantasia = prompt("Qual o gênero do filme que você vai assistir?")
    const precoIngresso = Number(prompt("Qual o valor do ingresso?"))

cinemaComAmigo(filmeFantasia,precoIngresso)

