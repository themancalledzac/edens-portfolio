import React from "react";

import photoData from "../utils/photoData";

import PhotoPage from "../components/PhotoPages";
const title = photoData[2].title;

const photos = photoData[2].images;
const paragraph = photoData[2].paragraph;

const Street = () => {
  return (
    <PhotoPage title={title} photos={photos} paragraph={paragraph}></PhotoPage>
  );
};

export default Street;
