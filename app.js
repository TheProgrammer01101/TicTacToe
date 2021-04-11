const cells = document.querySelectorAll('.cell');
let winPositions = [[1,5,9],[3,5,7],[4,5,6],[2,5,8],[1,2,3],[7,8,9],[1,4,7],[3,6,9]];
let moves = [];
let won = false;
let player = "x";

cells.forEach(cell => {
  cell.addEventListener('click', ()=> {
    const cellNumber = Number(cell.dataset.indexNumber);
    if(cell.classList.contains('x')) {
      return;    
    } else if(cell.classList.contains('o')) {
      return;
    }

    if(moves[player] == undefined) {
      moves.x = []; moves.o = [];
    }

    moves[player].push(cellNumber);
    winCheck();
    if(player == "x") {
      cell.classList.add(player);
      player = "o"; 
    } else if(player == "o"){
      cell.classList.add(player);
      player = "x";
    }
    if((won == false) && (moves["x"].length+moves["o"].length == 9)) {
      alert("draw");
      resetBoard();
    }
    else if(won == true) {
      resetBoard();
      won = false;
    }
  });
})

function winCheck() {
  for(const winRow of winPositions) {
    let streak = 0;
    for(const winField of winRow) {
      for(const move of moves[player]) {
        if(winField == move) {
          streak++;
          if(streak == 3) {
            alert(player+" won");
            won = true;
            return;
          }
        }
      }
    }
  }
}

function resetBoard() {
  cells.forEach(cell => {
    cell.className = "cell";
    player = "x";
    moves = [];
  });
}