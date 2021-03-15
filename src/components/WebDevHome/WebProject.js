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
  return (
    <>
      <Container>
        <Button
          className={classes.header}
          onClick={() => window.open(`${props.link}`, "_blank")}
        >
          {props.title}
        </Button>
        <p>{props.paragraph}</p>
        <br></br>
        <h3>Technologies used</h3>
        <br></br>
        <p style={{ textDecoration: "underline" }}>{props.technology}</p>
        <img
          className={classes.image}
          src={props.image1}
          alt='Student Management'
          onClick={() => window.open(`${props.link}`, "_blank")}
        />
        <br></br>
        <br></br>
        <img
          className={classes.image}
          src={props.image2}
          alt='Student Management'
          onClick={() => window.open(`${props.link}`, "_blank")}
        />
      </Container>
    </>
  );
};

export default WebProject;
