const router = require("express").Router();
const verify = require('./verifyToken');
const StudentCourse = require("../model/StudentCourse")
//const TeacherCourse = require("./teacher_course_section")
const contentMapping = require("../model/ContentMapping");

router.get('/student-weekly-breakdown', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);

    // finding section  

  var stud_cts = await StudentCourse.find({ student_id: req.query.user_id, course_name: req.query.course_name},{_id:0, student_id:0, cts_id:1}); 
  //var tcsObj = await TeacherCourse.find({ _id: stud_cts});



    if(req.query.type=== "Student"){
        var mapping = await contentMapping.find({ cts_id:stud_cts,},
            {week_no: 1, topics_to_be_covered: 1, topic_detail: 1, reading:1 , project_deliverable:1, _id:0,cts_id:0});

            res.json(mapping);
    }
    
})