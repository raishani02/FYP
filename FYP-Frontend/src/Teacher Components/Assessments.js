import React from "react";
import TeacherMenu from "./TeacherMenu";
import AssessmentCard from "./AssessmentCard";
import UploadAssessment from "./UploadAssessment";

const Assessments = () => {
      
    return (
      <div>
        <div style={{ position: "fixed" }}>
      
       <TeacherMenu />
     </div>

        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "",
          }}
        >
          <div className="row" style={{marginLeft: "200px"}}>
<<<<<<< HEAD
            <div className="col" style={{marginBottom:"100px", marginTop:"60px"}}>  <UploadAssessment /> </div>
            <div className="col" style={{marginTop:"200px" ,marginBottom:"30px"}}> <AssessmentCard /> </div>
           </div>
=======
            <div className="col" style={{marginBottom:"100px", marginTop:"110px"}}>  <UploadAssessment /> </div>
            <div className="col" style={{marginTop:"110px" ,marginBottom:"30px"}}> <AssessmentCard /> </div>
          </div>
>>>>>>> master
        </div>
      </div>
    );
}; 
    
export default Assessments;
