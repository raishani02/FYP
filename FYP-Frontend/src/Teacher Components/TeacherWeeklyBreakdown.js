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
  {id: 1, Week: 1, Topics_To_Be_Covered:"Intro to databases" , Topic_Details:"DB approach", Reading_From_TextBook:"CH: 1,2",Project_Deliverable:"P1" },
  {id: 2, Week: 1, Topics_To_Be_Covered:"Relational dataModel" , Topic_Details:"RA, SQL", Reading_From_TextBook:"CH: 3,4",Project_Deliverable:"-" },
  {id: 3, Week: 2, Topics_To_Be_Covered:"Formal Query Language" , Topic_Details:"Retrieval Queries", Reading_From_TextBook:"CH: 4,5",Project_Deliverable:"P2" },
  {id: 4, Week: 2, Topics_To_Be_Covered:"Normalization" , Topic_Details:"1NF, 2NF, 3NF", Reading_From_TextBook:"CH: 5",Project_Deliverable:"P3" },
  {id: 5, Week: 3, Topics_To_Be_Covered:"ER Modeling" , Topic_Details:"ER,EER", Reading_From_TextBook:"CH: 6",Project_Deliverable:"P4" },
];

function TeacherWeeklyBreakdown() {

  const [rows,setRows] = useState(data);
 const [editRowId,setEditRowId] = useState(null);
 const [editFormData, setEditFormData] = useState({
  Week: "",
  Topics_To_Be_Covered: "",
  Topic_Details: "",
  Reading_From_TextBook: "", 
  Project_Deliverable: "",
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

   const editedRow = {   // save values
     id: editRowId,
     Week: editFormData.Week,
      Topics_To_Be_Covered: editFormData.Topics_To_Be_Covered,
      Topic_Details: editFormData.Topic_Details,
      Reading_From_TextBook: editFormData.Reading_From_TextBook, 
      Project_Deliverable: editFormData.Project_Deliverable,
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

 const handleDeleteClick = (rowId) => {
      const newRows = [...rows];
  
      const index = rows.findIndex((row) => row.id === rowId);
  
      newRows.splice(index, 1);  // delete only 1 row of repective index 
  
      setRows(newRows);
    };

 return (
   <div>
     <div style={{ position: "fixed" }}>
       {" "}
       <TeacherMenu />{" "}
     </div>
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
                     <a href="/teacher-student-progress?course_name=OOP">OOP</a>
                   </StyledTableCell>
                   <StyledTableCell align="right">
                     <a href="/teacher-student-progress?course_name=FP">FP</a>
                   </StyledTableCell>
                   <StyledTableCell align="right">
                     <a href="/teacher-student-progress?course_name=Database">
                       Database
                     </a>
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
               <TableBody>
                 {rows.map((row) => (
                   <Fragment>
                     {editRowId === row.id ? (
                       <EditableBreakdownTable
                         editFormData={editFormData} // pass editformdata
                         handleEditFormChange={handleEditFormChange} // pass function to update form values in set state
                       />
                     ) : (
                       <ReadOnlyBreakdownTable
                         row={row}
                         handleEditClick={handleEditClick}
                         handleDeleteClick = {handleDeleteClick}
                       />
                     )}
                   </Fragment>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
         </form>
       </div>
     </div>
   </div>
 );
}
export default TeacherWeeklyBreakdown;
