import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { Modal } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";
import { useState } from 'react';



const state = {
  labels: ['Database', 'Data WareHouse', 'Advanced Database'],     // needs to be changed from db
  datasets: [
    {
      label: 'Due Assignments',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [3,2,1]                           // needs to be changed from db
    }
  ]
}



function StudentDueAssignmentsChart () {

  const [courseValue,setCourseValue] = useState('');
  const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');


      const handleSelect=(e)=>{
        // console.log(e);
        setCourseValue(e)
        setCourseDropdownTitle(e)
      }

    
      const [isAssignmentDueModalOpen, setAssignmentDueModalOpen] = useState(false);
      const openAssignmentDueModal = (e) => {e.preventDefault(); setAssignmentDueModalOpen(true);}
      const closeAssignmentDueModal = (e) => {setAssignmentDueModalOpen(false);}    

		 return (
       <div>
         <p>Select the course to display due assignments: </p>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"  }}>
           <DropdownButton
             position="Center"
             title={courseDropdownTitle}
             id="dropdown-menu-for-assignments-completion-progress"
             onSelect={handleSelect}
           >
             <Dropdown.Item eventKey="Database">Database</Dropdown.Item>
             <Dropdown.Item eventKey="Data WareHouse">
               Data WareHouse
             </Dropdown.Item>
             <Dropdown.Item eventKey="Advanced Database">
               Advanced Database
             </Dropdown.Item>
           </DropdownButton>
           {/* <h4>You selected {value}</h4> */}

           
        </div>

           <Button
             style={{
               width: "200px",
               backgroundColor: "lightblue",
               marginLeft: "100px",
               marginTop: "15px",
               borderRadius: "50px",
               borderWidth: "3px",
               color: "darkblue",
             }}
             //  onClick={{value}==='' ? "Please Select Course" : { openAssignmentCompletionModal}  }
             onClick={openAssignmentDueModal}
           >
             Show Due Assignments
           </Button>

         <Modal
           show={isAssignmentDueModalOpen}
           onHide={closeAssignmentDueModal}
           style={{marginTop: "25px"}}
         >
           <Modal.Header closeButton style={{ fontSize: "20px" }}>
             <strong>Assignments' Progress of {courseValue} is: </strong>
           </Modal.Header>
           <Modal.Body>
             <div>
               <HorizontalBar
                 data={state}
                 options={{
                   title: {
                     display: true,
                     text: "Due Assignments",
                     fontSize: 20,
                   },
                   legend: {
                     display: true,
                     position: "right",
                   },
                 }}
               />
             </div>
           </Modal.Body>
         </Modal>
       </div>
     );
	}

export default StudentDueAssignmentsChart;   