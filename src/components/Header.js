import Logo from "./Logo";
import Navbar from "./Navbar";
import useMyStyles from "../styles/MyStyles";

const Header = () => {
  const classes = useMyStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;