import { getCoffee } from "./services/getData.js";

const url = "https://sinaicafe.com.br/api/pedido"

async function getPedido () {
    const response = await fetch("https://sinaicafe.com.br/api" , {
        referrerPolicy: 'no-referrer-when-downgrade'
      });
    const data = await response.json(); 
    return data;
}

function postPedido() {
    const coffee = getCoffee();
    fetch("https://sinaicafe.com.br/api/pedido",{
            method: "POST",
            body: JSON.stringify(coffee),
            headers: {
                "Content-type": "application/json" 
            },
    })
}

export { getPedido, postPedido }