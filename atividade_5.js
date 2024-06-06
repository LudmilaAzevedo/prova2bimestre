/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que
verificar se o número é par antes de armazenar
no array), no final mostre o Array.
*/
console.clear();
var teclado = require("prompt-sync")();
var npar = [];
for (var i = 0; i <= 5; i++) {
    var numeroPares = parseFloat(teclado("Digite o numero: "));
    if (numeroPares % 2 == 0) {
        npar[i] = numeroPares;
    }
    else {
        i--;
    }
}
console.log("Os n\u00FAmeros pares armazenados s\u00E3o:".concat(npar));
