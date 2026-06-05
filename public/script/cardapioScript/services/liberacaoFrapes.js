const horarioLiberacao = new Date("2026-06-05T20:00:00");
const agora = new Date()

function liberacaoFrapre(cafe) {
    if (cafe.classList.contains("frappe")) {
        return agora >= horarioLiberacao;   
    }
    return true
}

export { liberacaoFrapre }