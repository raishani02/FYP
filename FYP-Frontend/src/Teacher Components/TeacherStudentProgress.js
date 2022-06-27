import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Button} from 'antd';
import TableRow from "@mui/material/TableRow";
import React, { Fragment, useState } from "react";
import TeacherMenu from "./TeacherMenu";
import ReadOnlyTableRow from "./ReadOnlyTableRow";
import EditableTableRow from "./EditableTableRow";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {getcourses} from "../Actions/getcourse";
import {Getassessments} from "../Actions/Assessments"
// import { GetContent } from "../Actions/ContentMapping";
// import { Button } from "antd";
import {getStudents} from "../Actions/GetStudents";
import {getSubmissions} from "../Actions/GetStudents";


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


// const data = [
//   {id:1,student_rollNo: "Ali",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
//   {id:2,student_rollNo: "Bilal",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
//   {id:3,student_rollNo: "Rimsha",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
//   {id:4,student_rollNo: "Arsalan",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  
// ];

function TeacherStudentProgress() {

   const [rows,setRows] = useState([]);
  const [editRowId,setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    student_rollNo: ""
  }) 

  const [teacher_courses,setTeacherCourses] = useState([]);
 const [course_name,setCourseName]=useState();
 const [course_section,setCourse_Section]=useState();
 const [teacher_assessments,setTeacherAssessment] = useState([]);
 const [assessment_name,setTeacherAssessmentName] = useState();
 const [assessment_id,setTeacherAssessmentId] = useState();
 const [enrolled_students,setEnrolled_Students] = useState([]);
 const [viewassessment,selectViewAssessment]= useState(false);
 const [submissions,setSubmissions]=useState([]);


 const [Loaded, setLoaded] = React.useState(false);

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


      // Getassessments(
      //   success.data[0].course_id.c_name,success.data[0].section,
      //   (errorr)=>{
      //     console.log(errorr);
      //   },
      //   (success)=>{
      //     console.log(success.data);
      //     setTeacherAssessment(success.data);
      //     setTeacherAssessmentName(success.data[0].assessment_name);
      //     setLoaded(true);

      //   }
      // )
    }
    // } 
  );
  },[ref]);

  const getsassessments=()=>{
    Getassessments(
      course_name,course_section,
      (errorr)=>{
        console.log(errorr);
      },
      (success)=>{
        console.log(success.data);
        setTeacherAssessment(success.data);
        // console.log()
        if(success.data[0])
        {
          setTeacherAssessmentName(success.data[0].assessment_name);
          setLoaded(true);
        }
        

      }
    )
  }
  const handlecourse_name=(e)=>{
    setCourseName(e)
    // console.log("handle name"+course_name);
    selectViewAssessment(false);
    
  }

  const handlecourse_section=(e)=>{
    // console.log(e);
    //setSectionValue(e)
    setCourse_Section(e);
    // console.log("handle section"+course_section);
    getsassessments();
    selectViewAssessment(true);
    setEnrolled_Students(null);
  }

  const handleAssessmentName=(e,assessment)=>{

    setTeacherAssessmentName(e);
    // console.log("Assessment id in front is"+e+e);
    setTeacherAssessmentId(e);
    // console.log(e);
    console.log("assessment_is"+assessment_id);

  }


  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("student_rollNo");     
    const fieldValue = event.target.value;      

    const newFormData = {...editFormData };
    newFormData[fieldName] = fieldValue;          // set value against respective field

    setEditFormData(newFormData);         // set updated value
  }


  const handleEditClick = (event, row) => {
    event.preventDefault();
    setEditRowId(row.id);

    const formValues = {   // storing values
      student_rollNo: row.student_rollNo,
      assessment_1: row.assessment_1,  
      assessment_2: row.assessment_2,
      assessment_3: row.assessment_3, 
    }

    setEditFormData(formValues);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRow = {   // save values
      id: editRowId,
      student_rollNo: editFormData.student_rollNo,
      assessment_1: editFormData.assessment_1,
      assessment_2: editFormData.assessment_2,
      assessment_3: editFormData.assessment_3, 
    }

    const newRow = [...rows];

    //find index of updating row
    const index= rows.findIndex((row) => row.id === editRowId)

    // pass index to store edited row
    newRow[index] = editedRow

     // now hide editable row, as we are donw with editing
     setRows(newRow);
     setEditRowId(null);
  }

  const handleView = ()=>{

    console.log("names in progress are "+course_name+course_section);
    getStudents(
      course_name,course_section,
      (error) => {
      console.log("Error is"+error);
    },
    (success) => {
      // console.log("Success data"+success.data[0].c_name);

      console.log("data returned ");
      // localStorage.setItem('Tcourses',success.data);
      console.log("Students is"+success.data[0].student_rollNo);
      setEnrolled_Students(success.data);
      setRows(success.data);
      setLoaded(true);
    }
    )

    getSubmissions(
      course_name,course_section,assessment_id,
      (error) => {
      console.log("Error is"+error);
    },
    (success) => {
      // console.log("Success data"+success.data[0].c_name);

      console.log("data returned ");
      // localStorage.setItem('Tcourses',success.data);
      console.log("Students is"+success.data[0]);
      setSubmissions(success.data);
      // setRows(success.data);

      setLoaded(true);
    }
    )


    // selectViewAssessment(false);
  }


  return (
    <div>
     <div style={{position: "fixed" ,}}> <TeacherMenu /> </div>
      <div
        style={{
          float: "right",
          height: "100%",
          width: "75%",
          backgroundColor: "lightgray",
        }}
      >
        <div style={{ marginTop: "120px" ,marginLeft: "30px",marginRight: "30px" }}>
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
                        <Dropdown.Item eventKey={course.course_id.c_name} >{course.course_id.c_name}</Dropdown.Item>
                      ))}
                    </DropdownButton>

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
                      
                    </DropdownButton>

                   </StyledTableCell>
                  
                    <StyledTableCell>Assessment</StyledTableCell>
                    { viewassessment ?
                    <StyledTableCell>
                      {/* {console.log("count"+teacher_assessments[0])} */}
                      {teacher_assessments[0] ?
                    <DropdownButton
                        position="Center"
                        title={assessment_name}
                        id="dropdown-menu-for-course-of-assessment-material"
                        onSelect={handleAssessmentName}
                      >
                       
                        {teacher_assessments.map((assessment) => (              
                          <Dropdown.Item eventKey={assessment._id} >{assessment.assessment_name}</Dropdown.Item>
                        ))}
                      </DropdownButton>
                    :<></>
                  }
                    </StyledTableCell>
                    :<></>
                    }
                   <StyledTableCell >
                    <Button onClick={handleView}>
                      View
                    </Button>
                   </StyledTableCell>
                    </TableRow>
                <TableRow>
                  <StyledTableCell rowSpan={2}>Roll No</StyledTableCell>
                  {assessment_name ?
                  <StyledTableCell align="center" colSpan={2}>
                    {assessment_name}
                  </StyledTableCell>
                  :<>Loading</>}
                  {/* <StyledTableCell align="center" colSpan={2}>
                    Quiz 2
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 3
                  </StyledTableCell> */}

                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (20)
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (30)
                  </StyledTableCell>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (20)
                  </StyledTableCell> */}
                </TableRow>
              </TableHead>
              {
                enrolled_students ? 
              
              <TableBody>

                {rows.map((row) => (
                  <Fragment>
                    {/* <Row>{}</Row> */}
                    {console.log(row.student_rollNo+row._id )}
                  { editRowId === row._id ? 
                    <EditableTableRow 
                    editFormData = {editFormData}   // pass editformdata
                    handleEditFormChange = {handleEditFormChange}     // pass function to update form values in set state 
                    />   
                  :
                  <ReadOnlyTableRow 
                  row = {row}
                  handleEditClick = {handleEditClick}
                   />
                  }
                  {/* <textarea readonly>{row.student_rollNo}</textarea> */}
                  {/* <textarea readonly>{row.student_rollNo}</textarea> */}

                  </Fragment> ) )}  
              </TableBody>:
              <>No Student data Found</>
              }
            </Table>
          </TableContainer>
          </form>
        </div>
      </div>
    </div>
  );
}






export default TeacherStudentProgress;

