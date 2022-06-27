const router = require("express").Router();
const verify = require('./verifyToken');
const Assessment = require("../model/assessments");
const teacher_courses_Section = require("../model/teacher_course_section")

router.get('/teacher-view-assignments-detail', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);
    var course_id = await Course.findOne({c_name:req.body.course_name});
    var c_id = course_id._id;
 
    

    if(req.query.type=== "Teacher"){
        var assessment = await Assessment.find({  teacher_id: req.body.user_id,
            course_id: c_id,
            section: req.body.section,
            type: req.body.type,
            assessment_name: req.type.assessment_name
        }
        ,{
            course_id:0,
            teacher_id:0,
            section:0,
            content:0,
            type:0,
            difficulty_level:1,
            posted_on:1,
            due_date:1,
            weightage: 1 ,
            assessment_name:1
        });

         console.log(assessment);
        res.json(assessment);
    }
    
})



router.get('/teacher-view-quiz-detail', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);
    var course_id = await Course.findOne({c_name:req.body.course_name});
    var c_id = course_id._id;
 
    
    console.log("user type "+req.query.user_type)
    if(req.query.user_type=== "Teacher"){
        var assessment = await Assessment.find({  teacher_id: req.body.user_id,
            course_id: c_id,
            section: req.body.section,
            type: req.body.type,
            assessment_name: req.type.assessment_name
        }
        ,{
            course_id:0,
            teacher_id:0,
            section:0,
            content:0,
            type:0,
            difficulty_level:1,
            posted_on:1,
            due_date:1,
            weightage: 1 ,
            assessment_name:1
        });

         console.log(assessment);
        res.json(assessment);
    }
    
})


router.get('/teacher-view-deliverable-detail', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);
    var course_id = await Course.findOne({c_name:req.body.course_name});
    var c_id = course_id._id;
 
    

    if(req.query.type=== "Teacher"){
        var assessment = await Assessment.find({  teacher_id: req.body.user_id,
            course_id: c_id,
            section: req.body.section,
            type: req.body.type,
            assessment_name: req.type.assessment_name
        }
        ,{
            course_id:0,
            teacher_id:0,
            section:0,
            content:0,
            type:0,
            difficulty_level:1,
            posted_on:1,
            due_date:1,
            weightage: 1 ,
            assessment_name:1,
            _id:0
        });

         console.log(assessment);
        res.json(assessment);
    }
    
})



module.exports = router;