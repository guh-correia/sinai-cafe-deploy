if (!sessionStorage.getItem("totemCode")) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    sessionStorage.setItem("totemCode", code);

    showTotemCode(code);
}

function showTotemCode(code) {
    showCode.innerHTML = code;
    grayBackground.style.display = "block";

    centralizeCardAbout(showCode)

    console.log(code)
}

const totemCode = sessionStorage.getItem("totemCode");