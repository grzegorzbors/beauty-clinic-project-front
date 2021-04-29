import Container from "@material-ui/core/Container";
import TeamMemberList from "../components/TeamMemberList";

import useMyStyles from "../styles/MyStyles";

const Team = () => {
  const classes = useMyStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <h2 align="center">NASI SPECJALIŚCI</h2>
      <TeamMemberList />
    </Container>
  );
};

export default Team;
