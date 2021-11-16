import { Grid } from "@material-ui/core";
import common from "../styles/common";

const PrivacyPolicy = () => {
  const classesCommon = common();

  return (
    <Grid container className={classesCommon.pageFlexColumnLayout}>
      <h1>Polityka Prywatności</h1>
    </Grid>
  );
};

export default PrivacyPolicy;
