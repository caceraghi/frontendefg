const valor = document.querySelector('#valor');

function contarMais(){
    valor.innerHTML = `${parseInt(valor.innerText)+1}`;
}

function contarMenos(){
    valor.innerHTML = `${parseInt(valor.innerText)-1}`;
}