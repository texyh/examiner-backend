const express = require('express');

const coursesRoute = express.Router();

const courseController = require('../controllers/coursesController');


coursesRoute.get('/', (req, res) => {
    courseController.getAll().then(courses => {
        res.send({result : courses});
    }).catch(error => res.status(500).send({error: 'An error occured'}));
})

coursesRoute.get('/:id', (req, res) => {
    courseController.getOne(req.params.id).then(course => {
        res.send({result:  course});
    }).catch(err => res.status(400).send('An error occured'))
})

coursesRoute.post('/', (req, res) => {
    courseController.create(req.body.courses).then(ids => {
        res.send({result : ids});
    }).catch(error => res.status(500).send({error: 'an error occured'}));
})

module.exports = coursesRoute;