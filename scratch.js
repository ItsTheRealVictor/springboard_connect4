const HEIGHT = 6
const WIDTH = 6
function makeBoard(len) {
    // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  
      let arr = new Array(len || 0), i = len
  
      if (arguments.length > 1){
        let args = Array.prototype.slice.call(arguments, 1)
        while(i--) arr[(len-1) - i] = makeBoard.apply(this, args)
      }
      return arr
    
  }
  const firstBoard = (makeBoard(HEIGHT, WIDTH))