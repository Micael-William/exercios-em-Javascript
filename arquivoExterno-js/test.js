/*let numero = parseInt(prompt('Digite um número:'))
let indice = 1
let resultado = (numero * indice)

for(indice = 1; indice <= 10; indice++){
  resultado = (numero * indice)
  document.write(`${numero} X ${indice} = ${resultado} <br>`)
}*/

/*let nome = prompt('Digite seu nome:')
let altura = prompt('Informe a altura da pessoa em centimetros:')
altura = parseFloat(altura)
let peso = prompt('Informe o peso da pessoa')
peso = parseFloat(peso)

altura = (altura /100)
let imc = peso /(altura * altura)
let classificacao = ''
if(imc < 16){
 classificacao = 'baixo peso muito grave';
}else if(imc >= 16 && imc <=16.99){
  classificacao ='baixo peso grave';
}else if(imc >= 17 && imc <= 18.49){
  classificacao ='baixo peso';
}else if(imc >= 18.50 && imc <= 24.99){
  classificacao = 'peso normal';
}else if(imc >= 25 && imc <= 29.99){
  classificacao = 'sobrepeso';
}else if(imc >= 30 && imc <= 34.99){
  classificacao = 'obesidade grau 1';
}else if(imc >= 35 && imc <= 34.99){
  classificacao = 'obesidade grau 2';
}else if(imc > 40){
  classificacao ='obesidade grau 3';
}

document.write(`${nome} possui indice de massa corporal igual a: ${imc.toFixed(2)} sendo classificado como: ${classificacao }`)*/

//funções void realizam um tipo de processamento mas não fornecem um tipo de retorno
// return da palavra reservada retorna um parametro na função pode ser uma variável de qualquer tipo
//parametros são argumentos pode ser variaveis

/*let largura = parseFloat(prompt('Digite a largura da area:'))
let comprimento = parseFloat(prompt('Digite comprimento da area:'))
let area = calcularAreaTerreno(largura, comprimento)

function calcularAreaTerreno(largura, comprimento){
let area = (largura * comprimento)
  return area
}
document.write(`O terreno possui ${area} metros quadrados`)*/

let nota1 = parseFloat(prompt('digite a primeira nota:'))
let nota2 = parseFloat(prompt('digite a segunda nota:'))

let soma = (nota1, nota2)
function soma(nota1, nota2){
  let resultadoS = (nota1 + nota2)/2
  return resultadoS

}

