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

import colors from "../components/colors";
import { useDispatch, useSelector } from "react-redux";
import resume from "../assets/Edens_Resume.pdf";
import {
  CHANGE_WEB_STATE,
  CHANGE_PHOTO_STATE,
  RESET,
  CHANGE_WIDTH,
  WEB_TITLE,
  WEB_ABOUT,
  PHOTO_TITLE,
  PHOTO_ABOUT,
} from "../utils/actions";

const drawerWidth = 240;

// Use Styles ---------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: colors.orange,

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
    backgroundColor: colors.orange,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: colors.orange,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
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
    padding: theme.spacing(3),
  },
}));

// export -------------------------------------------------
export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const changeWebState = useSelector((state) => state.changeWebState);
  const changePhotoState = useSelector((state) => state.changePhotoState);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const clickWeb = () => {
    if (changeWebState === false && changePhotoState === false) {
      dispatch(CHANGE_WEB_STATE());
      dispatch(WEB_TITLE());
      dispatch(WEB_ABOUT());
      dispatch(CHANGE_WIDTH());
    } else dispatch(RESET());
  };
  const clickPhoto = () => {
    if (changePhotoState === false && changeWebState === false) {
      dispatch(CHANGE_PHOTO_STATE());
      dispatch(CHANGE_WIDTH());
      dispatch(PHOTO_TITLE());
      dispatch(PHOTO_ABOUT());
    } else dispatch(RESET());
  };
  const clickAbout = () => {
    dispatch(RESET());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap style={{ marginRight: "2rem" }}>
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
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div to={"/"}>
            <ListItem button key={"About Me"} onClick={() => clickAbout()}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"About Me"} />
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
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText primary={"Resume Link"} />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
          <div>
            <ListItem button key={"Web Dev"} onClick={() => clickWeb()}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary={"Web Dev"} />
            </ListItem>
          </div>
          <div>
            <ListItem button key={"Photography"} onClick={() => clickPhoto()}>
              <ListItemIcon>
                <CameraAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Photography"} />
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
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={"Email"} />
          </ListItem>
          <ListItem
            button
            key={"Github"}
            onClick={() =>
              window.open("https://github.com/themancalledzac", "_blank")
            }
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={"Github"} />
          </ListItem>
          <ListItem
            button
            key={"LinkedIn"}
            onClick={() =>
              window.open("https://linkedin.com/in/zacedens", "_blank")
            }
          >
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary={"LinkedIn"} />
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
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary={"Instagram"} />
          </ListItem>
          <ListItem
            button
            key={"Twitter"}
            onClick={() =>
              window.open("https://twitter.com/themancalledzac/", "_blank")
            }
          >
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary={"Twitter"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </div>
  );
}
