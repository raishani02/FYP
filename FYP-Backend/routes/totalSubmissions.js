const router = require("express").Router();
const verify = require('./verifyToken');
const progress = require("../model/CourseProgress");
const Assessment = require("../model/assessments");
const StudentCourse = require("../model/teacher_course_section");


router.get('/teacher-view-assignments-detail', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);

    // finding course_id
    var course_id = await Course.findOne({c_name:req.body.course_name});
    var c_id = course_id._id;
 
    // finding section  
  var cts = await StudentCourse.find({ student_id: req.body.user_id, course_id: c_id},{_id:0, student_id:0, cts_id:1});
  var stud_section = await TeacherCourse.find({ student_id: cts},{_id:0, student_id:0, course_id:0 , room:0, enrolled_students:0, section:1});


    if(req.query.type=== "Teacher"){
        var assessment = await Assessment.find({  teacher_id: req.body.user_id,
            course_id: c_id,
            section: stud_section,
            type: req.body.type,
            assessment_name: req.type.assessment_name
        }
        ,{
            course_id:0,
            teacher_id:0,
            section:0,
            content:0,
            type:0,
            difficulty_level:0,
            posted_on:0,
            due_date:0,
            weightage: 0 ,
            assessment_name:0,
            _id:1
        });


        var total_submission = await progress.find({  teacher_id: req.body.user_id,
            cts_id: cts,
            assessment_id: assessment
        }
        ,{
            cts_id:0,
            teacher_id:0,
            _id:0
        });

         console.log(assessment);
        res.json(assessment);
    }
    
})

module.exports = router;