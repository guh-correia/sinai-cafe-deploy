import { getPedido } from "../api.js";
import { displayOrder, displayCompletedOrder } from "../views.js";
import { pedidosRecebidos } from "../kds.js";

async function getAllPedidos() {
    const response = await getPedido();

    for (let i = 0; i < response.length; i++) {
        if (response[i].status == 0)
        displayOrder(i, ".pedidos-em-producao")
        pedidosRecebidos.push(i)
    }
}

async function getAllPedidosFinalizados() {
    const response = await getPedido();

    for (let i = 0; i < response.length; i++) {
        if (response[i].status == 1)
        displayCompletedOrder(i, ".pedidos-finalizados")
    }
}

export { getAllPedidos, getAllPedidosFinalizados }