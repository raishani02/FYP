import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

function RecommendedMaterial () {
    // const [courseValue,setCourseValue] = useState('');
    // const [sectionValue,setSectionValue] = useState('');
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
          <h5 class="card-title"> Recommended Material</h5>
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
          <a href=" " class="btn btn-primary">
            OPEN
          </a>
        </div>
        </div>
     </div>
    </div>
);
}

export default RecommendedMaterial;