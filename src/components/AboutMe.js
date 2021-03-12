import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import portrait from "../assets/images/personal_portrait_color.jpg";

const useStyles = makeStyles((theme) => ({
  portrait: {
    maxWidth: "75%",
  },
}));
export default function AboutMe() {
  const classes = useStyles();

  return (
    <>
      <img className={classes.portrait} src={portrait} alt='portrait' />
      <h1>About me</h1>
      <Typography paragraph>
        Full Stack Web Developer with photography, video production, and graphic
        design experience. Completing a certificate in Full-Stack Web
        Development with expertise specializing in skills in JavaScript, React,
        NodeJS, MySQL, and MongoDB. Strengths include creativity, teamwork, and
        problem-solving to reach feasible results. Excited to leverage knowledge
        and expertise in a fast-paced team to build a better tomorrow for the
        web.
      </Typography>
    </>
  );
}
