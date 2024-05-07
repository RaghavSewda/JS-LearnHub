# Projects related to DOM

# Solution Code

## Project 1 (Color Changer)

[click here](https://stackblitz.com/edit/dom-projects-sil?file=1-colorChanger%2Fapp.js)

```javascript

const buttons = document.querySelectorAll('.button');
const bg = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    if (event.target.id === 'grey') {
      bg.style.background = event.target.id;
    } else if (event.target.id === 'white') {
      bg.style.background = event.target.id;
    } else if (event.target.id === 'blue') {
      bg.style.background = event.target.id;
    } else if (event.target.id === 'yellow') {
      bg.style.background = event.target.id;
    }
  });
});

```



## Project 2 (BMI calculator)
[click here](https://stackblitz.com/edit/dom-projects-sil-t716gc?file=2-BMICalculator%2Fapp.js)

```javascript

const form = document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()

  const height = parseInt(form.querySelector('#height').value)
  const weight = parseInt(form.querySelector('#weight').value)
  const result = form.querySelector('#results')
  
  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerText('Please give a valid height')
  }else if(weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerText('Please give a valid weight')
  }
  else {
    result.innerText = (weight / ((height*height)/10000).toFixed(2))
  }
})

```



## Project 3
[click here](https://stackblitz.com/edit/dom-projects-sil-t716gc?file=3-DigitalClock%2Fapp.js)

```javascript

const clock = document.querySelector('#clock');


setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
} , 1000);

```



## Project 4 (Guess the number)
[click here](https://stackblitz.com/edit/dom-projects-sil-5iiefr?file=4-GuessTheNumber%2Fapp.js)

```javascript

let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if (isNaN(guess))
  {
    alert('You have not entered a number');
  }
  else if (guess<1 || guess>100)
  {
    alert('Enter a number between range [1,100]');
  }
  else
  {
    prevGuess.push(guess);
    if(numGuess === 11)
    {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
    else
    {
      displayGuess(guess);
      checkGuess(guess);
    }

  }
}
function checkGuess(guess) {
  if (randomNumber === guess)
  {
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if (randomNumber > guess)
  {
    displayMessage(`Number is low`);
  }
  else if (randomNumber < guess)
  {
    displayMessage(`Number is high`);
  }
}
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML =`${11-numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(event){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  })
}

```