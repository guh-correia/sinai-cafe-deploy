const confirmacaoPedido = document.getElementsByClassName("confirmacao-pedido")[0];
const canela = document.getElementById("canela");
const cacau = document.getElementById("cacau");
const spanCanela = document.getElementsByClassName("canela");
const spanCacau = document.getElementsByClassName("cacau");
const spanNada = document.getElementsByClassName("nada");
const inputAdicional = document.getElementById("tipo-adicional");

inputAdicional.addEventListener("change", displayAdicionais);

inputAdicional.style.display = "none";

function displayAdicionais() {
    confirmacaoPedido.style.backgroundColor = "#000000";
    confirmacaoPedido.disabled = false;
    confirmacaoPedido.style.cursor = "pointer";
    inputAdicional.style.display = "flex";

    if (canela.checked) {
        spanCanela[0].style.display = "inline";
        spanCacau[0].style.display = "none";
        spanNada[0].style.display = "none"
    } else if (cacau.checked) {
        spanCanela[0].style.display = "none";
        spanCacau[0].style.display = "inline";
        spanNada[0].style.display = "none"

    } else {
        spanNada[0].style.display = "inline";
        spanCanela[0].style.display = "none";
        spanCacau[0].style.display = "none";
    }
}

export { confirmacaoPedido, inputAdicional, displayAdicionais }