import React, { useState, useEffect, useRef } from "react";
import parseTimings from "../../helpers/parse_timings";
import setClass from "../../helpers/set_class";
import useAudio from "../../hooks/use_audio";
import css from "./styles.scss";

const Narration = ({ src, children }) => {
  const [ref, getTime, setTime] = useAudio();
  const [contents, setContents] = useState([]);
  const [index, setIndex] = useState();

  const timings = parseTimings(children);

  useEffect(() => {
    const container = ref.current.parentNode.parentNode.parentNode;
    const siblings = Array.from(container.children);

    setContents(siblings);
    validatePrefixes(siblings);

    const listeners = playbackListeners(siblings, "click");
    return () => listeners.forEach(l => removeEventListener("click", l));
  }, []);

  const validatePrefixes = (contents) => {
    for (let i = 0; i < timings.length && i < contents.length; i += 1) {
      const timing = timings[i];
      const content = contents[i];

      const actual = content.innerText;
      const expected = timing.expected;

      if (!actual.startsWith(expected)) {
        throw new Error(`expected '${expected}' at the start of '${actual}'`);
      }
    }
  };

  const playbackListeners = (contents, type) => (
    contents.map((c, i) => (
      c.addEventListener(type, (event) => {
        const audio = ref.current;

        if (audio.paused) return;
        if (event.target.tagName.toLowerCase() === "a") return;
        if (getSelection().toString().length > 0) return;

        setTime(timings[i].time);
      })
    ))
  );

  const highlightCurrent = () => {
    const playback = getTime();

    let current;
    for (let i = 0; i < timings.length; i += 1) {
      if (timings[i].skip) continue;
      if (timings[i].time > playback) break;

      current = i;
    }

    if (current !== index) {
      setClass(contents[index], "being_narrated", false);
      setClass(contents[current], "being_narrated", true);

      setIndex(current);
    }
  };

  const addHoverHighlights = () => {
    contents.forEach((c, i) => {
      if (timings[i] && !timings[i].skip) {
        setClass(c, "narratable", true);
      }
    });
  };

  const removeHighlights = () => {
    contents.forEach(c => {
      setClass(c, "being_narrated", false);
      setClass(c, "narratable", false);
    });

    setIndex(null);
  };

  return (
    <div className={css.narration}>
      <div className={css.inner}>
        <span className={css.text} onClick={() => ref.current.play()}>
          Listen:
        </span>

        <audio className={css.audio} ref={ref} src={src} controls controlsList="nodownload"
          onTimeUpdate={highlightCurrent}
          onPlay={addHoverHighlights}
          onPause={removeHighlights} />
      </div>

      <span className={css.info}>
        Narrated by the author, available as a
        {" "} <a href="/coming-soon" target="_blank">podcast</a>.
      </span>
    </div>
  );
};

export default Narration;
