

let string = "niggers"
let counter = 1
display = document.getElementById('display')

function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createWord(word) {
    for(let i = 0; i < word.length; i++) {
        createLetter(word[i])
    }
}

function createLetter(letter) {
    let span = document.createElement('span')
    span.id = counter
    span.classList.add('letter')
    display.appendChild(span)
    counter++;
}

function animateLetters(delay) {
    const leters = document.getElementsByClassName('letter')
    for (i=0; i < leters.length; i++) {
        for (let j = 0; j < delay; j++) {
            leters[i].innerHTML = randLetter()
            sleep(100)
        }
        leters[i].innerHTML = string[i];
    }
}

createWord(string)
animateLetters(10)