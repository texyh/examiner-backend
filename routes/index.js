const express = require('express');

const routes = express.Router();

const examsRoutes = require('./exams');
const usersRoutes = require('./users');

routes.use('/users',usersRouter);
routes.use('/exams', examsRouer);

module.exports = routes;