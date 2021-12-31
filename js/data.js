const levels = {
	"1":{
		name:"level1",
		layout:`S.0.0,s.0.1,S.2.1,T.0.0
s.0.0,P,-,-
-,-,-,-`,
		exit:{x:3, y:2, dir:0},
	},
	"2":{

	},
}

const blockData = {
	"s": (x, y, p, d, c) => new Square(x, y, p, 1, d, c),
	"S": (x, y, p, d, c) => new Square(x, y, p, 0, d, c),
	"h": (x, y, p, d, c) => new Hexagon(x, y, p, 1, d, c),
	"H": (x, y, p, d, c) => new Hexagon(x, y, p, 0, d, c),
	"t": (x, y, p, d, c) => new Triangle(x, y, p, 1, d, c),
	"T": (x, y, p, d, c) => new Triangle(x, y, p, 0, d, c),
}