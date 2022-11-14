describe("Make the board", function() {

    const TEST_HEIGHT = 10
    const TEST_WIDTH = 12
    const tempBoard = makeBoard(TEST_WIDTH, TEST_HEIGHT)
    
    //The board is an array of lists. Each item in the array is a list of length 7
    
    it('the board should have a length of 6 (the # of rows)', function(){
        // makeBoard()
        expect(board.length).toEqual(TEST_HEIGHT);
    })
  
    it('should check that each item in the board list is an array of length 7', function(){
            for (let k = 0; k < HEIGHT; k ++){
                expect(board[k].length).toEqual(WIDTH)
            }
    })
})

