/* Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20
O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.
 */
/* __________________________________________________________________________________________________ */
var num = parseInt(prompt('Informe o número'));

if (isNaN(num)) {
  alert('Número inválido');
} 
    else {
     var result = '';
     for (var i = 0; i <= 10; i++) {
      result += num + ' x ' + i + ' = ' + num * i + '\n';
    }
  alert(result);
}