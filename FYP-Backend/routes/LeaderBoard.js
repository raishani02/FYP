const router = require("express").Router();
const verify = require('./verifyToken');
const Assessment = require("../model/assessments");
const Students = require("../model/StudentCourse");
const StudentProgress = require ("../model/StudentProgress");



router.get('/viewstudentassessment', verify, async(req,res,next) =>{

     console.log("user id in course is"+req.query.student_id);
     console.log("course name  is"+req.query.course_name);

     // find roll number
     const roll =  await Students.findOne({student_id: req.query.student_id,course_name: req.query.course_name})
      const roll_no = roll.student_rollNo;
 
    // find cts_id
    const cts =  await Students.findOne({student_id: req.query.student_id,course_name: req.query.course_name})

    // const cts = await Students.findOne({student_id: req.query.student_id})
let ctss;
    if (cts!=null){
    console.log("cts id of student in respective course issssss: "+ cts.cts_id);
    ctss = cts.cts_id;
    


    if(req.query.user_type=== "Student"){
        var assessment = await Assessment.find({  
            cts_id:ctss,
            type: req.query.type,
        }
        ,{
            //cts_id:0,
            content:0,
            // type:0,
            // difficulty_level:1,
            // posted_on:1,
            // due_date:1,
            // weightage: 1 ,
            // assessment_name:1
        }
        );

         console.log(assessment);
         
         const assessment_id = assessment._id

         console.log(assessment_id);

         var progress = await StudentProgress.find({  
            cts_id:ctss,
            rollNo: roll_no,
            assessment_id: assessment_id, 
        }
        ,{
            //cts_id:0,
            submission_file: 0,
            badge: 0,
            feedback_material: 0,
             // type:0,
            // difficulty_level:1,
            // posted_on:1,
            // due_date:1,
            // weightage: 1 ,
            // assessment_name:1
        }
        );

        console.log(progress);
         res.json(progress);
    }
}
else{
    res.json(err);
}
    
})

module.exports = router;