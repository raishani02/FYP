import {  Container, Grid } from "@mui/material";
import React from "react";
import StudentSidebar from "./StudentSidebar";

function StudentMenu() {
  return (
    <div>
      <div
        style={{
          float: "left",
          height: "100%",
          width: "25%",
          color: "white",
          backgroundColor: "#292938",
          fontFamily: 'Helvetica', 
          position:"fixed",  
        }}
      >
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
        

            <StudentSidebar />


          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default StudentMenu;
