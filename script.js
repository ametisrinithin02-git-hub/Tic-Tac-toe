console.log("hello world");

// Which user's turn
let playerOne = true;
let gridSize = 3;
let values = [] , cols = gridSize , rows = gridSize;

for(let i = 0 ; i < cols ; i++){
    values[i] = ["" , "" , ""];
}

// eventHandling logic
const cells = document.getElementsByClassName("cell");
// cells = [div1 , div2 , div3 , div4];
// iterate through all the cells and add a click event listener.

const result = document.getElementById("result");
// const grid = document.getElementsByClassName("grid")[0];
// grid =  One div with many children 

let clickCount = 0;

Array.from(cells).forEach(function(element) { 
    const id = parseInt(element.id);
    const row = Math.floor(id/3) , col = id%3;
    // console.log(row , col);

    element.addEventListener('click' , function(){
        // Handle the click event
        if(values[row][col] === ""){
            clickCount = clickCount + 1;
            if(playerOne){
                element.innerText = "X";
                values[row][col] = "X";
            }
            else{
                element.innerText = "O";
                values[row][col] = "O";
            }
            
            playerOne = !playerOne;
            
            if(playerOne){
                result.innerText = "Player 1 chance - X";
            }
            else{
                result.innerText = "Player 2 chance - O";
            }

            // Check if the game is over
            let won = win(row , col);

            if(won){
                result.innerText = `Game over!! ${playerOne ? "Player 2 won" : "Player 1 won"}`;
                for(let i = 0 ; i < rows ; i++){
                    for(let j = 0 ; j < cols ; j++){
                        values[i][j] = "-";
                    }
                }
                

                // endGame();
            }

            if(clickCount === rows*cols){
                result.innerText = "Both lost! Now get lost";
            }

        }

    }); 
});

// winning logic
function win(row , col){
    // Diagonal
    if(row === col){
        // check principal diagonal
        let start = values[0][0];
        let flag = 0;
        for(let i = 1, j=1 ; i < rows && j <cols ; i++,j++){
            if(values[i][j] !== start){
                flag++;
                break;
            }
        }

        if(flag === 0) return true;
    }

    if(row + col === gridSize-1){
        let start = values[0][cols-1];
        let flag = 0;
        for(let i = 1 , j = cols-2 ; i < rows , j >= 0 ; i++ , j--){
            if(values[i][j] !== start){
                flag++;
                break;
            }
        }

        if(flag === 0) return true;
    }

    // row 
    let start = values[row][0];
    let flag = 0;
    for(let i = 1 ; i < cols ; i++){
        if(values[row][i] !== start){
            flag++;
            break;
        }
    }

    if(flag === 0){
        return true;
    }
    // col
    start = values[0][col];
    flag = 0;
    for(let i = 1 ; i < rows ; i++){
        if(values[i][col] !== start){
            flag++;
            break;
        }
    }
    if(flag === 0) return true;

    return false;
}

// remove event listener


// example





