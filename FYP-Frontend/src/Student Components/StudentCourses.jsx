import React from "react";
import StudentMenu from "./StudentMenu";
import * as bootstrap from 'bootstrap';
import {getcourses} from "../Actions/getcourse"


const StudentCourses = () => {

    const [courses, setCourses] = React.useState([]);

  const [Loaded, setLoaded] = React.useState(false)

  const [ref, setref] = React.useState(true)
  React.useEffect(()=>{
    console.log("in useeffect");
    getcourses(
      (error) => {
      console.log("Error is"+error);
    //   setLoaded(true)
    },
    (success) => {
      console.log("Success data"+success.data[0].cts_id.course_id.c_name);
      setCourses(success.data);
      // console.log("Course is"+courses);
      setLoaded(true)
    }
  );
  },[ref]);

  const refreshfunc = () =>{
    console.log('refresher called')
    //window.location.reload();
    setref(false)
  }

    // const [studentcoure,setCourse] = React.useState();
    const Studentcourse = course =>{

        console.log("kya baat bny" + course);
        
        return(
            <div className="col ">
            <div class="card border-primary " style={{
                marginLeft: "10px",
                marginRight: "-32px",
                
             }} >
            <img src={course.cts_id.course_id.img} class="card-img-top" alt="..." style={{height: 200}}/>
            <div class="card-body" >
                <h5 class="card-title">{course.cts_id.course_id.c_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{course.cts_id.course_id.c_code}</h6>
                <h4 class="card-subtitle mb-2 ">Instructor:{course.cts_id.teacher_id.name}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Section:	{course.cts_id.section}</li>
                <li class="list-group-item">Room:	{course.cts_id.room}</li>
                <li class="list-group-item">Students Enrolled:	{course.cts_id.enrolled_students}</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> OPEN </a>
            </div>
            </div>
            </div>

        )
       
    }
      
    return (
      <div>
      <StudentMenu /> 
       <React.Fragment>
        <h1 className= 'text-centre  ml-5 mr-5 mb-5' style={{
          marginLeft: "750px",
          color: "#292938",
        }}> COURSES </h1>
        <div className="container">
        <div className="row">
            
            
           
        {Loaded ? 
        
        <div className="container">
        <div className="row">

          {courses.map((course) => (    
                Studentcourse(course) 
          ))}    
            
        </div>
        </div>
      :
      <div>
        Loading...
      </div>}

        </div>
        </div>

        </React.Fragment>
      </div>
    );
}; 
    
export default StudentCourses;
