import {
  Button,
  Grid,
  Paper,
  Container,
  Link,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
  },
  description: {
    padding: "5px",
    margin: "0",
    textAlign: "center",
    backgroundColor: colors.grey1,
    borderRadius: "0px 0px 5px 5px",
  },
}));

const PhotoPageCard = ({ key, title, image, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={image} alt={title} className={classes.image} />
            <h4 className={classes.description}>{description}</h4>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PhotoPageCard;
