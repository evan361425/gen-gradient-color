const path = require('path');

const config = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.output.filename = 'bundle.min.js';
    config.devtool = 'source-map';
  }

  return config;
};
