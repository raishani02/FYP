import React from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";


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



const ReadOnlyBreakdownTable = ({row, handleEditClick,handleDeleteClick }) => {
    return(
        <StyledTableRow key={row.Week}>
                    <StyledTableCell component="th" scope="row">
                      {row.Week}
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      {row.Topics_To_Be_Covered}
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      {row.Topic_Details}
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      {row.Reading_From_TextBook}
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      {row.Project_Deliverable}
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      <Button onClick={(event) => handleEditClick (event,row)} style={{color:"blue"}}> <strong>Edit</strong> </Button>
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      <Button onClick={() => handleDeleteClick (row.id)} style={{color:"blue"}}> <strong>Delete</strong> </Button>
                    </StyledTableCell>

                  </StyledTableRow>
    )
} 



export default ReadOnlyBreakdownTable;