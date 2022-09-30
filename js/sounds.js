export default function () {
  const forest = new Audio('./assets/sounds/forest.wav')
  const rain = new Audio('./assets/sounds/rain.wav')
  const coffeeshop = new Audio('./assets/sounds/coffeeshop.wav')
  const fireplace = new Audio('./assets/sounds/fireplace.wav')
  const timerEnd = new Audio('./assets/sounds/timer-end.wav')

  coffeeshop.loop = true
  fireplace.loop = true
  forest.loop = true
  rain.loop = true

  return {
    forest,
    rain,
    coffeeshop,
    fireplace,
    timerEnd
  }
}
