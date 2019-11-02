import React from "react";
import { MDXProvider } from "@mdx-js/react"
import Highlight from "../highlight";

const components = {
  pre: props => <div {...props} />,
  code: props => <Highlight {...props} inline={false} />,
  inlineCode: props => <Highlight {...props} inline={true} />,
}

const Markdown = ({ children }) => (
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
);

export default Markdown;
