import React, { useCallback, useState } from "react";

import photoData from "../utils/photoData";

import PhotoPage from "../components/PhotoPages";
const title = photoData[1].title;

const photos = photoData[1].images;
const paragraph = photoData[1].paragraph;

const Portrait = () => {
  return (
    <PhotoPage title={title} photos={photos} paragraph={paragraph}></PhotoPage>
  );
};

export default Portrait;
