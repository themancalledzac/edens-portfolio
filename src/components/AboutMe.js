import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import portrait from "../assets/images/personal_portrait_color.jpg";
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
      <img className={classes.portrait} src={portrait} alt='portrait' />
      <h3 style={{ marginBottom: "20px" }}>{headerTitle}.</h3>
      <h3 style={{ marginBottom: "20px" }}>edens.zac@gmail.com</h3>
      <Typography paragraph> {headerParagraph}</Typography>
    </>
  );
};

export default AboutMe;
