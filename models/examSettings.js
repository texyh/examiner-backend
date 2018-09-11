const mongoose = require('mongoose');

const ExamSettings = mongoose.model('ExamSettings', {
    examinerId : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },

    beginDate : {
        type : mongoose.SchemaTypes.Date,
        required : true
    },

    endDate : {
        type : mongoose.SchemaTypes.Date
    },

    courses : {
        type : [{id : mongoose.SchemaTypes.ObjectId, name : String}],
        required : true
    },

    shuffleQuestions : {
        type : Boolean,
        default : false
    },

    shuffleOptions : {
        type : Boolean,
        default :false
    }

})

module.exports = ExamSettings;