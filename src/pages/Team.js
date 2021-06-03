import { Box, Grid } from "@material-ui/core/";
import TeamMemberList from "../components/TeamMemberList";

import useMyStyles from "../styles/MyStyles";

const Team = () => {
  const classes = useMyStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Box
        width="90%"
        background="#D8DDE1"
        border="1px solid black"
        p="0 1rem 1rem 1rem"
        align="center"
        className={classes.lightGray}
      >
        <h2 align="center">NASI SPECJALIŚCI</h2>
        <TeamMemberList />
      </Box>
    </Grid>
  );
};

export default Team;
