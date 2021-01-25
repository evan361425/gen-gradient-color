# gen-gradient-color
generate gradient color between two colors

## Installation

### NPM

```shell
$ npm install gen-gradient-color
```

### Website

download [dist/bundle.js](dist/bundle.js) or [dist/bundle.min.js](dist/bundle.min.js) and include it!

## Usage

### Node.js

```js
import { GenGradientColor } from 'gen-gradient-color';
// color format accept 3/6 digit hex string or array of 0-255 number
const generator = new GenGradientColor('#000000', [255, '255', 255]);
const colors = generator.gens(16);
// colors = ['#000000', '#060606', '#181818', '#2b2b2b', '#3d3d3d', '#4f4f4f', '#616161', '#737373', '#858585', '#979797', '#a8a8a8', '#bababa', '#cbcbcb', '#dddddd', '#efefef', '#ffffff'];

// reset colors, color also accept 3/6 digit hex string without '#'
generator.setColors('abc', '000def');
const color1 = generator.gen(3, 16);
// color1 = '#9baad3'
const color2 = generator.gen(8, 16);
// color2 = '#7b88dd'
```

### Web

```html
<script src="/dist/bundle.min.js"></script>
<script>
// number greater than 255 will equal to 255
var generator = new GenGradientColor('#f00', ['non number will equal to 0', 300, 0]);
var color = generator.gens(3);
// color = ['#ff0000', '#bcbc00', '#00ff00'];
</script>
```

### Util

Web environment can use it by `GenGradientColor.util`

```js
import { util } from 'gen-gradient-color';
// or var util = GenGradientColor.util in website

util.isString('abc'); // true

// change string to number array
util.hex2rgb('#000'); // [0, 0, 0]
// oposite: hex2rgb
util.rgb2hex([0, 1, 2]); // #000102

// if is string: hex2rgb
// else if is array: sanitize element
// else: error
util.color2rgb([0, '123', 'invalid-number']); // [0, 123, 0]

util.rgb2linear('001'); // oposite: util.linear2rgb
// a * p + b * (1 - p)
util.lerp(5, 6, 0.1); // a: 5, b: 6, p: 0.1
```

## Scripts

Run your own unit test

```bash
$ npm run test
```

Build your own package

``` bash
$ npm run dev
$ npm run prod
# equal to `npm run dev && npm run prod`
$ npm run build
```
