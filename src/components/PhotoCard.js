import {
  Button,
  Container,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PHOTO_PAGE_STATE } from "../utils/actions";

const useStyles = makeStyles(() => ({
  header: {
    height: "3rem",
    // width: "100%",
    marginBottom: "1rem",
    padding: "0 2rem",
    paddingTop: "1rem",
    textAlign: "center",
  },
  image: {
    maxWidth: "95%",
    border: "5px solid white",
    borderBottom: "15px solid white",
    borderTop: "15px solid white",
    textAlign: "center",
  },
}));

const PhotoCard = ({ title, image, nav }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const changePhotoPageState = useSelector(
    (state) => state.changePhotoPageState
  );
  const handleClick = async () => {
    const name = { nav };
    dispatch(PHOTO_PAGE_STATE(true));
    history.push(name.nav, "_blank");
  };
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3}>
        <Container>
          <Typography className={classes.header}>
            <Button onClick={handleClick}>{title}</Button>
          </Typography>
          <hr></hr>
          <img className={classes.image} src={image.src} alt={image.title} />
        </Container>
      </Paper>
    </>
  );
};

export default PhotoCard;
