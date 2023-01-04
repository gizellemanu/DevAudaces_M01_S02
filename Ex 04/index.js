/* Utilizando estrutura de repetição, some os números
digitados através do prompt enquanto o número for 
diferente de -1, quando digitado -1 pare de exibir o 
prompt e exiba através de um alert o resultado da soma 
dos números digitados. */
/* ____________________________________________________ */
var plus = 0;
do {
  var num = prompt('Digite um número');
    if (num === null) {
        break;
    }
    num = parseInt(num);
        if (isNaN(num) || num === -1) {
            continue;
        }
        plus += num;
} 
    while (num !== -1);
        alert(plus);