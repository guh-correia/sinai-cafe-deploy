import { cafes } from "./dom/cardapio.js"
import { popUpAbout } from "./AboutBebida.js"
import { liberacaoFrapre } from "./services/liberacaoFrapes";

function iniciarCardapio() {
    cafes.forEach(cafe => {
        if (!cafe.classList.contains("bebida-indisponivel") || liberacaoFrapre(cafe)) {
            cafe.addEventListener("click", () => {
            popUpAbout(cafe);
            });
            cafe.addEventListener("mousedown", () => {
                cafe.classList.add("pressed")
            });
            cafe.addEventListener("mouseup", () => {
                cafe.classList.remove("pressed")
            });
            cafe.addEventListener("mouseleave", () => {
                cafe.classList.remove("pressed")
            })
        }
    });    
}

export { iniciarCardapio }