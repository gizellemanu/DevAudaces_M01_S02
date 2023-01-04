/* Ao entrar na página, seu script deve realizar 2 prompts 
ao usuário: um solicitando um “valor inicial”, e outro um 
valor para a “raíz”. Após o usuário inserir esses valores, 
o seu script deve calcular os 10 primeiros valores da 
sequência e exibir na tela. */
/* ________________________________________________________ */
var num = parseInt(prompt('Informe o número'));
var square  = parseInt(prompt('Informe a raiz'));
var plus = num;
var result = num.toString();
    for (var i = 0; i < 9; i++) {
    plus += square;
    result += ', ' + plus;
    }
alert('A P.A é: ' + result);