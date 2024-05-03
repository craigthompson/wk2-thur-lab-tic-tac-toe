console.log("Testing script connection");

let player = "X";

////////////////////////////////////////////////
//   Functions
////////////////////////////////////////////////
function checkForWinner() {
  const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = null;

  for (const line of lines) {
    let lineArr = [];
    let char = "";
    for (const squareIndex of line) {
      lineArr.push(squares[squareIndex].innerText);
    }
    winner = lineArr.every((item) => item === "X") ? "X" : winner;
    winner = lineArr.every((item) => item === "O") ? "O" : winner;
    if (winner) {
      for (const squareIndex of line) {
        console.log("Square ", squareIndex);
        squares[squareIndex].classList.add("winning-square");
      }
      return winner;
    }
  }
  return null;
}

function checkForTieGame() {
  const squaresArr = Array.from(squares);
  return squaresArr.map((box) => box.innerText).includes("") ? false : true;
}

function play(evt) {
  if (!evt.target.classList.contains("square")) return null;
  evt.target.innerText = player;
  player = player === "X" ? "O" : "X";
  playerSelector.innerText = `${player}`;
  winner = checkForWinner();
  if (winner) {
    // setTimeout(() => {
    //   alert(`The winner is ${winner}`);
    //   return undefined;
    // }, 3);
    winnerBanner.innerText = `The winner is ${winner}`;
  } else {
    if (checkForTieGame()) winnerBanner.innerText = "It is a tie game";
  }
}

////////////////////////////////////////////////
//   Selectors
////////////////////////////////////////////////
const squares = document.querySelectorAll(".square");
const playerSelector = document.querySelector("#current-player");
const winnerBanner = document.querySelector("#winner-banner");
const table = document.querySelector("table");

////////////////////////////////////////////////
//   Event Listeners
////////////////////////////////////////////////
for (const square of squares) {
  square.addEventListener("click", (event) => play(event));
}
// table.addEventListener("click", (event) => play(event)); // Uses event delegation to add listener to all table elements
