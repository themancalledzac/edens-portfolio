const headerParagraph = (
  paragraph = "Full Stack Web Developer with photography, video production, and graphic design experience. Completing a certificate in Full-Stack Web Development with expertise specializing in skills in JavaScript, React, NodeJS, MySQL, and MongoDB. Strengths include creativity, teamwork, and problem-solving to reach feasible results. Excited to leverage knowledge and expertise in a fast-paced team to build a better tomorrow for the web.",
  action
) => {
  switch (action.type) {
    case "WEB_ABOUT":
      return (paragraph =
        "The projects presented here are a culmination of the University of Washington Full Stack Development certificate program, and represent a few of my favorite projects.  More can be found on my Github (link in the sidebar).");
    case "PHOTO_ABOUT":
      return (paragraph =
        "Nearly a decade of photography experience, I am always looking for an opportunity to create images, wherever I can.  This portion of the website will be updated after the course is finished and time allows. In the meantime feel free to browse my Instagram (link in the lefthand bar).");
    case "RESET":
      return (paragraph =
        "Full Stack Web Developer with photography, video production, and graphic design experience. Completing a certificate in Full-Stack Web Development with expertise specializing in skills in JavaScript, React, NodeJS, MySQL, and MongoDB. Strengths include creativity, teamwork, and problem-solving to reach feasible results. Excited to leverage knowledge and expertise in a fast-paced team to build a better tomorrow for the web.");
    default:
      return paragraph;
  }
};

export default headerParagraph;
