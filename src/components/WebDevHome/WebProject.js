import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import colors from "../colors";

// import studentImage from "../../assets/images/StudentManagement-01.jpg";

const useStyles = makeStyles(() => ({
  header: {
    height: "3rem",
    width: "100%",
    backgroundColor: colors.orange,
    marginBottom: "2rem",
    padding: "0 2rem",
  },
  image: {
    maxWidth: "95%",
  },
}));

const WebProject = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <>
      <Container>
        <Button
          className={classes.header}
          onClick={() => window.open(`${props.link}`, "_blank")}
        >
          {props.title}
        </Button>
        <Button onClick={() => window.open(`${props.gitHubLink}`, "_blank")}>
          Github Link
        </Button>
        <p>{props.paragraph}</p>
        <br></br>
        <h3>Technologies used</h3>
        <p style={{ textDecoration: "underline" }}>{props.technology}</p>
        <br></br>
        <img
          className={classes.image}
          src={props.image01.src}
          alt={props.image01.title}
          onClick={() => window.open(`${props.link}`, "_blank")}
        />
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default WebProject;
