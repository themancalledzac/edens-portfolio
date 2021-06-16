import { Grid, makeStyles, Tooltip } from "@material-ui/core";
import React from "react";

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



const LogoContainerSingle = ({ tech }) => {
  
  const classes = useStyles();
  return (
    <Grid item className={classes.logo} xs={12} sm={12} md={6}>
      <Grid container spacing={2}>
        {tech.map(({ name, logo, link }) => (
          <Grid
            key={name}
            className={classes.logo}
            item
            xs={3}
            sm={3}
            onClick={() => window.open(`${link}`, "_blank")}
          >
            <Tooltip title={name} arrow>
              <img src={logo} alt={name}></img>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default LogoContainerSingle;
