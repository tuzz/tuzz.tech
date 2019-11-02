import React from "react";
import { Head } from "react-static";
import Analytics from "../analytics";
import NavBar from "../nav_bar";
import Markdown from "../markdown";
import Footer from "../footer";
import ExternalLinks from "../external_links";
import css from "./styles.scss";

const Layout = ({ children, title, navigation }) => <>
  <Analytics />

  <Head>
    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Source+Code+Pro:400,400i,700,700&display=swap" rel="stylesheet" />
    <link href="/styles/reset.css" rel="stylesheet" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Chris Patuzzo" />

    <title>{title} - tuzz.tech</title>
  </Head>

  <div className={css.layout}>
    <div className={css.content}>
      <NavBar navigation={navigation} />

      <Markdown>{children}</Markdown>

      <NavBar navigation={navigation} />
    </div>
  </div>

  <Footer />

  <ExternalLinks />
</>;

export default Layout;
