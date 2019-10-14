import Head from "next/head";
import Analytics from "../analytics";
import NavBar from "../nav_bar";
import Highlight from "../highlight";
import Footer from "../footer";
import ExternalLinks from "../external_links";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children, title, navigation }) => <>
  <Analytics />

  <Head>
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,400i,700,700i&display=swap" rel="stylesheet" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Chris Patuzzo" />

    <title>{title} - tuzz.tech</title>
  </Head>

  <div className={css.layout}>
    <div className={css.content}>
      <NavBar navigation={navigation} />

      <Highlight.Markdown>
        {children}
      </Highlight.Markdown>

      <NavBar navigation={navigation} />
    </div>
  </div>

  <Footer />

  <ExternalLinks />
</>;

export default Layout;
