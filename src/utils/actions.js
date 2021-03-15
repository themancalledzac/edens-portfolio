// export const HOME_WEB_FULL = "HOME_WEB_FULL";
// export const HOME_PHOTO_FULL = "HOME_PHOTO_FULL";
// export const HOME_NORMAL = "HOME_NORMAL";

// updated to redux style

export const CHANGE_WEB_STATE = () => {
  return {
    type: "CHANGE_WEB_STATE",
  };
};
export const CHANGE_PHOTO_STATE = () => {
  return {
    type: "CHANGE_PHOTO_STATE",
  };
};

export const CHANGE_WIDTH = () => {
  return {
    type: "CHANGE_WIDTH",
  };
};
export const WEB_ABOUT = () => {
  return {
    type: "WEB_ABOUT",
  };
};
export const PHOTO_ABOUT = () => {
  return {
    type: "PHOTO_ABOUT",
  };
};
export const PHOTO_TITLE = () => {
  return {
    type: "PHOTO_TITLE",
  };
};
export const WEB_TITLE = () => {
  return {
    type: "WEB_TITLE",
  };
};
export const RESET = () => {
  return {
    type: "RESET",
  };
};