const mongoose = require('mongoose');

const Option = require('./option');

const QuestionSchema = new mongoose.Schema({
    _courseId : {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    question: {
        type: String,
        required : true
    },
    options : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Option'
    }],
    answer : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Option'
    }
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;