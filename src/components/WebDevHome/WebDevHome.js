import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import colors from "../colors";
// import { useStoreContext } from "../utils/GlobalState";
// import { HOME_WEB_FULL } from "../utils/actions";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_WEB_STATE,
  CHANGE_WIDTH,
  RESET,
  WEB_TITLE,
  WEB_ABOUT,
} from "../../utils/actions";
import WebProject from "./WebProject";
import webProjects from "../../utils/webProjectCard.json";
import studentImage1 from "../../assets/images/StudentManagement-01.jpg";
import studentImage2 from "../../assets/images/StudentManagement-02.jpg";
import employeeImage1 from "../../assets/images/EmployeeDir-02.jpg";
import employeeImage2 from "../../assets/images/EmployeeDir-01.jpg";

// const [state, dispatch] = useStoreContext();

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
  // content: {
  //     if ({state.home.web})
  //     home.web || home.home || home.photo
  // },
}));

const WebDevHome = () => {
  const classes = useStyles();
  // const [state, dispatch] = useStoreContext();
  const changeWebState = useSelector((state) => state.changeWebState);

  const changeWidth = useSelector((gridWidth) => gridWidth.changeWidth);
  const dispatch = useDispatch();
  const fullChange = () => {
    if (changeWidth === 6) {
      dispatch(CHANGE_WEB_STATE());
      dispatch(WEB_TITLE());
      dispatch(WEB_ABOUT());
      dispatch(CHANGE_WIDTH());
    } else dispatch(RESET());
  };
  return (
    // <Grid item xs={12} sm={state.home.web.gridWidth}>
    <Grid item xs={12} sm={changeWidth}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} s>
            <Button
              style={{ width: "100%" }}
              className={(classes.paper, classes.header)}
              onClick={() => fullChange()}
              // onClick={webDevSH}
            >
              Web Development
            </Button>
          </Grid>

          <Grid item xs={changeWidth} sm={6}>
            {changeWebState ? (
              <WebProject
                title={webProjects.Project1.title}
                link={webProjects.Project1.link}
                image1={studentImage1}
                image2={studentImage2}
                paragraph={webProjects.Project1.paragraph}
                technology={webProjects.Project1.technology}
              />
            ) : (
              <Paper className={classes.paper}>Project 1</Paper>
            )}
          </Grid>
          <Grid item xs={changeWidth} sm={6}>
            {changeWebState ? (
              <WebProject
                title={webProjects.Project2.title}
                link={webProjects.Project2.link}
                image1={employeeImage1}
                image2={employeeImage2}
                paragraph={webProjects.Project2.paragraph}
                technology={webProjects.Project2.technology}
              />
            ) : (
              <Paper className={classes.paper}>Project 2</Paper>
            )}
          </Grid>
          <Grid item xs={changeWidth} sm={6}>
            {changeWebState ? (
              <WebProject
                title={webProjects.Project3.title}
                link={webProjects.Project3.link}
                paragraph={webProjects.Project3.paragraph}
                technology={webProjects.Project3.technology}
              />
            ) : (
              <Paper className={classes.paper}>Project 3</Paper>
            )}
          </Grid>
          <Grid item xs={changeWidth} sm={6}>
            {changeWebState ? (
              <WebProject
                title={webProjects.Project4.title}
                link={webProjects.Project4.link}
                paragraph={webProjects.Project4.paragraph}
                technology={webProjects.Project4.technology}
              />
            ) : (
              <Paper className={classes.paper}>Project 4</Paper>
            )}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default WebDevHome;
