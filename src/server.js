const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config()

const PORT = 8000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send({
    message: 'Hello Mixtape',
  });
});

app.listen(PORT, () => { console.log('Running on PORT', PORT); });

module.exports = app;
