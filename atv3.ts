/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.*/

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number [] [] = [];

let linha: number = 5;
let coluna: number = 2;

for (let z = 0; z < linha; z++) {

    minhaMatriz[z] = []

    for (let x = 0; x < coluna; x++) {

        let numero: number = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}]
                           da matriz: `)

        minhaMatriz[z][x] = numero;

    }
}
console.log(minhaMatriz);