
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let currentPlayer = "X";
const playerX = "X";
const playerO = "O";
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const CELL_SIZE = 166;

canvas.addEventListener("click", function(click) {
    let xClick = click.offsetX;
    let yClick = click.offsetY;

    if (xClick <= CELL_SIZE && yClick <= CELL_SIZE) {
        if (board[0][0] == null) {
            board[0][0] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE / 2 , CELL_SIZE / 2);
            } else {
                game.drawX();
            } 
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick <= CELL_SIZE) {
        if (board[0][1] == null) {
            board[0][1] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(333 - CELL_SIZE / 2, CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick >=  CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick <= CELL_SIZE) {
        if (board[0][2] == null) {
            board[0][2] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick <= CELL_SIZE && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        if (board[1][0] == null) {
            board[1][0] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        if (board[1][1] == null) {
            board[1][1] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick >= CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        if (board[1][2] == null) {
            board[1][2] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick <= CELL_SIZE && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        if (board[2][0] == null) {
            board[2][0] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        if (board[2][1] == null) {
            board[2][1] = currentPlayer;
            if (currentPlayer  == playerO) {
                game.drawO(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
            } else {

            }
        }
    }

    if (xClick >= CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        if (board[2][2] == null) {
            board[2][2] = currentPlayer;
            if (currentPlayer == playerO) {
                game.drawO(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
            } else {

            }
        }
    }
    
    if (currentPlayer == playerX) {
        currentPlayer = playerO;
    } else {
        currentPlayer = playerX;
    }
})

class TicTacToe {

    createBoard() {
        canvas.width = 500;
        canvas.height = 500;
        c.beginPath();
        // draw lines 
        for (var x = 1; x <= 2; x++) {
            c.moveTo(x * CELL_SIZE, 0);
            c.lineTo(x * CELL_SIZE, 500);
            c.stroke();
        }

        c.beginPath();
        for (var y = 1; y <= 2; y++) {
            c.moveTo(0, y * CELL_SIZE);
            c.lineTo(500, y * CELL_SIZE);
            c.stroke();
        }
    }

    checkForWin() {
        if (board[0][1] && board[0][2] && board[0][3] == playerX) {
            // x wins ROW
        } 

        if (board[1][1] && board[1][2] && board[1][3] == playerX) {
            // x wins ROW
        } 

        if (board[2][1] && board[2][2] && board[2][3] == playerX) {
            // x wins ROW
        } 

        if (board[1][0] && board[2][0] && board[3][0] == playerX) {
            // x wins COLUMN
        } 

        if (board[1][1] && board[2][1] && board[3][1] == playerX) {
            // x wins COLUMN
        }

        if (board[1][2] && board[2][2] && board[3][2] == playerX) {
            // x wins COLUMN
        }

        if (board[0][0] && board[1][1] && board[2][2] == playerX) {
            // x wins DIAGONAL
        }

        if (board[2][0] && board[1][1] && board [0][2] == playerX) {
            // x wins DIAGONAL
        }

    // #### PLAYERO ####

        if (board[0][1] && board[0][2] && board[0][3] == playerO) {
            // o wins ROW
        } 

        if (board[1][1] && board[1][2] && board[1][3] == playerO) {
            // o wins ROW
        } 

        if (board[2][1] && board[2][2] && board[2][3] == playerO) {
            // o wins ROW
        } 

        if (board[1][0] && board[2][0] && board[3][0] == playerO) {
            // o wins COLUMN
        } 

        if (board[1][1] && board[2][1] && board[3][1] == playerO) {
            // o wins COLUMN
        }

        if (board[1][2] && board[2][2] && board[3][2] == playerO) {
            // o wins COLUMN
        }

        if (board[0][0] && board[1][1] && board[2][2] == playerO) {
            // o wins DIAGONAL
        }

        if (board[2][0] && board[1][1] && board [0][2] == playerO) {
            // o wins DIAGONAL
        }

        
    }

    checkForTie() {

    }

    drawX(x, y) {
        c.beginPath()
        c.moveTo();
    }

    drawO(x, y) {
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

let game = new TicTacToe();
game.createBoard();