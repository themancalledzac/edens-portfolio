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
    padding: "2rem",
  },
}));

const photos = photoData[3].images;

const Landscape = () => {
  const [isOn, toggleIsOn] = useToggle();
  const classes = useStyles();
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
                    {landscapePhotoData.title}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.infos}>
                    {isOn ? (
                      <p>
                        Over the years, landscape photography has become a side
                        passion of mine. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Hic, quisquam rerum veritatis, eos
                        iste excepturi aliquam eaque voluptatem architecto
                        dolores eum reiciendis dolor? Ullam nobis tempore quo
                        voluptates magnam excepturi eius officiis animi, quos
                        vitae ut labore non, officia ea alias magni odit,
                        exercitationem quisquam facere laudantium possimus iusto
                        veritatis! Voluptatibus quas, eos corrupti voluptatem
                        quasi molestiae quidem voluptas nisi veritatis quia.
                        Quidem consequatur magni perspiciatis illum impedit
                        dolore, iure ducimus reprehenderit accusamus. Qui facere
                        rerum maxime earum, voluptate iste vel eligendi
                        deleniti, laboriosam officiis quas deserunt quaerat nisi
                        esse aut accusantium eum quo nemo animi eveniet,
                        corrupti perspiciatis cumque non! Nihil accusamus earum
                        quos dignissimos sint ipsam esse reiciendis veniam
                        officia optio rem, odit quae voluptate architecto fugiat
                        quis iure saepe similique non sit aut minima maxime?
                        Rerum, dolorem corrupti? Culpa accusamus neque maiores
                        et placeat, repellat facilis explicabo reiciendis,
                        quisquam saepe velit? Id, veritatis perferendis
                        reiciendis doloremque quos quasi provident tempore quod
                        tenetur perspiciatis necessitatibus ratione, obcaecati
                        ipsum eos dignissimos nihil. Fugiat assumenda sint
                        voluptate obcaecati, ducimus est! Ipsa, a aliquid
                        cupiditate, ex sit recusandae corporis quod non magni
                        assumenda nulla, alias soluta optio aperiam quasi at
                        consequatur. Nisi earum quos laboriosam? Tenetur nobis
                        saepe natus nulla cumque?
                      </p>
                    ) : (
                      <p>
                        Opening paragraph talking about my ever longing love for
                        photography...
                      </p>
                    )}
                    <Button onClick={toggleIsOn}>
                      {isOn ? <h4>Contract</h4> : <h4>Expand</h4>}
                    </Button>
                  </Paper>
                </Grid>
                {photos.map(({ title, src }) => (
                  <Grid key={title} item xs={12}>
                    <PhotoPageCard
                      key={title}
                      title={title}
                      image={src}
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

export default Landscape;
