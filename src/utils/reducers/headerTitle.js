const headerTitle = (title = "About", action) => {
  switch (action.type) {
    case "WEB_TITLE":
      return (title = "Dev");
    case "PHOTO_TITLE":
      return (title = "Photo");
    case "ABOUT_TITLE":
      return (title = "About");
    case "RESET":
      return (title = "About");
    default:
      return title;
  }
};

export default headerTitle;
