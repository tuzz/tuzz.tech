// Parses a time string (e.g. 03:07) into the number of seconds (e.g. 187)
const parseTime = (timeString) => (
  timeString.trim().split(":")
    .map(t => parseFloat(t))
    .reduce((acc, t) => acc * 60 + t)
);

// Parses a timing string (e.g. 03:07 some content) into text (e.g. some content)
const parseText = (timingString) => (
  timingString.trim().replace(/^[^ ]+/, "").trim()
);

// Parses timings into an array of objects:
const parseTimings = (timings) => (
  timings.trim().split(";")
    .map(t => t.trim().startsWith("skip")
      ? { expected: parseText(t), skip: true }
      : { expected: parseText(t), time: parseTime(t) }
    )
);

export default parseTimings;
export { parseTime, parseText };
