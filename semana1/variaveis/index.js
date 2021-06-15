/* Exercício 1. Será impresso o valor 10
será impresso o valor 10, 5

Exercício 2. Será impresso 10, 10, 10 

Exercício 3. let p poderia ser renomeada para horasTrabalhadasDia
let t poderia ser renomeada para valorRecebidoDia
*/

const nome = prompt ( "Qual é o seu nome?")
const idade = prompt ("Qual é a sua idade?")


console.log (nome,idade)

console.log (typeof nome) 
console.log (typeof idade)

// esqueci de colocar o typeoff entre parenteses //

console.log ("Olá!", nome,"você tem", idade, "anos")
// não estava colocando entre vírgulas então não estava imprimindo correto//

//Exercício 2.//

const pergunta1 = "Você gosta de sorvete?"
const resposta1 = prompt(pergunta1)

const pergunta2 = "Você trabalha?"
const resposta2 = prompt(pergunta2)

const pergunta3 = "Você tomou café hoje?"
const resposta3 = prompt(pergunta3)

console.log (pergunta1, resposta1, pergunta2, resposta2, pergunta3, resposta3,)

//Exercício 3.//

let a = 10
let b = 20

console.log (a, b,)

let a = c 
let b = a
let c = b

console.log ("O novo valor de a é", a, "O novo valor de b é", b)

//não consegui fazer a lógica e imprimir a última parte corretamente.//
