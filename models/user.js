const mongoose = require('mongoose');
const {userTypes} = require('../utils/constants')

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type: String,
        unique : true,
        required : true
    },
    phoneNumber : {
        type: String
    },
    userType : {
        type: String,
        enum : [userTypes.candidate, userTypes.examiner]
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;