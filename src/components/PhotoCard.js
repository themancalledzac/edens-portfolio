import {
  Button,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  PHOTO_PAGE_STATE,
  CHANGE_PHOTO_STATE,
  // CHANGE_COLOR_STATE,
} from "../utils/actions";

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
    maxWidth: "100%",
    border: "5px solid white",
    borderBottom: "15px solid white",
    borderTop: "15px solid white",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const PhotoCard = ({ title, image, nav }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const changePhotoPageState = useSelector(
  //   (state) => state.changePhotoPageState
  // );
  const handleClick = async () => {
    const name = { nav };
    await dispatch(CHANGE_PHOTO_STATE(false));
    await dispatch(PHOTO_PAGE_STATE(true));
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
          <img
            className={classes.image}
            onClick={handleClick}
            src={image.src}
            alt={image.title}
          />
        </Container>
      </Paper>
    </>
  );
};

export default PhotoCard;
