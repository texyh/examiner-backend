const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
    option: {
        type: String,
    }
})

const Option = mongoose.model('Option', OptionSchema);

module.exports = Option