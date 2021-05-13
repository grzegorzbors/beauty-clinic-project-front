import Layout from "./layouts/Layout";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
require("dotenv").config();

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
};

export default App;