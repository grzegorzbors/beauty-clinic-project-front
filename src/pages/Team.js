import { Grid } from "@material-ui/core/";
import TeamMemberList from "../components/TeamMemberList";

const Team = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 align="center">Nasi Specjaliści</h2>
      <TeamMemberList />
    </Grid>
  );
};

export default Team;
