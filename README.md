# gen-gradient-color
generate gradient color by two colors

## Installation

```shell
$npm install gen-gradient-color
```

## Usage

### Node.js

```js
import { GenGradientColor } from 'gen-gradient-color';
// color format accept 3/6 digit hex string or array of 0-255 number/string
const generator = new GenGradientColor('#000000', [255, '255', 255]);
const colors = generator.gens(16);
// colors = ['#000000', '#060606', '#181818', '#2b2b2b', '#3d3d3d', '#4f4f4f', '#616161', '#737373', '#858585', '#979797', '#a8a8a8', '#bababa', '#cbcbcb', '#dddddd', '#efefef', '#ffffff'];

// reset colors, color also accept 3/6 digit hex string without '#'
generator.setColors('abc', '000def');
const color = generator.gen(8, 16);
// color = '#7b88dd'
```

### Web

```html
<script src="/dist/bundle.min.js"></script>
<script>
// number lager to 255 will consider to 255
var generator = new GenGradientColor('#f00', ['non number will consider as 0', 300, 0]);
var color = generator.gens(3);
// color = ['#ff0000', '#bcbc00', '#00ff00'];
</script>
```

### Util

```js
import { util } from 'gen-gradient-color';
util.isString('abc'); // true
util.hex2rgb('#000'); // [0, 0, 0], change string color to number array
// below method if input is string use hex2rgb else sanitize array of number
util.color2rgb([0, '123', 'invalid-number']); // [0, 123, 0]
util.rgb2hex([0, 1, 2]); // #000102
util.rgb2linear('001'); // oposite: util.linear2rgb
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
