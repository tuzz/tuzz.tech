import React from "react";
import Meta from "../meta";

const ImageMeta = ({ path, type, width, height }) => <>
  <Meta property="og:image" content={`https://tuzz.tech${path}`} />
  <Meta property="og:image:secure_url" content={`https://tuzz.tech${path}`} />
  <Meta property="og:image:type" content={`image/${type}`} />
  <Meta property="og:image:width" content={`${width}`} />
  <Meta property="og:image:height" content={`${height}`} />
</>;

export default ImageMeta;
