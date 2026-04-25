import { cardAbout, cardAdicionais, grayBackground, body, avancarPedido, inputLeite } from "../dom/cardapio.js";
import { inputAdicional, confirmacaoPedido } from "../adicionais.js";

function close() {
    const radioAdicional = document.getElementsByClassName("radio-adicional")
    const radioMilk = document.getElementsByClassName("radio-milk")
    if (cardAdicionais.style.display == "flex") {
        cardAdicionais.style.display = "none";
        inputAdicional.style.display = "none";
        confirmacaoPedido.style.backgroundColor = "#9c9c9c";
        avancarPedido.removeEventListener;
        if (radioAdicional[0].checked) {
            radioAdicional[0].checked = false;
        } else {
            radioAdicional[1].checked = false;
        };
    } else {
        grayBackground.style.display = "none";
        cardAbout.style.display = "none";
        inputLeite.style.display = "none";
        avancarPedido.style.backgroundColor = "#9c9c9c";
        avancarPedido.type = "button";
        body[0].style.overflow = "auto";
        if (radioMilk[0].checked) {
            radioMilk[0].checked = false;
        } else {
            radioMilk[1].checked = false;
        };
    }
    cardAdicionais.getElementsByClassName("titulo")[0].innerText = "Deseja algum adicional?"
    cardAdicionais.getElementsByClassName("title-span")[0].innerText = "Escolha seu adicional:"
    cardAdicionais.getElementsByClassName("info")[0].innerText = "Canela"
    cardAdicionais.getElementsByClassName("info")[1].innerText = "Cacau em pó"
    cardAdicionais.getElementsByClassName("canela").innerText = "Canela" 
    cardAdicionais.getElementsByClassName("canela").value = "Canela" 
    cardAdicionais.getElementsByClassName("cacau").innerText = "Cacau em pó" 
    cardAdicionais.getElementsByClassName("cacau").value = "Cacau em pó" 
}

export { close }