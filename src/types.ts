


export type KeyboardKey = {
	keynames: string[],
	row: 0|1|2|3|4|5,
	column: 0|1|2|3|4|5|6|7|8|9|10|11|12|13,
	isAlpha: boolean,
	isDigit: boolean,
	isSymbol: boolean
};

export type KeyboardLayout = {
	name: string,
	keys: KeyboardKey[]
};


