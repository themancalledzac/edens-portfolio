import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import colors from "../../components/colors";
import AboutMe from "../../components/AboutMe";
import PhotoHome from "../../components/PhotoHome";
import WebDevHome from "../../components/WebDevHome";
// import { useStoreContext } from "../../utils/GlobalState";
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
  // const [state] = useStoreContext();
  // const changeState = useSelector((state) => state.home.web.state);
  const changeWebState = useSelector((state) => state.changeWebState);
  const changePhotoState = useSelector((state) => state.changePhotoState);
  // const web = state.home.web.state;
  // const photo = state.home.photo.state;
  // console.log(web);
  // console.log(photo);

  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <AboutMe />
        <Grid container spacing={3}>
          {changePhotoState ? "" : <WebDevHome />}
          {changeWebState ? "" : <PhotoHome />}
          {/* <WebDevHome />
          <PhotoHome />*/}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
