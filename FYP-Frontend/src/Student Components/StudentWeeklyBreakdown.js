import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import StudentMenu from "./StudentMenu";
import { Button } from "antd";
import { useState } from "react";
import { Fragment } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {getcourses} from "../Actions/getcourse"
import { GetContent } from "../Actions/ContentMapping";


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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Intro to databases", "DB approach, DBMS Approach", "CH: 1,2","P1"),
  createData(1, "Relational dataModel", "RA, SQL","CH: 3","-"),
  createData(2, "Formal Query Language","Retrieval Queries","CH: 3,4","P2"),
  createData(2, "Normalization", "1NF, 2NF, 3NF","CH: 4,5","-"),
  createData(3, "ER Modeling", "ER,EER", "CH: 6","P3"),
];

function StudentWeeklyBreakdown() {
 const [studen_courses,setStudentCourses] = useState([]);

  const [rows,setRows] = useState([]);
  const [course_name,setCourseName]=useState();
  const [course_section,setCourse_Section]=useState();
  const [Loaded, setLoaded] = React.useState(false);
  const [addrow,setadder] = React.useState(false);

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
      setStudentCourses(success.data);
      setCourseName(success.data[0].cts_id.course_id.c_name  );
      setCourse_Section(success.data[0].cts_id.section);
      console.log("c name"+success.data[0].cts_id.course_id.c_name);
      // setLoaded(true);

      // localStorage.setItem('Tcourses',success.data);
      // console.log("Course is"+courses);
      
    // if(true){
      GetContent(
        success.data[0].cts_id.course_id.c_name,success.data[0].cts_id.section,
        (error) => {
        console.log("Error is"+error);
      },
      (success) => {
        // console.log("Success data"+success.data[0].c_name);
        setRows(success.data);
        console.log("data returned ");
        console.log(success.data);
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
      console.log(success.data);
      setLoaded(true)
    }
    )
  }
  const handlecourse_name=(e)=>{
    setCourseName(e)
  }
  const handlecourse_section=(e)=>{
    
    setCourse_Section(e)
  }

  return (
    <div>
      <StudentMenu/>
      <div
        style={{
          float: "right",
          height: "100vh",
          width: "75%",
          backgroundColor: "lightgray",
        }}
      >
        <div style={{ marginTop: "150px",marginLeft: "30px",marginRight: "30px" }}>
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
                      {studen_courses.map((course) => (              
                        <Dropdown.Item eventKey={course.cts_id.course_id.c_name}>{course.cts_id.course_id.c_name}</Dropdown.Item>
                      ))}
                      
                    </DropdownButton>

                   </StyledTableCell>

                   {/* <StyledTableCell>Section</StyledTableCell> */}

                   {/* <StyledTableCell>
                   <DropdownButton
                      position="Center"
                      title={course_section}
                      id="dropdown-menu-for-course-of-assessment-material"
                      onSelect={handlecourse_section}
                    >

                      {studen_courses.map((course) => (              
                        <Dropdown.Item eventKey={course.cts_id.section}>{course.cts_id.section}</Dropdown.Item>
                      ))}
                      
                    </DropdownButton>
                   </StyledTableCell> */}

                   <StyledTableCell >
                    <Button onClick={getcontentdetails}>
                      View
                    </Button>
                   </StyledTableCell>
                   
                   
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
              {
                rows ?
              
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.Week}>
                    <StyledTableCell component="th" scope="row">
                      {row.Week}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Topics_To_Be_Covered}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Topic_Details}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Reading_From_TextBook}</StyledTableCell>
                    <StyledTableCell align="right">{row.Project_Deliverable}</StyledTableCell>
                    {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
              :<div>Loading</div>
              }
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default StudentWeeklyBreakdown;
