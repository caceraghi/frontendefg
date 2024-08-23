var slide = document.querySelector('.slideshow');
var imagens = [
    './imagem/01.jpg',
    './imagem/02.jpg',
    './imagem/03.jpg'
];

var tempo = 3000;
var cont = 0;

function moverSlide(){
    slide.src = imagens[cont];

    if (cont < imagens.length - 1){
        cont++;
    }else{
        cont = 0;
    }

    setTimeout(moverSlide(), tempo);
}

window.onload = moverSlide;