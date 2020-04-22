import css from "./styles.scss";

const MAX_WIDTH = 560;

const Frame = ({ src, autoScale=true }) => {
  const [height, setHeight] = useState(0);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);

  // Render with no src first so we don't miss the onLoad event.
  const [source, setSource] = useState(null);

  const frameRef = useRef();
  const objectRef = useRef();

  const fitContent = () => {
    const object = objectRef.current;
    if (!object) return;

    const body = object.contentWindow.document.body;
    if (!body) return;

    setHeight(body.scrollHeight);
  };

  const scaleContent = () => {
    const frame = frameRef.current;
    if (!frame || !autoScale) return;

    const width = frame.getBoundingClientRect().width;
    const scale = width / MAX_WIDTH;

    setScale(scale);
  };

  const resize = useDebounce(() => {
    fitContent();
    scaleContent();
  }, 40);

  useEffect(() => setSource(src), [src]);
  useEffect(resize, [loading]);

  useDelays(resize, [200, 500, 1000], [loading]);
  useResize(resize);

  const fadeIn = loading ? {} : { opacity: 1, transition: "opacity 0.5s" };

  const outerStyle = { height: loading ? null : `${height * scale}px` };
  const innerStyle = { height: `${height}px`, transform: `scale(${scale})`, ...fadeIn };

  return (
    <div ref={frameRef} className={css.frame} style={outerStyle}>
      <iframe ref={objectRef} src={source} onLoad={() => setLoading(false)} style={innerStyle} scrolling="no" />
      {loading && <div className={css.loading} />}
    </div>
  );
};

export default Frame;
