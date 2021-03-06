import { Button, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
// import { HOME_PHOTO_FULL } from "../utils/actions";
// import { useStoreContext } from "../utils/GlobalState";
import colors from "../components/colors";
// import { useSelector, useDispatch } from "react-redux";
import photoPageData from "../utils/photoPageData";
import PhotoCard from "../components/PhotoCard";

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

export default function Photography() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Grid container spacing={3}>
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
                    <a
                      className={classes.phoneNumber}
                      href='tel:+1-503-475-8785'
                    >
                      503.475.8785
                    </a>
                    <h4>edens.zac@gmail.com</h4>
                  </Paper>
                </Grid>
                {photoPageData.map(({ title, image, nav }) => (
                  <Grid key={title} item xs={12} sm={6}>
                    <PhotoCard
                      key={title}
                      title={title}
                      image={image}
                      nav={nav}
                    ></PhotoCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
