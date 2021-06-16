import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
// import { HOME_PHOTO_FULL } from "../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";
import colors from "./colors";
// import { useSelector, useDispatch } from "react-redux";
import eventImage from "../assets/photography/event/Header1.jpg";
import landscapeImage from "../assets/photography/landscape/Header1.jpg";
import portraitImage from "../assets/photography/portrait/Header1.jpg";
import streetImage from "../assets/photography/street/Header1.jpg";
import { white } from "kleur";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "10rem",
    width: "100%",
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: colors.white,
    backgroundColor: colors.blue,
  },
  event: {
    padding: theme.spacing(3),
    backgroundImage: `url(${eventImage})`,
    backgroundPosition: "center",
    textAlign: "center",
    color: "white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10rem",
    width: "100%",
    "&:hover, &:focus": {
      opacity: "75%",
      cursor: "pointer",
    },
  },
  landscape: {
    padding: theme.spacing(3),
    backgroundImage: `url(${landscapeImage})`,
    backgroundPosition: "center",
    textAlign: "center",
    position: "relative",
    color: "colors.white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10rem",
    width: "100%",
    "&:hover, &:focus": {
      opacity: "75%",
      cursor: "pointer",
    },
  },
  portrait: {
    padding: theme.spacing(3),
    backgroundImage: `url(${portraitImage})`,
    backgroundPosition: "center",
    textAlign: "center",
    position: "relative",
    color: "colors.white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10rem",
    width: "100%",
    "&:hover, &:focus": {
      opacity: "75%",
      cursor: "pointer",
    },
  },
  street: {
    padding: theme.spacing(3),
    backgroundImage: `url(${streetImage})`,
    backgroundPosition: "center",
    textAlign: "center",
    position: "relative",
    color: "colors.white",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "10rem",
    width: "100%",
    "&:hover, &:focus": {
      opacity: "75%",
      cursor: "pointer",
    },
  },
  text: {
    textAlign: "center",
    width: "85%",
    opacity: "70%",
    backgroundColor: "white",
    margin: "0 auto",
    color: "black",
    position: "relative",
    left: "0",
    right: "0",
    fontSize: "4rem",
    overflow: "hidden",
    // mixBlendMode: "screen",
  },
}));
// <Grid item xs={12} sm={state.home.photo.gridWidth}>

export default function PhotoHome(props) {
  const classes = useStyles(props);

  return (
    <Grid item xs={12} sm={12}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              style={{ width: "100%" }}
              className={(classes.paper, classes.header)}
              // onClick={() => fullChange()}
            >
              Photography
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={(classes.paper, classes.event)}>
              <h2 className={classes.text}>Event</h2>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={(classes.paper, classes.portrait)}>
              <h2 className={classes.text}>Portrait</h2>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={(classes.paper, classes.street)}>
              <h2 className={classes.text}>Street</h2>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={(classes.paper, classes.landscape)}>
              <h2 className={classes.text}>Nature</h2>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
