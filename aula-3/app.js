alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute

//enquanto não for igual ao numeroSecreto
while(chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 10');
    //if e else --> se sim ou se não
    if (chute == numeroSecreto) {
        alert(`Parabéns, vc descobril o número secreto ${numeroSecreto}`)
     } else {
        if (chute > numeroSecreto) {
            alert(`O númeor secreto é menor que ${chute}`);
       } else {
            alert(`O númeor secreto é maior que ${chute}`);
       }
    }
}
