# genGradientColor
generate gradient color by two colors

# js usage

```
// color1 is black and color2 is white
var generator = new genGradientColor('#000000', [255,255,255]);
var colors = generator.gens(16);
// colors = ['#000000', '#111111', '#222222', '#333333', ..., '#ffffff'];
var middleGray = generator.gen(8, 16)
// middleGray = '#888888'
```

# installation

`npm install gen-gradient-color`

or

`git clone 'https://github.com/evan361425/genGradientColor.git'`

# test

`node app.js`

Now go to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) you can see the example.
