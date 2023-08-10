const input = document.querySelector('#guessField');
const submit = document.querySelector('#sbmt');
const result = document.querySelector('.result-box');
const GuessList = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResults');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('div');

let randomNumber = Math.floor(Math.random() * 100 + 1);
let playGame = true;
let prevGuess = [];
let NumGuess = 1;


if(playGame){
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    const guess = parseInt(input.value);
     validateGuess(guess);
})}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Invalid Input");
  }
  else if(guess < 1){
    alert("Please Enter Value Greater than 0.")
  }
  else if(guess > 100){
    alert("Please Enter Value Smaller than 101.")
  }
  else{
    prevGuess.push(guess);
    if(NumGuess === 11){
        updateResultBox(guess);
        displayMessage(`Game Over. Answer was ${randomNumber}`);
        endGame();
    }
    else{
        updateResultBox(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
   if(guess === randomNumber){
    displayMessage('You Won');
    endGame();
   }
   else if(guess > randomNumber){
     displayMessage('Guessed Number is Greater than Answer.')
   }
   else if(guess < randomNumber){
    displayMessage('Guessed Number is Smaller than Answer.')
   }
}

function displayMessage(msg) {
     lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function updateResultBox(guess) {
    input.value = '';
    GuessList.innerHTML += `${guess}  `;
    NumGuess++;
    Remaining.innerHTML = `${11 - NumGuess}`;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="GameOver">Start new Game</h2>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const NewGame = document.querySelector('#GameOver');
  NewGame.addEventListener('click',(event) => {
     randomNumber = Math.floor(Math.random() * 100 + 1);
     prevGuess = [];
     NumGuess = 1;
     GuessList.innerHTML = '';
     Remaining.innerHTML = `${11 - NumGuess}`;
     input.removeAttribute('disabled');
     result.removeChild(p);
     playGame = true;
  });
}




