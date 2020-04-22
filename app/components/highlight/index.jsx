import React from "react";
import Renderer, { Prism } from "prism-react-renderer";
import extendPrism from "./extend_prism";
import { MDXProvider } from "@mdx-js/react"

import "./style.scss";

extendPrism(Prism);

const Highlight = ({ className, children, inline }) => {
  const language = (className || "").replace(/language-/, "") || "none";

  const renderToken = (hi) => (token, key) => (
    <span key={key} {...hi.getTokenProps({ token, key })} />
  );

  const renderLine = (hi) => (line, key) => (
    <span key={key} {...hi.getLineProps({ line, key })}>
      {line.map(renderToken(hi))}
    </span>
  );

  const renderCode = (hi) => (
    <code className={hi.className} style={hi.style}>
      {hi.tokens.map(renderLine(hi))}
    </code>
  );

  const renderBlock = (hi) => (
    <pre className={hi.className} style={hi.style}>
      {renderCode(hi)}
    </pre>
  );

  return (
    <Renderer Prism={Prism} code={children.trimRight()} language={language}>
      {inline ? renderCode : renderBlock }
    </Renderer>
  )
};

Highlight.languageNames = Object.keys(Prism.languages)
  .filter(k => typeof Prism.languages[k] === "object");

Highlight.languages = Highlight.languageNames
  .reduce((obj, n) => ({...obj, [n]: Prism.languages[n] }), {});

export default Highlight;
