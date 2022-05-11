export default function Controls({
    buttonPlay,
    buttonPause,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
}) {
    function play() {
        buttonPlay.classList.add("hide");
        buttonPause.classList.remove("hide");
    }
    function pause() {
        buttonPlay.classList.remove("hide");
        buttonPause.classList.add("hide");

    }



    function Forest() {


        buttonForest.classList.toggle('buttonOn')




    }

    function buttonRain() {
        buttonPlay.classList.remove("hide");
        buttonPause.classList.add("hide");

    }

    function buttonCoffeeShop() {
        buttonPlay.classList.remove("hide");
        buttonPause.classList.add("hide");

    }

    function buttonFireplace() {
        buttonPlay.classList.remove("hide");
        buttonPause.classList.add("hide");

    }

    return {
        play,
        pause,
        Forest

    }
}



