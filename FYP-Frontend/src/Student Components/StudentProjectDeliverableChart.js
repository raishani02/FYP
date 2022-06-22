import React from 'react';
import { Modal } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";
import { useState } from 'react';
import { Doughnut} from 'react-chartjs-2';

const state = {
  labels: ['Deliverable-1', 'Deliverable-2', 'Deliverable-3'],   // needs to be changed from db
  datasets: [
    {
      label: 'Course Completion',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80]            // needs to be changed from db
    }
  ]
}

 function StudentProjectDeliverableChart () {
  const [courseValue,setCourseValue] = useState('');
  const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
  
    const handleSelect=(e)=>{
      // console.log(e);
      setCourseValue(e)
      setCourseDropdownTitle(e)
    }

   
    const [isProjectDeliverableModalOpen, setProjectDeliverableModalOpen] = useState(false);
    const openProjectDeliverableModal = (e) => {e.preventDefault(); setProjectDeliverableModalOpen(true);}
    const closeProjectDeliverableModal = (e) => {setProjectDeliverableModalOpen(false);}
  
    return (
      <div>
      <p>Select the course, you want to know progress about: </p>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <DropdownButton
          position="Center"
          title={courseDropdownTitle}
          id="dropdown-menu-for-project-deliverable-progress"
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

        </div>
        
        {/* <h4>You selected {courseValue}</h4> */}
        <Button
          style={{
            width: "150px",
            backgroundColor: "lightblue",
            marginLeft: "100px",
            marginTop: "15px",
            borderRadius: "50px",
            borderWidth: "3px",
            color: "darkblue",
          }}
         //  onClick={{value}==='' ? "Please Select Course" : { openAssignmentCompletionModal}  }
          onClick=  { openProjectDeliverableModal}
        >
          Show progress
        </Button>
     
      <Modal show={isProjectDeliverableModalOpen} onHide={closeProjectDeliverableModal}  style={{marginTop: "25px"}}>
        <Modal.Header closeButton style={{ fontSize: "20px" }}>
          <strong>Project Deliverables Progress of {courseValue} is: </strong>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Project Deliverable per Week',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        </div>
        </Modal.Body>
      </Modal>
   
</div>
    )}

export default StudentProjectDeliverableChart;