import { Box, Grid } from "@material-ui/core/";
import TeamMemberList from "../components/TeamMemberList";

import useMyStyles from "../styles/MyStyles";

const Team = () => {
  const classes = useMyStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.grid__Page}
    >
      <Box className={classes.box__Page}>
        <h2 align="center">NASI SPECJALIŚCI</h2>
        <TeamMemberList />
      </Box>
    </Grid>
  );
};

export default Team;