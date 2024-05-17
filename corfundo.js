const conteudo = document.querySelector('.conteudo');
const color = document.querySelector('input');

const corPadrao = '#fff';
conteudo.style.backgroundColor = `$codPadrao`;

function mudarCorFundo(){
    conteudo.style.backgroundColor = `${color.value}`;
}