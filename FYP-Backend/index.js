const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
// const MongoClient = require('mongodb').MongoClient
const cookieParser = require('cookie-parser')

// const CreatePostRoute = require('./routes/createpost')

// const AllpostsRoute = require('./routes/Allposts')

// const AllusersRoute = require('./routes/Allusers')

var cors = require('cors');

// const url = 'mongodb://127.0.0.1:27017/FYP'
// const url = 'mongodb+srv://raiarslanriasat:Arslan@123@cluster0.edbuh.mongodb.net/?retryWrites=true&w=majority'

// const dbName = 'FYP'
// let db

mongoose.connect('mongodb+srv://raiarslanriasat:Arslan%40123@cluster0.edbuh.mongodb.net/FYP',
(e) => console.log(e))


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


// use it before all route definitions
// app.use(cors({origin: 'http://localhost:3000'}));

app.use(cors({origin: ['http://localhost:3000','http://192.168.18.65']}));
//connect to DB
// mongoose.connect('mongodb+srv://raiarslanriasat:Arslan%40123@cluster0.edbuh.mongodb.net/?retryWrites=true&w=majority',
// (e) => console.log(e))

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//cookie parser middleware
app.use(cookieParser());

//Middlewares
app.use(express.json());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//Import Routes
const authRoute = require('./routes/auth')
const Allcourses = require('./routes/Allcourses')
const Assessment = require('./routes/uploadAssessment')
const viewAssessment = require('./routes/teacherViewAssessment')
const viewStudentAssessment = require('./routes/studentViewAssessment')
const uploadStudentAssessment = require('./routes/studentUploadAssessment')

//Route middlewares
app.use('/api/user', authRoute);


//Posts middlewares

// //to create a post
// app.use('/api/createpost', CreatePostRoute)

// //to get all the posts related apis
app.use('/api/courses', Allcourses);


// //to get all the users related apis
// app.use('/api/users', AllusersRoute)




app.listen(5000, ()=> console.log('Server is running'))

// ******************************* uploading file (not working) *****************************************

const fileupload = require("express-fileupload");
// const UploadFile = require('./model/UploadFile');

app.use(cors());
// app.use(fileupload());
// app.use(express.static("files"));



// app.use ('/api/teacher-assessments',UploadFile);

app.use ('/api/courses/assessment',Assessment);
app.use ('/api/courses/assessments',viewAssessment);
app.use ('/api/courses/studentassessments',viewStudentAssessment);
app.use ('/api/courses/uploadstudentassessments',uploadStudentAssessment);
