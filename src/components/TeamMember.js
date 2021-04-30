import { Card, CardContent, Typography } from "@material-ui/core/";
import useMyStyles from "../styles/MyStyles";
import { spacing } from '@material-ui/system';

const TeamMember = (props) => {
  const classes = useMyStyles();

  return (
    <Card key={props.id} className={classes.card__teamMember}>
      <CardContent className={classes.cardContent__teamMember}>
        <Typography gutterBottom variant="h5" component="h5">
          {`${props.firstName} ${props.lastName}`}
        </Typography>
        <Typography>
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
