import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import portrait from "../assets/personal_portrait_color.jpg";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  portrait: {
    maxWidth: "95%",
    borderRadius: "7px",
    marginBottom: "20px",
  },
}));
const AboutMe = () => {
  const classes = useStyles();
  const headerTitle = useSelector((title) => title.headerTitle);
  const headerParagraph = useSelector((paragraph) => paragraph.headerParagraph);
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img className={classes.portrait} src={portrait} alt='portrait' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3 style={{ marginBottom: "20px" }}>{headerTitle}.</h3>
          <h3 style={{ marginBottom: "20px" }}>edens.zac@gmail.com</h3>
          <Typography paragraph> {headerParagraph}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
