const relogio = document.querySelector('.relogio')
const iniciarButton = document.querySelector('.iniciar')
const pausarButton = document.querySelector('.pausar')
const zerarButton = document.querySelector('.zerar')

let intervalo

let contaSegundo = 0
let contaMinuto = 0
let contaHora = 0
let contaCentezimo = 0

function iniciar() {
  intervalo = setInterval(() => {
    contaCentezimo++
    if (contaCentezimo >= 100) {
      contaSegundo++
      contaCentezimo = 0
    }

    if (contaSegundo >= 60) {
      contaMinuto++
      contaSegundo = 0

    } if (contaMinuto >= 60) {
      contaHora++
      contaMinuto = 0
    }

    mostraHora(formatarData(contaHora, contaMinuto, contaSegundo, contaCentezimo))
  }, 10)
  relogio.style.color = '#8a2be2'
}

function pausar() {
  clearInterval(intervalo)
  relogio.style.color = 'red'

}

function zerar() {
  clearInterval(intervalo)
  contaHora = 0
  contaMinuto = 0
  contaSegundo = 0
  relogio.style.color = '#055037'
  mostraHora('00:00:00:00')
}

function formatarData(hora, minuto, segundo, centezimo) {
  return `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}:${centezimo.toString().padStart(2, '0')}`
}

function mostraHora(
  hora
) {

  relogio.innerHTML = hora
}


iniciarButton.addEventListener('click', iniciar)
pausarButton.addEventListener('click', pausar)
zerarButton.addEventListener('click', zerar)