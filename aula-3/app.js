alert('Boas vindas ao jogo do número secreto');
let qunatidadeDeSorteios = 50
let numeroSecreto = parseInt(Math.random() * qunatidadeDeSorteios + 1);
console.log(numeroSecreto);
let chute;
tentativas = 1;

//enquanto não for igual ao numeroSecreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${qunatidadeDeSorteios}`);
    //if e else --> se sim ou se não
    if (chute == numeroSecreto) {
        break;
     } else {
        if (chute > numeroSecreto) {
            alert(`O númeor secreto é menor que ${chute}`);
       } else {
            alert(`O númeor secreto é maior que ${chute}`);
       }
       //tentativas + 1 
       tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai, vc descobril o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);

//if (tentativas > 1) {
//    alert(`Parabéns, vc descobril o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Parabéns, vc descobril o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
