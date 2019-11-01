import React from "react";

// This doesn't place these meta tags in <Head> so you'll need to do that yourself.

const VideoMeta = ({ path, type, width, height }) => <>
  <meta property="og:video" content={`https://tuzz.tech${path}`} />
  <meta property="og:video:secure_url" content={`https://tuzz.tech${path}`} />
  <meta property="og:video:type" content={`video/${type}`} />
  <meta property="og:video:width" content={`${width}`} />
  <meta property="og:video:height" content={`${height}`} />
</>;

export default VideoMeta;
