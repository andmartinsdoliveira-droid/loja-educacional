function formatarPreco(preco) {
    const numero = parseFloat(preco) || 0;
    return numero.toFixed(2).replace(".", ",");
}

function mostrarLoading(mostrar) {
    document.getElementById("loading").style.display = mostrar ? "flex" : "none";
    // Pode ser necessário ajustar a visibilidade de outros elementos aqui
}

function mostrarErro(mensagem) {
    document.getElementById("erro-mensagem").textContent = mensagem;
    document.getElementById("erro-container").style.display = "block";
    // Pode ser necessário esconder outros elementos aqui
}

function esconderErro() {
    document.getElementById("erro-container").style.display = "none";
}

function mostrarMensagem(texto, tipo) {
    const mensagem = document.createElement("div");
    mensagem.className = `mensagem mensagem-${tipo}`;
    mensagem.textContent = texto;
    mensagem.style.position = "fixed";
    mensagem.style.top = "20px";
    mensagem.style.right = "20px";
    mensagem.style.zIndex = "1001";
    mensagem.style.maxWidth = "300px";
    
    document.body.appendChild(mensagem);
    
    setTimeout(() => {
        if (mensagem.parentNode) {
            mensagem.parentNode.removeChild(mensagem);
        }
    }, 3000);
}


