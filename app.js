window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tile"));
  const player = document.querySelector('.display-player');
  const announcer = document.querySelector(".announcer");
  let allSpaces = ["", "", "", "", "", "", "", "", ""];
  const X = "X";
  const O = "O";
  const resetButton = document.querySelector('#reset');
  let isGameOver = false;

  let currentPlayer = O;

  const tileClicked = (e) => {
    const id = e.target.id;
    if (!allSpaces[id]) {
      allSpaces[id] = currentPlayer;
      if (isGameOver === false) {
        e.target.innerText = currentPlayer;
      }
      // Indexes for the board
      // [0][1][2]
      // [3][4][5]
      // [6][7][8]

      //Winning Conditions
      // [0, 1, 2]
      // [3, 4, 5]
      // [6, 7, 8]
      // [0, 3, 6]
      // [1, 4, 7]
      // [2, 5, 8]
      // [0, 4, 8]
      // [2, 4, 6]
      if (
        allSpaces[0] === currentPlayer &&
        allSpaces[1] === currentPlayer &&
        allSpaces[2] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[3] === currentPlayer &&
        allSpaces[4] === currentPlayer &&
        allSpaces[5] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[6] === currentPlayer &&
        allSpaces[7] === currentPlayer &&
        allSpaces[8] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[0] === currentPlayer &&
        allSpaces[3] === currentPlayer &&
        allSpaces[6] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[1] === currentPlayer &&
        allSpaces[4] === currentPlayer &&
        allSpaces[7] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[2] === currentPlayer &&
        allSpaces[5] === currentPlayer &&
        allSpaces[8] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[0] === currentPlayer &&
        allSpaces[4] === currentPlayer &&
        allSpaces[8] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else if (
        allSpaces[2] === currentPlayer &&
        allSpaces[4] === currentPlayer &&
        allSpaces[6] === currentPlayer
      ) {
        announcer.innerText = `Player ${currentPlayer} has won!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      } else {
        currentPlayer = currentPlayer === O ? X : O;
        player.innerText = currentPlayer === O ? O : X;
      }
      const isTie = el => el !== '';
      if(allSpaces.every(isTie)){
        announcer.innerText = `It is a Tie!`;
        announcer.classList.remove("hide");
        return (isGameOver = true);
      }
      
    }
  };

  for (let tile of tiles) {
    tile.addEventListener("click", tileClicked);
  }

  const resetBoard = () => {
    allSpaces = ["", "", "", "", "", "", "", "", ""];
    isGameOver = false;
    announcer.classList.add("hide");

    currentPlayer = O;
    player.innerText = O;

    tiles.forEach((tile) => {
      tile.innerText = "";
      // tile.classList.remove("playerX");
      // tile.classList.remove("playerO");
    });
  };

  resetButton.addEventListener("click", resetBoard);
});
