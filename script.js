
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let currentPlayer;
const playerX = "X";
const playerO = "O";
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let round = 0;



// 

canvas.addEventListener("click", function(click) {
    let xClick = click.offsetX;
    let yClick = click.offsetY;

    if (xClick <= 166 && yClick <= 166) {
        console.log("(1,1)");
    }

    if (xClick >= 166 && xClick <= 333 && yClick <= 166) {
        console.log("(1,2)");
    }

    if (xClick >= 333 && xClick <= 500 && yClick <= 166) {
        console.log("(1,3)");
    }

    if (xClick <= 166 && yClick >= 166 && yClick <= 333) {
        console.log("(2,1)");
    }

    if (xClick >= 166 && xClick <= 333 && yClick >= 166 && yClick <= 333) {
        console.log("(2,2)");
    }

    if (xClick >= 333 && xClick <= 500 && yClick >= 166 && yClick <= 333) {
        console.log("(2,3)");
    }

    if (xClick <= 166 && yClick >= 333 && yClick <= 500) {
        console.log("(3,1)");
    }

    if (xClick >= 166 && xClick <= 333 && yClick >= 333 && yClick <= 500) {
        console.log("(3,2)");
    }

    if (xClick >= 333 && xClick <= 500 && yClick >= 333 && yClick <= 500) {
        console.log("(3,3)");
    }
    
    



})

class TicTacToe {

    createBoard() {
        canvas.width = 500;
        canvas.height = 500;
        c.beginPath();
        c.moveTo(166,0);
        c.lineTo(166, 166);
        c.stroke();
        
        c.moveTo(333, 0);
        c.lineTo(333, 166);
        c.stroke();

        c.moveTo(0, 166);
        c.lineTo(500, 166);
        c.stroke();

        c.moveTo(166, 166);
        c.lineTo(166, 333);
        c.stroke();
        
        c.moveTo(333, 166);
        c.lineTo(333, 333);
        c.stroke();

        c.moveTo(0, 333);
        c.lineTo(500, 333);
        c.stroke();

        c.moveTo(166, 333);
        c.lineTo(166, 500);
        c.stroke();

        c.moveTo(333, 333);
        c.lineTo(333, 500);
        c.stroke();
    }

    checkForWin() {

    }

    checkForTie() {

    }




}

let game = new TicTacToe();
game.createBoard();