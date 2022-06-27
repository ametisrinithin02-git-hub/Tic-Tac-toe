## HTML
1. Create a tic tac toe board
2. Create 9 divs [cells] with appropriate ids and a common class name
3. wrap it in another container div.

## CSS
1. Use css grid to arrange it into 3X3 matrix.
2. Add borders and style further

## Javascript
1. First add the `click` event listeners to all the cells.
2. Create a 2D array(matrix) to keep track of which cell was clicked and initiliaze 2D array with empty string ("").
3. Now the game starts

4. Whenever the user clicks a div in the browser, Find the appropriate (row , col) of the 2D array(matrix), And change the inner text to "X" or "O" based on players turn. And update the player's turn

5. Check if that player won.

    ## Winning logic : 
        This is pure logic no much javascript involved here.

        1. First we should know the row and col number of the cell that the user has clicked.
        2. Now Check that corresponding row and col, if all of them are X - player 1 won , If all of them are O - player 2 won
        3. If (row == col) then it is a part of principal diagonal(left top to right bottom diagonal). So perform step 2 for this diagonal.
        4. if(row + col == size-1) then the cell that user clicked is a part of secondary diagonal(top right to bottom left). So perform step 2 to this diagonal.

6. If player won. Stop the game (Logic broke).

7. If the player didn't win check if the game drawn.
    Game is drawn if number of cells clicked = 9 and the game is not won.

8. Update the results. (Logic Broke).