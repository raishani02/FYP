const mongoose = require('mongoose')

const uploadFileSchema = new mongoose.Schema({
    file: {
        type: String
    },
    email: {
        type: String,
       
    }
});

module.exports = mongoose.model('fileupload', uploadFileSchema);