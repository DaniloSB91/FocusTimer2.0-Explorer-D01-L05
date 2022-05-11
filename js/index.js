import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAddTimer,
    buttonRemoveTime,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
} from "./elements.js"

import Controls from "./controls.js"

console.log(Controls)

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
    
})

console.log(controls)

buttonPlay.addEventListener('click', function () {
    controls.play()
})

buttonPause.addEventListener('click', function () {
    controls.pause()
})

buttonForest.addEventListener('click', function () {
    controls.Forest()
})