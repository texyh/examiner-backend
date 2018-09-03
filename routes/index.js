const routes = require('express').Router();

const coursesRouter = require('./courses');

routes.use('/courses', coursesRouter)

module.exports = routes;