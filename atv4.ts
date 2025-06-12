/*4- Altere o código dois(2) desse conteúdo para funcionar
com números, faça o teste se o laço de repetição
referente a linha da matriz chega criar a quarta linha, salve
dessa forma e anexe a atividade o arquivo .ts e um print
da tela do cmd(prompt command) com o resultado do
teste.*/

console.clear();
let teclado = require (`prompt-sync`)();
let matrizDois: number[][] = new Array(4);

for (let i = 0; i <= 4; i++){
    matrizDois[i] = new Array(4);
   
    for (let j = 0; j <= 4; j++){
        let numero: number = teclado(`Digite o numero que vai estar no endereço [${i} , ${j}]da matriz:`);
        matrizDois[i][j] = numero;
    }
}
console.log(matrizDois);