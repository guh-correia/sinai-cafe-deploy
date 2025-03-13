import { getCoffee } from "./services/getData.js";

const url = "http://localhost:3333"

async function getPedido () {
    const response = await fetch(url);
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