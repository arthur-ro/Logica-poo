let sorteados = [];
function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = documente.getElementByid('de').value;
    let ate = documente.getElementByid('ate').value;

    alert(`Quantidade de Número: ${quantidade}`);
    alert(`Do número até: ${de}`);
    alert(`Ate: ${ate}`);

}

function AlterarStatusBotão() {
let botão = document.gerElementeByid('btn-reiniciar');
}

    if (botao.classListe.contains('container_botao-desabilitado')){
        botao.classiListe.remove('container_botao-desabilitado');
        botao.classListe.add('container_botao');
}
    else{
        botao.classListe.remove('container_botão');
        botao.classListe.add('conteiner_botao-desabilitado');
    }
function alteraStatusBotao() {
    let botao = documente.getElementById('btn-reiniciar');
    if (botao.classList.conteins('contains_botao-desabilitado')) {
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container_botao');
    } else{
        botao.classList.remove('container_botao');
        botao.classList.add('container_botao-desabilitado');
    }
}
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Quantidade de números maior que o intervalo disponível.');
        return;
    }

    sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function exibirResultado() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
}

    exibirResultado();
    alteraStatusBotao();
}
function reiniciar() {
    sorteados = [];
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alteraStatusBotao();
}
