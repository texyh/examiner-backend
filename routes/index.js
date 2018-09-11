const routes = require('express').Router();

const coursesRouter = require('./courses');
const questionsRouter = require('./questions');
const examRouter = require('./exams');

routes.use('/courses', coursesRouter);
routes.use('/questions', questionsRouter);
routes.use('/exam', examRouter);

module.exports = routes;