Minesleeper
=========

Minesleeper is a simple Minesweeper console application written with JavaScript.

Quick Start
--------

1. Clone this repository.
2. Download latest node binary and install from [node.js](http://nodejs.org/).
3. Run following command.

<pre>
node main.js
</pre>

start the game.

<pre>
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
</pre>

Options
--------

* set board size
<pre>
node main.js [board size (default is 9)]
</pre>

Commands
--------

* open cell
<pre>
mine> [x]:[y]
</pre>

positions of x, y

<pre>
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
</pre>

example:
<pre>
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
mine> [2]:[3]
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  <span style="color:red">1</span>  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
 *  *  *  *  *  *  *  *  *
mine> 
</pre>

* check flag (just add extra semicolon end of the command)
<pre>
mine> [x]:[y]:
</pre>

example:
<pre>
 -  1  *  *  *  *  *  1  -
 -  1  *  2  1  1  *  1  -
 -  1  1  1  -  1  1  1  -
 -  -  -  -  -  -  -  -  -
 -  -  -  -  -  -  -  -  -
 -  -  -  1  1  1  -  -  -
 -  -  -  1  *  1  -  -  -
 -  -  1  2  *  2  1  1  -
 -  -  1  *  *  *  *  1  -
mine> [3]:[2]:
 -  1  *  *  *  *  *  1  -
 -  1  <span style="color:red">f</span>  2  1  1  *  1  -
 -  1  1  1  -  1  1  1  -
 -  -  -  -  -  -  -  -  -
 -  -  -  -  -  -  -  -  -
 -  -  -  1  1  1  -  -  -
 -  -  -  1  *  1  -  -  -
 -  -  1  2  *  2  1  1  -
 -  -  1  *  *  *  *  1  -
mine> 
</pre>

* quit game
<pre>mine> quit</pre>