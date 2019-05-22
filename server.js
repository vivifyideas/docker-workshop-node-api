const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app.set('port', 3030);
app.use(bodyParser.json())

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDatabaseName = process.env.MONGO_DB_NAME;
const mongoUser = process.env.MONGO_DB_USER;
const mongoPassword = process.env.MONGO_DB_PASS;

const Post = new Schema({
  title: { type: String, default: 'default title' },
  text: { type: String, default: 'no text provided' },
});
const BlogPost = mongoose.model('Post', Post);

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

app.post('/blog', async (req, res, next) => {
  const {text, title, ...rest} = req.body;

  return BlogPost.create({
    title,
    text,
  }).then(data => {
    res.send(data);
  }).catch(next);
});

app.get('/blog', async (req, res, next) => {
  try {
    const data = await BlogPost.find({});
    return res.send(data);
  } catch (err) {
    return next(err);
  }
});


mongoose.connect(`mongodb://${mongoHost}:${mongoPort}`, {
  user: mongoUser,
  pass: mongoPassword,
  dbName: mongoDatabaseName,
})
.then(() => {
  app.listen(app.get('port'));
  console.log('Express server listening on port ' + app.get('port'));
}).catch(err => console.log(err));
