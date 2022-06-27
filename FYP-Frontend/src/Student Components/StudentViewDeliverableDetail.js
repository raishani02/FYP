import React from "react";
import StudentMenu from "./StudentMenu";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Viewstudentassessments } from "../Actions/viewStudentAssessments";
import {Button} from "react-bootstrap";


const StudentViewDeliverableDetail = () => {

    // const dataa = [
    //     { Deliverable_No: "1", weightage: "2%", Difficulty_Level: "Medium",Total_Submissions_Recieved:"34", Posted_On:"2-April-2022", Deadline:	"3-April-2022" },
    //   ]

      const [delivNumber, setDelivNo] = useState('');

      const location = useLocation();
      const  {from}  = location.state;


      const [dataaa,setDataa] = React.useState([]);
     const [isLoaded,setisLoaded] = useState(false);

     const [data,setData] = useState({
      course_name:"",
      type:"",
    });

    const handlefile = (e) =>{  
      // get values of object prop

    let i=0,key1,value1,key2,value2;  
      for (let [key, value] of Object.entries(from)) {
        if(i==0)
        {
          key1 = `${key}`;
          value1 = `${value}`;
        i++;
        }
        else if(i==1)
        {
          key2 = `${key}`;
          value2 = `${value}`;
        i++;
        }

        console.log("key value: "+`${key}: ${value}`);

      }

      // console.log("key and value 1 " + key1+ value1);
      // console.log("key and value 2 " + key2+ value2);
      // console.log("key and value 3 " + key3+ value3);

      //console.log("assessment_num " + assignmentNumber);
      //console.log("e target value  " + e);

      setData({
                    // assessment_name: assignmentNumber,
                    course_name: value1,
                    type: "Deliverable",
                  
                  });
                  
        console.log("course_name: "+ data.course_name)
        console.log("type: "+ data.type)

        // for (let [key, value] of Object.entries(data)) {
        //   console.log(`${key}: ${value}`);
        // }   
    }

    const viewStudentAssessment =()=>{
      console.log("in func.." +data);
      // for (let [key, value] of Object.entries(data)) {
      //     console.log(`${key}: ${value}`);
      //   } 

      Viewstudentassessments(data,
        (errorr)=>{
          console.log("error"+errorr);
        },
        (success)=>{
          console.log("student Assessment view detail successfully"+success.data);
          setDataa(success.data);
          console.log("data: " +dataaa);
          setisLoaded(true);
         // console.log("view assessment......... "+success.data[0].difficulty_level)

          // for (let [key, value] of Object.entries(success.data[0])) {
          //   console.log(`${key}: ${value}`);
          // }

          // dataa1 = 
          //   { Assignment_No:success.data[0].assessment_name , weightage: success.data[0].weightage, Difficulty_Level: success.data[0].difficulty_level, Posted_On:success.data[0].posted_on, Deadline: success.data[0].due_date }
          

          //setDataa(success.data[0]);
        });

          console.log("finally......... ")
        for (let [key, value] of Object.entries(data)) {
          console.log(`${key}: ${value}`);
        }
       

    }

    return (
      <div>
        
        <StudentMenu />
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>Project Deliverable</h1>
        <div style={{height:" 200px",position: "relative", marginLeft:"500px", width:"200px"}}>
                  <Button >
                <a  onClick={event => { handlefile(event.target.value); viewStudentAssessment()}} style={{color:"white" }}> View Details</a></Button>
                </div>
        <div className="container">
          <table
            style={{
              border: "2px solid skyblue",
              width: "800px",
              height: "200px",
              marginTop: "40px",
              marginLeft: "380px",
            }}
          >
            <tr>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Deliverable No</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Weightage</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Difficulty Level</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                
                <strong>Posted On</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Deadline</strong>
              </th>
            </tr>
            {isLoaded ? <>
            {dataaa.map((val, key) => {
              return (
                <tr key={key}>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.assessment_name}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.weightage}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.difficulty_level}
                  </td>
                 
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.posted_on}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.due_date}
                  </td>
                </tr>
              );
            })}
            </> : <div> Loading...</div>
          }
          </table>
        </div>
      </div>
    );
}; 
    
export default StudentViewDeliverableDetail;
