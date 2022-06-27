const router = require("express").Router();
const verify = require('./verifyToken');
const Assessment = require("../model/assessments");
const Course = require("../model/Course")
const TeacherCourseSection = require("../model/teacher_course_section")

//***************** whenever this api gets called, we'll also call "totalSubmissions.js" API too on frontend

router.get('/viewassessment', verify, async(req,res,next) =>{

     console.log("user id in course is"+req.query.teacher_id);
    // console.log("user type in course is"+req.query.type);

    // find course_id
    var course_id = await Course.findOne({c_name:req.query.course_name});
    var c_id = course_id._id;
 
    // find cts_id
    const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.query.teacher_id, course_id: c_id, section: req.query.section}); 


    if(req.query.user_type=== "Teacher"){
        var assessment = await Assessment.find({  
            cts_id:tcsObj._id,
            type: req.query.type,
            assessment_name: req.query.assessment_name
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
       try {
         //saved the new user to database
          await assessment.save();
          
         res.status(200).json(assessment);;
       } catch (err) {
         res.status(400).send(err);
       }
    }
    
})



// router.get('/teacher-view-quiz-detail', verify, async(req,res,next) =>{

//     // console.log("user id in course is"+req.query.user_id);
//     // console.log("user type in course is"+req.query.type);
//     var course_id = await Course.findOne({c_name:req.body.course_name});
//     var c_id = course_id._id;
 
    

//     if(req.query.type=== "Teacher"){
//         var assessment = await Assessment.find({  teacher_id: req.body.user_id,
//             course_id: c_id,
//             section: req.body.section,
//             type: req.body.type,
//             assessment_name: req.type.assessment_name
//         }
//         ,{
//             course_id:0,
//             teacher_id:0,
//             section:0,
//             content:0,
//             type:0,
//             difficulty_level:1,
//             posted_on:1,
//             due_date:1,
//             weightage: 1 ,
//             assessment_name:1
//         });

//          console.log(assessment);
//         res.json(assessment);
//     }
    
// })


// router.get('/teacher-view-deliverable-detail', verify, async(req,res,next) =>{

//     // console.log("user id in course is"+req.query.user_id);
//     // console.log("user type in course is"+req.query.type);
//     var course_id = await Course.findOne({c_name:req.body.course_name});
//     var c_id = course_id._id;
 
    

//     if(req.query.type=== "Teacher"){
//         var assessment = await Assessment.find({  teacher_id: req.body.user_id,
//             course_id: c_id,
//             section: req.body.section,
//             type: req.body.type,
//             assessment_name: req.type.assessment_name
//         }
//         ,{
//             course_id:0,
//             teacher_id:0,
//             section:0,
//             content:0,
//             type:0,
//             difficulty_level:1,
//             posted_on:1,
//             due_date:1,
//             weightage: 1 ,
//             assessment_name:1,
//             _id:0
//         });

//          console.log(assessment);
//         res.json(assessment);
//     }
    
// })

module.exports = router;