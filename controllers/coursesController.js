const {Course} = require('../models');

const getAll = () => {
    return Course.find({}).then(data => {
        return Promise.resolve(data);
    }).catch(error => Promise.reject(error));
}

const create = (courses) => {
    courses = courses.map(x => new Course({name : x.name}))
    return Course.insertMany(courses).then(data => {
        const courseIds = data.map(x => x._id.toString());
        return Promise.resolve(courseIds);
    }).catch(error  => Promise.reject(error));
}

const getOne = (id) => {
    return Course.findById(id).then(course => {
        return Promise.resolve(course)
    }).catch(error => Promises.reject(error));
}

module.exports = {getAll, create, getOne};