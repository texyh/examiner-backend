const mongoose = require('mongoose');

const {QuestionSchema} = require('./question')

const ExamCourseSchema = new mongoose.Schema({
    questions : QuestionSchema,
    score : {
        default : 0
    }
})

const ExamSchema = new mongoose.Schema({
    candidateId : {
        type : mongoose.SchemaTypes.ObjectId
    },

    settingsId : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },
    
    Courses : [ExamCourseSchema]
})


const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;