import { Grid } from "@material-ui/core/";
import TeamMemberList from "../components/TeamMemberList";

import common from "../styles/common";

const Team = () => {
  const classesCommon = common();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      className={classesCommon.lightGray}
    >
      <h2 align="center">Nasi Specjaliści</h2>
      <TeamMemberList />
    </Grid>
  );
};

export default Team;
