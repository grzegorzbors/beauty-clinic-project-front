import SocialItem from "./SocialItem";
import socialItemsConfig from "./socialItemsConfig";

const SocialItemsList = () => {
  return (
    <>
      {socialItemsConfig.map((item) => (
        <SocialItem
          key={item.socialIconType}
          text={item.text}
          linkHref={item.linkHref}
          linkColor={item.linkColor}
          socialIconType={item.socialIconType}
        />
      ))}
    </>
  );
};

export default SocialItemsList;
