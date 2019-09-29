import Head from "next/head";
import NavBar from "../nav_bar";
import Footer from "../footer";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>

  <div className={css.layout}>
    <NavBar />

    <div className={css.content}>
      {children}
    </div>

    <NavBar />
  </div>

  <Footer />
</>;

export default Layout;
