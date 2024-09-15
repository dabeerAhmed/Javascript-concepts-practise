// let randomNumber = parseInt(Math.random()*100+1)
// // console.log(randomNumber)

// const submit = document.querySelector("#subt")
// const userInput = document.querySelector('#guessField')
// const previousGuesses = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('.resultParas')
// const p = document.createElement('p')

// let preGuess = []
// let numGuess = 1

// let startGame = true

// if(startGame){
//     submit.addEventListener('click', function(e){
//         e.preventDefault()
//         const input = parseInt(userInput.value)
//         validateGuesses(input)
//     })
// }

// function validateGuesses(guess){
//     if (isNaN(guess)) {
//         alert(`Kindly enter the valid number ${guess}`)
//     } else if (guess < 1) {
//         alert(`Kindly enter value greater than 0`)
//     } else if (guess > 100) {
//         alert(`Kindly enter value smaller than 0`)
//     } else{
//         preGuess.push(guess)
//         if (numGuess === 11) {
//             displayGuess(guess)
//             displayMessage(`GameOver, random number was ${randomNumber}`)
//             endGame()
//         } else{
//             displayGuess(guess)
//             checkGuesses(guess)
//         }
//     }
// }

// function checkGuesses(guess){
//     if (guess === randomNumber) {
//         displayMessage("Wohoo! You guessed it right.")
//         endGame()
//     } else if (guess > randomNumber) {
//         displayMessage("Number is too High")
//     } else if(guess < randomNumber){
//         displayMessage("Number is too Low")
//     }
// }

// function displayGuess(guess){
//     userInput.value = ''
//     previousGuesses.innerHTML += `${guess} , `
//     numGuess++
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h3>${message}</h3>`

// }

// function endGame(){
//     userInput.innerHTML = ''
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button')
//     p.innerHTML = `<h2 id=newGame>Start New Game</h2>`
//     startOver.appendChild(p)
//     startGame = false
//     newGame()
// }

// function newGame(){
//     const newGamebtn = document.querySelector("#newGame")
//     newGamebtn.addEventListener('click', function(e){
//         randomNumber = parseInt(Math.random()*100+1)
//         preGuess = []
//         numGuess = 1
//         previousGuesses.innerHTML = ''
//         remaining.innerHTML = `${11-numGuess}`
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p)
//         startGame = true
//     })

// }



let randomNumber = parseInt(Math.random() * 100 +1)
console.log(randomNumber)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let startGame = true

if (startGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateInput(guess)
    })
}

function validateInput(guess){
    if (isNaN(guess)) {
        alert("Kindly provide a valid number")
    } else if (guess < 0) {
        alert("Kindly provide value greater than 0")
    } else if(guess > 100){
        alert("Kindly provide value less than 100")
    } else{
        prevGuess.push()
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`GameOver, Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            CheckGuesses(guess)
        }
    }
}

function CheckGuesses(guess){
    if (guess === randomNumber) {
        displayMessage(`Wohoo! You guessed it right. Congratulations`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Guess number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Guess number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.innerHTML = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id=newGame>Start Again</h2>`
    startOver.appendChild(p)
    startGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 +1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        startGame = true
    })
}