console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: string [] [] = [];

let linha: number = 3;
let coluna: number = 3;

for (let z = 0; z < linha; z++) {

    minhaMatriz[z] = []

    for (let x = 0; x < coluna; x++) {

        let nome: string = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}]
                           da matriz: `)

        minhaMatriz[z][x] = nome;

    }
}
console.log(minhaMatriz);