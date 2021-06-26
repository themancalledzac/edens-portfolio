/* eslint-disable no-sequences */
const changePhotoPageState = (state = false, action) => {
  switch (action.type) {
    case "PHOTO_PAGE_STATE":
      return !state;

    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default changePhotoPageState;
