import React from "react";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import about from "../../styles/about";

const SocialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

const SocialItem = ({ text, linkHref, linkColor, socialIconType }) => {
  const classesAbout = about();

  const socialIcon =
    typeof SocialIcons[socialIconType] !== "undefined" &&
    React.createElement(SocialIcons[socialIconType], {
      className: classesAbout.socialIcon,
    });

  return (
    <>
      <div className={classesAbout.socialItem}>
        <p>{text}</p>
        <a href={linkHref} style={{ color: linkColor }}>
          {socialIcon}
        </a>
      </div>
    </>
  );
};

export default SocialItem;
