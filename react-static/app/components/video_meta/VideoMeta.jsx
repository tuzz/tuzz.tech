import React from "react";
import Meta from "../meta";

const VideoMeta = ({ path, type, width, height }) => <>
  <Meta property="og:video" content={`https://tuzz.tech${path}`} />
  <Meta property="og:video:secure_url" content={`https://tuzz.tech${path}`} />
  <Meta property="og:video:type" content={`video/${type}`} />
  <Meta property="og:video:width" content={`${width}`} />
  <Meta property="og:video:height" content={`${height}`} />
</>;

export default VideoMeta;
