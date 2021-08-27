import { Grid, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import colors from "./colors";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    padding: "0, 2rem",
    marginTop: "0",
    paddingTop: "0",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "1000px",
    // border: "5px solid white",
    // borderBottom: "15px solid white",
    // borderTop: "5px solid white",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderRadius: "5px 5px 0 0",
  },
  container: {
    paddingLeft: "0",
    paddingRight: "0",
    // alignContent: "center",
    // alignItems: "center",
  },
  description: {
    padding: "5px",
    margin: "0",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    backgroundColor: colors.grey1,
    borderRadius: "0px 0px 5px 5px",
    // alignItems: "center",
    // alignContent: "center",
    // justifyContent: "center",
    // display: "flex",
  },
}));

const PhotoPageCard = ({ key, title, image, description, width }) => {
  const classes = useStyles();
  // const [imgWid, setImgWid] = useState("665.5px");
  // const loadWidth = (width) => {
  //   if (width === "vertical") {
  //     setImgWid("665.5px");
  //     console.log("vertical");
  //   } else if ({ width } === "horizontal") {
  //     setImgWid("912px");
  //     console.log("horizontal");
  //   }
  // };
  // const imgWidth = "665.5px";
  // const changeWidth = async (width) => {
  //   if (width === "vertical") {
  //     setImWid("665.5px");
  //   } else if (width === "horizontal") {
  //     setImWid("912px");
  //   }
  // };
  // const imgRef = React.createRef();
  // const imgageWidth = imgRef.current.offsetWidth;
  // console.log(imgageWidth);

  return (
    <div key={key} className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid className={classes.container} item xs={12}>
            <div>
              <img src={image} alt={title} className={classes.image} />
              <h4 className={classes.description} style={{ maxWidth: width }}>
                {description}
              </h4>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default PhotoPageCard;
