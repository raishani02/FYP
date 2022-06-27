const mongoose = require('mongoose');
const User = require("./User");
const Course = require("./Course");
const cts = require("./teacher_course_section");
const { Int32 } = require('mongodb');

const StudentProgressschema = new mongoose.Schema({
    rollNo:{
        type: mongoose.Schema.Types.String,
        ref: 'User'
    },
    cts_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher_course_section'
    },
    assessment_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assessments'
    },
    submission_file:{
        type: String
    },
    submission_date:{
        type: Date
    },
    obtainedmarks:{
        type: String,
        default:0
    },
    badge:{
        type: String,
        
    },
    feedback_material:{
        type: String
    }
    
});

module.exports = mongoose.model('StudentProgress', StudentProgressschema);