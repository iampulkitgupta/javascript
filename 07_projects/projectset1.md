# Projects related to DOM

## project link
[click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("pulkit")
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){        
        if(e.target.id === 'grey'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
          body.style.backgroundColor = e.target.id;
        }
    })
})
```

## project 2

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector("#results");

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

})
```

## project 3

```javascript
const clock = document.getElementById('clock')

// console.log(date.toLocaleTimeString());

setInterval(()=>{
  let date = new Date()  
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## project 4

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess =1 ;
let playGame = true;


if (playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  //to check the Guess number
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1){
    alert('Please enter a number between 1 and 100')
  } else if(guess > 100){
    alert('Please enter a number between 1 and 100')
  } else {
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    }else {
      displayGuess(guess);
      checkGuess(guess);      
    }
  }
}

function checkGuess(guess){
  //
  if(guess === randomNum){
    displayMessage(`You guessed it right`);
    endGame();
  } else if(guess < randomNum){
    displayMessage(`Number is Too Low`);
  } else if(guess > randomNum){
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess){
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}


function newGame(){
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(){
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    playGame = true;
  })
}

```