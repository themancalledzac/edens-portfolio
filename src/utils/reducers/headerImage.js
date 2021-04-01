const headerImage = (
  image = require("../../assets/personal_portrait_color.jpg").default,
  action
) => {
  switch (action.type) {
    case "WEB_ABOUT":
      return (image = require("../../assets/personal_portrait_color.jpg")
        .default);
    case "PHOTO_ABOUT":
      return (image = require("../../assets/portrait_photography.jpg").default);
    case "RESET":
      return (image = require("../../assets/personal_portrait_color.jpg")
        .default);
    default:
      return image;
  }
};

export default headerImage;
