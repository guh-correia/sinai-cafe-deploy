import { getCoffeeId } from "./services/getData.js";
import { postPedido } from "./api.js";


async function pedidoFeito() {
    document.querySelector("main").style.display = "none";
    const cardPedidoFeito = document.getElementsByClassName("pedido-feito")[0]
    cardPedidoFeito.style.height = "600px";
    cardPedidoFeito.style.width = "900px";
    cardPedidoFeito.style.display = "flex";
    cardPedidoFeito.style.boxshadow = "0px 0px 18px -3px";
    cardPedidoFeito.style.zIndex = "2";
    document.querySelector(".pedido-feito span").innerText += " " +  await getCoffeeId()
    document.querySelector(".pedido-feito h3").style.fontSize = "46px"
    document.querySelector(".pedido-feito span").style.fontSize = "42px"
    document.querySelector(".pedido-feito p").style.fontSize = "34px"
    document.querySelector(".insta").style.fontSize = "40px"
    document.querySelector(".insta span").style.fontSize = "26px"
    document.querySelector(".insta").style.display = "flex"
    setTimeout(() => {
        cardPedidoFeito.style.height = "0px";
        cardPedidoFeito.style.width = "0px";
        cardPedidoFeito.style.display = "flex";
        cardPedidoFeito.style.boxshadow = "0px 0px 18px -3px";
        cardPedidoFeito.style.zIndex = "2";
        document.querySelector(".pedido-feito h3").style.fontSize = "0px"
        document.querySelector(".pedido-feito span").style.fontSize = "0px"
        document.querySelector(".pedido-feito p").style.fontSize = "0px"
    }, 5000);
    setTimeout(() => {
        window.location.href = "https://sinai-cafe.vercel.app";
    }, 5200);
    return postPedido()
}

export { pedidoFeito }