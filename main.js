// import mine_sleeper.js
var mine = require('./mine_sleeper.js');

/*
main function
*/
function main() {

	var size = process.argv[2];
	var b = new mine.Board(size);
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
    			case mine.OK:        	rl.prompt(); break;
    			case mine.GAME_OVER: 	console.log("GAME OVER!"); rl.close(); break;
    			case mine.CLEAR:     	console.log("CLEAR!"); rl.close(); break;
    		}
		}
	}).on('close',function(){
    	process.exit(0);
	});
};

// run main function
main();
