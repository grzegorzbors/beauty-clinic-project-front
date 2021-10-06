import { routes } from "../../routing/routes";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

// zrobić komponent links ze wszystkim
const links = [
  {
    text: "O nas",
    url: routes.ABOUT,
  },
  {
    text: "Usługi",
    url: routes.SERVICES,
  },
  {
    text: "Nasz zespół",
    url: routes.TEAM,
  },
  {
    text: "Umów wizytę",
    url: routes.APPOINTMENT,
  },
  {
    text: "FAQ",
    url: routes.FAQ,
  },
  {
    text: "Kontakt",
    url: routes.CONTACT,
  },
];
const NavLinks = () => {
  return links.map((link) => {
    return (
      <Link
        component={RouterLink}
        to={link.url}
        color="inherit"
        underline="none"
        key={link.text}
      >
        {link.text}
      </Link>
    );
  });
};

export default NavLinks;
