let player = 0;
let plays = ["", "", "", "", "", "", "", "", ""];
let O = 0;
let X = 0;
let click = 0;

scoreO.innerHTML = O;
scoreX.innerHTML = X;

let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", playerMove);
}

function playerMove() {
  click++;
  console.log(click)
  if (player == 0) {
    this.innerHTML = '<div class = "x"></div>';
    player++;
    plays[this.id] = "x";
    verifyWin();
    draw();
  } else {
    this.innerHTML = '<div class = "o"></div>';
    player--;
    plays[this.id] = "o";
    verifyWin();
    draw();
  }
  this.removeEventListener("click", playerMove);
}


