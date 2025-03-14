const url = "http://localhost:3333"

function finalizarPedido(id) {
    const pedidoId = { "id": id }
    fetch(url,{
            method: "PATCH",
            body: JSON.stringify(pedidoId),
            headers: {
                "Content-type": "application/json" 
            },
    })
    console.log("pedido finalizado")
}

async function getPedido () {
    const url = "http://localhost:3333"
    const response = await fetch(url); 
    const data = await response.json(); 
    return data;
}


export { finalizarPedido, getPedido }