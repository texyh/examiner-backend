const {Course} = require('../models');

const findById = (id) => {
    return Course.findById(id).then(course => {
        return Promise.resolve(course);
    }).catch(catchErr);
}

const findAll = (query = null) => {
    query = query == null ? {} : query;
    return Course.find(query).then(courses => {
        return Promise.resolve(courses);
    }).catch(catchErr);
}

const createOne = (course) => {
    const dbcourse = new Course({
        name : course.name
    })

    return dbcourse.save().then(result => {
        return Promise.resolve(result._id.toString());
    }).catch(catchErr);
}

const CreateMany = (courses) => {
    courses = courses.map(x => new Course({name : x.name}));

    return Course.insertMany(courses).then(result => {
        const ids = result.map(x => x._id.toString());
        return Promise.resolve(ids);
    }).catch(catchErr)
}

const update = (question) => {
    // Todo implement
}

const deleteOne = (id) => {
    Course.findByIdAndDelete(id)
        .then(result => Promise.resolve())
        .catch(catchErr);
}

const catchErr = (err) => {
    return Promise.reject(err);
}

module.exports = {
    findById,
    findAll,
    createOne,
    CreateMany,
    update,
    deleteOne
}