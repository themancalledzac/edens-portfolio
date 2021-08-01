import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import LogoContainerSingle from "./LogoContainerSingle";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      marginTop: "45px",
    },
    marginTop: "30px",
  },
  logo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const LogoContainer = ({ techOne, techTwo, techThree, techFour }) => {
  const classes = useStyles();
  return (
    <Container className={classes.logoContainer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <Grid container spacing={1}>
            <LogoContainerSingle tech={techOne} />
            <LogoContainerSingle tech={techTwo} />
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Grid container spacing={1}>
            <LogoContainerSingle tech={techThree} />
            <LogoContainerSingle tech={techFour} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogoContainer;
