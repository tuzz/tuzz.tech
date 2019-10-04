import Head from "next/head";
import Analytics from "../analytics";
import NavBar from "../nav_bar";
import Footer from "../footer";
import ExternalLinks from "../external_links";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children, title, navigation }) => <>
  <Analytics />

  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} - tuzz.tech</title>
  </Head>

  <div className={css.layout}>
    <div className={css.content}>
      <NavBar navigation={navigation} />

      {children}

      <NavBar navigation={navigation} />
    </div>
  </div>

  <Footer />

  <ExternalLinks />
</>;

export default Layout;
