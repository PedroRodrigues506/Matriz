/*8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.*/

console.clear();
let teclado = require (`prompt-sync`)();
let matrizDois: number[][] = new Array(3);
let maior: number = 0;
let coluna: number = 3;
let linha: number = 3;
let coluna2 : number = 0;
let linha2: number = 0;


for (let i = 0; i < linha; i++) {
    matrizDois[i] = new Array(3);

    for (let j = 0; j < coluna; j++){
let numero: number = Math.floor(Math.random()* 21);

    if (numero > maior) {
       maior = numero;
       linha2 = i;
       coluna2 = j;
     }
     matrizDois[i][j] = numero;
    }
  }
console.log(matrizDois);
console.log(`O maior é: ${maior} na posição ${linha2}, ${coluna2}`);

