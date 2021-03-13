const headerTitle = (title = "About Me", action) => {
  switch (action.type) {
    case "WEB_TITLE":
      return (title = "Web Development");
    case "PHOTO_TITLE":
      return (title = "Photography");
    case "RESET":
      return (title = "About Me");
    default:
      return title;
  }
};

export default headerTitle;
