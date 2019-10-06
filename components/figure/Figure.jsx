import css from "./styles.scss";

const Figure = ({ children, href, className }) => {
  const [figure, caption] = children;

  const inner = href ? <a href={href}>{figure}</a> : figure;

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

Figure.Video = ({ src, children }) => (
  <Figure href={src}>
    <video muted autoPlay playsInline loop>
      <source src={src} type="video/mp4" />
    </video>

    {children}
  </Figure>
);

Figure.Code = ({ children }) => (
  <Figure className={css.code}>
    {children}
  </Figure>
);

export default Figure;
