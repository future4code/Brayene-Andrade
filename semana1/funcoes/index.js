// - **Exercícios de interpretação de código**
//     1. Leia o código abaixo

//         ```jsx
//         function minhaFuncao(variavel) {
//         	return variavel * 5
//         }
//
//         console.log(minhaFuncao(2))
//         console.log(minhaFuncao(10))
//         ```

//         a) O que vai ser impresso no console?
// Resposta: Na linha 1 vai imprimir 10
//            Na linha 2 vai imprimir 50

//         b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//  Resposta:  Executa a função mas não seria impresso
//     
// 2. Leia o código abaixo

//         ```jsx
//         let textoDoUsuario = prompt("Insira um texto");

//         const outraFuncao = function(texto) {
//         	return texto.toLowerCase().includes("cenoura")
//         }

//         const resposta = outraFuncao(textoDoUsuario)
//         console.log(resposta)
//         ```

//         a. Explique o que essa função faz e qual é sua utilidade
//   Resposta:  A funçao vai pegar o texto que o usuário digitou, colocar todo em letras minúsculas e retornar true, 
//    caso o usuário tenha digitado parte ou a palavra cenoura. E false caso ele não tenha essa palavra em seu texto.
//
//         b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

//              i.   `Eu gosto de cenoura`
// Resposta:  true 
//              ii.  `CENOURA é bom pra vista`
// Resposta:  true
//              iii. `Cenouras crescem na terra`
//  Resposta: true


// - **Exercícios de escrita de código**--------------------------
//     1. Escreva as funções explicadas abaixo:

//         a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//         "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//         ```
 function funcaoSobreMim () { 
     console.log ("Eu sou Bray, tenho 30 anos , moro em SC e sou estudante")

 }
 funcaoSobreMim()

//         Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
// o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
// Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
 
//         Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//         ```

//         - Exemplo

//             Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

//             `"Eu sou Laís, tenho 23 anos, moro em São Paulo e sou instrutora."`

let nomeDoUsuario = prompt("Qual o seu nome?");
let idadeDoUsuario = Number (prompt ("Qual sua idade?"))
let enderecoDoUsuario = prompt ("Onde você mora?")
let profissaoDoUsuario = prompt ("Qual sua profissão?")

function informacoesSobreOUsuario ( nome, idade, cidade, profissao ) {
console.log (`Eu sou ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, moro em ${enderecoDoUsuario}, e sou ${profissaoDoUsuario}`)
}
informacoesSobreOUsuario()




//     2. Escreva as funções explicadas abaixo:

//         a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

const numeroUm = 2
const numeroDois = 8

function somaDeDoisNumeros (numeroUm, numeroDois) {
         	return numeroUm + numeroDois 
}
console.log (somaDeDoisNumeros( numeroUm, numeroDois))

        

//         b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const primeiroNumero = 6
const segundoNumero = 4

function retornarBooleano (primeiroNumero, segundoNumero) {
    return primeiroNumero >= segundoNumero

}
console.log (retornarBooleano(6,4))



//         c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

const numeroPar = 6

function soNumeroPar (numeroPar) {
    return numeroPar % 2 === 0
}
console.log (soNumeroPar(numeroPar))



//         d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
// juntamente com uma versão dela em letras maiúsculas.

const mensagem = "A turma Lovelace é maravilhosa"

function fraseMensagem (mensagem) {
    return mensagem. length, mensagem toUppercase
}
console.log (fraseMensagem(mensagem))


//     3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

//         ```
//         Números inseridos: 30 e 3
//         Soma: 33
//         Diferença: 27
//         Multiplicação: 90
//         Divisão: 10
//         ```