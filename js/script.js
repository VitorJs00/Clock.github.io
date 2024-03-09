const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const releogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr<10) {hr = '0' +hr }
    if(min<10) {min = '0' +min}
    if(s<10) {s = '0' + s}


    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = s
}) 