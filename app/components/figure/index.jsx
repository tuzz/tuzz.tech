import css from "./styles.scss";

const Figure = ({ children, href, className }) => {
  const [figure, caption] = children;

  const inner = href ? <a href={href} target="_blank">{figure}</a> : figure;

  return (
    <figure className={`${className} ${css.figure}`}>
      {inner}

      <figcaption>
        <span className={css.arrow}>▲</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
};

Figure.Video = ({ children, href, src, ...props }) => (
  <Figure href={href || src} {...props}>
    <video muted autoPlay playsInline loop>
      <source src={src} type="video/mp4" />
    </video>

    {children}
  </Figure>
);

Figure.Image = ({ children, href, src, alt, ...props }) => (
  <Figure href={href || src} {...props}>
    <img src={src} alt={alt} />

    {children}
  </Figure>
);

export default Figure;
