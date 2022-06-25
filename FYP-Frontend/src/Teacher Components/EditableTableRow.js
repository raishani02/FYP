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


const EditableTableRow = ({editFormData,handleEditFormChange}) => {
    return(
        // <StyledTableRow key={row.name}>
        <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <input type = "text" placeholder="Enter name..." name="name" value={editFormData.name} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                    <input type = "text" placeholder="Enter assessment_1 marks..." name="assessment_1" value={editFormData.assessment_1} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                    <input type = "text" placeholder="Enter assessment_2 marks..." name="assessment_2" value={editFormData.assessment_2} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                    <input type = "text" placeholder="Enter assessment_3 marks..." name="assessment_3" value={editFormData.assessment_3} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell  align="center">
                      <Button type="Submit"  style={{color:"blue"}}> <strong>Save</strong> </Button>
                    </StyledTableCell>
                  </StyledTableRow>
    )
}




export default EditableTableRow;