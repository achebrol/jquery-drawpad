const path = require('path');

module.exports = {
  mode: 'development',
  target: 'es5',
  entry: [
    //'core-js/stable',
    './jquery-surveys-plugin.ts',
    './jquery-drawpad.ts',
    './jquery-feedback.ts'
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.html$/i, use: 'html-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        /*use: [
          {
            loader: 'babel-loader'
          }
        ],*/
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules']
  },
  externals: {
    jquery: 'jQuery',
    'survey-jquery': 'window["Survey"]'
    //Survey: 'window["Survey"]'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
