const questionsRepository = require('../repositories/questionsRepository');
const {examinerId} = require('../utils/constants');

const create = (questions) => {
    return questionsRepository.createMany(questions,examinerId);
}

const getOne = (id) => {
    return questionsRepository.findById(id);
}

const getAll = () => {
    return questionsRepository.findAll();
}

module.exports = {create}