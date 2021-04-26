import useMyStyles from "../styles/MyStyles";

const Logo = () => {
  const classes = useMyStyles();

  return <div className={classes.logo}>Logo</div>;
}

export default Logo;