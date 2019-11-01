// This doesn't place these meta tags in <Head> so you'll need to do that yourself.

const ImageMeta = ({ path, type, width, height }) => <>
  <meta property="og:image" content={`https://tuzz.tech${path}`} />
  <meta property="og:image:secure_url" content={`https://tuzz.tech${path}`} />
  <meta property="og:image:type" content={`image/${type}`} />
  <meta property="og:image:width" content={`${width}`} />
  <meta property="og:image:height" content={`${height}`} />
</>;

export default ImageMeta;
