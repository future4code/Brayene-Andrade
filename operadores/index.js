//Exercícios de interpretação de código

// Exercício 1. 
// a.False
// b.False
// c.False
// d.Boolean

// Exercício 2.

/*let primeiroNumero = Number(prompt("Digite um número"))
let segundoNumero = Number(prompt("Digite outro numero"))
const soma = primeiroNumero + segundoNumero
console.log (soma)

O erro está que o prompt sempre vai responder com uma string. 
para modificar e conseguir um número no prompt deve-se usar o "Number"
designando que ali deverá aparecer um número.


-----Exercício de escrita de código*/
//Exercício 1.

const suaIdade = Number(prompt("Qual é a sua idade?"))

const idadeDoAmigo = Number(prompt("Qual a idade do seu melhor amigo ou amiga?"))

console.log ( "Sua idade é maior do que a do seu melhor amigo?" )

console.log (suaIdade > idadeDoAmigo)

console.log (suaIdade - idadeDoAmigo)

//Exercício 2.

const numeroPar = Number (prompt ("Insira aqui um número par"))
const restoDaDivisao = (numeroPar / 2)
console.log (restoDaDivisao)

//c. Notei que ele sempre divide por 2 e o resultado sempre dá positivo.
//d. Se o usuário inserir um número impar ele também divide por 2

//Exercício 3.

const quantosAnos = Number(prompt("Quantos anos você tem?"))
console.log ("Sua idade em meses", quantosAnos*12)
console.log ("Sua idade em dias", quantosAnos*30*12)
console.log ("Sua idade em horas", quantosAnos*12*30*24)

//Exercício 4.

const primeiroNumero = Number (prompt ("Digite um número de 1 a 100"))
const segundoNumero = Number (prompt("Digite aqui outro número de 1 a 100"))

const qualEMaior = (primeiroNumero > segundoNumero)
console.log ("O primeiro número é maior que o segundo?", qualEMaior)

const eIgual = (primeiroNumero === segundoNumero)
console.log ("O primeiro número é igual ao segundo?", eIgual)

const eDivisivel1 = (primeiroNumero % segundoNumero === 0)
console.log ("O primeiro número é divisível pelo segundo número?", eDivisivel1)

const eDivisivel2 = (segundoNumero % primeiroNumero ===0)
console.log ("O segundo número é divisível pelo primeiro número?", eDivisivel2)
