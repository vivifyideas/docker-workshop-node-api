const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')

app.set('port', 3030);
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    file: fs.readFileSync('./data/message.txt', 'utf8')
  });
});

app.post('/', (req, res) => {
  const text = req.body.text;

  fs.writeFile('./data/message.txt', text, 'utf8', (err) => {
    res.send({
      status: err ? 'not ok' : 'ok'
    });
  });

});

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));