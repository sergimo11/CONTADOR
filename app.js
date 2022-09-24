const avanzara=document.getElementById("avanzar");
const numeral=document.getElementById("numeral");
const retroceder=document.getElementById("retroceder");
const reiniciar=document.getElementById("reiniciar");
avanzara.addEventListener('click',agregar);

let contador=0

function agregar(){
    contador++;

    numeral.textContent=contador
    numeral.style.color='green'
}

retroceder.addEventListener('click',desen);

function desen(){

    contador--;

    numeral.textContent=contador
    numeral.style.color='red'
}

reiniciar.addEventListener('click',rei);


function rei(){
    contador=0

    numeral.textContent=contador
    numeral.style.color='#fff'
}



