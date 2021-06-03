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
  const { id, firstName, lastName, url, description} = props.userData;

  return (
    <Card
      key={id}
      className={classes.card__TeamMember}
      variant="outlined"
    >
      <CardContent className={classes.cardContent__TeamMember}>
        <Box className={classes.cardBox__TeamMember}>
          <h2 display="flex" alignitems="center">
            <Typography gutterBottom>
            <AccountCircleSharpIcon color="primary" />{" "}
            {`${firstName} ${lastName}`}
            </Typography>
          </h2>
          <img className={classes.teamMemberImage} src={url} alt="Specialist" />
        </Box>
        <Typography variant="body1" component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;