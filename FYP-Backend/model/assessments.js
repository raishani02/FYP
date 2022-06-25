const mongoose = require('mongoose')

const uploadAssessmentSchema = new mongoose.Schema({
    cts_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher_course_section'

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