import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import colors from "../components/colors";
import PhotoHome from "../components/PhotoHome";
import WebDevHome from "../components/WebDevHome/WebDevHome";
import { useSelector } from "react-redux";
import HeaderCard from "../components/HeaderCard";

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
  const changeWebState = useSelector((state) => state.changeWebState);
  const changePhotoState = useSelector((state) => state.changePhotoState);

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <HeaderCard />
        {/*<AboutMe /> */}
        <Grid container spacing={3}>
          {changePhotoState ? "" : <WebDevHome />}
          {changeWebState ? "" : <PhotoHome />}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

// TODO
// Change state so that Web, Photo, and About are three separate pages inside the home Page
// only one state is true per page, which makes each other state false.  this state is universal
// about page is a single page, no need to scroll, maybe we can make it full screen size for a few different screen sizes?
// about page is an about paragraph, and a contact section.
// email button needs to open a module with the email name
//
