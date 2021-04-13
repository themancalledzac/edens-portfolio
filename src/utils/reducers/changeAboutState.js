/* eslint-disable no-sequences */
const changeAboutState = (state = true, action) => {
  switch (action.type) {
    case "ABOUT_STATE":
      return !state;

    case "RESET":
      return (state = true);
    default:
      return state;
  }
};

export default changeAboutState;
