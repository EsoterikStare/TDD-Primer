const config = require('./webpack.config')

config.target = 'node' // in order to ignore built-in modules like path, fs, etc.

module.exports = config