import React from "react";
import TeacherMenu from "./TeacherMenu";
import * as bootstrap from 'bootstrap';

const Assessments = () => {
      
    return (
      <div>
      <TeacherMenu /> 
       <React.Fragment>
        <h1 className= 'text-centre  ml-5 mr-5 mb-5' style={{
          marginLeft: "750px",
          color: "#292938",
        }}> COURSES </h1>
        <div className="container">
        <div className="row">
            <div className="col ">
            <div class="card border-primary " style={{
                marginLeft: "10px",
                marginRight: "-32px",
                
             }} >
            <img src="https://picsum.photos/id/0/5616/3744" class="card-img-top" alt="..." style={{height: 200}}/>
            <div class="card-body">
                <h5 class="card-title">Data Structures</h5>
                <h6 class="card-subtitle mb-2 text-muted">CS-5001</h6>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Section:	BCS-7A</li>
                <li class="list-group-item">Room:	CS-7</li>
                <li class="list-group-item">Students Enrolled:	50</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-upload-assessments" class="btn btn-primary"> OPEN </a>
            </div>
            </div>
            </div>
            <div className="col">
            <div class="card border-primary " style={{
                
                marginLeft: "41px",
                marginRight: "-65px",
                
             }}>
            <img src="https://picsum.photos/id/370/4928/3264" class="card-img-top" alt="..." style={{height: 200}}/>
            <div class="card-body">
                <h5 class="card-title">Artifical Intelligence</h5>
                <h6 class="card-subtitle mb-2 text-muted">CS-4001</h6>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Section:	BCS-7C</li>
                <li class="list-group-item">Room:	CE-7</li>
                <li class="list-group-item">Students Enrolled:	35</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-upload-assessments" class="btn btn-primary"> OPEN </a>
            </div>
            </div>
            </div>
            <div className="col">
            <div class="card border-primary" style={{
                
                marginLeft:"70px",
                marginRight: "-90px",
                
             }}>
            <img src="https://picsum.photos/id/20/3670/2462" class="card-img-top" alt="..." style={{height: 200}}/>
            <div class="card-body">
                <h5 class="card-title">Database</h5>
                <h6 class="card-subtitle mb-2 text-muted">CS-5601</h6>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Section:	BCS-5A</li>
                <li class="list-group-item">Room:	EE-7</li>
                <li class="list-group-item">Students Enrolled:	45</li>
            </ul>
            <div class="card-body">
                
                <a href="/teacher-upload-assessments" class="btn btn-primary"> OPEN </a>
            </div>
            </div>
            </div>
        </div>
        </div>
        </React.Fragment>
      </div>
    );
}; 
    
export default Assessments;
