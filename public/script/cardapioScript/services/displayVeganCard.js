import { cardAdicionais } from "../dom/cardapio.js";
import { centralizeCardAdicionais } from "./centralizeWindow.js";

function displayVeganCard () {
    console.log("oi")
    cardAdicionais.querySelector("h1")[0].innerText = "Sua bebida é vegana ou tradicional?"
    cardAdicionais.querySelector("span")[0].innerText = "Escholha uma opção:"
    cardAdicionais.querySelector("span")[1].innerText = "Normal"
    cardAdicionais.querySelector("span")[2].innerText = "Vegano"
    cardAdicionais.getElementsByClassName("canela").innerText = "Normal" 
    cardAdicionais.getElementsByClassName("canela").value = "Normal" 
    cardAdicionais.getElementsByClassName("cacau").innerText = "Vegano" 
    cardAdicionais.getElementsByClassName("cacau").value = "Vegano" 
    centralizeCardAdicionais()
}

export { displayVeganCard }