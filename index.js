//fazer jogador1 digitar um numero
//fazer jogador2 digitar outro numero
//se forem iguais, mostrar mensagem 'empate'
//sortear um numero entre 0 e 1
// se o numero sorteado for 0, ganha quem escolher o numero MENOR    
//se o numero sorteado for 1, ganha quem escolher o numero MAIOR

let nJogador1 = parseInt(prompt('Jogador1 digite um número:'))
let nJogador2 = parseInt(prompt('Jogador2 digite um número:'))
let nSorteado = parseInt(Math.random()*2)

if(nJogador1 == nJogador2){
  console.log('Empate')
}
if(nSorteado == 0){
  if(nJogador1 < nJogador2){
    console.log('Jogador1 ganhou')
  }else{
    console.log('Jogador2 ganhou')
  }
}
if(nSorteado == 1){
  if(nJogador1 > nJogador2){
    console.log('Jogador1 ganhou')
  }else{
    console.log('Jogador2 ganhou')
  }
}