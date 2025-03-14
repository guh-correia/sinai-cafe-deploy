async function getDescription() {
    const url = "/sinai-cafe/json/cafes.json"
    const result = await fetch(url)
    return result.json();
}

export { getDescription }