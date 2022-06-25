const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const contentMapping = require("../model/ContentMapping");


router.post('/teacher-weekly-breakdown', verify, async(req,res,next) => {
  console.log("user id in course is "+req.body.user_id);
  console.log("user type in course is "+req.body.type);
  // finding course id
  var course_id = await Course.findOne({c_name:req.body.course_name});
  var c_id = course_id._id;


 if(req.query.type=== "Teacher"){
       const mapping = new contentMapping({
         course_id: c_id,
         teacher_id: req.body.user_id,
         section: req.body.section,
         week_no: req.body.week_no,
         topics_to_be_covered: req.body.topics_to_be_covered,
         topic_detail: req.body.topic_detail,
         reading: req.body.reading,
         project_deliverable: req.body.project_deliverable
       });
       console.log(mapping);
       try {
         //saved the new user to database
         const savedContentMapping = await mapping.save();
         res.status(200).json(savedContentMapping);
         console.log("1 document of 'content mapping' inserted");
       } catch (err) {
         res.status(400).send(err);
       }
     }
})


// *****************************delete API me route link adjust krna hai..............

router.delete('/teacher-weekly-breakdown',verify ,async(req,res,next) =>{
    try
    {
        var course_id = await Course.findOne({c_name:req.body.course_name});
        var c_id = course_id._id;

        contentMapping.deleteOne({_id : req.body.id, teacher_id: req.body.user_id, course_id: c_id, section: req.body.section}).then(function(){
        }).catch(function(error){
        });
        res.status(200).send("1 row of 'content mapping' deleted")
    }
    catch(err){
        res.status(400).send("row of 'content mapping' cant be deleted")
    }
})

// **********************patch API me route link adjust krna hai..............

router.patch("/teacher-weekly-breakdown/:id", verify, async (req, res, next) => {
    var updateObject = {
      week_no: req.body.week_no,
         topics_to_be_covered: req.body.topics_to_be_covered,
         topic_detail: req.body.topic_detail,
         reading: req.body.reading,
         project_deliverable: req.body.project_deliverable
    };   

    UserRelationship.updateOne({_id : req.body.id, teacher_id: req.body.user_id, course_id: c_id, section: req.body.section},
                                  {$set: updateObject})
    .then(()=>{
      res.send('update request accepted');
  }).catch((err) =>{
    res.status(400).send(err)
  });
});
 




module.exports = router;