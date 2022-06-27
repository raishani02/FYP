import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//import { MenuItem } from '@mui/material';
import { Button } from 'react-bootstrap';

let course = "Select Course";
let section = "Select Section";

function AssessmentCard () {

    // const pages = [
    //   { name: 'Assignment', link: '/teacher-view-assignments-detail' },
    //   { name: 'Quiz', link: '/teacher-view-quiz-detail' },
    //   { name: 'Deliverable', link: '/teacher-view-deliverable-detail' },
    // ];

    const [courseDropdownTitle,setCourseDropdownTitle]=useState('Select Course');
    const [sectionDropdownTitle,setSectionDropdownTitle]=useState('Select Section');
    const [typeDropdownTitle,setTypeDropdownTitle]=useState('Select Type');
  //  const [typeDropdownTitle_,setTypeDropdownTitle_]=useState('Go To');

    const [data,setData] = useState({
      course_name:"",
      section:"",
      type:"",
    });

      const handleSelectSection=(e)=>{
        //console.log("data before selecting section: " +  sectionDropdownTitle)
        
        setSectionDropdownTitle(e)
      //  console.log("data after selecting section: " + e)
        //console.log("data after selecting sectionnn: " + courseDropdownTitle+ " "+sectionDropdownTitle)

      }
  
    const handleSelect=(e)=>{
      // console.log(e);
 
     //console.log("data before selecting course: " +  courseDropdownTitle)
      setCourseDropdownTitle(e)
     // console.log("data after selecting course: " +  courseDropdownTitle)

    }

    const handleSelectType=(e)=>{
     // console.log("data before selecting type: " + sectionDropdownTitle +" " +typeDropdownTitle)

        setTypeDropdownTitle(e)

        

         // console.log("data after selecting type: " + sectionDropdownTitle +" " +typeDropdownTitle)
      } 

      // const handleSelectType_=(e)=>{
      //  // console.log("data before selecting type: " + sectionDropdownTitle +" " +typeDropdownTitle)
  
      //     setTypeDropdownTitle_(e)
  
      //      // console.log("data after selecting type: " + sectionDropdownTitle +" " +typeDropdownTitle)
      //   } 


      const handlefile = (e) =>{     
        setData({
                  course_name:courseDropdownTitle,
                  section:sectionDropdownTitle,
                   type:typeDropdownTitle
                    });
      // console.log("dataaaaaaaaaaaa: ")
      // for (let [key, value] of Object.entries(data)) {
      //   console.log(`${key}: ${value}`);
      // }
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
              <Dropdown.Item eventKey="Programming Fundamental">Programming Fundamental</Dropdown.Item>
              <Dropdown.Item eventKey="Data WareHouse">
                Data WareHouse
              </Dropdown.Item>
              <Dropdown.Item eventKey="Advanced Database">
                Advanced Database
              </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              position="Center"
              title={sectionDropdownTitle}
              id="dropdown-menu-for-section-of-assessment"
              onSelect={event => {handleSelectSection(event);  handlefile()}} 
              
            >
              <Dropdown.Item eventKey="CS-1A">CS-1A</Dropdown.Item>
              <Dropdown.Item eventKey="BCS-8A"> BCS-8A </Dropdown.Item>
              <Dropdown.Item eventKey="BCS-8B"> BCS-8B </Dropdown.Item>
            </DropdownButton>
          </li>

        </ul>

        <div class="card-body" style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}>

              <>
               {  sectionDropdownTitle != section && courseDropdownTitle!= course ? 
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
        

            {/* <DropdownButton
              position="Center"
              title={typeDropdownTitle_}
              id="dropdown-menu-for-assessment-type"
              onSelect={handleSelectType_}
            >

              {pages.map((page) => (
          <Link to={page.link} key={page.name}  state={{ from: data }}>
            <MenuItem>             
              <div textAlign="center">{page.name}</div>
            </MenuItem>
          </Link>
        ))} 

            </DropdownButton> */}
     
      
      
          

            <> 
            { typeDropdownTitle === "Assignment" && sectionDropdownTitle != section && courseDropdownTitle!= course ? 
            <Link to='/teacher-view-assignments-detail'  state={{ from: data }}>
            <Button >
                   View
            </Button>
                   {/* {console.log (typeDropdownTitle + "dataaaaaa is me: " )} */}
            </Link> 
            : typeDropdownTitle === "Quiz" && sectionDropdownTitle != section && courseDropdownTitle!= course ? 
            <Link to='/teacher-view-quiz-detail'  state={{ from: data }}>
            <Button>
                   View
            </Button>
            </Link> 
            : typeDropdownTitle === "Deliverable" && sectionDropdownTitle != section && courseDropdownTitle!= course ? 
            <Link to='/teacher-view-deliverable-detail'  state={{ from: data }}>
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
}

export default AssessmentCard;