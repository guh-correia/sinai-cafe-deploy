async function getDescription() {
    const url = "../json/cafes.json"
    const result = await fetch('/json/cafes.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Erro ao carregar o JSON:', error));
    return result;
}

export { getDescription }