import {Bar} from 'react-chartjs-2';
import { Modal } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Button} from "react-bootstrap";
import { useState } from 'react';

let course = "Select Course";

const state = {
  labels: ['A1', 'A2', 'A3',
           'A4', 'A5'],                //  Needs to be updated by db
  datasets: [
    {
      label: 'Complete',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 29, 80, 81, 96]          // Needs to be updated by db
    }
  ]
}

function StudentAssignmentCompletionChart(){
  const [courseValue,setCourseValue] = useState('');
  const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
  

  const handleSelect=(e)=>{
    // console.log(e);
    setCourseValue(e)
    setCourseDropdownTitle(e)
  }

  const [isAssignmentCompletionModalOpen, setAssignmentCompletionModalOpen] = useState(false);
  const openAssignmentCompletionModal = (e) => {e.preventDefault(); setAssignmentCompletionModalOpen(true);}
  const closeAssignmentCompletionModal = (e) => {setAssignmentCompletionModalOpen(false);}

return (
  <div>
    <p>Select the course to display assignments' progress: </p>
    <div style={{ display: "flex", flexDirection: "row" ,justifyContent: "space-around" }}>
      <DropdownButton
        position="Center"
        title={courseDropdownTitle}
        id="dropdown-menu-for-assignments-completion-progress"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Database">Database</Dropdown.Item>
        <Dropdown.Item eventKey="Data WareHouse">Data WareHouse</Dropdown.Item>
        <Dropdown.Item eventKey="Advanced Database">
          Advanced Database
        </Dropdown.Item>
      </DropdownButton>
      {/* <h4>You selected {value}</h4> */}

    </div>

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
      onClick={openAssignmentCompletionModal}
    >
      Show progress
    </Button>

    <Modal
      show={isAssignmentCompletionModalOpen}
      onHide={closeAssignmentCompletionModal}
      style={{marginTop: "25px"}}
    >
      <Modal.Header closeButton style={{ fontSize: "20px" }}>
        <strong>
          Assignments' Progress of {courseValue} is:
        </strong>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Assignment completion status",
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

export default StudentAssignmentCompletionChart;