import { Container, Grid, makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import LogoContainerSingle from "./LogoContainerSingle";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    maxWidth: "85%",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
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
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <LogoContainerSingle tech={techOne} />
            <LogoContainerSingle tech={techTwo} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <LogoContainerSingle tech={techThree} />
            <LogoContainerSingle tech={techFour} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogoContainer;
