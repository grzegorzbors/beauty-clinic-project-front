import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core/";
import useMyStyles from "../styles/MyStyles";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const TeamMember = (props) => {
  const classes = useMyStyles();

  return (
    <Card
      key={props.id}
      className={classes.card__TeamMember}
      variant="outlined"
    >
      <CardContent className={classes.cardContent__TeamMember}>
        <Box className={classes.cardBox__TeamMember}>
          <Typography gutterBottom variant="h5" component="h2">
            <AccountCircleSharpIcon color="primary" />{" "}
            {`${props.firstName} ${props.lastName}`}
          </Typography>
          <img className={classes.teamMemberImage} src={props.url} alt="Specialist" />
        </Box>
        <Typography variant="body1" component="p">{props.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;