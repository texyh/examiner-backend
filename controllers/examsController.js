const _ = require('lodash');

const {ExamSettings, Question} = require('../models');
const {examinerId} = require('../utils/constants');

const scheduleExam = (settings) => {
    const examSettings = new ExamSettings({
        examinerId : examinerId, // Todo change
        beginDate : settings.beginDate,
        endDate : settings.endDate,
        courses : settings.courses,
        shuffleQuestions : settings.shuffleQuestions,
        shuffleOptions : settings.shuffleOptions
    })

    return examSettings.save().then(result => {
        return Promise.resolve(result._id.toString());
    }).catch(err => Promise.reject(err));
}

const takeExam = (examId) => {
    return ExamSettings.findById(examId).then(settings => {
        return generateExam(settings);
    })
}

const generateExam = (settings) => {
    courseIds = settings.courses.map(x => x.id);

    return Question.find({examinerId : settings.examinerId})
            .where('courseId')
            .in(courseIds)
            .then(questions => {
               return generationQuestions(questions, settings);
            })
    
}

const generationQuestions = (questions, examSettings) => {
    let examsQuestions = [];
    questions = _.groupBy(questions, 'courseId');
    const courses = Object.keys(questions);

    courses.forEach(course => {
        let courseQuestions = questions[course];
        courseQuestions = courseQuestions.map(x => {
            const question = {
                question : x.question,
                options : x.options.map(x => x.text)
            }
            return question;
        })

        examsQuestions.push({
            course,
            questions : courseQuestions
        })
    });

    return examsQuestions;
}   

module.exports = {scheduleExam, takeExam};