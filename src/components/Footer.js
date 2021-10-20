import common from "../styles/common";
import footer from "../styles/footer";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../routing/routes";

import getYear from "date-fns/getYear";

const links = [
  {
    text: "Ochrona danych osobowych",
    url: routes.PERSONAL_DATA_PROTECTION,
  },
  {
    text: "Polityka prywatności",
    url: routes.PRIVACY_POLICY,
  },
];

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
      {links.map((link) => {
        return (
          <Link
            component={RouterLink}
            to={link.url}
            key={link.text}
            color="inherit"
            underline="none"
          >
            {link.text}
          </Link>
        );
      })}
    </Grid>
  );
};

export default Footer;
