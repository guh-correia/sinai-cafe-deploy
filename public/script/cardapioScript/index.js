import { iniciarCardapio } from "./cardapio.js";
import { close } from "./services/close.js";

const closeButtons = document.getElementsByClassName("close");

Array.from(closeButtons).forEach(button => {
    button.addEventListener("click", close);
});

addEventListener("DOMContentLoaded", () => {
    iniciarCardapio()
})