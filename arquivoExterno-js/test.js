/*let numero = parseInt(prompt('Digite um número:'))
let cont = 1

for(cont =1; cont <= 10; cont++){
  resultado = (numero * cont)
  console.log(`${numero} x ${cont} = ${resultado}`)
}
*/

let numero = parseInt(prompt('Digite um número:'))

let cont = 1
while(cont <= 10){
  resultado = (numero * cont)
  console.log(`${numero} x ${cont} = ${resultado}`)
  cont++;
}