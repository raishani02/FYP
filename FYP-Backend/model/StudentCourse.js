const mongoose = require('mongoose')
const User = require("./User");
const TeacherCourse = require("./teacher_course_section")
const studentCourseSchema = new mongoose.Schema({
    cts_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher_course_section'
    },
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    student_rollNo:{
        type: String
    },
    course_name:{
        type:String
    }
    
});

module.exports = mongoose.model('StudentCourse', studentCourseSchema);