/* Faça 3 prompts ao usuário: 
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular. 
Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu 
cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário. */
/* ___________________________________________________________________________________________ */
var operation = prompt('Operação (+,-,*,/)');
var number1 = parseFloat(prompt('Numero 1'));
var number2 = parseFloat(prompt('Numero 2'));
switch (operation) {
  case '+':
    alert(number1 + number2);
    break;
  case '-':
    alert(number1 - number2);
    break;
  case '*':
    alert(number1 * number2);
    break;
  case '/':
    alert(number1 / number2);
    break;
  default:
    alert('Operação inválida');
}