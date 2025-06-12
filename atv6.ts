/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.*/

let teclado = require (`prompt-sync`)();
let matrizDois: number[][] = new Array (10);
for(let i = 0; i <3; i++){
    matrizDois[i] = new Array (3);  

    for (let j = 0; j < 3; j++) {
        let nome: number = teclado(`digite  o nome que vai estar no seu endereço [${i}, ${j}]`)
        if(nome <= 9){
            matrizDois[i][j]= nome       
        }
        else{
            j--;
            console.log("erro");
            
        }
    }
}

console.log(matrizDois);