//Acessamos os parâmetros com o process.argv[0] e process.argv[1]que são o node e o nome do arquivo.

const nome = "Bray"
const age = Number(30)
const somaSete = Number(7)
// console.log (`Olá, ${nome} ! Você tem ${age}  anos. E daqui a sete anos terá ${age + somaSete}`)

//Exercicio 2

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao){
	case "soma":
	// console.log(num1 + num2)
		break;
	case "subt":
	// console.log(num1 - num2)
		break;
}

//Exercício 3

let listaDeTarefas = []
const novaTarefa = process.argv[2]
listaDeTarefas.push(novaTarefa)
console.log(`Tarefa adicionada com sucesso!`)
console.table(listaDeTarefas)

