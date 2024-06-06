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

function calcMedia(n1: number, n2: number, n3: number, n4: number,    n5: number):number{

   return (n1+n2+n3+n4+n5)/5;
}

function parImpar(media:number):string{
   let parImpar: string = ``;

   if(media % 2 == 0){
      parImpar = `P`;
   }
   else{
      parImpar = `I`;
   }
   
   return parImpar;
}


function principal():void{

   const teclado = require (`prompt-sync`)();

   let n1: number = parseFloat(teclado(`Digite o primeiro numero: `)); 
   let n2: number = parseFloat(teclado(`Digite o segundo numero: `));
   let n3: number = parseFloat(teclado(`Digite o terceiro numero: `));
   let n4: number = parseFloat(teclado(`Digite o quarto numero: `));
   let n5: number = parseFloat(teclado(`Digite o quinto numero: `));

   let media: number = calcMedia(n1,n2,n3,n4,n5);
   let resultado: string = parImpar(media);

   console.log (`A média é ${media} e o número é ${resultado}`);
}



principal();




















