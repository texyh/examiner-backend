require('dotenv').config({ silent: true });
require('./db/dbconnect');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use((req, res) => {
  res.status(404).json({
    error: 'There is nothing on this route.'
  });
});


app.listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`now listening on port ${PORT}`);
});

module.exports = app;