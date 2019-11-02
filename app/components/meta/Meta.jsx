import React from "react";
import { Head } from "react-static";

const Meta = (props) => (
  <Head>
    <meta {...props} />
  </Head>
);

Meta.Image = ({ path, type, width, height }) => <>
  <Meta property="og:image" content={`https://tuzz.tech${path}`} />
  <Meta property="og:image:secure_url" content={`https://tuzz.tech${path}`} />
  <Meta property="og:image:type" content={`image/${type}`} />
  <Meta property="og:image:width" content={`${width}`} />
  <Meta property="og:image:height" content={`${height}`} />
</>;

Meta.Video = ({ path, type, width, height }) => <>
  <Meta property="og:video" content={`https://tuzz.tech${path}`} />
  <Meta property="og:video:secure_url" content={`https://tuzz.tech${path}`} />
  <Meta property="og:video:type" content={`video/${type}`} />
  <Meta property="og:video:width" content={`${width}`} />
  <Meta property="og:video:height" content={`${height}`} />
</>;

export default Meta;
