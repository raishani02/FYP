import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import TeacherMenu from "./TeacherMenu";
import { useState } from "react";
import { Fragment } from "react";
import EditableBreakdownTable from "./EditableBreakdownTable";
import ReadOnlyBreakdownTable from "./ReadOnlyBreakdownTable";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {getcourses} from "../Actions/getcourse"
import { GetContent } from "../Actions/ContentMapping";
import { Button } from "antd";
import { addContent } from "../Actions/ContentMapping";
import {EditContent} from "../Actions/ContentMapping" 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.dark,
    fontFamily: 'El Messiri',
    color: theme.palette.common.black,
    fontSize: 20,
    fontWeight:1000,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: 'BlinkMacSystemFont',
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
}));



function TeacherWeeklyBreakdown() {
  const [rows,setRows] = useState([]);
 const [editRowId,setEditRowId] = useState(null);
 const [editFormData, setEditFormData] = useState({
  Week: "",
  Topics_To_Be_Covered: "",
  Topic_Details: "",
  Reading_From_TextBook: "", 
  Project_Deliverable: "",
 }) 
 const [teacher_courses,setTeacherCourses] = useState([]);
 const [course_name,setCourseName]=useState();
 const [course_section,setCourse_Section]=useState();
 const [Loaded, setLoaded] = React.useState(false);
 const [addrow,setadder] = React.useState(false);

 

 const handlecourse_name=(e)=>{
  setCourseName(e)
}

const [ref, setref] = React.useState(true)
  React.useEffect(()=>{
    console.log("in useeffect");
    getcourses(
      (error) => {
      console.log("Error is"+error);
      setLoaded(true)
    },
    (success) => {
      // console.log("Success data"+success.data[0].course_id.c_name);
      console.log(success.data);
      setTeacherCourses(success.data);
      setCourseName(success.data[0].course_id.c_name  );
      setCourse_Section(success.data[0].section);
      console.log("c name"+success.data[0].course_id.c_name);
      // setLoaded(true);

      // localStorage.setItem('Tcourses',success.data);
      // console.log("Course is"+courses);
      
    // if(true){
      GetContent(
        success.data[0].course_id.c_name,success.data[0].section,
        (error) => {
        console.log("Error is"+error);
      },
      (success) => {
        // console.log("Success data"+success.data[0].c_name);
        setRows(success.data);
        console.log("data returned ");
        // localStorage.setItem('Tcourses',success.data);
        // console.log("Course is"+courses);
        setLoaded(true)
      }
      )
    }
    // } 
  );
  },[ref]);

  const getcontentdetails =()=>{
    console.log("name and section"+course_name + course_section);
    GetContent(
      course_name,course_section,
      (error) => {
      console.log("Error is"+error);
    },
    (success) => {
      // console.log("Success data"+success.data[0].c_name);
      setRows(success.data);
      console.log("data returned ");
      // localStorage.setItem('Tcourses',success.data);
      // console.log("Course is"+courses);
      setLoaded(true)
    }
    )
  }

  const handlecourse_section=(e)=>{
    // console.log(e);
    //setSectionValue(e)
    setCourse_Section(e)
  }
 const handleEditFormChange = (event) => {
   event.preventDefault();
   const fieldName = event.target.getAttribute("name");     
   const fieldValue = event.target.value;          

   const newFormData = {...editFormData };
   newFormData[fieldName] = fieldValue;          // set value against respective field

   setEditFormData(newFormData);         // set updated value

 }


 const handleEditClick = (event, row) => {
   event.preventDefault();
   setEditRowId(row._id);
  //  console.log("id in edit"+row._id);
   const formValues = {   // storing values
    Week: row.Week,
    Topics_To_Be_Covered: row.Topics_To_Be_Covered,  
    Topic_Details: row.Topic_Details,
    Reading_From_TextBook: row.Reading_From_TextBook, 
    Project_Deliverable: row.Project_Deliverable,
   }

   setEditFormData(formValues);
 }

 const handleEditFormSubmit = (event) => {
   event.preventDefault();

   if(!addrow){
    const editedRow = {   // save values
      _id: editRowId,
      Week: editFormData.Week,
       Topics_To_Be_Covered: editFormData.Topics_To_Be_Covered,
       Topic_Details: editFormData.Topic_Details,
       Reading_From_TextBook: editFormData.Reading_From_TextBook, 
       Project_Deliverable: editFormData.Project_Deliverable,
    }
 
    const newRow = [...rows];
 
    //find index of updating row
    const index= rows.findIndex((row) => row._id === editRowId)
 
    // pass index to store edited row
    newRow[index] = editedRow

    EditContent(
      editedRow,
      (errorr)=>{
        console.log(errorr);
      },
      (success)=>{
        console.log("updated"+success);
      }
    )
 
     // now hide editable row, as we are donw with editing
     setRows(newRow);
     setEditRowId(null);
   }
   else{
    // console.log("i am in ");
    const newrow = {   // save values
      course_name:course_name,
      course_section:course_section,
      Week: editFormData.Week,
       Topics_To_Be_Covered: editFormData.Topics_To_Be_Covered,
       Topic_Details: editFormData.Topic_Details,
       Reading_From_TextBook: editFormData.Reading_From_TextBook, 
       Project_Deliverable: editFormData.Project_Deliverable,
    }

    console.log("course name"+ course_name+course_section);
  
    addContent(
      newrow,
      (errorr)=>{
        console.log("content error");

        console.log(errorr);
  
      },
      (success)=>{
        console.log("content added");

        console.log(success);
      }
    )
    setadder(false);
    setEditRowId(null);

   }
    
 }

 

 const handleadder=()=>{
  console.log("in the adder");
  // const [addrow,setadder] = React.useState(false);
  setadder(true);
 }

 
 
 const handleDeleteClick = (event, row) => {
  // event.preventDefault();

  console.log("delete row is"+row);

 }

//  const  = (event,row) => {
//   // event.preventDefault();
//   console.log("Deleting id is"+row);
//       const newRows = [...rows];
    
  
//       // const index = rows.findIndex((row) => row._id === rowId);
  
//       // newRows.splice(index, 1);  // delete only 1 row of repective index 
  
//       setRows(newRows);
//     };

 return (
   <div>
    
     <div style={{ position: "fixed" }}>
       {" "}
       <TeacherMenu />{" "}
     </div>
     {Loaded ?
     <div
       style={{
         float: "right",
         height: "100%",
         width: "75%",
         backgroundColor: "lightgray",
       }}
     >
       <div
         style={{ marginTop: "120px", marginLeft: "30px", marginRight: "30px" }}
       >
         <form onSubmit={handleEditFormSubmit}>
           <TableContainer component={Paper}>
             <Table sx={{ minWidth: 700 }} aria-label="customized table">
               <TableHead>
                 <TableRow>
                   <StyledTableCell>Courses</StyledTableCell>
                   <StyledTableCell align="right">
                   <DropdownButton
                      position="Center"
                      title={course_name}
                      id="dropdown-menu-for-course-of-assessment-material"
                      onSelect={handlecourse_name}
                    >
                      {teacher_courses.map((course) => (              
                        <Dropdown.Item eventKey={course.course_id.c_name}>{course.course_id.c_name}</Dropdown.Item>
                      ))}
                      {/* <Dropdown.Item eventKey="Data WareHouse">Data WareHouse</Dropdown.Item>
                      <Dropdown.Item eventKey="Advanced Database">
                        Advanced Database
                      </Dropdown.Item> */}
                    </DropdownButton>

                     {/* <a href="/teacher-student-progress?course_name=OOP">OOP</a> */}

                   </StyledTableCell>

                   <StyledTableCell>Section</StyledTableCell>

                   <StyledTableCell>
                   <DropdownButton
                      position="Center"
                      title={course_section}
                      id="dropdown-menu-for-course-of-assessment-material"
                      onSelect={handlecourse_section}
                    >

                      {teacher_courses.map((course) => (              
                        <Dropdown.Item eventKey={course.section}>{course.section}</Dropdown.Item>
                      ))}
                      {/* <Dropdown.Item eventKey="CS-1A">CS-1A</Dropdown.Item>
                      <Dropdown.Item eventKey="BCS-2B">BCS-2B</Dropdown.Item>
                      <Dropdown.Item eventKey="BCS-5A">
                      BCS-5A
                      </Dropdown.Item> */}
                    </DropdownButton>
                   </StyledTableCell>

                   <StyledTableCell >
                    <Button onClick={getcontentdetails}>
                      View
                    </Button>
                     {/* <a href="/teacher-student-progress?course_name=FP">View</a> */}
                   </StyledTableCell>
                   <StyledTableCell >
                   <Button onClick={handleadder}>Add</Button>
                   </StyledTableCell >
                   {/* <StyledTableCell align="right">
                     <a href="/teacher-student-progress?course_name=Database">
                       Database
                     </a>
                   </StyledTableCell> */}
                 </TableRow>
                 <TableRow>
                   <StyledTableCell>Week</StyledTableCell>
                   <StyledTableCell align="right">
                     Topics to be Covered
                   </StyledTableCell>
                   <StyledTableCell align="right">Topic Detail</StyledTableCell>
                   <StyledTableCell align="right">
                     Reading(TextBook)
                   </StyledTableCell>
                   <StyledTableCell align="right">
                     Project Deliverables
                   </StyledTableCell>
                   <StyledTableCell align="right"></StyledTableCell>
                 </TableRow>
               </TableHead>
               {rows ?
               <TableBody>
                 {rows.map((row) => (
                   <Fragment>
                    
                     {editRowId === row._id ? (
                       <EditableBreakdownTable
                         editFormData={editFormData} // pass editformdata
                         handleEditFormChange={handleEditFormChange} // pass function to update form values in set state
                        
                         />
                     ) : (
                       <ReadOnlyBreakdownTable
                         row={row}
                         handleDeleteClick = {handleDeleteClick}
                         handleEditClick = {handleEditClick}
                       />
                     )}
                   </Fragment>
                 ))}
                 
                  
               </TableBody>
                :
                <>No Data Found Add new Data </>
                }
                { addrow &&<TableBody>
                <Fragment>
                  <EditableBreakdownTable
                         editFormData={editFormData} // pass editformdata
                         handleEditFormChange={handleEditFormChange} // pass function to update form values in set state
                       />
                       </Fragment>
                       </TableBody>
                }
             </Table>
           </TableContainer>
         </form>
       </div>
     </div>
    :
    <div>Loading</div>
    }
    {/* {setref(false)} */}
   </div>
 );
}
export default TeacherWeeklyBreakdown;
