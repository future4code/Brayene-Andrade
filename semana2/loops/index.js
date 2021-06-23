/* Exercícios de interpretação de código
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    ```jsx
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    ```
    ---RESPOSTA---
    Tá fazendo o looping e imprimindo somando +1 ao resultado até o valor menor que 5.

    
    2. Leia o código abaixo:

    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    ```

    a) O que vai ser impresso no console?
    ---RESPOSTA---
    Será impresso os números maiores que 18. (19,21,23,25,27,30)

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    ---RESPOSTA---
    o for of lê os elementos direto, não lê os indíces, então o mais indicado seria usar o for

    
    3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    ```jsx
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }



Exercícios de escrita de código -----

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console
    */


    let bichinhosDeEstimacaoUser = Number (prompt ("Quantos bichinhos de estimação você tem?"))
    let quantidadeMaiorQueZero = []
    


        if(bichinhosDeEstimacaoUser === 0) {
            console.log ("Que pena! Você pode adotar um pet!")
        } else {
          let i = 0
            while(i < bichinhosDeEstimacaoUser){
                let nomeDoBichinho = prompt ("Qual o nome do seu bichinho?")
                i= i+1
                quantidadeMaiorQueZero.push(nomeDoBichinho)
            }
            
        }
        console.log (quantidadeMaiorQueZero)

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

function imprimeArray (arrayOriginal){
    for(valores of arrayOriginal){
        console.log (valores)
    }
}
 imprimeArray([])


// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

function imprimeCadaValorArray (arrayOriginal){
    for(valores of arrayOriginal){
        console.log (valores/10)
    }
}
 imprimeCadaValorArray([])


// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array


function numerosParesArray (arrayOriginal){
 let novoArray = []  
 for( valores of arrayOriginal) {
      if (valores %2 === 0){
        novoArray.push(valores)
      }
    } 
    console.log(novoArray) 
}


// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

