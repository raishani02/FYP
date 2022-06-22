import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import TableContainer from "@mui/material/TableContainer";
import { red } from '@mui/material/colors';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import StudentMenu from "./StudentMenu";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.dark,
    fontFamily: 'El Messiri',
    color: theme.palette.common.black,
    fontSize: 20,
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


const records = [
  {name:"ali",quiz_marks:"60",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"90", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"ahmad",quiz_marks:"0",quiz_status:"notsubmitted", assignment_status:"submitted", assignment_marks:"20", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"zeeshan",quiz_marks:"60",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"90", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"mudassir",quiz_marks:"70",quiz_status:"submitted", assignment_status:"notsubmitted", assignment_marks:"0", project_deliverable_status:"submitted",project_deliverable_marks:"70"},
  {name:"arsalan",quiz_marks:"40",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"40", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"aslam",quiz_marks:"20",quiz_status:"submitted", assignment_status:"notsubmitted", assignment_marks:"0", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"bilal",quiz_marks:"50",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"60", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"shahzadi",quiz_marks:"60",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"90", project_deliverable_status:"submitted",project_deliverable_marks:"100"},
  {name:"minahil",quiz_marks:"90",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"45", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"rida",quiz_marks:"0",quiz_status:"notsubmitted", assignment_status:"notsubmitted", assignment_marks:"0", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"wajeeha",quiz_marks:"85",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"90", project_deliverable_status:"notsubmitted",project_deliverable_marks:"0"},
  {name:"mahnoor",quiz_marks:"100",quiz_status:"submitted", assignment_status:"submitted", assignment_marks:"75", project_deliverable_status:"submitted",project_deliverable_marks:"10"}
]



function StudentLeaderBoard() {
  return (
    <div>
      <StudentMenu />
      <div
        style={{
          float: "right",
          height: "100%",
          width: "75%",
          backgroundColor: "lightgray",
        }}
      >
        <div style={{ marginTop: "150px",marginLeft: "30px",marginRight: "30px"}}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Courses</StyledTableCell>
                  <StyledTableCell align="right"><a href="/teacher-leader-board?course_name=OOP">OOP</a></StyledTableCell>
                  <StyledTableCell align="right"><a href="/teacher-leader-board?course_name=FP">FP</a></StyledTableCell>
                  <StyledTableCell align="right"><a href="/teacher-leader-board?course_name=Database">Database</a></StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell rowSpan={2}><b>Student Name</b></StyledTableCell>

                  <StyledTableCell align="center" colSpan={2}>
                    <b>Quiz 1</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                  <b>Assignment-1</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                  <b>Project Deliverable-1</b>
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center"><b>Status</b></StyledTableCell>
                  <StyledTableCell align="center">
                  <b>Badge</b>
                  </StyledTableCell>
                  <StyledTableCell align="center"><b>Status</b></StyledTableCell>
                  <StyledTableCell align="center">
                  <b>Badge</b>
                  </StyledTableCell>
                  <StyledTableCell align="center"><b>Status</b></StyledTableCell>
                  <StyledTableCell align="center">
                  <b>Badge</b>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((record) => (
                  <StyledTableRow key={record.name}>
                    <StyledTableCell component="th" scope="row">
                      {record.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                       {  record.quiz_status === "notsubmitted" ?
                       <ThumbDownIcon
                      color="success"
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 4 }}
                    />
                 : 
                   <ThumbUpIcon
                  color="success"
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 4 }}
                />} 
                    
                    </StyledTableCell>
                  <StyledTableCell align="center">
                  {  record.quiz_marks === "100" ?
                  <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>
                  : record.quiz_marks <="50" ?
                  <Badge bg="danger" text="dark">
                  <b>Bronze</b>
                 </Badge>
                 :  record.quiz_marks > "50" && record.quiz_marks <="75"?
                  <Badge bg="warning" text="danger">
                   <b>Gold</b>
                  </Badge>
                  : 
                  <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>
                  
                  } 
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  {  record.assignment_status === "notsubmitted" ?
                       <ThumbDownIcon
                      color="success"
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 4 }}
                    />
                 : 
                   <ThumbUpIcon
                  color="success"
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 4 }}
                />}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  { record.assignment_marks === "100" ?
                    <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>
                  : record.assignment_marks <="50" ?
                  <Badge bg="danger" text="dark">
                  <b>Bronze</b>
                 </Badge>
                 :  record.assignment_marks > "50" && record.assignment_marks <="75"?
                  <Badge bg="warning" text="danger">
                   <b>Gold</b>
                  </Badge>
                  : 
                  <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>
                  
                  } 
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  {  record.project_deliverable_status === "notsubmitted" ?
                       <ThumbDownIcon
                      color="success"
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 4 }}
                    />
                 : 
                   <ThumbUpIcon
                  color="success"
                  fontSize="small"
                  sx={{ verticalAlign: "middle", mr: 4 }}
                />}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  {  record.project_deliverable_marks === "100" ?
                  <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>
                  : record.project_deliverable_marks <="50" ?
                  <Badge bg="danger" text="dark">
                  <b>Bronze</b>
                 </Badge>
                 :  record.project_deliverable_marks > "50" && record.project_deliverable_marks <="75"?
                  <Badge bg="warning" text="danger">
                   <b>Gold</b>
                  </Badge>
                  : 
                  <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>
                  } 
                  </StyledTableCell>
                   
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Button type='default' style={{marginTop: 12, marginLeft:400}}>Update</Button> */}
        </div>
      </div>
    </div>
  );
}

export default StudentLeaderBoard;
