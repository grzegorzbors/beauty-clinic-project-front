import Layout from "./layouts/Layout";
import Navbar from "./components/Header/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

require("dotenv").config();

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
};

export default App;
