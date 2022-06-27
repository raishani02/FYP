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
import DatePicker from 'react-date-picker';
import {Uploadassessments} from '../Actions/Assessments';
import { borderLeft } from "@mui/system";
import { blue } from "@material-ui/core/colors";


function UploadAssessment(){
    const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
    const [sectionDropdownTitle,setSectionDropdownTitle]=useState('Select Section');
    const [levelDropdownTitle,setLevelDropdownTitle]=useState('Select Difficulty Level');
    const [typeDropdownTitle,setTypeDropdownTitle]=useState('Select Type');
    const [weightageTitle,setWeightageTitle]=useState('');
    const [nameTitle,setnameTitle]=useState('');
    const [dueDateTitle,setDueDateTitle]=useState(new Date());
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
    const handleSelectName=(e)=>{
      // console.log(e);
      //setCourseValue(e)
      setnameTitle(e)
    }
    const handleSelectWeighatge=(e)=>{
      const result = e.target.weightageTitle.replace(/\D/g, '');

      setWeightageTitle(result);
    }
    
    const handlefile = (e) =>{
      let file = e.target.files[0];
      let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => 
                {
                  console.log("my file data"+reader.result);
                  // setuploadedfile(reader.result);
                  setData({course_name:courseDropdownTitle,
                    section:sectionDropdownTitle,
                    type:typeDropdownTitle,
                    content:reader.result,
                    weightage:10,
                    difficulty_level:levelDropdownTitle,
                    due_date:"jan -10 -20"
                  });
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
        });
    }

    const handlefile1 = (e) =>{
      let file = e.target.files[0];
      let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => 
                {
                  console.log("my file data"+reader.result);
                  // setuploadedfile(reader.result);

                  setData({course_name:courseDropdownTitle,
                    section:sectionDropdownTitle,
                    type:typeDropdownTitle,
                    content:reader.result,
                    weightage:10,
                    difficulty_level:levelDropdownTitle,
                    due_date:"jan -10 -20"
                  });
                }
    }

    const uploadAssessment1 =()=>{
      console.log(data);

      Uploadassessments(data,
        (errorr)=>{
          console.log("error"+errorr);
        },
        (success)=>{
          console.log("Assessmen is added"+success);
        });
    }

    const handlefile2 = (e) =>{
      let file = e.target.files[0];
      let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => 
                {
                  console.log("my file data"+reader.result);
                  // setuploadedfile(reader.result);
                  setData({course_name:courseDropdownTitle,
                    section:sectionDropdownTitle,
                    type:typeDropdownTitle,
                    content:reader.result,
                    weightage:10,
                    difficulty_level:levelDropdownTitle,
                    due_date:"jan -10 -20"
                  });
                }
    }

    const uploadAssessment2 =()=>{
      console.log(data);

      Uploadassessments(data,
        (errorr)=>{
          console.log("error"+errorr);
        },
        (success)=>{
          console.log("Assessmen is added"+success);
        });
    }


return (
  <div>
    <div className="container" >
      <div
        class="card border-primary "
        style={{
         width:"350px",
         height:"650px"
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
            <div style={{
               
               fontWeight: 'bold',
               fontSize: "15px",
               color: "blue",
                
              }}>
              Assessment Name:    
              </div>  
           <input style={{
                width: "150px",
                border: '3px solid blue', 
                
              }}
              type="text"
              placeholder="Name"
              value={weightageTitle}
              onChange={handleSelectWeighatge}
              
           />
           </li>
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
            <div style={{
               
               fontWeight: 'bold',
               fontSize: "15px",
               color: "blue",
                
              }}>
              Select Weightage:    
              </div>  
           <input style={{
                width: "125px",
                border: '3px solid blue', 
                
              }}
              type="text"
              placeholder="Weightage"
              value={weightageTitle}
              onChange={handleSelectWeighatge}
              
           />
           </li>
           <li class="list-group-item"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
           
          }}>
            <div style={{
               
               fontWeight: 'bold',
               fontSize: "15px",
               color: "blue",
                
              }}>
              Select Due Date:    
              </div>  
              <div style={{
               border: '2px solid blue',
                
              }}>
               
              
            <DatePicker style={{
                 
                marginLeft: "300px",
              }}
              onChange={(date: Date) => setDueDateTitle(date)}  value={dueDateTitle} minDate={new Date("27-06-2022")} />
            </div>   
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
        
          <li class="list-group-item"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
           
          }}>
            <div style={{
               
               fontWeight: 'bold',
               fontSize: "15px",
               color: "blue",
                
              }}>
                  Upload Reading Material
              </div>  
                
          </li>
          <li class="list-group-item" 
          style={{
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
  onChange={handlefile1}
  ></input>
</Button>
  {/* <Button onClick={uploadAssessment1}>Upload </Button> */}

        </li>
        <li class="list-group-item"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
           
          }}>
            <div style={{
               
               fontWeight: 'bold',
               fontSize: "15px",
               color: "blue",
                
              }}>
                  Upload Additional Material
              </div>  
                
          </li>
        <li class="list-group-item" 
          style={{
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
  onChange={handlefile2}
  ></input>
</Button>
  {/* <Button onClick={uploadAssessment2}>Upload </Button> */}

        </li>
        <li class="list-group-item"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
           
          }}>
            <div style={{
               
               fontWeight: 'bold',
               fontSize: "15px",
               color: "blue",
                
              }}>
                  Upload Assessment
              </div>  
                
          </li>
          <li class="list-group-item" 
          style={{
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

        </li>
        </ul>
        </div>
     </div>
    </div>


    
  )
}

export default UploadAssessment;

