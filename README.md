# gen-gradient-color
generate gradient color by two colors

## Installation

```shell
$npm install gen-gradient-color
```

## Usage

### Node.js

```js
// color1 is black and color2 is white
import { GenGradientColor } from 'gen-gradient-color';
var generator = new GenGradientColor('#000000', [255,255,255]);
var colors = generator.gens(16);
// colors = ['#000000', '#060606', '#181818', '#2b2b2b', '#3d3d3d', '#4f4f4f', '#616161', '#737373', '#858585', '#979797', '#a8a8a8', '#bababa', '#cbcbcb', '#dddddd', '#efefef', '#ffffff'];

var middleGray = generator.gen(8, 16)
// middleGray = '#858585'
```

### Web

```html
<script src="/dist/bundle.min.js"></script>
<script>
var generator = new GenGradientColor('#ff0000', '#00ff00');
</script>
```

## Unit Test

```shell
$ npm run test
```
