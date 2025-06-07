import { centralizeCardAbout, centralizeCardAdicionais } from "./services/centralizeWindow.js";
import { getDescription } from "../cardapioScript/services/api.js";
import { cardAbout, cardAdicionais, inputLeite, avancarPedido, leiteIntegral, leiteZero } from "./dom/cardapio.js";
import { preventSubmit, preventColdCoffeeSubmit } from "./services/preventNoMilk.js";

inputLeite.style.display = "none";

export async function popUpAbout(cafe) {
    if(!cafe.classList.contains("cafe-gelado")) {
        avancarPedido.addEventListener("click", preventSubmit);
    }
    inputLeite.addEventListener("change", displayMilk);
    hideMilkOption(cafe)
    let nomeBebida = cafe.querySelector("h3").innerHTML;
    cardAbout.querySelector("h4").innerText = nomeBebida;
    const description = await getDescription();
    description.coffees.forEach(coffee => {
        if (coffee[nomeBebida]){
            let cafe = coffee[nomeBebida];
            cardAbout.querySelector("img").src = cafe.image;
            cardAdicionais.querySelector("img").src = cafe.image;
            cardAbout.querySelector("p").innerText = cafe.description;
            document.querySelector(".nome-bebida").value = [nomeBebida];
        }
    });
    centralizeCardAbout();
}

function hideMilkOption(cafe) {
    const titleOptions = document.getElementsByClassName("title-span")[0]
    const milkOptions = document.getElementsByClassName("options");    
    if (cafe.classList.contains("no-milk")) { 
        Array.from(milkOptions).forEach(element => {
            element.style.display = "none"
        });
        titleOptions.style.display = "none"
        avancarPedido.style.backgroundColor = "#000000";
        avancarPedido.style.cursor = "pointer"
        avancarPedido.type = "submit"
    } else if (cafe.classList.contains("cafe-gelado")){
        Array.from(milkOptions).forEach(element => {
            element.style.display = "flex"
        });
        avancarPedido.style.backgroundColor = "#727272";
        avancarPedido.type = "submit"
        titleOptions.style.display = "flex"
        avancarPedido.removeEventListener;
    } else {
        Array.from(milkOptions).forEach(element => {
            element.style.display = "flex"
        });
        avancarPedido.style.backgroundColor = "#727272";
        titleOptions.style.display = "flex"        
    }
}

function displayMilk() {
    const spanIntegral = document.getElementsByClassName("integral");
    const spanZero = document.getElementsByClassName("zero-lactose");
    const spanVegetal = document.getElementsByClassName("vegetal");
    avancarPedido.style.backgroundColor = "#000000";
    avancarPedido.disabled = false;
    avancarPedido.style.cursor = "pointer";
    inputLeite.style.display = "flex";

    if (leiteIntegral.checked) {
        spanIntegral[0].style.display = "inline";
        spanZero[0].style.display = "none";
        spanVegetal[0].style.display = "none";
    } else if (leiteZero.checked) {
        spanIntegral[0].style.display = "none";
        spanZero[0].style.display = "inline";
        spanVegetal[0].style.display = "none";
    } else {
        spanIntegral[0].style.display = "none";
        spanZero[0].style.display = "none";
        spanVegetal[0].style.display = "inline";
    }
}

