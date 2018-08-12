require('dotenv').config({ silent: true });

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true }))
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`);
});