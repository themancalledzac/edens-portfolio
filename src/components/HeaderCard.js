import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import images from "../utils/images";
import portrait from "../assets/personal_portrait_color.jpg";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  portrait: {
    maxWidth: "100%",
    borderRadius: "7px",
    marginBottom: "20px",
  },
  root: {
    flexGrow: 1,
  },
}));
const HeaderCard = () => {
  const classes = useStyles();
  const headerTitle = useSelector((title) => title.headerTitle);
  const headerParagraph = useSelector((paragraph) => paragraph.headerParagraph);
  // future development
  const headerImage = useSelector((image) => image.headerImage);
  //   console.log(portrait);
  //   console.log(headerImage.src);
  //   console.log(headerImage.title);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <img className={classes.portrait} src={headerImage} alt='portrait' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <h3 style={{ marginBottom: "20px" }}>{headerTitle}.</h3>
        <h3 style={{ marginBottom: "20px" }}>edens.zac@gmail.com</h3>
        <Typography paragraph> {headerParagraph}</Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderCard;
