const url = "https://sinaicafe.com.br/api"

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
    const response = await fetch(url); 
    const data = await response.json(); 
    return data;
}

async function dbTest() {
    const response = await fetch("https://sinaicafe.com.br/api/pedidos"); 
    const data = await response.json(); 
    console.log("bd data: ", data)
    return data;
}

export { finalizarPedido, getPedido, dbTest }