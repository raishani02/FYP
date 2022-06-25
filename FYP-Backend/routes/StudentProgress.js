const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require('../SecretKey');
const Course = require("../model/Course");
const teacher_course_section = require("../model/teacher_course_section");
const StudentProgress = require("../model/StudentProgress")
const Assessments = require("../model/assessments")
const Students = require("../model/StudentCourse");
const StudentProgress = require("../model/StudentProgress");




router.get("/viewprogress", verify, async (req, res, next) => {
    const course_name = req.body.course;
    const sec = req.body.section;
    const t_id = req.body.teacher_id;

    const course =await Course.find({c_name:course_name});
    const cts =await teacher_course_section.find({course_id:course._id,teacher_id:t_id,section:sec});

    const cts_id = cts._id;

      try {
        const result = await StudentProgress.find({cts_id:cts_id}).populate({path:'st_id assessment_id'});
        console.log(result);
        if(!result){res.send("No Submission found");}
        res.send(result);
      } catch (err) {
        res.send(err);
      }
    });


    router.post("/uploadmarks", verify, async (req, res, next) => {
        const course_name = req.query.course;
        const sec = req.query.section;
        const t_id = req.query.teacher_id;

        const course =await Course.find({c_name:course_name});

        const cts =await teacher_course_section.find({course_id:course._id,teacher_id:t_id,section:sec});
        const assessment_name = req.query.assessment_name;
        const assessment =await Assessments.find({cts_id:cts._id,assessment_name:assessment_name})
        console.log(assessment);

        const st_list = req.query.student_list;
        
        
        st_list.map(student=>{
            console.log(student.marks);
            console.log(student.rollNo);
            try{
                const s1 = await StudentProgress.find({rollNo:student.rollNo,assessment_id:assessment._id});
                if(!s1){console.log("Student didn't submit assessment");}
                await StudentProgress.findOneAndUpdate({rollNo:student.rollNo,assessment_id:assessment._id}, {
                    obtainedmarks: student.marks
               })
               .then(() => {
                    console.log("marks updated");
                   res.send({ message: "success" });
                   // res.send()
               });
            }
            catch(err){
                console.log("errorrrrrr"+err);
                res.status(400).send("upload error"+err)
            }
           
        });
        

    });


    router.get("/getstudentlist", verify, async (req, res, next) => {
        const course_name = req.body.course;
        const sec = req.body.section;
        const t_id = req.body.teacher_id;

        const course =await Course.find({c_name:course_name});

        const cts =await teacher_course_section.find({course_id:course._id,teacher_id:t_id,section:sec});
        const students =await Students.find({cts_id:cts._id});
        console.log(students);
       if(!students){res.send("students not found");}
       res.send(students);
        
    });



    router.post("/submitassessment", verify, async (req, res, next) => {
       
        const course_name = req.query.course;
        const st_rollNo = req.query.rollNo;
        
        const cts_id = Students.find({course_name:course_name});

        // const cts = teacher_course_section.findById(cts_id);

        const assessment_name = req.query.assessment_name;

        const assessment = Assessments.find({cts_id:cts_id,assessment_name:assessment_name})
        console.log(assessment);

        const student_assessment = StudentProgress.find({rollNo:st_rollNo,assessment_id:assessment._id});
        
        
        if(student_assessment){console.log("Already Submitted");}
        
        let ts = Date.now();

        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();

        // prints date & time in YYYY-MM-DD format
        console.log(year + "-" + month + "-" + date);

        const studentProgress = new StudentProgress({
            rollNo:st_rollNo,
            cts_id:cts_id,
            assessment_id:assessment._id,
            submission_file:req.query.submission_date,
            submission_date: year + "-" + month + "-" + date

        });
        try{
            await studentProgress.save();
            console.log("submission added");
            res.status(200).send("Submission added in db");

        }catch (err){
            res.status(400).send(err);
        }


    });

