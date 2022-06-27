// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// function UploadAssessment () {
//       const [file, setFile] = useState();
//       const [fileName, setFileName] = useState("");
//       const saveFile = (e) => {
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name);
//       };
//       const uploadFile = async (e) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           const res = await axios.post(
//             "http://localhost:3000/upload",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
//     // render(){
//       return (
//         <div className="App">
//           <input type="file" onChange={saveFile} />
//           <button onClick={uploadFile}>Upload</button>
//         </div>
//       );
//     //}
// }
// export default UploadAssessment;

import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/esm/Button";
import {Uploadassessments} from '../Actions/Assessments';
import {
  NotificationContainer,
  NotificationManager ,
} from "react-notifications";
import TeacherMenu from "./TeacherMenu";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



function UploadAssessment(){
    const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
    const [sectionDropdownTitle,setSectionDropdownTitle]=useState('Select Section');
    const [levelDropdownTitle,setLevelDropdownTitle]=useState('Select Difficulty Level');
    const [typeDropdownTitle,setTypeDropdownTitle]=useState('Select Type');
    const [uploadedfile,setuploadedfile]=useState();
    const [data,setData] = useState({
      course_name:"",
      section:"",
      type:"",
      content:"",
      difficulty_level:"",
      due_date:"",
      weightage:""
    });

    const handleSelectType=(e)=>{
        // console.log("now we are "+e);
      setTypeDropdownTitle(e)

    } 

    const handleSelectLevel=(e)=>{
      setLevelDropdownTitle(e)
    }
    
      const handleSelectSection=(e)=>{
        // console.log(e);
        //setSectionValue(e)
        setSectionDropdownTitle(e)
      }
  
    const handleSelect=(e)=>{
      // console.log(e);
      //setCourseValue(e)
      setCourseDropdownTitle(e)
    }
    const pdfContentType = 'application/pdf';

  //   const base64toBlob = (data)  => {
  //     // Cut the prefix `data:application/pdf;base64` from the raw base 64
  //     const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);

  //     const bytes = atob(base64WithoutPrefix);
  //     let length = bytes.length;
  //     let out = new Uint8Array(length);

  //     while (length--) {
  //         out[length] = bytes.charCodeAt(length);
  //     }

  //     return new Blob([out], { type: pdfContentType });
  // };

  // const [url,seturlState]=useState();

    const handlefile = (e) =>{
      // seturlState(null);
      let file = e.target.files[0];
      let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => 
                {
                  console.log(reader.result);
                  // setuploadedfile(reader.result);
                  setData({course_name:courseDropdownTitle,
                    section:sectionDropdownTitle,
                    type:typeDropdownTitle,
                    content:reader.result,
                    weightage:10,
                    difficulty_level:levelDropdownTitle,
                    due_date:"jan -10 -20",
                    course_name:courseDropdownTitle
                  });
                  // console.log("data contenrt ");
               
                  // seturlState(URL.createObjectURL(base64toBlob(reader.result)));
    
                  // console.log("urlllllll"+url);
                }
          
    }



    const uploadAssessment =()=>{
      console.log(data);

      Uploadassessments(data,
        (errorr)=>{
          console.log("error"+errorr);
        },
        (success)=>{
          console.log("Assessmen is added"+success);
          NotificationManager.success("Assessment created");
        });
    }


return (
  <div>

    <div className="container" >
    <NotificationContainer />

    {/* {url ? 
    <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
    }}
>
    <Viewer fileUrl={"c3b222b0-f0f5-4a0c-b0c2-e0eb62a2ba55"} />
</div>
:<>No data</>} */}

      <div
        class="card border-primary "
        style={{
         width:"350px",
         height:"450px"
        }}
      >

        <img
         src="https://picsum.photos/id/370/4928/3264"
          class="card-img-top"
          alt="..."
          style={{ height: 200 }}
        />
        <div class="card-body">
          <h5 class="card-title" style={{textAlign:"center"}}> <strong>Upload Assessment</strong></h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
      <DropdownButton
        position="Center"
        title={courseDropdownTitle}
        id="dropdown-menu-for-course-of-assessment-material"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Programming Fundamental">Programming Fundamental</Dropdown.Item>
        <Dropdown.Item eventKey="Data WareHouse">Data WareHouse</Dropdown.Item>
        <Dropdown.Item eventKey="Advanced Database">
          Advanced Database
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        position="Center"
        title={sectionDropdownTitle}
        id="dropdown-menu-for-section-of-assessment-material"
        onSelect={handleSelectSection}
      >
        <Dropdown.Item eventKey="CS-1A">CS-1A</Dropdown.Item>
        <Dropdown.Item eventKey="BCS-8A"> BCS-8A </Dropdown.Item>
        <Dropdown.Item eventKey="BCS-8B"> BCS-8B </Dropdown.Item>
      </DropdownButton>
          </li>

          <li class="list-group-item" 
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          <DropdownButton
        position="Center"
        title={levelDropdownTitle}
        id="dropdown-menu-for-level-of-assessment-material"
        onSelect={handleSelectLevel}
      >
        <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
        <Dropdown.Item eventKey="Medium"> Medium </Dropdown.Item>
        <Dropdown.Item eventKey="Hard"> Hard</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
              position="Center"
              title={typeDropdownTitle}
              id="dropdown-menu-for-type-of-assessment"
              onSelect={handleSelectType}
            >
              <Dropdown.Item eventKey="Assignment">Assignment</Dropdown.Item>
              <Dropdown.Item eventKey="Quiz"> Quiz </Dropdown.Item>
              <Dropdown.Item eventKey="Deliverable"> Project Deliverable </Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
        
        <div class="card-body" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          {/* <a href="/teacher-upload-assessments" class="btn btn-primary"> */}
          {/* <a href=" " class="btn btn-primary">
            OPEN
          </a> */}
         

<Button style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "230px",
  }}>
  <input type="file"
  accept = " .pdf, .txt"
  name="myfile"
  onChange={handlefile}
  ></input>
</Button>
  <Button onClick={uploadAssessment}>Upload </Button>

        </div>
        </div>
     </div>
    </div>


    
  )
}

export default UploadAssessment;

