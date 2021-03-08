import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import colors from "../../components/colors";
import Paragraph from "../../components/paragraph";
import PhotoHome from "../../components/PhotoHome";
import WebDevHome from "../../components/WebDevHome";

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
          <WebDevHome />
          <PhotoHome />
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
