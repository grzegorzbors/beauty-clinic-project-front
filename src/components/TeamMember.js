import { Box, Card, CardContent, Typography } from "@material-ui/core/";
import teamPage from "../styles/teamPage";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const TeamMember = ({userData: { id, firstName, lastName, url, description}}) => {
  const classes = teamPage();
  return (
    <Card key={id} variant="outlined" style={{ marginBottom: ".2rem" }}>
      <CardContent className={classes.TeamMember__mainWrapper}>
        <Box className={classes.TeamMember__contentWrapper}>
          <h2 className={classes.TeamMember__name}>
              <AccountCircleSharpIcon color="primary" />
              {`${firstName} ${lastName}`}
          </h2>
          <img className={classes.TeamMember__img} src={url} alt="Specialist" />
        </Box>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;