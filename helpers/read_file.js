import dedent from "dedent";
import findIndexes from "./find_indexes";

const readFile = (path, marker) => {
  const content = require(`!!raw-loader!../${path}`).default;

  return marker ? selectWithin(marker, content) : content;
}

const selectWithin = (marker, content) => {
  const lines = content.split("\n");
  const [a, b] = findIndexes(2, lines, l => l.includes(marker));

  const selection = lines.slice(a + 1, b);
  const indented = selection.map(l => ` ${l}`);

  return dedent(indented.join("\n"));
}

export default readFile;
