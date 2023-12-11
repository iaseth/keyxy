import { Layouts } from "./layouts";
import { KeyboardKey } from "./types";



export function getXY (keyName: string): KeyboardKey|null {
	const layout = Layouts.QWERTY;
	const key = layout.keys.find(key => key.keynames.includes(keyName));
	return key ? key : null;
}
