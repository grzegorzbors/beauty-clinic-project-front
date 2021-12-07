import common from "../styles/common";
import footer from "../styles/footer";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { routes } from "../routing/routes";

import getYear from "date-fns/getYear";

const currentYear = getYear(new Date());

const Footer = () => {
  const commonStyles = common();
  const footerStyles = footer();

  return (
    <Grid
      container
      className={`${commonStyles.grayColor} ${commonStyles.evenlySpaced} ${footerStyles.footer}`}
    >
      Copyright {currentYear} &copy;
      <Link
        component={NavLink}
        to={routes.PRIVACY_POLICY}
        color="inherit"
        underline="none"
        activeClassName={commonStyles.activeLink}
      >
        Polityka Prywatności
      </Link>
    </Grid>
  );
};

export default Footer;
