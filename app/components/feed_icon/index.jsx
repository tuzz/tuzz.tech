import React from "react";
import css from "./styles.scss";

const FeedIcon = () => (
  <a href="/feed.xml" target="_blank" className={css.feed_icon}>
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.429" cy="20.571" r="3.429" />
      <path d="m11.429 24h4.57c0-8.821-7.178-15.999-15.999-16v4.572c6.302.001 11.429 5.126 11.429 11.428z" />
      <path d="m24 24c0-13.234-10.766-24-24-24v4.571c10.714 0 19.43 8.714 19.43 19.429z" />
    </svg>
  </a>
);

export default FeedIcon;
