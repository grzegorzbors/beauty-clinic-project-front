import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import header from "../styles/header";
import { routes } from "../routing/routes";
import { Box } from "@material-ui/core";

const Logo = () => {
  const headerStyles = header();

  return (
    <Link to={routes.HOME}>
      <Box className={headerStyles.logoContainer}>
        <img src={logoImg} alt="logo" className={headerStyles.logo} />
      </Box>
    </Link>
  );
};

export default Logo;
