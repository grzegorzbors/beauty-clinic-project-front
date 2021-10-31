import { Grid } from "@material-ui/core/";
import TeamMemberList from "../components/TeamMemberList";

const Team = () => {
  return (
    <Grid
      container
      alignItems="center"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Nasi Specjaliści</h2>
      <TeamMemberList />
    </Grid>
  );
};

export default Team;
