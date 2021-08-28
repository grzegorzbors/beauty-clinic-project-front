import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";
import header from "../styles/header";
import { routes } from "../routing/routes";

const Logo = () => {
  const headerStyles = header();

  return (
    <Link to={routes.HOME}>
      <img src={logoImg} alt="logo" className={headerStyles.logo} />
    </Link>
  );
};

export default Logo;
