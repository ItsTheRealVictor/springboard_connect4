/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let WIDTH = 7;
let HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard(wth,hgt) {
  // I got this code from the answer to a stackoverflow question about creating an (n x m) matrix in javascript
  // still not working, I'll try the solution code

// (lines 23 to 30 are my code) comment in/out to try
//     let arr = new Array(len || 0), i = len

//     if (arguments.length > 1){
//       let args = Array.prototype.slice.call(arguments, 1)
//       while(i--) arr[(len-1) - i] = makeBoard.apply(this, args)
//     }
//     return arr
// }

// 33 to 36 is solution code, comment in/out to try it
for (let y = 0; y < hgt; y++) {
  board.push(Array.from({ length: wth }));
}
}

/** makeHtmlBoard: make HTML table and row of column tops. */ 

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"

  const htmlBoard = document.querySelector('#board')

  // creates the table columns
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  //  creates the cells necessary for the number of columns chosen (the width)
  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // creates ${HEIGHT} number of rows and ${WIDTH} number of columns using nested for loops
  for (var y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // I had to look at the solution for this function. I had no idea where to start
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
// this is the solution code
// const piece = document.createElement('div');
// piece.classList.add('piece');
// piece.classList.add(`p${currPlayer}`);
// piece.style.top = -50 * (y + 2);

// const spot = document.getElementById(`${y}-${x}`);
// spot.append(piece);
// }
  // this was my attempt
  
  const topRowPieces = document.querySelectorAll('#column-top td')
  let addedDiv = document.createElement('div')
  for (piece of topRowPieces){
    addedDiv.classList.add('piece')
    addedDiv.classList.add(`p${currPlayer}`)
    piece.appendChild(addedDiv)
  
  }

  // i tried using document.querySelector(`#${y}-{x}`) but it won't work unless it is getElementById. Why?
  const choice = document.getElementById(`${y}-${x}`)
  choice.append(addedDiv)

    
}





/** endGame: announce game end */

function endGame(msg) {
  alert(`Nice! Player ${currPlayer} wins`)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board



  // My original version had the currPlayer as currPlayer % 2
  // changing this next line to just currPlayer is what solved it 
  board[y][x] = currPlayer
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer % 2} won!`);
  }

  // check for tie
  // Had to look at the solution for this one too, had no idea
  if (board.every(row => row.every(cell => cell))) {
    return endGame('Tie!');
  }

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  currPlayer++
  currPlayer = currPlayer % 2 === 0 ? 2:1
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard(WIDTH,HEIGHT);
makeHtmlBoard();
