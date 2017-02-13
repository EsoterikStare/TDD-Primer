const config = require('./webpack.config')
const path = require('path')

config.devServer = {
  host: 'localhost',
  port: '8081'
}
 
const index = path.resolve(__dirname, '../testBundle.js')
 
config.entry = {
  test: [`mocha!${index}`]
}
 
config.output.publicPath = 'http://localhost:8081/'
 
module.exports = config