const changeWidth = (gridWidth = 6, action) => {
  switch (action.type) {
    case "CHANGE_WIDTH":
      return (gridWidth = 12);
    case "RESET":
      return (gridWidth = 6);
    default:
      return gridWidth;
  }
};

export default changeWidth;
