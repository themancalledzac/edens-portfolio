import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
// import { HOME_PHOTO_FULL } from "../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";
import colors from "./colors";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_PHOTO_STATE,
  CHANGE_WIDTH,
  PHOTO_ABOUT,
  PHOTO_TITLE,
  RESET,
} from "../utils/actions";

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
// <Grid item xs={12} sm={state.home.photo.gridWidth}>

const PhotoHome = () => {
  const classes = useStyles();
  // const [state, dispatch] = useStoreContext();

  const changeWidth = useSelector((gridWidth) => gridWidth.changeWidth);
  const dispatch = useDispatch();
  // const fullChange = () => {
  //   if (changeWidth === 6) {
  //     dispatch(CHANGE_PHOTO_STATE());
  //     dispatch(CHANGE_WIDTH());
  //     dispatch(PHOTO_TITLE());
  //     dispatch(PHOTO_ABOUT());
  //   } else dispatch(RESET());
  // };

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
            <Paper className={classes.paper}>Corporate</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Portrait</Paper>
          </Grid>
          <Grid item xs={112} sm={6}>
            <Paper className={classes.paper}>Street</Paper>
          </Grid>
          <Grid item xs={112} sm={6}>
            <Paper className={classes.paper}>Landscape</Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default PhotoHome;
