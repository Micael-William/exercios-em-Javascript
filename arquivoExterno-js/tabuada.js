let numero = parseFloat(prompt('Digite um número'))
let cont = 1
let mensagem = ''
function mostrarTabuada(){
  limparTabuada()
  for(cont = 1; cont <= 10; cont++){
    let resultado = (numero * cont)
    mensagem += numero + ' x ' + cont + ' = ' + resultado + '<br>'
  }
  output.innerHTML = mensagem
}
function limparTabuada(){
  let div = document.querySelector('output')
  mensagem = ''
 output.innerHTML = mensagem
}
