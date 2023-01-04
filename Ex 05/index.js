/* Exiba um prompt solicitando a entrada de um número para saber quantos pares 
e impares existem de 0 até o número digitado.
Calcule o número de pares e impares e exiba o resultado utilizando um alert. */
/* __________________________________________________________________________*/
var num = parseInt(prompt('Digite um número:'));
if (isNaN(num)) {
alert('Número inválido');
} 
    else {
    var even = 0;
    var odd = 0;
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 0) {
        even += 1;
        } 
           else {
           odd += 1;
           }
    }
alert('Existem ' + even + ' números pares e ' + odd + ' números ímpares');
}