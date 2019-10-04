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
    <Renderer Prism={Prism} code={children.trim()} language={language}>
      {inline ? renderCode : renderBlock }
    </Renderer>
  )
};

Highlight.Markdown = ({ children }) => {
  const components = {
    pre: props => <div {...props} />,
    code: props => <Highlight {...props} inline={false} />,
    inlineCode: props => <Highlight {...props} inline={true} />,
  }

  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
};

Highlight.languageNames = Object.keys(Prism.languages)
  .filter(k => typeof Prism.languages[k] === "object");

Highlight.languages = Highlight.languageNames
  .reduce((obj, n) => ({...obj, [n]: Prism.languages[n] }), {});

export default Highlight;
