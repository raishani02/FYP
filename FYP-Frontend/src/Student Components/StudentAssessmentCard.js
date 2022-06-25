import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';

const StudentAssessmentCard = () => {
 
        const pages = [
            { name: 'Assignment Details', link: '/student-view-assignments-detail' },
            { name: 'Quiz Details', link: '/student-view-quiz-detail' },
            { name: 'Deliverable Details', link: '/student-view-deliverable-detail' },

          ];
      
          const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
          const [typeDropdownTitle,setTypeDropdownTitle]=useState('Select Type');
      
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
          <div className="container">
            <div
              class="card border-primary "
              style={{
                width: "350px",
                height: "350px",
              }}
            >
              <img
                src="https://picsum.photos/id/20/3670/2462"
                class="card-img-top"
                alt="..."
                style={{ height: 200 }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{textAlign:"center"}}> <strong>View Assessment</strong></h5>
              </div>
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <DropdownButton
                    position="Center"
                    title={courseDropdownTitle}
                    id="dropdown-menu-for-course-of-assessment"
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
      
                  <DropdownButton
                    position="Center"
                    title={typeDropdownTitle}
                    id="dropdown-menu-for-assessment-type"
                    onSelect={handleSelectType}
                  >
      
                      {pages.map((page) => (
                        <Link to={page.link} key={page.name}>
                          <MenuItem>
                            <div textAlign="center">{page.name}</div>
                          </MenuItem>
                        </Link>
                      ))}
                  </DropdownButton>
                </li>
      
              </ul>
            </div>
          </div>
        </div>
    );
}; 
    
export default StudentAssessmentCard;
