// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   return num1 + num2
}



// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  const alturaRetangulo = Number (prompt("Escreva um número que indica a altura do retângulo"))
  const larguraRetangulo = Number (prompt("Escreva um número que indica a largura do retângulo"))
const resultadoAreaRetangulo = alturaRetangulo * larguraRetangulo
console.log (resultadoAreaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimentoUsuario = Number(prompt("Em que ano você nasceu?"))
   const resultadoIdade = (anoAtual - anoNascimentoUsuario)
console.log(resultadoIdade)

}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  return peso / (altura * altura)
  console.log (peso / (altura * altura))
}



// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual o seu nome?")
  const idadeUsuario = prompt("Qual a sua idade?")
   const emailUsuario = prompt("Qual o seu e-mail?")
console.log (`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavoritaUm = prompt("Qual a sua cor favorita?")
  const corFavoritaDois = prompt("Qual a sua segunda cor favorita?")
  const corFavoritatres = prompt("Qual a sua terceira cor favorita?")

console.log ([corFavoritaUm,corFavoritaDois,corFavoritatres])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    return string.toUpperCase()
    console.log (string)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo / valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 return (string1>=string2)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array [array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array [0]
  const ultimoElemento = array.pop()

  array.push(primeiroElemento)
  array[0] =ultimoElemento
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const frase1Maiuscula = string1.toUpperCase()
 const frase2mMaiuscula =  string2.toUpperCase()
  return (frase1Maiuscula === frase2mMaiuscula)
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}