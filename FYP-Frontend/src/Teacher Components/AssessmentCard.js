import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

function AssessmentCard () {
    // const [courseValue,setCourseValue] = useState('');
    // const [sectionValue,setSectionValue] = useState('');
    const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
    const [sectionDropdownTitle,setSectionDropdownTitle]=useState('Select Section');
    const [typeDropdownTitle,setTypeDropdownTitle]=useState('Select Type');

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

    const handleSelectType=(e)=>{
        
        setTypeDropdownTitle(e)
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
         src="https://picsum.photos/id/20/3670/2462"
          class="card-img-top"
          alt="..."
          style={{ height: 200 }}
        />
        <div class="card-body">
          <h5 class="card-title"> Assessment</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }} >
      <DropdownButton
        position="Center"
        title={courseDropdownTitle}
        id="dropdown-menu-for-course-of-assessment"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Database">Database</Dropdown.Item>
        <Dropdown.Item eventKey="Data WareHouse">Data WareHouse</Dropdown.Item>
        <Dropdown.Item eventKey="Advanced Database">
          Advanced Database
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        position="Center"
        title={sectionDropdownTitle}
        id="dropdown-menu-for-section-of-assessment"
        onSelect={handleSelectSection}
      >
        <Dropdown.Item eventKey="BCS-6A">BCS-6A</Dropdown.Item>
        <Dropdown.Item eventKey="BCS-8A"> BCS-8A </Dropdown.Item>
        <Dropdown.Item eventKey="BCS-8B"> BCS-8B </Dropdown.Item>
      </DropdownButton>

          </li>


          <li class="list-group-item">
      <DropdownButton
        position="Center"
        title={typeDropdownTitle}
        id="dropdown-menu-for-assessment-type"
        onSelect={handleSelectType}
      >
        <Dropdown.Item eventKey="assignment">Assignments</Dropdown.Item>
        <Dropdown.Item eventKey="quiz">Quiz</Dropdown.Item>
      </DropdownButton>
          </li>
        </ul>
        
        <div class="card-body" style={{margin:"auto"}}>
          <a href="/teacher-upload-assessments" params={{typeDropdownTitle}} class="btn btn-primary">
            OPEN
        </a>
        </div>
        </div>
     </div>
    </div>
);
}

export default AssessmentCard;