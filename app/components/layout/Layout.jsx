import React, { useEffect } from "react"
import { Head } from "react-static";
import ReactGA from "react-ga";

import Markdown from "../markdown";
import Footer from "../footer";
import NavBar from "../nav_bar";
import css from "./styles.scss";
import "../../../public/styles/reset.css";

const Layout = {};

Layout.Static = ({ children }) => {
  ReactGA.initialize("UA-148955810-1");

  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Source+Code+Pro:400,400i,700,700&display=swap" rel="stylesheet" />
      <link rel="alternate" type="application/rss+xml" title="tuzz.tech" href="/feed.xml" />
      <link rel="icon" href="data:;base64,iVBORw0KGgo=" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Chris Patuzzo" />
    </Head>

    <div className={css.layout}>
      <div className={css.content}>
        <Markdown>
          {children}
        </Markdown>
      </div>
    </div>

    <Footer />
  </>;
};

Layout.Dynamic = ({ location, children }) => {
  const { pathname, search } = location;
  const pageId = pathname + search;

  useEffect(() => window.scrollTo(0, 0), [pathname]);
  useEffect(() => { ReactGA.pageview(pageId); }, [pageId]);

  return children;
};

export default Layout;
