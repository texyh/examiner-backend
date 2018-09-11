const express = require('express');
const questionsController = require('../controllers/questionsController');

const questionRoutes = express.Router();


questionRoutes.post('/', (req, res) => {
    const questions  = req.body;
    questionsController.create(questions).then(x => {
        res.send(x);
    }).catch(err => res.status(404).send('An error occured while upload question'))
})

module.exports = questionRoutes