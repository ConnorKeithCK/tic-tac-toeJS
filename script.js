
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let gameOver = false;
let playerX = "X";
let playerO = "O";
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const CELL_SIZE = 166;

canvas.addEventListener("click", function(click) {
    let xClick = click.offsetX;
    let yClick = click.offsetY;

if (gameOver == false) {
    if (xClick <= CELL_SIZE && yClick <= CELL_SIZE) {
        if (board[0][0] == null) {
            board[0][0] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE / 2 , CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE / 2, CELL_SIZE / 2);
                game.checkForWin();
            } 
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick <= CELL_SIZE) {
        if (board[0][1] == null) {
            board[0][1] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick >=  CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick <= CELL_SIZE) {
        if (board[0][2] == null) {
            board[0][2] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick <= CELL_SIZE && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        if (board[1][0] == null) {
            board[1][0] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        if (board[1][1] == null) {
            board[1][1] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick >= CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        if (board[1][2] == null) {
            board[1][2] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick <= CELL_SIZE && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        if (board[2][0] == null) {
            board[2][0] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        if (board[2][1] == null) {
            board[2][1] = game.currentPlayer;
            if (game.currentPlayer  == playerO) {
                game.drawO(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }

    if (xClick >= CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        if (board[2][2] == null) {
            board[2][2] = game.currentPlayer;
            if (game.currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
                game.checkForWin();
            } else {
                game.drawX(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
                game.checkForWin();
            }
            if (game.currentPlayer == playerX) {
                game.currentPlayer = playerO;
            } else {
                game.currentPlayer = playerX;
            }
        } else {
            window.alert("That square has already been used! Try again!");
        }
    }
    
}
    
})

class TicTacToe {

    constructor(player) {
        this.currentPlayer = player;
    }

    createBoard() {
        canvas.width = 500;
        canvas.height = 500;
        c.beginPath();
        c.strokeStyle = 'gray';
        c.lineWidth = 10;
        c.lineJoin = 'round';
        c.lineCap = 'round';
        // draw lines 
        for (var x = 1; x <= 2; x++) {
            c.moveTo(x * CELL_SIZE, 5);
            c.lineTo(x * CELL_SIZE, 495);
            c.stroke();
        }

        c.beginPath();
        for (var y = 1; y <= 2; y++) {
            c.moveTo(5, y * CELL_SIZE);
            c.lineTo(495, y * CELL_SIZE);
            c.stroke();
        }
    }

    checkForWin() {

        if ((board[0][0] == playerX) && (board[0][1] === playerX) && (board[0][2] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else  if((board[1][0] == playerX) && (board[1][1] === playerX) && (board[1][2] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else if ((board[2][0] == playerX) && (board[2][1] === playerX) && (board[2][2] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return
            }
        }  else if ((board[0][0] == playerX) && (board[1][0] === playerX) && (board[2][0] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        }  else if ((board[0][1] == playerX) && (board[1][1] === playerX) && (board[2][1] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else  if ((board[0][2] == playerX) && (board[1][2] === playerX) && (board[2][2] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else  if ((board[0][0] == playerX) && (board[1][1] === playerX) && (board[2][2] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else if ((board[0][2] == playerX) && (board[1][1] === playerX) && (board[2][2] === playerX)) {
            if (window.confirm("Player X has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else if ((board[0][0] == playerO) && (board[0][1] === playerO) && (board[0][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else  if((board[1][0] == playerO) && (board[1][1] === playerO) && (board[1][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else if ((board[2][0] == playerO) && (board[2][1] === playerO) && (board[2][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        }  else if ((board[0][0] == playerO) && (board[0][1] === playerO) && (board[0][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        }  else if ((board[0][1] == playerO) && (board[1][1] === playerO) && (board[2][1] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else  if ((board[0][2] == playerO) && (board[1][2] === playerO) && (board[2][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else  if ((board[0][0] == playerO) && (board[1][1] === playerO) && (board[2][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        } else if ((board[0][2] == playerO) && (board[1][1] === playerO) && (board[2][2] === playerO)) {
            if (window.confirm("Player O has won! Press OK to reset the board.")) {
                game.currentPlayer = playerX;
                game.clearBoard();
                game.createBoard();
            } else {
                gameOver = true;
                return;
            }
        }
       
    }

    drawX(x, y) {
        c.strokeStyle = 'red';
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo((x - CELL_SIZE / 2 ) + 20, (y - CELL_SIZE / 2) + 20);
        c.moveTo(x,y);
        c.lineTo((x - CELL_SIZE / 2 ) + 20, (y + CELL_SIZE / 2) - 20);
        c.moveTo(x,y);
        c.lineTo((x  + CELL_SIZE / 2) - 20, (y - CELL_SIZE / 2) + 20);
        c.moveTo(x, y);
        c.lineTo((x + CELL_SIZE / 2) - 20, (y + CELL_SIZE / 2) - 20);
        c.stroke();
    }

    drawO(x, y) {
        c.strokeStyle = 'darkblue';
        c.beginPath();
        c.arc(x, y, 60, 0, 2 * Math.PI);
        c.stroke();
    }

    clearBoard() {
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }
}

var game = new TicTacToe(playerX);
game.createBoard();
