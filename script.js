'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1); //trunk is same as floor
// document.querySelector('.number').textContent = secretNumber;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guessedValue = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guessedValue) {
    displayMessage('No number');
  }
  //When player wins
  else if (guessedValue === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessedValue !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guessedValue > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guessedValue > secretNumber ? 'Too high' : 'Too low');
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage('Lost the game');
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  // //When the input is greater
  // else if (guessedValue > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     // score--;
  //     // document.querySelector('.score').textContent = score;
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost the game';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
  // //When the input is less
  // else if (guessedValue < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost the game';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
});
