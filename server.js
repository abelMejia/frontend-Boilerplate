var express = require('express')
var path = require('path')
var open = require('open')

var PORT = 4000
var DIR_HOME = './'
var app = express()

app.use(express.static(DIR_HOME)) 
app.use('/*', function(req, res){
	res.sendFile(path.resolve(__dirname, DIR_HOME))
})

app.listen(PORT, function(){
	return console.log('Listening on port %d', PORT)
})

//Abrir navegador automaticamente
open('http://localhost:' + PORT)