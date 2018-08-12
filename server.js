require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.get('/', (req, res) => {
    console.log('home');
})

app.listen(process.env.PORT, () => {
    console.log(`now listening on port ${process.env.PORT}`);
})

module.exports = app;