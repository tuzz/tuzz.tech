import React from "react";
import NavBar from "../nav_bar";

const Layout = ({ children, navigation }) => <>
  <NavBar navigation={navigation} />

  {children}

  <NavBar navigation={navigation} />
</>;

export default Layout;
