var express = require('express');
// var path = require('path');
// var mysql = require('mysql');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')

app.set('port', 3000);
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send({
    file: fs.readFileSync('./data/message.txt', 'utf8')
  });
});

app.post('/', function(req, res){
  const text = req.body.text;

  fs.writeFile('./data/message.txt', text, 'utf8', (err) => {
    res.send({
      status: err ? 'not ok' : 'ok'
    });
  });

});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));