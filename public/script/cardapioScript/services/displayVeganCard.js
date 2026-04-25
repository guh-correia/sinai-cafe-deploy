import { cardAdicionais } from "../dom/cardapio.js";
import { centralizeCardAdicionais } from "./centralizeWindow.js";

function displayVeganCard () {
    console.log("oi")
    cardAdicionais.getElementsByClassName("titulo")[0].innerText = "Sua bebida é vegana ou tradicional?"
    cardAdicionais.getElementsByClassName("title-span")[0].innerText = "Escholha uma opção:"
    cardAdicionais.getElementsByClassName("info")[0].innerText = "Normal"
    cardAdicionais.getElementsByClassName("info")[1].innerText = "Vegano"
    cardAdicionais.getElementsByClassName("canela")[0].innerText = "Normal" 
    cardAdicionais.getElementsByClassName("radio-adicional")[0].value = "Normal" 
    cardAdicionais.getElementsByClassName("cacau")[0].innerText = "Vegano" 
    cardAdicionais.getElementsByClassName("radio-adicional")[0].value = "Vegano" 
    centralizeCardAdicionais()
}

export { displayVeganCard }