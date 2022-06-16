import BookIcon from "@mui/icons-material/Book";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ListIcon from "@mui/icons-material/List";
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from "@mui/icons-material/Logout";
import { teal} from '@mui/material/colors';
import { Avatar, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
    border: "12px",
    borderColor: "yellow",
    fontSize: "large",
  },
});

function TeacherMenu() {
  const classes = useStyles();
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
        }}
      >
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item>
              <Avatar
                alt="Ali Mohsin"
                src="/images/ali.jpg"
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  color: "white",  
                  mr: 4,
                  ml: 12,
                }}
              />

              <br />
            </Grid>

            <b style={{ marginLeft: "95px", color: "white", fontSize:18 }}>Ishaq Raza</b>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}><br /></Grid>
            <Grid item>
              <HomeIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/teacher-home">
                Home
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <BookIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/teacher-courses">
                Courses
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <LeaderboardIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/teacher-leader-board">
                LeaderBoard
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <CheckCircleOutlineIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/teacher-student-progress">
                StudentProgress
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <ListIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/teacher-weekly-breakdown">
                Content Mapping
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <AssignmentIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/teacher-assessments">
                Assessments
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item>
              <LogoutIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link to="/login" className={classes.link}>
                Logout
              </Link>
              <br />
              <br />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default TeacherMenu;
