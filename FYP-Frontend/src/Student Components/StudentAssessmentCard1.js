import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
//import { MenuItem } from '@mui/material';


let course = "Select Course";

const StudentAssessmentCard1 = () => {
 
        // const pages = [
        //     { name: 'Assignment Details', link: '/student-upload-assignment-details' },
        //     { name: 'Quiz Details', link: '/student-upload-quiz-details' },
        //     { name: 'Deliverable Details', link: '/student-upload-deliverable-details' },

        //   ];
      
      
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
    
          const [data,setData] = useState({
            course_name:"",
            type:"",
          });

          const handlefile = (e) =>{     
            setData({
                      course_name:courseDropdownTitle,
                       type:typeDropdownTitle
                        });
          console.log("dataaaaaaaaaaaa: ")
          for (let [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`);
          }
          }

    
    return (
      <div>
        <div className="container">
          <div
            class="card border-primary "
            style={{
              width: "350px",
              height: "450px",
            }}
          >
            <img
              src="https://picsum.photos/id/20/3670/2462"
              class="card-img-top"
              alt="..."
              style={{ height: 200 }}
            />
            <div class="card-body">
              <h5 class="card-title" style={{textAlign:"center"}}> <strong>Upload Assessment</strong></h5>
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
                  onSelect={event => {handleSelect(event);  handlefile()}}
                >
                  <Dropdown.Item eventKey="Programming Fundamental">Programming Fundamental</Dropdown.Item>
                  <Dropdown.Item eventKey="Data WareHouse">
                    Data WareHouse
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Advanced Database">
                    Advanced Database
                  </Dropdown.Item>
                </DropdownButton>
    
                {/* <DropdownButton
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
                </DropdownButton> */}
           </li>
            </ul>
            <div class="card-body" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>

              <>
             { courseDropdownTitle!= course ? 
             <DropdownButton
             position="Center"
             title={typeDropdownTitle}
             id="dropdown-menu-for-assessment-type"
              onSelect={event => {handleSelectType(event);  handlefile()}}
           >
             {/* onSelect={handleSelectType} onChange = {handlefile} */}

             <Dropdown.Item eventKey="Assignment">Assignment</Dropdown.Item>
             <Dropdown.Item eventKey="Quiz"> Quiz </Dropdown.Item>
             <Dropdown.Item eventKey="Deliverable"> Project Deliverable </Dropdown.Item>

           </DropdownButton> 
           : " "
              }
            </>   

          <> 
          { typeDropdownTitle === "Assignment" &&  courseDropdownTitle!= course ? 
          <Link to='/student-upload-assignment-details'  state={{ from: data }}>
          <Button >
                 View
          </Button>
                 {/* {console.log (typeDropdownTitle + "dataaaaaa is me: " )} */}
          </Link> 
          : typeDropdownTitle === "Quiz" && courseDropdownTitle!= course ? 
          <Link to='/student-upload-quiz-details'  state={{ from: data }}>
          <Button>
                 View
          </Button>
          </Link> 
          : typeDropdownTitle === "Deliverable" &&  courseDropdownTitle!= course ? 
          <Link to='/student-upload-deliverable-details'  state={{ from: data }}>
          <Button>
                 View
          </Button>
          </Link> 
          : " "
}
          </>

              </div>
    
          </div>
        </div>
      </div>
    );
   }; 
    
export default StudentAssessmentCard1;
