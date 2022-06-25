const mongoose = require('mongoose')

const contentMappingSchema = new mongoose.Schema({
    course_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    teacher_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    section:{
        type:String
    }
    ,
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