/*
Board class
*/
function Board() {
	this.maxX = 3;
	this.maxY = 3;
	this.cells = [];
}

/*
init board
*/
Board.prototype.init = function() {
	this.cells.push(new Cell(0, 0));
	this.cells.push(new Cell(0, 1));
	this.cells.push(new Cell(0, 2));
	this.cells.push(new Cell(1, 0));
	this.cells.push(new Cell(1, 1));
	this.cells.push(new Cell(1, 2));
	this.cells.push(new Cell(2, 0));
	this.cells.push(new Cell(2, 1));
	this.cells.push(new Cell(2, 2));
}

/*
display board
*/
Board.prototype.display = function() {

	console.log(this.cells[0].show() + " " + this.cells[1].show() + " " + this.cells[2].show());
	console.log(this.cells[3].show() + " " + this.cells[4].show() + " " + this.cells[5].show());
	console.log(this.cells[6].show() + " " + this.cells[7].show() + " " + this.cells[8].show());
}

/*
open cell by index
*/
Board.prototype.open = function(index) {
	this.cells[index].opened = true;
}

/*
Cell class
*/
function Cell(x, y) {
	this.x = x;
	this.y = y;
	this.opened = false;
	this.bomb = false;
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


var b = new Board();

b.init();
b.open(0);
b.open(1);
b.open(4);

// console.log(b.cells[0]);
b.display();

