// Imports ------------------------------------------------
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Photography from "./Photography";
import Event from "./Event";
import Portrait from "./Portrait";
import Street from "./Street";
import Landscape from "./Landscape";
import { useHistory } from "react-router-dom";
import colors from "../components/colors";
import { useDispatch, useSelector } from "react-redux";
import resume from "../assets/edens-resume.pdf";
import {
  CHANGE_WEB_STATE,
  CHANGE_PHOTO_STATE,
  RESET,
  ABOUT_STATE,
  // PHOTO_PAGE_STATE,
  CHANGE_COLOR_STATE,
} from "../utils/actions";
// import changeAboutState from "../utils/reducers/changeAboutState";

const drawerWidth = 200;

// Use Styles ---------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: (props) => props.color,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: (props) => props.color,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: (props) => props.color,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(8) + 1,

      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  logo: {
    color: colors.white,
    textShadow: "0.5px 0.5px 1px #9e9e9e",
  },
}));

// export -------------------------------------------------
export default function NavBar(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const changeWebState = useSelector((state) => state.changeWebState);
  const changePhotoState = useSelector((state) => state.changePhotoState);
  const changeColorState = useSelector((state) => state.changeColorState);
  // const changePhotoPageState = useSelector(
  //   (state) => state.changePhotoPageState
  // );
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const changeToFalse = async (change, state) => {
    if (change === true) {
      await dispatch(state(false));
    } else {
      await dispatch(ABOUT_STATE());
    }
  };

  const clickWeb = async () => {
    if (changeWebState === false) {
      changeToFalse(changePhotoState, CHANGE_PHOTO_STATE);
      await dispatch(CHANGE_WEB_STATE(true));
      if (changeColorState === true) {
        await dispatch(CHANGE_COLOR_STATE());
      }
      await window.scrollBy({ left: 0, top: 600, behavior: "smooth" });
      history.push("/");
      return;
    } else if (changeWebState === true) {
      dispatch(RESET());
      history.push("/");
    }
  };
  const clickPhoto = async () => {
    if (changePhotoState === false) {
      changeToFalse(changeWebState, CHANGE_WEB_STATE);
      await dispatch(CHANGE_PHOTO_STATE(true));
      if (changeColorState === false) {
        await dispatch(CHANGE_COLOR_STATE());
      }
      history.push("/photography");
    } else if (changePhotoState === true) {
      dispatch(RESET());
      history.push("/");
    }
  };
  const clickAbout = async () => {
    await window.scrollBy({ left: 0, top: -5000, behavior: "smooth" });
    await dispatch(RESET());
    history.push("/");
  };

  const colorChange = {
    // if(changePhotoState === true) {}
    // backgroundColor: colors.blue,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        style={colorChange}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            style={colorChange}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon color='inherit' />
          </IconButton>
          <Typography
            onClick={clickAbout}
            variant='h6'
            noWrap
            style={{ marginRight: "2rem" }}
          >
            Zac Edens Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        onClick={handleDrawerClose}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        style={colorChange}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div style={colorChange} className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon className={classes.logo} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div to={"/"}>
            <ListItem button key={"About Me"} onClick={() => clickAbout()}>
              <ListItemIcon>
                <HomeIcon className={classes.logo} />
              </ListItemIcon>
              <ListItemText className={classes.logo} primary={"About Me"} />
            </ListItem>
          </div>
          <div>
            <ListItem
              button
              key={"Resume"}
              component='a'
              href={resume}
              target='_blank'
            >
              <ListItemIcon>
                <FileCopyIcon className={classes.logo} />
              </ListItemIcon>
              <ListItemText className={classes.logo} primary={"Resume Link"} />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListItem button key={"Web Dev"} onClick={() => clickWeb()}>
              <ListItemIcon>
                <CodeIcon className={classes.logo} />
              </ListItemIcon>
              <ListItemText className={classes.logo} primary={"Web Dev"} />
            </ListItem>
          </div>
          <div>
            <ListItem button key={"Photography"} onClick={() => clickPhoto()}>
              <ListItemIcon>
                <CameraAltIcon className={classes.logo} />
              </ListItemIcon>
              <ListItemText className={classes.logo} primary={"Photography"} />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            key={"Email"}
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=edens.zac@gmail.com",
                "_blank"
              )
            }
          >
            <ListItemIcon>
              <EmailIcon className={classes.logo} />
            </ListItemIcon>
            <ListItemText className={classes.logo} primary={"Email"} />
          </ListItem>
          <ListItem
            button
            key={"Github"}
            onClick={() =>
              window.open("https://github.com/themancalledzac", "_blank")
            }
          >
            <ListItemIcon>
              <GitHubIcon className={classes.logo} />
            </ListItemIcon>
            <ListItemText className={classes.logo} primary={"Github"} />
          </ListItem>
          <ListItem
            button
            key={"LinkedIn"}
            onClick={() =>
              window.open("https://linkedin.com/in/zacedens", "_blank")
            }
          >
            <ListItemIcon>
              <LinkedInIcon className={classes.logo} />
            </ListItemIcon>
            <ListItemText className={classes.logo} primary={"LinkedIn"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            key={"Instagram"}
            onClick={() =>
              window.open(
                "https://www.instagram.com/themancalledzac/",
                "_blank"
              )
            }
          >
            <ListItemIcon>
              <InstagramIcon className={classes.logo} />
            </ListItemIcon>
            <ListItemText className={classes.logo} primary={"Instagram"} />
          </ListItem>
          <ListItem
            button
            key={"Twitter"}
            onClick={() =>
              window.open("https://twitter.com/themancalledzac/", "_blank")
            }
          >
            <ListItemIcon>
              <TwitterIcon className={classes.logo} />
            </ListItemIcon>
            <ListItemText className={classes.logo} primary={"Twitter"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/photography' component={Photography} />
          <Route exact path='/photography/event' component={Event} />
          <Route exact path='/photography/portrait' component={Portrait} />
          <Route exact path='/photography/street' component={Street} />
          <Route exact path='/photography/landscape' component={Landscape} />
        </Switch>
      </main>
    </div>
  );
}
