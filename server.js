require('./config/config');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('home');
})

app.listen(process.env.PORT, () => {
    console.log(`now listening on port ${process.env.PORT}`);
})