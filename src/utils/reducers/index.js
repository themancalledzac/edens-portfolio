// import all our reducers
import { combineReducers } from "redux";
import changeWebState from "./changeWebState";
import changePhotoState from "./changePhotoState";
import changeWidth from "./changeWidth";
import headerParagraph from "./headerParagraph";
import headerTitle from "./headerTitle";
import headerImage from "./headerImage";

// import changeWidth from "./changeWidth";

const allReducer = combineReducers({
  // name our reducers here
  changeWebState,
  changePhotoState,
  changeWidth,
  headerParagraph,
  headerTitle,
  headerImage,
});

export default allReducer;
