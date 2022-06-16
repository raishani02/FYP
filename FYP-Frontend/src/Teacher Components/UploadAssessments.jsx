import React from "react";
import TeacherMenu from "./TeacherMenu";
import * as bootstrap from 'bootstrap';

const UploadAssessments = () => {
      
    return (
      <div>
      <TeacherMenu /> 
       <React.Fragment>
        <h1 className= 'text-centre  ml-5 mr-5 mb-5' style={{
          marginLeft: "750px",
          color: "#292938",
        }}> ASSESMENTS </h1>
        <div className="container">
        <div className="row">
            <div className="col ">
            <div class="card border-primary " style={{
                marginLeft: "10px",
                marginRight: "-32px",
                
             }} >
            <div class="card-body">
                <h5 class="card-title">Assisgnment-1</h5>
                <h6 class="card-subtitle mb-2 text-muted">Weightage: 3%</h6>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Difficulty Level: Medium</li>
                <li class="list-group-item">Total Submissions Recieved:	34</li>
                <li class="list-group-item">Posted On:	2-April-2022</li>
                <li class="list-group-item">Deadline:	3-April-2022</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> VIEW </a>
            </div>
            </div>
            </div>
            <div className="col">
            <div class="card border-primary " style={{
                
                marginLeft: "41px",
                marginRight: "-65px",
                
             }}>
            <div class="card-body">
                <h5 class="card-title">Quiz-1</h5>
                <h6 class="card-subtitle mb-2 text-muted">Weightage: 5%</h6>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Difficulty Level: Hard</li>
                <li class="list-group-item">Total Submissions Recieved:	44</li>
                <li class="list-group-item">Posted On:	2-April-2022 at 2:00PM</li>
                <li class="list-group-item">Deadline:	2-April-2022 at 4:00PM</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> VIEW </a>
            </div>
            </div>
            </div>
            <div className="col">
            <div class="card border-primary" style={{
                
                marginLeft:"70px",
                marginRight: "-90px",
                
             }}>
            <div class="card-body">
                <h5 class="card-title">Quiz-2</h5>
                <h6 class="card-subtitle mb-2 text-muted">Weightage: 3%</h6>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Difficulty Level: Easy</li>
                <li class="list-group-item">Total Submissions Recieved:	43</li>
                <li class="list-group-item">Posted On:	2-April-2022 at 4:00PM</li>
                <li class="list-group-item">Deadline:	2-April-2022 at 5:00PM</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> VIEW </a>
            </div>
            </div>
            </div>
        </div>
        </div>
        </React.Fragment>
      </div>
    );
}; 
    
export default UploadAssessments;
