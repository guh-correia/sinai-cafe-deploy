import { getPedido } from "../api.js"
import { capitalize } from "./capitalize.js"
import { pedidoFeito } from "../displayPedidoFeito.js"

const status = 0

function getCoffee() {
    const especificacoesBebida = document.querySelectorAll(".especificacao-pedido p")
    const cafe = document.querySelector(".bebida span").innerText
    console.log(cafe)
    const leite = especificacoesBebida[0].innerText
    const adicional = especificacoesBebida[1].innerText
    const nome = document.getElementById("nome-cliente").value;
    return {nome, cafe, leite, adicional, status}
}

async function getName() {
    const nome = document.getElementById("nome-cliente");
    console.log(nome.value)
    if (nome.value == "" || nome.value.length <= 1) {
        console.log(nome.innerText)
        console.log("Por favor, coloque um nome válido")
    } else {
        console.log(nome.innerText)
        console.log("ok")
        document.querySelector(".pedido-feito h3").innerText += " " + capitalize(nome.value) + "!"
        pedidoFeito()
    }
}

async function getCoffeeId() {
    const allOrders = await getPedido()
    return allOrders.length + 1
}

export { getCoffee, getName, getCoffeeId }