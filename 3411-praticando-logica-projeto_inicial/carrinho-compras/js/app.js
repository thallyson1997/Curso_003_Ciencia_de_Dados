let totalGeral = 0;
limpar();

function adicionar(){
    let qtd = parseInt(document.getElementById('quantidade').value);
    if (qtd > 0){
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split("-")[0];
        let precoProduto = parseFloat(produto.split("R$")[1]);
        let preco = precoProduto * qtd;
        let carrinho = document.getElementById('lista-produtos')
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
              <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;
    } else {
        alert('Quantidade inválida: Preencha o campo de quantidade!')
    }
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = '';
}