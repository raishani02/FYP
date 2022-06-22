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

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free"
});

function UploadAssessment(){
    const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
    const [sectionDropdownTitle,setSectionDropdownTitle]=useState('Select Section');
    
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


return (
  <div>
    <div className="container" >
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
          <li class="list-group-item">
      <DropdownButton
        position="Center"
        title={courseDropdownTitle}
        id="dropdown-menu-for-course-of-assessment-material"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Database">Database</Dropdown.Item>
        <Dropdown.Item eventKey="Data WareHouse">Data WareHouse</Dropdown.Item>
        <Dropdown.Item eventKey="Advanced Database">
          Advanced Database
        </Dropdown.Item>
      </DropdownButton>
          </li>

          <li class="list-group-item">
          <DropdownButton
        position="Center"
        title={sectionDropdownTitle}
        id="dropdown-menu-for-section-of-assessment-material"
        onSelect={handleSelectSection}
      >
        <Dropdown.Item eventKey="BCS-6A">BCS-6A</Dropdown.Item>
        <Dropdown.Item eventKey="BCS-8A"> BCS-8A </Dropdown.Item>
        <Dropdown.Item eventKey="BCS-8B"> BCS-8B </Dropdown.Item>
      </DropdownButton>
          </li>
        </ul>
        
        <div class="card-body" style={{margin:"auto"}}>
          {/* <a href="/teacher-upload-assessments" class="btn btn-primary"> */}
          {/* <a href=" " class="btn btn-primary">
            OPEN
          </a> */}
          <UploadButton
    uploader={uploader}
    options={{ multi: true }}
    onComplete={(files) => console.log(files)}
  >
    {({ onClick }) => (
      <Grid container justify="center">
      
        <Button onClick={onClick}>Upload </Button>
      </Grid>
    )}
  </UploadButton>
        </div>
        </div>
     </div>
    </div>


    
  )
}

export default UploadAssessment;

