import {
  Button,
  Grid,
  Paper,
  Container,
  Link,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
    border: "5px solid white",
    borderBottom: "15px solid white",
    borderTop: "15px solid white",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  container: {
    paddingLeft: "0",
    paddingRight: "0",
  },
}));

const PhotoPageCard = ({ key, title, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={classes.title}>{title}</h1>
            <img src={image} alt={title} className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PhotoPageCard;
