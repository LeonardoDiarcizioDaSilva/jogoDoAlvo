function desenharQuadrado(pos1, pos2, cor) {

    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(pos1, pos2, 50, 50);
    pincel.strokeRect(pos1, pos2, 50, 50)

}

for(posicao = 0; posicao <= 600; posicao = posicao + 50) {
    desenharQuadrado(posicao, 0, "green");
}
