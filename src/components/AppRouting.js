import * as Pages from "../pages";

import { Switch, Route } from "react-router-dom";
import { routes } from "../routing/routes";

const Content = () => {
  return (
    <Switch>
      <Route path={routes.HOME} exact component={Pages.Home} />
      <Route path={routes.ABOUT} component={Pages.About} />
      <Route path={routes.SERVICES} component={Pages.Services} />
      <Route path={routes.TEAM} component={Pages.Team} />
      <Route path={routes.APPOINTMENT} component={Pages.Appointment} />
      <Route path={routes.FAQ} component={Pages.FAQ} />
      <Route path={routes.CONTACT} component={Pages.Contact} />
      <Route path={routes.PERSONAL_DATA_PROTECTION} component={Pages.PersonalDataProtection} />
      <Route path={routes.PRIVACY_POLICY} component={Pages.PrivacyPolicy} />
    </Switch>
  );
};

export default Content;