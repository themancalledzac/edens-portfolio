import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import colors from "../colors";
import { useSelector, useDispatch } from "react-redux";

import { CHANGE_WEB_STATE, RESET, ABOUT_STATE } from "../../utils/actions";
import WebProject from "../Project.js";
// import webProjects from "../../utils/webProjectCard";
import WebData from "../../utils/webData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: colors.primary,
  },
}));

const WebDevHome = () => {
  const classes = useStyles();
  // const [state, dispatch] = useStoreContext();
  const changeWebState = useSelector((state) => state.changeWebState);
  const dispatch = useDispatch();

  // const changeWidth = useSelector((gridWidth) => gridWidth.changeWidth);
  // const dispatch = useDispatch();
  // const fullChange = () => {
  //   if (changeWidth === 6) {
  //     dispatch(CHANGE_WEB_STATE());
  //     dispatch(WEB_TITLE());
  //     dispatch(WEB_ABOUT());
  //     dispatch(CHANGE_WIDTH());
  //   } else dispatch(RESET());
  // };

  const clickWeb = async () => {
    if (changeWebState === true) {
      await dispatch(CHANGE_WEB_STATE(false));
      await dispatch(ABOUT_STATE(true));
      await window.scrollBy({ left: 0, top: -800, behavior: "smooth" });
      return;
    } else {
      dispatch(RESET());
    }
  };

  return (
    // <Grid item xs={12} sm={state.home.web.gridWidth}>
    <Grid item xs={12} sm={12}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              style={{ width: "100%" }}
              className={(classes.paper, classes.header)}
              onClick={() => clickWeb()}
              // onClick={webDevSH}
            >
              Web Development
            </Button>
          </Grid>
          {WebData.map(
            ({
              title,
              link,
              gitHubLink,
              image01,
              image02,
              paragraph,
              technology,
              tech,
            }) => (
              <Grid key={title} item xs={12} sm={6}>
                {changeWebState ? (
                  <WebProject
                    key={title}
                    title={title}
                    link={link}
                    gitHubLink={gitHubLink}
                    image01={image01}
                    image2={image02}
                    paragraph={paragraph}
                    technology={technology}
                    tech={tech}
                  />
                ) : (
                  <Paper className={classes.paper}>{title}</Paper>
                )}
              </Grid>
            )
          )}
        </Grid>
      </div>
    </Grid>
  );
};

export default WebDevHome;
