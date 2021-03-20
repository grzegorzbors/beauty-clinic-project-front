import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;
