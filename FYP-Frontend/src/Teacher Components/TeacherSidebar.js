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

const TeacherSidebar = () => {
  return (
    <div style={{ display: 'flex', height: '80vh', overflow: 'scroll initial',marginTop:"55px" }}>
        
      <CDBSidebar textColor="#fff" backgroundColor="#333">

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          
          <Avatar
                alt="Ishaq"
                src="/images/ali.jpg"
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
              
              <br></br> <b style={{ marginLeft: "45px", color:"white", fontSize:18 }}>Ishaq Raza</b>
            <br></br>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                    
             </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="home"> 
                <Link to="/teacher-home">
                Home
              </Link> </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="book" >
                <Link to="/teacher-courses"> 
                 Courses
              </Link></CDBSidebarMenuItem>
            
              <CDBSidebarMenuItem icon="chart-bar">
              <Link to="/teacher-leader-board">
                LeaderBoard
              </Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="chart-line">
              <Link to="/teacher-student-progress">
                StudentProgress
              </Link>
              </CDBSidebarMenuItem>
           
              <CDBSidebarMenuItem icon="list">
              <Link to="/teacher-weekly-breakdown">
                Content Mapping
              </Link>
              </CDBSidebarMenuItem>

              <CDBSidebarMenuItem icon="copy">
              <Link to="/teacher-assessments">
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

export default TeacherSidebar;