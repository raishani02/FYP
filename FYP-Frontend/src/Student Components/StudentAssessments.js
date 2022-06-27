import React from "react";
import StudentMenu from "./StudentMenu";
// import RecommendedMaterial from "./RecommendedMaterial";
import StudentAssessmentCard from "./StudentAssessmentCard";
import StudentAssessmentCard1 from "./StudentAssessmentCard1";

const StudentAssessments = () => {
  
 return(
    <div>
    <StudentMenu />

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
        {/* <div className="col" style={{marginBottom:"100px", marginTop:"60px"}}>  <RecommendedMaterial /> </div> */}
        <div className="col" style={{marginTop:"60px" ,marginBottom:"30px"}}> <StudentAssessmentCard /> </div>
        <div className="col" style={{marginBottom:"100px", marginTop:"60px"}}>  <StudentAssessmentCard1 /> </div>
          
      </div>
    </div>
  </div>
    );
}; 
    
export default StudentAssessments;
