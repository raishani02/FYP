const mongoose = require('mongoose')
const User = require("./User");
const Course = require("./Course");
const teacherCoursesSchema = new mongoose.Schema({
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
    },room:
    {
        type:String
    },
    enrolled_students:
    {
        type:String
    }
});

module.exports = mongoose.model('teacher_course_section', teacherCoursesSchema);