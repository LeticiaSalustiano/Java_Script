let altura, largura;
let vidas = 3;
let tempoRestante = 50;
let intervalo;

function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log("Largura:", largura, "Altura:", altura);
}

ajustaTamanhoTela();
window.addEventListener('resize', ajustaTamanhoTela);

function randomizaPosicao() {
    let posicaoX = Math.floor(Math.random() * largura) - 50;
    let posicaoY = Math.floor(Math.random() * altura) - 50;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // Criar o elemento HTML
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoGrande();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.classList.add(ladoAleatorio());

    mosquito.onclick = function() {
        this.remove(); // Remove o mosquito quando clicado
    };

    document.getElementById('gameArea').appendChild(mosquito);
}

function tamanhoGrande() {
    let classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}

function ladoAleatorio() {
    let lado = Math.floor(Math.random() * 2);
    return lado === 0 ? "ladoA" : "ladoB";
}

function apareceNaTela() {
    randomizaPosicao();
}

function comecarPartida() {
    if (intervalo) clearInterval(intervalo); // Limpa intervalos anteriores
    intervalo = setInterval(apareceNaTela, 1000);
    contagemTempo();
}

function contagemTempo() {
    let timer = setInterval(() => {
        if (tempoRestante > 0) {
            tempoRestante--;
            document.getElementById('tempoRestante').textContent = tempoRestante;
        } else {
            clearInterval(timer);
            clearInterval(intervalo);
            alert('Fim de jogo! Você eliminou ' + (3 - vidas) + ' mosquitos.');
            // Resetar o jogo, se desejado
        }
    }, 1000);
}
