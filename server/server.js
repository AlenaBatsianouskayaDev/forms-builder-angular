const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

const api = require('./routes/api');

app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log('server is running', PORT);
});
