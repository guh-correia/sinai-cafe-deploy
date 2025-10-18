import { getPedido } from "./api.js";
import { time } from "./services/timer.js"
import { capitalize } from "../pedidoFinalizadoScript/services/capitalize.js";

async function displayOrder(comanda, dom) {
    const response = await getPedido();
    document.querySelector(dom).innerHTML += `
    <div class="pedido pedido-${comanda}">
        <div class="info-bebida">
            <div class="bebida-cliente">
                <h2 class="bebida">${capitalize(response[comanda].coffee)}</h2><span class="name">${response[comanda].name}</span>
                <span class="comanda">#${(comanda + 1)}</span>
                <div class="time">
                    <span class="min comanda-time-${comanda}">00</span>    
                    <span>:</span>    
                    <span class="sec comanda-time-${comanda}">00</span>    
                </div>
            </div>
            <div class="especificacao-bebida">
                <h3 class="leite">Leite: <span>${response[comanda].milk}</span></h3>
                <h3 class="adicional">Adicional: <span>${response[comanda].additionals}</span></h3>
            </div>
        </div>

        <div class="botao-pedido comanda-${comanda}">
            <span>Começar</span>
        </div>
    </div>`;
}

async function displayCompletedOrder(comanda, dom) {
    const response = await getPedido();
    document.querySelector(dom).innerHTML += `
    <div class="pedido pedido-${comanda}">
        <div class="info-bebida">
            <div class="bebida-cliente">
                <h2 class="bebida">${capitalize(response[comanda].coffee)}</h2><span class="name">${response[comanda].name}</span>
                <span class = "comanda">#${(comanda + 1)}</span>
            </div>
            <div class="especificacao-bebida">
                <h3 class="leite">Leite: <span>${response[comanda].milk}</span></h3>
                <h3 class="adicional">Adicional: <span>${response[comanda].additionals}</span></h3>
            </div>
        </div>

        <div class="botao-pedido comanda-${comanda}">
            <span>Finalizado</span>
        </div>
    </div>`
    time();
}

export { displayOrder, displayCompletedOrder }