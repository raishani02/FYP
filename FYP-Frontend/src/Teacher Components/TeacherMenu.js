import {  Container, Grid } from "@mui/material";
import React from "react";
import TeacherSidebar from "./TeacherSidebar";


function TeacherMenu() {
  return (
    <div>
      <div
        style={{
          float: "left",
          height: "100vh",
          width: "25%",
          color: "white",
          backgroundColor: "#292938",
          fontFamily: 'Helvetica', 
           position:"fixed",
        }}
      >
        <TeacherSidebar />

       
      </div>
    </div>
  );
}

export default TeacherMenu;
