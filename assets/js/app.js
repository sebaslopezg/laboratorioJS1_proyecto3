//cronometro
let minutos = "00", segundos = "00", milisegundos = "00", cronometroDisplay = document.querySelector("#cronometro")
let cronometroCall;
let cronometroActivado = false;
const iniciar = document.getElementById('iniciar')
const frenar = document.getElementById('frenar')

iniciar.addEventListener('click', () => {
    activarCronometro()
})

frenar.addEventListener('click', () => {
    reset()
})


function cronometro(){

    milisegundos++
    if (milisegundos < 10) {
        milisegundos = "0" + milisegundos
    }

    if (milisegundos > 59) {
        milisegundos = "00"
        segundos++

        if (segundos < 10) {
            segundos = "0" + segundos
        }
    }



    if (segundos > 59) {
        segundos = "00"
        minutos++

        if(minutos < 10){
            minutos = "0" + minutos
        }
    }
    cronometroDisplay.textContent = `${minutos}:${segundos}:${milisegundos}`
}

function activarCronometro(){
    if (!cronometroActivado){
        cronometroCall = setInterval(cronometro, 100)
        cronometroActivado = true;
        iniciar.innerHTML = "<i class='fa-solid fa-pause'></i> Pausar"
    }else{
        cronometroActivado = false;
        clearInterval(cronometroCall)
        iniciar.innerHTML = "<i class='fa-solid fa-play'></i> Iniciar"
    }
}

function reset(){
    clearInterval(cronometroCall)
    cronometroDisplay.textContent = `00:00:00`
    cronometroActivado = false;
    minutos = '00'
    segundos = '00'
    milisegundos = '00'
    iniciar.innerHTML = "<i class='fa-solid fa-play'></i> Iniciar"
}