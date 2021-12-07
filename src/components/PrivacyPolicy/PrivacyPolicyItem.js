import { ListItem, Typography } from "@material-ui/core";

const PrivacyPolicyItem = ({ privacyPolicyText }) => {
  return (
    <ListItem>
      <Typography variant="body1" align="justify">
        {privacyPolicyText}
      </Typography>
    </ListItem>
  );
};

export default PrivacyPolicyItem;
