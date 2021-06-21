import header from "../styles/header";

const Logo = () => {
  const headerStyles = header();

  return <div className={headerStyles.logo}>Logo</div>;
}

export default Logo;