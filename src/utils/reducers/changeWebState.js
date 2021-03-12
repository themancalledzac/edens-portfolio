/* eslint-disable no-sequences */
const changeWebState = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_WEB_STATE":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default changeWebState;
