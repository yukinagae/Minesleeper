/*
constant values
*/
var OK = 0;
var GAME_OVER = 1;
var CLEAR = 2;

/*
board class
*/
function Board(size) {
	this.maxX = size || 9;
	this.maxY = size || 9;
	this.cells;
	this.status = OK;
	this.clear_cell_count = this.maxX * this.maxY;
};

Board.prototype.init = function() {

	this.cells = new Array(this.maxX);

	for (var x = 0; x < this.maxX; x++){
		for(var y = 0; y < this.maxY; y++) {
			this.cells[x] = this.cells[x] || new Array(this.maxY);
			this.cells[x][y] = new Cell(x, y, this);
		}
	}
};

Board.prototype.display = function() {
	for(var y = 0; y < this.maxY; y++) {
		var str = "";
		for(var x = 0; x < this.maxX; x++) {
			str = str + this.cells[x][y].show();
		}
		console.log(str)
	}
};

Board.prototype.open = function(x, y) {
	var c = this.cells[x][y]
	c.event();
};

Board.prototype.flag = function(x, y) {
	var c = this.cells[x][y]
	c.flagged = !c.flagged;
};

Board.prototype.get = function(x, y) {
	if(0 <= x && x < this.maxX && 0 <= y && y < this.maxY) return this.cells[x][y];

	return null;
};

Board.prototype.check_clear = function() {
	if(this.clear_cell_count === 0) {
		this.clear();
		return true;
	} else {
		return false;
	}
};

Board.prototype.game_over = function() {
	this.status = GAME_OVER;
};

Board.prototype.clear = function() {
	this.status = CLEAR;
};

/*
cell class
*/
function Cell(x, y, board) {
	this.parent = board;
	this.x = x;
	this.y = y;
	this.positions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
	this.flagged = false;
	this.opened = false;
	this.count = 0;

	var rand = Math.floor(Math.random() * this.parent.maxX);
	if(rand === 0) {
		this.bomb = true;
		this.parent.clear_cell_count--;
	}
};

Cell.prototype.show = function(){
	switch (true) {
		case !this.opened && this.flagged: return " f ";
		case !this.opened: 				   return " * ";
		case this.bomb: 				   return " b ";
		case this.count > 0:               return " " + this.count + " ";
		default:                           return " - ";
	}
};

Cell.prototype.event = function() {

	this.open();

	switch (true) {
		case this.bomb: this.parent.game_over(); return;
		case this.parent.check_clear(): 		 return;
	}

	this.count_around();

	if(this.count === 0) {
		this.around(); // if around bomb coutn '0', open around.
	} 
};

Cell.prototype.open = function() {
	if(!this.opened) {
		this.opened = true;
		this.parent.clear_cell_count--;
	}
};

Cell.prototype.flag = function() {
	this.flagged = !this.flagged;
};

Cell.prototype.count_around = function() {

	var sum = 0;
	for(var i = 0; i < this.positions.length; i++) {
		
		var c = this.parent.get(this.x + this.positions[i][0], this.y + this.positions[i][1]);
		if(c == null) {
			continue;
		} else if(c.bomb){
			sum++;
		}
	}
	this.count = sum;
};

Cell.prototype.around = function() {

	var sum = 0;
	for(var i = 0; i < this.positions.length; i++) {

		var c = this.parent.get(this.x + this.positions[i][0], this.y + this.positions[i][1]);
		if(c == null || c.opened) {
			continue; // go next if outside of board or already opened
		} else {
			c.count_around(); // count around bombs

			if(c.count === 0) {
				c.open();
				c.around(); // recursively check around
			} else {
				c.open();
				
				if(c.parent.check_clear()) { // check if cleared
					break;
				}
			}	
		}
	}
};

/*
main function
*/
function main() {

	var size = process.argv[2];
	var b = new Board(size);
	b.init();
	b.display();

	var readline = require('readline');
	var rl = readline.createInterface(process.stdin, process.stdout);

	rl.setPrompt('mine> ');
	rl.prompt();
	rl.on('line', function(line) {

    	if (line === "exit" || line === "q" || line === "quit") { 
			rl.close();
		} else {

			var open_position = line.split(":");

			switch (open_position.length) {
				case 2: 	b.open(open_position[0]-1, open_position[1]-1); break;
				case 3: 	b.flag(open_position[0]-1, open_position[1]-1); break;
			}

    		b.display();

    		switch (b.status) {
    			case OK:        	rl.prompt(); break;
    			case GAME_OVER: 	console.log("GAME OVER!"); rl.close(); break;
    			case CLEAR:     	console.log("CLEAR!"); rl.close(); break;
    		}
		}
	}).on('close',function(){
    	process.exit(0);
	});
};

// run main function
main();
