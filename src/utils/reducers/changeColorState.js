const changeColorState = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_STATE":
      return !state;
    case "RESET":
      return (state = false);
    default:
      return state;
  }
};

export default changeColorState;
