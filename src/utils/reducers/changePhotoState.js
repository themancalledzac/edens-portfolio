const changePhotoState = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_PHOTO_STATE":
      return !state;

    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default changePhotoState;
