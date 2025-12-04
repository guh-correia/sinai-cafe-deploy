import { getPedido } from "../api.js"
import { finalizarPedido } from "../api.js";

async function time() {
    const response = await getPedido();
    console.log(response)

    for (let i = 0; i < response.length; i++) { 
        let minutes = document.querySelector(`.time .min.comanda-time-${i}`)
        let seconds = document.querySelector(`.time .sec.comanda-time-${i}`)
        let sec = 0
        let min = 0
        setInterval(() => {
            sec += 1
            if (sec <= 9) {
                seconds.innerText = "0" + sec
            } else if (sec > 9 && sec <= 59) {
                seconds.innerText = sec
            } else if (sec == 60){
                sec = 0
                seconds.innerText = "0" + sec
                min += 1
                if (min <= 9) {
                    minutes.innerText = "0" + min
                } else if (min > 9 && min <= 59) {
                    minutes.innerText = min
                }
            }
        }, 1000);
        if (this.classList.contains(`comanda-${i}`)) {
            this.querySelector("span").innerText = "Preparando"
            this.style.backgroundColor = "#fb8351";
            this.style.color = "#ffffff";
            this.addEventListener("click", () => {
                const pedido = document.getElementsByClassName(`pedido-${i}`)[0]
                pedido.style.display = "none"
                finalizarPedido(i + 1)
            })
        }
    }   
}

export { time }