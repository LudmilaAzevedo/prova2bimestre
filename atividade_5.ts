/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que 
verificar se o número é par antes de armazenar 
no array), no final mostre o Array. 
*/

console.clear();
const teclado = require(`prompt-sync`)();
let npar : number[] = [];

for (let i = 0; i <= 5; i++) {
        let numeroPares: number = parseFloat(teclado(`Digite o numero: `));
        if (numeroPares % 2 == 0) {
                npar[i] = numeroPares;                
        }
        else{
                i--;
        }
}
console.log(`Os números pares armazenados são:${npar}`);


















