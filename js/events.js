import {
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
} from './elements.js'

export default function ({ controls, timer, sound }) {
  btnPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
  })

  btnPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
  })

  btnStop.addEventListener('click', () => {
    controls.reset()
    timer.updateTimer(minutes, seconds)
    timer.hold()
  })

  btnPlus.addEventListener('click', () => {
    let newMinutes = Number(minutesDisplay.textContent)
    let newSeconds = Number(secondsDisplay.textContent)

    timer.updateTimer(++newMinutes, newSeconds)
  })

  btnMinus.addEventListener('click', () => {
    let newMinutes = Number(minutesDisplay.textContent)
    let newSeconds = Number(secondsDisplay.textContent)

    if (newMinutes <= 0) {
      newMinutes = 60
    }

    timer.updateTimer(--newMinutes, newSeconds)
  })

  btnForest.addEventListener('click', () => {
    btnForest.classList.toggle('card-active')
    if (!btnForest.classList.contains('card-active')) {
      sound.forest.pause()
    } else {
      sound.forest.play()
    }
  })

  btnRain.addEventListener('click', () => {
    btnRain.classList.toggle('card-active')
    if (!btnRain.classList.contains('card-active')) {
      sound.rain.pause()
    } else {
      sound.rain.play()
    }
  })

  btnCoffeeshop.addEventListener('click', () => {
    btnCoffeeshop.classList.toggle('card-active')
    if (!btnCoffeeshop.classList.contains('card-active')) {
      sound.coffeeshop.pause()
    } else {
      sound.coffeeshop.play()
    }
  })

  btnFireplace.addEventListener('click', () => {
    btnFireplace.classList.toggle('card-active')
    if (!btnFireplace.classList.contains('card-active')) {
      sound.fireplace.pause()
    } else {
      sound.fireplace.play()
    }
  })
}
