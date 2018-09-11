const express = require('express');

const examRoutes = express.Router();

const examController = require('../controllers/examsController');

examRoutes.post('/schedule', (req, res) => {
    examController.scheduleExam(req.body).then(x => {
        res.send(x);
    }).catch(res.status(400).send('An error occured'));
})

examRoutes.get('/take/:id', (req, res) => {
    examController.takeExam(req.params.id)
    .then(x => {
        res.send(x);
    }).catch(err => res.status(400).send('An error occured'));
})

module.exports = examRoutes;