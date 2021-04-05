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
      if(cells[0].classList.contains("x") && cells[4].classList.contains("x") && cells[8].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      else if(cells[2].classList.contains("x") && cells[4].classList.contains("x") && cells[6].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[3].classList.contains("x") && cells[4].classList.contains("x") && cells[5].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[1].classList.contains("x") && cells[4].classList.contains("x") && cells[7].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[0].classList.contains("x") && cells[1].classList.contains("x") && cells[2].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[6].classList.contains("x") && cells[7].classList.contains("x") && cells[8].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[0].classList.contains("x") && cells[3].classList.contains("x") && cells[6].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[2].classList.contains("x") && cells[5].classList.contains("x") && cells[8].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      else {
      playerTurn = "o";
      }

    } else if(playerTurn == "o"){
      cell.classList.add(playerTurn);
      if(cells[0].classList.contains("o") && cells[4].classList.contains("o") && cells[8].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      else if(cells[2].classList.contains("o") && cells[4].classList.contains("o") && cells[6].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[3].classList.contains("o") && cells[4].classList.contains("o") && cells[5].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[1].classList.contains("o") && cells[4].classList.contains("o") && cells[7].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[0].classList.contains("o") && cells[1].classList.contains("o") && cells[2].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[6].classList.contains("o") && cells[7].classList.contains("o") && cells[8].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[0].classList.contains("o") && cells[3].classList.contains("o") && cells[6].classList.contains("o")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      
      else if(cells[2].classList.contains("o") && cells[5].classList.contains("x") && cells[8].classList.contains("x")) {
        alert(playerTurn.toUpperCase() + " won!");
      }
      else{
        playerTurn = "x";
      }
    } 
  })
})
