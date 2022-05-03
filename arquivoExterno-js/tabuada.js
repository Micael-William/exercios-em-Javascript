let numero = parseFloat(prompt('Digite um número'))
let cont = 1
let mensagem = ''
function mostrarTabuada(){
  limparTabuada()
  while(cont <= 10){
    let resultado = (numero * cont)
    mensagem += numero + ' x ' + cont + ' = ' + resultado + '<br>'
    cont++;
  }
  output.innerHTML = mensagem
}
function limparTabuada(){
  let div = document.querySelector('output')
  mensagem = ''
 output.innerHTML = mensagem
}
