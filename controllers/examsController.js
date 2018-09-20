const _ = require('lodash');

const examRepository = require('../repositories/examRepository')
const questionsRepository = require('../repositories/questionsRepository');

const {examinerId} = require('../utils/constants');

const scheduleExam = (settings) => {
    return examRepository.createSettings(settings,examinerId);
}

const takeExam = (examId) => {
    return examRepository.findById(examId).then(settings => {
        return generateExam(settings);
    })
}

const generateExam = (settings) => {
    courseIds = settings.courses.map(x => x.id);
    return questionsRepository.findQuestionsInCourseIds().then(questions => {
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