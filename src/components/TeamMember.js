import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import useMyStyles from "../styles/MyStyles";
import teamMemberPic from "../assets/img/team-member-photo.png";
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
          <CardMedia
            component="img"
            alt="Specialist Picture"
            image={teamMemberPic}
            title={`${props.firstName} ${props.lastName}`}
          />
        </Box>
        <Typography variant="body1" component="p">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
