async function getDescription() {
    const url = '../../../../json/cafes.json'; // Caminho absoluto (recomendado para o Vercel)
    try {
        const response = await fetch(url); // Faz a requisição
        if (!response.ok) {
            throw new Error(`Erro ao carregar o JSON: ${response.statusText}`);
        }
        const data = await response.json(); // Converte a resposta para JSON
        return data; // Retorna os dados
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        return null; // Retorna null em caso de erro
    }
}

export { getDescription }