const db = require('mongoose');
const env = require('../config')
console.log("=============================================" + env.MONGODB_URI + ' ' +  process.env.NODE_ENV + "==================================================")
db.Promise = global.Promise;

db.connect(env.MONGODB_URI);

module.exports = {
    db
}