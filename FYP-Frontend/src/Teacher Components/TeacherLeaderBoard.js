import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { red } from '@mui/material/colors';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Breadcrumb, Menu, Modal, Input} from 'antd';
import React from "react";
import TeacherMenu from "./TeacherMenu";
import { fontFamily } from "@mui/system";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Ali"),
  createData("Bilal"),
  createData("Rimsha"),
  createData("Arsalan"),
  createData("Alina"),
  createData("Ali"),
  createData("Bilal"),
  createData("Rimsha"),
  createData("Arsalan"),
  createData("Alina"),
  createData("Ali"),
  createData("Bilal"),
  createData("Rimsha"),
  createData("Arsalan"),
  createData("Alina"),
];

function TeacherLeaderBoard() {
  return (
    <div >
      <div style={{position: "fixed" ,}}> <TeacherMenu /> </div>
      
      <div
        style={{
          float: "right",
          height: "100vh",
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
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    <ThumbUpIcon
                      color="success"
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 4 }}
                    />
                    </StyledTableCell>
                  <StyledTableCell align="center">
                  <Badge bg="warning" text="danger">
                   <b>Gold</b>
                  </Badge>{' '}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <ThumbDownIcon
                      color="Danger"
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 4,color: red[900] }}
                  />   
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Badge bg="danger" text="dark">
                   <b>Bronze</b>
                  </Badge>{' '}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <ThumbUpIcon
                      color="success"
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 4 }}
                  />  
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Badge bg="secondary" text="light">
                   <b>Diamond</b>
                  </Badge>{' '}
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

export default TeacherLeaderBoard;
