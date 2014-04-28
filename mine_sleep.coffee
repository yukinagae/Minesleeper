# constant game status
class Status
	@OK : 0
	@GAME_OVER : 1
	@CLEAR : 2

# board class
class Board
	constructor: (size) -> 
		@maxX = size ? 9
		@maxY = size ? 9
		@cells
		@status = Status.OK
		@clear_cell_count = @maxX * @maxY
	init: ->
		@cells = []
		for x in [0..@maxX-1]
			@cells[x] = []
			for y in [0..@maxY-1]
				@cells[x][y] = new Cell(x, y, this)
	display: ->
		for y in [0..@maxY-1]
			str = ""
			for x in [0..@maxX-1]
				str = str + @cells[x][y].show()
			console.log str
	check_clear: ->
		if @clear_cell_count is 0
			this.clear()
			true
		else 
			false
	game_over: -> @status = Status.GAME_OVER
	clear: -> @status = Status.CLEAR
	get: (x, y) -> if 0 <= x < @maxX and 0 <= y < @maxY then @cells[x][y]
	open: (x, y) -> this.get(x, y)?.event()
	flag: (x, y) -> this.get(x, y)?.flag()

# cell class
class Cell
	constructor: (x, y, board) ->
		@parent = board
		@x = x
		@y = y
		@positions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
		@flagged = false
		@opened = false
		@count = 0
		@bomb = false
		rand = Math.floor(Math.random() * this.parent.maxX)
		if rand is 0
			@bomb = true 
			@parent.clear_cell_count--
	show: -> 
		switch
			when (not @opened) && @flagged then " f "
			when not @opened then " * "
			when @bomb then " b "
			when @count > 0 then " #{@count} "
			else " - "
	event: -> 
		this.open()
		if @bomb then return @parent.game_over()
		if @parent.check_clear() then return
		this.count_around()
		if @count is 0 then this.go_around()
	open: -> 
		if not @opened
			@opened = true
			@parent.clear_cell_count--
	flag: -> @flagged = not @flagged
	count_around: ->
		sum = 0
		for i in [0..@positions.length-1]
			c = @parent.get(@x + @positions[i][0], @y + @positions[i][1])
			if c is undefined
				continue
			if c?.bomb
				sum++
		@count = sum
	go_around: ->
		for i in [0..@positions.length-1]
			c = @parent.get(@x + @positions[i][0], @y + @positions[i][1])
			if c?.opened
				continue
			else
				c?.open()
				c?.count_around()
				if c?.count is 0
					c.go_around() # recursively go around
				if c?.parent.check_clear()
					break

# export objects as module
module.exports =
	Board: Board
	OK: Status.OK
	GAME_OVER: Status.GAME_OVER
	CLEAR: Status.CLEAR
