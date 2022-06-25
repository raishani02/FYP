const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const Assessment = require("../model/assessments");


router.post('/teacher-assessments', verify, async(req,res,next) => {
  console.log("user id in course is "+req.body.user_id);
  console.log("user type in course is "+req.body.type);
  // finding course id
  var course_id = await Course.findOne({c_name:req.body.course_name});
  var c_id = course_id._id;

  var date = new Date().toDateString();


 if(req.query.type=== "Teacher"){
       const assessment = new Assessment({
         course_id: c_id,
         teacher_id: req.body.user_id,
         section: req.body.section,
         content: req.body.content,
         type: req.body.type,
         difficulty_level: req.body.difficulty_level,
         posted_on: date,
         due_date: req.body.due_date,
         weightage: req.body.weightage
       });
       console.log(assessment);
       try {
         //saved the new user to database
         const savedAssessment = await assessment.save();
         res.status(200).json(savedAssessment);
         console.log("1 document of 'upload assessment' inserted");
       } catch (err) {
         res.status(400).send(err);
       }
     }
})
 




module.exports = router;