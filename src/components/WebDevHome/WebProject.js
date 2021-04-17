import {
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "../colors";

// import studentImage from "../../assets/images/StudentManagement-01.jpg";

const useStyles = makeStyles(() => ({
  header: {
    height: "3rem",
    width: "100%",
    marginBottom: "1rem",
    padding: "0 2rem",
    paddingTop: "1rem",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    maxWidth: "95%",
    border: "2px solid #404040",
    // display: "flex",
    // alignItems: "center",
  },
  github: {
    margin: "1rem 0",
  },
}));

const WebProject = (props) => {
  const classes = useStyles();
  // console.log(props);
  return (
    <>
      <Paper elevation={3}>
        <Container>
          <Typography
            className={classes.header}
            onClick={() => window.open(`${props.link}`, "_blank")}
          >
            {props.title}
          </Typography>
          <hr></hr>
          <Button
            className={classes.github}
            onClick={() => window.open(`${props.gitHubLink}`, "_blank")}
          >
            Github Link
          </Button>
          <img
            className={classes.image}
            src={props.image01.src}
            alt={props.image01.title}
            onClick={() => window.open(`${props.link}`, "_blank")}
          />
          <p>{props.paragraph}</p>
          <br></br>
          <h3>Technologies used</h3>
          <p style={{ textDecoration: "underline" }}>{props.technology}</p>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </Paper>
    </>
  );
};

export default WebProject;
