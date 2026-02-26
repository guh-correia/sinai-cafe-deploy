import { cafes } from "./dom/cardapio.js"
import { popUpAbout } from "./AboutBebida.js"

function iniciarCardapio() {
    cafes.forEach(cafe => {
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
        if (cafe.classList.contains("bebida-indisponivel")) {
            cafe.removeEventListener;
        }
    });    
}

export { iniciarCardapio }