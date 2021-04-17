import {
  Container,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
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
      <Container className={classes.logoContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://www.javascript.com/", "_blank")
                    }
                  >
                    <Tooltip title='JavaScript' arrow>
                      <JavaScriptLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://www.w3schools.com/css/", "_blank")
                    }
                  >
                    <Tooltip title='CSS3' arrow>
                      <CssLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open(
                        "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
                        "_blank"
                      )
                    }
                  >
                    <Tooltip title='HTML5' arrow>
                      <HtmlLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://reactjs.org/", "_blank")
                    }
                  >
                    <Tooltip title='React' arrow>
                      <ReactLogo />
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://nodejs.org/en/", "_blank")
                    }
                  >
                    <Tooltip title='NodeJS' arrow>
                      <NodeJsLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://www.mysql.com/", "_blank")
                    }
                  >
                    <Tooltip title='MySQL' arrow>
                      <MysqlLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://expressjs.com/", "_blank")
                    }
                  >
                    <Tooltip title='Express' arrow>
                      <ExpressLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://git-scm.com/", "_blank")
                    }
                  >
                    <Tooltip title='Git' arrow>
                      <GitLogo />
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() => window.open("https://github.com/", "_blank")}
                  >
                    <Tooltip title='Github' arrow>
                      <GithubLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://material-ui.com/", "_blank")
                    }
                  >
                    <Tooltip title='Material-UI' arrow>
                      <MaterialUiLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://www.mongodb.com/", "_blank")
                    }
                  >
                    <Tooltip title='MongoDB' arrow>
                      <MongoDbLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://redux.js.org/", "_blank")
                    }
                  >
                    <Tooltip title='Redux' arrow>
                      <ReduxLogo />
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.logo} xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() => window.open("https://jquery.com/", "_blank")}
                  >
                    <Tooltip title='JQuery' arrow>
                      <JQueryLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://sequelize.org/", "_blank")
                    }
                  >
                    <Tooltip title='Sequelize' arrow>
                      <SequelizeLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open("https://code.visualstudio.com/", "_blank")
                    }
                  >
                    <Tooltip title='VS Code' arrow>
                      <VisualStudioLogo />
                    </Tooltip>
                  </Grid>
                  <Grid
                    className={classes.logo}
                    item
                    xs={3}
                    sm={3}
                    onClick={() =>
                      window.open(
                        "https://www.adobe.com/products/photoshop.html",
                        "_blank"
                      )
                    }
                  >
                    <Tooltip title='Photoshop' arrow>
                      <PhotoshopLogo />
                    </Tooltip>
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
