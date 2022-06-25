const mongoose = require('mongoose')

const uploadAssessmentSchema = new mongoose.Schema({
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
    ,content:
    {
        type:String
    },
    type:
    {
        type:String
    },
    difficulty_level:
    {
        type:String
    },
    posted_on:
    {
        type: Date
    },
    due_date:
    {
        type: Date
    },
    weightage: 
    {
        type:String
    },
    assessment_name:{
        type:String
    }
});

module.exports = mongoose.model('assessments', uploadAssessmentSchema);