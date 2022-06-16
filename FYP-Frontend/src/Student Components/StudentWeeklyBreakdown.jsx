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
                  <StyledTableCell align="right"><a href="/student-weekly-breakdown?course_name=OOP">OOP</a></StyledTableCell>
                  <StyledTableCell align="right"><a href="/student-weekly-breakdown?course_name=FP">FP</a></StyledTableCell>
                  <StyledTableCell align="right"><a href="/student-weekly-breakdown?course_name=Database">Database</a></StyledTableCell>
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
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
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

export default StudentWeeklyBreakdown;
