import { getPedido } from "./api.js"
import { displayOrder } from "./views.js";
import { getAllPedidos, getAllPedidosFinalizados } from "./services/getData.js";

addEventListener("DOMContentLoaded", getAllPedidos)

let pedidosRecebidos = []

async function getPedidos() {
    const response = await getPedido();

    if (pedidosRecebidos.length < response.length) {
        displayOrder(response.length - 1, ".pedidos-em-producao")
        pedidosRecebidos.push(response.length)
    }
}

setInterval(() => {
    getPedidos()
}, 5000);

document.querySelector(".finalizados-button").addEventListener("click", () => {
    if(document.querySelector(".preparando-button").classList.contains("active")) {
        getAllPedidosFinalizados()
        document.querySelector(".pedidos-em-producao").innerHTML = ""
        document.querySelector(".preparando-button").classList.toggle("active")
        document.querySelector(".finalizados-button").classList.toggle("active")
    }
})

document.querySelector(".preparando-button").addEventListener("click", () => {
    if(!document.querySelector(".preparando-button").classList.contains("active")) {
        getAllPedidos()
        document.querySelector(".pedidos-finalizados").innerHTML = ""
        document.querySelector(".preparando-button").classList.toggle("active")
        document.querySelector(".finalizados-button").classList.toggle("active")
    }
})

export { pedidosRecebidos }