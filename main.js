/*
Board class
*/
function Board(size) {
	this.maxX = size;
	this.maxY = size;
	this.cells;
}

/*
init board
*/
Board.prototype.init = function() {

	this.cells = new Array(this.maxX);

	for (var i = 0; i < this.cells.length; i++){
		this.cells[i] = new Array(this.maxY);
	}

	for(var x = 0; x < this.maxX; x++) {
		for(var y = 0; y < this.maxY; y++) {
			this.cells[x][y] = new Cell(x, y);
		}
	}
}

/*
display board
*/
Board.prototype.display = function() {
	for(var x = 0; x < this.maxX; x++) {
		var str = "";
		for(var y = 0; y < this.maxY; y++) {
			str = str + this.cells[x][y].show();
		}
		console.log(str)
	}
}

/*
open cell by index
*/
Board.prototype.open = function(x, y) {
	var c = this.cells[x][y]

	// TODO test
	c.event();
}

Board.prototype.openAll = function() {
	for(var x = 0; x < this.maxX; x++) {
		for(var y = 0; y < this.maxY; y++) {
			this.cells[x][y].opened = true;
		}
	}
}

/*
Cell class
*/
function Cell(x, y) {
	this.x = x;
	this.y = y;

	this.opened = false;

	// var rand = Math.floor(Math.random() * 4);
	// this.bomb = rand == 0;
	// TODO test
	if((x == 2 && y == 2) || (x == 0 && y == 0) || (x == 0 && y == 3)) {
		this.bomb = true;
	} else {
		this.bomb = false;
	}
}

/*
show cell
*/
Cell.prototype.show = function(){
	if(!this.opened) {
		return "*";
	} else {
		if(this.bomb) {
			return "b";
		} else {
			return "-";
		}
	}
}

/*
trigger
*/
Cell.prototype.event = function() {
	console.log("TRIGGERD!");
	console.log(this);

	// open
	this.opened = true;

	// around
	this.left_up();
	this.up();
	this.right_up();
	this.left();
	this.right();
	this.left_down();
	this.down();
	this.right_down();
}

Cell.prototype.left_up = function() {
	console.log("left_up!");
}

Cell.prototype.up = function() {
	console.log("up!");
}

Cell.prototype.right_up = function() {
	console.log("right_up!");
}

Cell.prototype.left = function() {
	console.log("left!");
}

Cell.prototype.right = function() {
	console.log("right!");
}

Cell.prototype.left_down = function() {
	console.log("left_down!");
}

Cell.prototype.down = function() {
	console.log("down!");
}

Cell.prototype.right_down = function() {
	console.log("right_down!");
}

var b = new Board(5);

b.init();

// TODO test
b.openAll();

// b.open(1, 1);

// b.display();

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "exit" || line === "q" || line === "quit") rl.close();
    b.display();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});