import { Home, About, Services, Team, Appointment, FAQ, Contact, PersDataProt, PrivacyPolicy } from "../pages/index";

import { Switch, Route } from "react-router-dom";
import { routes } from "../routing/routes";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.SERVICES} component={Services} />
        <Route path={routes.TEAM} component={Team} />
        <Route path={routes.APPOINTMENT} component={Appointment} />
        <Route path={routes.FAQ} component={FAQ} />
        <Route path={routes.CONTACT} component={Contact} />
        <Route path={routes.PERSONAL_DATA_PROTECTION} component={PersDataProt} />
        <Route path={routes.PRIVACY_POLICY} component={PrivacyPolicy} />
      </Switch>
    </>
  );
};

export default Content;
