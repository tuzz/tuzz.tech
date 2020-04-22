import { MDXProvider } from "@mdx-js/react"

import Title from "../title";
import { H1, H2, H3 } from "../header";
import Anchor from "../anchor";
import Highlight from "../highlight";

const components = {
  title: props => <Title {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  a: props => <Anchor {...props} />,
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
