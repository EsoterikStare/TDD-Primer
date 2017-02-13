const nodeExternals = require('webpack-node-externals')

const config = {
  entry: ["./src/index.js"],
  output: {
    filename: "../bundle.js"
  },
  externals: [ nodeExternals() ], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: [/node_modules/, /^\.tmp$/],
      //   loader: 'jshint-loader'
      // },
      {
        test: [/\.jsx?$/,/\.es6$/],
        loader: 'babel-loader',
        // query: {
        //   presets: ['react', 'es2015']
        // }
      }
    ]
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    function() {
      this.plugin('watch-run', function(watching, callback) {
        console.log('\n--> Begin compile at ' + new Date());
        callback();
      })
    }
  ],
  // watch: true
}

module.exports = config