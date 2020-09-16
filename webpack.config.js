const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'index',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};

module.exports = (env, options) => {
	if (options.mode === 'production') {
		config.output.filename += '.min'
	}
	config.output.filename += '.js'
	return config;
}