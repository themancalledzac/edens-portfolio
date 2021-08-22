import React from "react";

import photoData from "../utils/photoData";

import PhotoPage from "../components/PhotoPages";
const title = photoData[3].title;

const photos = photoData[3].images;
const paragraph = photoData[3].paragraph;

const Landscape = () => {
  return (
    <PhotoPage title={title} photos={photos} paragraph={paragraph}></PhotoPage>
  );
};

export default Landscape;
