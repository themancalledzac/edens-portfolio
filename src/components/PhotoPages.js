import React, { useCallback, useState } from "react";
import { Button, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import colors from "../components/colors";
import photoData from "../utils/photoData";
import PhotoPageCard from "../components/PhotoPageCard";
import useToggle from "../utils/useToggle";
const landscapePhotoData = photoData[3];

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
    marginTop: "20px",
    textAlign: "center",
    color: colors.white,
    backgroundColor: colors.blue,
  },
  infos: {
    textAlign: "center",
    padding: "1rem",
  },
}));

const PhotoPage = ({ photos, paragraph, title }) => {
  const [isOn, toggleIsOn] = useToggle();
  const classes = useStyles();
  const para = { paragraph };
  console.log(para);

  const shortParagraph = paragraph.substring(0, 50);
  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Button
                    style={{ width: "100%" }}
                    className={(classes.paper, classes.header)}
                    // onClick={() => fullChange()}
                  >
                    {title}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.infos}>
                    {isOn ? <p>{paragraph}</p> : <p>`{shortParagraph}...`</p>}
                    <Button onClick={toggleIsOn}>
                      {isOn ? <h4>Hide</h4> : <h4>Expand</h4>}
                    </Button>
                  </Paper>
                </Grid>
                {photos.map(({ title, src, description }) => (
                  <Grid key={title} item xs={12}>
                    <PhotoPageCard
                      key={title}
                      title={title}
                      image={src}
                      description={description}
                    ></PhotoPageCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PhotoPage;
