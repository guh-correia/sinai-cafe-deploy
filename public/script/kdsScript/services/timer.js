import { getPedido } from "../api.js"
import { finalizarPedido } from "../api.js";

async function time(botao, comanda) {
    const minutes = document.querySelector(`.time .min.comanda-time-${comanda}`);
    const seconds = document.querySelector(`.time .sec.comanda-time-${comanda}`);

    let sec = 0;
    let min = 0;

    const interval = setInterval(() => {
        sec++;

        if (sec <= 9) {
            seconds.innerText = "0" + sec;
        } else if (sec <= 59) {
            seconds.innerText = sec;
        } else {
            sec = 0;
            seconds.innerText = "00";
            min++;

            minutes.innerText = min <= 9 ? "0" + min : min;
        }
    }, 1000);

    botao.classList.add("ativo");
    botao.querySelector("span").innerText = "Preparando";
    botao.style.backgroundColor = "#fb8351";
    botao.style.color = "#ffffff";

    botao.addEventListener("click", () => {
        clearInterval(interval);

        const pedido = document.querySelector(`.pedido-${comanda}`);
        pedido.style.display = "none";

        finalizarPedido(comanda + 1);
    });
}

export { time }