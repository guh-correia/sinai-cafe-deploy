import { leiteIntegral } from "../dom/cardapio.js";
import { centralizeCardAdicionais } from "./centralizeWindow.js";

function blinkMilk() {
    const leites = document.getElementsByClassName("leites");
    leites[0].classList.add("blinkColor");
    leites[1].classList.add("blinkColor");
    leites[2].classList.add("blinkColor");

    setTimeout(() => {
        leites[0].classList.remove('blinkColor');
        leites[1].classList.remove('blinkColor');
        leites[2].classList.remove("blinkColor");
        setTimeout(() => {
            leites[0].classList.add('blinkColor');
            leites[1].classList.add('blinkColor');
            leites[2].classList.add("blinkColor");
            setTimeout(() => {
                leites[0].classList.remove('blinkColor');
                leites[1].classList.remove('blinkColor');
                leites[2].classList.remove("blinkColor");
            }, 120);
        }, 120);
      }, 120); 
}

function preventSubmit() {
    const leiteZero = document.getElementById("zero");
    const leiteVegetal = document.getElementById("vegetal");
    const returnButton = document.getElementById("return-button");
    if (!leiteIntegral.checked & !leiteZero.checked & !leiteVegetal.checked) {
        blinkMilk();
    } else {
        returnButton.style.display = "block"
        centralizeCardAdicionais();
    }
}

export { preventSubmit }