const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const button = document.querySelector('.startBtn');
const scoreText = document.querySelector('.score');

const wordsArray = ["language", "day", "drink", "fall", "button", "real",
    "old", "mind", "floor", "excited", "share", "abandon", "abroad", "addict",
    "bachelor", "charity", "confirm", "consider", "final", "gallant", "inhabit",
    "keen", "negative", "oral", "possible", "reject", "talent", "topic", "valid",
    "passion", "smile", "hope", "person", "about", "life", "soul", "rock", "true",
    "love", "hold", "happy", "time", "feeling", "always", "laugh", "dream", "safe",
    "flower", "believe", "worry", "heart", "learn", "kind", "attractive", "need",
    "perfect", "alone", "moment", "dark", "remember", "respect", "ring", "contact",
    "prefer", "think", "appearance", "super", "nervous", "enjoy", "sister", "just",
    "parent", "relationship", "trust", "change", "know", "women", "partner", "level",
    "return", "provide", "protect", "long", "future", "match", "opinion", "cancel",
    "avoid", "might", "difficult", "magic", "exact", "false", "reason", "someone",
    "same", "sense", "nature", "observe", "earth", "perfect", "hair", "deep", "walk",
    "break", "health", "improve", "water", "gift", "face", "never", "fear", "game",
    "sky", "benefit", "scale", "spring", "warm", "animal", "Plant", "interview",
    "central", "clear", "music", "manager", "actually", "Sugar", "children", "female",
    "dead", "important", "boost", "blood", "strong", "activity", "content", "several",
    "general", "subject", "adult", "around", "limit", "describe", "least", "watch",
    "eventually", "category", "according", "through", "universe", "alien", "battle",
    "warrior", "murder", "without"];

let inPlay = false;
let scramble = "";
let scrambled = "";
let score = 1;

button.addEventListener('click', function () {
    if (!inPlay) {
        inPlay = true;
        button.innerHTML = "Guess";
        guess.classList.toggle("hidden");
        guess.value = "";
        scramble = createWord();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;


        if (tempGuess === scramble) {
            inPlay = false;
            message.innerHTML = "Correct, it was " + scramble + "</br> Ready for the next one?";
            button.innerHTML = "Next";
            guess.classList.toggle("hidden");
            scoreText.innerHTML = "Your Score : " + score++;
        } else if (tempGuess === "") {
            message.innerHTML = "input can't be empty! </br> just write it :) </br>" + scrambled;
        } else {
            message.innerHTML = tempGuess + " is not correct !</br> Try again :) </br>" + scrambled;
        }
    }
});

function createWord() {
    let randomIndex = Math.floor(Math.random() * wordsArray.length);
    let tempWord = wordsArray[randomIndex];
    return tempWord;
}

function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
