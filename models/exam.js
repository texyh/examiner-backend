const mongoose = require('mongoose');

const {QuestionSchema} = require('./question')

const ExamCourseSchema = new mongoose.Schema({
    questions : QuestionSchema,
    score : {
        default : 0
    }
})

const Exam = new mongoose.Schema({
    candidateId : {
        type : mongoose.SchemaTypes.ObjectId
    },

    settingsId : {
        type : mongoose.SchemaTypes.ObjectId
    },
    
    Courses : [ExamCourseSchema]
})


const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;