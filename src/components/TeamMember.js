import { Box, Card, CardContent, Typography } from "@material-ui/core/";
import teamPage from "../styles/teamPage";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const TeamMember = ({userData: { id, firstName, lastName, url, description}}) => {
  const teamPageStyles = teamPage();
  return (
    <Card key={id} variant="outlined" style={{ marginBottom: ".2rem" }}>
      <CardContent className={teamPageStyles.TeamMember__mainWrapper}>
        <Box className={teamPageStyles.TeamMember__contentWrapper}>
          <h2 className={teamPageStyles.TeamMember__name}>
              <AccountCircleSharpIcon color="primary" />
              {`${firstName} ${lastName}`}
          </h2>
          <img className={teamPageStyles.TeamMember__img} src={url} alt="Specialist" />
        </Box>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;