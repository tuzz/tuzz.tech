import { useState, useRef } from "react";
import css from "./styles.scss";

import useDebounce from "../../hooks/use_debounce";
import useResize from "../../hooks/use_resize";

const MAX_WIDTH = 560;

const Frame = ({ src }) => {
  const [height, setHeight] = useState(0);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);

  const frameRef = useRef();
  const objectRef = useRef();

  const fitContent = () => {
    const object = objectRef.current;
    if (!object) return;

    const inner = object.contentWindow.document;
    const height = inner.body.scrollHeight;

    setHeight(height);
  };

  const scaleContent = () => {
    const frame = frameRef.current;
    if (!frame) return;

    const width = frame.getBoundingClientRect().width;
    const scale = width / MAX_WIDTH;

    setScale(scale);
  };

  const firstLoad = () => {
    setLoading(false);
    fitContent();
    scaleContent();
  };

  useResize(useDebounce(scaleContent, 40));

  const fadeIn = loading ? {} : { opacity: 1, transition: "opacity 0.5s" };

  const outerStyle = { height: loading ? null : `${height * scale}px` };
  const innerStyle = { height: `${height}px`, transform: `scale(${scale})`, ...fadeIn };

  return (
    <div ref={frameRef} className={css.frame} style={outerStyle}>
      <object ref={objectRef} data={src} onLoad={firstLoad} style={innerStyle} />
      {loading && <div className={css.loading} />}
    </div>
  );
};

export default Frame;
