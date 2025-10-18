import { getCoffee } from "./services/getData.js";

const url = "http://127.0.0.1:3000"

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