import React from 'react';
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useState } from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Database', 'Data WareHouse', 'Advanced Database'],   // needs to be changed from db
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

 function StudentCourseProgressChart () {
  // const [value,setValue] = useState('');
  // const [dropdownTitle,setDropdownTitle]=useState('Select Course');
  
  //   const handleSelect=(e)=>{
  //     // console.log(e);
  //     setValue(e)
  //     setDropdownTitle(e)
  //   }
  
    const [isCourseCompletionModalOpen, setCourseCompletionModalOpen] = useState(false);
    const openCourseCompletionModal = (e) => {e.preventDefault(); setCourseCompletionModalOpen(true);}
    const closeCourseCompletionModal = (e) => {setCourseCompletionModalOpen(false);}
  
    return (
      <div>
      
        <Button
          style={{
            width: "150px",
            backgroundColor: "lightblue",
            marginLeft: "60px",
            borderRadius: "50px",
            borderWidth: "3px",
            color: "darkblue",
          }}
         //  onClick={{value}==='' ? "Please Select Course" : { openAssignmentCompletionModal}  }
          onClick=  { openCourseCompletionModal}
        >
          Show progress
        </Button>

      <Modal show={isCourseCompletionModalOpen} onHide={closeCourseCompletionModal}  style={{marginTop: "25px"}}>
        <Modal.Header closeButton style={{ fontSize: "20px" }}>
          <strong>Course Completion Progress is: </strong>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Course Completion Status',
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

export default StudentCourseProgressChart;