import {
  Container,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "./colors";
import techData from "../utils/techData";
import LogoContainer from "./LogoContainer";

const useStyles = makeStyles((theme) => ({
  portrait: {
    maxWidth: "100%",
    borderRadius: "20px",
    marginBottom: "20px",
    marginTop: "70px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      maxWidth: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      marginTop: "0px",
    },
  },
  root: {
    flexGrow: 1,
  },
  contact: {
    backgroundColor: colors.primary,
    borderRadius: "6px",
    padding: "20px",
    marginTop: "20px",
  },
  infoTitle: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  info: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },

  logoContainer: {
    maxWidth: "85%",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
    },
    marginTop: "30px",
  },
  headerParagraph: {
    marginBottom: "30px",
    marginTop: "30px",
    minHeight: "250px",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  headerTitle: {
    textAlign: "center",
    marginBottom: "10px",
  },
  infoContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "5px",
    },
  },
  underLine: {
    borderTop: "1px solid black",
  },
  aboutContainer: {
    minHeight: "444px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  logo: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const techOne = techData.slice(0, 4);
const techTwo = techData.slice(4, 8);
const techThree = techData.slice(8, 12);
const techFour = techData.slice(12, 16);
const HeaderCard = ({ title, paragraph, image }) => {
  const classes = useStyles();

  return (
    <>
      <Grid style={{ marginTop: "5rem" }} container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <img className={classes.portrait} src={image} alt='portrait' />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ paddingBottom: "0px" }}>
              <Typography variant='h4' noWrap className={classes.headerTitle}>
                {title}
              </Typography>
              <hr className={classes.underLine}></hr>
            </Grid>
          </Grid>
          <Container className={classes.aboutContainer}>
            <Grid container spacing={2} className={classes.infoContainer}>
              <Grid item style={{ paddingBottom: "0px" }} xs={12} sm={4}>
                <h4 className={classes.infoTitle}>Email: </h4>
              </Grid>
              <Grid item style={{ paddingBottom: "0px" }} xs={12} sm={8}>
                <Tooltip title='copy' arrow>
                  <h4 className={classes.info}>edens.zac@gmail.com</h4>
                </Tooltip>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.infoContainer}>
              <Grid item style={{ paddingTop: "0px" }} xs={12} sm={4}>
                <h4 className={classes.infoTitle}>Phone: </h4>
              </Grid>
              <Grid item style={{ paddingTop: "0px" }} xs={12} sm={8}>
                <h4 className={classes.info}>1.503.475.8785</h4>
              </Grid>
            </Grid>
            <hr className={classes.underLine}></hr>
            <Typography paragraph className={classes.headerParagraph}>
              {paragraph}
            </Typography>
            <hr
              className={classes.underLine}
              style={{ marginTop: "50px" }}
            ></hr>
          </Container>
        </Grid>
      </Grid>
      <LogoContainer
        techOne={techOne}
        techTwo={techTwo}
        techThree={techThree}
        techFour={techFour}
      />
    </>
  );
};

export default HeaderCard;
