const btnPlay = document.querySelector('#play')
const btnPause = document.querySelector('#pause')
const btnStop = document.querySelector('#stop')
const btnPlus = document.querySelector('#plus')
const btnMinus = document.querySelector('#minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const btnForest = document.querySelector('#forest')
const btnRain = document.querySelector('#rainy')
const btnCoffeeshop = document.querySelector('#coffeeshop')
const btnFireplace = document.querySelector('#fireplace')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

export {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  minutesDisplay,
  secondsDisplay,
  btnForest,
  btnRain,
  btnCoffeeshop,
  btnFireplace,
  minutes,
  seconds
}
