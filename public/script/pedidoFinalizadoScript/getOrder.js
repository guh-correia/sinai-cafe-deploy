import { getName } from "./services/getData.js";

document.getElementById("nome-cliente").addEventListener("input", function(event) {
    this.value = this.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
});

document.getElementById("nome-cliente").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede que a quebra de linha aconteça
        getName()
    }
})

document.getElementById("lancar-pedido").addEventListener("click", getName)