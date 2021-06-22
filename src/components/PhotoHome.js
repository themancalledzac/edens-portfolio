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
import photoPageData from "../utils/photoPageData";
import PhotoCard from "./PhotoCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "20rem",
    width: "100%",
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: colors.white,
    backgroundColor: colors.blue,
  },
  phoneNumber: {
    textDecoration: "none",
    color: "inherit",
  },
  infos: {
    textAlign: "center",
    padding: "2rem",
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
          <Grid item xs={12}>
            <Paper className={classes.infos}>
              <h2>For inquiries:</h2>
              <a className={classes.phoneNumber} href='tel:+1-503-475-8785'>
                503.475.8785
              </a>
              <h4>edens.zac@gmail.com</h4>
            </Paper>
          </Grid>
          {photoPageData.map(({ title, image }) => (
            <Grid key={title} item xs={12} sm={6}>
              <PhotoCard key={title} title={title} image={image}></PhotoCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
}
