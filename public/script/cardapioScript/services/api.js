async function getDescription() {
    const url = "../json/cafes.json"
    const result = await fetch(url)
    return result.json();
}

export { getDescription }