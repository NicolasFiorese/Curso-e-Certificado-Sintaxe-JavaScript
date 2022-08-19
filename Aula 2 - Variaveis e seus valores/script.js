// tipos primitivos

// boolean
var vOuf = false
console.log(typeof vOuf)

// number
var numeroQualquer = 1
console.log(typeof numeroQualquer)

// string
var nome = 'diana'
console.log(typeof nome)

// function
var funcao = function () {}
console.log(typeof funcao)

// como declarar
var variavel = 'diana'
variavel = 'martine'
console.log(variavel)

let variavel2 = 'diana'
variavel2 = 'martine'
console.log(variavel2)

const constante = 'diana'
constante = 'martine'
console.log(constante)

// escopos
var escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal() {
  let escopoLocalInterno = 'local'
  console.log(escopoLocalInterno)
}

escopoLocal()

// atribuição

var atribuicao = 'diana'

// comparação
var comparacao = '0' == 0
console.log(comparacao)

// comparação identica
var comparacaoIdentica = '0' === 0
console.log(comparacaoIdentica)

// adição
var adicao = 1 + 1
console.log(adicao)

// subtração
var subtracao = 2 - 1
console.log(subtracao)

// multiplicação
var multiplicacao = 3 * 5
console.log(multiplicacao)

// divisão real
var divisaoReal = 6 / 2
console.log(divisaoReal)

// divisão inteira
var divisaoInteira = 5 % 2
console.log(divisaoInteira)

// potenciação
var potenciacao = 2 ** 10
console.log(potenciacao)

// maior que
var maiorQue = 5 > 2
console.log(maiorQue)

// menor que
var menorQue = 6 < 2
console.log(menorQue)

// maior ou igual
var maiorIgual = 5 >= 4
console.log(maiorIgual)

// menor ou igual
var menorIgual = 5 <= 6
console.log(menorIgual)

// operadores lógicos

var e = true & false
console.log(e)

var ou = false || false
console.log(ou)

var nao = !true
console.log(nao)
