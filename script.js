
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
var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousedown", function(mouseMoveEvent) {
    mouse.x = mouseMoveEvent.x;
    mouse.y = mouseMoveEvent.y;


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