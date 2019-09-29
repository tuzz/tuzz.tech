import Footer from "../footer";
import css from "./styles.scss";

import "./reset.scss";

const Layout = ({ children }) => <>
  <div className={css.layout}>
    <div className={css.content}>
      {children}
    </div>
  </div>

  <Footer />
</>;

export default Layout;
