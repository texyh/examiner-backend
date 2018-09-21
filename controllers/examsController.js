const _ = require('lodash');

const examRepository = require('../repositories/examRepository')
const questionsRepository = require('../repositories/questionsRepository');

const {examinerId} = require('../utils/constants');

const scheduleExam = (settings) => {
    return examRepository.createSettings(settings, examinerId);
}

const takeExam = (examId) => {
    return examRepository.findById(examId).then(settings => {
        return generateExam(settings);
    })
}

const generateExam = (settings) => {
    courseIds = settings.courses.map(x => x.id);
    return questionsRepository.findQuestionsInCourseIds(courseIds, settings.examinerId).then(questions => {
       return generationQuestions(questions, settings);
    })
}

const assessExam = (exam) => {
    const examSettingsId = exam.examSettingsId;
    const answers = exam.answers;
    const questions = answers.map(x => x.questionId);
    const courseId = exam.courseId;

    examRepository.findById(examSettingsId).then(settings => {
        return Promise.resolve(settings)
    }).then(settings => {
        questionsRepository.findQuestionsinIds(questions, courseId).then(questions => {
            getScore(questions, answers, settings);
        })
    })

    
}

const getScore = (questions, examanswers, examSettings) => {
    const courseTotalscore = examSettings.totalScore / examSettings;
    const scorePerQuestion = 1; // Todo set this in the exam settings;

    questions.forEach(question => {
        const submitedanswer = examanswers.find(x => x.questionId == question._id).answer;
        const actualanswer = question.options.find(x => x.correct);

        if(submitedanswer == actualanswer) {
            courseTotalscore += scorePerQuestion
        }

    })

    return courseTotalscore;
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

module.exports = {scheduleExam, takeExam, assessExam};