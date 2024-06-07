
/*---------------------------- Variables (state) ----------------------------*/

let winner = false;  
let tie = false;
let board;
let currentTurn; 


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.getElementById('message'); 
const resetBtnEl = document.getElementById('reset');
/*-------------------------------- Functions --------------------------------*/
const init = () => {
  currentTurn = 1;  
  winner = false; 
  tie = false; 
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']; 
  messageEl.innerText = "Ready to Play"; 
  render();
};


const render = () => {
updateBoard();
updateMessage(); 
};


const updateBoard = () => {
    for (let i = 0; i < squareEls.length; i++) {
          squareEls[i].innerText = board[i];
        }
    };
        
      
const updateMessage = () => {
        if(winner) {
          messageEl.innerText = "Congrats you won";
        } else if (tie) {
          messageEl.innerText = "Tie";
        } else {
          messageEl.innerText = `Player ${currentTurn === 1 ? 'X' : 'O'}'s turn`; 
        }
        
    };

const placePiece = (index) => { 
  board[index] = currentTurn === 1 ? 'X' : '0';
squareEls[index].textContent= board[index]; 
         };


  const handleClick = (event) => { 
    const index = parseInt(event.target.id, 10); 
    if(board[index] !== ' ') return; 
placePiece(index);
checkForWinner();
checkForTie();
switchPlayerTurn();
render();
  }; 

const checkForTie = () => {
  if (board.includes(' ')) {
    tie = false; 
  } else if(winner === true) {
    tie = false; 
  } else {
    tie = true; 
  }
  
};

const checkForWinner= () => {
  for (let condition of winningConditions) {
    const [a, b, c] = condition; 
    if(board[a] !== ' ' && board[a] === board[b] && board[b] === board[c]) {
      winner = true; 
      return
    }
  } 
  winner = false; 
    };
    
const switchPlayerTurn = () => {
  if(winner) 
    return; 
currentTurn = currentTurn === 1 ? -1 : 1;  
};


/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square, index) => { 
    square.addEventListener('click', handleClick); 
    square.id = index; 
}); 
  
resetBtnEl.addEventListener('click', init); 

init(); 