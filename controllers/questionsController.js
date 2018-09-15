const {Question} = require('../models')
const {examinerId} = require('../utils/constants');

const create = (questions) => {
    console.log(questions);
    questions = questions.map(x => new Question({
                                    courseId : x.courseId,
                                    question : x.question,
                                    options : x.options, 
                                    examinerId: examinerId // Todo Change
                                })
                            )

    return Question.insertMany(questions).then(x => {
        return Promise.resolve(x.map(y => y._id.toString()));
    }).catch(error => Promise.reject());
}

const getOne = (id) => {
    Question.findById(id).then(x => {
        Promise.resolve(x);
    }).catch(err => Promise.reject());
}

const getAll = () => {
    Question.find({}).then(x => {
        Promise.resolve(x);
    }).catch(err => Promise.reject(err));
}


module.exports = {create}