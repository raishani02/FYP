import React, { Component } from "react";
import TeacherMenu from "./TeacherMenu";
import {getcourses} from "../Actions/getcourse"
import Pagination from "../pagination/pagination";


const TeacherCourses = () => {
      
  const [courses, setCourses] = React.useState([]);

  const [Loaded, setLoaded] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [coursesPerPage] = React.useState(2);


  const [ref, setref] = React.useState(true)
  React.useEffect(()=>{
    console.log("in useeffect");
    getcourses(
      (error) => {
      console.log("Error is"+error);
      setLoaded(true)
    },
    (success) => {
      console.log("Success data"+success.data[0].c_name);
      setCourses(success.data);
      localStorage.setItem('Tcourses',success.data);
      // console.log("Course is"+courses);
      setLoaded(true)
    }
  );
  },[ref]);


  const Course = (course) => {
  
    console.log("hellllllllll"+course.c_name)
    return (
        <div className="col-4 col-md-4 ">
        <div class="card border-primary " style={{
            marginLeft: "10px",
            marginRight: "-32px",
         }} >
            {/* {console.log("course name in course is"+course.c_name)} */}

        <img src="https://picsum.photos/id/0/5616/3744" class="card-img-top" alt="..." style={{height: 200}}/>
        <div class="card-body" >
            <h5 class="card-title">{course.course_id.c_name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{course.course_id.c_code}</h6>
            
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Section:	{course.section}</li>
            <li class="list-group-item">Room:	{course.room}</li>
            <li class="list-group-item">Students Enrolled:	{course.enrolled_students}</li>
        </ul>
        <div class="card-body">
            
            <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> OPEN </a>
        </div>
        </div>
        <div className="sr-only">
       
      </div>
        </div>
    );
}; 
  

  const refreshfunc = () =>{
    console.log('refresher called')
    //window.location.reload();
    setref(!ref)
  }
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  
    return (
      <div>
      <TeacherMenu /> 
       <React.Fragment>
        <h1 className= 'text-centre  ml-5 mr-5 mb-5' style={{
          marginLeft: "750px",
          color: "#292938",
        }}> {localStorage.getItem('type')} Courses </h1>
        {Loaded ? 
        
        <div className="container">
        <div className="row">

          {currentCourses.map((course) => (              
              Course(course)
          ))}    
            
            <Pagination 
              coursesPerPage={coursesPerPage}
              totalCourses={courses.length}
              paginate={paginate}
            />
        </div>
        </div>
      :
      <div>
        Loading...
      </div>}
        </React.Fragment>
        {/* {refreshfunc} */}
      </div>
    );
};
    
export default TeacherCourses;
