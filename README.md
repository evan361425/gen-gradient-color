# gen-gradient-color
generate gradient color by two colors

## Installation

```shell
$npm install gen-gradient-color
```

## Usage

```
// color1 is black and color2 is white
import GenGradientColor from 'gen-gradient-color';
var generator = new GenGradientColor('#000000', [255,255,255]);
var colors = generator.gens(16);
// colors = ['#000000', '#111111', '#222222', '#333333', ..., '#ffffff'];

var middleGray = generator.gen(8, 16)
// middleGray = '#888888'
```

## Test

```shell
$npm run test
```
