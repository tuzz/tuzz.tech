import React from "react";
import { Head } from "react-static";

const Title = ({ children }) => (
  <Head>
    <title>{children} - tuzz.tech</title>
  </Head>
);

export default Title;
