// import './specHelper.js' // if needed
 
const context = require.context('./App/test/', true, /.+-spec\.js$/)
 
context.keys().forEach(context)
 
module.exports = context