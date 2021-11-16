import { Grid } from "@material-ui/core";
import FAQItemsList from "../components/FAQ/FAQItemsList";
import common from "../styles/common";

const FAQ = () => {
  const classesCommon = common();

  return (
    <Grid container className={classesCommon.pageFlexColumnLayout}>
      <h1>FAQ</h1>
      <FAQItemsList />
    </Grid>
  );
};

export default FAQ;
