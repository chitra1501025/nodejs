var express = require('express')
var path=require("path");
var app = express()
app.use(express.static(__dirname))
app.use('/anju', express.static(path.join(__dirname, 'anju')))
 console.log(__dirname, 'anju')
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)