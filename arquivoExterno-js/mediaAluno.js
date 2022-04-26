let nota1Aluno = parseFloat(prompt('Digite um número:'))
let nota2Aluno = parseFloat(prompt('Digite outro número:'))

let media = (nota1Aluno + nota2Aluno)/2
console.log(media)

if(media >= 6){
  console.log('Parabéns você passou, mas um ano concluído! ')
}else if(media < 6 && media == 5){
  console.log('Infelizmente de exame')
}else{
  console.log('Você foi reprovado, até um ano que vem')
}
