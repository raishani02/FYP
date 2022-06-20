import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import {Row, Col, Button, Breadcrumb, Menu, Modal, Input} from 'antd';
import TableRow from "@mui/material/TableRow";
import React from "react";
import TeacherMenu from "./TeacherMenu";

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
  createData("Ali", 19, 6.0, 24),
  createData("Bilal", 17, 9.0, 37),
  createData("Rimsha", 16, 16.0, 24),
  createData("Arsalan", 15, 3.7, 67),
  createData("Alina", 19, 16.0, 49),
  createData("Ali", 19, 6.0, 24),
  createData("Bilal", 17, 9.0, 37),
  createData("Rimsha", 16, 16.0, 24),
  createData("Arsalan", 15, 3.7, 67),
  createData("Alina", 19, 16.0, 49),
  createData("Ali", 19, 6.0, 24),
  createData("Bilal", 17, 9.0, 37),
  createData("Rimsha", 16, 16.0, 24),
  createData("Arsalan", 15, 3.7, 67),
  createData("Alina", 19, 16.0, 49),
];

function TeacherStudentProgress() {
  return (
    <div>
     <div style={{position: "fixed" ,}}> <TeacherMenu /> </div>
      <div
        style={{
          float: "right",
          height: "100vh",
          width: "75%",
          backgroundColor: "lightgray",
        }}
      >
        <div style={{ marginTop: "120px" ,marginLeft: "30px",marginRight: "30px" }}>
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
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.fat}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.carbs}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button type='default' style={{marginTop: 12, marginLeft:400}}>Update</Button>
        </div>
      </div>
    </div>
  );
}

export default TeacherStudentProgress;
