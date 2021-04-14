import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
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