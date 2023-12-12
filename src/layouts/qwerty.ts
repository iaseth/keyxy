import { KeyboardLayout } from "../types";



export const QWERTY: KeyboardLayout = {
	name: "QWERTY",
	keys: [
		{keynames: ["`", "~"], row: 1, column: 0, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["1", "!"], row: 1, column: 1, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["2", "@"], row: 1, column: 2, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["3", "#"], row: 1, column: 3, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["4", "$"], row: 1, column: 4, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["5", "%"], row: 1, column: 5, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["6", "^"], row: 1, column: 6, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["7", "&"], row: 1, column: 7, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["8", "*"], row: 1, column: 8, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["9", "("], row: 1, column: 9, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["0", ")"], row: 1, column: 10, isAlpha: false, isDigit: true, isSymbol: false},
		{keynames: ["-", "_"], row: 1, column: 11, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["=", "+"], row: 1, column: 12, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["Backspace"], row: 1, column: 13, isAlpha: false, isDigit: false, isSymbol: false},

		{keynames: ["Tab"], row: 2, column: 0, isAlpha: false, isDigit: false, isSymbol: false},
		{keynames: ["q", "Q"], row: 2, column: 1, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["w", "W"], row: 2, column: 2, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["e", "E"], row: 2, column: 3, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["r", "R"], row: 2, column: 4, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["t", "T"], row: 2, column: 5, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["y", "Y"], row: 2, column: 6, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["u", "U"], row: 2, column: 7, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["i", "I"], row: 2, column: 8, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["o", "O"], row: 2, column: 9, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["p", "P"], row: 2, column: 10, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["[", "{"], row: 2, column: 11, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["]", "}"], row: 2, column: 12, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["\\", "|"], row: 2, column: 13, isAlpha: false, isDigit: false, isSymbol: true},

		{keynames: [""], row: 3, column: 0, isAlpha: false, isDigit: false, isSymbol: false}, // CAPS LOCK
		{keynames: ["a", "A"], row: 3, column: 1, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["s", "S"], row: 3, column: 2, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["d", "D"], row: 3, column: 3, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["f", "F"], row: 3, column: 4, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["g", "G"], row: 3, column: 5, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["h", "H"], row: 3, column: 6, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["j", "J"], row: 3, column: 7, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["k", "K"], row: 3, column: 8, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["l", "L"], row: 3, column: 9, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: [";", ":"], row: 3, column: 10, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["'", '"'], row: 3, column: 11, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["Enter"], row: 3, column: 12, isAlpha: false, isDigit: false, isSymbol: false},

		{keynames: [""], row: 4, column: 0, isAlpha: false, isDigit: false, isSymbol: false}, // Left shift key
		{keynames: ["z", "Z"], row: 4, column: 1, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["x", "X"], row: 4, column: 2, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["c", "C"], row: 4, column: 3, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["v", "V"], row: 4, column: 4, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["b", "B"], row: 4, column: 5, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["n", "N"], row: 4, column: 6, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: ["m", "M"], row: 4, column: 7, isAlpha: true, isDigit: false, isSymbol: false},
		{keynames: [",", "<"], row: 4, column: 8, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: [".", ">"], row: 4, column: 9, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: ["/", "?"], row: 4, column: 10, isAlpha: false, isDigit: false, isSymbol: true},
		{keynames: [""], row: 4, column: 11, isAlpha: false, isDigit: false, isSymbol: false} // Right shift key
	]
};
