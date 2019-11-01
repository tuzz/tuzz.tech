import { getOptions } from "loader-utils";
import dedent from "dedent";
import findIndexes from "../helpers/find_indexes";

export default function read(source) {
  const { marker } = getOptions(this) || {};
  const selection = marker ? selectWithin(marker, source) : source;

  const json = JSON.stringify(selection)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return `export default ${json}`;
}

const selectWithin = (marker, source) => {
  const lines = source.split("\n");
  const [a, b] = findIndexes(2, lines, (l) => matches(marker, l));

  if (typeof a === "undefined") {
    throw new Error(`Could not find '${marker}'`);
  }

  const selection = lines.slice(a + 1, b);
  const dedented = dedent(selection.map(l => ` ${l}`).join("\n"));

  if (dedented === "") {
    throw new Error(`Selection empty for '${marker}'`);
  }

  return dedented;
}

// If the marker appears in the same file as where it's used, skip past that.
const matches = (marker, line) => {
  return line.includes(marker) && !line.includes(`"${marker}"`);
};
