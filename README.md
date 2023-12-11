
# keyxy
`keyxy` provides you with the XY co-ordinates for any key on the keyboard.
You can see a demo [here](https://keyxy.redpapr.com/).

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/keyxy/blob/master/README.md.rx).


## How it started
I was working on a [sound synthesizer app](https://github.com/iaseth/audiola)
that played a sound depending on the co-ordinates of the key pressed.
I extracted the key detection logic into a separate npm package called
[keyxy](https://www.npmjs.com/package/keyxy) and added a
[demo react app](https://keyxy.redpapr.com/) for previewing.


## How to use keyxy in your project
Install the [`keyxy`](https://www.npmjs.com/package/keyxy) npm package:
```
npm install keyxy
```

Import the `getXY()` function:
```
import { getXY } from "keyxy";
```

Call the `getXY()` function with the key name to get a `timename`:
```
const { x, y } = getTimeName(key);
```


## Dependencies
This package has no dependencies.


## Dev dependencies
This package has no devDependencies.


## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).

