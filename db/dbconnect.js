const db = require('mongoose');

db.Promise = global.Promise;
db.connect(process.env.MONGODB_URI);

module.exports = {
    db
}