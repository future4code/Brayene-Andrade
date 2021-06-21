/* - **Exercícios de interpretação de código**

    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

    1.  Leia o código abaixo

        ```jsx
        const filme = {
        	nome: "Auto da Compadecida", 
        	ano: 2000, 
        	elenco: [
        		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        		"Virginia Cavendish"
        		], 
        	transmissoesHoje: [
        		{canal: "Telecine", horario: "21h"}, 
        		{canal: "Canal Brasil", horario: "19h"}, 
        		{canal: "Globo", horario: "14h"}
        		]
        }

        console.log(filme.elenco[0])
        console.log(filme.elenco[filme.elenco.length - 1])
        console.log(filme.transmissoesHoje[2])
        ```

        a) O que vai ser impresso no console?
        ----RESPOSTA----
        Matheus Nachtergaele
        Virginia Cavendish
        Canal: Canal Brasil, horario: 19h

    2. Leia o código abaixo

        ```jsx
        const cachorro = {
        	nome: "Juca", 
        	idade: 3, 
        	raca: "SRD"
        }

        const gato = {...cachorro, nome: "Juba"}

        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

        console.log(cachorro)
        console.log(gato)
        console.log(tartaruga)
        ```

        a) O que vai ser impresso no console?
        -----RESPOSTA-----
        Nome: Juca, idade: 3, raca: SRD
        Nome: Juba, idade: 3, raca: SRD
        Nome: Jubo, idade: 3, raca: SRD

        b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        -----RESPOSTA-----
        Faz a cópia inteira de um objeto para outro e permite mudar ou adicionar uma ou outra propriedade

        3. Leia o código abaixo

        ```jsx
        function minhaFuncao(objeto, propriedade) {
        	return objeto[propriedade]
        }

        const pessoa = {
          nome: "Caio", 
          idade: 23, 
          backender: false
        }

        console.log(minhaFuncao(pessoa, "backender"))
        console.log(minhaFuncao(pessoa, "altura"))
        ```

        a) O que vai ser impresso no console?

        b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

        */


        // -------------------------Exercícios de escrita de código----------------------

        // 1. Resolva os passos a seguir: 

        // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
        //(um array que sempre terá exatamente **três apelidos**). 
        //Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    
        const pessoa = {
            nome:"Eduardo",
            apelidos:["Edu", "Du", "Dudu"]
        }
        console.log(`Eu sou  ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)


const novapessoa = {
    ...pessoa,
    apelidos: ["Bidu", "Dentinho", "Máximo"]
}
console.log(`Eu sou ${pessoa.nome} mas pode me chamar de ${novapessoa.apelidos[0]}, ${novapessoa.apelidos[1]} ou ${novapessoa.apelidos[2]}`)

// Exercício 2
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoa1 = {
    nome: "César",
    idade: 23,
    profisão: "Ator",
}

const pessoa2 = {
    nome: "Vitória",
    idade: 25,
    profissão: "Piloto",
}
    //b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    function recebeObjetos(objeto) {
        return [objeto.nome,objeto.nome.length,objeto.idade,objeto.profissão, objeto.profissão.length,]
    }
    console.log(recebeObjetos(pessoa2))

// Exercício 3
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []

const morango = {
    nome: "morango",
    disponibilidade: true,
}

const melancia = {
    nome: "melancia",
    disponibilidade: false,
}

const uva = {
    nome: "uva",
    disponibilidade: true
}
function frutas (fruta1,fruta2,fruta3) {
    carrinho.push(fruta1,fruta2,fruta3)
        
console.log(carrinho)
}
frutas(morango,melancia,uva)