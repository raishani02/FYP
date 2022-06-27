import React from "react";
import StudentMenu from "./StudentMenu";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Grid from "@material-ui/core/Grid";
import { Row,Col,Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import { Uploadstudentassessments } from "../Actions/uploadStudentAssessment";

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free"
});

const StudentUploadQuizDetails = () => {

    // const data = [
    //     { Quiz_Name: "Quiz 1", Quiz: " ", Upload:" "
    //         },
    //   ]



/*const decode = () => {
        let byteCharacters = atob(basePdf);
        let byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        let file = new Blob([byteArray], { type: "application/pdf;base64" });
        let fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      };*/

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
                    type: "Quiz",
                  
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

      Uploadstudentassessments(data,
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

    const handlerfile = (e) =>{
        let file = e.target.files[0];
        let reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onloadend = () => 
                  {
                    console.log("my file data"+reader.result);
                    // setuploadedfile(reader.result);
       //////////////*************************** ye uncomment krna ntegration me */
                    // setData({course_name:courseDropdownTitle,
                    //   section:sectionDropdownTitle,
                    //   type:typeDropdownTitle,
                    //   content:reader.result,
                    //   weightage:10,
                    //   difficulty_level:levelDropdownTitle,
                    //   due_date:"jan -10 -20",
                    //   course_name:courseDropdownTitle
                    // });
     //////////////*************************** ye uncomment krna ntegration me */

                  }
  
                  // console.log("inside func ..... ")
                  // for (let [key, value] of Object.entries(data)) {
                  //   console.log(`${key}: ${value}`);
                  // }
      }

      const uploadAssessment =()=>{
               //////////////*************************** ye uncomment krna ntegration me */

        //console.log("data is: " + data);

        // Uploadassessments(data,
        //   (errorr)=>{
        //     console.log("error"+errorr);
        //   },
        //   (success)=>{
        //     console.log("Assessmen is added"+success);
        //   });
       //////////////*************************** ye uncomment krna ntegration me */



          // console.log("inside func ..... ")
          // for (let [key, value] of Object.entries(data)) {
          //           console.log(`${key}: ${value}`);
          //         }
      }

    return (
      <div>
        
        <StudentMenu />       

        <div className="container" >
            <Row>
                <Col>
                <h1 style={{ marginTop: "100px", textAlign:"center"}} >Quiz Details</h1>
                <div style={{height:" 200px",position: "relative", marginLeft:"500px", width:"200px"}}>
                  <Button >
                <a  onClick={event => { handlefile(event.target.value); viewStudentAssessment()}} style={{color:"white" }}> View Details</a></Button>
                </div>
                <table
            style={{
              border: "2px solid skyblue",
              width: "800px",
              height: "200px",
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
                <strong>Quiz</strong>
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
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Upload</strong>
               
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
            
            { /*onClick={decode(val.Assignment)} */}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.due_date}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
            <Button
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        width: "230px",
                        marginLeft: "30px"
                      }}
                    >
                      <input
                        type="file"
                        accept=" .pdf, .txt"
                        name="myfile"
                        onChange={handlerfile}
                      ></input>
                    </Button>
                    <Button onClick={uploadAssessment} style = {{marginTop:"30px"}}>Upload </Button>


                    {val.Upload}
                  </td>
                </tr>
              );
            })}
             </> : <div> Loading...</div>
          }
          </table>
                </Col>
            </Row>
         
        </div>
      </div>
    );
}; 
    
export default StudentUploadQuizDetails
