'use strict'
var express = require('express')
var fs = require('fs')
var app = express()

app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use('/js', express.static(__dirname + '/public/js'))

app.get('*', function (req, res) {
  var page = req.url.substr(1) || 'index';
  var filename = page+'.html';
  var filepath = __dirname+'/public/'+filename;
  if (fs.existsSync(filepath)) {
    res.sendFile(filepath);
  }
  else {
    res.sendStatus(404);
  }
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Life signals at http://%s:%s', host, port)
})
