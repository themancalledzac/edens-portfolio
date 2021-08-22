import React, { useCallback, useState } from "react";

import photoData from "../utils/photoData";

import PhotoPage from "../components/PhotoPages";
const title = photoData[0].title;

const photos = photoData[0].images;
const paragraph = photoData[0].paragraph;

const Event = () => {
  return (
    <PhotoPage title={title} photos={photos} paragraph={paragraph}></PhotoPage>
  );
};

export default Event;
