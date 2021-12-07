import {
  Card,
  List,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import PrivacyPolicyItem from "./PrivacyPolicyItem";

import privacyPolicyConfig from "./privacyPolicyConfig";
import privacyPolicy from "../../styles/privacyPolicy";

const PrivacyPoliciesList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const classesPrivacyPolicy = privacyPolicy();

  const cardStyle = isMobile ? classesPrivacyPolicy.cardDesktop : "";

  const policiesList = privacyPolicyConfig.map(({ id, privacyPolicyText }) => (
    <PrivacyPolicyItem key={id} privacyPolicyText={privacyPolicyText} />
  ));

  return (
    <Card className={cardStyle}>
      <CardContent>
        <List className={classesPrivacyPolicy.list}>{policiesList}</List>
      </CardContent>
    </Card>
  );
};

export default PrivacyPoliciesList;
