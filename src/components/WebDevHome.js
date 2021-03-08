import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: colors.primary,
  },
}));

const WebDevHome = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={(classes.paper, classes.header)}>
              Web Development
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Project 1</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Project 2</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Project 3</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Project 4</Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default WebDevHome;
