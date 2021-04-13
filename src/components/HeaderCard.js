import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import colors from "./colors";
import { ReactComponent as NodeJsLogo } from "../assets/nodejs-plain.svg";
import { ReactComponent as JavaScriptLogo } from "../assets/javascript-original.svg";
import { ReactComponent as ReactLogo } from "../assets/react-original.svg";
import { ReactComponent as MysqlLogo } from "../assets/mysql-original.svg";
import { ReactComponent as CssLogo } from "../assets/css3-plain.svg";
import { ReactComponent as ExpressLogo } from "../assets/express-original.svg";
import { ReactComponent as GitLogo } from "../assets/git-original.svg";
import { ReactComponent as GithubLogo } from "../assets/github-original.svg";
import { ReactComponent as HtmlLogo } from "../assets/html5-plain.svg";
import { ReactComponent as MaterialUiLogo } from "../assets/materialui-plain.svg";
import { ReactComponent as MongoDbLogo } from "../assets/mongodb-plain.svg";
import { ReactComponent as ReduxLogo } from "../assets/redux-original.svg";
import { ReactComponent as JQueryLogo } from "../assets/jquery-plain.svg";
import { ReactComponent as PhotoshopLogo } from "../assets/photoshop-line.svg";
import { ReactComponent as SequelizeLogo } from "../assets/sequelize-plain.svg";
import { ReactComponent as VisualStudioLogo } from "../assets/visualstudio-plain.svg";

const useStyles = makeStyles((theme) => ({
  portrait: {
    maxWidth: "100%",
    borderRadius: "7px",
    marginBottom: "20px",
    marginTop: "70px",
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
    marginTop: "30px",
  },
  headerParagraph: {
    marginBottom: "30px",
    marginTop: "30px",
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
    <>
      <Grid style={{ marginTop: "5rem" }} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img className={classes.portrait} src={headerImage} alt='portrait' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h4' noWrap className={classes.headerTitle}>
                {headerTitle}
              </Typography>
              <hr className={classes.underLine}></hr>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.infoContainer}>
            <Grid style={{ paddingBottom: "0px" }} xs={12} sm={4}>
              <h4 className={classes.infoTitle}>Email: </h4>
            </Grid>
            <Grid style={{ paddingBottom: "0px" }} xs={12} sm={8}>
              <h4 className={classes.info}>edens.zac@gmail.com</h4>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.infoContainer}>
            <Grid style={{ paddingTop: "0px" }} xs={12} sm={4}>
              <h4 className={classes.infoTitle}>Phone: </h4>
            </Grid>
            <Grid style={{ paddingTop: "0px" }} xs={12} sm={8}>
              <h4 className={classes.info}>1.503.475.8785</h4>
            </Grid>
          </Grid>
          <hr className={classes.underLine}></hr>
          <Typography paragraph className={classes.headerParagraph}>
            {headerParagraph}
          </Typography>
          <hr className={classes.underLine}></hr>
        </Grid>
      </Grid>
      <Container className={classes.logoContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <JavaScriptLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <CssLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <HtmlLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <ReactLogo />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <NodeJsLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <MysqlLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <ExpressLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <GitLogo />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <GithubLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <MaterialUiLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <MongoDbLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <ReduxLogo />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <JQueryLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <SequelizeLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <VisualStudioLogo />
                  </Grid>
                  <Grid className={classes.logo} item xs={3} sm={3}>
                    <PhotoshopLogo />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeaderCard;
