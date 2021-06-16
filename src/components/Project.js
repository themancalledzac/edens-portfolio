import {
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
// import techData from "../utils/techData";

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

// const techOne = techData.slice(0, 4);
// const techTwo = techData.slice(4, 8);

const WebProject = ({
  title,
  link,
  gitHubLink,
  image01,
  technology,
  paragraph,
  tech,
}) => {
  const classes = useStyles();
  // console.log(props);
  return (
    <>
      <Paper elevation={3}>
        <Container>
          <Typography
            className={classes.header}
            onClick={() => window.open(`${link}`, "_blank")}
          >
            {title}
          </Typography>
          <hr></hr>
          <Button
            className={classes.github}
            onClick={() => window.open(`${gitHubLink}`, "_blank")}
          >
            Github Link
          </Button>
          <img
            className={classes.image}
            src={image01.src}
            alt={image01.title}
            onClick={() => window.open(`${link}`, "_blank")}
          />
          <p>{paragraph}</p>
          <br></br>
          <h3>Technologies used</h3>
          {/* <LogoContainerSingle tech={{ tech }} />
  How do we map just the name of the const that is called above on line 38 and 39? */}
          <p style={{ textDecoration: "underline" }}>{technology}</p>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </Paper>
    </>
  );
};

export default WebProject;
