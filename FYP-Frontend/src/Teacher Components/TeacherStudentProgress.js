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


const data = [
  {id:1,name: "Ali",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:2,name: "Bilal",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:3,name: "Rimsha",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:4,name: "Arsalan",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:5,name: "Alia",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:6,name: "Alian",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:7,name: "Ahmad",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:8,name: "Furqan",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:9,name: "Alisha",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:10,name: "Aliya",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:11,name: "Alina",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:12,name: "Ali",assessment_1: 19,assessment_2: 6.0,assessment_3: 24},
  {id:13,name: "Aslam",assessment_1: 19,assessment_2: 6.0,assessment_3: 24}

];

function TeacherStudentProgress() {

   const [rows,setRows] = useState(data);
  const [editRowId,setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
     assessment_1: "",
     assessment_2: "",
     assessment_3: "", 
  }) 

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
    setEditRowId(row.id);

    const formValues = {   // storing values
      name: row.name,
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
      name: editFormData.name,
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
                  <StyledTableCell align="right"><a href="/teacher-student-progress?course_name=OOP">OOP</a></StyledTableCell>
                  <StyledTableCell align="right"><a href="/teacher-student-progress?course_name=FP">FP</a></StyledTableCell>
                  <StyledTableCell align="right"><a href="/teacher-student-progress?course_name=Database">Database</a></StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell rowSpan={2}>Student Name</StyledTableCell>

                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 1
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 2
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 3
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (20)
                  </StyledTableCell>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (30)
                  </StyledTableCell>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (20)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Fragment>
                  { editRowId === row.id ? 
                    <EditableTableRow 
                    editFormData = {editFormData}   // pass editformdata
                    handleEditFormChange = {handleEditFormChange}     // pass function to update form values in set state 
                    />   
                  :
                  <ReadOnlyTableRow 
                  row = {row}
                  handleEditClick = {handleEditClick}
                   />
                  }</Fragment> ) )} 
              </TableBody>
            </Table>
          </TableContainer>
          </form>
        </div>
      </div>
    </div>
  );
}






export default TeacherStudentProgress;

