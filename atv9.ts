/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.*/

console.clear();
let teclado = require (`prompt-sync`)();
let minhaMatriz: number[][] = [];
let somaNumeroMatriz: number = 0;

for (let i = 0; i < 6; i++){
    minhaMatriz[i] = [];
    for (let j = 0; j < 6; j++){

        let numero: number = parseFloat(teclado(`Digite o numero que vai estar no endereço [${i} , ${j}] da matriz:`));

        minhaMatriz[i][j] = numero;

        if (j % 2 == 0){
            somaNumeroMatriz += numero;
        }
    }
}
console.log(`A soma dos numeros nas colunas pares sao: ${somaNumeroMatriz}`);

console.log(minhaMatriz);