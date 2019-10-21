
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
let round = 0;
const CELL_SIZE = 166;



canvas.addEventListener("click", function(click) {
    let xClick = click.offsetX;
    let yClick = click.offsetY;

    if (xClick <= CELL_SIZE && yClick <= CELL_SIZE) {
        console.log("(1,1)");
        if (board[0][0] == null) {
            board[0][0] = currentPlayer;
            game.drawMove(CELL_SIZE / 2 , CELL_SIZE / 2);
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick <= CELL_SIZE) {
        console.log("(1,2)");
        if (board[0][1] == null) {
            board[0][1] = currentPlayer;
            game.drawMove(333 - CELL_SIZE / 2, CELL_SIZE / 2);
        }
    }

    if (xClick >=  CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick <= CELL_SIZE) {
        console.log("(1,3)");
        if (board[0][2] == null) {
            board[0][2] = currentPlayer;
            game.drawMove(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE / 2);
        }
    }

    if (xClick <= CELL_SIZE && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        console.log("(2,1)");
        if (board[1][0] == null) {
            board[1][0] = currentPlayer;
            game.drawMove(CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        console.log("(2,2)");
        if (board[1][1] == null) {
            board[1][1] = currentPlayer;
            game.drawMove(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
        }
    }

    if (xClick >= CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick >= CELL_SIZE && yClick <= CELL_SIZE * 2) {
        console.log("(2,3)");
        if (board[1][2] == null) {
            board[1][2] = currentPlayer;
            game.drawMove(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 2 - CELL_SIZE / 2);
        }
    }

    if (xClick <= CELL_SIZE && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        console.log("(3,1)");
        if (board[2][0] == null) {
            board[2][0] = currentPlayer;
            game.drawMove(CELL_SIZE - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
        }
    }

    if (xClick >= CELL_SIZE && xClick <= CELL_SIZE * 2 && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        console.log("(3,2)");
        if (board[2][1] == null) {
            board[2][1] = currentPlayer;
            game.drawMove(CELL_SIZE * 2 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
        }
    }

    if (xClick >= CELL_SIZE * 2 && xClick <= CELL_SIZE * 3 && yClick >= CELL_SIZE * 2 && yClick <= CELL_SIZE * 3) {
        console.log("(3,3)");
        if (board[2][2] == null) {
            board[2][2] = currentPlayer;
            game.drawMove(CELL_SIZE * 3 - CELL_SIZE / 2, CELL_SIZE * 3 - CELL_SIZE / 2);
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
        c.moveTo(CELL_SIZE,0);
        c.lineTo(CELL_SIZE, CELL_SIZE);
        c.stroke();
        
        c.moveTo(CELL_SIZE * 2, 0);
        c.lineTo(CELL_SIZE * 2, CELL_SIZE);
        c.stroke();

        c.moveTo(0, CELL_SIZE);
        c.lineTo( CELL_SIZE * 3, CELL_SIZE);
        c.stroke();

        c.moveTo(CELL_SIZE, CELL_SIZE);
        c.lineTo(CELL_SIZE, CELL_SIZE * 2);
        c.stroke();
        
        c.moveTo(CELL_SIZE * 2, CELL_SIZE);
        c.lineTo(CELL_SIZE * 2, CELL_SIZE * 2);
        c.stroke();

        c.moveTo(0, CELL_SIZE * 2);
        c.lineTo(500, CELL_SIZE * 2);
        c.stroke();

        c.moveTo(CELL_SIZE, CELL_SIZE * 2);
        c.lineTo(CELL_SIZE,  CELL_SIZE * 3);
        c.stroke();

        c.moveTo(CELL_SIZE * 2, CELL_SIZE * 2);
        c.lineTo(CELL_SIZE * 2, CELL_SIZE * 3);
        c.stroke();
    }

    checkForWin() {

    }

    checkForTie() {

    }

    drawMove(x, y) {
        if (currentPlayer == playerX) {
            // draw X
        } else {
            c.beginPath();
            c.arc(x, y, 60, 0, 2 * Math.PI);
            c.stroke();
        }
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