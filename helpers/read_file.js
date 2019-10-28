import dedent from "dedent";
import findIndexes from "./find_indexes";

const readFile = (path, marker) => {
  const content = require(`!!raw-loader!../${path}`).default;

  return marker ? selectWithin(marker, content, path) : content;
}

const selectWithin = (marker, content, path) => {
  const lines = content.split("\n");
  const [a, b] = findIndexes(2, lines, l => l.includes(marker));

  if (typeof a === "undefined") {
    throw new Error(`Could not find '${marker}' in ${path}`);
  }

  const selection = lines.slice(a + 1, b);
  const dedented = dedent(selection.map(l => ` ${l}`).join("\n"));

  if (dedented === "") {
    throw new Error(`Selection empty for '${marker}' in ${path}`);
  }

  return dedented;
}

export default readFile;
