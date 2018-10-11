const User = require('../models/user');

const findById = (id) => {
    return User.findById(id).then(user => {
        return Promise.resolve(user);
    })
}

const create = (user) => {
    const userEntity = new User({
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email,
        phoneNumer : user.phoneNumer,
        userType : user.userType
    })

    return userEntity.save().then(result => {
        return Promise.resolve(result._id);
    })
}

const findAll = (query) => {
    query = !query ? {} : query;

    return User.find(query).then(result => {
        return Promise.resolve(result);
    })
}

const update = (user) => {
    //TODO update
}

const deleteOne = (user) => {
    // Todo implement
}

module.exports = {
    findById,
    create,
    findAll,
}
