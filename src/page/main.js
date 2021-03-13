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
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Photography from "./Photography";
import Coding from "./Coding";
import colors from "../components/colors";
import { useDispatch, useSelector } from "react-redux";
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
    backgroundColor: colors.paleOrange,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
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
export default function Main() {
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
    if (changeWebState === false) {
      dispatch(CHANGE_WEB_STATE());
      dispatch(WEB_TITLE());
      dispatch(WEB_ABOUT());
      dispatch(CHANGE_WIDTH());
    } else dispatch(RESET());
  };
  const clickPhoto = () => {
    if (changePhotoState === false) {
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
        <Toolbar style={{ position: "flex" }}>
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
          <Typography variant='h6'>Zac Edens Portfolio</Typography>
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
            <ListItem button key={"Home"} onClick={() => clickAbout()}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
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
          <ListItem button key={"Email"}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={"edens.zac@gmail.com"} />
          </ListItem>
          <ListItem
            button
            key={"Github"}
            component='a'
            href='https://github.com/themancalledzac'
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={"Github"} />
          </ListItem>
          <ListItem
            button
            key={"LinkedIn"}
            component='a'
            href='https://linkedin.com/in/zacedens'
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
            component='a'
            href='https://www.instagram.com/themancalledzac/'
          >
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary={"Instagram"} />
          </ListItem>
          <ListItem
            button
            key={"Twitter"}
            component='a'
            href='https://twitter.com/themancalledzac/'
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
          <Route exact path='/photography' component={Photography} />
          <Route exact path='/coding' component={Coding} />
        </Switch>
      </main>
    </div>
  );
}
