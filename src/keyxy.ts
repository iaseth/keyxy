import { Layouts } from "./layouts";
import { KeyboardKey } from "./types";



export function getKeyDetails (keyName: string): KeyboardKey|null {
	const layout = Layouts.QWERTY;
	const key = layout.keys.find(key => key.keynames.includes(keyName));
	return key ? key : null;
}

export function getXY (keyName: string): [number, number] {
	const key = getKeyDetails(keyName);
	return key ? [key.row, key.column] : [-1, -1];
}
