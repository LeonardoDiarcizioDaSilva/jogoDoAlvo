function desenhar(pos1, pos2, tamanhoX, tamanhoY, cor) {

    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(pos1, pos2, tamanhoX, tamanhoY);

}

desenhar(0, 0, 450, 400, "green");

desenhar(50, 75, 120, 130, "black");
desenhar( 280, 75, 120, 130, "black");

desenhar(170, 205, 110, 120, "black");

desenhar(100, 250, 70, 150, "black");
desenhar(280, 250, 70, 150, "black");
