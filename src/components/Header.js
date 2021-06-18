import Logo from "./Logo";
import Navbar from "./Navbar";
import header from "../styles/header";

const Header = () => {
  const classesHeader = header();
  return (
    <div className={classesHeader.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;