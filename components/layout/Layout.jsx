import NavBar from "../nav_bar";
import Footer from "../footer";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
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
