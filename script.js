// Elements 
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTimer')
const buttonRemoveTime = document.querySelector('.removeTime')

const soundForest = document.querySelector('.forest')
const soundForest2 = document.querySelector('.forest path')

const soundRain = document.querySelector('.rain')
const soundRain2 = document.querySelector('.rain path')

const soundCoffeeShop = document.querySelector('.coffeeShop')
const soundCoffeeShop2 = document.querySelector('.coffeeShop path')

const soundFirePlace = document.querySelector('.fireplace')
const soundFirePlace2 = document.querySelector('.fireplace path')


// End of elements 

// Events

buttonPlay.addEventListener("click", function () {
    play()
    countdown()
    pressButton()
})
buttonPause.addEventListener("click", function () {
    pause()
    hold()
    pressButton()
})

buttonStop.addEventListener("click", function () {
    reset()
    stopCount()
    stopSound()
})

buttonAddTime.addEventListener("click", function () {
    addTime()
})
buttonRemoveTime.addEventListener('click', function () {
    removeTime()
})
soundForest.addEventListener("click", function () { forest() })
soundRain.addEventListener("click", function () { Rain() })
soundCoffeeShop.addEventListener("click", function () { coffeeShop() })
soundFirePlace.addEventListener("click", function () { fireplace() })

// End of events

//Controls

function play() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
}
function pause() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
}

function stopCount() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')

}

function forest() {
    soundForest.classList.toggle('buttonOn')
    soundForest2.classList.toggle('buttonOn')
    // sei que não está perfeito, mais foi a solução que encontrei para mudar o icone do botão.

    if (soundForest.classList.length > 1) {
        audioForest.play()
    } else {
        audioForest.pause()
    }

}
function Rain() {
    soundRain.classList.toggle('buttonOn')
    soundRain2.classList.toggle('buttonOn')


    if (soundRain.classList.length > 1) {
        audioRain.play()

    } else {
        audioRain.pause()
    }



}
function coffeeShop() {
    soundCoffeeShop.classList.toggle('buttonOn')
    soundCoffeeShop2.classList.toggle('buttonOn')

    if (soundCoffeeShop.classList.length > 1) {
        audioCoffeeShop.play()
    } else {
        audioCoffeeShop.pause()
    }

}
function fireplace() {
    soundFirePlace.classList.toggle('buttonOn')
    soundFirePlace2.classList.toggle('buttonOn')

    if (soundFirePlace.classList.length > 1) {
        audioFireplace.play()
    } else {
        audioFireplace.pause()
    }

}

//End of  controls

// Timer
let minutes = Number(minutesDisplay.textContent)

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let timeUp = minutes <= 0 && seconds <= 0

        console.log(timeUp)

        if (timeUp) {
            reset()
            stopSound()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes

        }

        updateDisplay(minutes, String(--seconds))
        countdown()
    }, 1000)
}

function hold() {
    clearTimeout(timerTimeOut)
}

function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)

}

function addTime() {
    minutes += 5
    seconds = Number(secondsDisplay.textContent)
    updateDisplay(minutes, seconds)
}

function removeTime() {
    minutes -= 5
    seconds = Number(secondsDisplay.textContent)
    updateDisplay(minutes, seconds)
}

// End of timer

// Sounds

const PressAudio = new Audio("./sounds/button-press.wav")
const StopAudio = new Audio("./sounds/stop-sound.mp3")
const audioForest = new Audio("./sounds/forest.wav")
const audioRain = new Audio("./sounds/rain.wav")
const audioCoffeeShop = new Audio("./sounds/coffeeShop.wav")
const audioFireplace = new Audio("./sounds/fireplace.wav")



function pressButton() {
    PressAudio.play()
}

function stopSound() {
    StopAudio.play()
}



// End of sounds
