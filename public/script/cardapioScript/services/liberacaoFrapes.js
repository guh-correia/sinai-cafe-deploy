const horarioLiberacao = new Date("2026-06-15T20:00:00");
const agora = new Date()

function liberacaoFrapre(cafe) {
    if (cafe.classList.contains("frappe")) {
        console.log(horarioLiberacao);
        console.log(agora)
        console.log(agora >= horarioLiberacao)
        return agora >= horarioLiberacao;   
    }
    return true
}

export { liberacaoFrapre }