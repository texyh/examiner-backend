const mongoose = require('mongoose');

const Question = require('./question');

const ExamSchema = new mongoose.Schema({
    _examinerId : {
        type : mongoose.Schema.Types.ObjectId
    },
    date : {
        type : Date
    },
    questions: [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Question'
    }]
})

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;