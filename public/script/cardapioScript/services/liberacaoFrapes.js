const horarioLiberacao = new Date("2026-06-15T20:00:00");

function liberacaoFrapre(cafe) {
    if (cafe.classList.contains("frappe")) {
        console.log(horarioLiberacao);
        return new Date() <= horarioLiberacao;
    }
    return true
}

export { liberacaoFrapre }