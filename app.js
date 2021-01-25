const cells = document.querySelectorAll('.cell');
let isX = true;

cells.forEach(cell => {
  cell.addEventListener('click', ()=> {
    if(cell.classList.contains('x')) {
      isX = true;
    } else if(cell.classList.contains('o')) {
      isX = false;
    }
    if(isX == true) {
      cell.classList.add('x');
      isX = false;
    } else if(isX == false){
      cell.classList.add('o');
      isX = true;
    }
  })
})