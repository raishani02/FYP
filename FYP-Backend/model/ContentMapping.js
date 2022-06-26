const mongoose = require('mongoose');


const contentMappingSchema = new mongoose.Schema({
    cts_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher_course_section'
    },
    Week:
    {
        type:String
    },
    Topics_To_Be_Covered:
    {
        type:String
    },
    Topic_Details:
    {
        type:String
    },
    Reading_From_TextBook:
    {
        type:String
    },
    Project_Deliverable: 
    {
        type:String
    }
});

module.exports = mongoose.model('ContentMapping', contentMappingSchema);