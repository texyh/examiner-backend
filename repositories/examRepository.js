const {ExamSettings} = require('../models');


const findById = (id) => {
    return ExamSettings.findById(id).then(settings => {
        return Promise.resolve(settings);
    })
}

const findAll = (query = null) => {
    query = query == null ? {} : query;

    return ExamSettings.find(query).then(settings => {
        return Promise.resolve(settings);
    })
}

const createSettings = (settings, examinerId) => {
    const examSettings = new ExamSettings({
        examinerId : examinerId, 
        beginDate : settings.beginDate,
        endDate : settings.endDate,
        courses : settings.courses,
        shuffleQuestions : settings.shuffleQuestions,
        shuffleOptions : settings.shuffleOptions
    })

    return examSettings.save().then(result => {
        return Promise.resolve(result._id.toString());
    }).catch(catchErr);
}

const update = (question) => {
    //Todo
}

const deleteOne = (id) => {

}

const catchErr = (err) => {
    return Promise.reject(err);
}

module.exports = {
    findById,
    findAll,
    createSettings,
    update,
    deleteOne
}