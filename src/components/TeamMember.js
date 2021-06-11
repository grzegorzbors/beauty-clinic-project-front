import { Box, Card, CardContent, Typography } from "@material-ui/core/";
import useMyStyles from "../styles/MyStyles";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const TeamMember = (props) => {
  const classes = useMyStyles();
  const { id, firstName, lastName, url, description } = props.userData;

  return (
    <Card key={id} variant="outlined" style={{ marginBottom: ".2rem" }}>
      <CardContent className={classes.TeamMember__mainWrapper}>
        <Box className={classes.TeamMember__contentWrapper}>
          <h2>
            <p className={classes.TeamMember__name}>
              <AccountCircleSharpIcon color="primary" />
              {""}
              {`${firstName} ${lastName}`}
            </p>
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