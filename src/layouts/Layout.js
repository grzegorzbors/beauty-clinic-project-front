import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </>
  );
};

export default Layout;