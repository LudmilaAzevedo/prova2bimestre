/* Atividade 1 (30 pontos)

Faça um programa que tenha 3 funções:

1º Função recebe 5 números e retorne a média desses números (10 pontos)

2º Função recebe a média e define se esse número é PAR ou IMPAR,
   o retorno dessa função deve ser P para par e I para impar (10 pontos)
3º Função principal aonde: (10 pontos)
- o usuário digita os 5 números
- aonde é chamada a função que retorna a média
- aonde é chamada a função que retorna P ou I
- nessa função é exibido a mensagem com o valor médio e se o número
é par ou impar

*/
function calcMedia(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5) / 5;
}
function parImpar(media) {
    var parImpar = "";
    if (media % 2 == 0) {
        parImpar = "P";
    }
    else {
        parImpar = "I";
    }
    return parImpar;
}
function principal() {
    var teclado = require("prompt-sync")();
    var n1 = parseFloat(teclado("Digite o primeiro numero: "));
    var n2 = parseFloat(teclado("Digite o segundo numero: "));
    var n3 = parseFloat(teclado("Digite o terceiro numero: "));
    var n4 = parseFloat(teclado("Digite o quarto numero: "));
    var n5 = parseFloat(teclado("Digite o quinto numero: "));
    var media = calcMedia(n1, n2, n3, n4, n5);
    var resultado = parImpar(media);
    console.log("A m\u00E9dia \u00E9 ".concat(media, " e o n\u00FAmero \u00E9 ").concat(resultado));
}
principal();
