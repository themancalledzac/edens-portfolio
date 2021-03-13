import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import colors from "../../components/colors";
import AboutMe from "../../components/AboutMe";
import PhotoHome from "../../components/PhotoHome";
import WebDevHome from "../../components/WebDevHome";
import { useSelector } from "react-redux";

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
        <AboutMe />
        <Grid container spacing={3}>
          {changePhotoState ? "" : <WebDevHome />}
          {changeWebState ? "" : <PhotoHome />}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
