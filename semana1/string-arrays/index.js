/* ----Exercícios de interpretação de código
1.

a. undefined
b. null 
c. 11
d. 0
e. 19
f.6

2.
Subi num ônibus em Marrocos 27

Exercícios de escrita de código */

//Exercício 1

const seuNome = prompt ("Qual o seu nome?")
const qualSeuEmail = prompt ("Qual seu e-mail?")

console.log (`O e-mail ${qualSeuEmail} foi cadastrado com sucesso. Seja bem-vinda(o) ${seuNome}`)

//Exercício 2

const comidasPreferidas = ["Lasanha", "Sushi", "Pudim", "Pavê", "Bolo"]
console.log (comidasPreferidas)

const comidasPreferidasLista = `Essas são minhas comidas preferidas
${comidasPreferidas [0]}
${comidasPreferidas [1]}
${comidasPreferidas [2]}
${comidasPreferidas [3]}
${comidasPreferidas [4]}
`
console.log (comidasPreferidasLista)

const comidaPreferidaUser = prompt ("Qual sua comida preferida?")
console.log (`Essas são minhas comidas preferidas
${comidasPreferidas [0]}
${comidaPreferidaUser}
${comidasPreferidas [2]}
${comidasPreferidas [3]}
${comidasPreferidas [4]}`)

//Exercício 3

let listaDeTarefas = []

const realizarTarefa1 = prompt ("Qual a primeira tarefa que você realiza no dia?")
const realizarTarefa2 = prompt ("Qual a segunda tarefa que você realiza no dia?")
const realizarTarefa3 = prompt ("Qual a terceira tarefa que você realiza no dia?")
listaDeTarefas = [realizarTarefa1, realizarTarefa2, realizarTarefa3]
console.log (listaDeTarefas)

const tarefaRealizada=Number (prompt ("Digite o número de 1 a 3 para uma tarefa que você realizou"))-1

listaDeTarefas.splice (tarefaRealizada,1)

console.log (listaDeTarefas)



