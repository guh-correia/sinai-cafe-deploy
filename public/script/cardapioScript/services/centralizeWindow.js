import { cardAbout, cardAdicionais } from "../dom/cardapio.js"; 

const body = document.getElementsByTagName("body")
const grayBackground = document.getElementById("gray-container") 

function centralizeCardAbout(card) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    window.scrollTo(top)
    body[0].style.overflow = "hidden";
    card.style.display = "flex";

    const elementWidth = card.offsetWidth;
    const elementHeight = card.offsetHeight;

    const centerX = (windowWidth - elementWidth) / 2;
    const centerY = (windowHeight - elementHeight) / 2;

    grayBackground.style.display = "block";
    
    card.style.left = `${centerX}px`;
    card.style.top = `${centerY}px`;
}

function centralizeCardAdicionais() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    window.scrollTo(top)
    cardAdicionais.style.display = "flex";

    const elementWidth = cardAdicionais.offsetWidth;
    const elementHeight = cardAdicionais.offsetHeight;

    const centerX = (windowWidth - elementWidth) / 2;
    const centerY = (windowHeight - elementHeight) / 2;

    grayBackground.style.display = "block";
    
    cardAdicionais.style.left = `${centerX}px`;
    cardAdicionais.style.top = `${centerY}px`;
}

export { centralizeCardAbout, centralizeCardAdicionais }