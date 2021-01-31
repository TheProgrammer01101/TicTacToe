const cells = document.querySelectorAll('.cell');
let playerTurn = "x";

let winPositions = [[1,5,9],[1,2,3],[1,4,7],[7,8,9],[3,6,9],[2,5,8],[4,5,6]];

let xPositions = [];
let oPositions = [];

let x = 0;


cells.forEach(cell => {
  cell.addEventListener('click', ()=> {
    const cellNumber = parseInt(cell.dataset.indexNumber);
    
    if(cell.classList.contains('x')) {
      return;    
    } else if(cell.classList.contains('o')) {
      return;
    }

    if(playerTurn == "x") {
      cell.classList.add(playerTurn);
      playerTurn = "o";
      xPositions.push(cellNumber);

      let set = 0;
      while (x < winPositions.length) {
        if(winPositions[set].includes(xPositions[x])) {
          console.log("included, x is", x, "|set is", set, "|xPos is", xPositions[x]);
          x++;
          return;
        }
        else {
          set++;
          console.log("not included, x is", x);
        }
        console.log("x is", x);
        
        if(set == 7) {
          console.log("set is",set);
          set = 0;
          return;
        }
      }
    } else if(playerTurn == "o"){
      cell.classList.add(playerTurn);
      playerTurn = "x";
      oPositions.push(cellNumber);
    } 
  })
})
