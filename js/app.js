
/*---------------------------- Variables (state) ----------------------------*/

let winner = false;  
let tie = false
let board= document.querySelector('.board');
let currentTurn = "X"; 

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.getElementById('message'); 
const resetBtnEl = document.getElementById('reset');
/*-------------------------------- Functions --------------------------------*/
function init() {
currentTurn = "X"; 
winner = false; 
tie = false; 
board = 
    [ ' ',' ',' ',' ',' ',' ',' ',' ',' ']; 
messageEl.innerText = "Ready to Play"; 
    render(); 
}

const render = () => {
updateBoard();
updateMessage(); 
}


const updateBoard = () => 
    board.forEach(squareEls => {
        board[index] = squareEls += squareEls.innerText;
        }); 
  
  
const updateMessage = () => {
    if(tie === false && winner === false) {
       return; 
    } else if (tie ===true && winner === false ) {
        messageEl.innerText = "Tie"
    } else {
        messageEl.innerText = "Congrats you won"
    }
    }
     

const handleClick = () => {
squareEls.forEach(function(squareEl) {
    squareEl.addEventListener('click', handleClick())
    })

placePiece(squareIndex); 
checkForWinner(); 
checkForTie(); 
switchPlayerTurn(); 
render(); 
}
 
 

const placePiece = (index) => { 
board[index] = currentTurn.valueOf(); 
}


const checkForWinner= () => {
if(board[0] != ' ' && board[0]===board[1] && board[1] === board[2]) { 
  winner = true;   
} else if 
    (board[3] != ' ' && board[3] === board[4] && board[4] === board[5]) {
        winner = true; 
    }
else if (board[6] != ' ' && board[6] === board[7] && board[7] === board[8]) {
    winner = true; 
} else if (board[0] != ' ' && board[0]=== board[3] && board[3]=== board[6]) {
    winner = true; 
} else if (board[1] != ' ' && board[1]=== board[4] && board[4]=== board[7]) {
    winner = true; 
} else if (board[2] != ' ' && board[2]=== board[5] && board[5] === board[8]) {
    winner = true; 
} else if (board[0] != ' ' && board[0]===board[4] && board[4]===board[8]) {
    winner = true; 
} else if (board[2] != ' ' && board[2]=== board[4] && board[4]===board[6]) {
    winner= true; 
}
}


const checkForTie = () => {
checkForWinner(); 
if(winner = true) {
    return;
} else if (board.includes(' ') = true) {
    tie = false; 
} else {
    tie = true; 

}
}

const switchPlayerTurn = () => {
if(winner = true) {
    return;
} else if(winner = false) {
    if(currentTurn='X') {
        currentTurn='O'
    } else if (currentTurn='O') {
        currentTurn='X'
    }
}
}


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(squareEl) {
    squareEl.addEventListener('click', handleClick())
    })

resetBtnEl.addEventListener('click', init()); 
