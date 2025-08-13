function obterCarrinho() {
    const carrinhoJSON = localStorage.getItem("carrinho");
    return carrinhoJSON ? JSON.parse(carrinhoJSON) : [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarItem(produto, quantidade = 1) {
    let carrinho = obterCarrinho();
    const itemExistente = carrinho.find(item => item.id === produto.ID);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produto.ID,
            nome: produto.Nome,
            preco: parseFloat(produto.Preço),
            quantidade: quantidade,
            linkS3: produto.LinkS3 || null
        });
    }
    salvarCarrinho(carrinho);
}

function removerItem(produtoId) {
    let carrinho = obterCarrinho();
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho(carrinho);
}

function obterQuantidadeItem(produtoId) {
    const carrinho = obterCarrinho();
    const item = carrinho.find(item => item.id === produtoId);
    return item ? item.quantidade : 0;
}

function limparTodoCarrinho() {
    localStorage.removeItem("carrinho");
}


