import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Header />
        <Content />
        <Footer />
    </>
  );
};

export default Layout;