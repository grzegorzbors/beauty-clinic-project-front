import Logo from "./Logo";
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  header: {
    height: "20vh",
    width: "100%",
  },
}));


const Header = () => {
 const classes = useStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;