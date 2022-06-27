const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const Assessments = require("../model/assessments");
const TeacherCourseSection = require("../model/teacher_course_section")

router.post('/uploadassessment', verify, async(req,res,next) => {
  console.log("i am in uploading");
  console.log("user id in course is "+ req.body.user_id);
  console.log("type in course is "+req.body.type);
  // finding course id
  console.log("c_name"+req.body.course_name);
  var course_id = await Course.findOne({c_name:req.body.course_name});

   var c_id = course_id._id;
   var date = new Date().toDateString();


//  if(req.body.type=== "Teacher"){

  const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.body.user_id, course_id: c_id, section: req.body.section}); 
  
  // console.log("cts is content is"+ req.body.content);
  
       const assessment = new Assessments({
         cts_id:tcsObj._id,
         content: req.body.content,
         type: req.body.type,
         difficulty_level: req.body.difficulty_level,
         posted_on: date,
         due_date: date,
         weightage: req.body.weightage,
         assessment_name:"quiz-1"
         
       });
      //  console.log(assessment);
       try {
         //saved the new user to database
          await assessment.save();
          
         res.status(200).send("object is added");
       } catch (err) {
         res.status(400).send(err);
       }
     }
//}
)
 

router.get('/get-all-assessments', verify, async(req,res,next) =>{

  // console.log("user id in get assess is"+req.query.user_id);
  // console.log("user type in get assess is"+req.query.course_name+req.query.course_section+req.query.user_type);
  var course_id = await Course.findOne({c_name:req.query.course_name});
  var c_id = course_id._id;

  

  if(req.query.user_type=== "Teacher"){

      try{
        console.log("hmmm" + c_id+"  " + req.query.user_id + "  "+ req.query.course_section);

          const cts = await TeacherCourseSection.findOne({teacher_id:req.query.user_id,course_id:c_id,section:req.query.course_section})
          console.log(cts._id);
          var assessment = await Assessments.find({cts_id:cts._id},{content:0});
  
          console.log("Assessment is "+assessment);
          res.send(assessment);
      }catch(err) {
          res.send(err);
      }
      
  }
  
})


module.exports = router;