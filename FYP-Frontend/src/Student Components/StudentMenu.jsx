import BookIcon from "@mui/icons-material/Book";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from '@mui/icons-material/Assignment';
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

function StudentMenu() {
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
                src="/images/minahil.jpeg"
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 70,
                  height: 70,

                  mr: 4,
                  ml: 12,
                }}
              />

              
              
            </Grid>

            <b style={{ marginLeft: "90px",color:"white", fontSize:18 }}>Minahil Areej</b>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}><br /></Grid>
            <Grid item>
            <HomeIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
            />
              <Link className={classes.link} to="/student-home">
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
              <Link className={classes.link} to="/student-courses">
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
              <Link className={classes.link} to="/student-leader-board">
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
              <Link className={classes.link} to="/student-progress">
                Student's Progress
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
              <Link className={classes.link} to="/student-weekly-breakdown">
                WeeklyBreakdown
              </Link>
              <br />
              <br />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item>
              <AssignmentTurnedInIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", mr: 4, color: "white" }}
              />
              <Link className={classes.link} to="/recommended-material">
                Recommended Material
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
              <Link className={classes.link} to="/student-assessments">
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
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default StudentMenu;
