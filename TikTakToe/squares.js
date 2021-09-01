function reset() {
  player = 0;
  plays = ["", "", "", "", "", "", "", "", ""];
  counter = 0;
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    squares[i].addEventListener("click", playerMove);
  }
}

function win() {
  setTimeout(() => {
    reset();
  }, 250);
}

function verifyWin() {
  let winStats = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < winStats.length; i++) {
    let verifi = winStats[i];

    let position00 = verifi[0];
    let position01 = verifi[1];
    let position02 = verifi[2];

    if (
      plays[position00] == plays[position01] &&
      plays[position01] == plays[position02] &&
      plays[position00] != "" &&
      plays[position00] == "x"
    ) {
      X++;
      let scoreO = document.getElementById("scoreO");
      let scoreX = document.getElementById("scoreX");
      scoreX.innerHTML = X;

      win();
    }

    if (
      plays[position00] == plays[position01] &&
      plays[position01] == plays[position02] &&
      plays[position00] != "" &&
      plays[position00] == "o"
    ) {
      O++;
      let scoreO = document.getElementById("scoreO");
      scoreO.innerHTML = O;

      win();
    }
  }
}

function draw() {
  if (click == 9) {
    setTimeout(() => {
      reset();
    }, 250);
  }
}

function resetScore(click) {
  O = 0;
  X = 0;
  scoreO.innerHTML = O;
  scoreX.innerHTML = X;
}
