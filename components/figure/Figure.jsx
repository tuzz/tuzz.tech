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

Figure.MoreSpace = ({ src, children }) => (
  <Figure className={css.more_space} href={src}>
    {children}
  </Figure>
);

Figure.Video = ({ src, children }) => (
  <Figure.MoreSpace src={src}>
    <video muted autoPlay playsInline loop>
      <source src={src} type="video/mp4" />
    </video>

    {children}
  </Figure.MoreSpace>
);

export default Figure;
