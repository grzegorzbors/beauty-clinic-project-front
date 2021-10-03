import { Container } from "@material-ui/core";
import AppRouting from "../components/AppRouting";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <div style={{ minHeight: "100%" }}> */}
      <AppRouting />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Layout;
