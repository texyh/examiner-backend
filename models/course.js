const mongoose = require('mongoose');

const Course = mongoose.model('Course', {
    name: {
        type: String,
        unique: true
    }
})

module.exports = Course;