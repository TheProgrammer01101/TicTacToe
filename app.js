const cells = document.querySelectorAll('.cell');
let playerTurn = "x";

let winPositions = [[1,5,9],[3,5,7],[4,5,6],[2,5,8],[1,2,3],[7,8,9],[1,4,7],[3,6,9]];


let oPositions = [];
let xPositions = [];

cells.forEach(cell => {
  cell.addEventListener('click', ()=> {
    const cellNumber = Number(cell.dataset.indexNumber);
    if(cell.classList.contains('x')) {
      return;    
    } else if(cell.classList.contains('o')) {
      return;
    }

    if(playerTurn == "x") {
      cell.classList.add(playerTurn);
      winCheck(playerTurn);
      playerTurn = "o"; 

    } else if(playerTurn == "o"){
      cell.classList.add(playerTurn);
      winCheck(playerTurn);
      playerTurn = "x";
    } 
  })
})

function resetBoard() {
  cells.forEach(cell => {
    cell.className = "cell";
  });
}

function winCheck(player) {
  if(cells[0].classList.contains(player) && cells[4].classList.contains(player) && cells[8].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  else if(cells[2].classList.contains(player) && cells[4].classList.contains(player) && cells[6].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  
  else if(cells[3].classList.contains(player) && cells[4].classList.contains(player) && cells[5].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  
  else if(cells[1].classList.contains(player) && cells[4].classList.contains(player) && cells[7].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  
  else if(cells[0].classList.contains(player) && cells[1].classList.contains(player) && cells[2].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  
  else if(cells[6].classList.contains(player) && cells[7].classList.contains(player) && cells[8].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  
  else if(cells[0].classList.contains(player) && cells[3].classList.contains(player) && cells[6].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
  
  else if(cells[2].classList.contains(player) && cells[5].classList.contains(player) && cells[8].classList.contains(player)) {
    alert(playerTurn.toUpperCase() + " won!");
    resetBoard();
  }
}
