const hora = document.querySelector('#hora');
const minuto = document.querySelector('#minuto');
const segundo = document.querySelector('#segundo');

setInterval(() => {
    let data = new Date();
    
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    
    hora.innerHTML = `${formatTime(hora)}`;
    minuto.innerHTML = `${formatTime(minuto)}`;
    segundo.innerHTML = `${formatTime(segundo)}`;

}, 1000);

function formatTime(time){
    return time < 10 ? "0" + time : time;
}