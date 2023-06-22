    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    var pontos = document.getElementById("pontos");

    var raio = 10;
    var xRandom;
    var yRandom;

    function desenhaCirculo(posX, posY, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(posX, posY, raio, 0, 2 * Math.PI);
        pincel.fill();

    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);

    }

    function alvo(posX, posY) {

        desenhaCirculo(posX, posY, raio+20, 'red');
        desenhaCirculo(posX, posY, raio+10, 'white');
        desenhaCirculo(posX, posY, raio, 'red');

    }

    function posicaoDoAlvo(posicaoMaxima) {

        return Math.floor(Math.random() * posicaoMaxima);

    }

function timer() {
    limpaTela();
    xRandom = posicaoDoAlvo(600);
    yRandom = posicaoDoAlvo(400);
    alvo(xRandom, yRandom);
}

setInterval(timer, 1000);

placar = 0;

function clicouNoAlvo(clicou) {

    var x = clicou.pageX - tela.offsetLeft;
    var y = clicou.pageY - tela.offsetTop;

    if((x > xRandom - raio)
    && (x < xRandom + raio)
    && (y > yRandom - raio)
    && (y < yRandom + raio)) {
        
        placar++;

    } else {
        placar = 0;
    }

    pontos.innerText = "Pontos: " + placar;

}

tela.onclick = clicouNoAlvo;
