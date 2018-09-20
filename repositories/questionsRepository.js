const {Question} = require('../models');

const findById = (id) => {
    Question.findById(id).then(question => {
        Promise.resolve(question);
    }).catch(catchErr);
}

const findAll = (query = null) => {
    query = query == null ? {} : query;

    Question.find(query).then(questions => {
        Promise.resolve(questions);
    }).catch(catchErr);
}

const create = (question) => {
    const dbQuestion = new Question({
        courseId : question.courseId,
        question : question.question,
        options : question.options, 
        examinerId: question.examinerId
    });

    return dbQuestion.save().then(result => {
        return Promise.resolve(result._id.toString());
    }).catch(catchErr);
}

const createMany = (questions, examinerId) => {
    questions = questions.map(x => new Question({
            courseId : x.courseId,
            question : x.question,
            options : x.options, 
            examinerId: examinerId
            })
        )

    return Question.insertMany(questions).then(x => {
        return Promise.resolve(x.map(y => y._id.toString()));
    }).catch(catchErr);
}

const update = (question) => {
    //TODO implement
}

const deleteOne = (id) => {
    Question.findOneAndRemove(id)
        .then(result => Promise.resolve())
        .catch(catchErr);
}

const findQuestionsInCourseIds = (courseIds) => {
    return Question.find({examinerId : settings.examinerId})
            .where('courseId')
            .in(courseIds)
            .then(questions => {
               return Promise.resolve(questions);
            }).catch(catchErr);
}

const catchErr = (err) => {
    return Promise.reject(err);
}

module.exports = {
    findById,
    findAll,
    create,
    update,
    deleteOne,
    createMany,
    findQuestionsInCourseIds
}