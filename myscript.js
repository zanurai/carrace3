//alert("hello");

let game = document.getElementById("game");
let jeep = document.getElementById("jeep");
let carrace = document.getElementById("carrace");
let score = document.getElementById("score");
let result = document.getElementById("result");
let counter = 0;
const musicSound = new Audio("music.mp3");
const accSound = new Audio("accident.mp3");
const moveSound = new Audio("move.mp3");



//display the jeep

jeep.addEventListener("animationiteration", () => {

    let random = (Math.floor(Math.random() * 3) * 130);
    jeep.style.left = random + "px";
    counter++

    musicSound.play();
});


//display the carrace



window.addEventListener("keydown", function (e) {

    if (e.keyCode == "39") {
        let carraceLeft = parseInt(window.getComputedStyle(carrace).getPropertyValue("left"));

        if (carraceLeft < 300) {
            carrace.style.left = (carraceLeft + 130) + "px";

            moveSound.play();
        }
    }

    if (e.keyCode == "37") {
        let carraceLeft = parseInt(window.getComputedStyle(carrace).getPropertyValue("left"));

        if (carraceLeft > 0) {
            carrace.style.left = (carraceLeft - 130) + "px";

            moveSound.play();
        }
    }
});

setInterval(function gameover() {
    jeepTop = parseInt(window.getComputedStyle(jeep).getPropertyValue("top"));
    jeepLeft = parseInt(window.getComputedStyle(jeep).getPropertyValue("left"));
    carraceLeft = parseInt(window.getComputedStyle(carrace).getPropertyValue("left"));

    if ((jeepLeft === carraceLeft) && (jeepTop > 250) && (jeepTop < 470)) {


        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter}`;

        musicSound.pause();
        accSound.play();


        counter = 0;
    }
}, 50)