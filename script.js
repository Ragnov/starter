'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const nameFirst = document.getElementById('name--0');
const nameSecond = document.getElementById('name--1');
let scoreInRound0 = document.getElementById('score--0');
let scoreInRound1 = document.getElementById('score--1');
let currScore0 = document.getElementById('current--0');
let currScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let scores, playing, activePlayer, currentScore;
// starting condition
const init = function () {
  scores = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  scoreInRound0.textContent = 0;
  scoreInRound1.textContent = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generate rundom number
    const resultOnDice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${resultOnDice}.png`;
    if (resultOnDice !== 1) {
      // add result to current score
      currentScore += resultOnDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else switchPlayer(); //switch to the next player
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] < 100) switchPlayer();
    else {
      //finish the game
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
});

btnNew.addEventListener('click', init);

const a = 'is2 Thi1s T4est 3a';

function order(words) {
  const arr = words.split(' ');
  const corr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes((i + 1).toString())) {
        corr.push(arr[j]);
      }
    }
  }
  return corr.join(' ');
}

// function array_diff2(a) {
//   console.log(a.filter(e => !a.includes(e)));
//   return a.filter(e => !a.includes(e));
// }
const b = '1234';
