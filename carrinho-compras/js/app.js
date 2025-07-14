function adicionar() {
    // Recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');

    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);

    let preco = Number(quantidade.value) * Number(valorUnitario);
    alert(preco);

    // Calcular o preço, o nosso subtotal
    // Adicionar no carrinho
    // Atualizar o valor total
}

