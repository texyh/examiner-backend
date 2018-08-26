const mongoose = require('mongoose');

const Option = require('./option');

const option = new mongoose.Schema({
    text: {
        type : String,
        required: true
    },
    correct : {
        type : Boolean,
        required: true,
        default : false
    }
})

const QuestionSchema = new mongoose.Schema({
    _courseId : {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    question: {
        type: String,
        required : true
    },
    options : [option]
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;