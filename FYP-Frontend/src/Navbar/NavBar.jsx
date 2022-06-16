import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const usestyles = makeStyles((theme) => ({
  link: {
    color: "black",
    padding: "8px",
    textDecoration: "none",
    fontFamily: 'El Messiri',
    fontWeight:1000,
    fontSize: 24,
  },
}));

const TopMenu = () => {
  const classes = usestyles();
  return (
    <div>
      <AppBar position="static" color="default" style={{ height: "55px" }}>
        <Toolbar>
          

          <Typography variant="h6">
            <Link to="/login" className={classes.link}>
              LOGIN
            </Link>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
