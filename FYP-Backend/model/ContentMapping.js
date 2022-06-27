const mongoose = require('mongoose')

const contentMappingSchema = new mongoose.Schema({
    cts_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher_course_section'
    },
    week_no:
    {
        type:String
    },
    topics_to_be_covered:
    {
        type:String
    },
    topic_detail:
    {
        type:String
    },
    reading:
    {
        type:String
    },
    project_deliverable: 
    {
        type:String
    }
});

module.exports = mongoose.model('ContentMapping', contentMappingSchema);