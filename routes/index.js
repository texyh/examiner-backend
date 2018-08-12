const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send({ success: 'Welcome to our home page!' });
});

module.exports = routes;