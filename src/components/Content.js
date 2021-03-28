import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Appointment from "../pages/Appointment";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import PersDataProt from "../pages/PersDataProt";

function Content() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/team" component={Team} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route path="/personal_data_protection" component={PersDataProt} />

        <Route path="/privacy_policy" component={PrivacyPolicy} />
      </Switch>
    </>
  );
}

export default Content;