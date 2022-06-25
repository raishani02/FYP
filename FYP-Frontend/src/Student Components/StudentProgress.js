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
    fontWeight:1000,
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

function createData(name, assessment_1,assessment_2,assessment_3) {
  return { name, assessment_1,assessment_2,assessment_3 };
}

const rows = [
  createData("Quiz-1", 15, 20, 12),
  createData("Quiz-2", 23, 30, 23),
  createData("Quiz-3", 26, 30, 24),
  createData("Assignment-1", 30, 40, 36),
  createData("Assignmnet-2", 35, 45, 34),
];

function StudentProgress() {
  return (
    <div>
      <StudentMenu />
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
                  <StyledTableCell align="centre"><a href="/student-progress?course_name=OOP">OOP</a></StyledTableCell>
                  <StyledTableCell align="centre"><a href="/student-progress?course_name=FP">FP</a></StyledTableCell>
                  <StyledTableCell align="centre"><a href="/student-progress?course_name=Database">Database</a></StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell rowSpan={1}>Minahail Areej</StyledTableCell>

                  <StyledTableCell align="center" colSpan={1}>
                    Obtained Marks
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={1}>
                    Total Marks
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={1}>
                    Average
                  </StyledTableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell colSpan={1} align="center">
                      {row.assessment_1}
                    </StyledTableCell>
                    <StyledTableCell colSpan={1} align="center">
                      {row.assessment_2}
                    </StyledTableCell>
                    <StyledTableCell colSpan={1} align="center">
                      {row.assessment_3}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default StudentProgress;
