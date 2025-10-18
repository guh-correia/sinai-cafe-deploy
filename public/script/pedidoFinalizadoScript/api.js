import { getCoffee } from "./services/getData.js";

const url = "https://sinaicafe.com.br/api/pedido"

async function getPedido () {
    const response = await fetch(url, {
        referrerPolicy: 'no-referrer-when-downgrade'
      });
    const data = await response.json(); 
    return data;
}

function postPedido() {
    const coffee = getCoffee();
    fetch(url,{
            method: "POST",
            body: JSON.stringify(coffee),
            headers: {
                "Content-type": "application/json" 
            },
    })
}

export { getPedido, postPedido }