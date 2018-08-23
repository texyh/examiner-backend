const mongoose = require('mongoose');
const {examiner, candidate} = require('../utils/constants')

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
        enum : [candidate, examiner]
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;