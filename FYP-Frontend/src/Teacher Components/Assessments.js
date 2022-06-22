import React from "react";
import TeacherMenu from "./TeacherMenu";
import AssessmentCard from "./AssessmentCard";
import UploadAssessment from "./UploadAssessment";

const Assessments = () => {
      
    return (
      <div>
        <TeacherMenu />

        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div className="row" style={{marginLeft: "200px"}}>
            <div className="col" style={{marginBottom:"100px", marginTop:"60px"}}>  <UploadAssessment /> </div>
            <div className="col" style={{marginTop:"60px" ,marginBottom:"30px"}}> <AssessmentCard /> </div>
          </div>
        </div>
      </div>
    );
}; 
    
export default Assessments;
