const router = require("express").Router();
const verify = require('./verifyToken');
// const User = require("../model/User");
const TeacherCourse = require("../model/teacher_course_section");
const StudentCourse = require("../model/StudentCourse");

// router.get('/',verify, async(req,res,next) =>{
    
//     Blog.find({},(a,b)=>{
//         if(a){
//             console.log("a", a)
//             res.status(400).send(a)
//         }
//         else{
//             res.status(200).json(b)
//         }
//     }).populate('user_id', 'name')
// })

router.get('/mycourses', verify, async(req,res,next) =>{

    // console.log("user id in course is"+req.query.user_id);
    // console.log("user type in course is"+req.query.type);
    if(req.query.type=== "Teacher"){
        var courses = await TeacherCourse.find({teacher_id:req.query.user_id}).populate('course_id');
        // console.log("hmm1"+courses);
        res.json(courses);
    }
    else{

        var courses = await StudentCourse.find({student_id:"628e049f12f60eadbdea779e"}).populate({ path:'cts_id',populate:{path:'course_id teacher_id'}});
         // console.log("hmm"+courses);
        
        res.json(courses);
    }
   
})

// router.get('/speccourse', async(req,res,next) =>{
//     var posts = await Blog.findOne({_id: req.query.postId});
//     res.json(posts);

// })

// router.patch('/updatepost',verify, async(req,res,next) =>{
    
//     Blog.findByIdAndUpdate({
//         _id:req.body._id
//     },{
//         $set:req.body
//     }).then(()=>{
//         res.send({message:"success"});
//     });
// })

// router.delete('/deletepost',verify ,async(req,res,next) =>{
//     try
//     {
//         Blog.deleteOne({_id : req.body.id}).then(function(){
//         }).catch(function(error){
//         });
//         res.status(200).send("Post deleted")
//     }
//     catch(err){
//         res.status(400).send("Post cant be deleted")
//     }
// })

module.exports = router;