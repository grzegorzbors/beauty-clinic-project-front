import AppRouting from "../components/AppRouting";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ flex: 1 }}>
        <AppRouting />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
