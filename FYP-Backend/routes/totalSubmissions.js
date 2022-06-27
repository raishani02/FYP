const router = require("express").Router();
const verify = require('./verifyToken');
const progress = require("../model/CourseProgress");
const Assessment = require("../model/assessments");
const StudentCourse = require("../model/teacher_course_section");


router.get('/teacher-view-assignments-detail', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);

 
   // finding section  
  var cts = await StudentCourse.find({ teacher_id: req.query.user_id, course_name: req.query.course_name},{_id:0, course_id:0, teacher_id:0, section:0,room:0,enrolled_students:0,cts_id:1}); 

    if(req.query.type=== "Teacher"){
        var assessment = await Assessment.find({ 
            cts_id: cts,
            type: req.body.type,
            assessment_name: req.body.assessment_name
        }
        ,{
            cts_id:0,
            content:0,
            type:0,
            difficulty_level:0,
            posted_on:0,
            due_date:0,
            weightage: 0 ,
            assessment_name:0,
            _id:1
        });



        progress.countDocuments({ 
            cts_id: cts,
            assessment_id: assessment}, function (err, total_submission_count) {
            if (err){
                console.log(err)
            }else{
                console.log("Count :", total_submission_count)
            }
        });

         console.log(total_submission_count);
        res.json(total_submission_count);
    }
    
})

module.exports = router;