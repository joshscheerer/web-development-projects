function rollDice() {
  var result = Math.floor(Math.random() * 6) + 1;
  return result;
}

function newGame() {
  var p1 = rollDice();
  var p2 = rollDice();

  var p1Dice = "./completed/images/dice" + p1 + ".png";
  var p2Dice = "./completed/images/dice" + p2 + ".png";

  document.querySelector(".d1 img").setAttribute("src", p1Dice);
  document.querySelector(".d2 img").setAttribute("src", p2Dice);

  if (p1 > p2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (p1 < p2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

newGame();
