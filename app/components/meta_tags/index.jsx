const MetaTags = ({ image, video, ...props }) => <>
  <MetaTags.Page {...props} />
  {image && <MetaTags.Image {...image} />}
  {video && <MetaTags.Video {...video} />}
</>;

MetaTags.Page = ({ title, path, type, description, keywords }) => (
  <Head>
    <meta property="og:title" content={title} />
    <meta property="og:url" content={`https://tuzz.tech${path}`} />
    <meta property="og:type" content={type} />
    <meta property="og:description" content={description} />

    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
);

MetaTags.Image = ({ path, type, width, height }) => (
  <Head>
    <meta property="og:image" content={`https://tuzz.tech${path}`} />
    <meta property="og:image:secure_url" content={`https://tuzz.tech${path}`} />
    <meta property="og:image:type" content={type} />
    <meta property="og:image:width" content={`${width}`} />
    <meta property="og:image:height" content={`${height}`} />
  </Head>
);

MetaTags.Video = ({ path, type, width, height }) => (
  <Head>
    <meta property="og:video" content={`https://tuzz.tech${path}`} />
    <meta property="og:video:secure_url" content={`https://tuzz.tech${path}`} />
    <meta property="og:image:type" content={type} />
    <meta property="og:video:width" content={`${width}`} />
    <meta property="og:video:height" content={`${height}`} />
  </Head>
);

export default MetaTags;
