function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = + chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre  ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
    }
}

function verificaSeFalouGameOver(palavra) {
    if (chuteForGameOver(palavra)) {
        document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <button id="jogar-novamente" class="btn-jogar btn-game-over">Jogar novamente</button>
        `;
        document.body.classList.add('game-over');
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteForGameOver(chute) {
    return chute == 'game over';
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})