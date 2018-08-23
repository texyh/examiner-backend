const db = require('mongoose');
const env = require('../config')
console.log("=============================================" + env.MONGODB_URI + "==================================================")
db.Promise = global.Promise;

db.connect(env.MONGODB_URI);

module.exports = {
    db
}