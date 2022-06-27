import React from "react";
import TeacherMenu from "./TeacherMenu";
import { useState } from 'react';
import { Button } from "react-bootstrap";
import { Viewassessments } from "../Actions/viewAssessmentDetail";
import { useLocation } from 'react-router-dom'


const ViewQuizDetail = () => {

  const location = useLocation();
  const  {from}  = location.state;

    const dataa = [
        { Quiz_No: "1", weightage: "2%", Difficulty_Level: "Medium",Total_Submissions_Recieved:"34", Posted_On:"2-April-2022", Deadline:	"3-April-2022" },
      ]

      let dataa1 ={};
      const [quizNumber, setQuizNo] = useState('');

      const [data,setData] = useState({
        assessment_name:"",
        course_name:"",
        section:"",
        type:"",
      });

      const handleSelect=(e)=>{
        // console.log(e);
   
      // console.log("data before quiz number: " +  quizNumber)
        setQuizNo(e)
  //      console.log("data after quiz number: " +  quizNumber)
  
      }

      const handlefile = (e) =>{  
        // get values of object prop

      let i=0,key1,value1,key2,value2,key3,value3;  
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
          else if(i==2)
          {
            key3 = `${key}`;
            value3 = `${value}`;
          i++;
          }

         // console.log(`${key}: ${value}`);

        }

        // console.log("key and value 1 " + key1+ value1);
        // console.log("key and value 2 " + key2+ value2);
        // console.log("key and value 3 " + key3+ value3);

        //console.log("assessment_num " + assignmentNumber);
        //console.log("e target value  " + e);

        setData({
                      // assessment_name: assignmentNumber,
                      assessment_name: e,
                      course_name: value1,
                      section: value2,
                      type: "Quiz",
                    
                    });
                    
          // console.log("course_name: "+ data.course_name)
          // console.log("section: "+ data.section)
          // console.log("type: "+ data.type)
          // console.log("Assessment: "+ data.assessment_name)

          // for (let [key, value] of Object.entries(data)) {
          //   console.log(`${key}: ${value}`);
          // }  
      }

      const viewAssessment =()=>{
        console.log(data);
  
        Viewassessments(data,
          (errorr)=>{
            console.log("error"+errorr);
          },
          (success)=>{
            console.log("Assessment view successfully"+success.data);
           // console.log("view assessment......... "+success.data[0].difficulty_level)

            // for (let [key, value] of Object.entries(success.data[0])) {
            //   console.log(`${key}: ${value}`);
            // }

            dataa1 = 
              { Assignment_No:success.data[0].assessment_name , weightage: success.data[0].weightage, Difficulty_Level: success.data[0].difficulty_level,Total_Submissions_Recieved:"34", Posted_On:success.data[0].posted_on, Deadline: success.data[0].due_date }
            

            //setDataa(success.data[0]);
          });

            console.log("finally......... ")
          for (let [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`);
          }

          console.log("dataaa......... " + dataa1.weightage)
         

      }

    return (
      <div>
        
        <TeacherMenu />
        <div className="container">
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>QUIZ</h1>

          <div
            class="card border-primary "
            style={{
              marginLeft: "500px",
              width: "400px",
              height: "250px",
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <div class="card-body">
              <h5 class="card-title"> <strong> Quiz Name: </strong> </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <form>
                  <div class="form-group">
                    <label for="quiz">Enter Quiz Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="quiz"
                      aria-describedby="quizHelp"
                      placeholder="Quiz Name"
                      onChange={event => {handleSelect(event.target.value); handlefile(event.target.value) }}
                      value={quizNumber}
                    />
                    <small id="QuizHelp" class="form-text text-muted">
                      Write Quiz name you want to view data of; e.g Quiz 1, Quiz 2, etc,...
                    </small>
                  </div>
                </form>
              </li>
            </ul>
            <div class="card-body">
              <Button >
                <a onClick={viewAssessment} style={{color:"white"}}> View</a></Button>
            </div>
          </div>
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
                <strong>Quiz Name</strong>
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
                <strong>Total Submissions Recieved</strong>
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
            {dataa.map((val, key) => {
              return (
                <tr key={key}>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Quiz_No}
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
                    {val.Difficulty_Level}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Total_Submissions_Recieved}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Posted_On}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Deadline}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {/* <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> VIEW </a> */}
      </div>
    );
}; 
    
export default ViewQuizDetail;
