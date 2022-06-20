import React from 'react';
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const StudentSidebar = () => {
  return (
    <div style={{ display: 'flex', height: '80vh', overflow: 'scroll initial' ,marginTop:"55px"}}>
        
      <CDBSidebar textColor="#fff" backgroundColor="#333">

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          
          <Avatar
                alt="Minahil"
                src="/images/minahil.jpeg"
                sx={{
                    dispaly: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 70,
                    height: 70,
  
                    mr: 4,
                    ml: 8,
                  }}
              />
              
              <br></br> <b style={{ marginLeft: "45px", color:"white", fontSize:18 }}>Minahil Areej</b>
            <br></br>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                    
             </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="home"> 
                <Link to="/student-home">
                Home
              </Link> </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="book" >
                <Link to="/student-courses"> 
                 Courses
              </Link></CDBSidebarMenuItem>
            
              <CDBSidebarMenuItem icon="chart-bar">
              <Link to="/student-leader-board">
                LeaderBoard
              </Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="chart-line">
              <Link to="/student-progress">
                Student's Progress
              </Link>
              </CDBSidebarMenuItem>
           
              <CDBSidebarMenuItem icon="list">
              <Link to="/student-weekly-breakdown">
                Weekly Breakdown
              </Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="sticky-note">
              <Link  to="/recommended-material">
                Recommended Material
              </Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="copy">
              <Link to="/student-assessments">
                Assessments
              </Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="sign-out-alt">
              <Link to="/login" >
                Logout
              </Link>
              </CDBSidebarMenuItem>

          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default StudentSidebar;