const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    c_code: {
        type: String
    },
    c_name: {
        type: String,
        require: true,
        min: 1
    },
    credit_hrs:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Course', courseSchema);