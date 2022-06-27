const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const TeacherCourseSection = require("../model/teacher_course_section");
const setStudentCourses = require("../model/StudentCourse");
const studentProgress = require("../model/StudentProgress")


router.get('/get-students', verify, async(req,res,next) => {
    // console.log("user id in content mapping is "+req.query.user_id);
    // console.log("name in content mapping is "+  req.query.section);
    
  
    // console.log("user type in course is "+req.query.type);
    // finding course id
    if(req.query.user_type=="Teacher")
    {
      var course_id = await Course.findOne({c_name:req.query.course_name});
      if(!course_id){
        console.log("No course found");
        }
      var c_id = course_id._id;
    
      const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.query.user_id, course_id: c_id, section: req.query.section}); 
    
      try{
    
        const students = await setStudentCourses.find({cts_id:tcsObj._id});
        console.log(students);
        res.send(students);
      }catch (err){
        console.log("error in get content"+err);
        res.send("error in get students"+err);
      }
    }
    else{
    //   var student_course = await setStudentCourses.findOne({course_name:req.query.course_name});
    //   if(!student_course){
    //     console.log("No course found");
    //     }
    //   var cts_id = student_course.cts_id;
    //   console.log("course name and id"+student_course.course_name + cts_id)
    //   try{
    
    //     const content = await contentMapping.find({cts_id:cts_id});
    //     res.send(content);
    //   }catch{
    //     console.log("error in get content");
    //     res.send("error in get content");
    //   }
    }
    
  
  })

  router.get('/get-submissions', verify, async(req,res,next) => {
    // console.log("user id in content mapping is "+req.query.user_id);
    // console.log("name in content mapping is "+  req.query.section);
    
  
    // console.log("user type in course is "+req.query.type);
    // finding course id
    if(req.query.user_type=="Teacher")
    {
      var course_id = await Course.findOne({c_name:req.query.course_name});
      if(!course_id){
        console.log("No course found");
        }
      var c_id = course_id._id;
    
      const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.query.user_id, course_id: c_id, section: req.query.section}); 
    
      try{
    
        const students_progress = await studentProgress.find({cts_id:tcsObj._id,assessment_id:req.query.assessment_id});
        console.log("student progress is"+students_progress);
        res.send(students_progress);
      }catch (err){
        console.log("error in get content"+err);
        res.send("error in get students"+err);
      }
    }
    else{
    //   var student_course = await setStudentCourses.findOne({course_name:req.query.course_name});
    //   if(!student_course){
    //     console.log("No course found");
    //     }
    //   var cts_id = student_course.cts_id;
    //   console.log("course name and id"+student_course.course_name + cts_id)
    //   try{
    
    //     const content = await contentMapping.find({cts_id:cts_id});
    //     res.send(content);
    //   }catch{
    //     console.log("error in get content");
    //     res.send("error in get content");
    //   }
    }
    
  
  })

  
module.exports = router;