import { Grid } from "@material-ui/core/";
import TeamMemberList from "../components/TeamMemberList";
import common from "../styles/common";

const Team = () => {
  const classesCommon = common();

  return (
    <Grid container className={classesCommon.pageFlexColumnLayout}>
      <h1>Nasi Specjaliści</h1>
      <TeamMemberList />
    </Grid>
  );
};

export default Team;
