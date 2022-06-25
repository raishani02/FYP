const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const StudentCourse = require("../model/StudentCourse")
const TeacherCourse = require("./teacher_course_section")
const contentMapping = require("../model/ContentMapping");

router.get('/student-weekly-breakdown', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);


     // finding course id
  var course_id = await Course.findOne({c_name:req.body.course_name});
  var c_id = course_id._id;

    // finding section  
  var cts = await StudentCourse.find({ student_id: req.body.user_id, course_id: c_id},{_id:0, student_id:0, cts_id:1});
  var stud_section = await TeacherCourse.find({ student_id: cts},{_id:0, student_id:0, course_id:0 , room:0, enrolled_students:0, section:1});

    if(req.query.type=== "Student"){
        var mapping = await contentMapping.find({course_id: c_id, section: stud_section},
            {week_no: 1, topics_to_be_covered: 1, topic_detail: 1, reading:1 , project_deliverable:1, _id:0});

            res.json(mapping);
    }
    
})