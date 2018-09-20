const courseRepository = require('../repositories/coursesRepository');

const getAll = () => {
    return courseRepository.findAll();
}

const create = (courses) => {
    return courseRepository.CreateMany(courses);
}

const getOne = (id) => {
    return courseRepository.findById(id);
}

module.exports = {getAll, create, getOne};