const routes = require('express').Router();

const examsRoutes = require('./exams');
const usersRoutes = require('./users');

routes.get('/', (req, res) => {
  res.send({ success: 'You\'re at home' });
});

routes.use('/users', usersRoutes);
routes.use('/exams', examsRoutes);

module.exports = routes;