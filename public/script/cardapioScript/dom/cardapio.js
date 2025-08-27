import { centralizeCardAbout, centralizeCardAdicionais } from "./services/centralizeWindow.js";

const cafes = document.querySelectorAll(".cafe");
const grayBackground = document.getElementById("gray-container");
const body = document.getElementsByTagName("body");
const cardAbout = document.getElementById("about");
const cardAdicionais = document.getElementById("adicionais");
const inputLeite = document.getElementById("tipo-leite");
const avancarPedido = document.getElementsByClassName("avancar-pedido")[0];
const leiteIntegral = document.getElementById("integral");
const leiteZero = document.getElementById("zero");
const leiteVegetal = document.getElementById("vegetal");
var showCode = document.getElementsByClassName("totem-code")[0];

export { cafes, grayBackground, body, cardAbout, cardAdicionais, inputLeite, avancarPedido, leiteIntegral, leiteVegetal, leiteZero } 

if (!sessionStorage.getItem("totemCode")) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    sessionStorage.setItem("totemCode", code);

    showTotemCode(code);
}

function showTotemCode(code) {
    showCode.innerHTML = code;
    grayBackground.style.display = "block";

    centralizeCardAbout(showCode)

    console.log(code)
}

const totemCode = sessionStorage.getItem("totemCode");