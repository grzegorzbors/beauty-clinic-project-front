import Logo from "./Logo";
import Navbar from "./Navbar";
import header from "../styles/header";

const Header = () => {
  const headerStyles = header();
  return (
    <div className={headerStyles.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;