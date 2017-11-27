const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'sass-loader' }, // compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  // PLUGINS BELOW REDUCE BUNDLE SIZE FOR PRODUCTION
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: false,
    // }), // minify
    new webpack.optimize.AggressiveMergingPlugin(), // Merging chunks
    new webpack.HotModuleReplacementPlugin(), // hot reload
    new webpack.NoEmitOnErrorsPlugin(), // better errors
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  /**
   * When you are in the production branch, comment the following lines
   * of devtool so as to prevent throwing error while building the bundle for production
   */
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9090,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
