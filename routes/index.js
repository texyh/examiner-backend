const express = require('express');

const routes = express.Router();

const examsRoutes = require('./exams');
const usersRoutes = require('./users');

routes.use('/users',usersRoutes);
routes.use('/exams', examsRoutes);

module.exports = routes;