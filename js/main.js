const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 23,
        "poder": 34,
        "energia": -24,
        "velocidade": -50
    },

    "blindagem": {
        "forca": 414,
        "poder": 200,
        "energia": -10,
        "velocidade": -98
    },
    "nucleos":{
        "forca": 0,
        "poder": 78,
        "energia": 480,
        "velocidade": -120
    },
    "pernas":{
        "forca": 280,
        "poder": 210,
        "energia": -320,
        "velocidade": 420
    },
    "foguetes":{
        "forca": 1000,
        "poder": 280,
        "energia": -80,
        "velocidade": -74
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInd(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}