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


const EditableBreakdownTable = ({editFormData,handleEditFormChange}) => {
    return(
        // <StyledTableRow key={row.name}>
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                    <input type = "text" placeholder="Enter Week..." name="Week" value={editFormData.Week} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    <input type = "text" placeholder="Enter Topics To Be Covered..." name="Topics_To_Be_Covered" value={editFormData.Topics_To_Be_Covered} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    <input type = "text" placeholder="Enter Topic Details..." name="Topic_Details" value={editFormData.Topic_Details} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    <input type = "text" placeholder="Enter Reading From TextBook..." name="Reading_From_TextBook" value={editFormData.Reading_From_TextBook} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    <input type = "text" placeholder="Enter Project Deliverable..." name="Project_Deliverable" value={editFormData.Project_Deliverable} onChange={handleEditFormChange} />
                    </StyledTableCell>
                    <StyledTableCell  align="right">
                      <Button type="Submit"  style={{color:"blue"}}> <strong>Save</strong> </Button>
                    </StyledTableCell>
                    </StyledTableRow>


 )
}




export default EditableBreakdownTable;