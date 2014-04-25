Minesleeper
=========

Minesleeper is a simple Minesweeper console application written with JavaScript.

Quick Start
--------

1. Clone this repository.
2. Download latest node binary and install from [node.js](http://nodejs.org/).
3. Run following command.

		node main.js

	now start the game.

		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		mine> 

Options
--------

* set board size

		node main.js [board size (default is 9)]

Commands
--------

* open cell

		mine> [x]:[y]

	positions of x, y

		y|x[1][2][3][4][5][6][7][8][9]
		[1] *  *  *  *  *  *  *  *  *
		[2] *  *  *  *  *  *  *  *  *
		[3] *  *  *  *  *  *  *  *  *
		[4] *  *  *  *  *  *  *  *  *
		[5] *  *  *  *  *  *  *  *  *
		[6] *  *  *  *  *  *  *  *  *
		[7] *  *  *  *  *  *  *  *  *
		[8] *  *  *  *  *  *  *  *  *
		[9] *  *  *  *  *  *  *  *  *

	example:

		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		mine> 2:3
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  1  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		 *  *  *  *  *  *  *  *  *
		mine> 

* check flag (just add extra semicolon end of the command)

		mine> [x]:[y]:

	example:

		 -  1  *  *  *  *  *  1  -
		 -  1  *  2  1  1  *  1  -
		 -  1  1  1  -  1  1  1  -
		 -  -  -  -  -  -  -  -  -
		 -  -  -  -  -  -  -  -  -
		 -  -  -  1  1  1  -  -  -
		 -  -  -  1  *  1  -  -  -
		 -  -  1  2  *  2  1  1  -
		 -  -  1  *  *  *  *  1  -
		mine> 3:2:
		 -  1  *  *  *  *  *  1  -
		 -  1  f  2  1  1  *  1  -
		 -  1  1  1  -  1  1  1  -
		 -  -  -  -  -  -  -  -  -
		 -  -  -  -  -  -  -  -  -
		 -  -  -  1  1  1  -  -  -
		 -  -  -  1  *  1  -  -  -
		 -  -  1  2  *  2  1  1  -
		 -  -  1  *  *  *  *  1  -
		mine> 

* quit game

		mine> quit
