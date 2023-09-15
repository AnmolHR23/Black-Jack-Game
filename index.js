let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl=document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = {
  name: "Per",
  chips: "145",
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $ " + player.chips;
// function getFirstRandomCard(){
//   var firstCard = Math.floor(Math.random()*12);
//   return firstCard;
// }

// function getSecondRandomCard(){
//   var secondCard = Math.floor(Math.random()*12);
//   return secondCard;
// }

function getRandomCard() {
  var randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let index = 0; index < cards.length; index++) {
    cardsEl.textContent += cards[index] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Pull a New Card";
  } else if (sum === 21) {
    message = "You've got a BlackJack";
    hasBlackJack = true;
  } else {
    message = "Better luck next time";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    //push card into the array
    cards.push(card);
    renderGame();
  }
}
