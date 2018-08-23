const db = require('mongoose');
const env = require('../config')

db.Promise = global.Promise;

db.connect(env.MONGODB_URI);

module.exports = {
    db
}