import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";
import React from "react";
import Paragraph from "../../components/paragraph";

const colors = {
  blue: `#335c67`,
  yellow: `#fff3b0`,
  orange: `#e09f3e`,
  red: `#9e2a2b`,
  maroon: `#540b0e`,
  grey1: `#cfdbd5`,
  grey2: `#e8eddf`,
  primary: `#f5cb5c`,
  dark: `#242423`,
  darkGrey: `#333533`,
};

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

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Paragraph />
        <Grid container spacing={3}>
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

          <Grid item xs={12} sm={6}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={(classes.paper, classes.header)}>
                    Photography
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>Corporate</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>Portrait</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>Street</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>Landscape</Paper>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
