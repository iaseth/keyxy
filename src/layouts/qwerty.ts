import { KeyboardLayout } from "../types";



export const QWERTY: KeyboardLayout = {
	name: "QWERTY",
	keys: [
		{keynames: ["`", "~"], row: 1, column: 0},
		{keynames: ["1", "!"], row: 1, column: 1},
		{keynames: ["2", "@"], row: 1, column: 2},
		{keynames: ["3", "#"], row: 1, column: 3},
		{keynames: ["4", "$"], row: 1, column: 4},
		{keynames: ["5", "%"], row: 1, column: 5},
		{keynames: ["6", "^"], row: 1, column: 6},
		{keynames: ["7", "&"], row: 1, column: 7},
		{keynames: ["8", "*"], row: 1, column: 8},
		{keynames: ["9", "("], row: 1, column: 9},
		{keynames: ["0", ")"], row: 1, column: 10},
		{keynames: ["-", "_"], row: 1, column: 11},
		{keynames: ["=", "+"], row: 1, column: 12},
		{keynames: ["Backspace"], row: 1, column: 13},

		{keynames: ["Tab"], row: 2, column: 0},
		{keynames: ["q", "Q"], row: 2, column: 1},
		{keynames: ["w", "W"], row: 2, column: 2},
		{keynames: ["e", "E"], row: 2, column: 3},
		{keynames: ["r", "R"], row: 2, column: 4},
		{keynames: ["t", "T"], row: 2, column: 5},
		{keynames: ["y", "Y"], row: 2, column: 6},
		{keynames: ["u", "U"], row: 2, column: 7},
		{keynames: ["i", "I"], row: 2, column: 8},
		{keynames: ["o", "O"], row: 2, column: 9},
		{keynames: ["p", "P"], row: 2, column: 10},
		{keynames: ["[", "{"], row: 2, column: 11},
		{keynames: ["]", "}"], row: 2, column: 12},
		{keynames: ["\\", "|"], row: 2, column: 13},

		{keynames: [""], row: 3, column: 0}, // CAPS LOCK
		{keynames: ["a", "A"], row: 3, column: 1},
		{keynames: ["s", "S"], row: 3, column: 2},
		{keynames: ["d", "D"], row: 3, column: 3},
		{keynames: ["f", "F"], row: 3, column: 4},
		{keynames: ["g", "G"], row: 3, column: 5},
		{keynames: ["h", "H"], row: 3, column: 6},
		{keynames: ["j", "J"], row: 3, column: 7},
		{keynames: ["k", "K"], row: 3, column: 8},
		{keynames: ["l", "L"], row: 3, column: 9},
		{keynames: [";", ":"], row: 3, column: 10},
		{keynames: ["'", '"'], row: 3, column: 11},
		{keynames: ["Enter"], row: 3, column: 12},

		{keynames: [""], row: 4, column: 0}, // Left shift key
		{keynames: ["z", "Z"], row: 4, column: 1},
		{keynames: ["x", "X"], row: 4, column: 2},
		{keynames: ["c", "C"], row: 4, column: 3},
		{keynames: ["v", "V"], row: 4, column: 4},
		{keynames: ["b", "B"], row: 4, column: 5},
		{keynames: ["n", "N"], row: 4, column: 6},
		{keynames: ["m", "M"], row: 4, column: 7},
		{keynames: [",", "<"], row: 4, column: 8},
		{keynames: [".", ">"], row: 4, column: 9},
		{keynames: ["/", "?"], row: 4, column: 10},
		{keynames: [""], row: 4, column: 11} // Right shift key
	]
};
