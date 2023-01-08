const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  board = new Array(HEIGHT).fill().map(() => new Array(WIDTH).fill())
  }
      
makeBoard()



function findSpotForCol(x) {
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}


function placeInTable(y, x) {
  const piece = document.createElement('div')
  piece.setAttribute('class', 'piece p1')

  board[y][x] = piece
  location = document.getElementById(`${y}-${x}`)
  location.append(piece)
}

placeInTable(3, 5)